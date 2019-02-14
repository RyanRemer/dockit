import {User} from './user'

export class Task{
    title:string;
    assignedTo:User[];
    timeSpent:number;
    timeLeft:number;

    constructor(){
        this.timeSpent = 0.0;
        this.timeLeft = 0.0
        this.assignedTo = [];
        this.timeSpent = 0.0;
        this.timeLeft = 0.0;
    }

}
