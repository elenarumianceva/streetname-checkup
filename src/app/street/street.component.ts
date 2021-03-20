import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-street',
  templateUrl: './street.component.html',
  styleUrls: ['./street.component.css']
})
export class StreetComponent implements OnInit {
  BASE_URL = "https://raw.githubusercontent.com/zemirco/sf-city-lots-json/master/citylots.json";
  streetChecked = false;
  street = '';
  data: any;
  streets = [];

  constructor() { }

  ngOnInit(): void {
  }

  onCheckStreet() {
    this.streetChecked = true;
    this.getData();
  }

  getData() {
    const url = `${this.BASE_URL}`;
    axios.get(url).then(data => {
      this.data = data.data;
      // this.streets = this.data;
      console.log('Data:', this.data);
      // need to loop over features to make array for street
      console.log('Street:', this.data.features[0].properties.STREET);
      for (let event in this.data) {
        if (event = "features") {
          console.log('event: ' + event)
          let dataCopy = this.data[event];
          // console.log('dataCopy: ' + dataCopy)
          for (this.data in dataCopy) {
              let mainData = dataCopy[this.data];
              // console.log('mainData: ' + mainData)
              for (const key in mainData) {
                // console.log('key1: ' + key)
                  if (key === "STREET") {
                      console.log('key2: ' + key + ' :: value : ' + mainData[key])
                  }
              }
          }
        }
        else {
          console.log('no features found')
        }
    }​
    });
  }
}
