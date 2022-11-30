'use strict';
let numbers
let allnumbers = []
while (true){
  numbers = prompt("Please type some numbers: ")
  if (!allnumbers.includes(numbers)){
    allnumbers.push(numbers);
  }else{
    alert('You have already typed the number');
    break;
  }
}
allnumbers.sort()
for (let i=0; i<allnumbers.length; i++){
  console.log(allnumbers[i])
}
