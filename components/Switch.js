import React from "react";
import { useState } from "react";
const Switch = ({ units }) => {
	const [toggle, setToggle] = useState(true);
	toggle ? units("imperial") : units("metric");
	const toggleClass = " transform translate-x-5";
	return (
		<>
			<div
				className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-white rounded-full p-1 cursor-pointer"
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				{/* Switch */}
				<div
					className={
						"bg-black/70 md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
						(toggle ? null : toggleClass)
					}
				></div>
			</div>
		</>
	);
};
export default Switch;
