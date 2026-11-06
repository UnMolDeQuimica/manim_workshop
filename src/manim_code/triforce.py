from manim import *

class TriforceScene(Scene):
    def construct(self):
        triangle_1 = Triangle()
        triangle_2 = Triangle().shift(DOWN*triangle_1.height + LEFT*triangle_1.width/2)
        triangle_3 = Triangle().shift(DOWN*triangle_1.height + RIGHT*triangle_1.width/2)
        # We can use `add` to group Mobjects.
        triangle_1.add(triangle_2, triangle_3)
        triangle_1.move_to([-3, 0, 0])
        
        # After grouping all the triangles, 
        # we can copy them and apply modifications.
        triforce = triangle_1.copy().set_fill(opacity=1).set_color(GOLD).move_to([3, 0, 0])
        
        self.add(
            triangle_1, triforce
        )
        print(triforce.submobjects)