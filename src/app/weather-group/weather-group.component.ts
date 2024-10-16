import { Component, OnInit , inject } from "@angular/core";
import { CITYLIST } from "../city-mock";
import { City } from "../city";
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-weather-group',
    templateUrl: './weather-group.component.html',
})

export class WeatherGroupComponent implements OnInit {
    constructor() {}
    id: number= 3
    cityList: City[] = CITYLIST
    actualCityList: City[] = []
    data:any

    private http = inject(HttpClient);

    ngOnInit() {
        console.log(CITYLIST);
        this.getWeather(this.id)
        
    }


    getWeather(id: number) {
        this.id = id
        for (let i = this.id*50; i < (this.id*50)+50; i++) {
            this.actualCityList.push(this.cityList[i]);
            this.apiCall(i)
        }
    }

    apiCall(id: number) {
        console.log("apiCall");
        this.http.get("https://jsonplaceholder.typicode.com/todos/" + id)
            .subscribe((data:any )=> {
                this.data = data
                console.table(data);
            });
        console.log(this.data);
    }

}