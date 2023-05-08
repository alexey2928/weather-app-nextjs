import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
	return (
		<div className="grid justify-center text-center items-center z-10">
			<div className="flex justify-center text-center items-center space-x-3">
				<div>
					<p>Aliaksei Kalupaila</p>{" "}
				</div>
				<div className="flex space-x-1">
					<a href="https://www.linkedin.com/in/akalupaila/">
						<AiFillLinkedin />
					</a>
					<a href="https://www.github.com/alexey2928">
						<AiFillGithub />
					</a>
				</div>
			</div>
			<div className="flex justify-center text-center items-center">
				<p>© 2023 All Rights Reserved. </p>
			</div>
		</div>
	);
};
export default Footer;
