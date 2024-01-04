import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AirtableResponse, ToDoItem } from '../interfaces/airtable.interface';
import {
  ForecastResponse,
  WeatherResponse,
} from '../interfaces/dashboard.interface';
import { expenses } from '../interfaces/expenses';
import { Holiday, Holidays } from '../interfaces/holidays';

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

  getDaysUntilPaycheck(): number {
    const dayMultiplier = 24 * 3600 * 1000;
    const weekMultiplier = dayMultiplier * 7;
    const today = new Date()
    today.setDate(today.getDate() + ((5 + (7 - today.getDay())) % 7));
    // If today
    if (today.getDate() === new Date().getDate()) {
        today.setDate(today.getDate() + 7)
    }
    // Make sure its an odd week
    if (Math.floor(today.getTime() / weekMultiplier) % 2 === 0) {
      today.setDate(today.getDate() + 7);
    }
    return this.getDaysUntil(today);
  }

  getDaysUntil(date: Date): number {
    const diff = date.getTime() - new Date().getTime()
    return Math.ceil(diff / (1000 * 3600 * 24))
  }

  getNextDue() {
    const daysTillPayckeck = this.getDaysUntilPaycheck()
    return expenses.filter(e => {
      const today = new Date()
      let daysUntil = 0
      if (today.getDate() < e.dom) {
        daysUntil = this.getDaysUntil(new Date(today.getFullYear(), today.getMonth(), e.dom))
      }
      else {
        daysUntil = this.getDaysUntil(new Date(today.getFullYear(), today.getMonth() + 1, e.dom))
      }
      return daysTillPayckeck >= daysUntil
    }).map(e => {
      const today = new Date()
      let daysUntil = 0
      if (today.getDate() < e.dom) {
        daysUntil = this.getDaysUntil(new Date(today.getFullYear(), today.getMonth(), e.dom))
      }
      else {
        daysUntil = this.getDaysUntil(new Date(today.getFullYear(), today.getMonth() + 1, e.dom))
      }
      return {
        title: e.title,
        amt: e.amnt,
        daysUntil
      }
    })
  }

  getNextHoliday(): Holiday {
    const next = Holidays.reduce((recent, current) => {
      let daysUntil = this.getDaysUntil(new Date(current.date + '/' + (new Date().getFullYear())))
      if (daysUntil < 0) {
        daysUntil = this.getDaysUntil(new Date(current.date + '/' + (new Date().getFullYear() + 1)))
      }
      let recentDaysUntil = this.getDaysUntil(new Date(recent.date + '/' + (new Date().getFullYear())))
      if (recentDaysUntil < 0) {
        recentDaysUntil = this.getDaysUntil(new Date(recent.date + '/' + (new Date().getFullYear() + 1)))
      }
      if (daysUntil < recentDaysUntil) {
        current.daysUntil = daysUntil
        return current
      }
      recent.daysUntil = recentDaysUntil
      return recent
    })
    return next
  }
}
