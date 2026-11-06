from manim import *
from pathlib import Path

class MobjectsExample(Scene):
    def construct(self):
        geometric_figure_example = Square()
        vertices = [1, 2, 3, 4, 5, 6, 7, 8]
        edges = [(1, 7), (1, 8), (2, 3), (2, 4), (2, 5),
                (2, 8), (3, 4), (6, 1), (6, 2),
                (6, 3), (7, 2), (7, 4)]
        graph_example = Graph(
            vertices,
            edges,
            layout="circular",
            layout_scale=3,
            labels={
                v: Text(str(v), font_size=24, color=BLACK)
                for v in vertices
            },
            vertex_config={
                7: {"fill_color": RED}
            },
            edge_config={
                (1, 7): {"stroke_color": RED},
                (2, 7): {"stroke_color": RED},
                (4, 7): {"stroke_color": RED}
            }
        ).scale(0.3)
        text_example = Text("Welcome to Manim!")
        image_example = ImageMobject(Path("assets")/"python_example_logo.jpeg")

        mobjects_group = Group(
            geometric_figure_example,
            graph_example,
            text_example,
            image_example
        ).arrange_in_grid()

        self.add(mobjects_group)