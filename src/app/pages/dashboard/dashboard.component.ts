import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  AirtableResponse,
  Recipe,
  ToDoItem,
} from 'src/app/interfaces/airtable.interface';
import { ForecastResponse } from 'src/app/interfaces/dashboard.interface';
import { Holiday } from 'src/app/interfaces/holidays';
import { AirtableService } from 'src/app/services/airtable.service';
import { DashboardService } from 'src/app/services/dashboard.service';

interface ForecastItem {
  date: Date;
  temp: number;
  icon: string;
}

@Component({
  selector: 'jt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  currentTime = new Date();
  toDoList: ToDoItem[] = [];
  currentWeather = 75;
  weatherMin = 0;
  weatherMax = 100;
  weatherDescription = '';
  weatherIcon = '';
  partyMode = false;
  upcomingToday: {
    time: Date;
    temp: number;
    icon?: string;
  }[] = [];
  upcomingWeek: {
    date: Date;
    min: number;
    max: number;
    icon?: string;
  }[] = [];
  nextDue: {
    title: string;
    amt: number;
    daysUntil: number;
  }[] = [];
  untilPaycheck = 0;
  owed = 0;

  nextHoliday: Holiday = {
    title: '',
    date: '',
    image: ''
  }

  searchValue = ''

  showRecipes = false;
  chosenRecipe: Recipe | undefined = undefined;

  recipes: Recipe[] = [];

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
    this.updateWeather();
    this.updateForecast();
    this.nextDue = this.dashboard.getNextDue();
    this.untilPaycheck = this.dashboard.getDaysUntilPaycheck();
    this.owed = Math.round(this.getMoneyOwed() * 100) / 100;
    this.nextHoliday = this.dashboard.getNextHoliday()
    this.getRecipes();
    this.airtable.getAllRecipes();
    setInterval(() => {
      this.updateWeather();
      this.updateForecast();
      this.nextDue = this.dashboard.getNextDue();
      this.untilPaycheck = this.dashboard.getDaysUntilPaycheck();
      this.owed = this.getMoneyOwed();
    }, 1800000);

    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'r') {
        e.preventDefault()
        e.stopPropagation()
        if (!this.partyMode) {
          this.showRecipes = !this.showRecipes
          if (this.showRecipes === false) {
            this.chosenRecipe = undefined
          }
        }
      }
      if (e.ctrlKey && e.key === 'p') {
        e.preventDefault()
        e.stopPropagation()
        if (!this.showRecipes) {
          this.partyMode = !this.partyMode
        }
      }
    })
  }

  constructor(
    private airtable: AirtableService,
    private dashboard: DashboardService
  ) {
    this.getTodoData();
  }

  togglePartyMode() {
    this.partyMode = !this.partyMode;
  }

  setShowRecipes(show: boolean) {
    this.showRecipes = show;
    this.chosenRecipe = undefined;
  }

  getTodoData() {
    this.airtable.getTodoList().subscribe((data) => {
      this.toDoList = this.airtable.mapAirtableToData<ToDoItem>(
        data as AirtableResponse<ToDoItem>
      );
    });
  }

  getRecipes() {
    this.airtable.getAllRecipes().subscribe((data) => {
      this.recipes = this.airtable.mapAirtableToData<Recipe>(
        data as AirtableResponse<Recipe>
      );
    });
  }

  chooseRecipe(r: Recipe) {
    r.Ingredients = this.markupToHtml(r.Ingredients);
    r.Recipe = this.markupToHtml(r.Recipe);
    this.chosenRecipe = r;
  }

  getFilteredRecipes(recipes: Recipe[]) {
    return recipes.filter(r => r.Name.toLowerCase().includes(this.searchValue.toLowerCase()))
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
      this.weatherIcon = `./assets/images/weather/${data.weather[0].icon.replace('n', 'd')}.svg`
      // this.dashboard.getImage(data.weather[0].icon).subscribe((data) => {
      //   this.weatherIcon = URL.createObjectURL(data);
      // });
    });
  }

  updateForecast() {
    this.dashboard.getForecast().subscribe((data) => {
      this.todayForecast(data);
      this.weekForecast(data);
    });
  }

  todayForecast(forecast: ForecastResponse) {
    forecast.list.slice(0, 5).map((f, i) => {
      this.upcomingToday[i] = {
        time: new Date(f.dt * 1000),
        temp: Math.round(f.main.temp),
        icon: `./assets/images/weather/${f.weather[0].icon.replace('n', 'd')}.svg`
      };
      // this.dashboard.getImage(f.weather[0].icon).subscribe((data) => {
      //   this.upcomingToday[i].icon = URL.createObjectURL(data);
      // });
    });
  }

  weekForecast(forecast: ForecastResponse) {
    const today = new Date().getDate();
    let days: ForecastItem[][] = [];
    forecast.list.forEach((f) => {
      const date = new Date(f.dt * 1000).getDate();
      if (date !== today) {
        const tempForecast = {
          date: new Date(f.dt * 1000),
          temp: Math.round(f.main.temp),
          icon: f.weather[0].icon,
        };
        if (days[date]) {
          days[date].push(tempForecast);
        } else {
          days[date] = [tempForecast];
        }
      }
    });
    days.forEach((d, i) => {
      const max = this.findMax(d);
      this.upcomingWeek[i - today - 1] = {
        date: d[0].date,
        min: this.findMin(d).temp,
        max: max.temp,
        icon: `./assets/images/weather/${max.icon.replace('n', 'd')}.svg`
      };
      // this.dashboard.getImage(max.icon).subscribe((data) => {
      //   this.upcomingWeek[i - today - 1].icon = URL.createObjectURL(data);
      // });
    });
  }

  findMax(arr: ForecastItem[]): ForecastItem {
    return arr.reduce((max, current) => {
      if (current.temp > max.temp) {
        return current;
      }
      return max;
    });
  }

  findMin(arr: ForecastItem[]): ForecastItem {
    return arr.reduce((min, current) => {
      if (current.temp < min.temp) {
        return current;
      }
      return min;
    });
  }

  getMoneyOwed() {
    return this.nextDue
      .map((n) => n.amt)
      .reduce((total, current) => {
        if (current > 0) {
          return total + current;
        }
        return total;
      }, 0);
  }

  getUnknownAmounts() {
    return this.nextDue
      .filter((n) => n.amt < 0)
      .map((n) => n.title)
      .join('and');
  }

  markupToHtml(input: string) {
    let temp = input;
    if (temp.charAt(0) === '-') {
      while (true) {
        const index = temp.indexOf('-');
        if (index < 0) {
          break;
        } else if (index === 0) {
          temp = temp.substring(1);
        } else {
          temp =
            temp.substring(0, index) + '</li><li>' + temp.substring(index + 1);
        }
      }
      temp = '<ul><li>' + temp + '</li></ul>';
    }

    if (temp.indexOf('1.') === 0) {
      let counter = 1;
      while (true) {
        const index = temp.indexOf(counter + '.');
        if (index < 0) {
          break;
        } else if (index === 0) {
          temp = temp.substring(2);
        } else {
          temp =
            temp.substring(0, index) + '</li><li>' + temp.substring(index + 2);
        }
        counter++;
      }
      temp = '<ol><li>' + temp + '</li></ol>';
    }

    let boldCounter = 0;
    while (true) {
      const index = temp.indexOf('**');
      if (index < 0) {
        break;
      } else if (boldCounter % 2 === 0) {
        temp = temp.substring(0, index) + '<b>' + temp.substring(index + 2);
      } else if (boldCounter % 2 === 1) {
        temp = temp.substring(0, index) + '</b>' + temp.substring(index + 2);
      }
      boldCounter++;
    }

    return temp;
  }
}
