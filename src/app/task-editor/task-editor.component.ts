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
  @Input() new: boolean;
  users: User[];

  constructor() {
    this.users = ClientData.getInstance().users;
  }

  ngOnInit() {

  }

  @Output() updateEvent = new EventEmitter<Task>();
  @Output() deleteEvent = new EventEmitter<Task>();

  updateTask() {
    this.task.title = "NEW TITLE";
    this.updateEvent.emit(this.task);
  }

  deleteTask(task) {
    this.deleteEvent.emit(this.task);
  }



}
