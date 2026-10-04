from manim import *

class LogoAnimation(Scene):
    def construct(self):
        logo = SVGMobject("logo.svg")
        self.play(Write(logo), run_time=5)
        self.play(FadeOut(logo), run_time=2)