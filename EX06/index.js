let n1;
let n2;

while(true) {
    do {
        n1 = Number(prompt("Insira o valor do Número1: "));
    } while(!n1);
    do {
        n2 = Number(prompt("Insira o valor do Número2: "));
    } while(!n2);

    Calculator();
}

function Calculator() {
    let operation = prompt("Informe a operação desejada:\n [+] Soma\n [-] Subtração\n [*] Multiplicação\n [/] Divisão Real\n [%] Divisão Inteira\n [**] Potenciação\n");
    let resultado;

    switch(operation) {
        case '+':
            resultado = n1+n2;
            alert(`${n1} + ${n2} = ${resultado}`);
            break;
        case '-':
            resultado = n1-n2;
            alert(`${n1} - ${n2} = ${resultado}`);
            break;
        case '*':
            resultado = n1*n2;
            alert(`${n1} * ${n2} = ${resultado}`);
            break;
        case '/':
            resultado = n1/n2;
            alert(`${n1} / ${n2} = ${resultado}`);
            break;
        case '%':
            resultado = n1%n2;
            alert(`${n1} % ${n2} = ${resultado}`);
            break;
        default:
            resultado = n1**n2;
            alert(`${n1} ** ${n2} = ${resultado}`);
            break;
    }
}