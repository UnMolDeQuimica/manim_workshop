from manim import *

# docs:delete
#class MyFirstAnimation(Scene):
# docs:insert
class MySecondAnimation(Scene):
    def construct(self):
    # docs:delete
#         square = Square()
    # docs:insert
        square = Square(fill_color=GREEN, fill_opacity=1)
        self.play(
            Write(square)
        )

class MyThirdAnimation(Scene):
    def construct(self):
        square = Square(fill_color=GREEN, fill_opacity=1)
        self.play(
            Write(square)
        )
        self.play(
            Rotate(square)
        )