from manim import *

class AnimationGroupExample(Scene):
    def construct(self):
        dots = VGroup(
            [
                Dot(color=random_color()) for _ in range(10)
            ]
        ).scale(3).arrange()
        
        self.wait()
        self.play(
            AnimationGroup(*[Write(dot) for dot in dots[0:5]], run_time=2),
            AnimationGroup(*[Write(dot) for dot in dots[5:]], run_time=4),
        )
        self.wait()