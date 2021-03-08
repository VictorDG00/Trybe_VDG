let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = par =0;

for (let c = 0; c < numbers.length; c++){
  if (numbers[c] % 2 == 0){
    par++;
  }
  else{
    impar++;
  }
}
if (impar >= 1 ){
  console.log(impar);
}
else{
  console.log("nenhum valor ímpar encontrado");
}