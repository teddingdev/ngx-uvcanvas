import { ElementRef, Inject, Injectable } from '@angular/core';
import {
  Color,
  Mesh,
  Program,
  Renderer,
  Camera,
  Transform,
  Texture,
  Geometry,
} from 'ogl';

@Injectable({
  providedIn: null,
})
export class OglRenderForestService {
  private renderer = new Renderer({ dpr: 2 });

  appendChild(target: ElementRef) {
    const ctn = target.nativeElement;
    const gl = this.renderer.gl;
    gl.clearColor(1, 1, 1, 1);

    const camera = new Camera(gl, { fov: 45 });
    camera.position.set(0, 4, 8);
    camera.lookAt([0, 0, 0]);

    const resize = () => {
      if (ctn === null) {
        return;
      }
      this.renderer.setSize(ctn.offsetWidth, ctn.offsetHeight);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    };
    window.addEventListener('resize', resize, false);
    resize();

    const scene = new Transform();

    const texture = new Texture(gl);
    const img = new Image();
    img.onload = () => (texture.image = img);
    img.src = `assets/ngx-uvcanvas/forest/forest.jpg`;

    const program = new Program(gl, {
      vertex: this.vertex,
      fragment: this.fragment,
      uniforms: {
        uTime: { value: 0 },
        tMap: { value: texture },

        // Pass relevant uniforms for fog
        uFogColor: { value: new Color('#ffffff') },
        uFogNear: { value: 2 },
        uFogFar: { value: 15 },
      },
    });

    let mesh: Mesh<Geometry, Program>;
    loadModel();
    async function loadModel() {
      const data = await (await fetch(`assets/ngx-uvcanvas/forest/forest.json`)).json();

      const size = 8;
      const num = size * size;

      let offset = new Float32Array(num * 3);
      let random = new Float32Array(num * 3);
      for (let i = 0; i < num; i++) {
        // Layout in a grid
        offset.set(
          [
            ((i % size) - size * 0.5) * 2,
            0,
            (Math.floor(i / size) - size * 0.5) * 2,
          ],
          i * 3
        );

        random.set([Math.random(), Math.random(), Math.random()], i * 3);
      }

      const geometry = new Geometry(gl, {
        position: { size: 3, data: new Float32Array(data.position) },
        uv: { size: 2, data: new Float32Array(data.uv) },
        offset: { instanced: true, size: 3, data: offset },
        random: { instanced: true, size: 3, data: random },
      });

      mesh = new Mesh(gl, { geometry, program });
      mesh.setParent(scene);
    }

    const update = (t: number) => {
      requestAnimationFrame(update);

      if (mesh) {
        mesh.rotation.y += 0.003;
        mesh.position.z = Math.sin(t * 0.0004) * 3.0;
      }

      program.uniforms['uTime'].value = t * 0.001;
      this.renderer.render({ scene, camera });
    };
    requestAnimationFrame(update);
    ctn.appendChild(gl.canvas);
  }

  constructor(
    @Inject('vertex') private vertex: string,
    @Inject('fragment') private fragment: string
  ) {}
}
