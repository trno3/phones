import { NgModule } from '@angular/core';

import { PhonesModule } from './phones/phones.module';
import { SpinnerModule } from './spinner/spinner.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  exports: [PhonesModule, SpinnerModule, HeaderModule],
})
export class ComponentsModule {}
