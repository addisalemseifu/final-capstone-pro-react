import {rest} from 'msw'

export const handlers = [
    rest.get(`http://api.weatherapi.com/v1/forecast.json?key=5175c5cfe42a44b88ef104519233105&q=London&days=14`,(req, res, ctx)=> {
        return res(
            ctx.status(200),
            ctx.json({
        
                "location": {
                    "name": "London",
                    "region": "City of London, Greater London",
                    "country": "United Kingdom",
                    "lat": 51.52,
                    "lon": -0.11,
                    "tz_id": "Europe/London",
                    "localtime_epoch": 1690990406,
                    "localtime": "2023-08-02 16:33"
                },
                "current": {
                    "last_updated_epoch": 1690990200,
                    "last_updated": "2023-08-02 16:30",
                    "temp_c": 16.0,
                    "temp_f": 60.8,
                    "is_day": 1,
                    "condition": {
                        "text": "Light rain shower",
                        "icon": "//cdn.weatherapi.com/weather/64x64/day/353.png",
                        "code": 1240
                    },
                    "wind_mph": 2.5,
                    "wind_kph": 4.0,
                    "wind_degree": 290,
                    "wind_dir": "WNW",
                    "pressure_mb": 984.0,
                    "pressure_in": 29.06,
                    "precip_mm": 1.0,
                    "precip_in": 0.04,
                    "humidity": 94,
                    "cloud": 50,
                    "feelslike_c": 16.0,
                    "feelslike_f": 60.8,
                    "vis_km": 8.0,
                    "vis_miles": 4.0,
                    "uv": 4.0,
                    "gust_mph": 13.0,
                    "gust_kph": 20.9
                }
            })
        )
    })
]