from manim import *


class VDictExample(Scene):
    def construct(self):
        dots = VDict(
            [
                (1, Dot(color=RED)),
                (2, Dot(color=YELLOW)),
                (3, Dot(color=GREEN)),
            ]
        )

        # We can apply multiple operations to a single object
        # and it will apply to all
        dots.arrange(RIGHT).scale(5)

        # Show only the elements with keys 1 and 3
        self.add(dots[1], dots[3])
