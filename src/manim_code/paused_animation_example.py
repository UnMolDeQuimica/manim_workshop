from manim import *


class PausedAnimationExample(Scene):
    def construct(self):
        sq = Square().set_opacity(0)
        
        self.play(
            sq.animate.set_opacity(1)
        )
        # Waits 1 second by default
        self.wait()
        self.play(
            sq.animate.rotate(PI/4, axis=IN),
            run_time=3 # Set the seconds for the animation to run
        )
        # We can indicate the seconds to pause the animation
        self.wait(2)
        self.play(
            sq.animate.scale(2)
        )
        self.play(
            sq.animate.set_fill_color(RED)
        )
        self.play(
            sq.animate.set_stroke_width(30)
        )
        self.wait()
