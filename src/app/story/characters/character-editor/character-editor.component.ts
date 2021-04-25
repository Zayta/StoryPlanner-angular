import { Component, Input, OnInit } from '@angular/core';
import {Character} from '../../../data/Story';
@Component({
  selector: 'character-editor',
  templateUrl: './character-editor.component.html',
  styleUrls: ['./character-editor.component.scss']
})
export class CharacterEditorComponent implements OnInit {

  @Input() character:Character;
  constructor() { }

  ngOnInit(): void {
  }

}
