import React from "react";
import {
	Drawer,
	Toolbar,
	ListItem,
	ListItemIcon,
	ListItemText,
	List,
	makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Dashboard, Shop } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerContainer: {
		overflow: "auto",
	},
}));

function Sidebar() {
	const classes = useStyles();
	return (
		<Drawer
			className={classes.drawer}
			variant='permanent'
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<Toolbar />
			<div className={classes.drawerContainer}>
				<List>
					<Link to={`/admin`}>
						<ListItem button>
							<ListItemIcon>
								<Dashboard />
							</ListItemIcon>
							<ListItemText primary='Dashboard' />
						</ListItem>
					</Link>

					<Link to={`/admin/shops`}>
						<ListItem button>
							<ListItemIcon>
								<Shop />
							</ListItemIcon>
							<ListItemText primary='Shops' />
						</ListItem>
					</Link>
				</List>
			</div>
		</Drawer>
	);
}

export default Sidebar;
