from manim import *

class IndicateExamples(Scene):
    def construct(self):
        circle = Circle(fill_opacity=1)
        indicate = Text("Indicate").next_to(circle, DOWN)
        circumscribe = Text("Circumscribe").next_to(circle, DOWN)
        flash = Text("Flash").next_to(circle, DOWN)
        self.add(circle)
        
        self.wait()
        self.play(Write(indicate))
        self.play(Indicate(circle))
        self.play(Unwrite(indicate))
        self.wait()
        self.play(Write(circumscribe))
        self.play(Circumscribe(circle))
        self.play(Unwrite(circumscribe))
        self.wait()
        self.play(Write(flash))
        self.play(Flash(circle, flash_radius=circle.radius))
        self.play(Unwrite(flash))
        self.wait()
