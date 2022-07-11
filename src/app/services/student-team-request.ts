import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Student } from '../models/student';
import { TeamRequest } from '../models/student/team.request';

@Injectable({ providedIn: 'root' })
export class StudentTeamRequestService {
  private baseURL = 'http://localhost:3000/team-request/';
  private requests: TeamRequest[] = [];
  private requestUpdate = new Subject<{requests: TeamRequest[], count: number}>();

  constructor(private http: HttpClient) {}

  addRequest(newStudent: Student) {
    const request: TeamRequest = {
      teamRequestId: NaN,
      senderId: 1,
      receiverId: newStudent.studentId,
      sentDate: new Date().toISOString(),
      accepted: false,
    };
    const student: Student = newStudent;
    this.http.post<any>(this.baseURL, request).subscribe((result) => {      
      request.teamRequestId = result.insertId
      this.requests.push(request);                       
      this.requestUpdate.next({requests: [...this.requests], count: this.requests.length});
    });
  }

  getRequests() {
    this.http.get<TeamRequest[]>(this.baseURL).subscribe((requests) => {
      this.requests = requests;
      this.requestUpdate.next({requests: [...this.requests], count: this.requests.length});
      console.log('service result: ', requests);
    });
  }

  getRequest(id: number) {}

  deleteRequest(id: number) {
    this.http.delete(this.baseURL + id).subscribe((result) => {
      const deletedRequest = this.requests.filter(
        (r) => r.teamRequestId !== id
      );
      this.requests = deletedRequest;
      this.requestUpdate.next({requests: [...this.requests], count: this.requests.length});
    });
  }

  requestUpdateListener() {
    return this.requestUpdate.asObservable();
  }
}
