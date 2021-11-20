import { NgModule } from '@angular/core';

import { PhonesModule } from './phones/phones.module';
import { SpinnerModule } from './spinner/spinner.module';

@NgModule({
  imports: [PhonesModule, SpinnerModule],
})
export class ComponentsModule {}
