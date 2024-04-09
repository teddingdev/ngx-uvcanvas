import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ToolbarComponent } from '@components/toolbar/toolbar.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    MatToolbarModule,
    ToolbarComponent,
    NgClass,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'doc';
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'icon_github',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        '/assets/svg/icon_github.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'icon_angular',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        '/assets/svg/icon_angular.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'icon_uvcanvas',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        '/assets/svg/icon_uvcanvas.svg'
      )
    );
  }
}
