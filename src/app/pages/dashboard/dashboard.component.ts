import { Component, OnInit } from '@angular/core';
import {
  AirtableResponse,
  ToDoItem,
} from 'src/app/interfaces/airtable.interface';
import { ForecastResponse } from 'src/app/interfaces/dashboard.interface';
import { AirtableService } from 'src/app/services/airtable.service';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'jt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  currentTime = new Date();
  toDoList: ToDoItem[] = [];
  currentWeather = 75;
  weatherMin = 0;
  weatherMax = 100;
  weatherDescription = '';
  weatherIcon = '';
  upcomingToday: {
    time: Date
    temp: number
    icon?: string
  }[] = []
  upcomingWeek: {
    date: Date
    temp: number
    icon?: string
  }[] = []

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
    this.updateWeather();
    this.updateForecast();
    setInterval(() => {
      this.updateWeather();
      this.updateForecast
    }, 1800000);
  }

  constructor(
    private airtable: AirtableService,
    private dashboard: DashboardService
  ) {
    this.getTodoData();
  }

  getTodoData() {
    this.airtable.getTodoList().subscribe((data) => {
      this.toDoList = this.airtable.mapAirtableToData<ToDoItem>(
        data as AirtableResponse<ToDoItem>
      );
    });
  }

  updateWeather() {
    this.dashboard.getWeatherNow().subscribe((data) => {
      this.currentWeather = Math.round(data.main.temp);
      this.weatherMax = Math.round(data.main.temp_max);
      this.weatherMin = Math.round(data.main.temp_min);
      this.weatherDescription = data.weather[0].description
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
      this.dashboard.getImage(data.weather[0].icon).subscribe((data) => {
        this.weatherIcon = URL.createObjectURL(data);
      });
    });
  }

  updateForecast() {
    this.dashboard.getForecast().subscribe((data) => {
      this.todayForecast(data)
      this.weekForecast(data)
      console.log(this.upcomingToday, this.upcomingWeek)
    })
  }

  todayForecast(forecast: ForecastResponse) {
    forecast.list.slice(0, 5).map((f, i) => {
      console.log(f.dt, new Date(f.dt * 1000))
      this.upcomingToday[i] = {
        time: new Date(f.dt * 1000),
        temp: Math.round(f.main.temp)
      }
      this.dashboard.getImage(f.weather[0].icon).subscribe((data) => {
        this.upcomingToday[i].icon = URL.createObjectURL(data);

      });
    })
  }

  weekForecast(forecast: ForecastResponse) {
    let lastUsed = new Date().getDate()
    forecast.list.filter(f => {
      const date = new Date(f.dt * 1000).getDate()
      if (date > lastUsed) {
        lastUsed = date
        return true
      }
      return false
    }).map((f, i) => {
      this.upcomingWeek[i] = {
        date: new Date(f.dt * 1000),
        temp: Math.round(f.main.temp)
      }
      this.dashboard.getImage(f.weather[0].icon).subscribe((data) => {
        this.upcomingWeek[i].icon = URL.createObjectURL(data);
      });
    })
  }

}
