import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() tasks: Task[];
  @Input() filter: string;

  constructor() { }

  ngOnInit() {
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
