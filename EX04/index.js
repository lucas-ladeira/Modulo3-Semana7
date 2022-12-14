let x = 17;
let y = 21;
let z = 42;

console.log('1- Se x for menor que y e se y for menor que z');
console.log(x<y && y<z);

console.log('2- Se x for diferente de z ou y for maior que z');
console.log(x!=z || y>z);

console.log('3- Se z for igual a 2 vezes y');
console.log(z==(2*y));

console.log('4- Se x + y for maior que z');
console.log((x+y) > z);

console.log('5- Se x ao quadrado mais y ao quadrado forem maiores que z ao quadrado');
console.log(((x^2)+(y^2)) > (z^2));