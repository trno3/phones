import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Observer, Subscription } from 'rxjs';

import { PhoneService } from 'src/app/services/phone.service';
import { Phone } from 'src/app/models/phone';

@Component({
  selector: 'phone-details',
  templateUrl: 'phoneDetail.component.html',
  styleUrls: ['./phoneDetail.component.scss'],
})
export class PhoneDetailsComponent implements OnInit, OnDestroy {
  phoneId: number = null!;
  phoneData: Observable<Phone> = new Observable<Phone>();
  phoneDetailGroup: FormGroup = null!;
  viewDisabled: boolean = false;
  creatingPhone: boolean = false;

  private phoneDataSubscription$: Subscription = null!;
  private phone: Phone = new Phone();

  constructor(
    private phoneService: PhoneService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    const id: string = this.activatedRoute.snapshot.params['id'];
    this.phoneId = id ? +id : null!;
  }

  ngOnInit(): void {
    this.createForm();

    if (this.phoneId !== null) {
      this.phoneData = this.phoneService.getPhone(this.phoneId);

      this.phoneDataSubscription$ = this.phoneData.subscribe((res: Phone) => {
        this.phone = res;
        this.phoneDetailGroup.patchValue(this.phone);
        this.setState(false);
      });
    } else {
      this.phoneData = new Observable((observer: Observer<Phone>) => {
        observer.next(this.phone);
        observer.complete();
      });
      this.phoneDetailGroup.setValue(this.phone);
      this.creatingPhone = true;
    }
  }

  ngOnDestroy(): void {
    if (this.phoneDataSubscription$) {
      this.phoneDataSubscription$.unsubscribe();
    }
  }

  editPhone(): void {
    this.setState(true);
  }

  onSubmit(data: Phone): void {
    if (this.phoneDetailGroup.dirty) {
      const modifiedPhone: Phone = {
        ...this.phone,
        ...this.phoneDetailGroup.value,
      };

      if (modifiedPhone.id !== null) {
        this.phoneService.updatePhone(data).subscribe(() => {
          this.onSaveCompleted();
        });
      } else {
        this.phoneService.createPhone(data).subscribe(() => {
          this.onSaveCompleted();
        });
      }
    }

    this.setState(false);
  }

  deletePhone(): void {
    this.viewDisabled = true;

    this.phoneService.deletePhone(this.phone.id!).subscribe((res) => {
      this.router.navigateByUrl('/');
    });
  }

  setState(enabled: boolean): void {
    enabled ? this.phoneDetailGroup.enable() : this.phoneDetailGroup.disable();
  }

  editStateEnabled(): boolean {
    return this.phoneDetailGroup.enabled;
  }

  private onSaveCompleted(): void {
    this.phoneDetailGroup.reset();
    this.router.navigateByUrl('/');
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
      imageFileName: ['', Validators.required],
    });
  }
}
