import { Professional } from "./professional";

let professional1 = new Professional('Jennifer Lawrence', 33, 56, 165, false, 'USA', 1, 'actress' );
let professional2 = new Professional('Daniel Radcliffe', 34, 68, 165, false, 'United Kingdom',0, 'actor');

console.log(professional1.printProperties());
console.log(professional2.printProperties());
