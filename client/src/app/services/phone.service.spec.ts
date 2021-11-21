import { HttpClient } from '@angular/common/http';
import * as td from 'testdouble';

import { Phone } from '../models/phone';
import { PhoneService } from './phone.service';

describe('PhoneService', () => {
  let httpClientMock: HttpClient = null!;
  let service: PhoneService = null!;

  beforeEach(() => {
    httpClientMock = td.constructor(HttpClient).prototype;
    service = new PhoneService(httpClientMock);
  });

  it('should be created', () => {
    const service: PhoneService = new PhoneService(httpClientMock);
    expect(service).toBeTruthy();
  });

  describe('createPhone', () => {
    it('should set the id passed to the httpclient post as undefined', () => {
      const fakeData: Partial<Phone> = { id: 11, name: 'fake name' };

      service.createPhone(fakeData);

      expect().toVerify({
        called: httpClientMock.post<Phone>(
          '/phones/',
          {
            id: undefined,
            name: 'fake name',
          },
          td.matchers.anything()
        ),
        times: 1,
      });
    });
  });
});
