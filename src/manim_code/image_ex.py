from urllib import request
from io import BytesIO
from PIL import Image
from manim import *

def image_from_url(url: str) -> ImageMobject:
    with request.urlopen(url) as response:
        img_data = response.read()
    pil_image = Image.open(BytesIO(img_data))
    return ImageMobject(pil_image)

class ImageExercise(Scene):
    def construct(self):
        url = "https://pablogsal.com/_astro/pablo-dither-160.-XZlNx32_LQsIA.png"
        img = image_from_url(url)
        img.scale(5)
        self.add(img)