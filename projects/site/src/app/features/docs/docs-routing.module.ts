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
import { DocForestComponent } from './components/doc-forest/doc-forest.component';
import { DocAuthorComponent } from './components/doc-author/doc-author.component';
import { DocParticlesComponent } from './components/doc-particles/doc-particles.component';
import { DocLibTestComponent } from './components/doc-lib-test/doc-lib-test.component';
import { DocHexBeatComponent } from './components/doc-hex-beat/doc-hex-beat.component';

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
        path: 'author',
        component: DocAuthorComponent,
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
          {
            path: 'forest',
            component: DocForestComponent,
          },
          {
            path: 'particles',
            component: DocParticlesComponent,
          },
          {
            path: 'hex-beat',
            component: DocHexBeatComponent,
          },
          {
            path: 'lib-test',
            component: DocLibTestComponent,
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
