import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  metrics = ['Mile', 'KM']; //the option to choose if it's in miles or km
  //1 kilometer is equal to 0.621371  -- 1 mile is equal to 1.609344 kilometers

  metric: string = '';
  input: number;
  result: number;

  constructor() {
  }

  convert(m: string, v: number) {
    //m = 'KM';
    if (m == 'KM') {
      this.result = v * 0.621371;
    } else if (m == 'Mile') {
      this.result = v / 0.621371;
    }
  }

  ngOnInit() {
  }

}
