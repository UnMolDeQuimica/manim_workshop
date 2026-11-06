from manim import *
import numpy as np


class SpiralGalaxy(VMobject):
    def __init__(
        self,
        arms=5,
        turns=1.5,
        max_radius=3.0,
        curvature=0.22,
        color=BLUE_B,
        **kwargs,
    ):
        self.arms = arms
        self.turns = turns
        self.max_radius = max_radius
        self.curvature = curvature
        self.arms_color = color

        super().__init__(**kwargs)

    def generate_points(self):
        for i in range(self.arms):
            offset = TAU * i / self.arms
            arm = self._build_arm(offset)

            self.append_points(arm.points)

    def _build_arm(self, offset):
        sample_points = 80
        pts = []
        for k in range(sample_points):
            t = k / (sample_points - 1)
            theta = offset + t * self.turns * TAU
            r = self.max_radius * (
                np.exp(self.curvature * (theta - offset)) - 1
            ) / (np.exp(self.curvature * self.turns * TAU) - 1)
            pts.append([r * np.cos(theta), r * np.sin(theta), 0.0])

        arm = VMobject()
        arm.set_points_smoothly(pts)
        return arm

    def init_colors(self):
        super().init_colors()
        self.set_color(self.arms_color)


class CustomObjectsExampleOne(Scene):
    def construct(self):
        self.add(SpiralGalaxy())