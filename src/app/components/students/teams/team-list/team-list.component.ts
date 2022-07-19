import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css', '../../../proposals/proposal-list/proposal-list.component.css']
})
export class TeamListComponent implements OnInit {
  projects: any = [];
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {    
    this.projectService.getProjects().subscribe(projects => {      
      this.projects = projects      
    })
  }

  onApplyClick(projectId:number) {
    //todo -> apply to a project
    console.log("apply", projectId)
  }
}
