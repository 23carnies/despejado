const baseUrl = "http://api.openweathermap.org/data/2.5/weather"

export function getByCityCountry(formData) {
    return fetch(`${baseUrl}?q=${formData.city},${formData.country}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
    .then(res => res.json())
}