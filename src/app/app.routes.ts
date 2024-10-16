import { Routes } from '@angular/router';
import { WeatherGroupComponent } from './weather-group/weather-group.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
    {path: 'weather-group', component: WeatherGroupComponent},
    {path: 'weather', component: WeatherComponent},
    {path: '', redirectTo: 'weather-group', pathMatch: 'full'},
];
