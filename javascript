1.var, let,const(hoisting,scoping , shodowing, declaration, reinitialization)



This is a very common JavaScript interview question. Interviewers usually expect you to explain var, let, const with concepts like hoisting, scope, shadowing, declaration, and reinitialization.

I will explain each concept step-by-step in interview format with examples.

1. var, let, const in JavaScript
1️⃣ Definition (Interview Answer)

var, let, and const are keywords used to declare variables in JavaScript.

var → function scoped (older way)

let → block scoped

const → block scoped but cannot be reassigned

Modern JavaScript prefers let and const instead of var.

2. Declaration
Meaning

Declaration means creating a variable name in memory.

Syntax
var a;
let b;
const c = 10;

Important rule:

var → declaration allowed

let → declaration allowed

const → must be initialized at declaration

Example:

const x;

❌ Error

SyntaxError: Missing initializer in const declaration

Correct:

const x = 10;
3. Initialization

Initialization means assigning a value to the variable.

Example

let a;
a = 10;

Here

Declaration → let a
Initialization → a = 10
4. Re-declaration

Re-declaration means declaring the same variable again in the same scope.

var allows re-declaration
var a = 10;
var a = 20;

console.log(a);

Output

20

Because var allows redeclaration.

let does NOT allow redeclaration
let a = 10;
let a = 20;

❌ Error

SyntaxError: Identifier 'a' has already been declared
const also does NOT allow redeclaration
const a = 10;
const a = 20;

❌ Error

5. Reinitialization (Reassignment)

Reinitialization means changing the value of a variable.

var allows reassignment
var a = 10;
a = 20;

console.log(a);

Output

20
let allows reassignment
let a = 10;
a = 30;

console.log(a);

Output

30
const does NOT allow reassignment
const a = 10;
a = 20;

❌ Error

TypeError: Assignment to constant variable
6. Scoping

Scope means where a variable can be accessed in the program.

There are three types of scope:

Global scope

Function scope

Block scope

var → Function Scope

var is accessible inside the whole function.

Example

function test() {
    if (true) {
        var x = 10;
    }

    console.log(x);
}

test();

Output

10

Because var ignores block {} and works inside the function scope.

let → Block Scope

let works only inside the block {}.

Example

if (true) {
    let x = 10;
}

console.log(x);

❌ Error

ReferenceError: x is not defined

Because let is block scoped.

const → Block Scope

Same as let.

Example

if (true) {
    const x = 10;
}

console.log(x);

❌ Error

7. Hoisting
Definition (Interview Answer)

Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during compilation.

var Hoisting

Example

console.log(a);
var a = 10;

JavaScript internally converts it to

var a;
console.log(a);
a = 10;

Output

undefined

Because the variable is hoisted but value is not assigned yet.

let Hoisting

Example

console.log(a);
let a = 10;

❌ Error

ReferenceError: Cannot access 'a' before initialization

Reason: Temporal Dead Zone (TDZ).

The variable exists but cannot be accessed before initialization.

const Hoisting

Example

console.log(a);
const a = 10;

❌ Same error

ReferenceError

Because const is also inside Temporal Dead Zone.

8. Shadowing
Definition (Interview Answer)

Shadowing occurs when a variable declared inside a block has the same name as a variable declared outside the block.

The inner variable shadows the outer variable.

Example

let a = 10;

{
    let a = 20;
    console.log(a);
}

console.log(a);

Output

20
10

Explanation

Inside block → a = 20

Outside block → a = 10

The inner variable shadows the outer variable.

9. Illegal Shadowing

Illegal shadowing occurs when a variable declared with let/const is shadowed by var.

Example

let a = 10;

{
    var a = 20;
}

❌ Error

Because var cannot override block-scoped variable.

10. Quick Interview Comparison Table
Feature	var	let	const
Scope	Function	Block	Block
Hoisting	Yes	Yes (TDZ)	Yes (TDZ)
Redeclaration	Allowed	Not allowed	Not allowed
Reassignment	Allowed	Allowed	Not allowed
Initialization required	No	No	Yes
11. Best Practice (Important Interview Point)

