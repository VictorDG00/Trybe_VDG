let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 0;

for (let c = 0; c < numbers.length; c++){
  if (c===0){
    menor = numbers[0]; 
  }
  else if(numbers[c]< menor){
    menor = numbers[c];
  }
}
console.log(menor);