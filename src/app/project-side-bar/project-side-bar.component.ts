import { Component, OnInit, Input } from '@angular/core';
import {Project} from '../models/project';

@Component({
  selector: 'app-project-side-bar',
  templateUrl: './project-side-bar.component.html',
  styleUrls: ['./project-side-bar.component.css']
})
export class ProjectSideBarComponent implements OnInit {

  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

}
