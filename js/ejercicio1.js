/*
Exercise #1 ( sugerencia join() )
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}

printOutString();
Complete the function to print out the string: This is a sentence.
*/
function printOutString( array ) {
    return array.join(" ");
  }
  let sentence = ["This", "is", "a", "sentence."];
  const result1= printOutString(sentence);
  console.log(result1);

  document.getElementById("ejercicio1").innerHTML += result1;