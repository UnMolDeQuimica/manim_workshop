from manim import *


class AnimationsExerciseOne(Scene):
    def construct(self):
        circle = Circle(fill_opacity=1)
        
        self.play(
            circle.animate.shift(3*UP).set_color(PURPLE),
        )