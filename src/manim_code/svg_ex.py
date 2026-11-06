import urllib.request
from pathlib import Path
from manim import *

def svg_from_url(url: str, **kwargs) -> SVGMobject:
    filename = Path.cwd() / url.split("/")[-1]
    if not filename.suffix == ".svg":
        filename = filename.with_suffix(".svg")

    urllib.request.urlretrieve(url, filename)
    return SVGMobject(str(filename), **kwargs)


class SVGExercise(Scene):
    def construct(self):
        url = "https://2026.es.pycon.org/images/logo-vertical-alt-color-dark.svg"
        svg = svg_from_url(url, color=RED)
        svg.scale(2)
        self.add(svg)