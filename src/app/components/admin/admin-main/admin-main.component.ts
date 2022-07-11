import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css'],
})
export class AdminMainComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  imgPreview!: string;
  uploadedFile!: File;
  onImageLoad(e: any) {
    this.uploadedFile = e.target.files[0];

  }

  onSubmit() {
    const formData = new FormData()
    formData.append("image", this.uploadedFile, this.uploadedFile.name)
    this.http.post('https://itcpa-2a61f-default-rtdb.firebaseio.com/test.json', formData).subscribe(result => {
      console.log(result)
    })
  }
}
