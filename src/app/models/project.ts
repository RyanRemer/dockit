import {Task} from './task'
import {User} from './user'

export class Project{
    title: string;
    description: string;
    assignedTo: User[];
    tasks: Task[];

    constructor(title?, description?){
        this.title = title;
        this.description = description;
        this.assignedTo = [];
        this.tasks = [];
    }

    addTask(newTask) {
      this.tasks.push(newTask);
    }

    timeLeft() {
      var timeLeft = 0;
      for (var i = 0; i < this.tasks.length; ++i) {
        if (this.tasks[i].timeLeft != null) {
          timeLeft = timeLeft + this.tasks[i].timeLeft;
        }
      }
      return timeLeft;
    }
}
