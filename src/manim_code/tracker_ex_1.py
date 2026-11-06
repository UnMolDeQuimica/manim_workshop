from manim import *

class TrackerExerciseOne(Scene):
    def construct(self):
        dot = Dot()
        number = DecimalNumber(mob_class=Text).next_to(dot, UP)
        tracker = ValueTracker(0)
        
        def dot_updater(mob: Mobject):
            mob.move_to([tracker.get_value(), mob.get_y(), 0])

        def number_updater(mob: DecimalNumber):
            mob.next_to(dot, UP)
            mob.set_value(dot.get_x())
        
        dot.add_updater(dot_updater)
        number.add_updater(number_updater)
        
        self.add(dot, number)
        self.wait()
        self.play(tracker.animate.set_value(-5), rate_func=there_and_back, run_time=4)
        self.play(tracker.animate.set_value(5), rate_func=there_and_back, run_time=4)
        self.wait()