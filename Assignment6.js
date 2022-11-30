function diceRoll(){
  return Math.floor(Math.random()*6) +1;
}

let result = 0;
while (result != 6){
  result = diceRoll();
  document.querySelector("#target").innerHTML += `<li>${result}</li>`;
}