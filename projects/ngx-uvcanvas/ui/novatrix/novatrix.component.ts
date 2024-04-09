import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { OglRenderService } from 'ngx-uvcanvas/core';
import { frag, vert } from 'ngx-uvcanvas/glsl/novatrix';

@Component({
  selector: 'nuc-novatrix',
  standalone: true,
  imports: [],
  templateUrl: './novatrix.component.html',
  styleUrl: './novatrix.component.css',
  providers: [
    { provide: 'vertex', useValue: vert },
    { provide: 'fragment', useValue: frag },
    {
      provide: OglRenderService,
      useClass: OglRenderService,
    },
  ],
})
export class NovatrixComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef;

  ngAfterViewInit(): void {
    this.oglRenderService.appendChild(this.container);
  }
  constructor(private oglRenderService: OglRenderService) {}
}
