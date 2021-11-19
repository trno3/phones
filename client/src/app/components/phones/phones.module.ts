import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhonesListComponent } from './phonesList/phonesList.component';
import { PhoneItemComponent } from './phonesList/phoneItem.component';

@NgModule({
  declarations: [PhonesListComponent, PhoneItemComponent],
  imports: [CommonModule],
})
export class PhonesModule {}
