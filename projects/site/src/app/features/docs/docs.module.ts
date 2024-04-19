import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';

import { MarkdownComponent } from 'ngx-markdown';

import { DocsRoutingModule } from './docs-routing.module';

import { DocsComponent } from './docs.component';
import { DocNavComponent } from './components/doc-nav/doc-nav.component';
import { DocZenithoComponent } from './components/doc-zenitho/doc-zenitho.component';
import { DocOpulentoComponent } from './components/doc-opulento/doc-opulento.component';
import { DocNovatrixComponent } from './components/doc-novatrix/doc-novatrix.component';
import { DocLumiflexComponent } from './components/doc-lumiflex/doc-lumiflex.component';
import { DocVelustroComponent } from './components/doc-velustro/doc-velustro.component';
import { DocTranquiluxeComponent } from './components/doc-tranquiluxe/doc-tranquiluxe.component';
import { DocIntroductionComponent } from './components/doc-introduction/doc-introduction.component';

const MatModules = [
  MatTabsModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatGridListModule,
];

import {
  ForestComponent,
  ZenithoComponent,
  LumiflexComponent,
  NovatrixComponent,
  OpulentoComponent,
  VelustroComponent,
  ParticlesComponent,
  TranquiluxeComponent,
  LibTestComponent
} from 'ngx-uvcanvas/ui';
import { DocInstallationComponent } from './components/doc-installation/doc-installation.component';
import { DocAllPreviewComponent } from './components/doc-all-preview/doc-all-preview.component';
import { AllComponentsComponent } from '@components/all-components/all-components.component';
import { DocChangelogComponent } from './components/doc-changelog/doc-changelog.component';
import { FooterComponent } from '@components/footer/footer.component';
import { DocForestComponent } from './components/doc-forest/doc-forest.component';
import { DocAuthorComponent } from './components/doc-author/doc-author.component';
import { DocParticlesComponent } from './components/doc-particles/doc-particles.component';
import { DocLibTestComponent } from './components/doc-lib-test/doc-lib-test.component';

@NgModule({
  imports: [
    CommonModule,
    DocsRoutingModule,
    MarkdownComponent,
    ...MatModules,
    ForestComponent,
    ZenithoComponent,
    LumiflexComponent,
    NovatrixComponent,
    OpulentoComponent,
    VelustroComponent,
    ParticlesComponent,
    TranquiluxeComponent,
    AllComponentsComponent,
    FooterComponent,
    LibTestComponent
  ],
  declarations: [
    DocsComponent,
    DocNavComponent,
    DocIntroductionComponent,
    DocInstallationComponent,
    DocChangelogComponent,
    DocAllPreviewComponent,
    DocLumiflexComponent,
    DocNovatrixComponent,
    DocOpulentoComponent,
    DocTranquiluxeComponent,
    DocVelustroComponent,
    DocZenithoComponent,
    DocForestComponent,
    DocAuthorComponent,
    DocParticlesComponent,
    DocLibTestComponent
  ],
})
export class DocsModule {}
