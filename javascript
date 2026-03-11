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

---------------------------------------------------------------------------------------------------------------------------

1. What are Objects in JavaScript?
Definition (Interview Answer)

An object in JavaScript is a collection of key–value pairs used to store related data and functionality.

Example

let user = {
  name: "Roadside Coder",
  age: 24
};

Here:

name → key
"Roadside Coder" → value

Object structure

{
  key: value,
  key: value
}
2. Creating an Object

Objects are created using curly braces {}

Example

let user = {
  name: "Piyush",
  age: 24
};
3. Accessing Object Properties

There are two ways.

1. Dot Notation
console.log(user.name);

Output

Piyush
2. Bracket Notation
console.log(user["name"]);

Output

Piyush

Bracket notation is useful when:

key has spaces

key is dynamic

4. Modifying Object Properties

Example

user.name = "Alex";

console.log(user.name);

Output

Alex
5. Deleting Object Properties
delete user.age;

Object becomes

{ name: "Alex" }
6. Output Interview Question
Question
const func = (function(a){
  delete a;
  return a;
})(5);

console.log(func);

Output

5
Explanation

delete works only on object properties, not variables.

delete a → has no effect

So a remains 5.

7. Multiword Keys

Example

let user = {
  "like the video": true
};

Access

console.log(user["like the video"]);

Output

true

Dot notation cannot be used.

8. Computed Properties

Computed properties allow dynamic keys.

Example

let property = "firstName";
let name = "Piyush";

let person = {
  [property]: name
};

console.log(person.firstName);

Output

Piyush

Here

[property]

means

["firstName"]
9. Looping Through Objects

Use for...in loop

Example

let user = {
  name: "Piyush",
  age: 24
};

for (let key in user) {
  console.log(key);
  console.log(user[key]);
}

Output

name
Piyush
age
24
10. Output Question
const obj = {
  a: "one",
  b: "two",
  a: "three"
};

console.log(obj);

Output

{ a: "three", b: "two" }

Explanation

Object keys must be unique.

Last value overrides previous one.

11. Multiply Numeric Properties

Question

let nums = {
  a: 100,
  b: 200,
  title: "My nums"
};

Expected

{ a: 200, b: 400, title: "My nums" }

Solution

function multiplyByTwo(obj){

  for(let key in obj){

    if(typeof obj[key] === "number"){
      obj[key] *= 2;
    }

  }

}
12. Tricky Object Key Question
Question
const a = {};
const b = {key:"b"};
const c = {key:"c"};

a[b] = 123;
a[c] = 456;

console.log(a[b]);

Output

456
Explanation

Object keys are converted to strings.

b → "[object Object]"
c → "[object Object]"

So:

a["[object Object]"] = 456
13. JSON.stringify() and JSON.parse()
JSON.stringify()

Converts object → JSON string

Example

let obj = {name:"Alex"};

console.log(JSON.stringify(obj));

Output

'{"name":"Alex"}'
JSON.parse()

Converts JSON string → object

Example

let str = '{"name":"Alex"}';

console.log(JSON.parse(str));

Output

{ name: "Alex" }
14. Spread Operator with Strings

Example

[..."Lydia"]

Output

["L","y","d","i","a"]
15. Spread Operator with Objects
const user = { name: "Lydia", age: 21 };

const admin = {
  admin: true,
  ...user
};

console.log(admin);

Output

{ admin:true, name:"Lydia", age:21 }
16. JSON.stringify Replacer Example
const settings = {
 username:"lydiahallie",
 level:19,
 health:90
};

const data = JSON.stringify(settings,["level","health"]);

console.log(data);

Output

{"level":19,"health":90}

Because replacer array filters properties.

17. Arrow Function vs Regular Function in Objects

Example

const shape = {

 radius:10,

 diameter(){
   return this.radius * 2;
 },

 perimeter: () => 2 * Math.PI * this.radius

};

