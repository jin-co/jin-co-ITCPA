import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpinnerService {
  constructor() {}
  isLoading = new Subject<boolean>()

  setIsLoading(value: boolean) {
    this.isLoading.next(value)
  }

  getIsLoading() {
    return this.isLoading.asObservable()
  }
}
