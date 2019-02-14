import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';
import {User} from '../models/user';
import {ClientData} from '../models/clientData';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent implements OnInit {

  @Input() task: Task;
  updatedTask: Task;

  @Input() newTask: boolean;
  users: User[];
  searchName:String

  constructor() {
  }

  ngOnInit() {
    this.users = ClientData.getInstance().users;
    this.updatedTask = Object.assign({}, this.task);
    if (this.newTask){
      this.updatedTask = new Task();
    }
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

  isAssignedToTask(user: User){
    return this.updatedTask.assignedTo.includes(user);
  }

  setAssignment(user: User, newValue:boolean){
    if (newValue == true && !this.isAssignedToTask(user)){
      this.updatedTask.assignedTo.push(user);
    } else if (newValue == false){
      const index = this.updatedTask.assignedTo.indexOf(user);
      if (index > -1){
        this.updatedTask.assignedTo.splice(index, 1);
      }
    }
  }

  @Output() updateEvent = new EventEmitter<Task[]>();
  @Output() deleteEvent = new EventEmitter<Task>();
  @Output() addEvent = new EventEmitter<Task>();

  updateTask() {
    this.updateEvent.emit([this.task, this.updatedTask]);
  }

  addTask(){
    this.addEvent.emit(this.updatedTask);
  }

  deleteTask(task) {
    this.deleteEvent.emit(this.task);
  }



}
