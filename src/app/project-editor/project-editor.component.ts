import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../models/project';
import { User } from '../models/user';
import { ClientData } from '../models/clientData';
import { projection } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-project-editor',
  templateUrl: './project-editor.component.html',
  styleUrls: ['./project-editor.component.css']
})
export class ProjectEditorComponent implements OnInit {

  @Input() project: Project;
  updatedProject: Project;

  @Input() new: boolean;
  users: User[];
  searchName: string;
  

  constructor() {
   }

  ngOnInit() {
    var clientData = ClientData.getInstance();
    this.users = clientData.users;

    this.updatedProject = Object.assign({}, this.project);
  }

  getFilteredUsers(){
    if (!this.searchName){
      return this.users;
    } else {
      var filteredUsers = [];
      this.users.forEach(user => {
        var name = user.name.toLowerCase();
        if (name.includes(this.searchName.toLowerCase())){
          filteredUsers.push(user);
        }
      })
      return filteredUsers;
    }
  }

  isAssignedToProject(user:User){
    return this.updatedProject.assignedTo.includes(user);
  }

  setAssignment(user:User, isAssigned:boolean){
    if (isAssigned && !this.updatedProject.assignedTo.includes(user)){
      this.updatedProject.assignedTo.push(user);
    } else {
      var index = this.updatedProject.assignedTo.indexOf(user);
      this.updatedProject.assignedTo.splice(index, 1);
    }
  }

  @Output() updateEvent = new EventEmitter<Project[]>();
  @Output() deleteEvent = new EventEmitter<Project>();

  updateProject(){
    this.updateEvent.emit([this.project, this.updatedProject]);
  }

  deleteProject(){
    this.deleteEvent.emit(this.project)
  }

}
