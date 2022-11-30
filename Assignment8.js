function concat(myArray){
  let strings ="";
  for (let i=0; i<myArray.length; i++){
    strings += myArray[i];
  }
  return strings

}
const names = concat(["Johnny", "DeeDee", "Joey", "Marky"]);
document.querySelector("#target").innerHTML += `<li>${names}</li>`;

const arrayStrings = ["I ","am ","kiran ","."]
document.querySelector("#target").innerHTML += `<li>${concat(arrayStrings)}</li>`;