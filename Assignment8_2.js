//In JavaScript, a scope refers to the accessibility of variables, objects, and functions in a particular part of a program. A closure, on the other hand, is a function that has access to variables in its outer (enclosing) function's scope chain, even after the outer function has returned.

//In other words, a closure is created when a function is defined within another function, and the inner function has access to the variables and parameters of the outer function, even after the outer function has finished executing.

//a closure is a type of scope, but not all scopes are closures. A closure is created when a function has access to variables in its outer function's scope chain, and those variables are still accessible even after the outer function has returned.

//Here is an example to illustrate the difference between scope and closure:


function outerFunction() {
    let outerVariable = "hello";
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const closure = outerFunction();
  closure(); // logs "hello"
  