from manim import *

class TextAnimationExamples(Scene):
    def construct(self):
        lbl = Text("Text added letter by letter")
        wbw = Text("Text added word by word")
        twc = Text("Text typed with cursor")
        VGroup(lbl, wbw, twc).arrange(DOWN)
        cursor = Rectangle(
            color = GREY_A,
            fill_color = GREY_A,
            fill_opacity = 1.0,
            height = 1.1,
            width = 0.5,
        ).move_to(twc[0]) # Position the cursor
        
        self.wait()
        self.play(
            AddTextLetterByLetter(lbl),
            AddTextWordByWord(wbw),
            TypeWithCursor(twc, cursor=cursor),
            run_time=3
        )
        self.wait()