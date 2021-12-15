interface ICurrentWeather {
    time: string;
    windspeed: number;
    temperature: number;
    winddirection: number;
    weathercode: number;
}

export class CurrentWeatherModel implements ICurrentWeather{
    time = '';
    windspeed = 0;
    temperature = 0;
    winddirection = 0;
    weathercode = 0;
    
    constructor(d?: ICurrentWeather) {
        if (d) {
            this.time = d.time;
            this.windspeed = d.windspeed;
            this.temperature = d.temperature;
            this.winddirection = d.winddirection;
            this.weathercode = d.weathercode;
        }
    }
}