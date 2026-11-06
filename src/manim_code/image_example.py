from manim import *
from pathlib import Path


class ImageExample(Scene):
    def construct(self):
        image_example = ImageMobject(Path("assets") / "python_example_logo.jpeg")

        self.add(image_example)
