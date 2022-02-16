interface IDailyWeather {
    time: string[];
    weathercode: string[];
    temperature_2m_min: string[];
    temperature_2m_max: string[];
}

export class DailyWeatherModel implements IDailyWeather {
    time: string[] = [];
    weathercode: string[] = [];
    temperature_2m_min: string[] = [];
    temperature_2m_max: string[] = [];

    constructor(d?: IDailyWeather) {
        if (d) {
            this.time = d.time;
            this.weathercode = d.weathercode;
            this.temperature_2m_min = d.temperature_2m_min;
            this.temperature_2m_max = d.temperature_2m_max;
        }
    }
}
