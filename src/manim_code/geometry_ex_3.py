from manim import *
from itertools import cycle
from random import randrange

OBJECTS_AMOUNT = 10

class GeometryExerciseThree(Scene):
    def construct(self):
        colors = cycle([RED, GREEN, BLUE])
        m_objects = cycle([Square(), Circle(), Triangle(), Star(n=6)])
        
        for _ in range(OBJECTS_AMOUNT):
            mobject = next(m_objects).copy()
            color = next(colors)
            self.add(
                mobject.set_color(color).move_to(
                    [
                        randrange(-60, 60, 1)/10,
                        randrange(-40, 40, 1)/10,
                        0
                    ]
                )
            )