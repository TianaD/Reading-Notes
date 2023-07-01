# [**Getting started with the web**](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web)

### [Installing basic software](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software)

### [What will your website look like?](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like)

### [Dealing with files](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files)

### [HTML basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)

### [CSS basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)

### [JavaScript basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

### [Publishing your sample code](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Publishing_your_website)

### [How the web works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)

&nbsp;

# [JavaScript basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

>JavaScript is a powerful programming language that can add interactivity to a website. It was invented by Brendan Eich.
>
>JavaScript is versatile and beginner-friendly. With more experience, you'll be able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more!

#### **Variables**
"Variables are containers that store values. You start by declaring a variable with the let keyword, followed by the name you give to the variable:"

>let myVariable;

After declaring a variable, you can give it a value:

>myVariable = "Bob";

Also, you can do both these operations on the same line:

>let myVariable = "Bob";

You retrieve the value by calling the variable name:

>myVariable;

After assigning a value to a variable, you can change it later in the code:

>let myVariable = "Bob";
>myVariable = "Steve";

Note that variables may hold values that have different data types:

|  Variable  |  Explanation  |  Example  |
|------------|---------------|-----------|
| [String](https://developer.mozilla.org/en-US/docs/Glossary/String)   |This is a sequence of text known as a string. To signify that the value is a string, enclose it in single or double quote marks.| let myVariable = 'Bob'; or let myVariable = "Bob"; |
| [Number](https://developer.mozilla.org/en-US/docs/Glossary/Number)  | This is a number. Numbers don't have quotes around them.| let myVariable = 10; |
|  [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)  | This is a True/False value. The words true and false are special keywords that don't need quote marks. | let myVariable = true;
|  [Array](https://developer.mozilla.org/en-US/docs/Glossary/Array)    | This is a structure that allows you to store multiple values in a single reference. | let myVariable = [1,'Bob','Steve',10]; Refer to each member of the array like this: myVariable[0], myVariable[1], etc. |
|  [Object](https://developer.mozilla.org/en-US/docs/Glossary/Object)   | This can be anything. Everything in JavaScript is an object and can be stored in a variable. Keep this in mind as you learn. | let myVariable = document.querySelector('h1'); All of the above examples too. |

#### **Comments**

Comments are snippets of text that can be added along with code. The browser ignores text marked as comments. You can write comments in JavaScript just as you can in CSS:

/*
Everything in between is a comment.
*/

Copy to ClipboardCopy to Clipboard

If your comment contains no line breaks, it's an option to put it behind two slashes like this:

// This is a comment

Copy to ClipboardCopy to Clipboard

#### **Operators**

An operator is a mathematical symbol that produces a result based on two values (or variables). In the following table, you can see some of the simplest operators, along with some examples to try in the JavaScript console.

#### **Conditionals**

Conditionals are code structures used to test if an expression returns true or not. A very common form of conditionals is the if...else statement. For example:

#### **Functions**

Functions are a way of packaging functionality that you wish to reuse. It's possible to define a body of code as a function that executes when you call the function name in your code. This is a good alternative to repeatedly writing the same code. You have already seen some uses of functions. For example:

#### **Events**

-code structures that listen for activity in the browser, and run code in response.

 >document.querySelector("html").addEventListener("click" function () { alert("Ouch! Stop poking me!"); });

&nbsp;

# [**How do I start to design my website?**](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Design_and_accessibility/Thinking_before_coding)

What needs to be done, and in what order, to reach my goals?

&nbsp;

# [**Semantics**](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)

In programming, **Semantics** refers to the meaning of a piece of code — for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have" (rather than "what does it look like?".)

## **Semantics in JavaScript**

In JavaScript, consider a function that takes a string parameter, and returns an <li> element with that string as its textContent. Would you need to look at the code to understand what the function did if it was called build('Peach'), or createLiWithContent('Peach')?

## **Semantics in CSS**

In CSS, consider styling a list with li elements representing different types of fruits. Would you know what part of the DOM is being selected with div > ul > li, or .fruits__item?

## **Semantics in HTML**

In HTML, for example, the <h1> element is a semantic element, which gives the text it wraps around the role (or meaning) of "a top level heading on your page."

&nbsp;

# [**Getting Started with HTML**](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)

**What is HTML?**

> HTML (HyperText Markup Language) is a markup language that tells web browsers how to structure the web pages you visit. It can be as complicated or as simple as the web developer wants it to be. HTML consists of a series of elements, which you use to enclose, wrap, or mark up different parts of content to make it appear or act in a certain way. The enclosing tags can make content into a hyperlink to connect to another page, italicize words, and so on. For example, consider the following line of text:
>
>>My cat is very grumpy

&nbsp;

**HTML Attributes**

>All HTML elements can have attributes
>
>Attributes provide additional information about elements
>
>Attributes are always specified in the start tag
>
>Attributes usually come in name/value pairs like: name="value"

