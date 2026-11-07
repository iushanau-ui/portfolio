/* PersProtect S19 case: all graph content. Layout code is in index.html.
   cost = price per node in $ (paid API runs); local runs are $0. */
window.CASE = {
  /* final video: swap this one line when a new cut is ready */
  finalVideo: "media/final.mp4",
  finalPoster: "media/final_p.jpg",

  types: {
    input:  { en: "brief",             ru: "бриф" },
    local:  { en: "local · ComfyUI",   ru: "локально · ComfyUI" },
    code:   { en: "local · code",      ru: "локально · код" },
    paid:   { en: "paid API · fal.ai", ru: "платно · fal.ai" },
    output: { en: "output",            ru: "результат" }
  },

  /* grid: column k -> x = k*290; rows are set per lane */
  nodes: [
  /* ---------- C0 brief ---------- */
  { id: "brief", x: 0, y: 400, type: "input", status: "ok",
    title: { en: "Brief S19", ru: "Бриф S19" },
    tool: { en: "test task", ru: "тестовое задание" }, script: "",
    gens: 0, cost: 0, thumbs: [],
    mini: { en: "9:16 · ~26 s · 6 scenes\nAI UGC + UI demo", ru: "9:16 · ~26 с · 6 сцен\nAI UGC + UI-демо" },
    what: { en: "A ~26 s vertical AI UGC ad with a UI demo for PersProtect.",
            ru: "Вертикальный AI UGC-ролик ~26 с с UI-демо для PersProtect." },
    prompts: [], params: [], media: [] },

  /* ---------- C1 assets: hero, voice, sound ---------- */
  { id: "hero_cast", x: 296, y: 340, type: "local", status: "ok",
    title: { en: "Hero casting", ru: "Кастинг героини" },
    tool: "Krea 2 turbo + realism LoRA", script: "s01_hero.py · s01b_cast.py",
    gens: 19, cost: 0,
    thumbs: ["media/cast_A1.jpg", "media/cast_C2.jpg", "media/cast_D1.jpg"],
    what: { en: "4 types × 2 seeds after a first round. Picked C2, details cleaned with FLUX.2 klein.",
            ru: "4 типажа × 2 сида после первого круга. Выбрана C2, детали дочищены FLUX.2 klein." },
    prompts: [{ label: "casting template", text: "Front-camera smartphone selfie video frame, vertical. {who}, shoulder-length dark brown hair with clearly visible natural silver-gray streaks at the temples, reading glasses pushed up on top of her head, wearing a plain heather-gray zip-up hoodie, no makeup, natural skin texture with real pores, smile lines and fine wrinkles, kind warm eyes, calm neutral expression with a hint of warmth, mouth closed, looking into the camera. Her right arm extended toward the camera holding the phone (only the shoulder and upper arm visible at the frame edge), her left hand resting on the dark gray handle of a gray metal shopping cart, in an ordinary American supermarket aisle, camera slightly above eye level and slightly off-center, head a little tilted, shelves softly out of focus, flat overhead fluorescent lighting. Casual amateur phone footage look, slight wide-angle lens distortion, realistic, not studio, not glamorous." },
              { label: "{who} = C (chosen)", text: "a homey 52-year-old white American woman with fair skin, light freckles across her nose and cheeks and a kind motherly face" }],
    params: [["steps", "8"], ["size", "864×1536"]],
    media: [
      { src: "media/cast_A1.jpg", cap: { en: "A", ru: "A" } },
      { src: "media/cast_B1.jpg", cap: { en: "B", ru: "B" } },
      { src: "media/cast_C2.jpg", ok: true, cap: { en: "C2 · chosen", ru: "C2 · выбрана" } },
      { src: "media/cast_D1.jpg", cap: { en: "D", ru: "D" } },
      { src: "media/hero_first_111.jpg", rej: true, cap: { en: "first round", ru: "первый круг" }, why: { en: "not chosen", ru: "не выбран" } },
      { src: "media/hero_first_113.jpg", rej: true, cap: { en: "first round", ru: "первый круг" }, why: { en: "not chosen", ru: "не выбран" } }
    ] },

  { id: "voice_mm", x: 296, y: 0, type: "paid", status: "ok",
    title: { en: "Voice · MiniMax", ru: "Голос · MiniMax" },
    tool: "fal: fal-ai/minimax/speech-02-hd", script: "s02c_voice_mm.py",
    gens: 4, cost: 0.14, thumbs: [],
    what: { en: "Plain text plus a pronunciation dictionary. Wise_Woman, pitch -1 chosen.",
            ru: "Чистый текст и словарь произношения. Выбран Wise_Woman, pitch -1." },
    prompts: [{ label: "text", text: "I just got a text saying my card is blocked. My first thought? Tap the link and fix it. But PersProtect stopped it. It's a phishing site. Real banks don't send links like that. They don't rush you. And that domain isn't my bank. PersProtect checks every link before it opens, and blocks scam sites in real time. Go to PersProtect dot com before you tap the next one." },
              { label: "pronunciation_dict", text: "PersProtect/(pərs)(prəˈtɛkt)" }],
    params: [["voices", "Wise_Woman, Abbess"], ["pitch", "-1, -3"]],
    media: [
      { src: "media/voice_mm_wise.mp3", kind: "audio", ok: true, cap: { en: "Wise_Woman, pitch -1", ru: "Wise_Woman, pitch -1" } },
      { src: "media/voice_mm_abbess.mp3", kind: "audio", rej: true, cap: { en: "Abbess, pitch -1", ru: "Abbess, pitch -1" }, why: { en: "not chosen", ru: "не выбран" } }
    ] },

  { id: "voice_qwen", x: 296, y: 170, type: "local", status: "rejected",
    title: { en: "Voice · local TTS", ru: "Голос · локальный TTS" },
    tool: "Qwen3-TTS 1.7B VoiceDesign", script: "s02_voice.py",
    gens: 9, cost: 0, thumbs: [],
    what: { en: "Whole script in one take. First voices sounded too young.",
            ru: "Весь текст одним дублем. Первые голоса звучали слишком молодо." },
    prompts: [{ label: "voice design V4", text: "A mature American woman in her late fifties with a low, slightly husky alto voice, a little gravel and age in it, neutral General American accent. Warm and kind like a longtime neighbor, speaks a bit slower, natural breaths, conversational, not a narrator." }],
    params: [],
    media: [
      { src: "media/voice_qwen_v1.mp3", kind: "audio", rej: true, cap: { en: "V1", ru: "V1" }, why: { en: "too young", ru: "слишком молодо" } },
      { src: "media/voice_qwen_v4.mp3", kind: "audio", rej: true, cap: { en: "V4", ru: "V4" }, why: { en: "not chosen", ru: "не выбран" } }
    ] },

  { id: "sfx", x: 296, y: 830, type: "local", status: "ok",
    title: { en: "SFX + music", ru: "Звуки + музыка" },
    tool: "Stable Audio 3 · ACE-Step 1.5 XL", script: "s06_sound.py",
    gens: 23, cost: 0, thumbs: [],
    what: { en: "Store ambience, SMS, tap, block alert, pops, music. All generated locally.",
            ru: "Фон зала, SMS, тап, звук блокировки, «попы», музыка. Всё локально." },
    prompts: [{ label: "block alert", text: "A short app security alert sound: a soft low thump followed by a gentle bright two-tone confirmation chime, modern clean UI sound, shield activated, then silence." },
              { label: "music", text: "Light unobtrusive background music for a casual social media video, soft lo-fi acoustic: muted plucked guitar, soft felt piano, gentle brushed drums, warm and calm, positive and reassuring, steady low energy, no drops, no sudden hits, instrumental only, no vocals." }],
    params: [["SFX", { en: "21 clips, 9 kinds", ru: "21 клип, 9 видов" }], ["music", "88 BPM · G major"]],
    media: [
      { src: "media/sfx_amb2.mp3", kind: "audio", cap: { en: "store ambience", ru: "фон зала" } },
      { src: "media/sfx_sms3.mp3", kind: "audio", cap: { en: "SMS", ru: "SMS" } },
      { src: "media/sfx_block2.mp3", kind: "audio", cap: { en: "block alert", ru: "звук блокировки" } },
      { src: "media/sfx_music1.mp3", kind: "audio", cap: { en: "music", ru: "музыка" } }
    ] },

  /* ---------- C2 ---------- */
  { id: "mix", x: 592, y: 830, type: "code", status: "ok",
    title: { en: "Sound mix", ru: "Сведение звука" },
    tool: "ffmpeg · Python", script: "s07_sound_mix.py",
    gens: 0, cost: 0, thumbs: [],
    what: { en: "Each sound is placed from the voice's word timings, so the mix fits any take.",
            ru: "Каждый звук ставится по таймингам слов голоса, поэтому микс подходит к любому дублю." },
    prompts: [{ label: "voice chain", text: "highpass=f=130,lowpass=f=9500,equalizer=f=2800:t=q:w=1.2:g=3,equalizer=f=250:t=q:w=1:g=-2,acompressor=threshold=-20dB:ratio=3:attack=5:release=80,aecho=0.8:0.5:28|46:0.12|0.07" },
              { label: "events", text: "buzz + sms -> \"My first thought\"\ntap + block -> \"But PersProtect\"\npop x3 -> \"Real banks\" / \"They don't\" / \"And that\"\ntick -> \"checks every link\"" }],
    params: [["master", "loudnorm I=-14"]],
    media: [{ src: "media/mix_v12.mp3", kind: "audio", ok: true, cap: { en: "final mix", ru: "финальный микс" } }] },

  /* ---------- C3 start frames ---------- */
  { id: "selfie_keys", x: 592, y: 340, type: "local", status: "ok",
    title: { en: "Selfie start frames", ru: "Стартовые кадры селфи" },
    tool: "FLUX.2 klein 9B edit", script: "s08_selfie_keys.py",
    gens: 21, cost: 0,
    thumbs: ["media/key_s1.jpg", "media/key_s4b.jpg", "media/key_s6.jpg"],
    what: { en: "One start frame per selfie scene, edited from the reference.",
            ru: "Стартовый кадр для каждой селфи-сцены из референса." },
    prompts: [{ label: "common", text: "Keep the same woman with the same face, hair, glasses on her head, gray hoodie, the same supermarket aisle, lighting and the same front-camera selfie look. Realistic phone photo." },
              { label: "scene 1", text: "She looks concerned and a little worried, a slight frown between her eyebrows, a natural subtle expression, not exaggerated, lips slightly parted as if about to speak, looking into the camera. Same framing, her left hand on the cart handle." }],
    params: [["steps", "4"]],
    media: [
      { src: "media/key_s1.jpg", ok: true, cap: { en: "scene 1", ru: "сцена 1" } },
      { src: "media/key_s4b.jpg", ok: true, cap: { en: "scene 4", ru: "сцена 4" } },
      { src: "media/key_s6.jpg", ok: true, cap: { en: "scene 6", ru: "сцена 6" } },
      { src: "media/key_s4_palm.jpg", rej: true, cap: { en: "scene 4, first try", ru: "сцена 4, первая попытка" }, why: { en: "open palm", ru: "открытая ладонь" } }
    ] },

  { id: "pov_key", x: 592, y: 1010, type: "local", status: "ok",
    title: { en: "POV start frame", ru: "Стартовый кадр POV" },
    tool: "Krea 2 turbo + realism LoRA", script: "s04_pov_key.py",
    gens: 8, cost: 0,
    thumbs: ["media/pov_start.jpg"],
    what: { en: "Phone over the cart with a flat green screen for the UI later.",
            ru: "Телефон над тележкой, экран ровный зелёный под будущий UI." },
    prompts: [{ label: "prompt", text: "First-person point-of-view smartphone video frame, vertical, looking down: a 52-year-old woman's left hand holding a black modern smartphone upright in portrait orientation close to the camera, the phone fills the center of the frame and its screen is a perfectly flat solid bright chroma-key green rectangle edge to edge with thin black bezels, her thumb resting on the side of the phone, not covering the screen. The sleeve of a heather-gray zip-up hoodie at her wrist. Below the phone a plain gray metal wire shopping cart with a dark gray plastic handle and a few groceries (milk carton, bread, apples, cereal box) in an ordinary American supermarket aisle, flat fluorescent lighting, slightly blurry background shelves. Casual amateur phone footage, realistic, natural colors." }],
    params: [["steps", "8"]],
    media: [
      { src: "media/pov_start.jpg", ok: true, cap: { en: "start frame", ru: "стартовый кадр" } }
    ] },

  /* ---------- C4 video generation ---------- */
  { id: "omni", x: 888, y: 0, type: "paid", status: "ok",
    title: { en: "Talking selfies · OmniHuman", ru: "Говорящие селфи · OmniHuman" },
    tool: "fal: bytedance/omnihuman/v2", script: "s10b_omni.py · s10c_omni_rest.py",
    gens: 3, cost: 1.64,
    thumbs: ["media/omni_s1_p.jpg", "media/omni_s6_p.jpg"],
    what: { en: "Face and lips driven by the voice. Scenes 1 and 6 are in the final.",
            ru: "Лицо и губы из голоса. Сцены 1 и 6 вошли в финал." },
    prompts: [{ label: "scene 6", text: "Front-camera selfie video in a supermarket aisle. The camera is her own phone held at arm's length, so the phone itself is never visible in the frame. The camera stays at the same arm's-length distance, no zoom, no pulling back. Realistic amateur phone footage, accurate lip sync. A 52-year-old woman speaks confidently and warmly into the camera giving friendly advice; after she finishes speaking she smiles and nods slightly, keeping eye contact with the lens." }],
    params: [["input", { en: "start frame + voice clip", ru: "стартовый кадр + кусок голоса" }]],
    media: [
      { src: "media/omni_s1.mp4", kind: "video", ok: true, cap: { en: "scene 1", ru: "сцена 1" } },
      { src: "media/omni_s6.mp4", kind: "video", ok: true, cap: { en: "scene 6", ru: "сцена 6" } },
      { src: "media/omni_s4_6f.mp4", kind: "video", rej: true, cap: { en: "scene 4", ru: "сцена 4" }, why: { en: "six fingers", ru: "шесть пальцев" } }
    ] },

  { id: "pov_kling", x: 888, y: 1010, type: "paid", status: "ok",
    title: { en: "POV clip · Kling 3 Pro", ru: "POV-клип · Kling 3 Pro" },
    tool: "fal: fal-ai/kling-video/v3/pro/image-to-video", script: "s11_pov_kling.py",
    gens: 1, cost: 0.67,
    thumbs: ["media/pov_kling3_p.jpg"],
    what: { en: "One 6 s take for scenes 2, 3 and 5: walk, tap, hold.",
            ru: "Один дубль 6 с на сцены 2, 3 и 5: идёт, тап, держит." },
    prompts: [{ label: "prompt", text: "First-person view. Her left hand holds a black smartphone upright above a gray shopping cart while she slowly walks down a supermarket aisle; the phone sways gently with her steps. At 3 seconds her right index finger comes in from the right, taps once on the center of the screen and moves away. She then stops and holds the phone steady. The phone screen stays a flat, solid bright green the entire time. Handheld, natural fluorescent light, realistic phone footage." },
              { label: "negative", text: "blur, distortion, low quality, extra fingers, deformed hands, screen content, glowing screen, text on screen, phone changing shape" }],
    params: [["duration", "6 s"], ["cfg_scale", "0.5"]],
    media: [{ src: "media/pov_kling3.mp4", kind: "video", ok: true, cap: { en: "green-screen POV", ru: "POV с зелёным экраном" } }] },

  /* ---------- C5-C8 scene 4: finger counting ---------- */
  { id: "s4_nb", x: 888, y: 340, type: "paid", status: "ok",
    title: { en: "Sc.4 key frames · Nano Banana Pro", ru: "Сц.4 ключи · Nano Banana Pro" },
    tool: "fal: fal-ai/nano-banana-pro/edit", script: "s18b_keys_nanobanana.py",
    gens: 2, cost: 0.60,
    thumbs: ["media/nb_one_0.jpg", "media/nb_three_0.jpg"],
    what: { en: "She counts on her fingers. Clean «one» and «three» frames for the video model.",
            ru: "Она загибает пальцы. Чистые кадры «один» и «три» для видеомодели." },
    prompts: [{ label: "prompt («one»)", text: "Edit this photo. Keep the same woman, the same face, hair, glasses on her head, gray zip hoodie, the same supermarket aisle, lighting, camera angle and front-camera selfie framing exactly. Change only her free hand: she lifts it from the cart handle and holds it up at chest height beside her shoulder, palm facing the camera, showing the number one: only the index finger extended straight up; the middle, ring and little fingers folded down, the thumb folded across them. A natural, clearly visible woman's hand with exactly five fingers, sharp focus on the hand. Calm, confident, slightly reassuring expression, mouth closed. No watch, no rings. Realistic phone photo." }],
    params: [["num_images", "2"]],
    media: [
      { src: "media/nb_one_0.jpg", ok: true, cap: { en: "«one»", ru: "«один»" } },
      { src: "media/nb_three_0.jpg", ok: true, cap: { en: "«three»", ru: "«три»" } }
    ] },

  { id: "s4_kling", x: 1184, y: 340, type: "paid", status: "partial",
    title: { en: "Sc.4 first/last frame · Kling", ru: "Сц.4 первый/последний кадр · Kling" },
    tool: "fal: fal-ai/kling-video/v3/pro/image-to-video", script: "s18_s4_fingers.py",
    gens: 2, cost: 1.01,
    thumbs: ["media/s4_kling123_p.jpg"],
    what: { en: "Kling moves between two correct hands. Silent, lips come next.",
            ru: "Kling переходит между двумя правильными руками. Без звука, губы дальше." },
    prompts: [{ label: "prompt (6 s)", text: "Handheld front-camera selfie video in a supermarket aisle, the phone held at arm's length with a natural slight hand shake, no zoom, no cuts. She is calm and confident, talking to the camera with natural mouth movement. She counts three points on her raised hand at chest height, palm toward the camera: at the start she shows one finger (index finger up), at about 2 seconds she also raises the middle finger to show two fingers, at about 4 seconds she also raises the ring finger to show three fingers, then holds three fingers up. The hand stays steady and fully visible. Natural, anatomically correct hand with five fingers. Same face, hair, glasses on her head, gray hoodie, same aisle and lighting." }],
    params: [["start / end", "«one» -> «three»"], ["cfg_scale", "0.5"]],
    media: [
      { src: "media/s4_kling123.mp4", kind: "video", cap: { en: "one -> three", ru: "один -> три" } },
      { src: "media/s4_kling_one.mp4", kind: "video", cap: { en: "holds one", ru: "держит один" } }
    ] },

  { id: "s4_react", x: 1480, y: 340, type: "paid", status: "partial",
    title: { en: "Sc.4 live face · sync React-1", ru: "Сц.4 живое лицо · sync React-1" },
    tool: "fal: fal-ai/sync-lipsync/react-1", script: "s18c_react1.py",
    gens: 1, cost: 0.98,
    thumbs: ["media/s4_react_p.jpg"],
    what: { en: "Expression and lips over the Kling clip. Its «two / three» part is in the final.",
            ru: "Мимика и губы поверх клипа Kling. Его часть «два / три» в финале." },
    prompts: [], params: [["model_mode", "face"], ["length", "5.9 s"]],
    media: [{ src: "media/s4_react.mp4", kind: "video", ok: true, cap: { en: "React-1", ru: "React-1" } }] },

  { id: "s4_omni", x: 1184, y: 600, type: "paid", status: "partial",
    title: { en: "Sc.4 one take · OmniHuman", ru: "Сц.4 одним дублем · OmniHuman" },
    tool: "fal: bytedance/omnihuman/v2", script: "s18d_omni_fingers.py",
    gens: 1, cost: 0.62,
    thumbs: ["media/s4_omni1_p.jpg"],
    what: { en: "Face from the voice. The first 2.2 s («one») are in the final.",
            ru: "Лицо из голоса. Первые 2,2 с («один») в финале." },
    prompts: [{ label: "prompt", text: "Static selfie camera at arm's length, no zoom. Calm, confident and reassuring. Speaking directly to the camera with natural lip movement and small head movements. Her raised hand stays at chest height, palm toward the camera, and counts on her fingers: one finger at the start, she raises a second finger at about 2 seconds, a third finger at about 4 seconds. The hand stays steady and fully in frame. Natural anatomically correct hand." }],
    params: [],
    media: [{ src: "media/s4_omni1.mp4", kind: "video", cap: { en: "first 2.2 s used", ru: "взяты первые 2,2 с" } }] },

  { id: "s4_hybrid", x: 1776, y: 520, type: "code", status: "ok",
    title: { en: "Sc.4 hybrid", ru: "Сц.4 гибрид" },
    tool: "OpenCV + ffmpeg", script: "s18h_hybrid.py",
    gens: 0, cost: 0,
    thumbs: ["media/s4_hybrid_p.jpg"],
    what: { en: "OmniHuman «one» + React-1 «two / three». The cut hides in a fast push-in.",
            ru: "OmniHuman «один» + React-1 «два / три». Стык спрятан в быстром наезде." },
    prompts: [{ label: "cut", text: "CUT = 2.23   # start of \"They don't rush you\"\nzoom in 1 -> 1.22 (0.2 s) + motion blur\nland 1.22 -> 1.06 (0.3 s)" }],
    params: [],
    media: [{ src: "media/s4_hybrid.mp4", kind: "video", ok: true, cap: { en: "scene 4 in the final", ru: "сцена 4 в финале" } }] },

  /* ---------- C9 tracking / UI ---------- */
  { id: "track", x: 2072, y: 1010, type: "code", status: "ok",
    title: { en: "Screen tracking", ru: "Трекинг экрана" },
    tool: { en: "OpenCV · line fit", ru: "OpenCV · подгонка прямых" }, script: "s17_track2.py",
    gens: 0, cost: 0,
    thumbs: ["media/track_corners.jpg"],
    what: { en: "Screen sides fitted as lines, corners = intersections, then smoothing.",
            ru: "Стороны экрана - прямые, углы = пересечения, затем сглаживание." },
    prompts: [{ label: "core", text: "q0 = init_quad(green > .5)\nq  = fit_quad(alpha, q0, skin, gate=14)   # cv2.fitLine per side\nq  = fit_quad(alpha, q, skin, gate=5)\nS  = savgol_filter(Q, 9, 2, axis=0)" }],
    params: [],
    media: [{ src: "media/track_corners.jpg", wide: true, cap: { en: "4 corners, zoomed", ru: "4 угла крупно" } }] },

  { id: "ui", x: 2072, y: 0, type: "code", status: "ok",
    title: { en: "Phone UI in HTML", ru: "Экраны телефона в HTML" },
    tool: { en: "HTML/CSS + Playwright", ru: "HTML/CSS + Playwright" }, script: "ui2.html · pack3.html · s03_ui_render.py",
    gens: 0, cost: 0,
    thumbs: ["media/ui_sms.jpg", "media/ui_block.jpg", "media/ui_dash.jpg"],
    what: { en: "Screens are HTML, rendered frame by frame. Text stays sharp and editable.",
            ru: "Экраны - HTML, рендер покадрово. Текст чёткий и правится." },
    prompts: [{ label: "render loop", text: "for i in range(int(dur * FPS)):\n    pg.evaluate(f\"T('{scene}', {i / FPS})\")\n    pg.screenshot(path=f\"frames/{scene}/{i:04d}.png\")" }],
    params: [["viewport", "393×852 @3x"]],
    media: [
      { src: "media/ui_sms.jpg", cap: { en: "SMS", ru: "SMS" } },
      { src: "media/ui_block.jpg", cap: { en: "block page", ru: "блокировка" } },
      { src: "media/ui_dash.jpg", cap: { en: "Just blocked", ru: "Just blocked" } },
      { src: "media/pack3.jpg", cap: { en: "packshot", ru: "пакшот" } }
    ] },

  /* ---------- C10 RIFE ---------- */
  { id: "rife", x: 2072, y: 340, type: "local", status: "ok",
    title: { en: "24 -> 48 fps", ru: "24 -> 48 к/с" },
    tool: "RIFE 4.9 ×2", script: "s20_rife.py",
    gens: 5, cost: 0, thumbs: [],
    mini: { en: "selfie + POV clips\nlossless ffv1", ru: "клипы селфи и POV\nffv1 без потерь" },
    what: { en: "Source clips doubled to 48 fps before the edit.",
            ru: "Исходные клипы удвоены до 48 к/с перед монтажом." },
    prompts: [], params: [], media: [] },

  /* ---------- C11 edit ---------- */
  { id: "edit", x: 2368, y: 760, type: "code", status: "ok",
    title: { en: "The edit, as code", ru: "Монтаж кодом" },
    tool: "Python · OpenCV · Playwright · ffmpeg", script: "s19_edit_v7.py",
    gens: 0, cost: 0,
    thumbs: ["media/fin_03_6.jpg", "media/fin_07_6.jpg", "media/fin_14_2.jpg"],
    what: { en: "A script renders every frame: rendered phone over the green one, fingers on top, UI, captions, plaques, one colour grade.",
            ru: "Скрипт рендерит каждый кадр: свой телефон вместо зелёного, пальцы поверх, UI, субтитры, плашки, единый цвет." },
    prompts: [{ label: "timeline", text: "SEG = [\n  (0.00, 2.96, \"selfie\", \"s1\"),\n  (2.96, 6.62, \"pov\"),    (6.62, 9.32, \"fullscreen\"),\n  (9.32, 15.00, \"selfie\", \"s4\"),\n  (15.00, 15.90, \"pov\"),  (15.90, 19.80, \"fullscreen\"),\n  (19.80, 23.58, \"selfie\", \"s6\"),\n  (23.58, end, \"pack\"),\n]" },
              { label: "colour", text: "pov = transfer(pov, lab_stats(pov), lab_stats(selfies))   # LAB match\ncamera_look: soft S-curve, saturation x0.94" }],
    params: [["output", "1080×1920 · 48 fps"]],
    media: [
      { src: "media/pov_raw.jpg", cap: { en: "Kling source", ru: "исходник Kling" } },
      { src: "media/fin_03_6.jpg", ok: true, cap: { en: "rendered phone + UI", ru: "свой телефон + UI" } },
      { src: "media/fin_07_6.jpg", cap: { en: "block page", ru: "блокировка" } },
      { src: "media/fin_14_2.jpg", cap: { en: "plaques", ru: "плашки" } }
    ] },

  /* ---------- C12 outputs ---------- */
  { id: "versions", x: 2664, y: 520, type: "code", status: "ok", history: true,
    title: { en: "Edit versions v2-v12", ru: "Версии монтажа v2-v12" },
    tool: { en: "same scripts, 11 renders", ru: "те же скрипты, 11 рендеров" }, script: "s12_edit.py ... s19_edit_v7.py",
    gens: 0, cost: 0,
    thumbs: ["media/ver_v02a.jpg", "media/ver_v07b.jpg", "media/ver_v12a.jpg"],
    versions: [
      ["v02", { en: "first draft", ru: "черновик" }],
      ["v03", { en: "big POV", ru: "крупный POV" }],
      ["v04", { en: "full-frame screen", ru: "экран на весь кадр" }],
      ["v05", { en: "continuous UI", ru: "сплошной UI" }],
      ["v06", { en: "stabilised", ru: "стабилизация" }],
      ["v07", { en: "phone replaced", ru: "замена телефона" }],
      ["v08", { en: "sc.4 hybrid", ru: "сц.4 гибрид" }],
      ["v09", { en: "push-in at the cut", ru: "наезд на стыке" }],
      ["v10", { en: "screen as if filmed", ru: "экран как снятый" }],
      ["v11", { en: "48 fps", ru: "48 к/с" }],
      ["v12", { en: "new UI", ru: "новый UI" }]
    ],
    what: { en: "Each version is a full re-render. Top: 3.6 s, bottom: 11 s.",
            ru: "Каждая версия - полный перерендер. Сверху 3,6 с, снизу 11 с." },
    prompts: [], params: [], media: [] },

  { id: "final", x: 2664, y: 760, type: "output", status: "ok",
    title: { en: "Final · S19", ru: "Финал · S19" },
    tool: "1080×1920 · 48 fps", script: "",
    gens: 0, cost: 0,
    thumbs: ["media/fin_01_0.jpg"],
    what: { en: "One hero, one location, burned-in captions.",
            ru: "Одна героиня, одна локация, вшитые субтитры." },
    prompts: [], params: [], media: [{ src: "FINAL", kind: "video", ok: true, cap: { en: "final cut, with sound", ru: "финальный ролик, со звуком" } }] },

  /* ---------- tests that did not make it (paid, counted in the total) ---------- */
  { id: "tests", x: 296, y: 1100, type: "paid", status: "rejected",
    title: { en: "Tests and rejects", ru: "Тесты и отбраковка" },
    tool: { en: "ElevenLabs · LTX-2.3 · OmniHuman · Kling LipSync · Kling Avatar · FLUX.2 klein", ru: "ElevenLabs · LTX-2.3 · OmniHuman · Kling LipSync · Kling Avatar · FLUX.2 klein" }, script: "",
    gens: 32, cost: 3.08,
    thumbs: ["media/t_omni2_p.jpg", "media/t_avatar_p.jpg", "media/t_lipsync_p.jpg"],
    what: { en: "Paid attempts that did not go into the video: 10 fal runs, plus 22 local key-frame tries for scene 4.",
            ru: "Платные попытки, которые не вошли в ролик: 10 запусков на fal и 22 локальные попытки кадров сцены 4." },
    prompts: [],
    params: [["ElevenLabs v4", "4 · $0.13"], ["LTX-2.3 talking selfie", "2 · $0.62"], ["OmniHuman sc.4", "2 · $1.36"], ["Kling LipSync", "1 · $0.14"], ["Kling AI Avatar", "1 · $0.83"], [{ en: "FLUX.2 klein, local", ru: "FLUX.2 klein, локально" }, "22 · $0"]],
    media: [
      { src: "media/t_omni2.mp4", kind: "video", rej: true, cap: { en: "OmniHuman, 2nd try", ru: "OmniHuman, 2-я попытка" }, why: { en: "wrong finger count", ru: "сбился счёт пальцев" } },
      { src: "media/t_avatar.mp4", kind: "video", rej: true, cap: { en: "Kling AI Avatar", ru: "Kling AI Avatar" }, why: { en: "one - palm - one", ru: "один - ладонь - один" } },
      { src: "media/t_lipsync.mp4", kind: "video", rej: true, wide: true, cap: { en: "left Kling LipSync, right React-1", ru: "слева Kling LipSync, справа React-1" }, why: { en: "robotic lips", ru: "губы как у робота" } }
    ] },

  /* ---------- hook variations ---------- */
  { id: "hooks", x: 888, y: 1250, type: "paid", status: "ok",
    title: { en: "Hook variations", ru: "Хуки вариаций" },
    tool: "MiniMax · FLUX.2 klein · OmniHuman v2", script: "s22_hook_voice.py · s23_hook2_keys.py · s23b_hook2_omni.py",
    gens: 15, cost: 0.43,
    thumbs: ["media/hook2_913.jpg", "media/var1_p.jpg", "media/var2_p.jpg"],
    what: { en: "Two new openings in the same voice. B starts on a new close-up: start frame local, face animated by OmniHuman.",
            ru: "Два новых начала тем же голосом. B начинается с нового крупного плана: кадр локально, лицо оживил OmniHuman." },
    prompts: [{ label: "A · voice", text: "Got this text today. Would you tap it?" },
              { label: "B · voice", text: "This text almost emptied my checking account." },
              { label: "B · close-up (FLUX.2 klein edit)", text: "Keep the same woman with the same face identity, gray hair streaks in dark shoulder-length hair, reading glasses pushed up on her head, gray zip hoodie, the same supermarket aisle and fluorescent lighting, realistic front-camera selfie phone photo. New framing: an extreme close-up - she has leaned in close to the phone camera, her face fills most of the frame, cropped at the shoulders, the camera slightly above eye level. Calm, serious and trustworthy expression, relaxed brow, a composed face, looking straight into the lens like a friend quietly sharing something important, lips slightly parted about to speak, no frown. No hands and no phone visible in the frame." }],
    params: [["fal", "MiniMax ×2 · OmniHuman ×1"], [{ en: "local", ru: "локально" }, "FLUX.2 klein ×12"]],
    media: [
      { src: "media/hook2_913.jpg", ok: true, cap: { en: "B close-up · chosen", ru: "крупный план B · выбран" } },
      { src: "media/hook2_911.jpg", rej: true, cap: { en: "seed 911", ru: "сид 911" }, why: { en: "too worried", ru: "слишком тревожно" } },
      { src: "media/hook_v1.mp3", kind: "audio", ok: true, cap: { en: "hook A", ru: "хук A" } },
      { src: "media/hook_v2.mp3", kind: "audio", ok: true, cap: { en: "hook B", ru: "хук B" } }
    ] },

  { id: "variations", x: 2664, y: 1250, type: "output", status: "ok",
    title: { en: "2 variations", ru: "2 вариации" },
    tool: "1080×1920 · 48 fps", script: "",
    gens: 0, cost: 0,
    thumbs: ["media/var1_p.jpg", "media/var2_p.jpg"],
    what: { en: "Same edit script, a different opening: A asks the viewer, B leads with the money at stake.",
            ru: "Тот же скрипт монтажа, другое начало: A спрашивает зрителя, B начинает со ставки - денег." },
    prompts: [], params: [],
    media: [
      { src: "media/var1.mp4", kind: "video", ok: true, cap: { en: "A · «Would you tap it?»", ru: "A · «Would you tap it?»" } },
      { src: "media/var2.mp4", kind: "video", ok: true, cap: { en: "B · «This text almost emptied my account»", ru: "B · «This text almost emptied my account»" } }
    ] },

  ],


  /* wires: [from, to, kind]; kind "rej" = input of a rejected attempt (dashed) */
  edges: [
    ["brief", "hero_cast"], ["brief", "voice_mm"], ["brief", "voice_qwen", "rej"], ["brief", "sfx"],
    ["hero_cast", "selfie_keys"], ["selfie_keys", "omni"], ["voice_mm", "omni"],
    ["voice_mm", "mix"], ["sfx", "mix"],
    ["pov_key", "pov_kling"], ["pov_kling", "track"], ["pov_kling", "rife"],
    ["selfie_keys", "s4_nb"], ["s4_nb", "s4_kling"], ["s4_kling", "s4_react"], ["s4_react", "s4_hybrid"],
    ["s4_nb", "s4_omni"], ["s4_omni", "s4_hybrid"], ["s4_hybrid", "rife"], ["omni", "rife"],
    ["rife", "edit"], ["track", "edit"], ["mix", "edit"], ["ui", "edit"],
    ["edit", "versions"], ["edit", "final"],
    ["brief", "tests", "rej"], ["selfie_keys", "hooks"], ["hooks", "variations"], ["edit", "variations"]
  ],

  order: ["brief", "hero_cast", "voice_qwen", "voice_mm", "sfx", "mix", "selfie_keys", "pov_key",
          "omni", "pov_kling", "s4_nb", "s4_kling", "s4_react", "s4_omni", "s4_hybrid", "track", "ui",
          "rife", "edit", "versions", "final", "hooks", "variations", "tests"]
};
