import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';
import { User } from '../models/user';
import { ClientData } from '../models/clientData';

@Component({
  selector: 'app-project-editor',
  templateUrl: './project-editor.component.html',
  styleUrls: ['./project-editor.component.css']
})
export class ProjectEditorComponent implements OnInit {

  @Input() project: Project;
  users: User[];

  constructor() {
    this.users = ClientData.getInstance().users;
   }

  ngOnInit() {
  }

}
