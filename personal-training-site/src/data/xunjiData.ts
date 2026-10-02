// 本文件由 scripts/sync-xunji.mjs 自动生成，请勿手改。
// 数据来源：训记 App Open API v2（真实训练记录），最后同步时间见 xunjiLastSyncedAt。
export type XunjiActivity = {
  date: string
  id?: string
  type: string
  source: string
  durationMin: number | null
  distanceKm: number | null
  kcal: number | null
  startIso?: string
}

export type XunjiDaySummary = {
  date: string
  sessions: number
  durationMin: number
  kcal: number
  distanceKm: number
  types: string[]
}

export const xunjiLastSyncedAt = "2026-10-02T13:45:50.105Z"

export const xunjiStaleDates: string[] = []

export const xunjiActivities: XunjiActivity[] = [
  {
    "date": "2026-09-11",
    "id": "1789133625700",
    "type": "背 二头",
    "source": "训记",
    "durationMin": 67,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-09-11T13:36:37.663Z"
  },
  {
    "date": "2026-09-09",
    "id": "1788953849571",
    "type": "臀 腿",
    "source": "训记",
    "durationMin": 47,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-09-09T11:37:47.805Z"
  },
  {
    "date": "2026-09-07",
    "id": "1788785384564",
    "type": "训练",
    "source": "训记",
    "durationMin": 29,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-09-07T12:50:59.339Z"
  },
  {
    "date": "2026-07-28",
    "id": "1785233223314",
    "type": "背 二头",
    "source": "训记",
    "durationMin": 36,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-07-28T10:07:14.459Z"
  },
  {
    "date": "2026-07-27",
    "id": "1785144938688",
    "type": "胸 三头",
    "source": "训记",
    "durationMin": 72,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-07-27T09:35:45.899Z"
  },
  {
    "date": "2026-07-24",
    "id": "1784876931224",
    "type": "胸 三头",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-07-24T07:08:55.039Z"
  },
  {
    "date": "2026-07-23",
    "id": "1784804397742",
    "type": "背 二头",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-07-23T11:00:07.213Z"
  },
  {
    "date": "2026-07-21",
    "id": "1784630382788",
    "type": "臀 腿",
    "source": "训记",
    "durationMin": 153,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-07-21T10:39:47.855Z"
  },
  {
    "date": "2026-07-20",
    "id": "1784551648727",
    "type": "背 二头",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-07-20T12:47:46.391Z"
  },
  {
    "date": "2026-07-19",
    "id": "1784463351024",
    "type": "胸 三头",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-07-19T12:15:57.195Z"
  },
  {
    "date": "2026-07-17",
    "id": "1784290038632",
    "type": "臀 腿",
    "source": "训记",
    "durationMin": 79,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-07-17T12:07:21.637Z"
  },
  {
    "date": "2026-07-16",
    "id": "1784196981747",
    "type": "背 二头",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-07-16T10:16:29.196Z"
  },
  {
    "date": "2026-07-15",
    "id": "1784122202178",
    "type": "胸 三头",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-07-15T13:30:10.386Z"
  },
  {
    "date": "2026-07-13",
    "id": "1783935522307",
    "type": "背 二头",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-07-13T09:38:48.790Z"
  },
  {
    "date": "2026-07-12",
    "id": "1783854862454",
    "type": "胸 三头",
    "source": "训记",
    "durationMin": 55,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-07-12T11:14:28.593Z"
  },
  {
    "date": "2026-07-02",
    "id": "1782962122152",
    "type": "胸 三头",
    "source": "训记",
    "durationMin": 78,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-07-02T03:15:26.602Z"
  },
  {
    "date": "2026-06-29",
    "id": "1782718708197",
    "type": "胸 三头",
    "source": "训记",
    "durationMin": 41,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-29T07:38:32.656Z"
  },
  {
    "date": "2026-06-28",
    "id": "1782653759481",
    "type": "臀 腿",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-28T13:36:02.980Z"
  },
  {
    "date": "2026-06-27",
    "id": "1782555672610",
    "type": "背 二头",
    "source": "训记",
    "durationMin": 130,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-27T10:21:19.381Z"
  },
  {
    "date": "2026-06-26",
    "id": "1782481979770",
    "type": "胸 三头",
    "source": "训记",
    "durationMin": 100,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-26T13:53:04.556Z"
  },
  {
    "date": "2026-06-24",
    "id": "1782279326305",
    "type": "臀 腿",
    "source": "训记",
    "durationMin": 67,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-24T05:35:30.654Z"
  },
  {
    "date": "2026-06-23",
    "id": "1782200846193",
    "type": "背 二头",
    "source": "训记",
    "durationMin": 3,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-23T07:47:48.579Z"
  },
  {
    "date": "2026-06-22",
    "id": "1782110250763",
    "type": "胸 三头",
    "source": "训记",
    "durationMin": 2,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-22T06:37:35.738Z"
  },
  {
    "date": "2026-06-21",
    "id": "1782032923284",
    "type": "臀 腿",
    "source": "训记",
    "durationMin": 60,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-21T09:08:49.686Z"
  },
  {
    "date": "2026-06-19",
    "id": "1781843391545",
    "type": "背 二头",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-19T04:29:55.278Z"
  },
  {
    "date": "2026-06-17",
    "id": "1781668755127",
    "type": "臀 腿",
    "source": "训记",
    "durationMin": 135,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-17T03:59:21.464Z"
  },
  {
    "date": "2026-06-16",
    "id": "1781583091068",
    "type": "胸 三头",
    "source": "训记",
    "durationMin": 135,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-16T04:11:35.542Z"
  },
  {
    "date": "2026-06-15",
    "id": "1781496119507",
    "type": "背 二头",
    "source": "训记",
    "durationMin": 145,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-15T04:02:03.538Z"
  },
  {
    "date": "2026-06-14",
    "id": "1781412648976",
    "type": "臀 腿",
    "source": "训记",
    "durationMin": 106,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-14T04:50:55.992Z"
  },
  {
    "date": "2026-06-13",
    "id": "1781323739112",
    "type": "胸 三头",
    "source": "训记",
    "durationMin": 137,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-13T04:09:03.960Z"
  },
  {
    "date": "2026-06-11",
    "id": "1781148735314",
    "type": "背 二头",
    "source": "训记",
    "durationMin": 112,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-11T03:32:20.107Z"
  },
  {
    "date": "2026-06-10",
    "id": "1781065038441",
    "type": "臀 腿",
    "source": "训记",
    "durationMin": 128,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-10T04:17:22.641Z"
  },
  {
    "date": "2026-06-09",
    "id": "1780978658690",
    "type": "胸 三头",
    "source": "训记",
    "durationMin": 183,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-09T04:17:44.536Z"
  },
  {
    "date": "2026-06-08",
    "id": "1780891989588",
    "type": "背 二头",
    "source": "训记",
    "durationMin": 117,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-08T04:13:12.306Z"
  },
  {
    "date": "2026-06-07",
    "id": "1780843663298",
    "type": "臀 腿",
    "source": "训记",
    "durationMin": 170,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-07T14:47:59.897Z"
  },
  {
    "date": "2026-06-05",
    "id": "1780632607290",
    "type": "胸 三头",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-05T04:10:21.729Z"
  },
  {
    "date": "2026-06-04",
    "id": "1780545066725",
    "type": "背 二头",
    "source": "训记",
    "durationMin": 159,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-04T03:51:12.667Z"
  },
  {
    "date": "2026-06-03",
    "id": "1780463529549",
    "type": "臀 腿",
    "source": "训记",
    "durationMin": 164,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-03T05:12:15.479Z"
  },
  {
    "date": "2026-06-02",
    "id": "1780373201352",
    "type": "胸 三头",
    "source": "训记",
    "durationMin": 166,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-02T04:06:46.371Z"
  },
  {
    "date": "2026-06-01",
    "id": "1780286011504",
    "type": "背 二头",
    "source": "训记",
    "durationMin": 123,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-06-01T03:53:55.479Z"
  },
  {
    "date": "2026-05-31",
    "id": "1780232968386",
    "type": "臀 腿",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-31T13:09:47.192Z"
  },
  {
    "date": "2026-05-30",
    "id": "1780117189705",
    "type": "胸 三头",
    "source": "训记",
    "durationMin": 202,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-30T04:59:56.562Z"
  },
  {
    "date": "2026-05-29",
    "id": "1780027856381",
    "type": "背 二头",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-29T04:11:02.817Z"
  },
  {
    "date": "2026-05-27",
    "id": "1779812568367",
    "type": "周三",
    "source": "训记",
    "durationMin": 218,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-27T04:14:51.151Z"
  },
  {
    "date": "2026-05-26",
    "id": "1779768035519",
    "type": "第一天 背和二头",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-26T04:00:52.529Z"
  },
  {
    "date": "2026-05-25",
    "id": "1779703171914",
    "type": "第二天 胸 三头",
    "source": "训记",
    "durationMin": 2,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-25T09:59:37.163Z"
  },
  {
    "date": "2026-05-24",
    "id": "1779609545761",
    "type": "第三天 肩 腿",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-24T07:59:14.852Z"
  },
  {
    "date": "2026-05-23",
    "id": "1779511954345",
    "type": "第一天 背和二头",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-23T04:52:40.244Z"
  },
  {
    "date": "2026-05-22",
    "id": "1779422317180",
    "type": "第二天 胸 三头",
    "source": "训记",
    "durationMin": 209,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-22T03:58:43.012Z"
  },
  {
    "date": "2026-05-20",
    "id": "1779248845761",
    "type": "第三天 肩 腿",
    "source": "训记",
    "durationMin": 145,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-20T03:47:33.183Z"
  },
  {
    "date": "2026-05-19",
    "id": "1779163434332",
    "type": "第二天 胸 三头",
    "source": "训记",
    "durationMin": 100,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-19T04:03:59.284Z"
  },
  {
    "date": "2026-05-18",
    "id": "1779076125391",
    "type": "第一天 背和二头",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-18T03:49:32.933Z"
  },
  {
    "date": "2026-05-17",
    "id": "1778992273338",
    "type": "第三天 肩 腿",
    "source": "训记",
    "durationMin": 136,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-17T04:31:24.852Z"
  },
  {
    "date": "2026-05-16",
    "id": "1778938206709",
    "type": "第二天 胸 三头",
    "source": "训记",
    "durationMin": 121,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-16T13:30:13.011Z"
  },
  {
    "date": "2026-05-15",
    "id": "1778818315436",
    "type": "第一天 背和二头",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-15T04:12:06.141Z"
  },
  {
    "date": "2026-05-13",
    "id": "1778644569486",
    "type": "第三天 肩 腿",
    "source": "训记",
    "durationMin": 164,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-13T03:56:14.615Z"
  },
  {
    "date": "2026-05-12",
    "id": "1778557789047",
    "type": "第一天 背和二头",
    "source": "训记",
    "durationMin": 186,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-12T03:50:20.141Z"
  },
  {
    "date": "2026-05-11",
    "id": "1778472127220",
    "type": "第二天 胸 三头",
    "source": "训记",
    "durationMin": 100,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-11T05:04:47.729Z"
  },
  {
    "date": "2026-05-10",
    "id": "1778387592508",
    "type": "第三天 肩 腿",
    "source": "训记",
    "durationMin": 124,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-10T04:33:24.507Z"
  },
  {
    "date": "2026-05-09",
    "id": "1778299180093",
    "type": "第二天 胸 三头",
    "source": "训记",
    "durationMin": 94,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-09T03:59:44.235Z"
  },
  {
    "date": "2026-05-08",
    "id": "1778212042520",
    "type": "第一天 背和二头",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-08T03:47:35.946Z"
  },
  {
    "date": "2026-05-07",
    "id": "1778125614383",
    "type": "第三天 肩 腿",
    "source": "训记",
    "durationMin": 126,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-07T03:47:00.116Z"
  },
  {
    "date": "2026-05-06",
    "id": "1778040750827",
    "type": "第一天 背和二头",
    "source": "训记",
    "durationMin": 106,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-06T04:12:35.096Z"
  },
  {
    "date": "2026-05-05",
    "id": "1777968996016",
    "type": "第二天 胸 三头",
    "source": "训记",
    "durationMin": 101,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-05T08:16:42.298Z"
  },
  {
    "date": "2026-05-03",
    "id": "1777787410347",
    "type": "第三天 肩 腿",
    "source": "训记",
    "durationMin": 82,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-03T05:51:34.886Z"
  },
  {
    "date": "2026-05-02",
    "id": "1777697867730",
    "type": "第二天 胸 三头",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-02T04:57:55.513Z"
  },
  {
    "date": "2026-05-01",
    "id": "1777608927146",
    "type": "第一天 背和二头",
    "source": "训记",
    "durationMin": 89,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-05-01T04:15:34.039Z"
  },
  {
    "date": "2026-04-29",
    "id": "1777437776576",
    "type": "第三天 肩 腿",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-04-29T04:43:11.181Z"
  },
  {
    "date": "2026-04-28",
    "id": "1777367050802",
    "type": "第二天 胸 三头",
    "source": "训记",
    "durationMin": 147,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-04-28T09:21:04.306Z"
  },
  {
    "date": "2026-04-26",
    "id": "1777175567074",
    "type": "第三天 肩 腿",
    "source": "训记",
    "durationMin": 113,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-04-26T03:52:53.289Z"
  },
  {
    "date": "2026-04-25",
    "id": "1777088098405",
    "type": "第二天 胸 三头",
    "source": "训记",
    "durationMin": 69,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-04-25T03:35:04.517Z"
  },
  {
    "date": "2026-04-24",
    "id": "1777003816924",
    "type": "第一天 背和二头",
    "source": "训记",
    "durationMin": 71,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-04-24T04:12:31.221Z"
  },
  {
    "date": "2026-04-23",
    "id": "1776916794516",
    "type": "第三天 肩 腿",
    "source": "训记",
    "durationMin": 129,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-04-23T04:00:14.272Z"
  },
  {
    "date": "2026-04-22",
    "id": "1776836017329",
    "type": "第二天 胸 三头",
    "source": "训记",
    "durationMin": 1,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-04-22T05:33:57.290Z"
  },
  {
    "date": "2026-04-21",
    "id": "1776745444893",
    "type": "第一天 背和二头",
    "source": "训记",
    "durationMin": 80,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-04-21T04:24:07.830Z"
  },
  {
    "date": "2026-04-19",
    "id": "1776572355043",
    "type": "第三天 肩 腿",
    "source": "训记",
    "durationMin": 130,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-04-19T04:19:26.938Z"
  },
  {
    "date": "2026-04-18",
    "id": "1776488340158",
    "type": "第二天 胸 三头",
    "source": "训记",
    "durationMin": 78,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-04-18T04:59:03.646Z"
  },
  {
    "date": "2026-04-17",
    "id": "1776392702338",
    "type": "第一天 背和二头",
    "source": "训记",
    "durationMin": 93,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-04-17T02:25:22.853Z"
  },
  {
    "date": "2026-04-14",
    "id": "1776304404593",
    "type": "游泳",
    "source": "训记",
    "durationMin": 30,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-04-16T01:23:24.589Z"
  },
  {
    "date": "2026-04-15",
    "id": "1776227281897",
    "type": "第三天 肩 腿",
    "source": "训记",
    "durationMin": 113,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-04-15T04:28:11.165Z"
  },
  {
    "date": "2026-04-14",
    "id": "1776141932173",
    "type": "第二天 胸 三头",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-04-14T04:45:37.070Z"
  },
  {
    "date": "2026-04-13",
    "id": "1776053411383",
    "type": "第一天 背和二头",
    "source": "训记",
    "durationMin": 92,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-04-13T04:11:50.525Z"
  },
  {
    "date": "2026-04-11",
    "id": "1775882060977",
    "type": "第三天 肩 腿",
    "source": "训记",
    "durationMin": 61,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-04-11T04:35:24.325Z"
  },
  {
    "date": "2026-04-10",
    "id": "1775791043796",
    "type": "第二天 胸 三头",
    "source": "训记",
    "durationMin": 190,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-04-10T03:17:38.744Z"
  },
  {
    "date": "2026-04-09",
    "id": "1775707661075",
    "type": "第一天 背和二头",
    "source": "训记",
    "durationMin": 59,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-04-09T04:07:46.388Z"
  },
  {
    "date": "2026-04-03",
    "id": "1775539895263",
    "type": "第三天 肩 腿",
    "source": "训记",
    "durationMin": 1,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-04-07T05:31:48.262Z"
  },
  {
    "date": "2026-04-07",
    "id": "1775538906246",
    "type": "第三天 肩 腿",
    "source": "训记",
    "durationMin": 16,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-04-07T05:15:12.777Z"
  },
  {
    "date": "2026-04-06",
    "id": "1775449912306",
    "type": "第二天 胸 三头",
    "source": "训记",
    "durationMin": 41,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-04-06T04:31:56.391Z"
  },
  {
    "date": "2026-04-05",
    "id": "1775387451503",
    "type": "第一天 背和二头",
    "source": "训记",
    "durationMin": 67,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-04-05T11:10:54.991Z"
  },
  {
    "date": "2026-03-31",
    "id": "1774934010187",
    "type": "第三天 肩 腿",
    "source": "训记",
    "durationMin": 54,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-03-31T05:14:02.839Z"
  },
  {
    "date": "2026-03-30",
    "id": "1774846617294",
    "type": "第二天 胸 三头",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-03-30T04:57:26.757Z"
  },
  {
    "date": "2026-03-29",
    "id": "1774763181851",
    "type": "第一天 背和二头",
    "source": "训记",
    "durationMin": 94,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-03-29T05:46:29.840Z"
  },
  {
    "date": "2026-03-27",
    "id": "1774619747544",
    "type": "第三天 肩 腿",
    "source": "训记",
    "durationMin": 60,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-03-27T14:21:32.033Z"
  },
  {
    "date": "2026-03-26",
    "id": "1774532733218",
    "type": "第二天 胸 三头",
    "source": "训记",
    "durationMin": 57,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-03-26T13:45:43.119Z"
  },
  {
    "date": "2026-03-25",
    "id": "1774446830595",
    "type": "第一天 背和二头",
    "source": "训记",
    "durationMin": 99,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-03-25T13:53:56.945Z"
  },
  {
    "date": "2026-03-23",
    "id": "1774276173564",
    "type": "第三天 肩 腿",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-03-23T14:30:19.610Z"
  },
  {
    "date": "2026-03-22",
    "id": "1774187871433",
    "type": "第二天 胸 三头",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-03-22T13:58:02.657Z"
  },
  {
    "date": "2026-03-21",
    "id": "1774103737143",
    "type": "第一天 背和二头",
    "source": "训记",
    "durationMin": 219,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-03-21T14:49:05.455Z"
  },
  {
    "date": "2026-03-18",
    "id": "1773801252207",
    "type": "第三天 肩 腿",
    "source": "训记",
    "durationMin": 128,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-03-18T03:15:09.063Z"
  },
  {
    "date": "2026-03-17",
    "id": "1773716199629",
    "type": "第二天 胸 三头",
    "source": "训记",
    "durationMin": 45,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-03-17T03:06:42.159Z"
  },
  {
    "date": "2026-03-16",
    "id": "1773633128930",
    "type": "第一天 背和二头",
    "source": "训记",
    "durationMin": null,
    "distanceKm": null,
    "kcal": null,
    "startIso": "2026-03-16T03:53:52.668Z"
  }
]

