import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { OlgRenderParticlesService } from 'ngx-uvcanvas/services';
import { frag, vert } from 'ngx-uvcanvas/glsl/particles';

@Component({
  selector: 'nuc-particles',
  standalone: true,
  imports: [],
  templateUrl: './particles.component.html',
  styleUrl: './particles.component.scss',
  providers: [
    { provide: 'vertex', useValue: vert },
    { provide: 'fragment', useValue: frag },
    {
      provide: OlgRenderParticlesService,
      useClass: OlgRenderParticlesService,
    },
  ],
})
export class ParticlesComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef;

  constructor(private olgRenderParticlesService: OlgRenderParticlesService) {}
  ngAfterViewInit(): void {
    this.olgRenderParticlesService.appendChild(this.container);
  }
}
