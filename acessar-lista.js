const cliente = {
    nome: "Valnei",
    idade: 24,
    cpf: '123456789',
    email: 'valneisilva@gmail.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email'];

// console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))