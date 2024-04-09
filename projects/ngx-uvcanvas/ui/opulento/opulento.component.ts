import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { OglRenderService } from 'ngx-uvcanvas/core';
import { frag, vert } from 'ngx-uvcanvas/glsl/opulento';

@Component({
  selector: 'nuc-opulento',
  standalone: true,
  imports: [],
  templateUrl: './opulento.component.html',
  styleUrl: './opulento.component.css',
  providers: [
    { provide: 'vertex', useValue: vert },
    { provide: 'fragment', useValue: frag },
    {
      provide: OglRenderService,
      useClass: OglRenderService,
    },
  ],
})
export class OpulentoComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef;

  ngAfterViewInit(): void {
    this.oglRenderService.appendChild(this.container);
  }
  constructor(private oglRenderService: OglRenderService) {}
}
