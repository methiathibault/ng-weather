import { Component, inject, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { City } from "../city";
import { CITYLIST } from "../city-mock";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
    standalone: true,
    selector: 'app-weather',
    imports: [RouterModule],
    templateUrl: './weather.component.html',
})

export class WeatherComponent implements OnInit {
    city: City = {} as City;
    cityList: City[] = [];
    cityForm: FormGroup = {} as FormGroup;

    router = inject(Router);
    formBuilder = inject(FormBuilder);
    http = inject(HttpClient);

    constructor() {}

    ngOnInit(): void {
        this.cityList = CITYLIST;
        this.cityForm = this.formBuilder.group({
            city: ['', Validators.required],
        });
    }


}