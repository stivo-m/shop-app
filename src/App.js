import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminLayout from "./presentation/admin/components/AdminLayout";
import ShopLayout from "./presentation/shop/components/ShopLayout";

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/'>
					<AdminLayout />
				</Route>
				<Route path='/shop'>
					<ShopLayout />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
