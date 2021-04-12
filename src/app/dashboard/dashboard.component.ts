import { Component, OnInit } from '@angular/core';
import { Story } from '../data/Story';
import { StoryService } from '../story.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  stories: Story[] = [];
  public newStoryName:string;
  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.getstories();
  }

  getstories(): void {
    this.storyService.getStories()
      .subscribe(stories => this.stories = stories);
    
  }
  addStory(name:string = '', charas=[],scns =[]): void {
    if (this.newStoryName == '') {
      alert('Name required')
    }
    else {
      this.stories.push({
        id: new Date().toString(),
        name: this.newStoryName,
        characters:charas,
        scenes:scns
      });
      this.storyService.saveStories(this.stories);
    }

  }
  public deleteStory(index:number) {
    this.stories.splice(index, 1);
    this.storyService.saveStories(this.stories);
  }
}