import { Component, OnInit, Input} from '@angular/core';
import {Scene} from '../../../data/Story'
@Component({
  selector: 'scene-details',
  templateUrl: './scene-details.component.html',
  styleUrls: ['./scene-details.component.scss']
})
export class SceneDetailsComponent implements OnInit {
  @Input() scene:Scene;
  showDetails: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleDetails(){
    this.showDetails = !this.showDetails;       
  }

}
