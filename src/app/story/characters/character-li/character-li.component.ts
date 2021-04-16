import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {Character} from '../../../data/Story';
@Component({
  selector: 'character-li',
  templateUrl: './character-li.component.html',
  styleUrls: ['./character-li.component.scss']
})
export class CharacterLiComponent implements OnInit {
  
  @Input() characters:Character[];
  public toggledCharacters:Character[];//characters in process of being editted are shown

  constructor() { }

  ngOnInit(): void {
    this.toggledCharacters=[];
  }

 
  
  isToggled(character:Character){
    return this.toggledCharacters.includes(character);
  }
  toggleEdit(character:Character){
    if(this.isToggled(character)){
      //remove if toggled contains character, else add it
      let i =this.toggledCharacters.indexOf(character);
      if (i > -1) {
        this.toggledCharacters.splice(i,1)
      }
    }
    else{
      this.toggledCharacters.push(character);
    }
  }
  remove(character:Character){
    console.log('removing character...')
    const index: number = this.characters.indexOf(character);
    if (index !== -1) {
        this.characters.splice(index, 1);
    }
  }

}
