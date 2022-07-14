import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Qna } from '../models/qna';

@Injectable({ providedIn: 'root' })
export class QnaService {
  private qnas: Qna[] = [];
  private baseURL = 'http://localhost:3000/qna/';
  private qnaUpdate = new Subject<{ qnas: Qna[]; count: number }>();
  constructor(private router: Router, private http: HttpClient) {}

  getQnas(pageSize: number, currentPage: number) {
    const paginatorParams = `?pageSize=${pageSize}&currentPage=${currentPage}`;
    this.http
      .get<{ qnas: Qna[]; count: number }>(this.baseURL + paginatorParams)
      .subscribe((data) => {
        this.qnas = data.qnas;        
        this.qnaUpdate.next({ qnas: [...this.qnas], count: data.count });
      });
  }

  getQna(id: string) {
    return this.http.get<{
      _id: string;
      title: string;
      content: string;
      imagePath: string;
    }>(this.baseURL + id);
  }

  addQna(title: string, content: string) {
    const qna: Qna = {
      _id: '',
      title: title,
      content: content,
      imagePath: '',
    };
    this.http.post<Qna>(this.baseURL, qna).subscribe((result) => {
      console.log('service result: ', result);
      // this.qnas.push(result);
      // this.qnaUpdate.next([...this.qnas]);
      this.router.navigate(['/qna/list']);
    });
  }

  deleteQna(id: string) {
    this.http.delete(this.baseURL + id).subscribe((result) => {
      this.router.navigate(['/qna/list']);
    });
  }

  updateQna(
    id: string,
    title: string,
    content: string,
    imagePath: string | File
  ) {
    const qna = {
      _id: id,
      title: title,
      content: content,
      imagePath: imagePath,
    };
    this.http.put(this.baseURL + id, qna).subscribe(() => {
      this.router.navigate(['/qna/list']);
    });
  }

  qnaUpdateListener() {
    return this.qnaUpdate.asObservable();
  }
}
