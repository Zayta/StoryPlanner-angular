import { Injectable } from '@angular/core';
import { Story } from './Story';
import {LocalStorageService} from '../local-storage.service';
import {v4 as uuidv4} from 'uuid';
let STORAGE_KEY = 'local_storylist';
@Injectable({
  providedIn: 'root'
})

export class StoryService {
  stories:Story[]=[];
  constructor(private localStorageService:LocalStorageService) {
    
  }
  //===Dashboard retrieving/adding stories===//
  getStories(): Story[] {
    let stories: Story[] = [];
    if(this.localStorageService.get(STORAGE_KEY)){
      this.stories = this.localStorageService.get(STORAGE_KEY);
      stories = this.stories;
    }
    return stories;
  }

  saveStories(stories:Story[]): void {
      this.localStorageService.set(STORAGE_KEY,stories)
  }
  
  addStory(newStoryName:string = '', charas=[],scns =[]): void {
    
      this.stories.push({
        id: uuidv4(),
        date:new Date(),
        name: newStoryName,
        characters:charas,
        scenes:scns
      });
      this.saveStories(this.stories);
    
  }
  deleteStory(story:Story):void{
    let stories:Story[] = this.getStories();
    let ind = -1;
    for (let i = 0; i < stories.length; i++) {
      if (stories[i].id == story.id) {
        ind = i;
        break;
      }  
    }
    if(ind>-1){
      stories.splice(ind, 1);
    }
    this.saveStories(stories);
  }

  //=== Editing story===//
  getStory(id: string): Story {
    let stories:Story[] = this.getStories();
    let story: Story = new Story();
    for (let i = 0; i < stories.length; i++) {
      if (stories[i].id == id) {
        story = stories[i];
        break;
      }  
    }

    return Object.assign({}, story);
  }
  saveStory(story:Story):void{
    const id = story.id;
    const oldStory = this.stories.find(s => s.id === id) as Story;
    const index = this.stories.indexOf(oldStory);

    if (index > -1) {
        this.stories.splice(index, 1);
    }
    this.stories.splice(index, 0, story);
    this.saveStories(this.stories);
  }
}
