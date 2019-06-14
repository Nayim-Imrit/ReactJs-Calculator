import express from "express";
import http from "http";
import {
	isDevelopment
} from "./settings";

//setup
const app = express();
const server = new http.Server(app);

//config
app.set("view engine", "pug"); //file to compile
app.use(express.static("public")); //serve that file in an http way

const useExtrenalStyles = !isDevelopment;
const scriptRoot = isDevelopment ?
	"http://localhost:8080/build" :
	"/build";

app.get("*", (req, res) => {
	//if anything does not match --> try using
	res.render("index", {
		useExtrenalStyles,
		scriptRoot
	});
});

//startup
const port = process.env.PORT || 3000; //node default port
server.listen(port, () => {
	console.log(`started http server on ${port}`);
});

// const test = "woking tom";
// console.log(`Hello ${test}`);

// const obj = {hey : 1};
// const obj2 = {...obj, test: 2};
// console.log(obj2);

// class AppComponent {
//     static PropTypes = {
//         test : "wat!"
//     };
// }

// switch(test) {
//     case 1: 
//         console.log("hey");
//         break;

//     case 2:
//         console.log("test");
//         break;
// }