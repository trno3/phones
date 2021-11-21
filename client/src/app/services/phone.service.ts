import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Phone } from '../models/phone';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PhoneService {
  constructor(private httpClient: HttpClient) {}

  getList(): Observable<Phone[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.get<Phone[]>('/phones', { headers });
  }

  getPhone(id: number): Observable<Phone> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.get<Phone>(`/phones/${id}`, { headers });
  }

  deletePhone(id: number): Observable<Phone> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.delete<Phone>(`/phones/${id}`, { headers });
  }

  updatePhone(data: Phone): Observable<Phone> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.put<Phone>(`/phones/${data.id}`, data, { headers });
  }

  createPhone(data: Phone): Observable<Phone> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    data.id = undefined;

    return this.httpClient.post<Phone>(`/phones/`, data, { headers });
  }
}
