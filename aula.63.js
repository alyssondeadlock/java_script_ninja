//Imprime os nomes dos atributos;

var carro ={marca: 'Fiat', modelo: 'Uno', ano: '2018', motor: '1.0' };

for (const obj in carro) {
        console.log(obj);
}

//Verifoca se existe um atributo em um objeto

console.log('modelo' in carro);