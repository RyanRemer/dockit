import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';
import { User } from '../models/user';
import { ClientData } from '../models/clientData';

@Component({
  selector: 'app-project-editor',
  templateUrl: './project-editor.component.html',
  styleUrls: ['./project-editor.component.css']
})
export class ProjectEditorComponent implements OnInit {

  @Input() project: Project;
  @Input() new: boolean;
  users: User[];
  searchName: string;

  constructor() {
   }

  ngOnInit() {
    var clientData = ClientData.getInstance();
    this.users = clientData.users;
  }

  filterUsers(){
    if (!this.searchName){
      this.users = ClientData.getInstance().users;
    } else {
      this.users = this.getFilteredUsers();
    }

  }

  getFilteredUsers(){
    var filteredUsers = [];
    this.users.forEach(user => {
      if (user.name.includes(this.searchName)){
        filteredUsers.push(user);
      }
    })
  
    return filteredUsers;
  }

  isAssignedToProject(user:User){
    return this.project.assignedTo.includes(user);
  }

  setAssignment(user:User, isAssigned:boolean){
    if (isAssigned && !this.project.assignedTo.includes(user)){
      this.project.assignedTo.push(user);
    } else {
      var index = this.project.assignedTo.indexOf(user);
      this.project.assignedTo.splice(index, 1);
    }

    console.log(this.project)
  }

  updateProject(){
    
  }

}
