let birthYear = 1993;
let currentYear = new Date().getFullYear();
let aux = birthYear;

/* WHILE */
console.log('- Usando While -');
while(aux <= currentYear) {
    console.log(aux++);
}


/* DO...WHILE */
aux = birthYear;
console.log('- Usando Do...While -');
do {
    console.log(aux++);
} while(aux <= currentYear);