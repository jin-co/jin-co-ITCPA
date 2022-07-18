import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Project } from '../models/project/project';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private baseURL = 'http://localhost:3000/project/';  
  constructor(private http: HttpClient, private router: Router) {}

  addProject(
    clientId: number,
    name: string,
    email: string,
    phone: string,
    title: string,
    description: string,
    targetProgram: string[],
    file?: File | string
  ) {
    const project: Project = {
      clientId: clientId,
      companyName: name,
      companyEmail: email,
      companyPhone: phone,
      projectTitle: title,
      projectDescription: description,
      targetProgram: targetProgram,
      attachedFile: file,
    };

    this.http.post(this.baseURL, project).subscribe((result) => {
      this.router.navigate(['/proposal/list']);
    });
  }

  getProjects() {    
    return this.http.get(this.baseURL)
  }

  getProjectsByCompany(id:number) {
    console.log('service call projects: ', id)
    return this.http.get(this.baseURL + id)
  }  
}