Modern JavaScript follows:

Use const by default

Use let if value changes

Avoid var

Example

const pi = 3.14;
let count = 0;
12. One Very Common Interview Question
Question

What will be the output?

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}

Output

3
3
3

Reason:

var is function scoped, so the loop ends with i = 3.

---------------------------------------------------------------------------------------------------------------------

map, filter,reduce,foreach 

These are very frequently asked JavaScript interview concepts.
Interviewers expect you to know:

What they do

Difference between them

Real examples

When to use each

I will explain map, filter, reduce, forEach clearly.

1. map() in JavaScript
1️⃣ Definition (Interview Answer)

map() is an array method used to transform each element of an array and return a new array.

It does not modify the original array

It returns a new array of the same length

2️⃣ Syntax
array.map((element, index, array) => {
   return newValue;
})

Parameters:

element → current element

index → position of element

array → original array

3️⃣ Example
const numbers = [1, 2, 3, 4];

const result = numbers.map(num => num * 2);

console.log(result);

Output

[2, 4, 6, 8]
4️⃣ Explanation

Step 1

1 * 2 = 2

Step 2

2 * 2 = 4

Step 3

3 * 2 = 6

Step 4

4 * 2 = 8

Final array

[2,4,6,8]
5️⃣ Real-world Example

Convert prices with tax:

const prices = [100, 200, 300];

const finalPrices = prices.map(price => price * 1.18);

console.log(finalPrices);

Output

[118, 236, 354]
2. filter() in JavaScript
1️⃣ Definition (Interview Answer)

filter() is used to select elements from an array based on a condition.

It returns a new array

Only elements that satisfy the condition are included

2️⃣ Syntax
array.filter((element) => condition)
3️⃣ Example
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);

Output

[2, 4]
4️⃣ Explanation

Check condition

1 % 2 = 1 → false
2 % 2 = 0 → true
3 % 2 = 1 → false
4 % 2 = 0 → true
5 % 2 = 1 → false

Only true values are kept

Result

[2,4]
5️⃣ Real-world Example

Filter adults from user list.

const ages = [12, 18, 25, 16, 30];

const adults = ages.filter(age => age >= 18);

console.log(adults);

Output

[18, 25, 30]
3. reduce() in JavaScript
1️⃣ Definition (Interview Answer)

reduce() is used to reduce an array to a single value by applying a function on each element.

Common uses:

Sum

Product

Counting

Grouping

Flatten arrays

2️⃣ Syntax
array.reduce((accumulator, currentValue) => {
   return updatedValue;
}, initialValue)

Parameters

accumulator → stores result

currentValue → current element

initialValue → starting value

3️⃣ Example (Sum of array)
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum);

Output

10
4️⃣ Explanation

Initial value

total = 0

Step 1

0 + 1 = 1

Step 2

1 + 2 = 3

Step 3

3 + 3 = 6

Step 4

6 + 4 = 10

Final result

10
5️⃣ Real-world Example

Total cart price.

const cart = [200, 300, 150];

const total = cart.reduce((sum, price) => sum + price, 0);

console.log(total);

Output

650
4. forEach() in JavaScript
1️⃣ Definition (Interview Answer)

forEach() is used to iterate through each element of an array.

Important point:

It does not return anything

Used mainly for side effects like printing or updating values

2️⃣ Syntax
array.forEach((element, index) => {
    // code
})
3️⃣ Example
const numbers = [1, 2, 3];

numbers.forEach(num => {
    console.log(num);
});

Output

1
2
3
4️⃣ Example (Modify elements)
const numbers = [1, 2, 3];

numbers.forEach((num, index, arr) => {
    arr[index] = num * 2;
});

console.log(numbers);

Output

