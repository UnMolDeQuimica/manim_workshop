from manim import *

class LaggedStartMapExample(Scene):
    def construct(self):
        dots = VGroup(
            [
                Dot(color=random_color()) for _ in range(10)
            ]
        ).scale(3).arrange()
        
        self.wait()
        self.play(
            LaggedStartMap(
                Write,
                dots
            ),
            run_time=5
        )
        self.wait()