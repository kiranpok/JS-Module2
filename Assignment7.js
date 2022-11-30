sides= prompt("Type in sides: ")

function diceRoll(sides){
  return Math.floor(Math.random()*sides)+1;
}
let rolledNumber = 0;
while (rolledNumber != sides){
  rolledNumber = diceRoll(sides);
  document.querySelector("#target").innerHTML += `<li>${rolledNumber}</li>`;
}