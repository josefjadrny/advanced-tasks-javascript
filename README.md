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