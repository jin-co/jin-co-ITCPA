import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupMode } from 'src/app/enums/mode.popup';
import { Student } from 'src/app/models/student';
import { PopupService } from 'src/app/services/popups/popup';
import { StudentService } from 'src/app/services/student';
import { StudentTeamRequestService } from 'src/app/services/student-team-request';
import { StudentTeamService } from 'src/app/services/student.team';
import { PopupChoiceComponent } from '../../shared/popups/popup-choice/popup-choice.component';
import { PopupConfirmComponent } from '../../shared/popups/popup-confirm/popup-confirm.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  showToolBox: boolean = false;
  clicked!: number;
  selectedStudentId!: number;
  selectedStudent!: Student;

  studentList: Student[] = [
    // {
    //   _id: 1,
    //   studentFirstName: 'tom',
    //   studentLastName: 'jim',
    //   studentNumber: 'sss',
    //   studentEmail: 'ao',
    //   hasTeam: true,
    // },
    // {
    //   _id: 1,
    //   studentFirstName: 'tom3',
    //   studentLastName: 'jim3',
    //   studentNumber: 'sssaa',
    //   studentEmail: 'afffo',
    //   hasTeam: false,
    // },
  ];
  constructor(
    private studentService: StudentService,
    private dialog: MatDialog,
    private popupService: PopupService,
    private studentTeamService: StudentTeamService,
    private requestService: StudentTeamRequestService
  ) {}

  ngOnInit(): void {
    this.studentService.getStudents();
    this.studentService.studentUpdateLinstener().subscribe((students) => {
      this.studentList = students;
    });
  }

  onBtnStatusClick(idx: number, id: number, e: Event) {
    this.clicked = idx;
    this.showToolBox = !this.showToolBox;
    this.selectedStudentId = id;
    console.log(this.selectedStudentId);
  }

  onBtnSendClick(popupMessage: string) {
    this.dialog.open(PopupChoiceComponent, {
      data: { message: popupMessage },
    });
    this.popupService.responseUpdateListener().subscribe((result) => {
      if (result) {
        this.studentService
          .getStudent(this.selectedStudentId)
          .subscribe((student) => {
            this.selectedStudent = student;
            this.requestService.addRequest(student)            
          });

        //todo -> when true add the person the message is being sent to to status
        this.dialog.open(PopupConfirmComponent, {
          data: { message: 'Request Sent' },
        });
      } else {
        return;
      }
    });
  }
}
