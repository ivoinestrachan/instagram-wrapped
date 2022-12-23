"use strict";
exports.__esModule = true;
var http_proxy_middleware_1 = require("http-proxy-middleware");
var handler = function (req, res) {
    var proxy = (0, http_proxy_middleware_1.createProxyMiddleware)({
        target: 'https://api.instagram.com',
        changeOrigin: true
    });
    // Use the proxy middleware function as middleware
    // @ts-ignore
    proxy(req, res);
};
exports["default"] = handler;
