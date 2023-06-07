import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  private _currency = new BehaviorSubject<string>('TND');
  public readonly currency$ = this._currency.asObservable();
}
////