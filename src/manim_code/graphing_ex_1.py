from manim import *

class GraphingExerciseOne(Scene):
    def construct(self):
        plane = NumberPlane(
            axis_config={"include_numbers": False},
        )

        sine_graph = plane.plot(
            lambda x: np.sin(x),
            color=YELLOW,
            stroke_width=6,
        )

        self.add(
            plane,
            sine_graph
        )
