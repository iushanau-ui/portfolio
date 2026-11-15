/* My Body (МайСтрим) test task: graph content. Layout code is in index.html.
   cost = estimated price per node in $ (Replicate does not expose official model prices). */
window.CASE = {
 "finalVideo": "media/final.mp4",
 "finalPoster": "media/final_p.jpg",
 "videoCost": [
  [
   {
    "en": "Workout frame (1 of 3)",
    "ru": "Кадр тренировки (1 из 3)"
   },
   0.15
  ],
  [
   {
    "en": "Voice take",
    "ru": "Дубль голоса"
   },
   0.07
  ],
  [
   {
    "en": "Talking scene 1 (variant A)",
    "ru": "Говорящая сцена 1 (вариант A)"
   },
   0.42
  ],
  [
   {
    "en": "Talking scene 2",
    "ru": "Говорящая сцена 2"
   },
   0.57
  ],
  [
   {
    "en": "Talking scene 3",
    "ru": "Говорящая сцена 3"
   },
   0.63
  ],
  [
   {
    "en": "Glute bridge, 5 s",
    "ru": "Мостик, 5 с"
   },
   0.35
  ]
 ],
 "testCost": [
  [
   {
    "en": "2 unused workout frames",
    "ru": "2 невзятых кадра тренировки"
   },
   0.3
  ],
  [
   {
    "en": "First voice take",
    "ru": "Первый дубль голоса"
   },
   0.05
  ],
  [
   {
    "en": "Lip-sync test",
    "ru": "Тест липсинка"
   },
   0.56
  ],
  [
   {
    "en": "Scene 1, first version",
    "ru": "Сцена 1, первая версия"
   },
   0.36
  ],
  [
   {
    "en": "Scene 1, variant B",
    "ru": "Сцена 1, вариант B"
   },
   0.41
  ],
  [
   {
    "en": "Scene 3, two earlier versions",
    "ru": "Сцена 3, две ранние версии"
   },
   0.88
  ]
 ],
 "types": {
  "input": {
   "en": "brief",
   "ru": "бриф"
  },
  "local": {
   "en": "local · ComfyUI",
   "ru": "локально · ComfyUI"
  },
  "code": {
   "en": "local · code",
   "ru": "локально · код"
  },
  "paid": {
   "en": "paid API · Replicate",
   "ru": "платно · Replicate"
  },
  "output": {
   "en": "output",
   "ru": "результат"
  }
 },
 "nodes": [
  {
   "id": "brief",
   "x": 0,
   "y": 470,
   "type": "input",
   "status": "ok",
   "title": {
    "en": "Brief",
    "ru": "Бриф"
   },
   "tool": {
    "en": "test task",
    "ru": "тестовое задание"
   },
   "script": "",
   "gens": 0,
   "cost": 0,
   "thumbs": [],
   "what": {
    "en": "UGC ad for a home pilates quiz, up to 30 s, 9:16 and 4:5. Girl → «before» photo → quiz → personal plan → «take the quiz».",
    "ru": "UGC-ролик для квиза по домашнему пилатесу, до 30 с, 9:16 и 4:5. Девушка → фото «до» → квиз → персональная программа → «пройди квиз»."
   },
   "prompts": [],
   "params": [],
   "media": [
    {
     "src": "media/after.jpg",
     "cap": {
      "en": "«after» photo, from the brief",
      "ru": "фото «после», из ТЗ"
     }
    },
    {
     "src": "media/before.jpg",
     "cap": {
      "en": "«before» photo, as is",
      "ru": "фото «до», как есть"
     }
    }
   ],
   "mini": {
    "en": "≤30 s · 9:16 + 4:5\nselfie UGC + quiz",
    "ru": "≤30 с · 9:16 + 4:5\nселфи-UGC + квиз"
   }
  },
  {
   "id": "screencast",
   "x": 0,
   "y": 760,
   "type": "code",
   "status": "ok",
   "title": {
    "en": "Screencast map",
    "ru": "Разбор скринкаста"
   },
   "tool": {
    "en": "ffmpeg + contact sheets",
    "ru": "ffmpeg + контактные листы"
   },
   "script": "разбор-тз.md",
   "gens": 0,
   "cost": 0,
   "thumbs": [
    "media/sc_start.jpg",
    "media/sc_zones.jpg",
    "media/sc_chart.jpg"
   ],
   "what": {
    "en": "104 s of the real quiz cut into a map: which second shows which screen, where the taps are. Found a template bug on the forecast screen.",
    "ru": "104 с реального квиза разложены по секундам: какой экран, где тапы. На экране прогноза нашёлся баг с шаблоном."
   },
   "prompts": [],
   "params": [],
   "media": [
    {
     "src": "media/sc_bug.jpg",
     "cap": {
      "en": "85.4 s: {{target_date}} on screen",
      "ru": "85,4 с: {{target_date}} на экране"
     },
     "rej": true,
     "why": {
      "en": "skipped",
      "ru": "обойдён"
     }
    }
   ]
  },
  {
   "id": "keys_klein",
   "x": 296,
   "y": 60,
   "type": "local",
   "status": "rejected",
   "title": {
    "en": "Workout frames, local",
    "ru": "Кадры тренировки, локально"
   },
   "tool": "FLUX.2 klein 9B edit (ComfyUI)",
   "script": "s01_keys.py",
   "gens": 6,
   "cost": 0,
   "thumbs": [
    "media/klein_bridge.jpg",
    "media/klein_sit.jpg"
   ],
   "what": {
    "en": "First try at the mat insert from the «after» photo. Extra hands and scuffs.",
    "ru": "Первая попытка вставки на коврике из фото «после». Лишние руки и потёртости."
   },
   "prompts": [],
   "params": [],
   "media": [
    {
     "src": "media/klein_bridge.jpg",
     "cap": {
      "en": "bridge",
      "ru": "мостик"
     },
     "rej": true,
     "why": {
      "en": "anatomy",
      "ru": "анатомия"
     }
    },
    {
     "src": "media/klein_sit.jpg",
     "cap": {
      "en": "sitting",
      "ru": "сидя"
     },
     "rej": true,
     "why": {
      "en": "scuffs",
      "ru": "потёртости"
     }
    }
   ]
  },
  {
   "id": "keys_nbp",
   "x": 592,
   "y": 60,
   "type": "paid",
   "status": "ok",
   "title": {
    "en": "Workout frames",
    "ru": "Кадры тренировки"
   },
   "tool": "replicate: google/nano-banana-pro 2K",
   "script": "s02_keys_cloud.py",
   "gens": 3,
   "cost": 0.45,
   "thumbs": [
    "media/nbp_bridge.jpg",
    "media/nbp_sit.jpg"
   ],
   "what": {
    "en": "Same woman, same room, new shot from the floor. Checked at full size: anatomy clean. The bridge went into the ad.",
    "ru": "Та же героиня и комната, новый ракурс с пола. Проверено в полный размер: анатомия чистая. В ролик пошёл мостик."
   },
   "prompts": [
    {
     "label": "bridge",
     "text": "Use the woman from the reference photo and keep her exactly the same: the same face, light brown hair in a messy bun with loose strands, the same body shape and natural skin with light freckles, the same olive-green racerback sports bra and charcoal bike shorts. Keep the same room: sheer white curtains on the left, warm grey walls, white baseboard, light oak laminate floor, a black yoga mat, the same soft natural daylight. New shot: the phone is propped up on the floor about two meters away at mat height and films her whole body from the side. She lies on her back on the black yoga mat doing a pilates glute bridge: knees bent about 90 degrees, feet flat on the mat hip-width apart, hips lifted so her body forms a straight line from knees to shoulders, arms resting flat beside her body, palms down. Calm, focused face turned slightly toward the camera. Anatomically correct: exactly two arms, two hands with five fingers each, two legs and two feet. Clean mat and floor, natural skin texture, realistic amateur smartphone video frame, vertical 9:16, no text, no logos, no phone visible in the frame."
    },
    {
     "label": "sit (not used)",
     "text": "Use the woman from the reference photo and keep her exactly the same: the same face, light brown hair in a messy bun with loose strands, the same body shape and natural skin with light freckles, the same olive-green racerback sports bra and charcoal bike shorts. Keep the same room: sheer white curtains on the left, warm grey walls, white baseboard, light oak laminate floor, a black yoga mat, the same soft natural daylight. New shot: the phone is propped up about one and a half meters away at chest height. She sits cross-legged on the black yoga mat after a workout, upright and relaxed, hands resting on her knees, a light natural smile, looking into the camera, her whole body in the frame. Anatomically correct: exactly two arms, two hands with five fingers each, two legs and two feet. Clean mat and floor, natural skin texture, realistic amateur smartphone video frame, vertical 9:16, no text, no logos, no phone visible in the frame."
    }
   ],
   "params": [
    [
     {
      "en": "reference",
      "ru": "референс"
     },
     "после.png"
    ],
    [
     "resolution",
     "2K · 9:16 · png"
    ]
   ],
   "media": [
    {
     "src": "media/nbp_bridge.jpg",
     "cap": {
      "en": "bridge · chosen",
      "ru": "мостик · выбран"
     },
     "ok": true
    },
    {
     "src": "media/nbp_sit.jpg",
     "cap": {
      "en": "sitting",
      "ru": "сидя"
     }
    }
   ]
  },
  {
   "id": "kling",
   "x": 1184,
   "y": 60,
   "type": "paid",
   "status": "ok",
   "title": {
    "en": "Bridge, animated",
    "ru": "Мостик, оживление"
   },
   "tool": "replicate: kwaivgi/kling-v2.6",
   "script": "s10_animate.py",
   "gens": 1,
   "cost": 0.35,
   "thumbs": [
    "media/kling_bridge_p.jpg"
   ],
   "what": {
    "en": "5 s from the approved frame: two slow repetitions, static camera. 2.5 s with one full rep went into the cut.",
    "ru": "5 с из утверждённого кадра: два медленных повтора, камера стоит. В монтаж взяты 2,5 с с полным повтором."
   },
   "prompts": [
    {
     "label": "prompt",
     "text": "She slowly lowers her hips down to the mat and then lifts them back up into a glute bridge, two smooth controlled pilates repetitions, calm breathing, her arms stay relaxed on the mat, her head rests on the mat. Static camera on a tripod, no camera movement, no zoom. Realistic natural body motion, soft daylight, home workout footage."
    },
    {
     "label": "negative",
     "text": "extra limbs, extra fingers, distorted hands, morphing body, warping, camera movement, zoom, text, watermark, blurry face"
    }
   ],
   "params": [
    [
     "duration",
     "5 s"
    ],
    [
     "generate_audio",
     "false"
    ],
    [
     {
      "en": "used",
      "ru": "взято"
     },
     "0.2–2.7 s"
    ]
   ],
   "media": [
    {
     "src": "media/kling_bridge.mp4",
     "cap": {
      "en": "Kling 2.6 · 5 s",
      "ru": "Kling 2.6 · 5 с"
     },
     "ok": true,
     "kind": "video"
    }
   ]
  },
  {
   "id": "voice_v1",
   "x": 296,
   "y": 450,
   "type": "paid",
   "status": "rejected",
   "title": {
    "en": "Voice, first take",
    "ru": "Голос, первый дубль"
   },
   "tool": "replicate: elevenlabs/v3",
   "script": "s03_voice.py",
   "gens": 1,
   "cost": 0.05,
   "thumbs": [],
   "what": {
    "en": "Alexandra voice, own script, one take. The list «goals, zones, time, weight» came out as one breath: no room for quiz screens.",
    "ru": "Голос Alexandra, свой текст, один дубль. Перечисление «цели, зоны, время, вес» слилось в одно дыхание: экранам квиза негде держаться."
   },
   "prompts": [
    {
     "label": "script",
     "text": "Девочки, вот это я сейчас. А вот это - я полгода назад. Диеты, зал... меня хватало максимум на неделю. Потом наткнулась на квиз про домашний пилатес. Пара минут: цели, зоны, сколько у меня времени, мой вес. И мне собрали программу под меня - по пятнадцать минут дома, без зала и голодовок. Коврик, пятнадцать минут - и всё. Пройди квиз по ссылке и посмотри, какая программа подойдёт тебе."
    }
   ],
   "params": [
    [
     "voice",
     "Alexandra · ru"
    ],
    [
     "stability / similarity",
     "0.5 / 0.75"
    ]
   ],
   "media": [
    {
     "src": "media/voice_v1.mp3",
     "cap": {
      "en": "take 1",
      "ru": "дубль 1"
     },
     "rej": true,
     "why": {
      "en": "no pauses in the list",
      "ru": "нет пауз в перечислении"
     },
     "kind": "audio"
    }
   ]
  },
  {
   "id": "voice_cut",
   "x": 592,
   "y": 450,
   "type": "code",
   "status": "rejected",
   "title": {
    "en": "Cutting the take",
    "ru": "Нарезка дубля"
   },
   "tool": "ffmpeg silencedetect",
   "script": "s03b · s03c · s03d",
   "gens": 0,
   "cost": 0,
   "thumbs": [],
   "what": {
    "en": "Tried to insert pauses into the ready take. Speech is continuous, so cuts caught the next word's first sound.",
    "ru": "Пробовал вставить паузы в готовый дубль. Речь слитная, и в склейку попадал первый звук следующего слова."
   },
   "prompts": [],
   "params": [],
   "media": [
    {
     "src": "media/voice_cut.mp3",
     "cap": {
      "en": "re-cut take",
      "ru": "перенарезка"
     },
     "rej": true,
     "why": {
      "en": "audible joins",
      "ru": "слышны склейки"
     },
     "kind": "audio"
    }
   ]
  },
  {
   "id": "voice_take",
   "x": 888,
   "y": 450,
   "type": "paid",
   "status": "ok",
   "title": {
    "en": "Voice, by phrases",
    "ru": "Голос по фразам"
   },
   "tool": "replicate: elevenlabs/v3",
   "script": "s03f_voice_take.py",
   "gens": 1,
   "cost": 0.07,
   "thumbs": [],
   "what": {
    "en": "Same voice and script, one take with [long pause] / [short pause] tags. Real silence between phrases: each phrase cuts clean.",
    "ru": "Тот же голос и текст, один дубль с тегами [long pause] / [short pause]. Между фразами настоящая тишина: каждая фраза режется чисто."
   },
   "prompts": [
    {
     "label": "script with pause tags",
     "text": "Девочки, вот это я сейчас. [long pause] А вот это - я полгода назад. [long pause] Диеты, зал... меня хватало максимум на неделю. [long pause] Потом наткнулась на квиз про домашний пилатес. [long pause] Пара минут: [short pause] цели, [short pause] зоны, [short pause] сколько у меня времени, [short pause] мой вес. [long pause] И мне собрали программу под меня. [long pause] По пятнадцать минут дома, без зала и голодовок. [long pause] Коврик, пятнадцать минут - и всё. [long pause] Пройди квиз по ссылке и посмотри, какая программа подойдёт тебе."
    }
   ],
   "params": [
    [
     "voice",
     "Alexandra · ru"
    ],
    [
     "tempo",
     "×1.10 (atempo)"
    ]
   ],
   "media": [
    {
     "src": "media/voice_final.mp3",
     "cap": {
      "en": "assembled voice",
      "ru": "собранный голос"
     },
     "ok": true,
     "kind": "audio"
    }
   ]
  },
  {
   "id": "phrases",
   "x": 1184,
   "y": 450,
   "type": "code",
   "status": "ok",
   "title": {
    "en": "Voice timeline",
    "ru": "Таймлайн голоса"
   },
   "tool": {
    "en": "numpy + ffmpeg",
    "ru": "numpy + ffmpeg"
   },
   "script": "s03g_assemble.py · s03h_words.py",
   "gens": 0,
   "cost": 0,
   "thumbs": [],
   "what": {
    "en": "13 phrases on a timeline with pauses by meaning. The whole edit is timed from these real phrase borders, not from Whisper (it runs 0.3–0.4 s early).",
    "ru": "13 фраз на таймлайне с паузами по смыслу. Весь монтаж считается от реальных границ фраз, а не от Whisper (он спешит на 0,3–0,4 с)."
   },
   "prompts": [],
   "params": [
    [
     {
      "en": "hook → photo",
      "ru": "хук → фото"
     },
     "0.40 s"
    ],
    [
     {
      "en": "story turn",
      "ru": "поворот истории"
     },
     "0.45 s"
    ],
    [
     {
      "en": "list items",
      "ru": "пункты списка"
     },
     "0.22–0.30 s"
    ],
    [
     {
      "en": "before CTA",
      "ru": "перед призывом"
     },
     "0.42 s"
    ]
   ],
   "media": [],
   "mini": {
    "en": "13 phrases · 29.9 s",
    "ru": "13 фраз · 29,9 с"
   }
  },
  {
   "id": "omni_test",
   "x": 592,
   "y": 240,
   "type": "paid",
   "status": "rejected",
   "title": {
    "en": "Lip-sync test",
    "ru": "Тест липсинка"
   },
   "tool": "replicate: bytedance/omni-human-1.5",
   "script": "s04_talk_test.py",
   "gens": 1,
   "cost": 0.56,
   "thumbs": [
    "media/omni_test_p.jpg"
   ],
   "what": {
    "en": "Russian lip-sync check on the first take. The voice was redone later, so the test went nowhere.",
    "ru": "Проверка русского липсинка на первом дубле. Голос потом переделан, тест никуда не пошёл."
   },
   "prompts": [],
   "params": [],
   "media": [
    {
     "src": "media/omni_test.mp4",
     "cap": {
      "en": "first take",
      "ru": "первый дубль"
     },
     "rej": true,
     "why": {
      "en": "old voice",
      "ru": "старый голос"
     },
     "kind": "video"
    }
   ]
  },
  {
   "id": "omni",
   "x": 1480,
   "y": 250,
   "type": "paid",
   "status": "ok",
   "title": {
    "en": "Talking scenes",
    "ru": "Говорящие сцены"
   },
   "tool": "replicate: bytedance/omni-human-1.5",
   "script": "s10_animate.py",
   "gens": 3,
   "cost": 1.25,
   "thumbs": [
    "media/omni_s2_p.jpg",
    "media/omni_s3_p.jpg"
   ],
   "what": {
    "en": "Only what is in the cut: three pieces of the approved voice with a little silence at the edges. One mood per scene.",
    "ru": "Только то, что стоит в монтаже: три куска утверждённого голоса с запасом тишины. У каждой сцены своя интонация."
   },
   "prompts": [
    {
     "label": "base",
     "text": "A woman in her early thirties films a front-camera selfie video at home, holding the phone at arm's length with her right hand; the phone itself is not visible. She talks to the camera naturally, like telling a friend a story, with small natural head movements, natural blinking and subtle facial expressions, keeping eye contact. Keep her face exactly as in the photo: same age, natural skin texture with freckles and pores, no beautification, same hair and outfit. The camera stays at the same arm's-length distance with only a very slight natural handheld sway, no zoom. Realistic amateur phone footage, accurate lip sync. "
    },
    {
     "label": "s1",
     "text": "She speaks with a confident, warm, slightly proud smile."
    },
    {
     "label": "s2",
     "text": "She speaks with light self-irony, a small shrug and a knowing half-smile, as if remembering failed attempts."
    },
    {
     "label": "s3",
     "text": "She speaks invitingly and friendly, with an encouraging smile, like recommending something to a friend."
    }
   ],
   "params": [
    [
     "image",
     "после.png"
    ],
    [
     "seed",
     "7"
    ],
    [
     {
      "en": "audio",
      "ru": "аудио"
     },
     "2.6 + 4.0 + 2.3 s"
    ]
   ],
   "media": [
    {
     "src": "media/omni_s2.mp4",
     "cap": {
      "en": "s2 · «Diets, gym…»",
      "ru": "s2 · «Диеты, зал…»"
     },
     "ok": true,
     "kind": "video"
    },
    {
     "src": "media/omni_s3.mp4",
     "cap": {
      "en": "s3 · short CTA",
      "ru": "s3 · короткий призыв"
     },
     "rej": true,
     "why": {
      "en": "replaced: she now finishes the phrase",
      "ru": "заменена: теперь она договаривает фразу"
     },
     "kind": "video"
    }
   ]
  },
  {
   "id": "omni_s1",
   "x": 1776,
   "y": 250,
   "type": "paid",
   "status": "ok",
   "title": {
    "en": "Scene 1, sharper lips",
    "ru": "Сцена 1, чётче губы"
   },
   "tool": "replicate: bytedance/omni-human-1.5",
   "script": "s10b_s1_redo.py",
   "gens": 2,
   "cost": 0.83,
   "thumbs": [
    "media/omni_s1_p.jpg"
   ],
   "what": {
    "en": "The hook was redone: 0.4 s of silence before «Girls» so the model warms up, levelled loudness, a line about articulation. Two seeds, A chosen.",
    "ru": "Хук переделан: 0,4 с тишины перед «Девочки», чтобы модель разогналась, выровненная громкость, строка про артикуляцию. Два сида, выбран A."
   },
   "prompts": [
    {
     "label": "added",
     "text": "She is clearly articulating every word with precise, well-defined lip movements."
    }
   ],
   "params": [
    [
     "seed",
     "7 (A) · 21 (B)"
    ],
    [
     {
      "en": "pre-roll",
      "ru": "разгон"
     },
     "0.4 s, cut in edit"
    ]
   ],
   "media": [
    {
     "src": "media/omni_s1_compare.mp4",
     "cap": {
      "en": "old · A · B",
      "ru": "старый · A · B"
     },
     "kind": "video",
     "wide": true
    },
    {
     "src": "media/omni_s1.mp4",
     "cap": {
      "en": "A in the cut",
      "ru": "A в монтаже"
     },
     "ok": true,
     "kind": "video"
    }
   ]
  },
  {
   "id": "omni_s3",
   "x": 1776,
   "y": 470,
   "type": "paid",
   "status": "ok",
   "title": {
    "en": "Scene 3, ending",
    "ru": "Сцена 3, концовка"
   },
   "tool": "replicate: bytedance/omni-human-1.5",
   "script": "s10c · s10d",
   "gens": 2,
   "cost": 1.19,
   "thumbs": [
    "media/omni_s3_full_p.jpg"
   ],
   "what": {
    "en": "She finishes «…which program fits you» on camera, the camera is static, then a warm smile and the packshot. The first try swayed and winked.",
    "ru": "Героиня договаривает «…какая программа подойдёт тебе» в кадре, камера неподвижна, в конце тёплая улыбка и пакшот. Первая попытка качалась и подмигивала."
   },
   "prompts": [
    {
     "label": "camera",
     "text": "The camera stays at the same arm's-length distance and is completely static: no handheld sway, no camera movement, no zoom."
    },
    {
     "label": "mood",
     "text": "She speaks invitingly and friendly, with an encouraging smile, eyes open with natural blinking, no winking and no squinting. When she finishes the sentence, she stops talking and gives the camera a warm, sweet, genuine smile, holding eye contact."
    }
   ],
   "params": [
    [
     "seed",
     "7"
    ],
    [
     {
      "en": "audio",
      "ru": "аудио"
     },
     {
      "en": "whole last phrase + 0.9 s silence for the smile",
      "ru": "вся последняя фраза + 0,9 с тишины на улыбку"
     }
    ]
   ],
   "media": [
    {
     "src": "media/omni_s3_full.mp4",
     "cap": {
      "en": "final ending",
      "ru": "финальная концовка"
     },
     "ok": true,
     "kind": "video"
    }
   ]
  },
  {
   "id": "sound",
   "x": 296,
   "y": 1060,
   "type": "local",
   "status": "ok",
   "title": {
    "en": "Music and SFX",
    "ru": "Музыка и звуки"
   },
   "tool": "ACE-Step 1.5 XL · Stable Audio 3 (ComfyUI)",
   "script": "s05_sound.py",
   "gens": 10,
   "cost": 0,
   "thumbs": [],
   "what": {
    "en": "Calm 103 BPM track and UI sounds: taps, a chime on the forecast.",
    "ru": "Спокойный трек 103 BPM и звуки интерфейса: тапы, «дзынь» на прогнозе."
   },
   "prompts": [
    {
     "label": "music",
     "text": "Light upbeat background music for a casual home fitness social media video, modern feel-good pop with soft plucks, warm synth pad, light claps and a gentle four-on-the-floor kick, positive, motivating but calm, steady energy, no drops, no sudden hits, instrumental only, no vocals."
    },
    {
     "label": "tap",
     "text": "A single soft finger tap on a glass smartphone screen, a tiny subtle click, then silence."
    },
    {
     "label": "ding",
     "text": "A short bright pleasant app success chime, two rising clean digital notes, then silence."
    }
   ],
   "params": [],
   "media": [
    {
     "src": "media/music.mp3",
     "cap": {
      "en": "music",
      "ru": "музыка"
     },
     "ok": true,
     "kind": "audio"
    },
    {
     "src": "media/sfx_tap.mp3",
     "cap": {
      "en": "tap",
      "ru": "тап"
     },
     "ok": true,
     "kind": "audio"
    },
    {
     "src": "media/sfx_ding.mp3",
     "cap": {
      "en": "chime",
      "ru": "дзынь"
     },
     "ok": true,
     "kind": "audio"
    }
   ]
  },
  {
   "id": "ui_v1",
   "x": 296,
   "y": 760,
   "type": "code",
   "status": "rejected",
   "title": {
    "en": "UI in a phone frame",
    "ru": "UI в рамке телефона"
   },
   "tool": "OpenCV + PIL",
   "script": "s06_edit.py",
   "gens": 0,
   "cost": 0,
   "thumbs": [
    "media/ui_v1.jpg"
   ],
   "what": {
    "en": "Screencast inside a phone mock-up over a blurred room.",
    "ru": "Скринкаст в макете телефона поверх размытой комнаты."
   },
   "prompts": [],
   "params": [],
   "media": [
    {
     "src": "media/ui_v1.jpg",
     "cap": {
      "en": "phone frame",
      "ru": "рамка телефона"
     },
     "rej": true,
     "why": {
      "en": "looks cheap",
      "ru": "выглядит дёшево"
     }
    }
   ]
  },
  {
   "id": "ui_v2",
   "x": 592,
   "y": 760,
   "type": "code",
   "status": "rejected",
   "title": {
    "en": "Full-screen + zoom",
    "ru": "На весь экран + зум"
   },
   "tool": "OpenCV virtual camera",
   "script": "s07_edit.py",
   "gens": 0,
   "cost": 0,
   "thumbs": [
    "media/ui_v2.jpg"
   ],
   "what": {
    "en": "Screencast full-bleed with a virtual camera.",
    "ru": "Скринкаст на весь кадр с виртуальной камерой."
   },
   "prompts": [],
   "params": [],
   "media": [
    {
     "src": "media/ui_v2.jpg",
     "cap": {
      "en": "full-bleed",
      "ru": "на весь кадр"
     },
     "rej": true,
     "why": {
      "en": "zoom, text hits the edges",
      "ru": "зум, текст упирается в края"
     }
    }
   ]
  },
  {
   "id": "ui_v3",
   "x": 888,
   "y": 760,
   "type": "code",
   "status": "ok",
   "title": {
    "en": "Quiz UI, rebuilt",
    "ru": "UI квиза, пересобран"
   },
   "tool": {
    "en": "HTML + JS, frame by frame (Playwright)",
    "ru": "HTML + JS, покадрово (Playwright)"
   },
   "script": "style/ui.html · s09_v4.py",
   "gens": 0,
   "cost": 0,
   "thumbs": [
    "media/ui_v3_zones.jpg",
    "media/ui_v3_weight.jpg",
    "media/ui_v3_chart.jpg"
   ],
   "what": {
    "en": "Same questions, pictures and red from the app, typeset with margins. Every tap lands on its word; choices hold 0.5–0.7 s; iOS-like springs; one progress dash per answered step.",
    "ru": "Те же вопросы, картинки и красный из приложения, набраны с полями. Каждый тап на своём слове, выбор держится 0,5–0,7 с, пружины как в iOS, одна чёрточка прогресса на пройденный шаг."
   },
   "prompts": [],
   "params": [
    [
     {
      "en": "font",
      "ru": "шрифт"
     },
     "SF Pro Display"
    ],
    [
     {
      "en": "brand red",
      "ru": "красный бренда"
     },
     "#D63D3E (screen sample)"
    ],
    [
     {
      "en": "dates",
      "ru": "даты"
     },
     {
      "en": "removed: «your forecast»",
      "ru": "убраны: «прогноз по твоему плану»"
     }
    ]
   ],
   "media": [
    {
     "src": "media/ui_clip.mp4",
     "cap": {
      "en": "taps on words",
      "ru": "тапы по словам"
     },
     "ok": true,
     "kind": "video"
    }
   ]
  },
  {
   "id": "packshot",
   "x": 1184,
   "y": 1060,
   "type": "code",
   "status": "ok",
   "title": {
    "en": "Packshot",
    "ru": "Пакшот"
   },
   "tool": {
    "en": "HTML + JS",
    "ru": "HTML + JS"
   },
   "script": "style/ui.html",
   "gens": 0,
   "cost": 0,
   "thumbs": [
    "media/pk_final.jpg"
   ],
   "what": {
    "en": "Built from the app itself: the start-screen circles, the icon redrawn as vector, «576 269 women». The button gets pressed after the last word.",
    "ru": "Собран из элементов приложения: круги со стартового экрана, иконка перерисована в вектор, «576 269 женщин». Кнопку нажимают после последнего слова."
   },
   "prompts": [],
   "params": [],
   "media": [
    {
     "src": "media/pk_final.jpg",
     "cap": {
      "en": "final",
      "ru": "финал"
     },
     "ok": true
    },
    {
     "src": "media/pk_rej_cutout.jpg",
     "cap": {
      "en": "cut-out heroine",
      "ru": "вырезанная героиня"
     },
     "rej": true,
     "why": {
      "en": "pasted look",
      "ru": "вклеена"
     }
    },
    {
     "src": "media/pk_rej_plain.jpg",
     "cap": {
      "en": "plain",
      "ru": "простой"
     },
     "rej": true,
     "why": {
      "en": "not pretty enough",
      "ru": "не хватало красоты"
     }
    }
   ]
  },
  {
   "id": "edit",
   "x": 1776,
   "y": 760,
   "type": "code",
   "status": "ok",
   "title": {
    "en": "Edit",
    "ru": "Монтаж"
   },
   "tool": {
    "en": "Python · OpenCV · ffmpeg",
    "ru": "Python · OpenCV · ffmpeg"
   },
   "script": "s09_v4.py",
   "gens": 0,
   "cost": 0,
   "thumbs": [],
   "what": {
    "en": "Cuts from the voice timeline. Karaoke captions split by meaning; music ducks under the voice and the track is extended by one bar so its own ending lands on the last frame.",
    "ru": "Склейки от таймлайна голоса. Субтитры-караоке, разбитые по смыслу; музыка уходит под голос, трек удлинён на такт, чтобы его родная концовка легла на последний кадр."
   },
   "prompts": [],
   "params": [
    [
     {
      "en": "captions",
      "ru": "субтитры"
     },
     {
      "en": "current word lights up pink",
      "ru": "звучащее слово розовое"
     }
    ],
    [
     {
      "en": "music",
      "ru": "музыка"
     },
     "sidechain 3:1, loop +1 bar"
    ],
    [
     "loudness",
     "−14 LUFS"
    ],
    [
     "4:5",
     {
      "en": "UI ×0.76 with white margins",
      "ru": "UI ×0,76 с белыми полями"
     }
    ]
   ],
   "media": [],
   "mini": {
    "en": "captions · ducking · −14 LUFS",
    "ru": "субтитры · дакинг · −14 LUFS"
   }
  },
  {
   "id": "final",
   "x": 2072,
   "y": 470,
   "type": "output",
   "status": "ok",
   "title": {
    "en": "Final 9:16",
    "ru": "Финал 9:16"
   },
   "tool": "1080×1920 · 30 fps · 30 s",
   "script": "",
   "gens": 0,
   "cost": 0,
   "thumbs": [
    "media/fin_a.jpg",
    "media/fin_b.jpg",
    "media/fin_c.jpg"
   ],
   "what": {
    "en": "The ad as delivered.",
    "ru": "Ролик в сдаче."
   },
   "prompts": [],
   "params": [],
   "media": [
    {
     "src": "FINAL",
     "cap": {
      "en": "9:16",
      "ru": "9:16"
     },
     "ok": true,
     "kind": "video"
    }
   ]
  },
  {
   "id": "variations",
   "x": 2072,
   "y": 800,
   "type": "output",
   "status": "ok",
   "title": {
    "en": "Final 4:5",
    "ru": "Финал 4:5"
   },
   "tool": "1080×1350 · 30 fps · 30 s",
   "script": "",
   "gens": 0,
   "cost": 0,
   "thumbs": [
    "media/final45_p.jpg"
   ],
   "what": {
    "en": "Same cut for the feed: UI smaller with app-white margins, captions lower and smaller.",
    "ru": "Тот же монтаж для ленты: интерфейс меньше с белыми полями, субтитры ниже и мельче."
   },
   "prompts": [],
   "params": [],
   "media": [
    {
     "src": "media/final45.mp4",
     "cap": {
      "en": "4:5",
      "ru": "4:5"
     },
     "ok": true,
     "kind": "video",
     "wide": true
    }
   ]
  }
 ],
 "edges": [
  [
   "brief",
   "screencast"
  ],
  [
   "brief",
   "keys_klein",
   "rej"
  ],
  [
   "brief",
   "keys_nbp"
  ],
  [
   "keys_nbp",
   "kling"
  ],
  [
   "kling",
   "edit"
  ],
  [
   "brief",
   "voice_v1",
   "rej"
  ],
  [
   "voice_v1",
   "voice_cut",
   "rej"
  ],
  [
   "voice_v1",
   "omni_test",
   "rej"
  ],
  [
   "brief",
   "voice_take"
  ],
  [
   "voice_take",
   "phrases"
  ],
  [
   "phrases",
   "omni"
  ],
  [
   "omni",
   "omni_s1"
  ],
  [
   "omni",
   "edit"
  ],
  [
   "omni_s1",
   "edit"
  ],
  [
   "omni",
   "omni_s3"
  ],
  [
   "omni_s3",
   "edit"
  ],
  [
   "phrases",
   "edit"
  ],
  [
   "brief",
   "sound"
  ],
  [
   "sound",
   "edit"
  ],
  [
   "screencast",
   "ui_v1",
   "rej"
  ],
  [
   "screencast",
   "ui_v2",
   "rej"
  ],
  [
   "screencast",
   "ui_v3"
  ],
  [
   "ui_v3",
   "packshot"
  ],
  [
   "ui_v3",
   "edit"
  ],
  [
   "packshot",
   "edit"
  ],
  [
   "edit",
   "final"
  ],
  [
   "edit",
   "variations"
  ]
 ],
 "order": [
  "brief",
  "screencast",
  "keys_klein",
  "keys_nbp",
  "voice_v1",
  "omni_test",
  "voice_cut",
  "voice_take",
  "phrases",
  "sound",
  "ui_v1",
  "ui_v2",
  "ui_v3",
  "packshot",
  "omni",
  "omni_s1",
  "omni_s3",
  "kling",
  "edit",
  "final",
  "variations"
 ]
};
