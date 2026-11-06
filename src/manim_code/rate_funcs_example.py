from manim import *


class RateFuncsExample(Scene):
    def construct(self):
        colors = [
            RED,
            GREEN,
            BLUE,
            YELLOW,
            PURPLE
        ]
        dots = VGroup(
            [Dot(color=colors[i]) for i in range(5)]
        ).scale(4).arrange(DOWN).to_edge(LEFT)
        self.add(dots)
        self.wait()
        self.play(
            ApplyMethod(dots[0].to_edge, RIGHT, rate_func=rate_functions.smooth),
            ApplyMethod(dots[1].to_edge, RIGHT, rate_func=rate_functions.double_smooth),
            ApplyMethod(dots[2].to_edge, RIGHT, rate_func=rate_functions.there_and_back),
            ApplyMethod(dots[3].to_edge, RIGHT, rate_func=rate_functions.ease_in_bounce),
            ApplyMethod(dots[4].to_edge, RIGHT, rate_func=rate_functions.ease_in_out_elastic),
            run_time=5
        )
        self.wait()