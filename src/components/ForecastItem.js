import React, { useState } from 'react'

export default function ForecastItem(props) {
    //eslint-disable-next-line
    const [hourArray, setHourArray] = useState(props.hourArray);
    const airqualityObject = hourArray.air_quality;
    const airindex = airqualityObject['us-epa-index'];
    return (

        <div className="forecastItem min-h-[17vh] p-[6px] shadow-xl bg-[#e4e4ed] flex ">
            <div className="forecastLeft w-[40%] pl-2">
                <div className="forecastTime font-medium text-[#393535]"> Time: {hourArray.time.slice(11, 16)}</div>
                <div className="forecastTemp mt-2 text-xl font-semibold flex"> {props.tempUnit==="celsius" ? `${hourArray.temp_c} °C` :`${hourArray.temp_f} °F`}</div>
                <div className="forecastCondition mt-1">
                    {hourArray.condition.text}
                </div>
            </div>
            <div className="forecastRight w-[60%] flex flex-col">
                <div className="forecastAir font-medium text-[#29293f]">Air Index: {airindex}</div>
                <div className="forecastWind font-medium text-[#29293f]">Wind: {hourArray.wind_mph} mph {hourArray.wind_degree}° {hourArray.wind_dir}</div>
                <div className="forecastHumidity font-medium text-[#29293f]">Humidity: {hourArray.humidity} %</div>
                <div className="forecastVisibility font-medium text-[#29293f]">Visibility: {hourArray.vis_km} km</div>
            </div>
        </div>

    )
}
