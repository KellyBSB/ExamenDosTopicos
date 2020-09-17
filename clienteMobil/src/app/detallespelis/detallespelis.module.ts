import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallespelisPageRoutingModule } from './detallespelis-routing.module';

import { DetallespelisPage } from './detallespelis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallespelisPageRoutingModule
  ],
  declarations: [DetallespelisPage]
})
export class DetallespelisPageModule {}
