# Advanced tasks for JavaScript
List of popular and important tasks for JavaScript which can be used for advanced skills testing.

## The "this" problem
[Demo](https://github.com/josefjadrny/advanced-tasks-javascript/blob/master/tasks/theThisProblem.js)

**Question:**
What will be printed as a result and why?

**Answer:**
>Hi
>
>undefined

This (*=The context*) is a special keyword inside each function and its value depends on how the function was called. 
As a result, executed function is called with different context from setTimeout.

You can fix this by passing the right context with **bind**.
`setTimeout(test.echo.bind(test), 100)`

## Labels
[Demo](https://github.com/josefjadrny/advanced-tasks-javascript/blob/master/tasks/labels.js)

**Question:**
Are both sub-tasks valid and why? What will be printed as a result?

**Answer:**
>Hi Josef
>
>Hi Josef

1. First sub-task, the easier one returns an object as a named constant, where is a function call as value of named key "test".  
1. Second sub-task is valid notation of labels in JavaScript. It is a reference which can be called by "continue" or "break".

## Variable hoisting
[Demo](https://github.com/josefjadrny/advanced-tasks-javascript/blob/master/tasks/varHoisting.js)

**Question:**
What will be printed as a result of those sub-tasks and why?

**Answer:** 
>undefined
>
>Hello!
>
>undefined
>
>Hello!

In JavaScript, declarations of variables (`var`) and functions are hoisted. That means those variables can be used before they are declared inside its scope (functional or global).
This is why this code works. When the variable is hoisted and used before declaration, it's value is `undefined`.

1. First sub-task is a typical example of variable hoisting when variable is declared later.  
1. Second sub-task is an ordinary output of declared and defined variable.  
1. Third sub-task is another example of hoisting in function scope when variable is redeclared in functional scope.  
1. Fourth sub-task is same as second. Global scope is not affected by redeclaring variable in function scope.

## Semicolons
[Demo](https://github.com/josefjadrny/advanced-tasks-javascript/blob/master/tasks/semicolons.js)

**Question:**
Is this syntax valid? What will be printed as a result?

**Answer:** 
No it is not valid.
>TypeError: Cannot read property 'Joe' of undefined

Semicolons may be omitted in most cases because a newline implies a semicolon. But as always, there are exceptions.
JavaScript does not assume a semicolon before square brackets. So code above is executed as a single statement (=_one-liner_) and results in Error.

## Floating point problem
[Demo](https://github.com/josefjadrny/advanced-tasks-javascript/blob/master/tasks/floatingPoint.js)

**Question:**
What will be printed as a result?

**Answer:** 
>true
>
>false

It's look like math does not work properly in Javascript, but this problem is related with how computers works and how numbers are stored.
Let's skip a deep computer science lesson, we can just say that computer's cannot accurately represent a number like 0.1, 0.2 or 0.3.
Those numbers are interpreted as their nearest number and this behavior can results in error.
In fact, result of second sub-task is: `0.30000000000000004`

## Equality Operators
[Demo](https://github.com/josefjadrny/advanced-tasks-javascript/blob/master/tasks/equalityOperator.js)

**Question:**
What will be printed as a result of those sub-tasks?

**Answer:** 
>false
>
>true
>
>false
>
>true
>
>false
>
>false

1. NaN is not equal to itself or anything else.
1. Null is a primitive but type of null is surprisingly an object. This is a known bug.
1. Primitives are compared by their value, objects are compared by their reference.
1. Null and undefined are considered equal to each other and to nothing else
1. Same as previous
1. Same as previous