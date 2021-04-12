import { Component, OnInit,Input } from '@angular/core';
import {SceneDetailsComponent} from '../scene-details/scene-details.component';
import {Scene} from '../../../data/Story';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'plot-editor',
  templateUrl: './plot-editor.component.html',
  styleUrls: ['./plot-editor.component.scss']
})
export class PlotEditorComponent implements OnInit {
  scenesList:string;
  
  @Input() scenes:Scene[];
  constructor() { }

  ngOnInit(): void {
    
  }
  
  remove(scene:Scene){
    const index: number = this.scenes.indexOf(scene);
    if (index !== -1) {
        this.scenes.splice(index, 1);
    }
  }
  drop(event: CdkDragDrop<Scene[]>) {
    console.log(event);

    if (event.previousContainer === event.container) {
      // change the items index if it was moved within the same list
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex

      );
    } else {
      // remove item from the previous list and add it to the new array
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
