import { Component, OnInit } from '@angular/core';
import { Story } from '../data/Story';
import { StoryService } from '../data/story.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {

  public newStoryName:string;
  constructor(private storyService: StoryService) { }

  ngOnInit() {
  }

  getStories(): Story[] {
    return this.storyService.getStories();
    
  }
  addStory(): void {
    if (!this.newStoryName || this.newStoryName == '') {
      this.newStoryName='New Story'
    }
    this.storyService.addStory(this.newStoryName)
    
  }
  public deleteStory(story:Story) {
    this.storyService.deleteStory(story);
  }
}