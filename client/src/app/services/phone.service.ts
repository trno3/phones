import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Phone } from '../models/phone';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PhoneService {
  constructor(private httpClient: HttpClient) {}

  getList(): Observable<Phone[]> {
    return this.httpClient.get<Phone[]>('/phones');
  }
}
