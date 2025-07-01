import { useState } from "react"

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let API_URL = // openweathermap api;
    let API_KEY = // openweathermap api key;

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            console.log(city);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setCity("");
            let info = await getWeatherInfo();
            setError(false);
            updateInfo(info);
        } catch (err) {
            setError(true);
        }
    }
    return (
        <div className="text-center">
            <h3 className="text-2xl p-2">Search For Weather</h3>
            <form onSubmit={handleSubmit} className="flex gap-2 justify-center">
                <label className="input input-bordered flex items-center gap-2 w-[40%]">
                    <input type="text" className="grow" onChange={handleChange} value={city} placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
                <button className="btn btn-outline btn-success">Search</button>
            </form>
            {error && <p className="text-red-700 p-1">No Such Place Exist!</p>}
        </div>
    );
}