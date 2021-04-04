/**
 * The main component that renders single TabComponent
 * instances.
 */

import {
    Component,
    Input
  } from '@angular/core';
  
  @Component({
    selector: 'tabs',
    template: `
      <div class = 'tabs-container'>
        <div *ngFor="let tab of tabs" (click)="selectTab(tab)" [ngClass]="{'tab-wrapper':!tab.active,'tab-active':tab.active}">
          {{tab.tabTitle}}
        </div>
      </div>
      <ng-content></ng-content>
    `,
    styleUrls: ['./tabs.style.scss']
  })
  export class Tabs {
    tabs: Tab[] = [];
  
    selectTab(tab: Tab) {
      this.tabs.forEach((tab) => {
        tab.active = false;
      });
      tab.active = true;
    }
  
    addTab(tab: Tab) {
      if (this.tabs.length === 0) {
        tab.active = true;
      }
      this.tabs.push(tab);
    }
  }
  
  @Component({
    selector: 'tab',
    template: `
      <div [hidden]="!active">
        <ng-content></ng-content>
      </div>
    `
  })
  export class Tab {
  
    @Input() tabTitle: string='';
    @Input() active = false;
    constructor(tabs:Tabs) {
      tabs.addTab(this);
    }
  }