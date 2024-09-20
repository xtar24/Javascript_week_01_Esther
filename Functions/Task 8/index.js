//Task 8 -  Use closure
function outerFunction() {
  let outerVariable = "I am out";
  return function innerfunction() {
    console.log(outerVariable);
  }
}
let myInnerFunction = outerFunction();
myInnerFunction();