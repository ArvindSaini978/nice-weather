import React, { useState } from 'react'

export default function ForecastItem(props) {
    //eslint-disable-next-line
    const [hourArray, setHourArray] = useState(props.hourArray);
    return (

        <div className="forecastItem xlg:min-h-[120px] w-[12pc] 2xsm:w-[15pc] xlg:w-full p-[10px] xlg:p-[6px] shadow-xl bg-[#e4e4ed] flex flex-col xlg:flex-row">
            <div className="forecastLeft w-full xlg:w-[40%] xlg:pl-2">
                <div className="forecastTime text-sm 2xsm:text-base font-medium text-[#393535]"> Time: {hourArray.time.slice(11, 16)}</div>
                <div className="forecastTemp mt-2 text-xl font-semibold flex"> {props.tempUnit==="celsius" ? `${hourArray.temp_c} °C` :`${hourArray.temp_f} °F`}</div>
                <div className="forecastCondition mt-1">
                    {hourArray.condition.text}
                </div>
            </div>
            <div className="forecastRight w-full xlg:w-[60%] flex flex-col">
                <div className="forecastFeelslike text-sm 2xsm:text-base font-medium text-[#29293f]">Feels like: {props.tempUnit==="celsius" ? `${hourArray.feelslike_c} °C` :`${hourArray.feelslike_f} °F`}</div>
                <div className="forecastWind text-sm 2xsm:text-base font-medium text-[#29293f]">Wind: {hourArray.wind_mph} mph {hourArray.wind_degree}° {hourArray.wind_dir}</div>
                <div className="forecastHumidity text-sm 2xsm:text-base font-medium text-[#29293f]">Humidity: {hourArray.humidity} %</div>
                <div className="forecastVisibility text-sm 2xsm:text-base font-medium text-[#29293f]">Visibility: {hourArray.vis_km} km</div>
            </div>
        </div>

    )
}
