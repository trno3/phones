import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  viewDisabled: boolean = false;
  deleteButtonDisabled: boolean = false;

  private currentId: number = -1;
  private phoneDataSubscription: Subscription = null!;

  constructor(
    private phoneService: PhoneService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.phoneId = +this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.phoneData = this.phoneService.getPhone(this.phoneId);

    this.phoneDataSubscription = this.phoneData.subscribe((res: Phone) => {
      this.phoneDetailGroup.patchValue(res);
      this.currentId = res.id!;
      this.setState(false);
    });

    this.createForm();
  }

  ngOnDestroy(): void {
    this.phoneDataSubscription.unsubscribe();
  }

  editPhone(): void {
    this.deleteButtonDisabled = true;
    this.setState(true);
  }

  onSubmit(data: Phone): void {
    if (this.phoneDetailGroup.dirty) {
      this.phoneService.updatePhone(data).subscribe((res) => {
        this.router.navigateByUrl('/');
      });
    }

    this.setState(false);
  }

  deletePhone(): void {
    this.viewDisabled = true;
    //TODO: unsubscribe
    this.phoneService.deletePhone(this.currentId).subscribe((res) => {
      this.router.navigateByUrl('/');
    });
  }

  setState(enabled: boolean): void {
    enabled ? this.phoneDetailGroup.enable() : this.phoneDetailGroup.disable();
  }

  editStateEnabled(): boolean {
    return this.phoneDetailGroup.enabled;
  }

  private createForm(): void {
    this.phoneDetailGroup = this.fb.group({
      id: ['', Validators.required],
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
