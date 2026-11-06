from manim import *

class SuccessionExample(Scene):
    def construct(self):
        dots = VGroup(
            [
                Dot(color=random_color()) for _ in range(10)
            ]
        ).scale(3).arrange()
        
        self.wait()
        self.play(
            Succession(
                *[Write(dot) for dot in dots]
            ),
            run_time=5
        )
        self.wait()