console.log(shape.diameter());
console.log(shape.perimeter());

Output

20
NaN
Why?

Arrow functions do not bind this.

18. Object Destructuring

Extract values from object.

Example

let user = {
 name:"Piyush",
 age:24
};

const {name} = user;

console.log(name);

Output

Piyush
19. Renaming in Destructuring

Example

const { name: myName } = { name:"Lydia" };

console.log(myName);

Output

Lydia
20. Referencing in Objects

Example

let c = { greeting:"Hey!" };
let d;

d = c;

c.greeting = "Hello";

console.log(d.greeting);

Output

Hello

Objects are stored by reference.

21. Object Comparison
console.log({a:1} == {a:1});
console.log({a:1} === {a:1});

Output

false
false

Because objects compare references, not values.

22. Reference Example
let person = { name:"Lydia" };

const members = [person];

person = null;

console.log(members);

Output

[{ name:"Lydia" }]

Because array holds reference copy.

23. Default Parameter Object Example
const value = { number:10 };

const multiply = (x = {...value}) => {
  console.log(x.number *= 2);
};

multiply();
multiply();
multiply(value);
multiply(value);

Output

20
20
20
40

Because default parameter creates new object each time.

24. Function Changing Object
function changeAgeAndReference(person){

  person.age = 25;

  person = {
    name:"John",
    age:50
  };

  return person;

}

const personObj1 = {
 name:"Alex",
 age:30
};

const personObj2 = changeAgeAndReference(personObj1);

Output

personObj1 → { name:"Alex", age:25 }
personObj2 → { name:"John", age:50 }
25. Shallow Copy

Example

const user = { name:"Jen", age:26 };

const copy = user;

copy.age = 24;

console.log(user);

Output

{ name:"Jen", age:24 }

Because same reference.

26. Deep Copy

Example

const user = { name:"Jen", age:26 };

const copy = JSON.parse(JSON.stringify(user));

copy.age = 24;

console.log(user);

Output

{ name:"Jen", age:26 }

Objects are independent.

27. Ways to Clone Object
Method 1
Object.assign({},obj)
Method 2
{...obj}
Method 3
JSON.parse(JSON.stringify(obj))
Method 4
structuredClone(obj)

-----------------------------------------------------------------------------------------------------------

1. What is this in JavaScript?
Definition (Interview Answer)

this is a special keyword that refers to the object that is currently executing the function.

Important rule:

The value of this depends on how a function is called, not where it is defined.

This is called runtime binding.

2. Types of this Binding

There are mainly two types mentioned in interviews.

1. Implicit Binding

Implicit binding happens when a function is called using an object.

Example

const user = {
  name: "Piyush",
  getName() {
    console.log(this.name);
  }
};

user.getName();

Output

Piyush

Here

this → user object

Because the function is called using

user.getName()
2. Explicit Binding

Explicit binding allows us to manually set this.

It is done using:

call()
apply()
bind()

Example

function greet() {
  console.log(this.name);
}

const user = { name: "Piyush" };

greet.call(user);

Output

Piyush
3. this in Global Scope

Example

console.log(this);

In browser:

window object

Example

let a = 5;
console.log(this.a);

Output

undefined

Because let variables are not attached to window object.

4. this Inside a Function

Example

function myFunction() {
  console.log(this);
}

myFunction();

Output (in browser)

window object

Because it is called as a regular function.

5. this in Arrow Functions

Arrow functions do not have their own this.

They inherit this from the surrounding scope.

Example

const myFun = () => {
  console.log(this);
};

myFun();

Output

window object
6. this Inside an Object Method

Example

let user = {
  name: "Piyush",
  age: 24,

  getDetails() {
    console.log(this.name);
  }
};

user.getDetails();

Output

Piyush

Because

this → user object
7. Nested Object Example

Example

