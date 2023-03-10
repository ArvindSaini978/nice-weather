import React, { useState } from 'react'

export default function TomorrowForecast(props) {
    //eslint-disable-next-line
    const [hourArray, setHourArray] = useState(props.hourArray);
    const airqualityObject = hourArray.air_quality;
    const airindex = airqualityObject['us-epa-index'];
    return (

        <div className="TomorrowForecastItem w-[12pc] 2xsm:w-[15pc] p-[10px] shadow-xl bg-[#e4e4ed] flex flex-col">
            <div className="TomorrowForecastTime text-sm 2xsm:text-base font-medium text-[#393535]"> Time: {hourArray.time.slice(11, 16)}</div>
            <div className="TomorrowForecastTemp mt-2 text-xl font-semibold flex"> {props.tempUnit === "celsius" ? `${hourArray.temp_c} °C` : `${hourArray.temp_f} °F`}</div>
            <div className="TomorrowForecastCondition mt-1">
                {hourArray.condition.text}
            </div>
            <div className="TomorrowForecastAir text-sm 2xsm:text-base font-medium text-[#29293f]">Air Index: {airindex}</div>
            <div className="TomorrowForecastWind text-sm 2xsm:text-base font-medium text-[#29293f]">Wind: {hourArray.wind_mph} mph {hourArray.wind_degree}° {hourArray.wind_dir}</div>
            <div className="TomorrowForecastHumidity text-sm 2xsm:text-base font-medium text-[#29293f]">Humidity: {hourArray.humidity} %</div>
            <div className="TomorrowForecastVisibility text-sm 2xsm:text-base font-medium text-[#29293f]">Visibility: {hourArray.vis_km} km</div>
        </div>

    )
}
