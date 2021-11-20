import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhoneDetailsComponent } from './components/phones/phoneDetail/phoneDetail.component';
import { PhonesListComponent } from './components/phones/phonesList/phonesList.component';

const routes: Routes = [
  { path: 'phonedetail/:id', component: PhoneDetailsComponent },
  { path: '', component: PhonesListComponent, pathMatch: 'full' },
  { path: '**', component: PhonesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
