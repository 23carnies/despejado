const baseUrl = "http://api.openweathermap.org/data/2.5/weather"

export function getByCityCountry(formData) {
    return fetch(`${baseUrl}?q=${formData.city},${formData.country}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
    .then(res => res.json())
}

export function porCiudadYPaís(formData) {
    return fetch(`${baseUrl}?q=${formData.ciudad},${formData.país}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
    .then(res => res.json())
}