let user = {
  name: "Piyush",
  age: 24,

  childObj: {
    newName: "Roadside Coder",

    getDetails() {
      console.log(this.newName, this.name);
    }
  }
};

user.childObj.getDetails();

Output

Roadside Coder undefined

Explanation

this → childObj

childObj has

newName

but no name property.

8. Arrow Function Inside Object

Example

let user = {
  name: "Piyush",

  getDetails: () => {
    console.log(this.name);
  }
};

user.getDetails();

Output

undefined

Because arrow functions inherit this from

global scope
9. Arrow Function Inside Method

Example

let user = {
  name: "Piyush",

  getDetails() {

    const nestedArrow = () => {
      console.log(this.name);
    };

    nestedArrow();
  }
};

user.getDetails();

Output

Piyush

Because arrow function inherits this from

parent function → user object
10. this in Classes

Example

class User {

  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }
}

const user = new User("Piyush");

user.getName();

Output

Piyush

this refers to the object created using new.

11. Interview Question 1
const user = {
  firstName: "Piyush!",
  getName() {

    const firstName = "Jen!";
    return this.firstName;

  }
};

console.log(user.getName());

Output

Piyush!

Explanation

this.firstName → object property

Not the local variable.

12. Interview Question 2
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

console.log(user.ref.name);

Output

Error

Explanation

makeUser() is called as regular function

this → undefined

So

user.ref → undefined
Correct Solution
function makeUser() {

  return {
    name: "Piyush",

    ref() {
      return this;
    }
  };

}

let user = makeUser();

console.log(user.ref().name);

Output

Piyush
13. Interview Question (setTimeout)
const user = {
  name: "Piyush",

  logMessage() {
    console.log(this.name);
  }
};

setTimeout(user.logMessage, 1000);

Output

undefined

Because function is executed as

regular function
Fix

Use bind.

setTimeout(user.logMessage.bind(user), 1000);

Output

Piyush
14. Arrow vs Normal Function Example
const user = {

  name: "Piyush",

  greet() {
    return `Hello, ${this.name}`;
  },

  farewell: () => {
    return `Goodbye, ${this.name}`;
  }
};

console.log(user.greet());
console.log(user.farewell());

Output

Hello, Piyush
Goodbye, undefined

Because arrow function does not bind this.

15. Calculator Object Example

Question: create calculator object.

Solution

let calculator = {

  read() {
    this.a = +prompt("a?");
    this.b = +prompt("b?");
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }

};

Usage

calculator.read();

console.log(calculator.sum());
console.log(calculator.mul());
16. Tricky Question
var length = 4;

function callback() {
  console.log(this.length);
}

const object = {
  length: 5,

  method(callback) {
    callback();
  }
};

object.method(callback, 1, 2);

Output

4

Explanation

callback() runs as regular function.

So

this → window
17. Another Tricky Question
var length = 4;

function callback() {
  console.log(this.length);
}

const object = {

  length: 5,

  method() {
    arguments[0]();
  }

};

object.method(callback, 1, 2);

Output

3

Explanation

arguments = {0:callback,1:1,2:2,length:3}

arguments[0]() sets

this → arguments
18. Method Chaining Example

Question

calc.add(10).multiply(5).subtract(30).add(10)

Solution

var calc = {

  total: 0,

  add(a) {
    this.total += a;
    return this;
  },

  subtract(a) {
    this.total -= a;
    return this;
  },

  multiply(a) {
    this.total *= a;
    return this;
  }

};

Usage

const result =
calc.add(10).multiply(5).subtract(30).add(10);

console.log(result.total);

Output

30
19. Important this Rules (Interview Summary)

1️⃣ this depends on how function is called

2️⃣ In object methods

this → object

3️⃣ In regular functions

this → window (browser)

4️⃣ Arrow functions

inherit this from parent scope

5️⃣ call, apply, bind can change this.

Final Interview Answer

If interviewer asks:

"What is this in JavaScript?"

Answer:

this is a special keyword that refers to the object that is currently executing the function. Its value is determined at runtime depending on how the function is invoked.
-----------------------------------------------------------------------------------------------------------------------


1. Why call, apply, and bind are used

Normally the value of this depends on how the function is called.

Sometimes we want to manually control this.

Example problem

var obj = { name: "Piyush" };

function sayHello(){
  return "Hello " + this.name;
}

console.log(sayHello());

Output

Hello undefined

Because

this → global object

So this.name is undefined.

To fix this we use:

call()
apply()
bind()

These methods belong to:

Function.prototype
2. call()
Definition (Interview Answer)

call() invokes a function immediately and allows you to specify the value of this.

Syntax

function.call(thisArg, arg1, arg2, ...)
Example
function sayHello(){
  return "Hello " + this.name;
}

var obj = { name: "Piyush" };

console.log(sayHello.call(obj));

Output

Hello Piyush

Explanation

this → obj
Example with arguments
function greet(day, status){
  return "Hello " + this.name + " today is " + day + " and feel " + status;
}

var obj = { name: "Piyush" };

console.log(greet.call(obj, "Tuesday", "good"));

Output

Hello Piyush today is Tuesday and feel good
3. apply()
Definition

apply() works like call() but arguments are passed as an array.

Syntax

function.apply(thisArg, [argsArray])
Example
function greet(day, status){
  return "Hello " + this.name + " today is " + day + " and feel " + status;
}

var obj = { name: "Piyush" };

console.log(greet.apply(obj, ["Tuesday", "good"]));

Output

Hello Piyush today is Tuesday and feel good
Difference Between call and apply
Feature	call()	apply()
Arguments	Passed individually	Passed as array
Execution	Immediate	Immediate

Example

func.call(obj, 1, 2)
func.apply(obj, [1,2])
4. bind()
Definition

bind() creates a new function with this permanently bound to a specific object.

Unlike call() and apply(), it does not execute immediately.

Syntax

function.bind(thisArg)
Example
function sayHello(){
  return "Hello " + this.name;
}

var obj = { name: "Piyush" };

const helloFn = sayHello.bind(obj);

console.log(helloFn());

Output

Hello Piyush

Explanation

bind → returns new function
5. Summary Table
Method	Executes Immediately	Arguments Format
call()	Yes	Individual
apply()	Yes	Array
bind()	No	Individual
6. Interview Question 1
const person = { name: "Piyush" };

function sayHi(age){
  return `${this.name} is ${age} years`;
}

console.log(sayHi.call(person, 24));
console.log(sayHi.bind(person, 24));

Output

Piyush is 24 years
[Function]

Explanation

bind → returns function
call → executes function
7. Interview Question 2
const age = 10;

var person = {
  name: "Piyush",
  age: 20,
  getAge(){
    return this.age;
  }
};

var person2 = { age: 24 };

console.log(person.getAge());

Output

20

Because

this → person

Using call

console.log(person.getAge.call(person2));

Output

24

Using apply

console.log(person.getAge.apply(person2));

Output

24

Using bind

console.log(person.getAge.bind(person2)());

Output

24
8. Interview Question 3
var status = "😎";

setTimeout(() => {

  const status = "😍";

  const data = {
    status: "🥑",

    getStatus(){
      return this.status;
    }
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this));

},0);

Output

🥑
😎

Explanation

First line

this → data

Second line

call(this) → global object
9. Interview Question 4 (Animals Example)

Given

const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" }
];

Function

function printAnimals(i){
  this.print = function(){
    console.log("#" + i + " " + this.species + ": " + this.name);
  };

  this.print();
}

Solution

for(let i = 0; i < animals.length; i++){
  printAnimals.call(animals[i], i);
}

Output

#0 Lion: King
#1 Whale: Queen
10. Appending Array using apply()

Problem

const array = ["a","b"];
const elements = [0,1,2];

array.push(elements);

