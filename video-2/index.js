
let age = 15;

console.log(`Idade: ` + age);

if (age >= 18) {
    console.log('A pessoa é maior de idade');
} else {
    console.log('A pessoa não é maior de idade');
}


let numMonth = 30;

switch (numMonth) {
    case 1: {
        console.log('Janeiro');
        break;
    }
    case 2: {
        console.log('Fevereiro');
        break;
    }
    case 3: {
        console.log('Março');
        break;
    }
    case 4: {
        console.log('Abril');
        break;
    }
    case 5: {
        console.log('Maio');
        break;
    }
    case 6: {
        console.log('Junho');
        break;
    }
    case 7: {
        console.log('Julho');
        break;
    }
    case 8: {
        console.log('Agosto');
        break;
    }
    case 9: {
        console.log('Setembro');
        break;
    }
    case 10: {
        console.log('Outubro');
        break;
    }
    case 11: {
        console.log('Novembro');
        break;
    }
    case 12: {
        console.log('Dezembro');
        break;
    }
    default: {
        console.log('Mês inválido');
        break;
    }
}



if (numMonth === 1) {
    console.log('Janeiro');
} else if (numMonth === 2) {
    console.log('Fevereiro');
} else if (numMonth === 3) {
    console.log('Março');
} else if (numMonth === 4) {
    console.log('Abril');
} else if (numMonth === 5) {
    console.log('Maio');
} else if (numMonth === 6) {
    console.log('Junho');
} else if (numMonth === 7) {
    console.log('Julho');
} else if (numMonth === 8) {
    console.log('Agosto');
} else if (numMonth === 9) {
    console.log('Setembro');
} else if (numMonth === 10) {
    console.log('Outubro');
} else if (numMonth === 11) {
    console.log('Novembro');
} else if (numMonth === 12) {
    console.log('Dezembro');
} else {
    console.log('Mês inválido');
}

function loopWithDoWhile() {
    let x = 1;
    do {
        console.log("[loopWithDoWhile] Valor de x: " + x);
        x++;
    } while (x <= 10);
}

function loopWithWhile() {
    let x = 1;
    while (x <= 10) {
        console.log("[loopWithDo] Valor de x: " + x);
        x++;
    }
}

loopWithDoWhile();
loopWithWhile();

for (let x = 0; x <= 10; x++) {
    console.log("[loopFor] Valor de x: " + x);
}

