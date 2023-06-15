import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AirtableResponse, ToDoItem } from '../interfaces/airtable.interface';
import {
  ForecastResponse,
  WeatherResponse,
} from '../interfaces/dashboard.interface';

@Injectable()
export class DashboardService {
  options = {
    params: {
      lat: '27.9602713',
      lon: '-82.4429804',
      appid: '8e727017598d4be85221cb7260268810',
      units: 'imperial',
    },
  };

  constructor(private http: HttpClient) {}

  getWeatherNow() {
    return this.http.get<WeatherResponse>(environment.weather_url + 'weather', this.options);
  }

  getForecast() {
    return this.http.get<ForecastResponse>(
      environment.weather_url + 'forecast',
      this.options
    );
  }

  getImage(icon: string) {
    return this.http.get(environment.weather_icon_url + icon + '@2x.png', {responseType: 'blob'});
  }
}
