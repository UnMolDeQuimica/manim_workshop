from manim import *

class AddSquareExample(Scene):
    def construct(self):
        # Create instance of the object
        square = Square()
        # Add it to the Scene to make it visible.
        self.add(square)