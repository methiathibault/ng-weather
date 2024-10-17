import { Routes } from '@angular/router';
import { WeatherGroupComponent } from './weather-group/weather-group.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { WeatherPrevisionComponent } from './weather-prevision/weather-prevision.component';

export const routes: Routes = [
    { path: 'weather-group', component: WeatherGroupComponent },
    { path: 'weather', component: WeatherComponent },
    { path: 'weather/:city', component: WeatherDetailComponent },
    { path: 'favorite', component: FavoriteComponent },
    { path: 'weather/:city/previsions', component: WeatherPrevisionComponent },
    { path: '', redirectTo: 'weather', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
