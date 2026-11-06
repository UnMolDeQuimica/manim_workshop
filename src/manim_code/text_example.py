from manim import *


class TextExample(Scene):
    def construct(self):
        hello = Text("Hello world from")
        from_pycones = Text(
            "PyConES 2026!",
            stroke_width=4,
            stroke_color=ORANGE,
            fill_color=YELLOW,
            font_size=120,
            slant=ITALIC
        )

        text_group = VGroup(hello, from_pycones).arrange(DOWN)
        self.add(text_group)