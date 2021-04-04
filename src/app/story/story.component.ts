import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Story} from '../data/Story';
import {StoryService} from '../story.service'
import { Location } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  story!: Story;
  private sub:any;
  constructor( private route: ActivatedRoute,
    private storyService: StoryService,
    private location: Location) { 
    
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
      
    this.getStory(id);
   });
  }
  getStory(id:string): void {
    this.storyService.getStory(id)
      .subscribe(story => this.story = story);
  }

  goBack(): void {
    this.location.back();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
