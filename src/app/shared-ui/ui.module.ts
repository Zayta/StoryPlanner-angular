import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Tabs,Tab} from './ui-components/tabs/tabs.component'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';

@NgModule({
  declarations: [Tabs,Tab],
  imports: [
    CommonModule,
    NoopAnimationsModule,
    DragDropModule,
    TextareaAutosizeModule
  ],
  exports:[Tabs,Tab,NoopAnimationsModule,
    DragDropModule,TextareaAutosizeModule]
})
export class UIModule { }
