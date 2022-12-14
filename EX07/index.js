/* Parte 1 */
const numbers = [2, 4, 8, 16, 32, 64,128, 256, 512, 1024, 2048];
let soma = 0;

console.log('- Parte 1 -');
for(item of numbers) {
    soma += item;
    console.log(item);
}
console.log('A soma das notas é ' + soma + '.');
let media = soma / Object.keys(numbers).length;
console.log('E a média aritmética é ' + media.toFixed(2) + '.');

/* Parte 2 */
const notas = {
    bimestre1: 7.0,
    bimestre2: 3.7,
    bimestre3: 6.4,
    bimestre4: 8.6
}
soma = 0;

console.log('- Parte 2 -');
for (let item in notas) {
    soma += notas[item];
    console.log(notas[item]);
}
console.log('A soma das notas é ' + soma.toFixed(2) + '.');

media = soma / Object.keys(notas).length;
if(media >= 7)
    console.log('O aluno foi aprovado com média ' + media.toFixed(1) + '.');
else
    console.log('O aluno não foi aprovado com a nota ' + media.toFixed(1) + '.');