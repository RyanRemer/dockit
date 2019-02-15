import { Component } from '@angular/core';
import {ClientData} from './models/clientData';
import { Project } from './models/project';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'dockit';

  selectedProject: Project;
  selectedTask: Task;
  editProject: boolean;
  editTask: boolean;
  taskFilter: string;

  constructor() {
    this.viewProjectList();
  }

  showProjectList() {
    if ((this.selectedProject == null) && (this.editProject == false)) {
      return true;
    }
    return false;
  }

  showProject() {
    return (this.selectedProject != null && this.editProject == false);
  }

  showEditProject() {
    return this.editProject;
  }

  receiveProjToEdit($event) {
    this.editProject = true;
    this.selectedProject = $event;
    console.log(this.selectedProject);
    console.log(this.editProject);
  }

  receiveProjToSelect($event) {
    this.selectedProject = $event;
  }

  receiveProjToAdd($event){
    ClientData.getInstance().addProject($event);
    this.viewProjectList();
  }

  receiveProjToUpdate($event){
    var oldProject = $event[0];
    var newProject = $event[1];
    ClientData.getInstance().updateProject(oldProject, newProject);
    this.viewProjectList();
  }

  receiveProjToDelete($event) {
    var badProject = $event;
    ClientData.getInstance().deleteProject(badProject);
    this.viewProjectList();
  }

  receiveAdd() {
    this.selectedProject = null;
    this.selectedTask = null;
    this.editProject = true;
    this.editTask = false;
    this.taskFilter = "All Tasks";
  }

  viewProjectList() {
    this.selectedProject = null;
    this.editProject = false;
  }

  add() {
    if (this.selectedProject == null) {
      this.editProject = true;
      this.editTask = false;
      this.taskFilter = 'All Tasks';
    }
    else {
      this.selectedTask = null;
      this.editTask = true;
    }
  }
}
