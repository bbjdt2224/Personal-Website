export interface WeatherResponse {
    coord: {
        lon: number
        lat: number
    },
    weather: Weather[]
    base: string
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
    }
    visibility: number
    wind: {
        speed: number
        deg: number
    }
    dt: number
    sys: {
        type: number
        id: number
        country: string
        sunrise: number
        sunset: number
    }
    timezone: number
    id: number
    name: string
    cod: number
}

export interface ForecastResponse {
    cod: string
    message: number
    cnt: number
    list: WeatherTimeFrame[]
}

interface WeatherTimeFrame {
    dt: number
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        sea_level: number
        grnd_level: number
        humidity: number
        temp_kf: number
    }
    weather: Weather[],
    clouds?: {
        all: number
    },
    wind?: {
        speed: number
        deg: number
        gust: number
    }
    visibility: number
    pop: number
    sys: {
        pod: string
    }
    dt_txt: string
}

interface Weather {
    id: number
    main: string
    description: string
    icon: string
}