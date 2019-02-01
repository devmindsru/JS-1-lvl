"use strict";


let a = 2;
let b = -5;
if (a >= 0 && b >= 0) {
	console.log(a - b);
}
else if (a < 0 && b < 0) {
	console.log(a * b);
}
else((a < 0 && b >= 0) || (a >= 0 && b < 0)) {
	console.log(a + b);
}