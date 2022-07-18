import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project/project';
import { ProjectService } from 'src/app/services/project';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css'],
})
export class ProposalListComponent implements OnInit {
  projects: any = [];
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {    
    this.projectService.getProjectsByCompany(1).subscribe(projects => {      
      this.projects = projects
    })
  }
}