Output

["a","b",[0,1,2]]

Correct solution

array.push.apply(array, elements);

Output

["a","b",0,1,2]
11. Finding max and min using apply()

Example

const numbers = [5,6,2,3,7];

let max = Math.max.apply(null, numbers);
let min = Math.min.apply(null, numbers);

console.log(max);
console.log(min);

Output

7
2

Equivalent to

Math.max(...numbers)
12. Bound Function Interview Question
function f(){
  console.log(this);
}

let user = {
  g: f.bind(null)
};

user.g();

Output

window object

Explanation

bind(null) fixes this → global object

this cannot be changed afterward.

13. Real-world Uses of call/apply/bind

These are used in:

Borrowing methods

Example

Array.prototype.slice.call(arguments)

Setting this in callbacks

React event handlers

Method chaining

Function reuse

14. Perfect Interview Answer

If interviewer asks:

"What is the difference between call, apply and bind?"

Answer:

call, apply, and bind are JavaScript methods used to explicitly set the value of this. call and apply execute the function immediately, while bind returns a new function with this permanently bound to the provided object.

--------------------------------------------------------------------------------------------------------------------------

1. What is a Promise?
Definition (Interview Answer)

A Promise is an object that represents the eventual result of an asynchronous operation.

It may either:

complete successfully

fail

and provides methods to handle both outcomes.

According to MDN:

A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

2. Why Promises are used

Before promises, asynchronous code was handled using callbacks, which caused:

callback hell

Example

getUser(function(user){
   getOrders(user,function(order){
      getPayment(order,function(payment){
         console.log(payment)
      })
   })
})

Promises solve this problem by making async code chainable and readable.

3. Promise States

A promise can be in three states.

State	Meaning
pending	initial state
fulfilled	operation completed successfully
rejected	operation failed

Example

let promise = new Promise((resolve, reject) => {
   setTimeout(() => resolve("Success"), 2000);
});

States

pending → fulfilled
4. Basic Promise Example
let promise = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve(100);
  },3000);

});

promise
  .then(val => console.log(val))
  .catch(err => console.log(err));

Output (after 3 seconds)

100
5. Promise Flow
Create Promise
      ↓
Async operation runs
      ↓
resolve() OR reject()
      ↓
then() OR catch() executes
6. Why Promise Polyfills?

A polyfill means implementing a feature manually to understand its internal working.

We create our own version of:

Promise

called

PromisePolyFill
7. Basic Structure of Promise Polyfill

A Promise constructor accepts an executor function.

new Promise((resolve, reject) => {})

So we implement:

function PromisePolyFill(executor) {

}

The executor receives

resolve
reject

functions.

8. Basic Polyfill Implementation
function PromisePolyFill(executor){

   let onResolve;

   this.then = function(callback){
      onResolve = callback;
      return this;
   }

   this.catch = function(callback){
      return this;
   }

}

Here we store the callback passed to then().

9. Adding Resolve Function

Now we implement resolve.

function resolve(val){
   onResolve(val);
}

Updated code

function PromisePolyFill(executor){

   let onResolve;

   function resolve(val){
      onResolve(val);
   }

   this.then = function(callback){
      onResolve = callback;
      return this;
   }

   this.catch = function(callback){
      return this;
   }

   executor(resolve);
}
10. Testing Polyfill
new PromisePolyFill((resolve) =>
   setTimeout(() => resolve(1000),1000)
).then(val => console.log(val));

Output

1000
11. Problem with Synchronous Execution

Example

new PromisePolyFill(resolve => resolve(1000))
   .then(val => console.log(val))

Error

TypeError: onResolve is not a function

Why?

Because

resolve() executes before then() assigns callback
12. Fixing Sync Problem

We introduce flags:

fulfilled
called
value

Purpose

