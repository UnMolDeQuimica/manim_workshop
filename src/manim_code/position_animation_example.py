from manim import *


class PositionAnimationExample(Scene):
    def construct(self):
        sq = Square(fill_opacity=1)
        
        self.play(
            sq.animate.shift(UP)
        )
        self.play(
            sq.animate.move_to([6,-2,0])
        )
        self.play(
            sq.animate.to_edge(LEFT)
        )
        self.play(sq.animate.move_to(ORIGIN))