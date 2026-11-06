from manim import *

class HelloMathTypst(Scene):
    def construct(self):
        equation = MathTypst(r"sum_(k=1)^n k = (n(n + 1)) / 2", font_size=72)
        self.add(equation)