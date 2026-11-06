from manim import *


class GroupsExerciseTwo(Scene):
    def construct(self):
        yellow_card = RoundedRectangle(stroke_color=BLACK, fill_color=YELLOW, fill_opacity=1)
        green_card = RoundedRectangle(stroke_color=BLACK, fill_color=GREEN, fill_opacity=1)
        teal_card = RoundedRectangle(stroke_color=BLACK, fill_color=TEAL, fill_opacity=1)
        blue_card = RoundedRectangle(stroke_color=BLACK, fill_color=BLUE, fill_opacity=1)

        cards = VGroup(blue_card, teal_card, green_card, yellow_card)
        cards.arrange(DOWN, buff=-1.5)

        self.add(cards)