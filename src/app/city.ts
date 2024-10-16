export interface City {
    id:number,
    name:string,
    state:string,
    country:string,
    coord:Coordonate,
}

interface Coordonate {
    lon: number,
    lat: number,
}