# React and Forms

# [Forms](https://legacy.reactjs.org/docs/forms.html)

1. What is a ‘Controlled Component’?

"An input form element whose value is controlled by React in this way is called a 'controlled component.'"

2. Should we wait to store the users responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why.

3. How do we target what the user is entering if we have an event handler on an input field?


```
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```


```
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

&nbsp;

&nbsp;

&nbsp;

# [Conditional Ternary Operator](https://codeburst.io/javascript-the-conditional-ternary-operator-explained-cac7218beeff)

1. Why would we use a ternary operator?

We can use a ternary operator when we want to keep our code DRY, i.e. write less lines of code.

2. Rewrite the following statement using a ternary statement:

```
if(x===y){
  console.log(true);
} else {
  console.log(false);
}
```

```
*condition ? value if true : value if false*
```

**Here’s what you need to know:**

1. The condition is what you’re actually testing. The result of your condition should be true or false or at least coerce to either boolean value.

2. A ? separates our conditional from our true value. Anything between the ? and the : is what is executed if the condition evaluates to true.

3. Finally a : colon. If your condition evaluates to false, any code after the colon is executed.

The most important thing to note is the order of operations. Lets add some parenthesis to help you visualize the order in which code is executing:

```
*person.driver = ((person.age >=16) ? 'Yes' : 'No';)*
```

&nbsp;

## Things I want to know more about:

N/A

&nbsp;


Additional Resources:

[Conditional Rendering](https://legacy.reactjs.org/docs/conditional-rendering.html)


