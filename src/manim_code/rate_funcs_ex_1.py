from manim import *

class RateFuncsExerciseOne(Scene):
    def construct(self):
        dots = VGroup([Dot(color=random_color()) for _ in range(10)]).scale(2).arrange(RIGHT).to_edge(DOWN)
        
        self.add(dots)
        self.wait()
        self.play(
            LaggedStart(
                *[dot.animate(rate_func=rate_functions.ease_in_bounce).shift(5*UP) for dot in dots],
                lag_ratio=0.1,
                ),
            run_time=10
        )