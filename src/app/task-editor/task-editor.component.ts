import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import {User} from '../models/user';
import {ClientData} from '../models/clientData';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent implements OnInit {
  task: Task;
  users: User[];

  constructor() {
    this.task = {
      title: "Test Task",
      assignedTo: [],
      timeSpent: 1.0,
      timeLeft: 4.0
    }
    this.users = ClientData.getInstance().users;
  }

  ngOnInit() {


  }

}
