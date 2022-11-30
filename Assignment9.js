function even(numbers){
  evenNumbers = [];
  for (i=0; i<numbers.length; i++){
    if (numbers[i] % 2 === 0){
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers
}
const numbers =[1,2,3,4,5]
even_list = even(numbers)

console.log(`Original List: ${numbers}`);
console.log(`Even numbers List: ${even_list}`)

newEven = even([2,4,6,8,9,11])
console.log(`Even numbers in the List are: ${newEven}`)