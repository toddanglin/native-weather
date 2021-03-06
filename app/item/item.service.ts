import { Injectable } from "@angular/core";

import { Forecast } from "./item";

@Injectable()
export class ForecastService {
    private initialWeatherForecast = [{
        key: '2459115',
        label: 'New York, NY',
        created: '2016-07-22T01:00:00Z',
        channel: {
          astronomy: {
            sunrise: "5:43 am",
            sunset: "8:21 pm"
          },
          item: {
            condition: {
              text: "Windy",
              date: "Thu, 21 Jul 2016 09:00 PM EDT",
              temp: 56,
              code: 24
            },
            forecast: [
              {code: 44, high: 86, low: 70},
              {code: 44, high: 94, low: 73},
              {code: 4, high: 95, low: 78},
              {code: 24, high: 75, low: 89},
              {code: 24, high: 89, low: 77},
              {code: 44, high: 92, low: 79},
              {code: 44, high: 89, low: 77}
            ]
          },
          atmosphere: {
            humidity: 56
          },
          wind: {
            speed: 25,
            direction: 195
          }
        }
      }];

    getForecasts(): any {
        return this.initialWeatherForecast;
    }
}
