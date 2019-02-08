import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskEditorComponent } from './task-editor/task-editor.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectSideBarComponent } from './project-side-bar/project-side-bar.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ProjectEditorComponent } from './project-editor/project-editor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskEditorComponent,
    ProjectListComponent,
    ProjectSideBarComponent,
    TaskListComponent,
    ProjectEditorComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
