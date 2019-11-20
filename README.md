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

First sub-task, the easier one returns an object as a named constant, where is a function call as value of named key "test".  
Second sub-task is valid notation of labels in JavaScript. It is a reference which can be called by "continue" or "break".

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

First sub-task is a typical example of variable hoisting when variable is declared later.  
Second sub-task is an ordinary output of declared and defined variable.  
Third sub-task is another example of hoisting in function scope when variable is redeclared in functional scope.  
Fourth sub-task is same as second. Global scope is not affected by redeclaring variable in function scope.  
