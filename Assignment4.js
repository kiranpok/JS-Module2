let allNumbers = []
let number
while (true){
  let number = prompt("Please type a number: ");
  if (number != 0){
    allNumbers.push(number);
  }else{
    break;
  }
}
allNumbers.sort();
allNumbers.reverse();
for (i =0; i < allNumbers.length; i++){
  console.log(allNumbers[i]);
}