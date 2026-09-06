export type MetricCard = {
  label: string
  value: string
  detail: string
}

export type StrengthPoint = {
  date: string
  bench: number
  squat: number
  hipThrust: number
  press: number
}

export type MuscleVolume = {
  muscle: string
  sets: number
  status: 'low' | 'good' | 'high'
}

export type PersonalRecord = {
  date: string
  movement: string
  result: string
  note: string
}

export type MovementHighlight = {
  id: string
  label: string
  tag: string
  datasetName?: string
  target?: string
  equipment?: string
  secondaryMuscles?: string[]
  cue?: string
  source?: string
  bestSet: string
  bestDate: string
  estimatedOneRm: number
  totalSets: number
  tonnage: number
  delta: number
  trend: Array<{ date: string; value: number }>
}

export const metricCards = [
  {
    "label": "2026 \u8bad\u7ec3\u65e5",
    "value": "101 \u5929",
    "detail": "2026-01-01 \u81f3 2026-06-26"
  },
  {
    "label": "\u8bad\u7ec3\u8bb0\u5f55",
    "value": "104 \u6761",
    "detail": "\u7d2f\u8ba1\u6b63\u5f0f\u7ec4\u7ea6 1954 \u7ec4"
  },
  {
    "label": "\u603b\u8bad\u7ec3\u5bb9\u91cf",
    "value": "625t",
    "detail": "\u6309\u5408\u7406\u91cd\u91cf\u7ec4\u4f30\u7b97\uff0c\u5df2\u8fc7\u6ee4\u5f02\u5e38\u503c"
  },
  {
    "label": "\u5468\u5747\u6b63\u5f0f\u7ec4",
    "value": "135 \u7ec4",
    "detail": "\u6700\u9ad8\u5468\u7ea6 190 \u7ec4"
  }
]

