import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { IconsModule } from './icons/icons.module'

import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import {Tabs,Tab} from './tabs/tabs.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { PlotEditorComponent } from './plot-editor/plot-editor.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    DashboardComponent,
    StoryComponent,
    Tab,Tabs, CharactersListComponent, PlotEditorComponent, CharacterDetailsComponent, HeaderComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    DragDropModule,
    IconsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
