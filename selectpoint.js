// 3.141592 - > 3.14
// 10 -> 10.00
/* syntax
value.toFixed([point])
value.toPrecision([point]) */

console.log((0.3333).toFixed(2));
console.log((123.5678).toFixed(1));
 
console.log((2.4).toFixed(4));

console.log((0.33333).toPrecision(2));
console.log((123.456).toPrecision(3));