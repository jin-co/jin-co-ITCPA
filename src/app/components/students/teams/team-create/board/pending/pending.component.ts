import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TeamRequest } from 'src/app/models/student/team.request';
import { StudentTeamRequestService } from 'src/app/services/student-team-request';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css'],
})
export class PendingComponent implements OnInit {
  requests: TeamRequest[] = [];
  constructor(private requestService: StudentTeamRequestService) {}
    
  ngOnInit(): void {
    this.requestService.getRequests();
    this.requestService.requestUpdateListener().subscribe((data) => {           
      this.requests = data.requests;      
    });
  }

  onCancelClick(id:number) {
    this.requestService.deleteRequest(id)
  }
}
