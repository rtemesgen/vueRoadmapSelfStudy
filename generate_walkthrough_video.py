from __future__ import annotations

import asyncio
from dataclasses import dataclass
from datetime import timedelta
from pathlib import Path
from typing import Iterable

import edge_tts
from moviepy import AudioFileClip, ImageClip, concatenate_videoclips
from PIL import Image, ImageDraw, ImageFont


ROOT = Path(r"c:\Users\HAVEN\Desktop\kgl ppt")
APP_ROOT = ROOT / "roadmap-app"
BUILD_DIR = ROOT / "video_build"
SCENE_DIR = BUILD_DIR / "scenes"
AUDIO_DIR = BUILD_DIR / "audio"
OUTPUT_VIDEO = ROOT / "Vue_Roadmap_Walkthrough.mp4"
OUTPUT_SRT = ROOT / "Vue_Roadmap_Walkthrough.srt"
LOGO_PATH = APP_ROOT / "public" / "refactory-ready-set-code-logo.png"
SCREENSHOT_DIR = ROOT / "video-screens"

WIDTH = 1080
HEIGHT = 1920
FPS = 24
VOICE = "en-US-AriaNeural"


@dataclass
class Scene:
    number: int
    title: str
    narration: str
    bullets: list[str]
    accent: str
    screenshot_name: str | None = None


SCENES = [
    Scene(
        1,
        "Welcome",
        "Hello, this is Vue Roadmap, a mobile app designed to guide you through a 14-day Vue 3 self-study sprint.",
        [
            "14-day Vue 3 self-study app",
            "Daily objectives, tasks, and progress tracking",
            "Built to keep learning clear and steady",
        ],
        "#0B6E4F",
    ),
    Scene(
        2,
        "Install The App",
        "After downloading the release APK, install the app on your Android phone and open it.",
        [
            "Use the signed release APK",
            "Allow install from that source if Android asks",
            "Open the app when installation finishes",
        ],
        "#F29B2F",
    ),
    Scene(
        3,
        "Start The Sprint",
        "When the app opens, start in the Today tab. Tap Start Sprint Today. This becomes your main learning screen for the whole sprint.",
        [
            "Open the Today tab first",
            "Tap Start Sprint Today",
            "This sets your live day plan",
        ],
        "#0B6E4F",
        "Screenshot 2026-03-14 083328.png",
    ),
    Scene(
        4,
        "Follow Today",
        "Each day shows your objective, what you need to know, what to study, what to research, what to build, and how to know you are on track.",
        [
            "Read the objective before coding",
            "Use study and research prompts for focus",
            "Build from the listed tasks",
        ],
        "#D98F00",
        "Screenshot 2026-03-14 083328.png",
    ),
    Scene(
        5,
        "Use The Roadmap",
        "If you want to see the full journey, open the Roadmap tab. It contains all 14 days with detailed guidance.",
        [
            "See the full 14-day path",
            "Open any day to view full details",
            "Use it when you want the bigger picture",
        ],
        "#0B6E4F",
        "Screenshot 2026-03-14 085303.png",
    ),
    Scene(
        6,
        "Track With Checklist",
        "Use Checklist to mark your daily routine, checkpoint progress, and completed days.",
        [
            "Mark routine tasks as you work",
            "Track checkpoints and completed days",
            "Keep visible momentum every day",
        ],
        "#F29B2F",
        "Screenshot 2026-03-14 083208.png",
    ),
    Scene(
        7,
        "Open The Guide",
        "If you forget how the app works, open the Guide tab. It explains what each screen does and how to move through the sprint.",
        [
            "Perfect for first-time users",
            "Explains all main tabs clearly",
            "Helps users feel oriented again quickly",
        ],
        "#0B6E4F",
        "Screenshot 2026-03-14 083306.png",
    ),
    Scene(
        8,
        "Reflect In Tracker",
        "Use Tracker to record your confidence for each day and save short notes about what felt easy or difficult.",
        [
            "Score confidence from zero to five",
            "Write what felt easy or difficult",
            "Use your notes for review later",
        ],
        "#D98F00",
        "Screenshot 2026-03-14 083225.png",
    ),
    Scene(
        9,
        "Build Toward A Project",
        "As you move through the sprint, the app also points you toward the mini project you are building.",
        [
            "Learning stays connected to a real app",
            "You build toward Mini Karibu Frontend",
            "Theory and practice stay linked",
        ],
        "#0B6E4F",
        "Screenshot 2026-03-14 083238.png",
    ),
    Scene(
        10,
        "Keep Going",
        "The best way to use Vue Roadmap is simple: open Today, follow the guidance, build the feature, check your progress, and write a short note before you stop.",
        [
            "Open Today",
            "Build the feature",
            "Check progress and write one short note",
        ],
        "#F29B2F",
    ),
]