[2,4,6]
5. Important Difference (Very Common Interview Question)
Feature	map	filter	reduce	forEach
Returns new array	Yes	Yes	No (single value)	No
Purpose	Transform	Select	Combine values	Iterate
Changes original array	No	No	No	Sometimes
Output size	Same size	Smaller or equal	Single value	Undefined
6. One Very Common Interview Question
Question

Find square of even numbers.

Array

[1,2,3,4,5,6]

Solution using filter + map

const numbers = [1,2,3,4,5,6];

const result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * num);

console.log(result);

Output

[4,16,36]
7. Super Important Interview Question
Difference between map() and forEach()
map()	forEach()
Returns new array	Returns undefined
Used for transformation	Used for iteration
Chainable	Not chainable

Example

const arr = [1,2,3];

const result = arr.forEach(x => x * 2);

console.log(result);

Output

undefined

Because forEach does not return anything.

--------------------------------------------------------------------------------------

Polyfills and Output

This is a very important JavaScript interview topic. Interviewers often ask:

What are Polyfills

Why are they used

Write a polyfill for map / filter / reduce

Predict JavaScript output

I will explain both Polyfills and Output questions clearly.

1. Polyfills in JavaScript
1️⃣ Definition (Interview Answer)

A polyfill is a piece of code used to implement modern JavaScript features in older browsers that do not support them.

In simple words:

A polyfill adds missing functionality to JavaScript.

Example
Older browsers may not support map(), so we create our own implementation.

2️⃣ Why Polyfills Are Used

Polyfills help to:

Support older browsers

Implement modern JavaScript features

Maintain cross-browser compatibility

Example

Some old browsers do not support:

Array.map()

Array.filter()

Array.reduce()

Promise

fetch()
------------------------------------------------------------------------------------------------------------------------------------
( Functions ) - Hoisting, Scope, Callback, Arrow Functions etc  

