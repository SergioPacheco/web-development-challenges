## 1. Arrays

Organizing and storing data is a foundational concept of programming.

One way we organize data in real life is by making lists. Let’s make one here:

New Year's Resolutions:

1. Keep a journal
2. Take a falconry class
3. Learn to juggle
   Let’s now write this list in JavaScript, as an array:

```javascript
let newYearsResolutions = [
  'Keep a journal',
  'Take a falconry class',
  'Learn to juggle',
];
```

Arrays are JavaScript’s way of making lists. Arrays can store any data types (including strings, numbers, and booleans). Like lists, arrays are ordered, meaning each item has a numbered position.

Here’s an array of the concepts we’ll cover:

```javascript
let concepts = ['creating arrays', 'array structures', 'array manipulation'];
```

## Cheat sheet

### Accessing Elements

- `a1.concat(a2)` - Return new array by joining arrays a1 and a2 together
- `a1.join(separator)` - Join all elements of array a1 into a string separated by `separator` arg
- `a1.slice(start, end)` - Extract a section `from start to end` of array a1 and return a new array
- `a1.indexOf(obj)` - Return first index of obj within array a1
- `a1.lastIndexOf(obj)` - Return last index of obj within array a1

### Iterating I

- `a1.forEach(fn)` - Calls function fn for each element in the array a1
- `a1.every(fn)` - Return true if every element in array a1 satisfies provided testing function fn
- `a1.some(fn)` - Return true if at least one element in array a1 satisfies provided testing function fn
- `a1.filter(fn)` - Create a new array with all elements of array a1 which pass the filtering function fn

### Iterating II

- `a1.map(fn)` - Create a new array with results of calling function fn on every element in array a1
- `a1.reduce(fn)` - Apply a function fn against an accumulator and each value (from left to right) of the array as to reduce it to a single value
- `a1.reduceRight(fn)` - Apply a function fn against an accumulator and each value (from right to left) of the array as to reduce it to a single value

### Mutating I

- `a1.pop()` - Remove and return `last` element from array a1
- `a1.push(obj)` - Add obj to end of array a1 and return `new length`
- `a1.reverse()` - Reverse order of elements of array a1 in place
- `a1.sort()` - Sortthe elements of array a1 in place
- `a1.splice(start, deleteCount, items)` - Change content of array a1 by removing existing elements and/or adding new elements
- `a1.unshift(obj)` - Add obj to `start` of array a1 and return new length

### General I

- `a1.toString()` - Return a string representing array a1 and its elements (same as a1. join(','))
- `a1.toLocaleString()` - Return a localized string representing array a1 and its elements (similar to a1.join(','))
- `Array.isArray(var)` - Return true if var is an array
- `a1.length` - Return length of array a1
- `a1[0]` - Access first element of array a1

## 12. Review Arrays

- Arrays are lists that store data in JavaScript.
- Arrays are created with brackets [].
- Each item inside of an array is at a numbered position, or index, starting at 0.
- We can access one item in an array using its index, with syntax like: myArray[0].
- We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';
- Arrays have a length property, which allows you to see how many items are in an array.
- Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.
- Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the documentation.
- Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. However, a variable declared with const - cannot be reassigned.
- Arrays mutated inside of a function will keep that change even outside the function.
- Arrays can be nested inside other arrays.
- To access elements in nested arrays chain indices using bracket notation.
