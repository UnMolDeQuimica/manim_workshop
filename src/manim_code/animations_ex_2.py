from manim import *


class AnimationsExerciseTwo(Scene):
    def construct(self):
        DOTS_AMOUNT = 10
        dots = VGroup([
            Dot(color=random_color())
            for _ in range(DOTS_AMOUNT)
        ]).arrange(RIGHT)
        
        self.add(dots)
        for dot in dots:
            self.play(dot.animate.shift(UP))
        
        self.wait()
        
        # Notice how we can animate all at once because they are in a VGroup
        self.play(dots.animate.shift(DOWN))