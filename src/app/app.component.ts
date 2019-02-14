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

  showProjectSideBar() {
    if (this.selectedProject == null) {
      return false;
    }
    if (this.showEditProject()){
      return false;
    }
    return true;
  }

  showEditProject() {
    return this.editProject;
  }

  showTaskList() {
    if (this.selectedProject == null) {
      return false;
    }
    if (this.editProject == true) {
      return false;
    }
    if (this.editTask == true) {
      return false;
    }
    return true;
  }

  showEditTask() {
    return this.editTask;
  }

  receiveProjToEdit($event) {
    this.editProject = true;
    this.selectedProject = ClientData.getInstance().getProject($event);
    console.log(this.selectedProject);
    console.log(this.editProject);
  }

  receiveProjToSelect($event) {
    this.selectedProject = ClientData.getInstance().getProject($event);
  }

  recieveProjToUpdate($event){
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

  receiveTaskToEdit($event) {
    this.selectedTask = $event;
    this.editTask = true;
  }

  receiveTaskToDelete($event) {
    ClientData.getInstance().deleteTask(this.selectedProject, $event.title);
    this.editTask = false;
  }

  receiveTaskToUpdate($event) {
    
    ClientData.getInstance().updateTask(this.selectedProject, $event);
    for (let j = 0; j < this.selectedProject.tasks.length; j++) {
      if (this.selectedProject.tasks[j].title == $event.title) {
        this.selectedProject.tasks[j] = $event;
      }
    }

    this.editTask = false;
  }

  receiveFilterEvent($event) {
    this.taskFilter = $event;
  }

  viewProjectList() {
    this.selectedProject = null;
    this.selectedTask = null;
    this.editProject = false;
    this.editTask = false;
    this.taskFilter = 'All Tasks';
  }

  add() {
    if (this.selectedTask == null) {
      this.selectedTask = null;
      this.editProject = true;
      this.editTask = false;
      this.taskFilter = 'All Tasks';
    }
    else {
      this.selectedProject = null;
      this.selectedTask = null;
      this.editTask = true;
    }
  }
}
