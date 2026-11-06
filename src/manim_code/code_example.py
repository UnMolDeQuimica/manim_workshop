from manim import *

class CodeExample(Scene):
    def construct(self):
        code = '''from manim import Scene, Square

class FadeInSquare(Scene):
    def construct(self):
        s = Square()
        self.play(FadeIn(s))
        self.play(s.animate.scale(2))
        self.wait()'''

        rendered_code = Code(
            code_string=code,
            language="python",
            background="window",
            background_config={"stroke_color": "maroon"},
        )
        self.add(rendered_code)