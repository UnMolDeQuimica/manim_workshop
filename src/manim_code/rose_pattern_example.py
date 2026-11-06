from manim import *
import numpy as np
from math import cos, sin

class RosePattern(VMobject):
    def __init__(self, radius=2, k=3, **kwargs):
        super().__init__(**kwargs)
        self.radius = radius
        self.k = k
        
        step_size = 0.05
        theta = np.arange(0, TAU + step_size, step_size)
        
        points = [
            [
                radius * cos(k*t) * cos(t),
                radius * cos(k*t) * sin(t),
                0
            ] for t in theta
        ]
        
        self.set_points_smoothly(points)

class RosePatternExample(Scene):
    def construct(self):

        def update_pattern(pat, dt):
            pat.k += dt
            new_pat = RosePattern(k=pat.k, color=MAROON_A)
            pat.become(new_pat)

        rose = RosePattern(k=0)
        self.add(rose)
        rose.add_updater(update_pattern)

        self.wait(10)
        rose.remove_updater(update_pattern)
        self.wait()