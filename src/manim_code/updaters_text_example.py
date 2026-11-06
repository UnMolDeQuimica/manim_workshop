from manim import *

class TextUpdaterExample(Scene):
    def construct(self):
        red_text = DecimalNumber(color=RED, num_decimal_places=2, mob_class=Text)
        green_text = DecimalNumber(color=GREEN, num_decimal_places=2, mob_class=Text)
        blue_text = DecimalNumber(color=BLUE, num_decimal_places=2, mob_class=Text)
        texts = VGroup(red_text, green_text, blue_text).arrange(RIGHT, buff=2).to_edge(UP)
        circle = Circle(fill_opacity=1, color=RED)
        
        def red_color_updater(mob: DecimalNumber):
            mob.set_value(circle.fill_color.to_rgb()[0])

        def green_color_updater(mob: DecimalNumber):
            mob.set_value(circle.fill_color.to_rgb()[1])

        def blue_color_updater(mob: DecimalNumber):
            mob.set_value(circle.fill_color.to_rgb()[2])
            
        red_text.add_updater(red_color_updater)
        green_text.add_updater(green_color_updater)
        blue_text.add_updater(blue_color_updater)
        
        self.add(texts, circle)
        self.wait()
        self.play(circle.animate.set_color(GREEN))
        self.play(circle.animate.set_color(BLUE))
        self.play(circle.animate.set_color(RED))
