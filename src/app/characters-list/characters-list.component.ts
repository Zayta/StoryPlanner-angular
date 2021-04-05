import { Component, OnInit,Input } from '@angular/core';
import {Character} from '../data/Story';
import {NgForm} from '@angular/forms' ;
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  
  @Input() characters:Character[];
  title = 'Characters';
  taskName  = String;
  inSceneList = String;
  arr = [];

  public inScene: Character[];
  public outOfScene: Character[];
  ngOnInit(): void {
    this.inScene=[];
    this.outOfScene=this.characters;
  }
  
  
  




  drop(event: CdkDragDrop<Character[]>) {
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
