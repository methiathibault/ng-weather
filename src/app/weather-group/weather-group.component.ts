import { Component, OnInit } from "@angular/core";
import { CITYLIST } from "../city-mock";

@Component({
    selector: 'app-weather-group',
    templateUrl: './weather-group.component.html',
})

export class WeatherGroupComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        console.log(CITYLIST);
    }
}