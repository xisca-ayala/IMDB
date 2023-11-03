"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var professional_1 = require("./professional");
var professional1 = new professional_1.Professional('Jennifer Lawrence', 33, 56, 165, false, 'USA', 1, 'actress');
var professional2 = new professional_1.Professional('Daniel Radcliffe', 34, 68, 165, false, 'United Kingdom', 0, 'actor');
console.log(professional1.printProperties());
console.log(professional2.printProperties());
