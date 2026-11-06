from manim import *


class TransformExample(Scene):
    def construct(self):
        sq = Square()
        text_a = Text("Hello World!")
        text_b = Text("Hello PyConEs")
        text_c = Text("Hello PyConEs 2026")
        
        self.add(sq)
        self.wait()
        self.play(Transform(sq, text_a), run_time=2)
        self.play(ReplacementTransform(sq, text_b), run_time=2)
        self.play(TransformMatchingShapes(text_b, text_c), run_time=2)
        self.wait()