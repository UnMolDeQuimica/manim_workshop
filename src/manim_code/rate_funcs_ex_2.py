from manim import *
from math import sin, tan

def sin_rate_func(t: float) -> float:
    if t == 0:
        return 0
    else:
        return sin(2*PI*t)

def tan_rate_func(t: float) -> float:
    if t == 0:
        return 0
    else:
        return tan(2*PI*t)
    

class RateFuncsExerciseTwo(Scene):
    def construct(self):
        dots = VGroup([Dot(color=random_color()) for _ in range(10)]).scale(2).arrange(RIGHT)
        
        self.add(dots)
        self.wait()
        self.play(
            LaggedStart(
                *[dot.animate(rate_func=sin_rate_func).shift(2*UP) for dot in dots],
                lag_ratio=0.1,
                ),
            run_time=10
        )
        self.play(
            LaggedStart(
                *[dot.animate(rate_func=tan_rate_func).shift(2*UP) for dot in dots],
                lag_ratio=0.1,
                ),
            run_time=10
        )