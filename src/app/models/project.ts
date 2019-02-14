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
}