a function is a reusable block of code designed to perform a specific task. Functions are fundamental building blocks that allow you to organize code, make it modular, and avoid repetition (following the DRY principle: Don't Repeat Yourself)

1. Function Declaration
Definition (Interview Answer)

A Function Declaration is a function defined using the function keyword with a name.

It is hoisted, meaning it can be called before its definition.

Syntax
function greet() {
    console.log("Hello");
}
Example
greet();

function greet(){
    console.log("Hello World");
}

Output

Hello World
Why it works

Function declarations are hoisted completely, so JavaScript moves them to the top during execution.

2. Function Expression
Definition

A Function Expression is when a function is stored inside a variable.

Syntax
const greet = function() {
    console.log("Hello");
};
Example
const greet = function() {
    console.log("Hello World");
};

greet();

Output

Hello World
Important Interview Point

Function expressions are not hoisted like function declarations.

Example

greet();

const greet = function(){
    console.log("Hello");
}

Output

ReferenceError
3. Anonymous Function
Definition

An Anonymous Function is a function without a name.

Example

function(){
   console.log("Hello");
}

Usually used inside:

callbacks

function expressions

Example

setTimeout(function(){
   console.log("Hello after 2 seconds");
},2000);
4. First Class Functions
Definition (Interview Answer)

JavaScript functions are first-class citizens, meaning:

Functions can:

Be stored in variables

Be passed as arguments

Be returned from another function

Example 1: Stored in variable
const greet = function(){
   console.log("Hello");
};
Example 2: Passed as argument
function greet(){
   console.log("Hello");
}

function execute(fn){
   fn();
}

execute(greet);

Output

Hello
Example 3: Returned from function
function outer(){
    return function(){
        console.log("Inner function");
    }
}

const result = outer();
result();

Output

Inner function
5. What is IIFE
Definition

IIFE means Immediately Invoked Function Expression.

It is a function that runs immediately after it is defined.

Syntax
(function(){
    console.log("IIFE executed");
})();

Output

IIFE executed
Why IIFE is used

IIFE is used to:

avoid global variables

create private scope

6. IIFE Interview Question

Example

(function(){
   var a = 10;
})();

console.log(a);

Output

ReferenceError

Explanation

a is inside IIFE scope.

7. Closures
Definition (Very Important Interview Question)

A closure is when a function remembers variables from its outer function even after the outer function has finished executing.

Example
function outer(){

    let count = 0;

    function inner(){
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();

counter();
counter();

Output

1
2
Why?

inner() remembers variable count.

8. Function Scope
Definition

Variables declared inside a function are accessible only inside that function.

Example
function test(){
    let x = 10;
}

console.log(x);

Output

ReferenceError
9. Function Scope Interview Question

Example

var x = 10;

function test(){
    var x = 20;
    console.log(x);
}

test();
console.log(x);

Output

20
10

Explanation

Function creates separate scope.

10. Hoisting in Functions
Definition

Hoisting means JavaScript moves declarations to the top during execution.

Function Declaration Hoisting
greet();

function greet(){
   console.log("Hello");
}

Output

Hello
Function Expression Hoisting
greet();

var greet = function(){
   console.log("Hello");
}

Output

TypeError: greet is not a function

Reason

Only variable is hoisted:

var greet;
11. Hoisting Interview Question

Example

console.log(a);

var a = 10;

Output

undefined

Because JS converts to

var a;
console.log(a);
a = 10;
12. Parameters vs Arguments
Parameters

Parameters are variables defined in function definition.

Example

function add(a,b){
}

a and b are parameters

Arguments

Arguments are values passed when calling the function.

Example

add(5,10);

5 and 10 are arguments

13. Spread Operator

Spread operator expands elements of array or object.

Symbol

...

Example

const arr = [1,2,3];

console.log(...arr);

Output

1 2 3

Example

const arr1 = [1,2];
const arr2 = [3,4];

const result = [...arr1,...arr2];

console.log(result);

Output

[1,2,3,4]
14. Rest Operator

Rest operator collects multiple values into an array.

Example

function sum(...numbers){
   console.log(numbers);
}

sum(1,2,3,4);

Output

[1,2,3,4]
15. Interview Question (Spread vs Rest)
Spread → Expands values
Rest → Collects values

Example

function add(...nums){
   return nums.reduce((a,b)=>a+b);
}

console.log(add(1,2,3));

Output

6
16. Callback Function
Definition (Interview Answer)

A callback function is a function passed as an argument to another function and executed later.

Example
function greet(name, callback){
   console.log("Hello " + name);
   callback();
}

function done(){
   console.log("Task completed");
}

greet("John", done);

Output

Hello John
Task completed
17. Callback Interview Question

Example

setTimeout(function(){
   console.log("Hello");
},2000);

Output

Hello

(after 2 seconds)

18. Arrow Functions
Definition

Arrow functions are shorter syntax for writing functions.

Introduced in ES6.

Syntax
const add = (a,b) => {
   return a + b;
}

Short version

const add = (a,b) => a + b;
Example
const square = n => n * n;

console.log(square(5));

Output

25
19. Arrow Function vs Normal Function
Feature	Normal Function	Arrow Function
Syntax	Longer	Short
this keyword	Own this	Uses parent this
arguments object	Available	Not available
Constructor	Can be constructor	Cannot
Example (this behavior)

Normal function

const person = {
  name: "John",
  greet: function(){
     console.log(this.name);
  }
}

person.greet();

Output

John

Arrow function

const person = {
  name: "John",
  greet: () => {
     console.log(this.name);
  }
}

person.greet();

Output

undefined

Because arrow function does not bind its own this.

20. Very Common Interview Output Question
function test(){
   console.log(a);
   var a = 10;
}

test();

Output

undefined

Because of hoisting.

Important Topics Interviewers Ask From This Section

Most asked questions:

Difference between Function Declaration and Expression

What is Closure

What is Callback

Difference between Arrow Function and Normal Function

What is IIFE

Difference between Spread and Rest

-------------------------------------------------------------------------------------------------


1. Closure in JavaScript
Definition (Interview Answer)

A closure is a combination of:

a function

and its lexical environment

In simple words:

A closure is a function that remembers and can access variables from its outer scope even after the outer function has finished executing.

2. What is Lexical Scope?
Definition

Lexical scope means:

A function can access variables from its parent scope, but the parent cannot access variables inside the child function.

Scope is determined where the function is written in code.

Example of Lexical Scope
function outer() {
  let name = "Roadside Coder";

  function inner() {
    console.log(name);
  }

  inner();
}

outer();

Output

Roadside Coder

Explanation

inner() can access variable name
because it is defined inside outer()

But the reverse is not possible.

Example

function outer() {
  function inner() {
    let x = 10;
  }

  console.log(x);
}

outer();

Output

ReferenceError
3. Example of Closure
function foo() {
  var name = "Roadside Coder";

  function displayName() {
    console.log(name);
  }

  displayName();
}

foo();

Output

Roadside Coder

Explanation

displayName() remembers variable name
from outer function foo()

This is called a closure.

4. Another Closure Example (Very Common Interview)
function makeFunc() {
  var name = "Roadside Coder";

  function displayName() {
    console.log(name);
  }

  return displayName;
}

var myFunc = makeFunc();
myFunc();

Output

Roadside Coder

Explanation

Step 1

makeFunc() executes

Step 2

displayName function is returned

Step 3

myFunc() still remembers name variable

Because of closure.

5. Closure Scope Chain

Closures have access to three scopes:

1️⃣ Local Scope (inside function)

2️⃣ Outer Function Scope

3️⃣ Global Scope

Example

let globalVar = "Global";

function outer() {

  let outerVar = "Outer";

  function inner() {

    let innerVar = "Inner";

    console.log(innerVar);
    console.log(outerVar);
    console.log(globalVar);
  }

  inner();
}

outer();

Output

Inner
Outer
Global

Scope chain

Inner → Outer → Global
6. Why Closures Are Used

Closures are used for:

1️⃣ Data privacy

2️⃣ Private variables

3️⃣ Memoization

4️⃣ Event handlers

5️⃣ Module patterns

6️⃣ Optimizing performance

7. Advantage of Closures (Interview Answer)

Closures provide:

1️⃣ Data encapsulation
2️⃣ Private variables
3️⃣ Code modularity
4️⃣ Functional programming patterns
5️⃣ Efficient memory usage

8. Difference Between Scope and Closure
Scope	Closure
Defines where variables are accessible	Function that remembers outer variables
Global or local	Combination of function + lexical environment
Determines visibility	Preserves variables

Example

Scope → access rules
Closure → memory of outer variables
9. Closure Interview Question
Question
let count = 0;

(function immediate() {

  if (count === 0) {

    let count = 1;
    console.log(count);

  }

  console.log(count);

})();

Output

1
0

Explanation

Inside if block:

let count = 1

This creates a new block-scoped variable.

So

console.log(count) → 1

Outside block

count = 0

So

console.log(count) → 0
10. Closure Example (createBase)

Question

addSix(10) → 16
addSix(21) → 27

Solution

function createBase(baseNumber) {

  return function(N) {
    return baseNumber + N;
  };

}

var addSix = createBase(6);

console.log(addSix(10));
console.log(addSix(21));

Output

16
27

Explanation

baseNumber is remembered by inner function
11. Optimizing Performance Using Closures
Problem (slow)
function find(index) {

  let a = [];

  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  console.log(a[index]);

}

Each call recomputes array.

Optimized using Closure
function find() {

  let a = [];

  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return function(index) {
    console.log(a[index]);
  };

}

const closure = find();

closure(6);
closure(12);

Now array is created only once.

This improves performance.

12. Famous Closure Interview Question
Question
for (var i = 0; i < 3; i++) {

  setTimeout(function() {
    console.log(i);
  }, 1000);

}

Output

3
3
3

Explanation

var is function scoped.

After loop finishes:

i = 3

So all callbacks print 3.

Correct Solution

Use let.

for (let i = 0; i < 3; i++) {

  setTimeout(function() {
    console.log(i);
  }, 1000);

}

Output

0
1
2

Because let creates block scope.

13. Private Counter using Closure
function counter() {

  let _counter = 0;

  return {

    add: function(increment) {
      _counter += increment;
    },

    retrieve: function() {
      return "Counter: " + _counter;
    }

  };

}

let c = counter();

c.add(5);
c.add(9);

console.log(c.retrieve());

Output

Counter: 14

Here _counter is private.

14. Module Pattern using Closures
var Module = (function(){

  function privateMethod(){
    console.log("Private");
  }

  return {

    publicMethod: function(){
      privateMethod();
    }

  };

})();

Usage

Module.publicMethod();

Output

Private

But this fails:

Module.privateMethod()

Because it is private.

15. Closure Trick Question

Question

Print once even if called multiple times.

Solution

function likeTheVideo(){

  let called = false;

  return function(){

    if(!called){
      console.log("Subscribe to Roadside Coder");
      called = true;
    }

    else{
      console.log("Already Subscribed");
    }

  };

}

const subscribe = likeTheVideo();

subscribe();
subscribe();

Output

Subscribe to Roadside Coder
Already Subscribed
16. Polyfill for once()
function once(func){

  let called = false;

  return function(){

    if(!called){
      called = true;
      func();
    }

  };

}

const hello = once(() => console.log("hello"));

hello();
hello();

Output

hello

Printed only once.

17. Memoization using Closures
function memoize(func){

  let cache = {};

  return function(num){

    if(cache[num]){
      return cache[num];
    }

    let result = func(num);
    cache[num] = result;

    return result;
  };

}

Used to avoid repeated expensive computations.

Final Interview Summary (Important)

When interviewer asks "What is Closure?"

Answer like this:

A closure is a function that remembers variables from its lexical scope even after the outer function has finished executing. Closures allow data privacy, function factories, and module patterns in JavaScript.


------------------------------------------------------------------------------------------------------------------------------------------------------------
1. What is Currying?
Definition (Interview Answer)

Currying is a technique in JavaScript where a function with multiple arguments is transformed into a sequence of functions that each take one argument at a time.

Instead of calling:

f(a, b, c)

We call:

f(a)(b)(c)

So:

Currying transforms a function with multiple parameters into a chain of functions where each function accepts a single parameter.

2. Basic Example of Currying
Normal Function
function add(a, b, c) {
  return a + b + c;
}

console.log(add(1, 2, 3));

Output

6
Curried Function
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3));

Output

6
Short Arrow Function Version
const add = a => b => c => a + b + c;

console.log(add(1)(2)(3));

Output

6
3. Why Should Currying Be Used?

Currying is useful because:

1. Creates Pure Functions

Functions become more predictable.

Example:

f(a)(b)(c)

Each step depends only on input.

2. Avoid Repeating Variables

Instead of repeating parameters multiple times.

Example

const multiply = a => b => a * b;

const double = multiply(2);

console.log(double(5));
console.log(double(10));

Output

10
20
3. Better Code Reusability

We can create reusable functions.

Example

multiplyBy2
multiplyBy3
multiplyBy10

All from same function.

4. Separates Responsibilities

Instead of one large function:

f(a,b,c)

We divide into steps:

f(a)
f(a)(b)
f(a)(b)(c)
4. How Currying Works

Currying works using closures.

Each returned function remembers the previous argument.

Example

const add = a => {
  return b => {
    return c => {
      return a + b + c;
    };
  };
};

Execution flow

add(1)
returns function(b)

add(1)(2)
returns function(c)

add(1)(2)(3)
returns 6
5. Interview Question

Convert sum(2,6,1) to sum(2)(6)(1)

Solution
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(2)(6)(1));

