const cliente = {
    nome: "Valnei",
    idade: 24,
    cpf: '123456789',
    email: 'valneisilva@gmail.com',
    fones: ['71982554250', '7181681595']
}

cliente.dependentes = {
    nome: 'Sara',
    parentesco: 'irmã',
    datNascimento: '20/03/2011'
}

console.log(cliente)

cliente.dependentes.nome = 'Sara Silva';

console.log(cliente)