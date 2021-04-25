import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { IconsModule } from './icons/icons.module'
import { UIModule } from './shared-ui/ui.module'

import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { HttpClientModule } from '@angular/common/http';


import { DashboardComponent } from './dashboard/dashboard.component';
import { CharactersDragDropComponent } from './story/characters/characters-dragdrop/characters-dragdrop.component';
import { PlotEditorComponent } from './story/plot/plot-editor/plot-editor.component';
import { CharacterEditorComponent } from './story/characters/character-editor/character-editor.component';
import { HeaderComponent } from './misc/header/header.component';
import { FooterComponent } from './misc/footer/footer.component';
import { SceneDetailsComponent } from './story/plot/scene-details/scene-details.component';
import { CharacterLiComponent } from './story/characters/character-li/character-li.component';
import { ExportComponent } from './export/export.component';


@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    DashboardComponent,
    StoryComponent,
    CharactersDragDropComponent, 
    PlotEditorComponent, 
    CharacterEditorComponent, 
    HeaderComponent, 
    FooterComponent, SceneDetailsComponent, CharacterLiComponent, ExportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    UIModule,
    IconsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
