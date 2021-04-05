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

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.getstories();
  }

  getstories(): void {
    this.storyService.getStories()
      .subscribe(stories => this.stories = stories);
  }
}