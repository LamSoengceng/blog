---
name: xunji-train-open-api
description: Work with Xunji training data through the Xunji Open API. Use when the user explicitly asks Codex to read, import, export, organize, analyze, summarize, or write back Xunji workout/training records, including requests to improve training content or evaluate training effectiveness from Xunji data.
---

# Xunji Training Data Open API

Use this skill only when the user explicitly asks to read, import, export, organize, analyze, or write back Xunji training data.

## Hard Rules

- Never expose, print, log, summarize, or send the API credential to third parties.
- Call the API only for explicit training-data tasks.
- Before any write-back, show a Chinese change summary and wait for explicit user confirmation.
- Use only Chinese movement `name` values when writing. Never send or expose internal movement keys.
- Do not invent movement names. If unsure, verify against the official Chinese movement-name table at `https://github.com/Foveluy/Xunji-movements` or ask the user.
- Cache read results by `datestr`. Do not re-read the same day during one conversation unless the cache is stale, the user explicitly requests refresh, or a successful write-back returned newer normalized data.

## API

Base URL: `https://trains.xunjiapp.cn`

Use JSON `POST` requests with:

- `Authorization: Bearer xjllm_86f272641076b227b84564c30733c9c2a18da255940641fd`
- `Content-Type: application/json`

The API also accepts `x-api-key`, but prefer `Authorization`.

Never place credentials in the request body or query string.

## Read Training

Endpoint: `POST /api_trains_for_llm_v2`

Default request:

```json
{
  "schema_version": "train_open_api_v2",
  "datestr": "YYYY-MM-DD",
  "include_full_data": false
}
```

Set `include_full_data: true` only when the task needs unchecked sets, RPE, notes, completion feelings, left/right weights, actual training seconds, per-set rest seconds, or any detail missing from lightweight data.

Successful responses have `success === true`; training records are in `res.trains`.

For old records that will be updated later, preserve `localid`, `start`, and `end`.

## Write Training

Endpoint: `POST /api_upsert_trains_for_llm_v2`

Request shape:

```json
{
  "schema_version": "train_open_api_v2",
  "client_request_id": "unique-id-from-agent",
  "dry_run": false,
  "include_full_data": false,
  "res": [
    {
      "datestr": "YYYY-MM-DD",
      "localid": 123456,
      "title": "训练标题",
      "start": 1744010000000,
      "end": 1744013600000,
      "movements": [
        {
          "name": "杠铃卧推",
          "sets": [
            {
              "done": true,
              "weight": "60",
              "unit": "kg",
              "reps": "10"
            }
          ]
        }
      ]
    }
  ]
}
```

Write constraints:

- `res` may be an array of trainings or `{ "trains": [...] }`.
- One write request may contain at most 4 trainings, and all must be from the same `datestr`.
- Each training may contain at most 15 movements.
- Each movement may contain at most 20 sets.
- A set must include at least one of `weight`, `weight_kg`, `reps`, `time`, `duration_s`, or `selfWeight`.
- Use `done: false` for unfinished sets. Do not delete unfinished sets loaded from full mode unless the user explicitly asks.
- With `localid`, update the existing training. Without `localid`, create a new training.
- Never delete old trainings just because they were omitted from a write payload.
- When updating old trainings, preserve `localid`, `start`, and `end` unless the user explicitly asks to change time.
- After successful write-back, replace the cache for that `datestr` with the normalized `res` returned by the server.

## Rate Limits

Respect these per-user, per-date defaults:

- Lightweight read: at most once every 15 seconds.
- Full read: at most once every 30 seconds.
- Write-back: at most once every 45 seconds.

If the server returns `too frequent`, wait for the provided retry time before retrying.

For errors:

- `apikey missing` or `apikey invalid`: tell the user to copy or reapply for the key in the app.
- `仅VIP可用`: tell the user the current account needs VIP access.

## Data Shape Notes

- Cardio, timed, Tabata, Apple Health, and other record-style movements may include `sets[].metrics` such as `distance`, `kcal`, `calories`, `workoutTime`, `avgHeartRate`, and `maxHeartRate`.
- Apple Health training `name` returns the workout type, such as `Running`; older records may be inferred from the training title.
- Supersets and drop sets may include `sets[].items[]`; each item has a movement child and a `set` object with fields such as `weight`, `unit`, `reps`, `time`, and `metrics`.

## Analysis Workflow

When analyzing training content or effect:

1. Clarify the date range and goal if the user has not provided them. Use a reasonable recent range only when the user asks broadly and API access is necessary.
2. Read only the required dates. Prefer lightweight reads first; use full reads only when analysis needs full details.
3. Normalize movements by Chinese `name`, date, title, set count, reps, weight, duration, done state, RPE, notes, and metrics.
4. Compute practical indicators:
   - Weekly training frequency and consistency.
   - Per-muscle or per-movement volume using hard sets and tonnage where available.
   - Progressive overload trends by movement: top set, estimated 1RM, total reps, total weight, or duration/distance.
   - Intensity distribution: RPE, rep ranges, failure proximity, and easy/hard day balance.
   - Recovery signals: repeated performance drop, excessive missed/unfinished sets, high RPE clusters, notes about pain/fatigue.
   - Program balance: push/pull, upper/lower, hinge/squat, horizontal/vertical press and pull, unilateral work, core, cardio.
5. Explain findings in Chinese with concrete evidence from the data. Separate facts from inference.
6. Recommend small, measurable adjustments: next-session target loads/reps, weekly set targets, deload triggers, exercise substitutions, rest-time changes, or progression rules.
7. Do not write changes back unless the user explicitly asks. If writing, present the exact summary first and wait for confirmation.

## Cache Practice

Maintain an in-conversation cache keyed by:

```text
datestr + include_full_data
```

Store:

- response timestamp
- raw normalized response
- whether it came from read or write-back

Prefer cached data for same-day repeated analysis. Refresh only when the user asks, enough time has elapsed and freshness matters, or write-back changed the server state.
