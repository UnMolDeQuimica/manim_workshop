from manim import *
import numpy as np


class BoxedText(VGroup):
    def __init__(self, text="", text_color=BLACK, box_color=BLUE, box_stroke_color=BLUE_E, **kwargs):
        VERTIICAL_MARGIN = 1.5
        HORIZONTAL_MARGIN = 1.2
        self.text = Text(text, color=text_color)
        self.text_color = text_color
        self.box = Rectangle(
            height=VERTIICAL_MARGIN*self.text.height,
            width=HORIZONTAL_MARGIN*self.text.width,
            fill_opacity=1,
            fill_color=box_color,
            stroke_color=box_stroke_color
        )
        self.box_color = box_color
        self.box_stroke_color = box_stroke_color
        
        vmobjects = [self.box, self.text]
        super().__init__(*vmobjects, **kwargs)


class CustomObjectsExampleTwo(Scene):
    def construct(self):
        self.add(BoxedText("Hello World!"))