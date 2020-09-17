import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallespelisPage } from './detallespelis.page';

const routes: Routes = [
  {
    path: '',
    component: DetallespelisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallespelisPageRoutingModule {}
