from manim import *

class GraphingExerciseTwo(Scene):
    def construct(self):
        plane = PolarPlane(
            size=8,
            radius_max=8,
        )

        heart_func = lambda theta: 2.5 * (1 - np.sin(theta))
        heart_graph = plane.plot_polar_graph(
            heart_func,
            theta_range=[0, 2 * PI],
            color=RED,
            stroke_width=3,
        )

        self.add(
            plane,
            heart_graph
        )