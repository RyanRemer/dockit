import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() tasks: Task[];
  @Input() filter: string;

  constructor() {
 }

  ngOnInit() {
  }

  @Output() editEvent = new EventEmitter<Task>();
  @Output() deleteEvent = new EventEmitter<Task>();

  editTask(task) {
    this.editEvent.emit(task);
  }

  deleteTask(task) {
    var keepTasks = [];
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].title != task.title) {
        keepTasks.push(this.tasks[i]);
      }
    }
    this.tasks = keepTasks;
    this.deleteEvent.emit(task);
  }

  getProgress(task) {
    var timeSpent = 0.0;
    var timeLeft = 0.0;

    this.tasks.forEach(element => {
      if (element.title == task) {
        timeSpent += element.timeSpent;
        timeLeft += element.timeLeft;
      }
    });

    var totalTime = timeSpent + timeLeft;

    if (totalTime == 0){
      return 1;
    }

    return (timeSpent / totalTime) * 100;
  }

  getTasks() {
    if (this.filter == "Overview") {
      return this.tasks;
    }
    return [];
  }

}
