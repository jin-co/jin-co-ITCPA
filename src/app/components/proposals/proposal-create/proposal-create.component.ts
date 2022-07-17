import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Project } from 'src/app/models/project/project';

@Component({
  selector: 'app-proposal-create',
  templateUrl: './proposal-create.component.html',
  styleUrls: ['./proposal-create.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class ProposalCreateComponent implements OnInit {
  contactInfoGroup!: FormGroup;
  projectDetailGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  toppings = new FormControl('');

  programs: string[] = ['CP', 'CPA', 'ITCP', 'CDCD', 'All'];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactInfoGroup = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
    this.projectDetailGroup = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      targetProgram: [[], Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      file: ['', Validators.required],
    });
  }

  newContactInfo!: Project;
  addContactInfo() {
    if (this.contactInfoGroup.valid) {
      this.newContactInfo = {
        companyName: this.contactInfoGroup.value.name,
        companyEmail: this.contactInfoGroup.value.email,
        companyPhone: this.contactInfoGroup.value.phone,
      };
    }
  }

  newProjectDetail!: Project
  addProjectDetail() {
    if (this.projectDetailGroup.valid) {
      this.newProjectDetail = {
        projectName: this.contactInfoGroup.value.title,
        projectDescription: this.contactInfoGroup.value.description,
        targetProgram: this.contactInfoGroup.value.phone,
      };      

      console.log('added: ', this.newContactInfo)
      console.log('project: ', this.projectDetailGroup)
    }
  }
}
