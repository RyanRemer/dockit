import { Component } from '@angular/core';
import {ClientData} from './models/clientData';
import { Project } from './models/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dockit';

  selectedProject: Project = null;
  selectedTask = 'none';
  editProject = false;

  constructor() {
  }

  showProjectList() {
    if (this.selectedProject == null) {
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
    return true;
  }

  showEditTask() {
    if (this.selectedTask == 'none') {
      return false;

    }
    return true;
  }

  receiveProjToEdit($event) {
    this.editProject = true;
    this.selectedProject = ClientData.getInstance().getProject($event);
    console.log(this.selectedProject);
    console.log(this.editProject);
  }

  receiveProjToSelect($event) {
    this.selectedProject = ClientData.getInstance().getProject($event);
    //this.selectedProject = $event;
  }

  receiveProjToDelete($event) {
    ClientData.getInstance().deleteProject($event);
  }
}
