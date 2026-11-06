from manim import *

class ImageFromArray(Scene):
    def construct(self):

        image = ImageMobject(np.uint8([
            [[255, 0, 0], [0, 255, 0]], # First row: Red and Green
            [[0, 0, 255], [255, 255, 0]] # Second row: Blue and Yellow
        ]))

        image.height = 7

        self.add(image)