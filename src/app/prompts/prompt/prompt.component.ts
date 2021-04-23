import { Component, OnInit } from '@angular/core';
import {PromptService} from '../prompt.service';
import {PromptType} from '../PromptType'
@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss']
})
export class PromptComponent implements OnInit {
  prompt:string;
  promptType:PromptType;
  public promptTypes = PromptType;
  constructor(private promptService:PromptService) { }

  ngOnInit(): void {
    this.promptType = PromptType.DIALOGUE;
    this.prompt = '';
    for (var time in PromptType) {
      console.log(time) 
  }
  }

  generate(){
    this.promptService.getPrompt(this.promptType).subscribe(prompt =>this.prompt=JSON.stringify(prompt));
  }

  


}
