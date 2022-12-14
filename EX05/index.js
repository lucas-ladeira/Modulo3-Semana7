let n1 = 3;
let n2 = 8;

if(n1==n2) {
    console.log('Os números ' + n1 + ' e ' + n2 + ' são iguais.');
} else {
    console.log('Os números ' + n1 + ' e ' + n2 + ' não são iguais.');
}
let soma = n1+n2;
if(soma > 10) {
    if(soma > 20)
        console.log('Sua soma é ' + soma + ', que é MAIOR que 10 e MAIOR que 20.');
    else
        console.log('Sua soma é ' + soma + ', que é MAIOR que 10 e MENOR que 20.');
}
else {
    if(soma > 20)
        console.log('Sua soma é ' + soma + ', que é MENOR que 10 e MAIOR que 20.');
    else
        console.log('Sua soma é ' + soma + ', que é MENOR que 10 e MENOR que 20.');
}