from manim import *

class HelloTypst(Scene):
    def construct(self):
        text = Typst(r"*Hello* from _Typst!_", font_size=96)
        self.add(text)