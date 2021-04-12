import { Component, OnInit } from '@angular/core';
import { Story } from '../data/Story';
import { StoryService } from '../story.service';

import {v4 as uuidv4} from 'uuid';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  stories: Story[] = [];

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.getstories();
  }

  getstories(): void {
    this.storyService.getStories()
      .subscribe(stories => this.stories = stories);
    
  }
  addStory(name:string = '', charas=[],scns =[]): void {
    this.stories.push({
      id: uuidv4(),
      name: '',
      characters:charas,
      scenes:scns
    });
    this.storyService.saveStories(this.stories);
  }
}