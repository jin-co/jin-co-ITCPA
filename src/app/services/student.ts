import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { Student } from '../models/student';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private baseURL = 'http://localhost:3000/students/';
  private studentList: Student[] = [];
  private studentUpdate = new Subject<Student[]>();
  constructor(private http: HttpClient) {}

  getStudents() {
    this.http.get<Student[]>(this.baseURL).subscribe((students) => {
      this.studentList = students;
      this.studentUpdate.next([...this.studentList]);      
    });
  }

  getStudent(id:number) {
    return this.http.get<Student>(this.baseURL + id);
  }

  studentUpdateLinstener() {
    return this.studentUpdate.asObservable();
  }
}
