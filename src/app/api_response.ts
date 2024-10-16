export interface API {
    coord: Coordonate,
    weather: Weather[],
    base: string,
    main: Main,
    visibility: number,
    wind: Wind,
    clouds: Clouds,
    dt: number,
    sys: Sys,
    timezone: number,
    id: number,
    name: string,
    cod: number
}

interface Weather {
    id: number,
    main: string,
    description: string,
    icon: string
}

interface Main {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    sea_level: number,
    grnd_level: number
}

interface Wind {
    speed: number,
    deg: number,
    gust: number
}

interface Clouds {
    all: number
}

interface Sys {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
}

interface Coordonate {
    lon: number,
    lat: number,
}

export interface Prevision {
    cod: string,
    message: number,
    cnt: number,
    list: List[],
    city: City
}

export interface List {
    dt: number,
    main: Main,
    weather: Weather[],
    clouds: Clouds,
    wind: Wind,
    visibility: number,
    pop: number,
    sys: Sys,
    dt_txt: string
}

interface City {
    id: number,
    name: string,
    coord: Coordonate,
    country: string,
    population: number,
    timezone: number,
    sunrise: number,
    sunset: number
}