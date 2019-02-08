import { Project } from "./project";
import { User } from "./user";
import { Task } from "./task"

export class ClientData {
    users: User[];
    projects: Project[];
    private static singleton = new ClientData();

    private constructor(){
        this.users = getUserData();
        this.projects = getProjectData();
    }

    public static getInstance(){
        return this.singleton;
    }

    getProject(projectName) {
      for (let i = 0; i < this.projects.length; i++) {
        if (this.projects[i].title == projectName) {
          return this.projects[i];
        }
      }
      return null;
    }

    deleteProject(projectName) {
      var keepProjects = [];
      for (let i = 0; i < this.projects.length; i++) {
        if (this.projects[i].title != projectName) {
          keepProjects.push(this.projects[i]);
        }
      }
      this.projects = keepProjects;
    }

    findTask(projectName, taskName) {
      for (let i = 0; i < this.projects.length; i++) {
        if (this.projects[i].title == projectName) {
          for (let j = 0; j < this.projects[i].tasks.length; j++) {
            if (this.projects[i].tasks[j].title == taskName) {
              return(this.projects[i].tasks[j]);
            }
          }
        }
      }
      return null;
    }

    updateTask(projectName, task) {
      for (let i = 0; i < this.projects.length; i++) {
        if (this.projects[i].title == projectName) {
          for (let j = 0; j < this.projects[i].tasks.length; j++) {
            if (this.projects[i].tasks[j].title == task.title) {
              this.projects[i].tasks[j] = task;
            }
          }
        }
      }
    }

    deleteTask(projectName, taskName) {
      for (let i = 0; i < this.projects.length; i++) {
        if (this.projects[i].title == projectName) {
          var keepTasks = [];
          for (let j = 0; j < this.projects[i].tasks.length; j++) {
            if (this.projects[i].tasks[j].title != taskName) {
              keepTasks.push(this.projects[i].tasks[j])
            }
          }
          this.projects[i].tasks = keepTasks
        }
      }
    }
}

function getUserData(){
    var users = [];
    users.push(new User("Amy Anderson"));
    users.push(new User("Brandon Brown"));
    users.push(new User("Fred Francom"));
    users.push(new User("Jim Johnson"));
    users.push(new User("Maddy Aydelotte"));
    users.push(new User("Ryan Remer"));
    users.push(new User("Steve Smith"));
    return users;
}

function getProjectData(){
    var projects = [];

    var redstone = new Project("Redstone Park Management", "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.");
    var task1 = new Task();
    task1.title = "Update legalese";
    task1.timeSpent = 3;
    task1.timeLeft = 5;
    redstone.addTask(task1);
    var task2 = new Task();
    task2.title = "Contact city hall";
    task2.timeSpent = 0.25;
    task2.timeLeft = 1;
    redstone.addTask(task2);

    var nightwolf = new Project("Night Wolf Integration", "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.");
    var task3 = new Task();
    task3.title = "Update Black Fox";
    task3.timeSpent = 3.5;
    task3.timeLeft = 10;
    nightwolf.addTask(task3);
    var task4 = new Task();
    task4.title = "Scale Mountain Range";
    task4.timeSpent = 20;
    task4.timeLeft = 35;
    nightwolf.addTask(task4);
    var task5 = new Task();
    task5.title = "Clear Sagebrush of virus affects";
    task5.timeSpent = 0.5;
    task5.timeLeft = 9;
    nightwolf.addTask(task5);
    var task6 = new Task();
    task6.title = "Check Bluebird health";
    task6.timeSpent = 2;
    task6.timeLeft = 3;
    nightwolf.addTask(task6);
    var task7 = new Task();
    task7.title = "Manage Grizzly";
    task7.timeSpent = 27;
    task7.timeLeft = 45;
    nightwolf.addTask(task7);
    var task8 = new Task();
    task8.title = "Add Elk";
    task8.timeSpent = 18;
    task8.timeLeft = 21;
    nightwolf.addTask(task8);
    var task9 = new Task();
    task9.title = "Release Night Wolf";
    task9.timeSpent = 0.1;
    task9.timeLeft = 1;
    nightwolf.addTask(task9);

    var breakfast = new Project("Breakfast Club Administration", "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.");

    projects.push(redstone);
    projects.push(nightwolf);
    projects.push(breakfast);
    return projects;
}
