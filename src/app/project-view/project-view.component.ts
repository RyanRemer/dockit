import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';
import { Task } from '../models/task';
import { ClientData } from '../models/clientData';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})

export class ProjectViewComponent implements OnInit {

  @Input() project: Project;
  selectedTask: Task;
  filteredTasks: Task[];
  editTask: boolean;
  taskFilter: string;

  constructor() { }

  ngOnInit() {
    this.filteredTasks = this.project.tasks;
    this.selectedTask == null;
    this.editTask = false;
    this.taskFilter = "All Tasks";
  }

  viewTaskList(){
    this.selectedTask = null;
    this.editTask = false;
  }

  showTaskEditor(){
    return this.editTask;
  }

  receiveFilterEvent($event) {
    this.taskFilter = $event;
  }

  receiveTaskToEdit($event) {
    this.selectedTask = $event;
    this.editTask = true;
  }

  receiveTaskToUpdate($event) {
    var oldTask = $event[0];
    var newTask = $event[1];
    ClientData.getInstance().updateTask(this.project, oldTask, newTask);
    this.viewTaskList();
  }

  receiveTaskToDelete($event) {
    ClientData.getInstance().deleteTask(this.project, $event);
    this.viewTaskList();
  }

  receiveTaskToAdd($event) {
    ClientData.getInstance().addTask(this.project, $event);
    this.viewTaskList();
  }

}