export const movementHighlights = [
  {
    "id": "bench",
    "label": "\u5367\u63a8",
    "tag": "\u4e09\u5927\u9879",
    "datasetName": "barbell bench press",
    "target": "\u80f8\u5927\u808c",
    "equipment": "\u6760\u94c3",
    "secondaryMuscles": [
      "\u4e09\u5934",
      "\u80a9"
    ],
    "cue": "\u63e1\u8ddd\u7565\u5bbd\u4e8e\u80a9\uff0c\u4e0b\u653e\u5230\u80f8\u90e8\u9644\u8fd1\u540e\u518d\u63a8\u8d77\u3002",
    "source": "hasaneyldrm/exercises-dataset#0025",
    "bestSet": "80kg x 3",
    "bestDate": "06-16",
    "estimatedOneRm": 88.0,
    "totalSets": 141,
    "tonnage": 48568,
    "delta": 3.5,
    "trend": [
      {
        "date": "05-30",
        "value": 84.0
      },
      {
        "date": "06-02",
        "value": 85.3
      },
      {
        "date": "06-05",
        "value": 86.3
      },
      {
        "date": "06-09",
        "value": 85.3
      },
      {
        "date": "06-13",
        "value": 87.5
      },
      {
        "date": "06-16",
        "value": 88.0
      },
      {
        "date": "06-19",
        "value": 85.3
      },
      {
        "date": "06-22",
        "value": 87.5
      }
    ]
  },
  {
    "id": "squat",
    "label": "\u6df1\u8e72",
    "tag": "\u4e09\u5927\u9879",
    "datasetName": "barbell full squat",
    "target": "\u81c0\u90e8",
    "equipment": "\u6760\u94c3",
    "secondaryMuscles": [
      "\u80a1\u56db\u5934",
      "\u817f\u540e\u4fa7",
      "\u6838\u5fc3"
    ],
    "cue": "\u80f8\u90e8\u4fdd\u6301\u6253\u5f00\uff0c\u819d\u76d6\u548c\u811a\u5c16\u65b9\u5411\u4e00\u81f4\uff0c\u7528\u811a\u8ddf\u53d1\u529b\u8d77\u8eab\u3002",
    "source": "hasaneyldrm/exercises-dataset#0043",
    "bestSet": "125kg x 5",
    "bestDate": "06-10",
    "estimatedOneRm": 145.8,
    "totalSets": 126,
    "tonnage": 81155,
    "delta": 0.0,
    "trend": [
      {
        "date": "05-31",
        "value": 144.0
      },
      {
        "date": "06-03",
        "value": 126.7
      },
      {
        "date": "06-07",
        "value": 132.0
      },
      {
        "date": "06-10",
        "value": 145.8
      },
      {
        "date": "06-14",
        "value": 144.0
      },
      {
        "date": "06-17",
        "value": 144.0
      },
      {
        "date": "06-21",
        "value": 144.0
      },
      {
        "date": "06-24",
        "value": 144.0
      }
    ]
  },
  {
    "id": "deadlift",
    "label": "\u786c\u62c9",
    "tag": "\u4e09\u5927\u9879",
    "datasetName": "barbell deadlift",
    "target": "\u81c0\u90e8",
    "equipment": "\u6760\u94c3",
    "secondaryMuscles": [
      "\u817f\u540e\u4fa7",
      "\u4e0b\u80cc"
    ],
    "cue": "\u4ee5\u9acb\u4e3a\u94f0\u94fe\uff0c\u4fdd\u6301\u80cc\u90e8\u7a33\u5b9a\uff0c\u6760\u94c3\u9760\u8fd1\u8eab\u4f53\u8def\u5f84\u4e0a\u62c9\u3002",
    "source": "hasaneyldrm/exercises-dataset#0032",
    "bestSet": "120kg x 1",
    "bestDate": "06-23",
    "estimatedOneRm": 124.0,
    "totalSets": 26,
    "tonnage": 9250,
    "delta": 42.3,
    "trend": [
      {
        "date": "05-23",
        "value": 81.7
      },
      {
        "date": "06-01",
        "value": 88.0
      },
      {
        "date": "06-04",
        "value": 108.0
      },
      {
        "date": "06-08",
        "value": 116.7
      },
      {
        "date": "06-11",
        "value": 116.7
      },
      {
        "date": "06-15",
        "value": 120.0
      },
      {
        "date": "06-23",
        "value": 124.0
      }
    ]
  },
  {
    "id": "strict-press",
    "label": "\u5b9e\u529b\u63a8",
    "tag": "\u80a9\u63a8",
    "datasetName": "barbell standing close grip military press",
    "target": "\u4e09\u89d2\u808c",
    "equipment": "\u6760\u94c3",
    "secondaryMuscles": [
      "\u4e09\u5934",
      "\u4e0a\u80cc"
    ],
    "cue": "\u6760\u94c3\u4ece\u80a9\u9ad8\u63a8\u8fc7\u5934\u9876\uff0c\u4fdd\u6301\u6838\u5fc3\u6536\u7d27\uff0c\u4e0d\u7528\u817f\u90e8\u501f\u529b\u3002",
    "source": "hasaneyldrm/exercises-dataset#1456",
    "bestSet": "45kg x 3",
    "bestDate": "06-15",
    "estimatedOneRm": 49.5,
    "totalSets": 47,
    "tonnage": 9165,
    "delta": 6.0,
    "trend": [
      {
        "date": "05-27",
        "value": 42.0
      },
      {
        "date": "05-30",
        "value": 40.8
      },
      {
        "date": "06-01",
        "value": 42.0
      },
      {
        "date": "06-04",
        "value": 42.0
      },
      {
        "date": "06-08",
        "value": 48.0
      },
      {
        "date": "06-11",
        "value": 48.0
      },
      {
        "date": "06-15",
        "value": 49.5
      },
      {
        "date": "06-19",
        "value": 48.0
      }
    ]
  },
  {
    "id": "hip-thrust",
    "label": "\u81c0\u51b2",
    "tag": "\u81c0\u817f",
    "datasetName": "\u672c\u5730\u8865\u5145\uff1a\u81c0\u51b2",
    "target": "\u81c0\u5927\u808c",
    "equipment": "\u81c0\u51b2\u673a",
    "secondaryMuscles": [
      "\u817f\u540e\u4fa7",
      "\u6838\u5fc3"
    ],
    "cue": "\u9876\u7aef\u6536\u7d27\u81c0\u90e8\uff0c\u9aa8\u76c6\u4fdd\u6301\u7a33\u5b9a\uff0c\u907f\u514d\u7528\u4e0b\u80cc\u4ee3\u507f\u3002",
    "source": "local supplement; dataset only has band hip thrust variant",
    "bestSet": "120kg x 8",
    "bestDate": "06-17",
    "estimatedOneRm": 152.0,
    "totalSets": 103,
    "tonnage": 61270,
    "delta": 15.0,
    "trend": [
      {
        "date": "05-31",
        "value": 121.0
      },
      {
        "date": "06-03",
        "value": 139.3
      },
      {
        "date": "06-07",
        "value": 132.0
      },
      {
        "date": "06-10",
        "value": 139.3
      },
      {
        "date": "06-14",
        "value": 144.0
      },
      {
        "date": "06-17",
        "value": 152.0
      },
      {
        "date": "06-21",
        "value": 144.0
      },
      {
        "date": "06-24",
        "value": 136.0
      }
    ]
  },
  {
    "id": "lat-pulldown",
    "label": "\u9ad8\u4f4d\u4e0b\u62c9",
    "tag": "\u80cc\u90e8",
    "datasetName": "cable lat pulldown full range of motion",
    "target": "\u80cc\u9614\u808c",
    "equipment": "\u9f99\u95e8\u67b6/\u9ad8\u4f4d\u4e0b\u62c9",
    "secondaryMuscles": [
      "\u4e8c\u5934",
      "\u83f1\u5f62\u808c",
      "\u540e\u675f"
    ],
    "cue": "\u80f8\u90e8\u6253\u5f00\uff0c\u628a\u6746\u62c9\u5411\u4e0a\u80f8\uff0c\u5e95\u90e8\u5939\u7d27\u80a9\u80db\u3002",
    "source": "hasaneyldrm/exercises-dataset#2330",
    "bestSet": "85kg x 6",
    "bestDate": "06-23",
    "estimatedOneRm": 102.0,
    "totalSets": 34,
    "tonnage": 17570,
    "delta": 15.3,
    "trend": [
      {
        "date": "04-28",
        "value": 86.7
      },
      {
        "date": "05-08",
        "value": 84.0
      },
      {
        "date": "05-18",
        "value": 84.0
      },
      {
        "date": "05-26",
        "value": 88.7
      },
      {
        "date": "06-01",
        "value": 87.5
      },
      {
        "date": "06-04",
        "value": 96.0
      },
      {
        "date": "06-15",
        "value": 101.3
      },
      {
        "date": "06-23",
        "value": 102.0
      }
    ]
  }
]

