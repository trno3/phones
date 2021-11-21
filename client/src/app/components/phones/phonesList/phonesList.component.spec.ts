import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

import * as td from 'testdouble';

import { Phone } from 'src/app/models/phone';
import { PhoneService } from 'src/app/services/phone.service';
import { PhonesListComponent } from './phonesList.component';

describe('PhonesComponent', () => {
  let component: PhonesListComponent = null!;
  let fixture: ComponentFixture<PhonesListComponent> = null!;
  let phoneServiceMock: PhoneService = null!;

  beforeEach(async () => {
    phoneServiceMock = td.constructor(PhoneService).prototype;

    await TestBed.configureTestingModule({
      declarations: [PhonesListComponent],
      providers: [{ provide: PhoneService, useValue: phoneServiceMock }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonesListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should draw two phone cards when the PhoneService.getList() returns two phones', () => {
    const phoneList: BehaviorSubject<Phone[]> = new BehaviorSubject<Phone[]>([
      new Phone(),
      new Phone(),
    ]);
    td.when(phoneServiceMock.getList()).thenReturn(phoneList);

    fixture.detectChanges();
    const areThereTwoCards: boolean =
      fixture.debugElement.queryAll(By.css('.phone-card')).length === 2;

    expect(areThereTwoCards).toBeTruthy();
  });

  it('should show a spinner until phone data is loaded', () => {
    const phoneList: Subject<Phone[]> = new Subject<Phone[]>();
    td.when(phoneServiceMock.getList()).thenReturn(phoneList);

    fixture.detectChanges();

    const isSpinerShowing: boolean =
      fixture.debugElement.query(By.css('spinner')) !== null;

    expect(isSpinerShowing).toBeTruthy();
  });
});
