from manim import *

class MyFirstAnimation(Scene):
    def construct(self):
        square = Square() 
        self.play(
            Write(square)
        )