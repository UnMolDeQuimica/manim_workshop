from manim import *
import numpy as np


class Spiral(VMobject):
    def __init__(
        self,
        start_radius: float = 0.0,
        end_radius: float = 3.0,
        num_turns: float = 3.0,
        start_angle: float = 0.0,
        direction: int = 1,
        num_samples: int = 400,
        **kwargs,
    ):
        super().__init__(**kwargs)
        self.start_radius = start_radius
        self.end_radius = end_radius
        self.num_turns = num_turns
        self.start_angle = start_angle
        self.direction = direction
        self.num_samples = num_samples

        self._generate_points()


    def _radius_at(self, t: float) -> float:
        """Return the radius at normalized parameter t in [0, 1]."""
        a, b = self.start_radius, self.end_radius

        return a + (b - a) * t

    def _generate_points(self):
        total_angle = self.direction * self.num_turns * 2 * PI
        ts = np.linspace(0.0, 1.0, self.num_samples)

        points = []
        for t in ts:
            theta = self.start_angle + total_angle * t
            r = self._radius_at(t)
            x = r * np.cos(theta)
            y = r * np.sin(theta)
            points.append([x, y, 0.0])

        self.set_points_as_corners(
            [ORIGIN] + points if self.start_radius == 0 else points)
        self.make_smooth()


    def get_num_turns(self) -> float:
        return self.num_turns

    def get_end_point(self) -> np.ndarray:
        return self.points[-1]


class SpiralExample(Scene):
    def construct(self):

        spiral = Spiral(
            start_radius=0.2,
            end_radius=2.2,
            num_turns=4,
            color=BLUE,
            stroke_width=3,
        )

        self.add(spiral)



