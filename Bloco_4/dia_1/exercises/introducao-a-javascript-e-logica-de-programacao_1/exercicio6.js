let peca = "CaValo".toLocaleLowerCase();

switch (peca){
  case "rei":
    console.log("Rei → Vertical, horizontal e diagonal, mas só uma casa")
    break;
  case "rainha":
    console.log("Rainha → Vertical, horizontal e diagonal, quantas casas quiser")
    break;
  case "bispo":
    console.log("Bispo → Diagonal, quantas casas quiser")
    break;
  case "torre":
    console.log("Torre → Vertical, horizontal quantas casas quiser")
    break;
  case "cavalo":
    console.log("Cavalo → Movimento em L 2 horizontal e 1 na vertical")
    break;
  case "peao":
    console.log("Peao → Move 1 casa para frente, para captura ele se movimenta 1 casa para diagonal")
    break;
  default:
    console.log("digite uma peça valida")
    break;
}
// Escreva um programa que receba o nome de uma peça de xadrez e retorne os 
//movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça 
//com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de 
//condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as 
//letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
