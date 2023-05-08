import React from "react";
import Image from "next/image";

const Weather = ({ weather }) => {
	return weather.main ? (
		<div className="bg-black/20 relative flex w-full m-auto justify-around text-center backdrop-blur-sm rounded-2xl min-[240px]:flex-col sm:flex-row">
			<div className="p-10 flex justify-center items-center text-center">
				<div>
					<Image
						src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
						alt="icon"
						width="100"
						height="100"
					/>
				</div>
				<div className="flex">
					<p className="text-6xl">{weather.main.temp.toFixed(0)}</p>
					<p className="text-4xl">&#8457;</p>
				</div>
			</div>
			<div className="p-10">
				<p className="text-3xl">
					{weather.name}, {weather.sys.country}
				</p>

				<div className="flex justify-between text-center">
					<div className="p-4">
						<p>Feels like</p>
						<p>{weather.main.feels_like.toFixed(0)}&#8457;</p>
					</div>
					<div className="p-4">
						<p>Humidity</p>
						<p>{weather.main.humidity}%</p>
					</div>
					<div className="p-4">
						<p>Wind</p>
						<p>{weather.wind.speed.toFixed(0)}MPH</p>
					</div>
				</div>
				<p className="text-2xl">{weather.weather[0].description}</p>
			</div>
		</div>
	) : null;
};
export default Weather;
