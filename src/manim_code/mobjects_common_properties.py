from manim import *
import random


class MobjectsCommonProperties(Scene):
    def construct(self):
        for i in range(25):
            random.seed(i)
            self.add(
                Triangle()
                    .scale(random.randint(1, 20)/10) # Scale between 0.1 and 2
                    .shift(
                        [
                            random.randint(-60, 60)/10, # Shift x coordinate between -6 and 6
                            random.randint(-30, 30)/10, # Shift y coordinate between -3 and 3
                            0 # Keep z coordinate
                        ]
                    )
                    .rotate(
                        random.randint(0, 360)*DEGREES # Rotate between 0 and 360 degrees
                    )
            )