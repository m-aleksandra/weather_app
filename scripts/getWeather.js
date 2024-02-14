export const fetchData = async (city) => {
  try {
    const geoApiUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
    const response = await fetch(geoApiUrl);
    const coords = await response.json();
    const lat = coords.results["0"]["latitude"];
    const long = coords.results["0"]["longitude"];
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relativehumidity_2m,precipitation,weathercode,windspeed_10m&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,precipitation_sum,windspeed_10m_max&timezone=auto&forecast_days=14`;
    const responseSec = await fetch(apiUrl);
    return await responseSec.json();
  } catch (e) {
    console.log(`An error occurred ${e}.`);
  }
};
