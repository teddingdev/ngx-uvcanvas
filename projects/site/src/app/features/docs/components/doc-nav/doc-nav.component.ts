import { Component, Input } from '@angular/core';

export type Nav =
  | {
      name: string;
      value: string;
      activated: boolean;
      type: 'component';
      icon?: string;
    }
  | {
      name: string;
      value: string;
      type: 'separateor';
    };

@Component({
  selector: 'app-doc-nav',
  standalone: false,
  templateUrl: './doc-nav.component.html',
  styleUrl: './doc-nav.component.scss',
})
export class DocNavComponent {
  @Input()
  activatedUrl = 'introduction';

  activatedPath = 'introduction';

  getActivated(path: string): boolean {
    return this.activatedUrl.includes(path);
  }

  navList: Nav[] = [
    {
      type: 'separateor',
      // name: 'Getting Started',
      name: '现在开始',
      value: 'Getting Started',
    },
    {
      type: 'component',
      // name: 'Introduction',
      name: '介绍',
      value: 'introduction',
      activated: false,
    },
    {
      type: 'component',
      // name: 'Installation',
      name: '安装',
      value: 'installation',
      activated: false,
    },
    {
      type: 'component',
      // name: 'All Components',
      name: '所有组件',
      value: 'all-components',
      activated: false,
    },
    // {
    //   type: 'component',
    //   name: 'Contributing',
    //   value: 'contributing',
    //   activated: false,
    // },
    // {
    //   type: 'component',
    //   name: 'Changelog',
    //   value: 'changelog',
    //   activated: false,
    // },
    {
      type: 'separateor',
      // name: 'Components',
      name: '组件',
      value: 'Components',
    },
    {
      type: 'component',
      name: 'nuc-lumiflex',
      value: 'component/lumiflex',
      activated: false,
    },
    {
      type: 'component',
      name: 'nuc-zenitho',
      value: 'component/zenitho',
      activated: false,
    },
    {
      type: 'component',
      name: 'nuc-novatrix',
      value: 'component/novatrix',
      activated: false,
    },
    {
      type: 'component',
      name: 'nuc-velustro',
      value: 'component/velustro',
      activated: false,
    },
    {
      type: 'component',
      name: 'nuc-tranquiluxe',
      value: 'component/tranquiluxe',
      activated: false,
    },
    {
      type: 'component',
      name: 'nuc-opulento',
      value: 'component/opulento',
      activated: false,
    },
    {
      type: 'component',
      name: 'nuc-forest',
      value: 'component/forest',
      activated: false,
    },
    {
      type: 'separateor',
      // name: 'ChangeLog',
      name: '其他',
      value: 'Other',
    },
    {
      type: 'component',
      name: '变更日志',
      value: 'changelog',
      activated: false,
    },
  ];
}