export const xunjiDaySummaries: XunjiDaySummary[] = [
  {
    "date": "2026-09-11",
    "sessions": 1,
    "durationMin": 67,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "背 二头"
    ]
  },
  {
    "date": "2026-09-09",
    "sessions": 1,
    "durationMin": 47,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "臀 腿"
    ]
  },
  {
    "date": "2026-09-07",
    "sessions": 1,
    "durationMin": 29,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "训练"
    ]
  },
  {
    "date": "2026-07-28",
    "sessions": 1,
    "durationMin": 36,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "背 二头"
    ]
  },
  {
    "date": "2026-07-27",
    "sessions": 1,
    "durationMin": 72,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "胸 三头"
    ]
  },
  {
    "date": "2026-07-24",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "胸 三头"
    ]
  },
  {
    "date": "2026-07-23",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "背 二头"
    ]
  },
  {
    "date": "2026-07-21",
    "sessions": 1,
    "durationMin": 153,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "臀 腿"
    ]
  },
  {
    "date": "2026-07-20",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "背 二头"
    ]
  },
  {
    "date": "2026-07-19",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "胸 三头"
    ]
  },
  {
    "date": "2026-07-17",
    "sessions": 1,
    "durationMin": 79,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "臀 腿"
    ]
  },
  {
    "date": "2026-07-16",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "背 二头"
    ]
  },
  {
    "date": "2026-07-15",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "胸 三头"
    ]
  },
  {
    "date": "2026-07-13",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "背 二头"
    ]
  },
  {
    "date": "2026-07-12",
    "sessions": 1,
    "durationMin": 55,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "胸 三头"
    ]
  },
  {
    "date": "2026-07-02",
    "sessions": 1,
    "durationMin": 78,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "胸 三头"
    ]
  },
  {
    "date": "2026-06-29",
    "sessions": 1,
    "durationMin": 41,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "胸 三头"
    ]
  },
  {
    "date": "2026-06-28",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "臀 腿"
    ]
  },
  {
    "date": "2026-06-27",
    "sessions": 1,
    "durationMin": 130,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "背 二头"
    ]
  },
  {
    "date": "2026-06-26",
    "sessions": 1,
    "durationMin": 100,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "胸 三头"
    ]
  },
  {
    "date": "2026-06-24",
    "sessions": 1,
    "durationMin": 67,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "臀 腿"
    ]
  },
  {
    "date": "2026-06-23",
    "sessions": 1,
    "durationMin": 3,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "背 二头"
    ]
  },
  {
    "date": "2026-06-22",
    "sessions": 1,
    "durationMin": 2,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "胸 三头"
    ]
  },
  {
    "date": "2026-06-21",
    "sessions": 1,
    "durationMin": 60,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "臀 腿"
    ]
  },
  {
    "date": "2026-06-19",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "背 二头"
    ]
  },
  {
    "date": "2026-06-17",
    "sessions": 1,
    "durationMin": 135,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "臀 腿"
    ]
  },
  {
    "date": "2026-06-16",
    "sessions": 1,
    "durationMin": 135,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "胸 三头"
    ]
  },
  {
    "date": "2026-06-15",
    "sessions": 1,
    "durationMin": 145,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "背 二头"
    ]
  },
  {
    "date": "2026-06-14",
    "sessions": 1,
    "durationMin": 106,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "臀 腿"
    ]
  },
  {
    "date": "2026-06-13",
    "sessions": 1,
    "durationMin": 137,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "胸 三头"
    ]
  },
  {
    "date": "2026-06-11",
    "sessions": 1,
    "durationMin": 112,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "背 二头"
    ]
  },
  {
    "date": "2026-06-10",
    "sessions": 1,
    "durationMin": 128,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "臀 腿"
    ]
  },
  {
    "date": "2026-06-09",
    "sessions": 1,
    "durationMin": 183,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "胸 三头"
    ]
  },
  {
    "date": "2026-06-08",
    "sessions": 1,
    "durationMin": 117,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "背 二头"
    ]
  },
  {
    "date": "2026-06-07",
    "sessions": 1,
    "durationMin": 170,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "臀 腿"
    ]
  },
  {
    "date": "2026-06-05",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "胸 三头"
    ]
  },
  {
    "date": "2026-06-04",
    "sessions": 1,
    "durationMin": 159,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "背 二头"
    ]
  },
  {
    "date": "2026-06-03",
    "sessions": 1,
    "durationMin": 164,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "臀 腿"
    ]
  },
  {
    "date": "2026-06-02",
    "sessions": 1,
    "durationMin": 166,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "胸 三头"
    ]
  },
  {
    "date": "2026-06-01",
    "sessions": 1,
    "durationMin": 123,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "背 二头"
    ]
  },
  {
    "date": "2026-05-31",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "臀 腿"
    ]
  },
  {
    "date": "2026-05-30",
    "sessions": 1,
    "durationMin": 202,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "胸 三头"
    ]
  },
  {
    "date": "2026-05-29",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "背 二头"
    ]
  },
  {
    "date": "2026-05-27",
    "sessions": 1,
    "durationMin": 218,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "周三"
    ]
  },
  {
    "date": "2026-05-26",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第一天 背和二头"
    ]
  },
  {
    "date": "2026-05-25",
    "sessions": 1,
    "durationMin": 2,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第二天 胸 三头"
    ]
  },
  {
    "date": "2026-05-24",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第三天 肩 腿"
    ]
  },
  {
    "date": "2026-05-23",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第一天 背和二头"
    ]
  },
  {
    "date": "2026-05-22",
    "sessions": 1,
    "durationMin": 209,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第二天 胸 三头"
    ]
  },
  {
    "date": "2026-05-20",
    "sessions": 1,
    "durationMin": 145,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第三天 肩 腿"
    ]
  },
  {
    "date": "2026-05-19",
    "sessions": 1,
    "durationMin": 100,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第二天 胸 三头"
    ]
  },
  {
    "date": "2026-05-18",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第一天 背和二头"
    ]
  },
  {
    "date": "2026-05-17",
    "sessions": 1,
    "durationMin": 136,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第三天 肩 腿"
    ]
  },
  {
    "date": "2026-05-16",
    "sessions": 1,
    "durationMin": 121,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第二天 胸 三头"
    ]
  },
  {
    "date": "2026-05-15",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第一天 背和二头"
    ]
  },
  {
    "date": "2026-05-13",
    "sessions": 1,
    "durationMin": 164,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第三天 肩 腿"
    ]
  },
  {
    "date": "2026-05-12",
    "sessions": 1,
    "durationMin": 186,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第一天 背和二头"
    ]
  },
  {
    "date": "2026-05-11",
    "sessions": 1,
    "durationMin": 100,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第二天 胸 三头"
    ]
  },
  {
    "date": "2026-05-10",
    "sessions": 1,
    "durationMin": 124,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第三天 肩 腿"
    ]
  },
  {
    "date": "2026-05-09",
    "sessions": 1,
    "durationMin": 94,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第二天 胸 三头"
    ]
  },
  {
    "date": "2026-05-08",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第一天 背和二头"
    ]
  },
  {
    "date": "2026-05-07",
    "sessions": 1,
    "durationMin": 126,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第三天 肩 腿"
    ]
  },
  {
    "date": "2026-05-06",
    "sessions": 1,
    "durationMin": 106,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第一天 背和二头"
    ]
  },
  {
    "date": "2026-05-05",
    "sessions": 1,
    "durationMin": 101,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第二天 胸 三头"
    ]
  },
  {
    "date": "2026-05-03",
    "sessions": 1,
    "durationMin": 82,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第三天 肩 腿"
    ]
  },
  {
    "date": "2026-05-02",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第二天 胸 三头"
    ]
  },
  {
    "date": "2026-05-01",
    "sessions": 1,
    "durationMin": 89,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第一天 背和二头"
    ]
  },
  {
    "date": "2026-04-29",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第三天 肩 腿"
    ]
  },
  {
    "date": "2026-04-28",
    "sessions": 1,
    "durationMin": 147,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第二天 胸 三头"
    ]
  },
  {
    "date": "2026-04-26",
    "sessions": 1,
    "durationMin": 113,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第三天 肩 腿"
    ]
  },
  {
    "date": "2026-04-25",
    "sessions": 1,
    "durationMin": 69,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第二天 胸 三头"
    ]
  },
  {
    "date": "2026-04-24",
    "sessions": 1,
    "durationMin": 71,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第一天 背和二头"
    ]
  },
  {
    "date": "2026-04-23",
    "sessions": 1,
    "durationMin": 129,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第三天 肩 腿"
    ]
  },
  {
    "date": "2026-04-22",
    "sessions": 1,
    "durationMin": 1,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第二天 胸 三头"
    ]
  },
  {
    "date": "2026-04-21",
    "sessions": 1,
    "durationMin": 80,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第一天 背和二头"
    ]
  },
  {
    "date": "2026-04-19",
    "sessions": 1,
    "durationMin": 130,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第三天 肩 腿"
    ]
  },
  {
    "date": "2026-04-18",
    "sessions": 1,
    "durationMin": 78,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第二天 胸 三头"
    ]
  },
  {
    "date": "2026-04-17",
    "sessions": 1,
    "durationMin": 93,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第一天 背和二头"
    ]
  },
  {
    "date": "2026-04-15",
    "sessions": 1,
    "durationMin": 113,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第三天 肩 腿"
    ]
  },
  {
    "date": "2026-04-14",
    "sessions": 2,
    "durationMin": 30,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "游泳",
      "第二天 胸 三头"
    ]
  },
  {
    "date": "2026-04-13",
    "sessions": 1,
    "durationMin": 92,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第一天 背和二头"
    ]
  },
  {
    "date": "2026-04-11",
    "sessions": 1,
    "durationMin": 61,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第三天 肩 腿"
    ]
  },
  {
    "date": "2026-04-10",
    "sessions": 1,
    "durationMin": 190,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第二天 胸 三头"
    ]
  },
  {
    "date": "2026-04-09",
    "sessions": 1,
    "durationMin": 59,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第一天 背和二头"
    ]
  },
  {
    "date": "2026-04-07",
    "sessions": 1,
    "durationMin": 16,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第三天 肩 腿"
    ]
  },
  {
    "date": "2026-04-06",
    "sessions": 1,
    "durationMin": 41,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第二天 胸 三头"
    ]
  },
  {
    "date": "2026-04-05",
    "sessions": 1,
    "durationMin": 67,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第一天 背和二头"
    ]
  },
  {
    "date": "2026-04-03",
    "sessions": 1,
    "durationMin": 1,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第三天 肩 腿"
    ]
  },
  {
    "date": "2026-03-31",
    "sessions": 1,
    "durationMin": 54,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第三天 肩 腿"
    ]
  },
  {
    "date": "2026-03-30",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第二天 胸 三头"
    ]
  },
  {
    "date": "2026-03-29",
    "sessions": 1,
    "durationMin": 94,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第一天 背和二头"
    ]
  },
  {
    "date": "2026-03-27",
    "sessions": 1,
    "durationMin": 60,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第三天 肩 腿"
    ]
  },
  {
    "date": "2026-03-26",
    "sessions": 1,
    "durationMin": 57,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第二天 胸 三头"
    ]
  },
  {
    "date": "2026-03-25",
    "sessions": 1,
    "durationMin": 99,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第一天 背和二头"
    ]
  },
  {
    "date": "2026-03-23",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第三天 肩 腿"
    ]
  },
  {
    "date": "2026-03-22",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第二天 胸 三头"
    ]
  },
  {
    "date": "2026-03-21",
    "sessions": 1,
    "durationMin": 219,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第一天 背和二头"
    ]
  },
  {
    "date": "2026-03-18",
    "sessions": 1,
    "durationMin": 128,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第三天 肩 腿"
    ]
  },
  {
    "date": "2026-03-17",
    "sessions": 1,
    "durationMin": 45,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第二天 胸 三头"
    ]
  },
  {
    "date": "2026-03-16",
    "sessions": 1,
    "durationMin": 0,
    "kcal": 0,
    "distanceKm": 0,
    "types": [
      "第一天 背和二头"
    ]
  }
]
