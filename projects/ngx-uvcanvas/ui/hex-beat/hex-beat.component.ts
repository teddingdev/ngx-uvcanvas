import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { OglRenderService } from 'ngx-uvcanvas/core';
import { createFragment, vert } from 'ngx-uvcanvas/glsl/hex-beat';

@Component({
  selector: 'nuc-hex-beat',
  standalone: true,
  imports: [],
  templateUrl: './hex-beat.component.html',
  styleUrl: './hex-beat.component.css',
})
export class HexBeatComponent implements OnInit, AfterViewInit {
  @ViewChild('container') container!: ElementRef;
  oglRenderService: OglRenderService | null = null;
  /** 保留三位小数的 数字字符串 */
  @Input() sqrt: string = '1.732';
  /** 保留两位小数的 数字字符串 */
  @Input() scale: string = '10.0';

  ngOnInit(): void {
    this.oglRenderService = new OglRenderService(
      vert,
      createFragment(this.sqrt, this.scale)
    );
  }

  ngAfterViewInit(): void {
    this.oglRenderService?.appendChild(this.container);
  }
  constructor() {}
}
