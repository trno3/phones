import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PhonesListComponent } from './phonesList/phonesList.component';
import { PhoneItemComponent } from './phonesList/phoneItem.component';
import { PhoneDetailsComponent } from './phoneDetail/phoneDetail.component';
import { SpinnerModule } from '../spinner/spinner.module';

@NgModule({
  declarations: [
    PhonesListComponent,
    PhoneItemComponent,
    PhoneDetailsComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, SpinnerModule],
})
export class PhonesModule {}
