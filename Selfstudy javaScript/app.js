// let age=prompt(`kac yasindasiniz` , );


// alert(`you are ${age} years old`);

// let isLegit= confirm("Are you of legal age?");
// alert(isLegit);

// document.write("heyoooo");

// var firstName = 'John' , lastName = 'Doe';
// console.log(firstName,lastName); 

// let a=5;
// let b=3;
// sol=a-b;
// document.write(sol);

// a = 3;
// console.log(a); // undefined (not an error)
// var a;
// console.log(b);
// let b; // Uncaught ReferenceError: a is not defined

// let a=5;
// b=++a;
// console.log(b);

// window.location = `https://${0.1+0.2}.com`;

// let a = 5;
// let b = a++;
// console.log (b); //5
// console.log(a);
// console.log(b);

// const number = prompt("Enter a number: ");
// // enter either positive or negative number to check the output
// // check if number is greater than 0
// if (number > 0) {
//   // the body of the if statement
//   console.log("The number is positive");
// }
// console.log("The if statement is easy");

// const number = prompt("Enter a number: ");
// // check if number is greater than 0
// if (number > 0) {
//   console.log("The number is positive");
// } else if (number == 0) { // check if number is 0
//   console.log("The number is 0");
// } else { // if number is neither greater than 0, nor zero
//   console.log("The number is negative");
// }
// console.log("The if...else if...else statement is easy");

let a = 3;
switch (a) {
  case "3":
    a = 33;
    break;
  case 2:
    a = 'two';
    break;
  case 3:
    a = 'three';
    break;
  default:
    a = 'not found';
    break;
}
console.log(`The value i ${a}`);