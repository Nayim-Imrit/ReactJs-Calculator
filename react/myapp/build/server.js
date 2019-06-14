"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

var _settings = require("./settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
	var enterModule = require('react-hot-loader').enterModule;

	enterModule && enterModule(module);
})();

//setup
var app = (0, _express2.default)();
var server = new _http2.default.Server(app);

//config
app.set("view engine", "pug"); //file to compile
app.use(_express2.default.static("public")); //serve that file in an http way

var useExtrenalStyles = !_settings.isDevelopment;
var scriptRoot = _settings.isDevelopment ? "http://localhost:8080/build" : "/build";

app.get("*", function (req, res) {
	//if anything does not match --> try using
	res.render("index", {
		useExtrenalStyles: useExtrenalStyles,
		scriptRoot: scriptRoot
	});
});

//startup
var port = process.env.PORT || 3000; //node default port
server.listen(port, function () {
	console.log("started http server on " + port);
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

;

(function () {
	var reactHotLoader = require('react-hot-loader').default;

	var leaveModule = require('react-hot-loader').leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(app, "app", "C:/Users/Nayim/Desktop/react/myapp/src/server/server.js");
	reactHotLoader.register(server, "server", "C:/Users/Nayim/Desktop/react/myapp/src/server/server.js");
	reactHotLoader.register(useExtrenalStyles, "useExtrenalStyles", "C:/Users/Nayim/Desktop/react/myapp/src/server/server.js");
	reactHotLoader.register(scriptRoot, "scriptRoot", "C:/Users/Nayim/Desktop/react/myapp/src/server/server.js");
	reactHotLoader.register(port, "port", "C:/Users/Nayim/Desktop/react/myapp/src/server/server.js");
	leaveModule(module);
})();

;
//# sourceMappingURL=server.js.map
