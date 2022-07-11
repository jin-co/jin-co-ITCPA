import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Qna } from 'src/app/models/qna';
import { QnaService } from 'src/app/services/qna';
import { SpinnerService } from 'src/app/services/spinner';

@Component({
  selector: 'app-qna-list',
  templateUrl: './qna-list.component.html',
  styleUrls: ['./qna-list.component.css'],
})
export class QnaListComponent implements OnInit {
  qnas: Qna[] = [];
  constructor(
    private qnaService: QnaService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.spinnerService.setIsLoading(true)
    this.qnaService.getQnas(this.pageSize, this.currentPage);
    this.qnaService.qnaUpdateListener().subscribe(({ qnas, count }) => {
      this.spinnerService.setIsLoading(false)
      this.qnas = qnas;
      this.total = count;
    });
  }

  onDelete(id: string) {
    this.qnaService.deleteQna(id);
  }

  pageSize: number = 10;
  total: number = 20;
  pageSizeOptions: number[] = [5, 10, 15, 20, 30, 50, 100];
  currentPage = 0;

  onPaginatorChange(e: PageEvent) {
    this.currentPage = e.pageIndex + 1;
    this.pageSize = e.pageSize;
    this.qnaService.getQnas(this.pageSize, this.currentPage);
  }
}
