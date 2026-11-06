from manim import *

class WriteExample(Scene):
    def construct(self):
        logo_write = SVGMobject("logo.svg")
        logo_create = SVGMobject("logo.svg")
        VGroup(logo_write, logo_create).arrange(buff=2.5)
        write_text = Text("Write and Unwrite").scale(0.5).next_to(logo_write, DOWN)
        create_text = Text("Create and Uncreate").scale(0.5).next_to(logo_create, DOWN)
        
        self.play(
            Write(logo_write),
            Create(logo_create),
            Write(write_text),
            Create(create_text),
            run_time=3
        )
        
        self.wait()
        
        self.play(
            Unwrite(logo_write),
            Uncreate(logo_create),
            Unwrite(write_text),
            Uncreate(create_text),
            run_time=3
        )

        self.wait()