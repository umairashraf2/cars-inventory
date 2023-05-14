import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Dashboard", "Signin", "Signup"];

export const Navbar = function (props: Props) {
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar component="nav">
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{
							flexGrow: 1,
							color: "#fff"
						}}
					>
						<Link
							to="/"
							style={{ textDecoration: "none", color: "#fff" }}
						>
							Car Inventory
						</Link>
					</Typography>
					<Box>
						{navItems.map((item) => (
							<Link
								to={"/" + item}     
								style={{
									textDecoration: "none",
									color: "#fff",
									margin: "1rem",
								}}
								key={item}
							>
								{item}
							</Link>
						))}
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
