from manim import *


class ThreeDExamples(ThreeDScene):
    def surface_func(self, u, v):
        return np.array([np.cos(u) * np.cos(v), np.cos(u) * np.sin(v), u])

    def construct(self):
        self.set_camera_orientation(phi=75 * DEGREES, theta=30 * DEGREES)
        axes = ThreeDAxes()
        self.add(axes, Circle())
        text3d = Text("This is a fixed 3D text").to_corner(UL)
        self.add_fixed_in_frame_mobjects(text3d)
        
        self.begin_ambient_camera_rotation(rate=0.1)
        self.wait()
        self.play(
            Create(Dodecahedron().move_to([-2, 2, -3])), # Notice how we are using the third axis now
            Create(Sphere().move_to([2, 2, -3 ])),
            Create(Cylinder().move_to([2, -2, 3])),
            Create(Icosahedron().move_to([-2, -2, 3])),
            Create(Arrow3D().move_to([-2, -2, -3])),
            Create(Surface(
                lambda u, v: axes.c2p(*self.surface_func(u, v)),
                u_range=[-PI, PI],
                v_range=[0, TAU],
                resolution=8,),
            ),
        )
        self.wait(10)
