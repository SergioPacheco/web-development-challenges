## 1. Scope

An important idea in programming is scope. Scope defines where variables can be accessed or referenced. While some variables can be accessed from anywhere within a program, other variables may only be available in a specific context.

You can think of scope like the view of the night sky from your window. Everyone who lives on the planet Earth is in the global scope of the stars. The stars are accessible globally. Meanwhile, if you live in a city, you may see the city skyline or the river. The skyline and river are only accessible locally in your city, but you can still see the stars that are available globally.

Over the next few exercises, we’ll explore how scope relates to variables and learn best practices for variable declaration.

## 2. Blocks and Scope

Before we talk more about scope, we first need to talk about blocks.

We’ve seen blocks used before in functions and if statements. A block is the code found inside a set of curly braces {}. Blocks help us group one or more statements together and serve as an important structural marker for our code.

A block of code could be a function, like this:

```javascript
const logSkyColor = () => {
  let color = 'blue';
  console.log(color); // blue
};
```

Notice that the function body is actually a block of code.

Observe the block in an if statement:

```javascript
if (dusk) {
  let color = 'pink';
  console.log(color); // pink
}
```
