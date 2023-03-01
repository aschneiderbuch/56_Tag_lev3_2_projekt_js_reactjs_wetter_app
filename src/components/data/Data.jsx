// Berlin
// https://api.openweathermap.org/data/2.5/weather?lat=52.52406171856656&lon=13.39998492042157&appid=d0ca0011f6859dd04d0de83562d4b663

const dataBerlin = {
    "coord": {
        "lon": 13.3971,
        "lat": 52.5238
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",         /* // ! das  */
            "icon": "01d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 280.79,             /* // ! das ! Vorsicht evtl F nicht Celsius  => :32 */ 
        "feels_like": 279.54,
        "temp_min": 279.29,
        "temp_max": 282.67,
        "pressure": 1014,
        "humidity": 41
    },
    "visibility": 10000,
    "wind": {                      
        "speed": 2.06,         /* // ! das mi/hr => km/   => * 1,60934  */
        "deg": 60
    },
    "clouds": {
        "all": 0
    },
    "dt": 1677677047,
    "sys": {
        "type": 2,
        "id": 2009543,
        "country": "DE",
        "sunrise": 1677650049,
        "sunset": 1677689033
    },
    "timezone": 3600,
    "id": 6545310,
    "name": "Mitte",
    "cod": 200
}

export default dataBerlin;