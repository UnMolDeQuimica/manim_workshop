from manim import *

class BecomeAnimationExample(Scene):
    def construct(self):
        sq = Square()
        circ = Circle()
        self.play(sq.animate.become(circ), run_time=3)
        self.wait()