import { Injectable } from '@angular/core';
import { Story } from './data/Story';
import { STORIES } from './data/mock-stories';
import { Observable, of } from 'rxjs';
import {LocalStorageService} from './local-storage.service';
let STORAGE_KEY = 'local_storylist';
@Injectable({
  providedIn: 'root'
})

export class StoryService {
  stories:Story[]=[];
  constructor(private localStorageService:LocalStorageService) {
    
  }

  getStories(): Observable<Story[]> {
    let stories: Observable<Story[]> = of([]);
    if(this.localStorageService.get(STORAGE_KEY)){
      this.stories = this.localStorageService.get(STORAGE_KEY);
      stories = of(this.stories);
    }
    return stories;
  }
  saveStories(stories:Story[]): void {
      this.localStorageService.set(STORAGE_KEY,stories)
  }
  getStory(id: string): Observable<Story> {
    // For now, assume that a Story with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const Story = this.stories.find(s => s.id === id) as Story;
    return of(Story);
  }
}
