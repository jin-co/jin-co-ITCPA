import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css', '../../proposals/proposal-list/proposal-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: any = [];
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {    
    this.projectService.getProjects().subscribe(projects => {      
      this.projects = projects      
    })
  }

}