Output

9
Another Way (Step by Step)
const sum1 = sum(2);
const sum2 = sum1(6);
const result = sum2(1);

console.log(result);
Output Question
console.log(sum1)

Output

(b) => {
  return (c) => {
    return a + b + c
  }
}

Because only first argument passed.

6. Dynamic Currying (Operation Based)

Question:

evaluate("sum")(2)(4)

Solution:

function evaluate(operation) {
  return function (a) {
    return function (b) {

      if (operation === "sum")
        return a + b;

      else if (operation === "multiply")
        return a * b;

      else if (operation === "divide")
        return a / b;

      else if (operation === "subtract")
        return a - b;

      else
        return "Invalid Operation";
    };
  };
}

console.log(evaluate("sum")(2)(4));
console.log(evaluate("multiply")(2)(4));

Output

6
8
7. Infinite Currying (Important Interview Question)

Goal

sum(1)(2)(3)(4)(5)()

Result

15
Recursive Solution
function sum(a) {

  return function (b) {

    if (b !== undefined) {
      return sum(a + b);
    }

    return a;

  };

}

console.log(sum(1)(2)(3)(4)());

Output

10
One-Line Infinite Currying
const sum = a => b => b ? sum(a + b) : a;

console.log(sum(1)(2)(3)(4)());
8. Currying vs Partial Application

