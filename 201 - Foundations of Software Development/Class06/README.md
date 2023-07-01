# [**JavaScript object basics**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

## [**Object basics**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#object_basics)

>An object is a collection of related data and/or functionality. These usually consist of several variables and functions (which are called properties and methods when they are inside objects). Let's work through an example to understand what they look like.

>The value of an object member can be pretty much anything — in our person object we've got a number, an array, and two functions. The first two items are data items, and are referred to as the object's properties.

>When the object's members are functions there's a simpler syntax.

>An object like this is referred to as an object literal — we've literally written out the object contents as we've come to create it. This is different compared to objects instantiated from classes, which we'll look at later on.

>Sending a single object is much more efficient than sending several items individually, and it is easier to work with than an array, when you want to identify individual items by name.

## [**Dot notation**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#dot_notation)

>Above, you accessed the object's properties and methods using dot notation. The object name (person) acts as the namespace — it must be entered first to access anything inside the object. Next you write a dot, then the item you want to access — this can be the name of a simple property, an item of an array property, or a call to one of the object's methods.

## [**Bracket notation**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#bracket_notation)

>Bracket notation provides an alternative way to access object properties. Instead of using dot notation like this:
>>
>>This looks very similar to how you access the items in an array, and it is basically the same thing — instead of using an index number to select an item, you are using the name associated with each member's value. It is no wonder that objects are sometimes called associative arrays — they map strings to values in the same way that arrays map numbers to values.
>
>This looks very similar to how you access the items in an array, and it is basically the same thing — instead of using an index number to select an item, you are using the name associated with each member's value. It is no wonder that objects are sometimes called associative arrays — they map strings to values in the same way that arrays map numbers to values.

## [**Setting object members**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#setting_object_members)

>So far we've only looked at retrieving (or getting) object members — you can also set (update) the value of object members by declaring the member you want to set (using dot or bracket notation), like this:

>person.age = 45;
>
>person["name"]["last"] = "Cratchit";

Try entering the above lines, and then getting the members again to see how they've changed, like so:

>person.age;
>
>person["name"]["last"];

Not only can values be updated, they can also be created. Try these in the JS console:

>person["eyes"] = "hazel";
>
>person.farewell = function () {
>
>  console.log("Bye everybody!");
>
>.};

Test

>person["eyes"];
>
>person.farewell();

Bracket notation can set non member values and member names.

>const myDataName = "height";
>
>const myDataValue = "1.75m";
>
>person[myDataName] = myDataValue;

>person.height;

# [**What is "this"?**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#what_is_this)

>introduceSelf() {
>
>  console.log(`Hi! I'm ${this.name[0]}.`);
>}
>

>You are probably wondering what "this" is. The this keyword refers to the current object the code is being written inside — so in this case this is equivalent to person. So why not just write person instead?
>
>Well, when you only have to create a single object literal, it's not so useful. But if you create more than one, this enables you to use the same method definition for every object you create.
>
>In this case, person1.introduceSelf() outputs "Hi! I'm Chris."; person2.introduceSelf() on the other hand outputs "Hi! I'm Deepti.", even though the method's code is exactly the same in each case. This isn't hugely useful when you are writing out object literals by hand, but it will be essential when we start using constructors to create more than one object from a single object definition, and that's the subject of the next section.

# [**Introducing constructors**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#introducing_constructors)

Object literals are good for one object. 

>We would like a way to define the "shape" of an object — the set of methods and the properties it can have — and then create as many objects as we like, just updating the values for the properties that are different.

From example in html document:

This function creates and returns a new object each time we call it. The object will have two members:

* a property name
* a method introduceSelf().

>Note that *createPerson()* takes a parameter name to set the value of the name property, but the value of the *introduceSelf()* method will be the same for all objects created using this function. This is a very common pattern for creating objects.

Now we can create as many objects as we like, reusing the definition:

*example in html*

This works fine but is a bit long-winded: we have to create an empty object, initialize it, and return it. A better way is to use a constructor. A constructor is just a function called using the new keyword. When you call a constructor, it will:

- create a new object
- 
- bind this to the new object, so you can refer to this in your constructor code
- 
- run the code in the constructor
- 
- return the new object.

Constructors, by convention, start with a capital letter and are named for the type of object they create. So we could rewrite our example like this:

*example in html*

# [**You've been using objects all along**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#youve_been_using_objects_all_along)

Here are some examples of when I have used the dot notation method:

- strings

>myString.split(",");
>
>You were using a method available on a String object. Every time you create a string in your code, that string is automatically created as an instance of String, and therefore has several common methods and properties available on it.

- accessing document object models:

>const myDiv = document.createElement("div");
>
>const myVideo = document.querySelector("video");

You were using methods available on a Document object. For each webpage loaded, an instance of Document is created, called document, which represents the entire page's structure, content, and other features such as its URL. Again, this means that it has several common methods and properties available on it.

The same is true of pretty much any other built-in object or API you've been using — Array, Math, and so on.

*Note: Note that built in objects and APIs don't always create object instances automatically.*