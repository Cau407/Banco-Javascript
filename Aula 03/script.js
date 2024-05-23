var respostaMenu
var saldoConta = 1000

while (respostaMenu != 0) {
    respostaMenu = parseInt(prompt("Escolha o que quer fazer:\n[1] - Ver Saldo\n[2] - Fazer Saque\n[3] - Fazer Depósito\n[0] - Sair"))
    switch (respostaMenu) {
        case 1:
            console.log(saldoConta)
            break
        case 2:
            sacar = parseInt(prompt("Quanto deseja sacar?"))
            if (sacar < 0) {
                console.log("Você não pode sacar um número negativo")
                break
            }
            else if (sacar > saldoConta) {
                console.log("O número que você tenta sacar excede o total em sua conta")
                break
            }
            else if (sacar == NaN) {
                console.log("Você não digitou um número")
                break
            }
            else {
                saldoConta -= sacar
                console.log(`Você efetuou o saque com sucesso, seu saldo agora é de ${saldoConta}`)
            }
            break
        case 3:
            depositar = parseInt(prompt("Quanto deseja depositar?"))
            if (depositar < 0) {
                console.log("Você não pode depositar um número negativo")
                break
            }
            else if (depositar == NaN) {
                console.log("Você não digitou um número")
                break
            }
            else {
                saldoConta += depositar
                console.log(`Você efetuou o depósito com sucesso, seu saldo agora é de ${saldoConta}`)
            }
            break
        case 0:
            console.log("Você escolheu sair, até a próxima!")
            break
        default:
            console.log("Você não escolheu nenhuma das opções viáveis, lembre-se de utilizar 1, 2, 3 ou 0")
    }
}
