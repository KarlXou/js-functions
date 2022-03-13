// 1. Write a function that returns the sum of any two integers passed as arguments
function addTwoNumbers(x,y) {
let total = x + y;
console.log(total);
return total;
};

addTwoNumbers(3,7);
// 2. Write a function that returns the difference of the second argument from the first
function subtractTwoNumbers(x,y) {
  let total = x-y
  console.log(total);
  return total;
};

subtractTwoNumbers(10,4);
// 3. Write a function that allows a user to enter their name as an
// argument and returns a statement greeting them like, `Hello, Homer!`
function greetUser (usersName) {
  const greeting = `Sup ${usersName}. Did you enjoy our team dinner last night?`
  console.log(greeting);
  return greeting;
};
greetUser(`Ashley`)
// 4. Write a function that returns the product of any argument
// multiplied by itself.
function multiplyNumber(x) {
  let total = x*x;
  console.log(total);
  return total;
};

multiplyNumber(5);
// 5. Write a  function set equal to a variable called `volume`
// that returns a value of the dimensions of a box (l*w*h) and THEN
// invoke that function in a console.log() with a message of the box's
// dimensions
// ^ 🔥 This is s-tier/big-brain work and not for the faint of heart 🔥
function volume(l,w,h) {
  let dimensions = l*w*h;
  console.log(dimensions);
  return dimensions;
};

console.log (`The dimensions of the box are ${volume(2,6,8)} cubic meters`) //template
