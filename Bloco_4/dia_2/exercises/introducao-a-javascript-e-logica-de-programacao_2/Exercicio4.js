let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let c = 0; c < numbers.length; c++){
  soma = soma + numbers[c];
}
soma = soma / (numbers.length);

if (soma > 20){
  console.log("Valor maior que 20");
}
else{
  console.log("Valor menor que 20");
}