def pick_font(candidates: Iterable[str], size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for candidate in candidates:
        try:
            return ImageFont.truetype(candidate, size=size)
        except OSError:
            continue
    return ImageFont.load_default()


FONT_BOLD = pick_font(
    [
        r"C:\Windows\Fonts\arialbd.ttf",
        r"C:\Windows\Fonts\segoeuib.ttf",
        r"C:\Windows\Fonts\calibrib.ttf",
    ],
    72,
)
FONT_SEMIBOLD = pick_font(
    [
        r"C:\Windows\Fonts\arialbd.ttf",
        r"C:\Windows\Fonts\segoeuib.ttf",
        r"C:\Windows\Fonts\calibrib.ttf",
    ],
    44,
)
FONT_BODY = pick_font(
    [
        r"C:\Windows\Fonts\arial.ttf",
        r"C:\Windows\Fonts\segoeui.ttf",
        r"C:\Windows\Fonts\calibri.ttf",
    ],
    34,
)
FONT_SMALL = pick_font(
    [
        r"C:\Windows\Fonts\arial.ttf",
        r"C:\Windows\Fonts\segoeui.ttf",
        r"C:\Windows\Fonts\calibri.ttf",
    ],
    28,
)


def ensure_dirs() -> None:
    BUILD_DIR.mkdir(exist_ok=True)
    SCENE_DIR.mkdir(exist_ok=True)
    AUDIO_DIR.mkdir(exist_ok=True)


def wrap_text(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.ImageFont, max_width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        attempt = word if not current else f"{current} {word}"
        width = draw.textbbox((0, 0), attempt, font=font)[2]
        if width <= max_width:
            current = attempt
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_phone_mock(draw: ImageDraw.ImageDraw, x: int, y: int, w: int, h: int, accent: str, label: str) -> None:
    draw.rounded_rectangle((x, y, x + w, y + h), radius=50, fill="#FFF9EF", outline="#E3D7BD", width=4)
    draw.rounded_rectangle((x + 34, y + 34, x + w - 34, y + h - 34), radius=34, fill="#FFFDF8")
    draw.rounded_rectangle((x + 150, y + 18, x + w - 150, y + 42), radius=12, fill="#23201D")

    header_y = y + 90
    draw.rounded_rectangle((x + 56, header_y, x + w - 56, header_y + 120), radius=28, fill=accent)
    draw.text((x + 86, header_y + 30), label, font=FONT_SEMIBOLD, fill="#FFFFFF")

    card_y = header_y + 160
    for idx in range(3):
        top = card_y + idx * 150
        draw.rounded_rectangle(
            (x + 56, top, x + w - 56, top + 110),
            radius=26,
            fill="#F8F1E1",
            outline="#E7D8B1",
            width=2,
        )
        draw.rounded_rectangle((x + 80, top + 28, x + 170, top + 48), radius=10, fill=accent)
        draw.rounded_rectangle((x + 80, top + 64, x + w - 140, top + 82), radius=9, fill="#D7D1C4")

    bottom_y = y + h - 150
    draw.rounded_rectangle((x + 70, bottom_y, x + w - 70, bottom_y + 92), radius=28, fill="#FFF6E7")
    for idx, tab in enumerate(["Today", "Roadmap", "Guide", "Tracker"]):
        tx = x + 108 + idx * 120
        fill = accent if idx == 0 else "#718082"
        draw.ellipse((tx, bottom_y + 16, tx + 24, bottom_y + 40), fill=fill)
        draw.text((tx - 8, bottom_y + 48), tab, font=FONT_SMALL, fill=fill)


def draw_phone_screenshot(
    canvas: Image.Image,
    draw: ImageDraw.ImageDraw,
    x: int,
    y: int,
    w: int,
    h: int,
    screenshot_path: Path,
) -> None:
    draw.rounded_rectangle((x, y, x + w, y + h), radius=50, fill="#FFF9EF", outline="#E3D7BD", width=4)
    screen_x = x + 24
    screen_y = y + 24
    screen_w = w - 48
    screen_h = h - 48
    screenshot = Image.open(screenshot_path).convert("RGB")
    fitted = screenshot.copy()
    fitted.thumbnail((screen_w, screen_h), Image.LANCZOS)

    frame = Image.new("RGB", (screen_w, screen_h), "#F5EEDC")
    paste_x = (screen_w - fitted.width) // 2
    paste_y = (screen_h - fitted.height) // 2
    frame.paste(fitted, (paste_x, paste_y))
    frame = frame.resize((screen_w, screen_h), Image.LANCZOS)
    frame = frame.copy()

    mask = Image.new("L", (screen_w, screen_h), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle((0, 0, screen_w, screen_h), radius=34, fill=255)
    canvas.paste(frame, (screen_x, screen_y), mask)


def generate_scene_image(scene: Scene, logo: Image.Image) -> Path:
    canvas = Image.new("RGB", (WIDTH, HEIGHT), "#FFF9EF")
    draw = ImageDraw.Draw(canvas)

    draw.ellipse((-140, -80, 470, 430), fill="#F9D860")
    draw.ellipse((680, -60, 1220, 320), fill="#DFF1E7")
    draw.ellipse((140, 1500, 980, 2070), fill="#F4E5C8")

    logo_card = logo.resize((250, 310), Image.LANCZOS)
    canvas.paste(logo_card, (70, 90))

    draw.text((360, 112), f"Scene {scene.number}", font=FONT_SMALL, fill=scene.accent)
    title_lines = wrap_text(draw, scene.title, FONT_BOLD, 620)
    y = 150
    for line in title_lines:
        draw.text((360, y), line, font=FONT_BOLD, fill="#163436")
        y += 86

    subtitle_lines = wrap_text(draw, scene.narration, FONT_BODY, 920)
    sub_y = 460
    for line in subtitle_lines[:5]:
        draw.text((80, sub_y), line, font=FONT_BODY, fill="#4F666A")
        sub_y += 48

    panel_x = 70
    panel_y = 760
    panel_w = 450
    panel_h = 690
    draw.rounded_rectangle(
        (panel_x, panel_y, panel_x + panel_w, panel_y + panel_h),
        radius=42,
        fill="#FFFDF8",
        outline="#E3D7BD",
        width=3,
    )
    draw.text((panel_x + 34, panel_y + 30), "What To Notice", font=FONT_SEMIBOLD, fill="#163436")

    bullet_y = panel_y + 118
    for bullet in scene.bullets:
        wrapped = wrap_text(draw, bullet, FONT_BODY, panel_w - 92)
        draw.ellipse((panel_x + 34, bullet_y + 10, panel_x + 50, bullet_y + 26), fill=scene.accent)
        for idx, line in enumerate(wrapped):
            draw.text((panel_x + 68, bullet_y + idx * 42), line, font=FONT_BODY, fill="#314245")
        bullet_y += max(78, len(wrapped) * 42 + 24)

    if scene.screenshot_name:
      screenshot_path = SCREENSHOT_DIR / scene.screenshot_name
      if screenshot_path.exists():
          draw_phone_screenshot(canvas, draw, 565, 760, 445, 860, screenshot_path)
      else:
          draw_phone_mock(draw, 565, 760, 445, 860, scene.accent, "Vue Roadmap")
    else:
        draw_phone_mock(draw, 565, 760, 445, 860, scene.accent, "Vue Roadmap")

    footer = "Build Daily. Learn Clearly."
    footer_box = draw.textbbox((0, 0), footer, font=FONT_SMALL)
    footer_w = footer_box[2] - footer_box[0]
    draw.text(((WIDTH - footer_w) / 2, 1830), footer, font=FONT_SMALL, fill="#0B6E4F")

    output_path = SCENE_DIR / f"scene_{scene.number:02d}.png"
    canvas.save(output_path)
    return output_path


async def synthesize_audio(scene: Scene) -> Path:
    output_path = AUDIO_DIR / f"scene_{scene.number:02d}.mp3"
    communicate = edge_tts.Communicate(scene.narration, voice=VOICE)
    await communicate.save(str(output_path))
    return output_path


def format_srt_time(seconds: float) -> str:
    td = timedelta(seconds=seconds)
    total_ms = int(td.total_seconds() * 1000)
    hours = total_ms // 3_600_000
    minutes = (total_ms % 3_600_000) // 60_000
    secs = (total_ms % 60_000) // 1000
    millis = total_ms % 1000
    return f"{hours:02d}:{minutes:02d}:{secs:02d},{millis:03d}"


async def main() -> None:
    ensure_dirs()
    logo = Image.open(LOGO_PATH).convert("RGB")

    scene_images = [generate_scene_image(scene, logo) for scene in SCENES]
    audio_paths = await asyncio.gather(*(synthesize_audio(scene) for scene in SCENES))

    clips = []
    current_time = 0.0
    srt_lines: list[str] = []

    for scene, image_path, audio_path in zip(SCENES, scene_images, audio_paths):
        audio_clip = AudioFileClip(str(audio_path))
        duration = max(audio_clip.duration + 0.35, 5.0)
        clip = ImageClip(str(image_path)).with_duration(duration).with_audio(audio_clip)
        clips.append(clip)

        start = format_srt_time(current_time)
        end = format_srt_time(current_time + duration)
        srt_lines.extend(
            [
                str(scene.number),
                f"{start} --> {end}",
                scene.narration,
                "",
            ]
        )
        current_time += duration

    final_clip = concatenate_videoclips(clips, method="compose")
    final_clip.write_videofile(
        str(OUTPUT_VIDEO),
        fps=FPS,
        codec="libx264",
        audio_codec="aac",
        threads=4,
    )

    OUTPUT_SRT.write_text("\n".join(srt_lines), encoding="utf-8")

    for clip in clips:
        clip.close()
    final_clip.close()


if __name__ == "__main__":
    asyncio.run(main())
