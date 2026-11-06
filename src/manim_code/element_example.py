from manim import *

class Element(VGroup):
    def __init__(self, symbol="H", element="Hydrogen", atomic_number=1, bg_color=BLUE_A, text_color=BLACK, height=3, widht=2, **kwargs):
        self.background = Rectangle(height=height, width=widht, fill_opacity=1, color=bg_color)
        self.symbol = Text(symbol, color=text_color).scale_to_fit_height(self.background.height * 0.35).move_to(self.background.get_center())
        self.element = Text(element, color=text_color).scale_to_fit_width(self.background.width*0.75).next_to(self.symbol, DOWN)
        self.atomic_number = Text(str(atomic_number), color=text_color).scale_to_fit_height(0.1 * self.background.height).next_to(self.symbol, UL)
        self.bg_color = bg_color
        self.text_color = text_color
        vmobjects = [
            self.background,
            self.element,
            self.symbol,
            self.atomic_number
        ]
        super().__init__(*vmobjects, **kwargs)


class ElementExample(Scene):
    def construct(self):
        hydrogen = Element()
        carbon = Element("C", "Carbon", 6)
        oxygen = Element("O", "Oxygen", 8)
        nitrogen = Element("N", "Nitrogen", 7)
        elements = VGroup(
            hydrogen,
            carbon,
            oxygen,
            nitrogen
        ).arrange()
        self.add(elements)