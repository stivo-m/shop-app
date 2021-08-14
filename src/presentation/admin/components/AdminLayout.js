import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Shops from "../pages/Shops";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},

	drawerContainer: {
		overflow: "auto",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

function AdminLayout() {
	const classes = useStyles();
	let match = useRouteMatch();
	console.log(match.path);

	return (
		<div>
			<h1>admin layout</h1>
			{/* top bar */}
			<TopBar />
			{/* side bar */}
			<Sidebar />
			{/* rendered pages based on the router */}
			<main className={classes.content}>
				<Switch>
					<Route path='/'>
						<Dashboard />
					</Route>

					<Route path='/admin/shops'>
						<Shops />
					</Route>
				</Switch>
			</main>
			{/* footer */}
		</div>
	);
}

export default AdminLayout;
