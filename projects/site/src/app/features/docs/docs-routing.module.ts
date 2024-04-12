import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsComponent } from './docs.component';

import { DocLumiflexComponent } from './components/doc-lumiflex/doc-lumiflex.component';
import { DocZenithoComponent } from './components/doc-zenitho/doc-zenitho.component';
import { DocNovatrixComponent } from './components/doc-novatrix/doc-novatrix.component';
import { DocVelustroComponent } from './components/doc-velustro/doc-velustro.component';
import { DocTranquiluxeComponent } from './components/doc-tranquiluxe/doc-tranquiluxe.component';
import { DocOpulentoComponent } from './components/doc-opulento/doc-opulento.component';
import { DocIntroductionComponent } from './components/doc-introduction/doc-introduction.component';
import { DocInstallationComponent } from './components/doc-installation/doc-installation.component';
import { DocContributingComponent } from './components/doc-contributing/doc-contributing.component';
import { DocChangelogComponent } from './components/doc-changelog/doc-changelog.component';
import { DocAllPreviewComponent } from './components/doc-all-preview/doc-all-preview.component';

const routes: Routes = [
  {
    path: '',
    component: DocsComponent,
    children: [
      {
        path: '',
        redirectTo: 'introduction',
        pathMatch: 'full',
      },
      {
        path: 'introduction',
        component: DocIntroductionComponent,
      },
      {
        path: 'installation',
        component: DocInstallationComponent,
      },
      {
        path: 'contributing',
        component: DocContributingComponent,
      },
      {
        path: 'changelog',
        component: DocChangelogComponent,
      },
      {
        path: 'all-components',
        component: DocAllPreviewComponent,
      },
      {
        path: 'component',
        children: [
          {
            path: 'lumiflex',
            component: DocLumiflexComponent,
          },
          {
            path: 'zenitho',
            component: DocZenithoComponent,
          },
          {
            path: 'novatrix',
            component: DocNovatrixComponent,
          },
          {
            path: 'velustro',
            component: DocVelustroComponent,
          },
          {
            path: 'tranquiluxe',
            component: DocTranquiluxeComponent,
          },
          {
            path: 'opulento',
            component: DocOpulentoComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule {}