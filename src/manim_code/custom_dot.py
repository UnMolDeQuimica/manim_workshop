from manim import *


class CustomDot(Dot):
    def __init__(self, point=ORIGIN, radius=3, **kwargs):
        super().__init__(point, radius, **kwargs)


class CustomDotExample(Scene):
    def construct(self):
        dots = VGroup(
            Dot(),
            CustomDot(color=RED)
        ).arrange()

        self.add(dots)