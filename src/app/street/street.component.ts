import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-street',
  templateUrl: './street.component.html',
  styleUrls: ['./street.component.css']
})
export class StreetComponent implements OnInit {
  BASE_URL = `https://raw.githubusercontent.com/zemirco/sf-city-lots-json/master/citylots.json`;
  streetChecked = false;
  street = '';
  data: any;
  feature: any;
  streets: any[] = [];

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

      // looping over features to get street names and push unique values to streets array:
      this.data.features.forEach((feature: any) => {
        (this.streets.indexOf(feature.properties.STREET) === -1) && this.streets.push(feature.properties.STREET);
      })
    });
  }
}
