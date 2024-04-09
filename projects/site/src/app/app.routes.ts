import { Routes } from '@angular/router';
import { FrontPageComponent } from './features/front-page/front-page.component';

export const routes: Routes = [
  { path: '', component: FrontPageComponent },
  // { path: '', redirectTo: 'docs', pathMatch: 'full' },
  {
    path: 'docs',
    loadChildren: () =>
      import('./features/docs/docs.module').then((m) => m.DocsModule),
  },
];
