import ThermostatIcon from '@mui/icons-material/Thermostat';
import Rain_img from "./assets/istockphoto-2000467324-612x612.jpg";
import Cold_img from "./assets/istockphoto-2185679328-612x612.jpg";
import Hot_img from "./assets/istockphoto-2150532645-612x612.jpg";

export default function InfoBox({ info }) {
    let HOT_URL = "https://images.unsplash.com/photo-1525490829609-d166ddb58678?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let COLD_URL = "https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    let RAIN_URL = "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return (
        <div className="flex flex-col justify-center items-center gap-4 p-2 mt-4">
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={
                            info.humidity > 80 ?
                                RAIN_URL :
                                info.temp > 15 ? HOT_URL :
                                 COLD_URL
                        }
                        alt="loading" />
                </figure>
            </div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{info.city}</h2>
                    <p>The weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</p>
                    <div className="flex justify-evenly items-center">
                        <div>
                            <img className="w-20" src={
                            info.humidity > 80 ?
                                Rain_img :
                                info.temp > 15 ? Hot_img :
                                 Cold_img
                        } alt="" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <p>Temperature :<ThermostatIcon />{info.temp}&deg;C</p>
                            <p>Humidity : {info.humidity}</p>
                            <p>Min Temperature :<ThermostatIcon />{info.tempMin}&deg;C</p>
                            <p>Max Temperature :<ThermostatIcon />{info.tempMax}&deg;C</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}