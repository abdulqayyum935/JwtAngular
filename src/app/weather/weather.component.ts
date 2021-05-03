import { Component, OnInit } from '@angular/core';
import { IWeather } from '../weather/weather.interface';
import { WeatherService } from './weather.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weathers: IWeather[]=[];
  
  constructor(private weather: WeatherService) {
  
  }

  ngOnInit(): void {
    this.weather.fetchWeather().subscribe(data=>{
      this.weathers=data;
    })
  }
}
