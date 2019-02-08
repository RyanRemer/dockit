import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Project} from '../models/project';
import {ClientData} from '../models/clientData';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  constructor() {
    this.projects = ClientData.getInstance().projects;
  }

  ngOnInit() {
  }

  @Output() editEvent = new EventEmitter<string>();
  @Output() selectEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<string>();

  editProject(project) {
    this.editEvent.emit(project);
  }

  selectProject(project) {
    this.selectEvent.emit(project);
  }

  deleteProject(project) {
    var keepProjects = [];
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].title != project) {
        keepProjects.push(this.projects[i]);
      }
    }
    this.projects = keepProjects;
    this.deleteEvent.emit(project);
  }


}
