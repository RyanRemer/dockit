import { Component, OnInit, Input } from '@angular/core';
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
  users: User[];

  constructor(taskToEdit:Task) {
    this.users = ClientData.getInstance().users;
  }

  ngOnInit() {

  }

}
