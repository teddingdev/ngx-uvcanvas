import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

import { OglRenderService } from 'ngx-uvcanvas/core';
import { frag, vert } from 'ngx-uvcanvas/glsl/lumiflex';

@Component({
  selector: 'nuc-lumiflex',
  standalone: true,
  imports: [],
  templateUrl: './lumiflex.component.html',
  styleUrl: './lumiflex.component.css',
  providers: [
    { provide: 'vertex', useValue: vert },
    { provide: 'fragment', useValue: frag },
    {
      provide: OglRenderService,
      useClass: OglRenderService,
    },
  ],
})
export class LumiflexComponent implements OnInit, AfterViewInit {
  @ViewChild('container') container!: ElementRef;

  @Input() time?: number;
  @Input() speed?: number;
  @Input() paused?: boolean;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.oglRenderService.appendChild(this.container);
    // const ctn = this.container.nativeElement;
    // const renderer = new Renderer();
    // const gl = renderer.gl;
    // const geometry = new Triangle(gl);
    // const program = new Program(gl, {
    //   vertex: vert,
    //   fragment: frag,
    //   uniforms: {
    //     uTime: { value: 0 },
    //     uColor: { value: new Color(0.3, 0.2, 0.5) },
    //   },
    // });
    // const mesh = new Mesh(gl, { geometry, program });
    // let animateId: number | undefined = undefined;
    // const update = (t: number) => {
    //   animateId = requestAnimationFrame(update);
    //   const time = t * 0.01,
    //     speed = 1.0;
    //   program.uniforms['uTime'].value = time * speed * 0.1;
    //   renderer.render({ scene: mesh });
    // };
    // const resize = () => {
    //   if (ctn == null) {
    //     return;
    //   }
    //   const scale = 1;
    //   renderer.setSize(ctn.offsetWidth * scale, ctn.offsetHeight * scale);
    // };
    // window.addEventListener('resize', resize, false);
    // resize();
    // gl.clearColor(1, 1, 1, 1);
    // animateId = requestAnimationFrame(update);
    // ctn.appendChild(gl.canvas);
  }
  constructor(private oglRenderService: OglRenderService) {}
  // constructor() {}
}
