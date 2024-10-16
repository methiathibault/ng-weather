import { Routes } from '@angular/router';
import { WeatherGroupComponent } from './weather-group/weather-group.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';

export const routes: Routes = [
    {path: 'weather-group', component: WeatherGroupComponent},
    {path: 'weather', component: WeatherComponent},
    {path: 'weather/:city', component: WeatherDetailComponent},
    {path: '', redirectTo: 'weather', pathMatch: 'full'},
];
