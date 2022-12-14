/* Usando setInterval */
printNumbersSetInterval(1, 22);

function printNumbersSetInterval(from, to) {
    let current = from;
    let timer = setInterval(function() {
        alert(current);

        if(current == to) {
            clearInterval(timer);
        }

        current++;
    }, 1000);
}

/* Usando setTimeout */
function printNumbersSetTimeout(from, to) {
    let current = from;

    setTimeout(function go() {
        alert(current);

        if(current <= to) {
            setTimeout(go, 1000);
        }

        current++;
    }, 1000);
}

printNumbersSetTimeout(1, 15);