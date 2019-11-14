# Advanced tasks for JavaScript
List of popular and important tasks for javascript which can be used for advanced skills testing

## The "this" problem
[Demo](https://github.com/josefjadrny/advanced-tasks-javascript/blob/master/tasks/theThisProblem.js)

**Question:**
What will be printed as a result and why?

**Answer:**
>Hi
>
>undefined

This (*=The context*) is a special keyword inside each function and its value depends on how the function was called. 
As a result executed function is called with different context - setTimeout.

You can fix this by passing a right context with **bind**.
>setTimeout(test.echo.bind(test), 100)
