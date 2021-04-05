import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragIconComponent} from './drag-icon/drag-icon.component'


@NgModule({
  declarations: [
    DragIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DragIconComponent]
})
export class IconsModule { }
