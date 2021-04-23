import { Component, Input, OnInit } from '@angular/core';
import {Character} from '../../../data/Story';
@Component({
  selector: 'character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  @Input() character:Character;
  constructor() { }

  ngOnInit(): void {
  }

}
