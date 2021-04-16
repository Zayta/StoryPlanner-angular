import { Component, OnInit,Input } from '@angular/core';
import {Character} from '../../../data/Story';
import {CharacterLiComponent} from '../character-li/character-li.component';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'characters-dragdrop',
  templateUrl: './characters-dragdrop.component.html',
  styleUrls: ['./characters-dragdrop.component.scss']
})
export class CharactersDragDropComponent implements OnInit {
  
  @Input() characters:Character[];
  title = 'Characters';
  inSceneList:string;
  notInSceneList:string;

  public inScene: Character[];
  public outOfScene: Character[];

  ngOnInit(): void {
    this.inScene=[];
    this.outOfScene=this.characters;
    
  }
  
  
  

  addCharacter(){
    this.characters.push(new Character());
    
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
