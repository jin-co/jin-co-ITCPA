import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StudentTeamService {
  private baseURL = 'http://localhost:3000/team/';
  constructor(private http: HttpClient) {}

  
}
