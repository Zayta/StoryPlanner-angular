import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {Tabs,Tab} from './tabs/tabs.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { PlotEditorComponent } from './plot-editor/plot-editor.component';
@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    DashboardComponent,
    StoryComponent,
    Tab,Tabs, CharactersListComponent, PlotEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
