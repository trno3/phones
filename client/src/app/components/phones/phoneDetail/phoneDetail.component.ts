import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { PhoneService } from 'src/app/services/phone.service';
import { Phone } from 'src/app/models/phone';

@Component({
  selector: 'phone-details',
  templateUrl: 'phoneDetail.component.html',
  styleUrls: ['./phoneDetail.component.scss'],
})
export class PhoneDetailsComponent implements OnInit, OnDestroy {
  phoneId: number = -1;

  phoneData: Observable<Phone> = new Observable<Phone>();
  phoneDetailGroup: FormGroup = null!;

  private phoneDataSubscription: Subscription = null!;

  constructor(
    private phoneService: PhoneService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.phoneId = +this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.phoneData = this.phoneService.getPhone(this.phoneId);

    this.phoneDataSubscription = this.phoneData.subscribe((res: Phone) => {
      this.phoneDetailGroup.patchValue(res);
      this.setState(false);
    });

    this.createForm();
  }

  ngOnDestroy(): void {
    this.phoneDataSubscription.unsubscribe();
  }

  setState(enabled: boolean): void {
    enabled ? this.phoneDetailGroup.enable() : this.phoneDetailGroup.disable();
  }

  private createForm(): void {
    this.phoneDetailGroup = this.fb.group({
      name: ['', Validators.required],
      manufacturer: ['', Validators.required],
      color: ['', Validators.required],
      screen: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      ram: ['', Validators.required],
      processor: ['', Validators.required],
    });
  }
}
