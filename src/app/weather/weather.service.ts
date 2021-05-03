import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IWeather } from './weather.interface';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}

  fetchWeather(): Observable<IWeather[]> {
    var token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWJkdWxfUWF5eXVtIiwianRpIjoiMGE4ZjVmZTktZmM5ZC00Zjg4LWJkYzEtZWI0MDQ5OTA5YTVkIiwiZXhwIjoxNjE5Nzg0MTEzLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo0MjAwIn0.vcSzPsxtCkOieBXE9d44xQngw0cYP077MapMjyrtvYk';
    const reqheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<IWeather[]>('http://localhost:5000/WeatherForecast', {
      headers: reqheaders,
    });
  }
}
