import {User} from './user'

export class Task{
    title:string;
    assignedTo:User[];
    timeSpent:number;
    timeLeft:number;
}