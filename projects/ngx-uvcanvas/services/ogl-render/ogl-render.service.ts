import { ElementRef, Inject, Injectable } from '@angular/core';
import { Color, Mesh, Program, Renderer, Triangle } from 'ogl';

@Injectable({
  providedIn: null,
})
export class OglRenderService {
  private renderer = new Renderer();
  appendChild(target: ElementRef) {
    const ctn = target.nativeElement;
    const gl = this.renderer.gl;
    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: this.vertex,
      fragment: this.fragment,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new Color(0.3, 0.2, 0.5) },
        uResolution: {
          value: new Color(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height
          ),
        },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });

    let animateId: number | undefined = undefined;

    const update = (t: number) => {
      animateId = requestAnimationFrame(update);
      const time = t * 0.01,
        speed = 1.0;
      program.uniforms['uTime'].value = time * speed * 0.1;
      this.renderer.render({ scene: mesh });
    };

    const resize = () => {
      if (ctn == null) {
        return;
      }
      const scale = 1;
      this.renderer.setSize(ctn.offsetWidth * scale, ctn.offsetHeight * scale);
    };

    window.addEventListener('resize', resize, false);
    resize();

    gl.clearColor(1, 1, 1, 1);
    animateId = requestAnimationFrame(update);
    ctn.appendChild(gl.canvas);
  }

  constructor(
    @Inject('vertex') private vertex: string,
    @Inject('fragment') private fragment: string
  ) {}
}
