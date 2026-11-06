from manim import *

class ColorCircles(Scene):
    def construct(self):
        c1 = Circle(color=GREEN)
        c2 = Circle(color=GREEN, fill_opacity=1)
        c3 = Circle(stroke_color=RED, fill_color=BLUE, fill_opacity=1)
        c4 = Circle(stroke_color=RED, fill_color=BLUE, fill_opacity=0.5)
        c5 = Circle(stroke_color=PURPLE, fill_color=YELLOW, stroke_opacity=1, fill_opacity=1, stroke_width=20)
        c6 = Circle(stroke_color=PURPLE, fill_color=YELLOW, stroke_opacity=0.5, fill_opacity=1, stroke_width=20)
        c7 = Circle(fill_color=color_gradient([RED, GREEN, BLUE, PURPLE, YELLOW], 5), fill_opacity=1)
        c8 = Circle(fill_color=color_gradient([RED, GREEN, BLUE, PURPLE, YELLOW], 5), fill_opacity=1, sheen_direction=UP)
        circles = Group(c1,c2,c3,c4,c5,c6,c7,c8).arrange_in_grid()
        rectangle = Rectangle(width=circles.width*1.2, height=circles.height*1.2, fill_opacity=1, color=TEAL)
        self.add(rectangle, circles)