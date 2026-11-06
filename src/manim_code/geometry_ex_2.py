from manim import *


class GeometryExerciseTwo(Scene):
    def construct(self):
        self.add(
            Square(color=RED).to_corner(UL),
            Circle(fill_color=GOLD, fill_opacity=1).to_corner(UR),
            Triangle(stroke_width=10).to_corner(DL),
            Star(n=6).round_corners(radius=0.25).to_corner(DR),
        )