Many developers confuse these two.

Currying

Each function takes one argument only.

Example

f(a)(b)(c)

Example code

const multiply = a => b => c => a * b * c;

console.log(multiply(2)(3)(4));
Partial Application

Functions take multiple arguments at once.

Example

f(a)(b,c)

Code

function multiply(a) {
  return function (b, c) {
    return a * b * c;
  };
}

console.log(multiply(2)(3,4));
Difference Table
Feature	Currying	Partial Application
Arguments per function	1	Multiple
Function calls	f(a)(b)(c)	f(a)(b,c)
Use case	Functional programming	Code reuse
9. Manipulating DOM using Currying

Example HTML

<h1 id="header">Hello Piyush</h1>

Goal

Hello Roadside Coder
Currying Solution
const updateElemText =
  id =>
  content =>
  document.querySelector(`#${id}`).textContent = content;

Usage

const updateHeader = updateElemText("header");

updateHeader("Hello Roadside Coder");

This changes the DOM text.

10. Generic Curry Function (Important Interview)

Convert

f(a,b,c)

to

f(a)(b)(c)
Implementation
function curry(func) {

  return function curried(...args) {

    if (args.length >= func.length) {

      return func(...args);

    } else {

      return function (...next) {

        return curried(...args, ...next);

      };

    }

  };

}
Example
const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);

