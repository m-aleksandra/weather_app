class DataParser {
  getNext24h(data) {
    const hours = new Date().getHours();
    return data.slice(hours, hours + 24);
  }

  getTime(time) {
    return time.map((item) => item.split("T")[1]);
  }

  getDays(dates) {
    return dates.map((dateStr) => {
      const dateObj = new Date(dateStr);
      const options = { weekday: "long" };
      return new Intl.DateTimeFormat("en-US", options).format(dateObj);
    });
  }

  round(data) {
    return data.map((x) => Math.floor(x));
  }
}

export default class Weather {
  constructor(data) {
    this.data = data;
  }

  parseHourlyData() {
    const p = new DataParser();
    const hourly = this.data.hourly;
    const hourlyTemp = p.round(p.getNext24h(hourly.temperature_2m));
    const hourlyPrecip = p.round(
      p.getNext24h(hourly.precipitation_probability),
    );
    const hourlyHumid = p.round(p.getNext24h(hourly.relativehumidity_2m));
    const hourlyWind = p.round(p.getNext24h(hourly.windspeed_10m));
    const weathercode = p.getNext24h(hourly.weathercode);
    const hours = p.getTime(p.getNext24h(hourly.time));
    const days = p.getDays(p.getNext24h(hourly.time));

    return {
      hourlyTemp,
      hourlyPrecip,
      hourlyHumid,
      hourlyWind,
      weathercode,
      hours,
      days,
    };
  }

  parseDailyData() {
    const p = new DataParser();
    const daily = this.data.daily;
    const dailyPrecip = p.round(daily.precipitation_sum);
    const dailyTemp = p.round(daily.temperature_2m_max);
    const dailyWind = p.round(daily.windspeed_10m_max);
    const weathercode = daily.weathercode;
    const dates = daily.time;
    const days = p.getDays(dates);

    return {
      dailyPrecip,
      dailyTemp,
      dailyWind,
      weathercode,
      dates,
      days,
    };
  }
}
