import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { OglRenderService } from 'ngx-uvcanvas/core';
import { frag, vert } from 'ngx-uvcanvas/glsl/lib-test';

@Component({
  selector: 'nuc-lib-test',
  standalone: true,
  imports: [],
  templateUrl: './lib-test.component.html',
  styleUrl: './lib-test.component.css',
  providers: [
    { provide: 'vertex', useValue: vert },
    { provide: 'fragment', useValue: frag },
    {
      provide: OglRenderService,
      useClass: OglRenderService,
    },
  ],
})
export class LibTestComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef;

  ngAfterViewInit(): void {
    this.oglRenderService.appendChild(this.container);
  }
  constructor(private oglRenderService: OglRenderService) {}
}
