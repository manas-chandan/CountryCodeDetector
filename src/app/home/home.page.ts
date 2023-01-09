import { Component } from '@angular/core';
// import { Sim, SimOriginal } from '@ionic-native/sim';
import { Sim } from '@ionic-native/sim/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  countries = require('country-data').countries;
  // currencies = require('country-data').currencies,
  // regions = require('country-data').regions,
  // languages = require('country-data').languages,
  // callingCountries = require('country-data');
 

  constructor(private sim: Sim) {
    console.log(this.countries);
    console.log(this.countries.all);
   
    // this.countries.all.forEach((element: any) => {
    //   console.log(element);
      
    //   if(element.countryCallingCodes[0]!=undefined){
    //     console.log(element.countryCallingCodes[0]);
    //   }
    // });
    
   

    this.sim.hasReadPermission().then(
      (info) => console.log('Has permission: ', info)
    );

    this.sim.requestReadPermission().then(
      () => console.log('Permission granted'),
      () => console.log('Permission denied')
    );

    this.sim.getSimInfo().then(
      (info) => {
        console.log('Sim info: ', info)
      },
      (err) => console.log('Error !!!!Unable to get sim info: ', err)
    );
  }

  onClick() {
    // console.log(this.callingCountries);
  }

}
