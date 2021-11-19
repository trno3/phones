import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhonesListComponent } from './components/phones/phonesList/phonesList.component';

const routes: Routes = [
  { path: '', component: PhonesListComponent, pathMatch: 'full' },
  { path: '**', component: PhonesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
