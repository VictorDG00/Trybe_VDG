 
let valorvenda1 = 200;
let valorcusto1 = 56;
let imposto1 = valorvenda1 * 0.20 ;
let lucro1 = valorvenda1 - valorcusto1 - imposto1;

let valorvenda2 = 340;
let valorcusto2 = 25;
let imposto2 = valorvenda2 * 0.20 ;
let lucro2 = valorvenda2 - valorcusto2 - imposto2;


if (valorcusto1 <= 0 || valorcusto2 <= 0 || valorvenda1 <= 0 || valorvenda2 <= 0){
  console.log("os valores não podem ser 0")
}
console.log(lucro1)
console.log(lucro2)
