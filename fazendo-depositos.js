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
        datNascimento: '20/03/2011'},
    {
        nome: 'Jaci Santos',
        parentesco: 'Mãe',
        datNascimento: '08/10/1965'
    }
],
saldo: 100,
depositar: function(valor) {
    this.saldo += valor
}
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)