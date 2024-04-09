import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { OglRenderService } from 'ngx-uvcanvas/core';
import { frag, vert } from 'ngx-uvcanvas/glsl/tranquiluxe';

@Component({
  selector: 'nuc-tranquiluxe',
  standalone: true,
  imports: [],
  templateUrl: './tranquiluxe.component.html',
  styleUrl: './tranquiluxe.component.css',
  providers: [
    { provide: 'vertex', useValue: vert },
    { provide: 'fragment', useValue: frag },
    {
      provide: OglRenderService,
      useClass: OglRenderService,
    },
  ],
})
export class TranquiluxeComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef;

  ngAfterViewInit(): void {
    this.oglRenderService.appendChild(this.container);
  }
  constructor(private oglRenderService: OglRenderService) {}
}
