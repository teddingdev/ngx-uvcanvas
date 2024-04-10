import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointService } from '@services/breakpoint.service';
import { provideMarkdown } from 'ngx-markdown';

@Component({
  selector: 'app-docs',
  standalone: false,
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.scss',
  providers: [provideMarkdown()],
})
export class DocsComponent {
  get url() {
    return this.router.url;
  }

  currentScreenSize:
    | 'Unknown'
    | 'XSmall'
    | 'Small'
    | 'Medium'
    | 'Large'
    | 'XLarge' = 'Unknown';

  menuDefaultOpened = new Map([
    ['Unknown', false],
    ['XSmall', false],
    ['Small', false],
    ['Medium', false],
    ['Large', true],
    ['XLarge', true],
  ]);

  menuOpened = true;

  constructor(
    private router: Router,
    private breakpointService: BreakpointService
  ) {
    this.breakpointService.currentScreenSize$.subscribe((currentScreenSize) => {
      this.currentScreenSize = currentScreenSize;
      this.menuOpened = this.menuDefaultOpened.get(currentScreenSize) || false;
    });
  }
}
