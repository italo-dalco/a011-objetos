// # Exercício 1

//----------------------------------------------------------------

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

// a) Crie três objetos que vão representar frutas do sacolão.
// Os objetos devem ter as seguintes propriedades: 
// nome: string;
// preco: number;
// disponibilidade: boolean;

const sacolao = [
    {fruta: "Maçã", preço: "R$10.00/KG", disponibilidade: true},
    {fruta: "Laranja", preço: "R$06.00/KG", disponibilidade: true},
    {fruta: "Maçã", preço: "R$10.00/KG", disponibilidade: false}
]
console.log(sacolao)

//----------------------------------------------------------------

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

sacolao.push({fruta: "Abacate", preço: "R$15.00/KG", disponibilidade: false})

//----------------------------------------------------------------

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja
// um array **com três objetos**
console.log(sacolao)