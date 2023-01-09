import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationFinderPageRoutingModule } from './location-finder-routing.module';

import { LocationFinderPage } from './location-finder.page';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    LocationFinderPageRoutingModule
  ],
  declarations: [LocationFinderPage]
})
export class LocationFinderPageModule {}
