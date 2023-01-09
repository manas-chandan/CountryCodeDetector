import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabulardataPageRoutingModule } from './tabulardata-routing.module';

import { TabulardataPage } from './tabulardata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabulardataPageRoutingModule
  ],
  declarations: [TabulardataPage]
})
export class TabulardataPageModule {}
