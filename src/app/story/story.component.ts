import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Story,Scene} from '../data/Story';
import {StoryService} from '../data/story.service'
import { Location } from '@angular/common';
import {CharactersListComponent} from './characters/characters-list/characters-list.component';
import {PlotEditorComponent} from './plot/plot-editor/plot-editor.component';
@Component({
  selector: 'story',
  templateUrl: './story.template.html',
  styleUrls: ['./story.style.scss']
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
      this.story = this.storyService.getStory(id);
  }

  saveStory(): void{
    this.storyService.saveStory(this.story);
  }
  goBack(): void {
    this.location.back();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
