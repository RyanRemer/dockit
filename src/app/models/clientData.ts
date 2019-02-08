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
    var task = new Task();
    task.title = "Update legalese";
    redstone.addTask(task);

    projects.push(redstone);
    projects.push(new Project("Night Wolf Integration", "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."));
    projects.push(new Project("Breakfast Management Club", "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration."));
    return projects;
}
