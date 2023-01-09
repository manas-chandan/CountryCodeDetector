import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Platform } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
@Component({
  selector: 'app-location-finder',
  templateUrl: './location-finder.page.html',
  styleUrls: ['./location-finder.page.scss'],
})
export class LocationFinderPage implements OnInit {

  latitude: any
  longitude: any
  countries = require('country-data').countries;
  countriesArray: any
  countryArr: any
  countryCode:any
  // preferredCountries = ["in"]
  // phoneNumber: any


  constructor(
    private geolocation: Geolocation,   
    private nativeGeocoder: NativeGeocoder,
    private platform: Platform
  ) {
    this.initializeApp()
    this.countriesArray = this.countries.all
    console.log(this.countriesArray);
    
  }
  ngOnInit() {

  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.geolocation.getCurrentPosition().then((resp) => {
        console.log(resp);
        this.latitude = resp.coords.latitude
        this.longitude = resp.coords.longitude
        this.reverseGeocode(this.latitude, this.longitude)
      }).catch((error) => {
        console.log('Error getting location', error);
      });
    });
  }

  reverseGeocode(latitude: any, longitude: any) {
    console.log("enter method" + latitude, longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    // this.nativeGeocoder.reverseGeocode(38.9072, 77.0369, options)
    this.nativeGeocoder.reverseGeocode(latitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        console.log(JSON.stringify(result[0]))
        console.log(JSON.stringify(result))
        console.log(result[0].countryCode.toLowerCase())
        
        this.countryCode=result[0].countryCode.toLowerCase()
        this.countriesArray.forEach((element: any) => {
          console.log(result[0].countryCode, element.countryCallingCodes[0]);
          if (result[0].countryCode == element.alpha2) {
            this.countryArr = element
          }
        });

      })
      .catch((error: any) => console.log(error));
  }


  countryChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('country :', event.value);
  }
}
