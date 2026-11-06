from manim import *

class ConstantUpdaterExample(Scene):
    def construct(self):
        sq = Square().scale(2)
        
        def rotate_updater(mob, dt):
            mob.rotate(dt)
        
        self.add(sq)
        
        self.wait()
        sq.add_updater(rotate_updater)
        self.wait(2)
        self.play(sq.animate.shift(UP))
        self.play(sq.animate.shift(DOWN))
        self.wait()
        sq.remove_updater(rotate_updater)
        self.wait(2)