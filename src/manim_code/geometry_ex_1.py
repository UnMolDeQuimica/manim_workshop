from manim import *


class GeometryExerciseOne(Scene):
    def construct(self):
        self.add(
            Square().to_corner(UL),
            Circle().to_corner(UR),
            Triangle().to_corner(DL),
            Star(n=6).to_corner(DR),
        )