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

  editProjEvent(project) {
    this.editEvent.emit(project);
  }

  selectProjEvent(project) {
    this.editEvent.emit(project);
  }

}