fulfilled → promise resolved
called → callback executed
value → stored result
13. Full Promise Polyfill
function PromisePolyFill(executor){

 let onResolve, onReject;
 let fulfilled = false;
 let rejected = false;
 let called = false;
 let value;

 function resolve(v){

   fulfilled = true;
   value = v;

   if(typeof onResolve === "function"){
      onResolve(value);
      called = true;
   }

 }

 function reject(reason){

   rejected = true;
   value = reason;

   if(typeof onReject === "function"){
      onReject(value);
      called = true;
   }

 }

 this.then = function(callback){

   onResolve = callback;

   if(fulfilled && !called){
      called = true;
      onResolve(value);
   }

   return this;
 }

 this.catch = function(callback){

   onReject = callback;

   if(rejected && !called){
      called = true;
      onReject(value);
   }

   return this;
 }

 try{
   executor(resolve,reject)
 }
 catch(error){
   reject(error)
 }

}
14. PromisePolyFill.resolve()

Returns a resolved promise.

PromisePolyFill.resolve = (val) =>
  new PromisePolyFill((resolve,reject)=>{
     resolve(val);
  });

Example

PromisePolyFill.resolve(10)
.then(console.log)

Output

10
15. PromisePolyFill.reject()

Returns a rejected promise.

PromisePolyFill.reject = (reason) =>
  new PromisePolyFill((resolve,reject)=>{
     reject(reason);
  });

Example

PromisePolyFill.reject("Error")
.catch(console.log)

Output

Error
16. Promise.all Polyfill

Promise.all() waits for all promises to resolve.

Example

Promise.all([p1,p2,p3])

Polyfill

PromisePolyFill.all = (promises)=>{

 let results = [];
 let fulfilledCount = 0;

 return new PromisePolyFill((resolve,reject)=>{

   promises.forEach((promise,index)=>{

      promise.then(val=>{

         results[index] = val;
         fulfilledCount++;

         if(fulfilledCount === promises.length){
            resolve(results);
         }

      }).catch(reject)

   });

 })

}
17. Promise.race Polyfill

Returns the first settled promise.

function promiseRace(promises){

 return new Promise((resolve,reject)=>{

   promises.forEach(promise=>{
      promise.then(resolve)
      .catch(reject)
   })

 })

}
18. Promise.allSettled Polyfill

Waits for all promises regardless of success or failure.

Example output

[
 {status:"fulfilled", value:10},
 {status:"rejected", reason:"error"}
]

Implementation

function allSettled(promises){

 let mapped = promises.map(promise =>

   promise
   .then(value => ({
      status:"fulfilled",
      value
   }))
   .catch(reason => ({
      status:"rejected",
      reason
   }))

 )

 return Promise.all(mapped)

}
19. Promise.any Polyfill

Returns first fulfilled promise.

If all fail → reject.

function any(promises){

 let errors = [];
 let rejectedCount = 0;

 return new Promise((resolve,reject)=>{

   promises.forEach((p,index)=>{

      p.then(resolve)
      .catch(err=>{

        errors[index] = err;
        rejectedCount++;

        if(rejectedCount === promises.length){
           reject(errors);
        }

      })

   })

 })

}
20. Promise Methods Comparison
Method	Behavior
Promise.all	resolves when all promises resolve
Promise.race	resolves/rejects first
Promise.allSettled	waits for all results
Promise.any	resolves when first promise succeeds
21. Very Common Interview Questions
Q1 What are Promise states?
pending
fulfilled
rejected
Q2 Difference between then and catch
then → success handler
catch → error handler
Q3 What is promise chaining?
promise.then().then().catch()
Q4 Why promises are better than callbacks?
Avoid callback hell
Better readability
Better error handling
Final Interview Definition

If interviewer asks:

“What is a Promise?”

Answer:

A Promise is a JavaScript object used to handle asynchronous operations. It represents a value that may be available now, later, or never, and allows handling success using then() and errors using catch().

---------------------------------------------------------------------------------------------------------------

