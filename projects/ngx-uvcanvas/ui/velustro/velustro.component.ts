import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { OglRenderService } from 'ngx-uvcanvas/core';
import { frag, vert } from 'ngx-uvcanvas/glsl/velustro';

@Component({
  selector: 'nuc-velustro',
  standalone: true,
  imports: [],
  templateUrl: './velustro.component.html',
  styleUrl: './velustro.component.css',
  providers: [
    { provide: 'vertex', useValue: vert },
    { provide: 'fragment', useValue: frag },
    {
      provide: OglRenderService,
      useClass: OglRenderService,
    },
  ],
})
export class VelustroComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef;

  ngAfterViewInit(): void {
    this.oglRenderService.appendChild(this.container);
  }
  constructor(private oglRenderService: OglRenderService) {}
}
