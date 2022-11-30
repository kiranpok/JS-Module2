let allNames = []
for (let i= 0; i<6; i++){
  let dog_Names= prompt("What are the names?");
  allNames.push(dog_Names);
}
allNames.sort();
for (let j= 6; j >0; j--){
  document.querySelector("#target").innerHTML += `<li>${allNames[j-1]}</li>`;
}
