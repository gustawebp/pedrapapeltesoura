
function play() {

    let p = document.getElementById('p')
    let playAgain = document.getElementById('play-again')

    const ar1 = [


           document.getElementById('0'),
           document.getElementById('1'),
           document.getElementById('2'),


    ]

    let qualEscolha = 0





    if (ar1[0].checked == true) {
        qualEscolha = 0
    }

    else if (ar1[1].checked == true) {
        qualEscolha = 1

    }

    else if (ar1[2].checked == true) {
        qualEscolha = 2

    } 

    else if (ar1[0].checked == false &&  ar1[1].checked == false &&  ar1[2].checked == false  ) {
      alert('ERRO!!! SELECIONE PARA JOGAR')
      window.location.reload()
    }


    const maquinaEscolha = [
          0,
          1,
         2,
   

    ]

    const numero = Math.floor(Math.random() * maquinaEscolha.length);




 if(numero == qualEscolha) {
    console.log(`IGUAL:::: Minha: ${qualEscolha} Maquina: ${numero}`)
 } else {
     console.log(`DIFERENTE:::: Minha: ${qualEscolha} Maquina: ${numero}`)
}
 
    //EMPATES
    if (numero == 0 && qualEscolha == 0) {
        p.innerHTML = 'Empate <br>  Você = Pedra <br> Eu:  Pedra'

    } else if (qualEscolha == 1 && numero == 1) {
        p.innerHTML = 'Empate <br>  Você = Papel <br> Eu:  Papel'
        
    } else if (qualEscolha == 2 && numero == 2) {
        p.innerHTML = 'Empate <br>  Você = Tesoura <br> Eu:  Tesoura'
    
    }

    //RESULTADOS caso escolha = pedra
      if (qualEscolha == 0 &&  numero == 1) {
        p.innerHTML = 'Derrota!! <br>  Você = Pedra <br> Eu:  Papel'
      }

        else if (qualEscolha == 0 &&  numero == 2) {
        p.innerHTML = 'Vitoria!! <br>  Você = Pedra <br> Eu:  Tesoura'
      }



    //RESULTADOS caso escolha = Papel

    if (qualEscolha == 1 &&  numero == 0) {
        p.innerHTML = 'Vitoria!! <br>  Você = Papel <br> Eu:  Pedra'
      }

      else if (qualEscolha == 1 &&  numero == 2) {
        p.innerHTML = 'Derrota!! <br>  Você = Papel <br> Eu:  Tesoura'
      }


    //RESULTADOS caso escolha = Tesoura


    if (qualEscolha == 2 &&  numero == 0) {
        p.innerHTML = 'Derrota!! <br>  Você = Tesoura <br> Eu:  Pedra'
      }

      else if (qualEscolha == 2 &&  numero == 1){
        p.innerHTML = 'Vitória!! <br>  Você = Tesoura <br> Eu:  Papel'
      }



event.preventDefault()
window.setTimeout( function() {
  window.location.reload();
}, 1750);

    }


