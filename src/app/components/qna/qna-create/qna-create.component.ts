import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Qna } from 'src/app/models/qna';
import { QnaService } from 'src/app/services/qna';
import { SpinnerService } from 'src/app/services/spinner';

@Component({
  selector: 'app-qna-create',
  templateUrl: './qna-create.component.html',
  styleUrls: ['./qna-create.component.css'],
})
export class QnaCreateComponent implements OnInit {
  form!: FormGroup;
  mode: string = 'Create';
  id!: string;
  qna!: Qna;

  constructor(
    private qnaService: QnaService,
    private activatedRoute: ActivatedRoute,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, { validators: [Validators.required] }),
      content: new FormControl(null, { validators: [Validators.required] }),
    });

    this.activatedRoute.paramMap.subscribe((pm: ParamMap) => {
      if (pm.has('id')) {
        const qnaId = pm.get('id');
        if (qnaId !== null) {
          this.id = qnaId;
        }
        this.mode = 'Edit';

        this.qnaService.getQna(this.id).subscribe((qna) => {
          this.qna = {
            _id: this.id,
            title: qna.title,
            content: qna.content,
            imagePath: qna.imagePath,
          };

          this.form.setValue({
            title: this.qna.title,
            content: this.qna.content,
            imagePath: this.qna.imagePath,
          });
        });
      }
    });
  }

  onSubmit() {
    this.spinnerService.setIsLoading(true)
    if (this.form.valid) {
      if (this.mode === 'Create') {
        this.qnaService.addQna(this.form.value.title, this.form.value.content);
      } else {
        this.qnaService.updateQna(
          this.id,
          this.form.value.title,
          this.form.value.content,
          this.form.value.imagePath
        );
      }
    }
    this.spinnerService.setIsLoading(false)
    this.form.reset();
  }
}
