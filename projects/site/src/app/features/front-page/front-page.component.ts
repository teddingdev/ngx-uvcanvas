import { Component } from '@angular/core';
import { NgStyle, UpperCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition,
//   // ...
// } from '@angular/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

import {
  ZenithoComponent,
  LumiflexComponent,
  NovatrixComponent,
  OpulentoComponent,
  VelustroComponent,
  TranquiluxeComponent,
} from 'ngx-uvcanvas/ui';

import { MarkdownModule, provideMarkdown } from 'ngx-markdown';

import { BreakpointService } from '@services/public_api';
import { AllComponentsComponent } from '@components/all-components/all-components.component';

const MatModule = [
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
];

const Components = [
  ZenithoComponent,
  LumiflexComponent,
  NovatrixComponent,
  OpulentoComponent,
  VelustroComponent,
  TranquiluxeComponent,
];

@Component({
  selector: 'app-front-page',
  standalone: true,
  preserveWhitespaces: true,
  imports: [
    NgStyle,
    UpperCasePipe,
    RouterModule,
    MarkdownModule,
    ...MatModule,
    ...Components,
    AllComponentsComponent,
  ],
  providers: [provideMarkdown()],
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.scss',
  animations: [
    // trigger('openClose', [
    //   state(
    //     'open',
    //     style({
    //       // height: '200px',
    //       opacity: 1,
    //       // backgroundColor: 'yellow',
    //     })
    //   ),
    //   state(
    //     'closed',
    //     style({
    //       // height: '100px',
    //       opacity: 0.1,
    //       // backgroundColor: 'blue',
    //     })
    //   ),
    //   transition('open => closed', [animate('0.3s')]),
    //   transition('closed => open', [animate('0.3s')]),
    // ]),
  ],
})
export class FrontPageComponent {
  title = 'canvas';

  currentScreenSize:
    | 'Unknown'
    | 'XSmall'
    | 'Small'
    | 'Medium'
    | 'Large'
    | 'XLarge' = 'Unknown';

  demoColsMap = new Map([
    ['Unknown', 2],
    ['XSmall', 2],
    ['Small', 2],
    ['Medium', 3],
    ['Large', 3],
    ['XLarge', 3],
  ]);

  titleDirection = new Map([
    ['Unknown', 'row'],
    ['XSmall', 'column'],
    ['Small', 'row'],
    ['Medium', 'row'],
    ['Large', 'row'],
    ['XLarge', 'row'],
  ]);

  // isOpen = true;
  // toggle() {
  //   this.isOpen = !this.isOpen;
  // }

  openGithub() {
    window.open('https://github.com/teddingdev/ngx-uvcanvas', 'blank');
  }

  constructor(private breakpointService: BreakpointService) {
    this.breakpointService.currentScreenSize$.subscribe((currentScreenSize) => {
      this.currentScreenSize = currentScreenSize;
    });
  }
}
