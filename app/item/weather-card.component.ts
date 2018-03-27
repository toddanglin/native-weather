import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "weather-card",
    template: `
    <StackLayout>
    <GridLayout rows="auto,auto,*" columns="*,*,*" class="m-20 p-20" style="background-color:#DDD;">
        <StackLayout colSpan="3" col="0" row="0">
            <Label [text]="forecast.label" class="h1"></Label>
            <Label [text]="forecast.channel.item.condition.date"></Label>
            <Label [text]="forecast.channel.item.condition.text"></Label>
        </StackLayout>
        <Label [text]=" forecast.channel.item.condition.code | weatherIcon | fonticon" class="ion text-center" style="font-size:78;" col="0" row="1"></Label>
        <Label text="{{ forecast.channel.item.condition.temp }}º" class="h1" style="font-size:76;" col="1" row="1"></Label>
        <StackLayout col="2" row="1">
            <Label text="Humidity: {{ forecast.channel.atmosphere.humidity }}%"></Label>
            <Label text="Wind: {{ forecast.channel.wind.speed }} mph {{ forecast.channel.wind.direction }}º"></Label>
            <Label text="Sunrise: {{ forecast.channel.astronomy.sunrise }}"></Label>
            <Label text="Sunset: {{ forecast.channel.astronomy.sunset }}"></Label>
        </StackLayout>
        <StackLayout colSpan="3" col="0" row="2" class="m-t-20 text-center">
            <ScrollView orientation="horizontal">
                <StackLayout orientation="horizontal" style="horizontal-align:center;">
                    <GridLayout rows="*,*,*,*" *ngFor="let day of forecast.channel.item.forecast"
                        class="m-r-20">
                        <Label text="Day"></Label>
                        <Label [text]=" day.code | weatherIcon | fonticon" class="ion h1" row="1"></Label>
                        <Label text="{{ day.high }}º" row="2"></Label>
                        <Label text="{{ day.low }}º" row="3" class="text-muted"></Label>
                    </GridLayout>
                </StackLayout>
            </ScrollView>
        </StackLayout>
    </GridLayout>
</StackLayout>
    `
})
export class WeatherCardComponent {
    @Input() forecast: any = {};
}
