import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Project} from '../models/project';
import {Task} from '../models/task';
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

  @Output() editEvent = new EventEmitter<Project>();
  @Output() selectEvent = new EventEmitter<Project>();
  @Output() deleteEvent = new EventEmitter<Project>();

  editProject(project: Project) {
    this.editEvent.emit(project);
  }

  selectProject(project: Project) {
    this.selectEvent.emit(project);
  }

  deleteProject(project: Project) {
    this.deleteEvent.emit(project);
  }

  getProgress(project) {
    var timeSpent = 0.0;
    var timeLeft = 0.0;

    project.tasks.forEach(element => {
      timeSpent += element.timeSpent;
      timeLeft += element.timeLeft;
    });

    var totalTime = timeSpent + timeLeft;

    if (totalTime == 0){
      return 1;
    }

    return (timeSpent / totalTime) * 100;
  }


}
