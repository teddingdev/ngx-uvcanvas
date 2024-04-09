import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) {
    console.log(this.router);
  }
}
