from manim import *
from pathlib import Path


class SVGExample(Scene):
    def construct(self):
        svg_example = SVGMobject(Path("assets") / "logo-vertical-alt-color-dark.svg").scale(3)

        self.add(svg_example)
