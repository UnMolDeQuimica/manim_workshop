from manim import *

class LaggedStartExample(Scene):
    def construct(self):
        dots = VGroup(
            [
                Dot(color=random_color()) for _ in range(10)
            ]
        ).scale(3).arrange()
        
        self.wait()
        self.play(
            LaggedStart(
                *[Write(dot) for dot in dots[0:5]],
                *[FadeIn(dot) for dot in dots[5:]]
            ),
            run_time=5
        )
        self.wait()