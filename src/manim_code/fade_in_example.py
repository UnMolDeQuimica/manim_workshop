from manim import *


class FadeInExample(Scene):
    def construct(self):
        dot = Dot(UP * 2 + LEFT)
        self.add(dot)
        text = Paragraph(
            "FadeIn with ", "shift ", "or target_position", "and scale"
        ).scale(1)
        animations = [
            FadeIn(text[0]),
            FadeIn(text[1], shift=DOWN),
            FadeIn(text[2], target_position=dot),
            FadeIn(text[3], scale=1.5),
        ]
        self.play(*animations, run_time=4)
