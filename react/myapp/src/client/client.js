import "./client.scss";
import React from "react";
import ReactDOM from "react-dom";
import {Router, browserHistory as history} from "react-router";

//import AppContainer from "./components/app";
//Render
function main() {
	const routes = require("./routes").default();
	ReactDOM.render(
		<Router history = {history}>
			{routes}
		</Router>, 
		document.getElementById("mount"));
}

//misc
if (module.hot) {
	module.hot.accept("./routes", () => {
		main();
	});
}

//run
main();