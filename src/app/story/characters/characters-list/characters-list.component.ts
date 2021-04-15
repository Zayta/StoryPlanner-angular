import { Component, OnInit,Input } from '@angular/core';
import {Character} from '../../../data/Story';
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
  remove(character:Character){
    console.log('removing character...')
    const inSceneIndex: number = this.inScene.indexOf(character);
    if (inSceneIndex !== -1) {
        this.inScene.splice(inSceneIndex, 1);
    }
    const outSceneIndex: number = this.outOfScene.indexOf(character);
    if (outSceneIndex !== -1) {
        this.outOfScene.splice(outSceneIndex, 1);
    }
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
