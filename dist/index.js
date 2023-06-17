"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./utils/constants");
var sum_1 = require("./utils/sum");
var result = (0, sum_1.sum)(constants_1.A_NUMBER, constants_1.B_NUMBER);
console.log("The sum is ".concat(result));
