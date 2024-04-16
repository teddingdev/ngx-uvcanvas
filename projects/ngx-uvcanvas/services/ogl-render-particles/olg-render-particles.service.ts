import { ElementRef, Inject, Injectable } from '@angular/core';
import { Camera, Geometry, Mesh, Program, Renderer } from 'ogl';

@Injectable({
  providedIn: null,
})
export class OlgRenderParticlesService {
  appendChild(target: ElementRef) {
    const renderer = new Renderer({ depth: false });
    const gl = renderer.gl;
    document.body.appendChild(gl.canvas);
    gl.clearColor(1, 1, 1, 1);

    const camera = new Camera(gl, { fov: 15 });
    camera.position.z = 15;

    function resize() {
      if (target.nativeElement === null) {
        return;
      }
      renderer.setSize(
        target.nativeElement.offsetWidth,
        target.nativeElement.offsetHeight
      );
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    }
    window.addEventListener('resize', resize, false);
    resize();

    const num = 100;
    const position = new Float32Array(num * 3);
    const random = new Float32Array(num * 4);

    for (let i = 0; i < num; i++) {
      position.set([Math.random(), Math.random(), Math.random()], i * 3);
      random.set(
        [Math.random(), Math.random(), Math.random(), Math.random()],
        i * 4
      );
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: position },
      random: { size: 4, data: random },
    });

    const program = new Program(gl, {
      vertex: this.vertex,
      fragment: this.fragment,
      uniforms: {
        uTime: { value: 0 },
      },
      transparent: true,
      depthTest: false,
    });

    // Make sure mode is gl.POINTS
    const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });

    requestAnimationFrame(update);
    function update(t: number) {
      requestAnimationFrame(update);

      // add some slight overall movement to be more interesting
      particles.rotation.x = Math.sin(t * 0.0002) * 0.1;
      particles.rotation.y = Math.cos(t * 0.0005) * 0.15;
      particles.rotation.z += 0.01;

      program.uniforms['uTime'].value = t * 0.001;
      renderer.render({ scene: particles, camera });
    }
    target.nativeElement.appendChild(gl.canvas);
  }
  constructor(
    @Inject('vertex') private vertex: string,
    @Inject('fragment') private fragment: string
  ) {}
}
