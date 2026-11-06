from manim import *


class AnimationExerciseOne(Scene):
    def construct(self):
        text = Text("Welcome to PyConEs 2026!")
        
        self.play(Write(text), run_time=2)
        self.wait()
        self.play(Wiggle(text))
        self.wait()