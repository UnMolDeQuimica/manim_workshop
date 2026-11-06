from manim import *

class ManualSquares(Scene):
    def construct(self):
        manual_square = VMobject()
        points = [
            [1, 1, 0],
            [1, -1, 0],
            [-1, -1, 0],
            [-1, 1, 0],
            [1, 1, 0],
        ]

        manual_square.set_points_as_corners(points)

        smooth_square = VMobject().set_points_as_corners(points).make_smooth().shift(3*LEFT)
        
        uneven_square = VMobject()
        uneven_square.set_points_as_corners(points[0:3])
        uneven_square.make_smooth()
        uneven_square.add_points_as_corners(points[3:])
        uneven_square.shift(3*RIGHT)
        
        self.add(manual_square, smooth_square, uneven_square)