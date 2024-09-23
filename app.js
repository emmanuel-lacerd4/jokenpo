/**
 * Jokenpô
 * @author Emmanuel L. Nogueira
 * @link https://github.com/emmanuel-lacerd4/jokenpo.git
 * @version 1.0
 */

function jogar() {
    // Validação de campos obrigatórios (radio button)
    if (document.getElementById('pedra').checked === false && document.getElementById('papel').checked === false && document.getElementById('tesoura').checked === false) {
        alert("Selecione uma opção")
    } else {
        // Lógica principal
        let sorteio = Math.floor(Math.random() * 3) // 0, 1 ou 2
        switch (sorteio) {
            case 0:
                document.getElementById('pc').src = "img/pcpedra.png"
                break

            case 1:
                document.getElementById('pc').src = "img/pcpapel.png"
                break

            case 2:
                document.getElementById('pc').src = "img/pctesoura.png"
                break
        }
        // Verificar vencedor ou declarar empate
        if ((document.getElementById('pedra').checked === true && sorteio === 0) || (document.getElementById('papel').checked === true && sorteio === 1) || (document.getElementById('tesoura').checked === true && sorteio === 2)) {
            document.getElementById('placar').innerHTML = "Empate"
        } else if ((document.getElementById('pedra').checked === true && sorteio === 2) || (document.getElementById('papel').checked === true && sorteio === 0) || (document.getElementById('tesoura').checked === true && sorteio === 1)) {
            document.getElementById('placar').innerHTML = "Jogador venceu"
        } else {
            document.getElementById('placar').innerHTML = "Computador venceu"
        }
    }
}

function limpar() {
    document.getElementById('pc').src = "img/pc.png"
    document.getElementById('placar').innerHTML = ""
}