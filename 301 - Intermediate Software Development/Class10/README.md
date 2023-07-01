# In memory storage


## [Understanding the JavaScript Call Stack](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4)

What is a 'call'?

1. In JavaScript, a 'call' refers to the execution of a function. 

- When a function is called, it is added to the call stack, and its code is executed.

2. How many 'calls' can happen at once?

- In JavaScript, only one call can happen at a time. JavaScript is single-threaded, meaning it can only execute one piece of code at a time. Each function call is added to the call stack, and the JavaScript engine executes them one after another.

3. What does LIFO mean?

- LIFO stands for "Last-In, First-Out." It is a principle that describes the order in which function calls are processed in the call stack. The last function that is pushed into the call stack is the first one to be popped out and executed.

4. Draw an example of a call stack and the functions that would need to be invoked to generate that call stack.

5. What causes a Stack Overflow?

- A stack overflow occurs when there is a recursive function (a function that calls itself) without a proper exit condition.

## [JavaScript error messages](https://codeburst.io/javascript-error-messages-debugging-d23f84f0ae7c)


1. What is a Reference Error ?

- occurs when you try to use a variable or function that hasn't been declared or defined. It indicates that the interpreter or compiler cannot find a reference to the specified identifier.

2. What is a Syntax Error?

- occurs when the code violates the rules of the programming language's syntax. It means the code is not written correctly according to the grammar and structure expected by the language. Syntax errors typically prevent the code from being executed.

3. What is a range Error?

- occurs when a value is not within an acceptable range or set of values. For example, it could happen when trying to access an array element with an index that is out of bounds or when using a number that is outside the valid range for a specific operation.

4. What is a Type Error?

- occurs when an operation is performed on a value of an inappropriate type. It indicates that the code is trying to use a value or perform an operation that is not compatible with the data type or object being used.

5. What is a Breakpoint?

- debugging feature provided by programming tools and environments. It allows you to pause the execution of your code at a specific line or condition, enabling you to inspect the program's state and values at that point.

6. What does the word debugger do in code?

- tool or software feature used during the development and testing of code to identify and fix errors or bugs. It allows programmers to step through their code, set breakpoints, inspect variables, and observe the program's execution in detail. A debugger helps in understanding and resolving issues by providing a controlled environment for code analysis and debugging.

## [JavaScript errors reference on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)