import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';

import {
  ZenithoComponent,
  LumiflexComponent,
  NovatrixComponent,
  OpulentoComponent,
  VelustroComponent,
  TranquiluxeComponent,
} from 'ngx-uvcanvas/ui';

@Component({
  selector: 'app-all-components',
  standalone: true,
  templateUrl: './all-components.component.html',
  styleUrl: './all-components.component.scss',
  imports: [
    MatGridListModule,
    ZenithoComponent,
    LumiflexComponent,
    NovatrixComponent,
    OpulentoComponent,
    VelustroComponent,
    TranquiluxeComponent,
    RouterModule,
  ],
})
export class AllComponentsComponent {
  @Input()
  cols = 3;
  @Input()
  gutterSize = '16';
}
