import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Gradient } from 'ngx-uvcanvas/glsl/zenitho';

@Component({
  selector: 'nuc-zenitho',
  standalone: true,
  imports: [],
  templateUrl: './zenitho.component.html',
  styleUrl: './zenitho.component.css',
})
export class ZenithoComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    const gradient = new Gradient(
      // this.container.nativeElement.clientWidth,
      // this.container.nativeElement.clientHeight
      window.innerWidth,
      window.innerHeight,
    );
    // @ts-ignore
    gradient.initGradient({
      gradientColors: ['#ef008f', '#6ec3f4', '#7038ff', '#ffba27'],
    });
    // @ts-ignore
    this.container.nativeElement.appendChild(gradient.el);
  }
}
