from manim import *

class LineExample(Scene):
    def construct(self):
        line1 = Line(LEFT*2, RIGHT*2)
        line2 = Line(LEFT*2, RIGHT*2, buff=0.5)
        line3 = Line(LEFT*2, RIGHT*2, path_arc=PI/2)
        grp = VGroup(line1,line2,line3).arrange(DOWN, buff=2)
        self.add(grp)