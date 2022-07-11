import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupMode } from 'src/app/enums/mode.popup';
import { PopupService } from 'src/app/services/popups/popup';

@Component({
  selector: 'app-popup',
  templateUrl: './popup-choice.component.html',
  styleUrls: ['./popup-choice.component.css', '../popup.style.css'],
})
export class PopupChoiceComponent implements OnInit {
  message!: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { message: string },
    private popupService: PopupService
  ) {}

  ngOnInit(): void {}

  onClick(input: string) {
    if (input === 'ok') {
      this.popupService.responseUpdate.next(true);
    } else {
      this.popupService.responseUpdate.next(false);
    }
  }
}
