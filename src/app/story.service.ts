import { Injectable } from '@angular/core';
import { Story } from './data/Story';
import { STORIES } from './data/mock-stories';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoryService {
  constructor() { }

  getStories(): Observable<Story[]> {
    const stories = of(STORIES);
    
    return stories;
  }
  getStory(id: string): Observable<Story> {
    // For now, assume that a Story with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const Story = STORIES.find(s => s.id === id) as Story;
    return of(Story);
  }
}
