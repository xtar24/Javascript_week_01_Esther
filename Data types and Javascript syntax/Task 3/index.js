let isTrue = true;
let isFalse = false;

let trueValue = isFalse && isTrue;

let falseValue = isFalse || isTrue;

let notTrue = !isTrue;
let notFalse = !isFalse;

if (!isFalse && isTrue) {
    console.log("You are eligible");
}

if (trueValue) {
    console.log("False because only one of the conditon is True");
}

if (falseValue) {
    console.log("True because one of the condition is True")
}


