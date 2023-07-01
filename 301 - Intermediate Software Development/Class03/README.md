# [**List and Keys Article**](https://legacy.reactjs.org/docs/lists-and-keys.html)

1. What does .map() return?
.map returns array

2. If I want to loop through an array and display each value in JSX, how do I do that in React?

I can use .map and a component in the function

3. Each list item needs a unique ____.
key

4. What is the purpose of a key?
"A 'key' is a special string attribute you need to include when creating lists of elements. We’ll discuss why it’s important in the next section."


# [**The Spread Operator Article**](https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab)

1. What is the spread operator?

"In JavaScript, spread syntax refers to the use of an ellipsis of three dots (…) to expand an iterable object into the list of arguments."

It "unarrays" the array.

It makes all the elements of the array parameters.

2. List 4 things that the spread operator can do.

"The … spread operator is useful for many different routine tasks in JavaScript, including the following:

- Copying an array
- Concatenating or combining arrays
- Using Math functions
- Using an array as arguments
- Adding an item to a list
- Adding to state in React
- Combining objects
- Converting NodeList to an array"

3. Give an example of using the spread operator to combine two arrays.

```
[...["😋😛😜🤪😝"]] // Array [ "😋😛😜🤪😝" ]
[..."🙂🙃😉😊😇🥰😍🤩!"] // Array(9) [ "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍", "🤩", "!" ]
```

```
const hello = {hello: "😋😛😜🤪😝"}
const world = {world: "🙂🙃😉😊😇🥰😍🤩!"}
```

```
const helloWorld = {...hello,...world}
console.log(helloWorld) // Object { hello: "😋😛😜🤪😝", world: "🙂🙃😉😊😇🥰😍🤩!" }
```

4. Give an example of using the spread operator to add a new item to an array.

```
const myArray = [`🤪`,`🐻`,`🎌`]
const yourArray = [`🙂`,`🤗`,`🤩`]
const ourArray = [...myArray,...yourArray]
console.log(...ourArray) // 🤪 🐻 🎌 🙂 🤗 🤩
```

5. Give an example of using the spread operator to combine two objects into one.

```
const objectOne = {hello: "🤪"}
const objectTwo = {world: "🐻"}
const objectThree = {...objectOne, ...objectTwo, laugh: "😂"}
console.log(objectThree) // Object { hello: "🤪", world: "🐻", laugh: "😂" }
const objectFour = {...objectOne, ...objectTwo, laugh: () => {console.log("😂".repeat(5))}}
objectFour.laugh() // 😂😂😂😂😂
```

# [**How to Pass Functions Between Components Video**](https://www.youtube.com/watch?v=c05OL7XbwXU)

1. In the video, what is the first step that the developer does to pass functions between components?


2. In your own words, what does the increment function do?



3. How can you pass a method from a parent component into a child component?


4. How does the child component invoke a method that was passed to it from a parent component?


Bookmark and Review

[React Tutorial through ‘Declaring a Winner’](https://react.dev/learn/tutorial-tic-tac-toe)

[React Docs - Lifting State Up](https://legacy.reactjs.org/docs/lifting-state-up.html)