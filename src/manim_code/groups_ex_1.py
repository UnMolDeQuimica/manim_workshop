from manim import *

class GroupsExerciseOne(Scene):
    LIGHTS_RADIUS = 0.4
    def construct(self):
        rect = RoundedRectangle(height=3.5, width=1.5, fill_opacity=1, color=GOLD_D)
        red_light = Circle(radius=self.LIGHTS_RADIUS, color=RED, fill_opacity=1)
        yellow_light = Circle(radius=self.LIGHTS_RADIUS, color=YELLOW, fill_opacity=1)
        green_light = Circle(radius=self.LIGHTS_RADIUS, color=GREEN, fill_opacity=1)
        
        lights_group = VGroup(red_light, yellow_light, green_light).arrange(DOWN).move_to(rect.get_center())
        traffic_light = VGroup(rect, lights_group)
        
        self.add(traffic_light)