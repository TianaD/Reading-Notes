# [JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

This lesson on Javascript matters because in congruency with what I have learned thus far regarding html and css, Javascript allows programmers to add interactivity among other things to webpages.

>*Do not confuse JavaScript with the Java programming language — JavaScript is not 'Interpreted Java'. Both 'Java' and 'JavaScript' are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have very different syntax, semantics, and use.*

JavaScript documentation of core language features (pure ECMAScript, for the most part) includes the following:

- [The JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

- [The JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

&nbsp;

&nbsp;

# [Introduction to JavaScript - basic output](https://code-maven.com/introduction-to-javascript)

Javascript now runs on servers, though previously, it did not.

&nbsp;

## Input Output

>The very first thing we need to learn is how to interact with the JavaScript code running in the browse. There are a number of way JavaScript can display text for the user (output). The most simple one is by using the alert function:
>
>**alert**
>
>This will show a pop-up in the browser with the text. (You can click on Try! that will open the specific script in a separate window.) The alert() function is actually rarely used, but it is an easy way to show the use of JavaScript.
>
>examples/js/alert.html
>
>script language="javascript"
>
>alert("Hello World");
>
>/script
>
>
>If you'd like to try it yourself, open your editor and create a file with .html extension (for example hello.html) and put the above code in the file. Then switch to your browser and open the file with the browser. (Most browsers will let you do that using the File/Open File menu option.)
>
>**document.write**
>>
>>examples/js/document_write.html
>>
>>First line
>>script
>>
>**document.write("<h1>Hello World</h1>");**
>>
>>/script
>>
>>Last line
>
>&nbsp;
>
>In this example we have some text (First line), then the JavaScript code, and then some more text (Last line). The JavaScript code uses the document.write function to change the content of the page. It will embed the html snippet <h1>Hello World</h1> after the "First line", but before the "Last line".
>
>This function was often used when one wanted to change what's shown. Today, there are some more advanced techniques.
>
>**console.log**
>>Finally let's see how developers usually print out debugging information.
>>
>>examples/js/console.html
>>
>>script
>>
>>console.log("Hello World");
>>
>>/script

&nbsp;

&nbsp;

# [JavaScript input with prompt and confirm](https://code-maven.com/javascript-input-with-prompt-and-confirm)

>Once we know how to show output from JavaScript, let's have a quick look at two ways to receive input. Probably neither of these is use a lot, but they can be used easily to play around with the basics.
>
>**prompt**
>
>The first one is called prompt. It will show a pop-up window with the text provided as the first parameter and with a textbox the user can fill in. When the user presses OK, the value in the text box will be returned by the prompt() function. Then, in this example we use the document.write method to update the html with the text.
>
>>examples/js/prompt.html
>>
>>script
>>
>>var name = prompt("Your name:", "");
>>
>>document.write("Hello ", name);
>>
>>/script
>
>
>The textbox will be pre-filled with the content of the second parameter. This can be very useful if we would like to ask the user to edit some value. We can pre-fill the box with the old value.
>
>>examples/js/edit.html
>>
>>script
>>
>>var name = prompt("Please correct your e-mail address:", "foo@bar.co");\
>>
>>document.write("Your e-mail address is ", name);
>>
>>/script
>
>In either case, if the user presses cancel or hits the ESC the prompt() function will return null.
>
>**confirm**
>
>The other pop-up is not really an input method. It allows the developer to ask a Yes/No question. Calling the confirm() function will show a pop-up window with the provided texts and with two buttons. If the user presses OK the confirm() function will return true, if the user presses cancel or hits the ESC key, the function will return false.
>
>Of course in order for this to make more sense you'll have to understand what true and false really mean and what this if - else construct does. If you have programming background then you probably already understand the code, and even if you don't have programming background you might figure out.
>
>That code can basically be translated to the following English sentence:
>
>If confirm returned true, print "Hello World", otherwise print "OK, I won't print it."
>
>Or even better:
>
>If the user presses OK when we asked "Shall I print Hello World?", then print "Hello World", otherwise print "OK, I won't print it."
>
>>examples/js/confirm.html
>>
>>script
>>
>>if (confirm("Shall I print Hello World?")) {
>>
>>    document.write("Hello World");
>>
>>} else {
>>
>>    document.write("OK, I won't print it.");
>>}
>>
>>/script


