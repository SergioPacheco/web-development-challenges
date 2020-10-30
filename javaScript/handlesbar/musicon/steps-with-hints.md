### Milestone Project (Web Development): Musicon

Objective: In this project, you will follow step-by-step instructions to transform the home and store page of a concise musical instruments storefront on the web called Musicon. It displays information about the store, musical instruments in that store and further contact.

The home and store page already have most HTML and CSS set up. You'll be making the following changes to both pages:

- Use HTML unordered lists, anchor tags and class attributes to create a navbar for multi-page navigation.
- Use CSS display, positioning, color and font declarations to add additional styles.
- Build two semantic templates from scratch using a client-side templating engine [Handlebars](https://handlebarsjs.com/).
- Use JavaScript objects, arrays and control flow alongside built-in Handlebars iteration and control flow helpers to display data from a JavaScript script.

The text editor already displays this website's **index.html**, **store.html**, **contact.html**, **style.css** and **main.js** document files. You can familiarize yourself with these files to have a better understanding of the initial structure of this project.

Assessment: Creating the navbar

Task: The navbar is currently missing. Let's add it so that we can navigate to different pages of the website.

In **index.html**, add an `<ul>` element with a class of `navbar` inside the `<div>` tag with a class of `nav`.

Hint: Make sure you include both the opening and closing tags for the `<ul>` element and indent it with two spaces. Place the `class` attribute within the opening `<div>` and `<ul>` tag:
```html
<div class='name'>
  <ul class='name'></ul>
</div>
```

Task: Inside the `<ul>` tag, add three `<li>` elements. Inside each `<li>` element, add an `<a>` element.

Hint: Make sure the `<a>` tag is inside the `<li>` tag and both are closed and within the opening and closing `<ul>` tags. Start a new line for each `<li>` and `<a>` tag and indent them with two spaces:
```html
<ul>
  <li>
    <a></a>
  </li>
  <li>
    <a></a>
  </li>
  <li>
    <a></a>
  </li>
</ul>
```

Task: Give the first `<li>` element a class of `current`.

The `class` will allow the `<li>` elements to be highlighted by a style sheet to indicate the current page.

Task: Give the first `<a>` element an `href` attribute with the value `'index.html'`.

Hint: Place the `href` attribute within the `<a>` tag:
```html
<a href='url'></a>
```

Task: Add the `Home` text between the opening and closing `<a>` tags.

Hint: Place the `Home` text inside the `<a>` tag:
```html
<a href='url'>text</a>
```

Task: Add the `href` attribute with the value `'store.html'` to the second `<a>` element, and give it the `Store` text.

Task: Add the `href` attribute with the value `'contact.html'` to the last `<a>` element, and give it the `Contact` text.

Task: Navigate to **store.html**, add the whole `<ul>` tag with the `.navbar` class inside the `<div>` with the `.nav` class.

- Delete the `.current` class from the first `<li>` element.
- Give the second `<li>` element the `.current` class.

Task: Navigate to **contact.html**, add the whole `<ul>` tag with the `.navbar` class inside the `<div>` with the `.nav` class.

- Delete the `.current` class from the first `<li>` element.
- Give the last `<li>` element the `.current` class.

Assessment: Adding the styles

Task: Navigate to **index.html**, add a `<link>` element before the closing `<head>` tag so that we can use an external style sheet to change the look of the home page.

- Add the `href` attribute to the `<link>` element and set it to be `'style.css'`.
- Add the `rel` attribute to the same element and set it to be `'stylesheet'`.

Hint: The `<link>` element is self-closing, so it is unnecessary to add a closing `<link>` tag. The complete `<link>` element will look like this:
```html
<link rel='value' href='url'>
```

Task: Navigate to **store.html**, follow the same steps as above to add a `<link>` element before the closing `<head>` tag so that we can use an external style sheet to change the look of the store page.

Hint: For example:
```html
<link rel='value' href='url'>
```

Task: Navigate to **contact.html**, add the same `<link>` element before the closing `<head>` tag so that we can use an external style sheet to change the look of the contact page.

Hint: For example:
```html
<link rel='value' href='url'>
```

Task: Navigate back to **index.html**, the `<div>` element with an id of `introduction` is currently positioned on top of the document.

Set its position property so that it is positioned relative to its closest positioned parent element, that is, the `<body>` element with an id of `home`.

Hint: Use `position: absolute;` to position an element relative to its closest positioned parent element:
```css
selector {
  position: absolute;
}
```

Task: Shift the `<div>` element with the `#introduction` id to the bottom right of the window.

- Offset it by 50% from the top.
- Offset it by 50% from the left.

Hint: Use the `top: 50%;` and `left: 50%;` on positioned elements to move them down and left by `50%` of the height and width of their parent element:
```css
selector {
  top: 50%;
  left: 50%;
}
```

Task: After adding the `top` and `left` offset property of the `#introduction` element, it shifted to the bottom right of the page. We can make it centered using the `margin` and `padding` property.

-	Add the negative top and left margin equal to half of the height and width of the element.
- Set the bottom and right margin to be 80 pixels and 0.
-	Create a 20-pixel padding.

Hint: The negative margin offsets the positive margin of an element by its negative value to set the margin. You can use the `margin` property with four values listed to set the top, right, bottom and left margin in one declaration:
```css
selector {
  margin: -171px 0 80px -500px;
  padding: 20px;
}
```

Task: Set the width and height of the same element to be 1000 and 342 pixels.

Hint: Use `width: 1000px;` to allow an element to have the width of 1000 pixels and `height: 342px;` for an element to take up the height of 342 pixels:
```css
selector {
  width: 1000px;
  height: 342px;
}
```

Task: Now the `#introduction` element is centered, but its text is not.

Change the `text-align` property to make the text of the element centered.

Hint: Use `text-align: center;` to center the text of an element:
```css
selector {
  text-align: center;
}
```

Task: Now, navigate to **store.html**, the `<div>` elements with a class of `instrument` are aligned vertically.

Add a declaration to the `.instrument` ruleset so that these elements can appear next to each other horizontally and have defined `width`.

Hint: `display: inline-block;` allows the elements to flow horizontally on the same line and allows for you to set their `width`:
```css
selector {
  display: inline-block;
}
```

Task: The `.instrument` elements do not seem to be flowing horizontally yet because they have no set width and the window is too narrow.

-	Set the width of each element to be 24%.
-	Expand the window by clicking the expanding link on the top right.

Hint: The value is 24% rather than 25% (100% / 4) because the `.instrument` elements have both margins and reserved line spacing in the HTML markup:
```css
selector {
  width: 24%;
}
```

Task: Set the `background-color` property to be the `#212529` hex color for the same elements.

Hint: `background-color` changes the background-color of an element:
```css
selector {
  background-color: #212529;
}
```

Task: Set the `border-radius` property to be `5px` for the same elements.

Hint: `border-radius` defines the arc of the borders of an element. The greater the value, the more arc the borders of an element are:
```css
selector {
  border-radius: 5px;
}
```

Assessment: Building the templates

Task: After creating the navbar and adding the styles, now it is time to build the semantic templates using Handlebars.

To include Handlebars, we use a `<script>` tag as follows:

`<script src='https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.min.js'></script>`

Navigate to **index.html**, add the `<script>` tag above on the line before **main.js**.

We are using the minified version of Handlebars from the [cdnjs](https://cdnjs.com/libraries/handlebars.js).

Hint: Copy the html below and paste the code on the line before `<script src='main.js'></script>`.
```html
<script src='https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.min.js'></script>
```

Task: Navigate to **store.html**, add the same `<script>` tag on the line before **main.js**.

Hint: Copy the html below and paste the code on the line before `<script src='main.js'></script>`.
```html
<script src='https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.min.js'></script>
```

Task: Navigate back to **index.html**, we can deliver a template to the browser by including it in a `<script>` tag.

- Add the `<script>` tag on the line before the `<script>` tag for Handlebars above.
- Give the same tag an id of `home-template`.
- Add the `type` attribute to the same tag and set it to be `'text/x-handlebars-template'`.

Hint: The complete `<script>` tag will look like this:
```html
<script id='home-template' type='text/x-handlebars-template'>
</script>
```

Task: Next, let's create a simple template for the home page.

Inside the newly created `<script>` tag, add a `<h1>`, `<p>` and `<a>` tag and indent them with two spaces.

Hint: For example:
```html
<script id='home-template' type='text/x-handlebars-template'>
  <h1></h1>
  <p></p>
  <a></a>
</script>
```

Task: Add the Handlebars expression to the `<h1>` and `<p>` tag.

- Between the opening and closing `<h1>` tags, add a `{{title}}` expression.
- Between the opening and closing `<p>` tags, add a `{{body}}` expression.

Hint: `{{}}` tells handlebars the content within the expression is going to be filled by the property of a `context` object. The `title` and `body` content match the title and body property of the `context` object:
```html
<h1>{{title}}</h1>
<p>{{body}}</p>
```

Task: Add the `href` attribute and text to the `<a>` tag.

- Give the `<a>` tag the `href` attribute and set it to be `'store.html'`.
- Between the opening and closing `<a>` tags, add the `Shop Now` text.

Task: Then, inside the `#introduction` element, add an id of `home-information` to the `.container` element and delete the nested tags.

-	Add an `id` attribute with the value `home-information` to the `<div>` tag that has the `.container` class.
-	Delete the `<h1>`, `<p>` and `<a>` tag from the `.container` element.

Task: Now, navigate to **main.js**, familiarize yourself with the provided `context` object on the top.

This is the `context` (actual data) to be filled into the template.

Task: Now it is time to write JavaScript!

- Use the `document.getElementById()` method to get an element with an id of `home-template` on the document.
- Declare a variable named `homeTemplateElement` using the `const` keyword and assign the element returned above to it.

Hint: The `document` method `getElementById()` returns an element object representing the element whose `id` property matches the specified string:
```js
const homeTemplateElement = document.getElementById('home-template');
```

Task: Next, let's get the HTML markup contained within the `homeTemplateElement`.

-	Access the `innerHTML` element property on the `homeTemplateElement` by using the dot notation.
-	Assign the HTML markup got above to a new variable named `homeTemplateSource`.

Hint: The element property `innerHTML` gets or sets the HTML markup contained within the element:
```js
const homeTemplateSource = homeTemplateElement.innerHTML;
```

Task: Then, compile a template source in JavaScript by using the `Handlebars.compile()` method.

-	Pass the `homeTemplateSource` into the `Handlebars.compile()` method as an argument.
-	Assign a compiled template returned above to a new variable named `homeTemplate`.

Hint: `Handlebars.compile()` is a built-in method from Handlebars that returns a compiled template:
```js
const homeTemplate = Handlebars.compile(homeTemplateSource);
```

Task: After calling the `Handlebars.compile()` method, a function is returned to the `homeTemplate`.

-	Pass the provided `context` object into the `homeTemplate` function as an argument.
-	Assign the HTML result returned above to a new variable named `homeHtml`.

Hint: The compiled template returned by the `Handlebars.compile()` method is a function that can be called with a `context` object as an argument to return the HTML result:
```js
const homeHtml = homeTemplate(context);
```

Task: Finally, let's render the HTML result in the browser.

-	Use the `document.getElementById()` method to get an element with an id of `home-information` on the document.
-	Set the `innerHTML` property on the element returned above to be the `homeHtml`.

Hint: It will look like this:
```js
document.getElementById('home-information').innerHTML = homeHtml;
```

Task: You just created your first templated web page. Now it is time to create your next templated web page with the skills you just learned.

Navigate back to **store.html**, create a `<script>` tag.

- Add the `<script>` tag on the line before the `<script>` tag for Handlebars.
- Give the same tag an id of `store-template`.
- Add the `type` attribute to the same tag and set it to be `'text/x-handlebars-template'`.

Hint: The complete `<script>` tag will look like this:
```html
<script id='store-template' type='text/x-handlebars-template'>
</script>
```

Task: Copy the first `.instrument` element and paste it inside the newly created `<script>` tag.

Hint: The starting template will look like this:
```html
<script id='store-template' type='text/x-handlebars-template'>
  <div class='instrument'>
    <img class='image' src='images/electronic-keyboard.png' alt='Electronic Keyboard'>
    <h2 class='name'>Electronic Keyboard</h2>
    <p class='description'>An electronic keyboard or digital keyboard is an electronic musical instrument, an electronic or digital derivative of keyboard instruments.</p>
    <p class='price'><del>Price: $1,999.00</del></p>
    <p class='sale'>On Sale!</p>
    <p class='deal'>With Deal: $1,699.89</p>
  </div>
</script>
```

Task: Replace the value of the `src` and `alt` attribute within the `<img>` tag with an `'{{image}}'` and `'{{name}}'` expression.

Hint: The `<img>` tag will look like this:
```html
<img class='image' src='{{image}}' alt='{{name}}'>
```

Task: Replace the name, description, price and deal price inside the `.name`, `.description`, `.price` and `.deal` element with a `{{name}}`, `{{description}}`, `{{price}}` and `{{deal}}` expression.

Hint: These elements will look like this:
```html
<h2 class='name'>{{name}}</h2>
<p class='description'>{{description}}</p>
<p class='price'><del>Price: {{price}}</del></p>
<p class='deal'>With Deal: {{deal}}</p>
```

Task: You might wonder how to render current four instruments by using only one template. Handlebars offers the built-in `each` block helper which acts like the array iterator in JavaScript.

Wrap the `.instrument` element in the template with the `each` block helper to iterate through an array of `instruments`.

Hint: `instruments` are the property of the `context` object. Its value is an array. It will look like this:
```html
<script id='store-template' type='text/x-handlebars-template'>
  {{#each instruments}}
  <div class='instrument'>
    <img class='image' src='{{image}}' alt='{{name}}'>
    <h2 class='name'>{{name}}</h2>
    <p class='description'>{{description}}</p>
    <p class='price'><del>Price: {{price}}</del></p>
    <p class='sale'>On Sale!</p>
    <p class='deal'>With Deal: {{deal}}</p>
  </div>
  {{/each}}
</script>
```

Task: You might notice some instruments are on sale and others are not. Handlebars offers another built-in `if` block helper which acts like the `if` conditional in JavaScript.

Use the `if` block helper to display the on-sale price. If the `sale` property of the objects in the `instruments` array is `true`, display the `.price`, `.sale` and `.deal` element; otherwise display the `.price` element (without the nested `<del>` tag).

Hint: It will look like this:
```html
<script id='store-template' type='text/x-handlebars-template'>
  {{#each instruments}}
  <div class='instrument'>
    <img class='image' src='{{image}}' alt='{{name}}'>
    <h2 class='name'>{{name}}</h2>
    <p class='description'>{{description}}</p>
    {{#if sale}}
    <p class='price'><del>Price: {{price}}</del></p>
    <p class='sale'>On Sale!</p>
    <p class='deal'>With Deal: {{deal}}</p>
    {{else}}
    <p class='price'>Price: {{price}}</p>
    {{/if}}
  </div>
  {{/each}}
</script>
```

Task: Inside the `#showcase` element, add an id of `store-information` to the `.container` element and delete the `.instrument` elements.

Notice the instruments are gone on the page. It is okay! They are coming back eventually.

Task: Now, navigate back to **main.js**, let's write more JavaScript!

- Use the `document.getElementById()` method to get an element with an id of `store-template` on the document.
- Declare a variable named `storeTemplateElement` using the `const` keyword and assign the element returned above to it.

Hint: It will look like this:
```js
const storeTemplateElement = document.getElementById('store-template');
```

Task: Next, let's get the HTML markup contained within the `storeTemplateElement`.

-	Access the `innerHTML` element property on the `storeTemplateElement` by using the dot notation.
-	Assign the HTML markup got above to a new variable named `storeTemplateSource`.

Hint: It will look like this:
```js
const storeTemplateSource = storeTemplateElement.innerHTML;
```

Task: Then, compile a template source in JavaScript by using the `Handlebars.compile()` method.

-	Pass the `storeTemplateSource` into the `Handlebars.compile()` method as an argument.
-	Assign a compiled template returned above to a new variable named `storeTemplate`.

Hint: It will look like this:
```js
const storeTemplate = Handlebars.compile(storeTemplateSource);
```

Task: After calling the `Handlebars.compile()` method, a function is returned to the `storeTemplate`.

-	Pass the provided `context` object into the `storeTemplate` function as an argument.
-	Assign the HTML result returned above to a new variable named `storeHtml`.

Hint: It will look like this:
```js
const storeHtml = storeTemplate(context);
```

Task: Finally, let's render the HTML result in the browser.

-	Use the `document.getElementById()` method to get an element with an id of `store-information` on the document.
-	Set the `innerHTML` property on the element returned above to be the `storeHtml`.

Hint: It will look like this:
```js
document.getElementById('store-information').innerHTML = storeHtml;
```

Task: The instruments did not show up yet because **main.js** had attempted to access the `innerHTML` property of the `#home-template` element on the store page.

Add the `if` conditional to check if the document has the element.

- Add the `homeTemplateElement` within the parentheses of the `if` block.
- Add the code related to the home template inside the `if` block.
- Add the `storeTemplateElement` within the parentheses of the `else if` block.
- Add the code related to the store template inside the `else if` block.

Hint: It will look like this:
```js
if (homeTemplateElement) {
  const homeTemplateSource = homeTemplateElement.innerHTML;
  const homeTemplate = Handlebars.compile(homeTemplateSource);
  const homeHtml = homeTemplate(context);

  document.getElementById('home-information').innerHTML = homeHtml;
} else if (storeTemplateElement) {
  const storeTemplateSource = storeTemplateElement.innerHTML;
  const storeTemplate = Handlebars.compile(storeTemplateSource);
  const storeHtml = storeTemplate(context);

  document.getElementById('store-information').innerHTML = storeHtml;
}
```

Task: Lastly, let's add a new instrument to the `context` object to display it in the store.

Create an object literal as the last element in the `instruments` array as follows:

-	Set the `image` property to be `'images/violin.png'` (URL TBD).
-	Set the `name` property to be `'Violin'`.
-	Set the `description` property to be `'The violins, also known informally as a fiddle, is a wooden string instrument in the violin family. Most violins have a hollow wooden body. It is the smallest and highest-pitched instrument in the family in regular use.'`.
-	Set the `price` property to be `'$245.00'`.

After creating the object successfully, you will see the violin added to the store page.

Hint: Add each property on a new line, separate them with a `,` and indent them with two spaces. It will look like this:
```js
{
  image: 'images/violin.png',
  name: 'Violin',
  description: 'The violin, also known informally as a fiddle, is a wooden string instrument in the violin family. Most violins have a hollow wooden body. It is the smallest and highest-pitched instrument in the family in regular use.',
  price: '$245.00'
}
```

Task: Great work! The home and store page are looking great now. If you would like, you can add the interactivity to the website by adding or removing the instruments to or from a shopping cart.
