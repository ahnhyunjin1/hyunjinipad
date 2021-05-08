const mystring = 'JavaScript learn';

const a1 = mystring.includes('JavaScript');
console.log(a1);

// start string is javascript. so event false
const a2 = mystring.startsWith('learn');
console.log(a2);

// end string is learn. so event true.
const a3 = mystring.endsWith('learn');
console.log(a3);