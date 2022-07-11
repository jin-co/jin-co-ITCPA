import { Component, OnInit } from '@angular/core';
import { StudentTeamRequestService } from 'src/app/services/student-team-request';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  requestCount:number = 0
  constructor(private requestService: StudentTeamRequestService) { }

  ngOnInit(): void {
    this.requestService.requestUpdateListener().subscribe(data => {
      this.requestCount = data.count
    })
  }

}
