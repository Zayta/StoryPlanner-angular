import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { IconsModule } from './icons/icons.module'
import { UIModule } from './shared-ui/ui.module'

import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { HttpClientModule } from '@angular/common/http';


import { DashboardComponent } from './dashboard/dashboard.component';
import { CharactersListComponent } from './story/characters/characters-list/characters-list.component';
import { PlotEditorComponent } from './story/plot/plot-editor/plot-editor.component';
import { CharacterDetailsComponent } from './story/characters/character-details/character-details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SceneDetailsComponent } from './story/plot/scene-details/scene-details.component';


@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    DashboardComponent,
    StoryComponent,
    CharactersListComponent, 
    PlotEditorComponent, 
    CharacterDetailsComponent, 
    HeaderComponent, 
    FooterComponent, SceneDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    UIModule,
    IconsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
