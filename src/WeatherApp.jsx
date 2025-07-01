import { useState } from "react"
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    let [weatherInfo, SetWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 36.81,
        humidity: 64,
        temp: 31.39,
        tempMax: 31.39,
        tempMin: 31.39,
        weather: "overcast clouds",
    })

    let handleUpdate = (updateInfo) => {
        SetWeatherInfo(updateInfo)
    }
    return (
        <div>
            <SearchBox updateInfo={handleUpdate} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}