console.log(curriedJoin(1)(2)(3));
console.log(curriedJoin(1,2)(3));
console.log(curriedJoin(1)(2,3));

Output

1_2_3
1_2_3
1_2_3
11. Currying with Placeholder

Sometimes arguments are skipped.

Example

curried(_,2)(1,3)
Placeholder Implementation
curry.placeholder = Symbol();

Helper function merges arguments.

It replaces placeholder with new arguments.

This is advanced currying used in lodash.

12. Real World Uses of Currying

Currying is used in:

React
event handlers

Example

handleClick(id)(event)
Functional Libraries

Libraries using currying:

lodash

ramda

redux

Configuration Functions

Example

fetch(url)(options)
13. Common Interview Questions
Q1 What is currying?

Currying converts a function

f(a,b,c)

into

f(a)(b)(c)
Q2 What is difference between currying and closure?

Currying uses closures to remember previous arguments.

Q3 Where is currying used?

React

Redux

Functional programming

Event handling

Q4 What is infinite currying?

A function that accepts arguments until termination.

Example

sum(1)(2)(3)(4)()
Final Interview Definition (Best Answer)

If interviewer asks "What is Currying?"

Answer like this:

Currying is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of functions each taking a single argument. It works using closures and helps in code reuse, function composition, and creating reusable utility functions.

-----------------------------------------------------------------------------------------------------------------------------




