// // Function
// const sumFunction = function (a, b) {
//     return a + b;
// }
// // Arrow Function
// const sumArrowFunction = (a, b) => a + b;


// console.log(sumFunction(1, 1))
// console.log(sumArrowFunction(1, 1))



const pessoa = {
    nome: 'Abner',
    canalYt: 'Canal - eu sou programador'
}

// 1 Notacao de ponto
console.log(pessoa.canalYt)

// 2 Notacao de colchetes
console.log(pessoa['canalYt'])

// 3 Destructuring
const { canalYt } = pessoa
console.log(canalYt)