const cliente = {
    nome: "Valnei",
    idade: 24,
    cpf: '123456789',
    email: 'valneisilva@gmail.com',
    fones: ['71982554250', '7181681595'],
    dependentes: [
        {
        nome: 'Sara',
        parentesco: 'irmã',
        datNascimento: '20/03/2011'
    }
]
}

cliente.dependentes.push({
    nome: 'Jaci Santos',
    parentesco: 'Mãe',
    datNascimento: '08/10/1965'
})

// console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependentes => dependentes.datNascimento==='08/10/1965')

console.log(filhaMaisNova[0].nome)


