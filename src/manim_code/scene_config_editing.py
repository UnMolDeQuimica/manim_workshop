from manim import *

config.background_color = BLUE_A
config.pixel_width = 1080
config.pixel_height = 1920
config.frame_width = 6
config.frame_height = 10.6667

class SceneEditingExample(Scene):
    def construct(self):
        self.wait()
        self.play(Write(Square(fill_opacity=1, color=RED)))
        self.wait()