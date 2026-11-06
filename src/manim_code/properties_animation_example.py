from manim import *


class PropertiesAnimationExample(Scene):
    def construct(self):
        sq = Square().set_opacity(0)
        
        self.play(
            sq.animate.set_opacity(1)
        )
        self.play(
            sq.animate.rotate(PI/4, axis=IN)
        )
        self.play(
            sq.animate.scale(2)
        )
        self.play(
            sq.animate.set_fill_color(RED)
        )
        self.play(
            sq.animate.set_stroke_width(30)
        )
