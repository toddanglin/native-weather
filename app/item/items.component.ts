import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';


import { Forecast } from "./item";
import { ForecastService } from "./item.service";

@Pipe({
    name: "weatherIcon"
})
export class WeatherIconPipe implements PipeTransform {
    transform(value: number): any {
        let weatherCode = value;
        switch (weatherCode) {
            case 25: // cold
            case 32: // sunny
            case 33: // fair (night)
            case 34: // fair (day)
            case 36: // hot
            case 3200: // not available
                return 'ion-ios-sunny-outline';
            case 0: // tornado
            case 1: // tropical storm
            case 2: // hurricane
            case 6: // mixed rain and sleet
            case 8: // freezing drizzle
            case 9: // drizzle
            case 10: // freezing rain
            case 11: // showers
            case 12: // showers
            case 17: // hail
            case 35: // mixed rain and hail
            case 40: // scattered showers
                return 'ion-ios-rainy-outline';
            case 3: // severe thunderstorms
            case 4: // thunderstorms
            case 37: // isolated thunderstorms
            case 38: // scattered thunderstorms
            case 39: // scattered thunderstorms (not a typo)
            case 45: // thundershowers
            case 47: // isolated thundershowers
                return 'ion-ios-rainy-outline';
            case 5: // mixed rain and snow
            case 7: // mixed snow and sleet
            case 13: // snow flurries
            case 14: // light snow showers
            case 16: // snow
            case 18: // sleet
            case 41: // heavy snow
            case 42: // scattered snow showers
            case 43: // heavy snow
            case 46: // snow showers
                return 'ion-ios-snowy';
            case 15: // blowing snow
            case 19: // dust
            case 20: // foggy
            case 21: // haze
            case 22: // smoky
                return 'ion-ios-cloudy-outline';
            case 24: // windy
            case 23: // blustery
                return 'ion-ios-shuffle'; // TODO Need better icon
            case 26: // cloudy
            case 27: // mostly cloudy (night)
            case 28: // mostly cloudy (day)
            case 31: // clear (night)
                return 'ion-ios-cloudy-outline';
            case 29: // partly cloudy (night)
            case 30: // partly cloudy (day)
            case 44: // partly cloudy
                return 'ion-ios-partlysunny-outline';
        }
    }
}

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    forecasts: Forecast[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ForecastService, private fonticon: TNSFontIconService) { }

    ngOnInit(): void {
        this.forecasts = this.itemService.getForecasts();
    }

    addCity(args): void {
        alert("TODO: Add city pop-up");
    }
}