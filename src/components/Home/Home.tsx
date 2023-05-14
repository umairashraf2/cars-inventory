// import React from 'react';
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import carImage from "../../assets/images/sample_car.jpg";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar";

interface Props {
	title: string;
}



const Main = styled("main")({
	backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${carImage})`,
	width: "100%",
	height: "100%",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center",
	position: "absolute",
});

const MainText = styled("div")({
	textAlign: "center",
	position: "relative",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	color: "white",
});

export const Home = (props: Props) => {
	//where any functionality

	return (
		<>
			<Navbar />
			<Main>
				<MainText>
					<h1>{props.title}</h1>
					<Button
						color="primary"
						variant="contained"
						component={Link}
						to="/dashboard"
					>
						See The Cars
					</Button>
				</MainText>
			</Main>
			
		</>
	);
};
