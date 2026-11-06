from manim import *

class TextExerciseTwo(Scene):
    def construct(self):
        formula = Typst("$ d/(d x) integral_a ^x f(t) d t = f(x) $")
        formula_name = Text("Fundamental Theorem of calculus").to_edge(UP)
        underline = Underline(formula_name)
        
        self.add(
            formula_name,
            underline,
            formula
        )