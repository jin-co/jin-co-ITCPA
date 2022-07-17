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
  fileUploadGroup!: FormGroup;
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
      targetProgram: ['', Validators.required],
    });
    this.fileUploadGroup = this._formBuilder.group({
      file: [null],
    });
  }

  preview!: string;
  //todo -> fix error
  addFiles(e: Event) {    
    const file = (e.target as HTMLInputElement).files?.[0];    
    this.fileUploadGroup.patchValue({ image: file });
    this.fileUploadGroup.get('image')?.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    };

    reader.readAsDataURL(file as Blob);                  
  }
}
