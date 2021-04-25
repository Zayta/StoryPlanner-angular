import { Component, OnInit } from '@angular/core';
import { Story } from '../data/Story';
import { StoryService } from '../data/story.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {
  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
  }
  
  getStories(): Story[] {
    return this.storyService.getStories();
    
  }
}
