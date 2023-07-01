# React and Forms

## [React Docs - Forms](https://legacy.reactjs.org/docs/forms.html)

* In React, form elements are treated as "controlled components". This means that the state of the form is controlled by React, not the DOM.

* To create a controlled component, you need to add an event handler for the input's onChange event. This event handler should update the component's state with the new value of the input.

* You can then use the component's state to set the value of the input. This means that the input's value will always reflect the current state of the component.

* You can also use the component's state to control other aspects of the form, such as the disabled state of a button or the selected value of a dropdown.

* In React, you can use the onSubmit event of a form to handle form submission. To prevent the default form submission behavior, you should call event.preventDefault() in your event handler.

* You can use the value prop to set the default value of an input. This can be useful when you want to reset the form to a default state.

* You can use the defaultValue prop to set the initial value of an input that can be changed by the user.

* In React, you can use the ref attribute to get a reference to a DOM node. This can be useful when you need to interact with the DOM directly, such as when you need to focus an input field.

* In some cases, you may want to use uncontrolled components instead of controlled components. Uncontrolled components rely on the DOM to store the form state, rather than using React's state. This can be useful for simple forms where you don't need to track every change to the form.

* In React, you can use third-party libraries to handle form validation. Some popular options include Formik, React Hook Form, and Yup.

&nbsp;

1. **What is a ‘Controlled Component’?** A controlled component in react is a form element that receives its value from it's parent and uses a callback function to update the parents state whenever the value of the controlled component changes.

2. **Should we wait to store the users responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why.** Generally you want to update the state as soon as they enter their feedback. React is built to make this simple and it allows you to give user realtime feedback

3. **How do we target what the user is entering if we have an event handler on an input field?** the event object that is passed to an event listener behind the scenes has access to the element that the event occurred on and the value stored in it e.target.value

4. **Why would we use a ternary operator?** When you want to store value of the expression in a variable or you just want to make your code more concise

5. **Rewrite the following statement using a ternary statement:**
    ```javascript
    if(x===y){
    console.log(true);
    } else {
    console.log(false);
    }
    ```

    ```javascript
    console.log( x===y ? true : false )
    ```

&nbsp;

&nbsp;

## [The Conditional (Ternary) Operator Explained](https://codeburst.io/javascript-the-conditional-ternary-operator-explained-cac7218beeff)

* The ternary operator is a shorthand way of writing conditional statements in JavaScript.

* It consists of three parts: a condition, a question mark (? anything before this is asking if its true), and two expressions separated by a colon (: is else).


* If the condition evaluates to true, the first expression is executed; if it evaluates to false, the second expression is executed.

* The ternary operator is often used as a shortcut for simple if-else statements.

* It can also be nested inside other ternary operators to create more complex conditional expressions.

* One important thing to note is that the ternary operator can make code more difficult to read and understand, especially if it is used excessively or inappropriately.

* It is best used for simple, one-line conditional statements where the code is still easy to follow.

* The article provides several examples of how to use the ternary operator in different contexts, such as setting default values or checking for null or undefined values.

* Finally, the article concludes with some tips on when to use and when to avoid the ternary operator in JavaScript code. 

## Things I would like to learn more about
