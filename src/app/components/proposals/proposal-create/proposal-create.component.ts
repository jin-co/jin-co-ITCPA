import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  toppings = new FormControl('');

  programs: string[] = ['CP', 'CPA', 'ITCP', 'CDCD', 'All'];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactInfoGroup = this._formBuilder.group({
      companyName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      projectTitle: ['', Validators.required],
      projectDescription: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      file: ['', Validators.required],
    });
  }

  addContactInfo() {
    if(this.contactInfoGroup.valid) {
      
    }    
  }
}
