import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskEditorComponent } from './task-editor/task-editor.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectSideBarComponent } from './project-side-bar/project-side-bar.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskEditorComponent,
    ProjectListComponent,
    ProjectSideBarComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