export const strengthTrend = [
  {
    "date": "03-16",
    "bench": 57.0,
    "squat": 88.7,
    "hipThrust": 80.0,
    "press": 14.0
  },
  {
    "date": "03-30",
    "bench": 57.0,
    "squat": 101.3,
    "hipThrust": 80.0,
    "press": 25.3
  },
  {
    "date": "04-13",
    "bench": 72.0,
    "squat": 114.0,
    "hipThrust": 96.0,
    "press": 28.0
  },
  {
    "date": "04-27",
    "bench": 76.0,
    "squat": 120.0,
    "hipThrust": 93.3,
    "press": 33.3
  },
  {
    "date": "05-11",
    "bench": 82.7,
    "squat": 139.3,
    "hipThrust": 113.3,
    "press": 38.0
  },
  {
    "date": "05-25",
    "bench": 84.0,
    "squat": 144.0,
    "hipThrust": 121.0,
    "press": 42.5
  },
  {
    "date": "06-08",
    "bench": 87.5,
    "squat": 145.8,
    "hipThrust": 144.0,
    "press": 48.0
  },
  {
    "date": "06-22",
    "bench": 87.5,
    "squat": 144.0,
    "hipThrust": 136.0,
    "press": 25.3
  }
]

export const muscleVolumes = [
  {
    "muscle": "\u80f8",
    "sets": 27,
    "status": "high"
  },
  {
    "muscle": "\u80cc",
    "sets": 24,
    "status": "high"
  },
  {
    "muscle": "\u81c0\u817f",
    "sets": 31,
    "status": "high"
  },
  {
    "muscle": "\u80a9",
    "sets": 23,
    "status": "high"
  },
  {
    "muscle": "\u4e8c\u5934",
    "sets": 11,
    "status": "good"
  },
  {
    "muscle": "\u4e09\u5934",
    "sets": 6,
    "status": "low"
  },
  {
    "muscle": "\u6838\u5fc3",
    "sets": 6,
    "status": "low"
  }
]

export const prs = [
  {
    "date": "06-17",
    "movement": "\u608d\u9a6c\u673a\u81c0\u51b2",
    "result": "120kg x 8",
    "note": "\u4f30\u7b97 1RM 152.0kg"
  },
  {
    "date": "06-10",
    "movement": "\u6df1\u8e72",
    "result": "125kg x 5",
    "note": "\u4f30\u7b97 1RM 145.8kg"
  },
  {
    "date": "06-23",
    "movement": "\u786c\u62c9",
    "result": "120kg x 1",
    "note": "\u4f30\u7b97 1RM 124.0kg"
  },
  {
    "date": "06-23",
    "movement": "\u5bbd\u8ddd\u9ad8\u4f4d\u4e0b\u62c9",
    "result": "85kg x 6",
    "note": "\u4f30\u7b97 1RM 102.0kg"
  },
  {
    "date": "06-08",
    "movement": "\u62c9\u6746\u5750\u59ff\u5212\u8239(\u5bbd\u63e1)",
    "result": "80kg x 8",
    "note": "\u4f30\u7b97 1RM 101.3kg"
  }
]

export const nextWeekPlan = [
  "\u6760\u94c3\u5367\u63a8\uff1a\u4eca\u5e74 141 \u4e2a\u6b63\u5f0f\u7ec4\uff0c\u6700\u4f73 80kg x 3",
  "\u6df1\u8e72\uff1a\u4eca\u5e74 126 \u4e2a\u6b63\u5f0f\u7ec4\uff0c\u6700\u4f73 125kg x 5",
  "\u608d\u9a6c\u673a\u81c0\u51b2\uff1a\u4eca\u5e74 103 \u4e2a\u6b63\u5f0f\u7ec4\uff0c\u6700\u4f73 120kg x 8",
  "\u4e0b\u5468\u7b56\u7565\uff1a\u51cf\u5c11\u65e0\u6548\u75b2\u52b3\uff0c\u628a\u6b63\u5f0f\u7ec4\u63a7\u5236\u5728\u53ef\u6062\u590d\u8303\u56f4\u3002",
  "\u516c\u5f00\u7f51\u9875\u53ea\u5c55\u793a\u805a\u5408\u6570\u636e\uff0c\u4e0d\u5c55\u793a API key \u6216\u539f\u59cb\u79c1\u5bc6\u5907\u6ce8\u3002"
]

