import React from "react";
import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Weather from "@/components/Weather";
import { AiOutlineSearch } from "react-icons/ai";
import backgroundMain from "../public/images/backgroundMain.jpg";
import clearSky from "../public/images/clearSky.jpg";
import cloudy from "../public/images/cloudy.jpg";
import rainy from "../public/images/rainy.jpg";
import thunderstorm from "../public/images/thunderstorm.jpg";
import snowy from "../public/images/snowy.jpg";
import mist from "../public/images/mist.jpg";
import Footer from "@/components/Footer";

import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Home() {
	const [city, setCity] = useState("");
	const [weather, setWeather] = useState({});
	const [background, setBackground] = useState(backgroundMain);
	const [showError, setShowError] = useState("");
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_ID}&units=imperial`;

	const fetchWeather = async (e) => {
		try {
			e.preventDefault();
			const { data } = await axios.get(url);

			if (data && data.weather[0].main === "Clear") {
				setBackground(clearSky);
			} else if (data && data.weather[0].main === "Clouds") {
				setBackground(cloudy);
			} else if (
				data &&
				(data.weather[0].main === "Rain" || data.weather[0].main === "Drizzle")
			) {
				setBackground(rainy);
			} else if (data && data.weather[0].main === "Thunderstorm") {
				setBackground(thunderstorm);
			} else if (data && data.weather[0].main === "Snow") {
				setBackground(snowy);
			} else if (
				(data && data.weather[0].main === "Mist") ||
				data.weather[0].main === "Fog" ||
				data.weather[0].main === "Haze"
			) {
				setBackground(mist);
			} else {
				setBackground(backgroundMain);
			}
			setWeather(data);
			setCity("");
			setShowError("");
		} catch (error) {
			console.log(error);
			setWeather("");
			setCity("");
			setBackground(backgroundMain);
			setShowError("CITY NOT FOUND");
		}
	};
	return (
		<>
			<Head>
				<title>Weather NextJS</title>
			</Head>
			<div className="absolute top-0 left-0 right-0 bottom-0 z-[1] bg-black/40" />
			<Image
				src={background}
				layout="fill"
				className="object-cover"
				alt="background image"
			/>
			<div className="relative flex justify-between items-center max-w-[800px] w-full m-auto pt-20 text-white z-10">
				<form
					onSubmit={fetchWeather}
					className="flex justify-between items-center w-full m-auto bg-transparent border border-gray-300 text-white rounded-2xl"
				>
					<input
						type="text"
						placeholder="Weather in your city"
						value={city}
						onChange={(e) => setCity(e.target.value)}
						className="flex justify-between items-center bg-transparent border-none text-white focus:outline-none text-2xl p-3"
					/>
					<button onClick={fetchWeather}>
						<AiOutlineSearch size={30} />
					</button>
				</form>
			</div>

			{weather ? (
				<div className="relative flex justify-between items-center max-w-[800px] w-full m-auto pt-4 text-white z-10">
					<Weather weather={weather} />
				</div>
			) : null}
			{showError ? (
				<div className="relative flex justify-between items-center max-w-[800px] w-full m-auto pt-4 text-red-600 z-10">
					<p className="bg-black/20 relative flex w-full m-auto justify-around text-center backdrop-blur-sm rounded-2xl min-[240px]:flex-col sm:flex-row">
						{showError}
					</p>
				</div>
			) : null}
			<footer>
				<div className="bg-black/40 z-10 text-gray-500 fixed bottom-0 flex w-full m-auto justify-around backdrop-blur-sm text-center min-[240px]:flex-col sm:flex-row">
					<Footer />
				</div>
			</footer>
		</>
	);
}
