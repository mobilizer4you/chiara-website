"use strict";
exports.__esModule = true;
var server_1 = require("./server");
require("dotenv/config");
(0, server_1.startApolloServer)()
    .then()["catch"](function (error) { return console.error(error); });
