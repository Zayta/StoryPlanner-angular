import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragIconComponent} from './drag-icon/drag-icon.component';
import { DelIconComponent } from './del-icon/del-icon.component';
import { EditIconComponent } from './edit-icon/edit-icon.component';


@NgModule({
  declarations: [
    DragIconComponent,
    DelIconComponent,
    EditIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DragIconComponent,DelIconComponent,EditIconComponent]
})
export class IconsModule { }
