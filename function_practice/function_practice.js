// Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

//alt + z to word wrap

// Defining functions
// Function declarations
// A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly braces, { /* … */ }.

// For example, the following code defines a simple function named square:

function square(number) {
  return number * number;
}

// The return statement specifies the value returned by the function, which is number * number.

// primitive values when passed as parameters will not be influenced outside of their home function. ANy changes is not reflected globally. However, When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function, as shown in the following example:

function myFunc(theObject) {
    theObject.make = "Toyota";
  }

  const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };

  console.log(mycar.make); // "Honda"
  myFunc(mycar);
  console.log(mycar.make); // "Toyota"

//   When you pass an array as a parameter, if the function changes any of the array's values, that change is visible outside the function, as shown in the following example:

console.log("\n\n");

function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30


// Function expressions
// While the function declaration above is syntactically a statement, functions can also be created by a function expression.

// Such a function can be anonymous; it does not have to have a name. For example, the function square could have been defined as:

const square_1 = function (number) {
  return number * number;
};

console.log(square_1(4)); // 16

// However, a name can be provided with a function expression. Providing a name allows the function to refer to itself, and also makes it easier to identify the function in a debugger's stack traces:


const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6

// In the following code, the function receives a function defined by a function expression and executes it for every element of the array received as a second argument:


function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const cube = function (x) {
  return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]

// In JavaScript, a function can be defined based on a condition. For example, the following function definition defines myFunc only if num equals 0:


let myFunc_1;
let num = 0
if (num === 0) {
    myFunc_1 = function (theObject) {
    theObject.make = "Toyota";
  };
}

//*how do? VV
// In addition to defining functions as described here, you can also use the Function constructor to create functions from a string at runtime, much like eval().

// A method is a function that is a property of an object. Read more about objects and methods in Working with objects.

// Defining a function does not execute it. Defining it names the function and specifies what to do when the function is called.

// Calling the function actually performs the specified actions with the indicated parameters. For example, if you define the function square, you could call it as follows:


square(5);


// Functions must be in scope when they are called, but the function declaration can be hoisted (appear below the call in the code). The scope of a function declaration is the function in which it is declared (or the entire program, if it is declared at the top level).

//* examples needed ^

// The arguments of a function are not limited to strings and numbers. You can pass whole objects to a function. The showProps() function (defined in Working with objects) is an example of a function that takes an object as an argument.


// A function can call itself. For example, here is a function that computes factorials recursively:


function factorial_1(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial_1(n - 1);
  }
}

// You could then compute the factorials of 1 through 5 as follows:


console.log(factorial_1(1)); // 1
console.log(factorial_1(2)); // 2
console.log(factorial_1(3)); // 6
console.log(factorial_1(4)); // 24
console.log(factorial_1(5)); // 120

// Function hoisting
// Consider the example below:

console.log("\n\n");

console.log(square_1(5)); // 25

function square(n) {
  return n * n;
}
// This code runs without any error, despite the square() function being called before it's declared. This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope, so the code above is equivalent to:

console.log("\n\n");

// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25
// Function hoisting only works with function declarations — not with function expressions. The following code will not work:

console.log("\n\n");

console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
 square = function (n) {
  return n * n;
};

// Function scope
// Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function. However, a function can access all variables and functions defined inside the scope in which it is defined.

// In other words, a function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access.

console.log("\n\n");

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"

// Recursion
// A function can refer to and call itself. There are three ways for a function to refer to itself:

// The function's name
// arguments.callee
// An in-scope variable that refers to the function
// For example, consider the following function definition:

console.log("\n\n");

const foo = function bar() {
  // statements go here
};
// Within the function body, the following are all equivalent:

bar()
arguments.callee()
foo()

// A function that calls itself is called a recursive function. In some ways, recursion is analogous to a loop. Both execute the same code multiple times, and both require a condition (to avoid an infinite loop, or rather, infinite recursion in this case).

// However, some algorithms cannot be simple iterative loops. For example, getting all the nodes of a tree structure (such as the DOM) is easier via recursion:

console.log("\n\n");

function walkTree(node) {
  if (node === null) {
    return;
  }
  // do something with node
  for (let i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}

// Nested functions and closures

// Since a nested function is a closure, this means that a nested function can "inherit" the arguments and variables of its containing function. In other words, the inner function contains the scope of the outer function.

// The inner function can be accessed only from statements in the outer function.
// The inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.

// Multiply-nested functions
// Functions can be multiply-nested. For example:

// A function (A) contains a function (B), which itself contains a function (C).
// Both functions B and C form closures here. So, B can access A, and C can access B.
// In addition, since C can access B which can access A, C can also access A.
// Thus, the closures can contain multiple scopes; they recursively contain the scope of the functions containing it. This is called scope chaining. (The reason it is called "chaining" is explained later.)

// Consider the following example:

console.log("\n\n");

function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // Logs 6 (which is 1 + 2 + 3)


// Default parameters
// In JavaScript, parameters of functions default to undefined. However, in some situations it might be useful to set a different default value. This is exactly what default parameters do.

// In the past, the general strategy for setting defaults was to test parameter values in the body of the function and assign a value if they are undefined.

// In the following example, if no value is provided for b, its value would be undefined when evaluating a*b, and a call to multiply would normally have returned NaN. However, this is prevented by the second line in this example:

console.log("\n\n");

function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // 5

// Arrow functions
// An arrow function expression (also called a fat arrow to distinguish from a hypothetical -> syntax in future JavaScript) has a shorter syntax compared to function expressions and does not have its own this, arguments, super, or new.target. Arrow functions are always anonymous.

// Two factors influenced the introduction of arrow functions: shorter functions and non-binding of this.

// Shorter functions
// In some functional patterns, shorter functions are welcome. Compare:

console.log("\n\n");

const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]
// No separate this
// Until arrow functions, every new function defined its own this value (a new object in the case of a constructor, undefined in strict mode function calls, the base object if the function is called as an "object method", etc.). This proved to be less than ideal with an object-oriented style of programming.

console.log("\n\n");

function Person() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

const p = new Person();
// In ECMAScript 3/5, this issue was fixed by assigning the value in this to a variable that could be closed over.

console.log("\n\n");

function Person() {
  // Some choose `that` instead of `self`.
  // Choose one and be consistent.
  const self = this;
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}
// Alternatively, a bound function could be created so that the proper this value would be passed to the growUp() function.

// An arrow function does not have its own this; the this value of the enclosing execution context is used. Thus, in the following code, the this within the function that is passed to setInterval has the same value as this in the enclosing function:

console.log("\n\n");

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` properly refers to the person object
  }, 1000);
}

p = new Person();
