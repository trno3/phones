import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhonesComponent } from './phones/phonesList/phonesList.component';

const routes: Routes = [
  { path: '', component: PhonesComponent },
  { path: '', component: PhonesComponent, pathMatch: 'full' },
  { path: '**', component: PhonesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
