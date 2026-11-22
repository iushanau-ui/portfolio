Stark Games - AI Art Researcher test - ComfyUI workflows
=========================================================

One workflow per delivered result. Seeds, prompts, models and settings are fixed inside,
so one run gives exactly the delivered result (checked pixel for pixel on the author's machine).

How to run
  1. Start ComfyUI with the flag --disable-smart-memory
     (portable: add it to the line in run_nvidia_gpu.bat). The delivered results were made this way;
     with the default memory mode the Krea 2 images (1b) can differ slightly.
  2. Copy the PNG files from 04_Inputs into ComfyUI/input.
  3. Open a .json in ComfyUI (Workflow > Open, or drag it onto the canvas) and press Run.

Workflows
  1a_royalmatch3d_01.json   Qwen-Image-Edit 2511 fp8 + Lightning 4 steps, seed 12        input: stark_grandpa_ref.png
  1a_royalmatch3d_02.json   Qwen-Image-Edit 2511 fp8 + Lightning 4 steps, seed 11        input: stark_grandpa_ref.png
  1b_realism_01.json        Krea 2 turbo fp8 img2img 0.75 + krea2_realism_v2 LoRA 0.6, seed 22   input: stark_grandpa_ref_pad.png
  1b_realism_02.json        same, seed 25                                                 input: stark_grandpa_ref_pad.png
  2_turtle_01.json          one branch of 6 passes:                                       inputs: stark_grandpa_ref.png,
  2_turtle_02.json            1 Qwen-Image-Edit 2511 fits the turtle into the silhouette          stark_ctrl_silhouette_fill.png,
                              2-6 FLUX.2 klein 9B: pirate style, pirate manner, clay jug,          stark_grandpa_face_style.png
                                  four fingers and plastron, final cleanup
  3_video.json              one branch of 6 steps:                                        input: stark_pdf_p3_2.png
                              1 FLUX.2 klein 9B: cyclops design (Royal Match frame as style)       (Royal Match frame from the brief)
                              2-3 draft first and last frames, 4 final last frame, 5 empty first frame
                              6 MiniMax H3 FL2VA int8: first + last frame + timed script, 20 steps, 704x1248, 294 frames @ 24 fps
                            The video step needs ~12 GB VRAM (tested on an RTX 5070, about 55 min).

Sound: every effect generated separately with MMAudio large 44k v2 and placed frame by frame (clips in 02_Part2_video/sfx_used).
Final video = this generation scaled to 720x1280 (FFmpeg) + the SFX mix.
