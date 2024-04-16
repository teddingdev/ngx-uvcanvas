import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { OglRenderForestService } from 'ngx-uvcanvas/services';
import { frag, vert } from 'ngx-uvcanvas/glsl/forest';

@Component({
  selector: 'nuc-forest',
  standalone: true,
  imports: [],
  templateUrl: './forest.component.html',
  styleUrl: './forest.component.scss',
  providers: [
    { provide: 'vertex', useValue: vert },
    { provide: 'fragment', useValue: frag },
    {
      provide: OglRenderForestService,
      useClass: OglRenderForestService,
    },
  ],
})
export class ForestComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef;

  @Input() time?: number;
  @Input() speed?: number;
  @Input() paused?: boolean;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.oglRenderForestService.appendChild(this.container);
  }
  constructor(private oglRenderForestService: OglRenderForestService) {}
}
