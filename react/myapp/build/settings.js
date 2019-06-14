"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var isDevelopment = exports.isDevelopment = process.env.NODE_ENV !== "production";
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(isDevelopment, "isDevelopment", "C:/Users/Nayim/Desktop/react/myapp/src/server/settings.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=settings.js.map
