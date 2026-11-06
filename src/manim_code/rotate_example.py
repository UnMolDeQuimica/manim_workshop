from manim import *

class RotateExample(Scene):
    def construct(self):
        sq_1 = Square(fill_opacity=1)
        sq_2 = Square(fill_opacity=1)
        VGroup(sq_1, sq_2).arrange(buff=3)
        self.add(sq_1, sq_2)
        self.wait()
        self.play(
            Rotate(sq_1, PI/4),
            Rotating(sq_2, PI/4, run_time=3),
            run_time=2
        )
        self.wait()
        self.play(
            Rotate(sq_1, PI/4, axis=UP),
            Rotating(sq_2, PI/4, axis=UP, run_time=3),
            run_time=2
        )
        self.wait()
        self.play(
            Rotate(sq_1, PI/4, axis=RIGHT),
            Rotating(sq_2, PI/4, axis=RIGHT, run_time=3),
            run_time=2
        )