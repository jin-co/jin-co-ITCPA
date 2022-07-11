import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PopupService {
  public responseUpdate = new Subject<boolean>();

  responseUpdateListener() {
    return this.responseUpdate.asObservable();
  }
}
