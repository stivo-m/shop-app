import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
}));
function TopBar() {
	const classes = useStyles();
	return (
		<AppBar position='fixed' className={classes.appBar}>
			<Toolbar>
				<Typography variant='h6' noWrap>
					Clipped drawer
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default TopBar;
