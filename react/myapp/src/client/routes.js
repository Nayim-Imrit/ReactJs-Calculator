import React from "react";
import {Route, IndexRoute, Redirect} from "react-router";
import AppContainer from "./components/app";
import Calc from "./components/calc";
import Dual from "./components/dual";

export default function () {
	return (
		<Route path="/" component={AppContainer}>
			<IndexRoute components={Calc} />
			<Route path = "dual/:dualId" components={Dual}/>
			<Redirect from="*" to="/" />
		</Route>
	);
}