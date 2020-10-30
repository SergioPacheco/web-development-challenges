## What is an Event?

When you refresh your email inbox, double tap on a post, or scroll through a newsfeed — something cool happens in your browser. These actions are known as events!

Events on the web are user interactions and browser manipulations that you can program to trigger functionality. Some examples of events are:

- A mouse clicking on a button
- Webpage files loading in the browser
- A user swiping right on an image

You can create interactivity on a website by assigning a function to respond to a specific event firing, or triggering. In this lesson, you’ll learn to use JavaScript with events to create dynamic websites.

## "Firing" Events

After a specific event fires on a specific element in the document object model (or DOM), an event handler function can be created to run as a response. In this lesson, we will learn about event handler functions that modify and update DOM elements after an event fires.

Let’s compare this to something more familiar: a cuckoo clock is an example of programming with events! When the clock hands strike a new hour, the cuckoo bird responds with a whistle for each hour. For example, the cuckoo bird will whistle twice when the clock strikes 2 o’clock.

As you can see in the diagram, the clock striking an hour is the specific event that causes a specific response from the cuckoo bird. Event handler functions wait for their specific events to fire like the cuckoo bird in the clock awaiting the next hour. These functions can be used to change a DOM element’s color, text and much more!

Most events in the browser take place without being noticed — the events are undetected because there is no event handler associated with the event to execute an action. Event handlers are crucial for creating interactive websites with JavaScript.

## Event Handler Registration

You’re doing great! Now it’s time to dive into using event handler functions to create interactivity.

JavaScript interprets registered events as event objects with properties and methods. When you create an event handler function on a specific event, you create a property of the event object.

An event handler function is registered as a property attached to the DOM element being interacted with, or the event target. Check out the syntax:

let eventTarget = document.getElementById('targetElement');

```javascript
eventTarget.onclick = function() {
  // this block of code will run
}
Let’s break this down!
```

1. First, we accessed the DOM element that serves as the event target by its ID using document.getElementById('targetElement').
2. Then we created the event handler property which consists of the event target followed by the event name (the prefix on- and the event type.) In this example, we’re using the click event which fires when the user presses and releases a mouse button on a DOM element.
3. Lastly, we assigned an event handler function to the property.

Event handlers can also be registered as an HTML element attribute, but you should always avoid inline JavaScript code in HTML files!

## Adding Event Handlers

It’s best practice to create named event handler functions, instead of anonymous functions. Your code will remain organized and reusable this way, even if your code gets complex. Check out the syntax:

```javascript
let eventHandlerFunction = function () {
  // this block of code will run
};

eventTarget.onclick = eventHandlerFunction;
```

The `.addEventListener()` method is another common syntax for registering event handlers. An event listener waits for a specific event to occur and calls a named event handler function to respond to it. This method requires two arguments:

- The event type as a string
- The event handler function

Check out the syntax of an `.addEventListener()` method with a click event:

```javascript
eventTarget.addEventListener('click', eventHandlerFunction);
```

You’ll want to use the .addEventListener() method to allow multiple event handlers to be registered to a single event without changing its other event handlers.

## Removing Event Handlers

The `removeEventListener()` method is used to reverse the addEventListener() method. This method stops the event target from “listening” for an event to fire when it no longer needs to. `removeEventListener` also passes two arguments:

- The event type as a string
- The event handler function

Check out the syntax of a removeEventListener() method with a click event:

```javascript
eventTarget.removeEventListener('click', eventHandlerFunction);
```

Because there can be multiple event handler functions associated with a particular event, it needs to identify which function to remove from the event. The event handler function passed to the removeEventListener() method must be the same function of the corresponding addEventListener().

## Event Object Properties

JavaScript stores events as event objects with their related data and functionality as properties and methods. There are pre-determined properties associated with event objects. You can call these properties to see information about the event, for example:

- the `.target` property to access the element that triggered the event.
- the `.type` property to access the name of the event.
- the `.timeStamp` property to access the number of milliseconds that passed since the document loaded and the event was triggered.

## Event Types

Beyond the `click` event, there are all types of DOM events that can fire in a browser! It’s important to know most events in the DOM take place without being noticed because there are no event handlers connected to them.

It’s also important to know some registered events don’t depend on user interactions to fire. For instance, the load event fires after website files completely load in the browser.

Browsers can fire many other events without a user — you can check out a list of events on the MDN Events Reference page.

Many events need user interaction with the DOM to fire. One user interaction event you’ve become familiar with is the click event. A click event fires when the user presses and releases a mouse button on an element in the DOM.

## Mouse Events

When you click down or move the mouse device mouse events fire. Outside of the click event, there are other events that can be fired when using a mouse.

The mousedown event is fired when the user presses a mouse button down. This is different from a click event because mousedown doesn’t need the mouse button to be released to fire.

The mouseup event is fired when the user releases the mouse button. This is different from the click and mousedown events because mouseup doesn’t depend on the mouse button being pressed down to fire.

The mouseover event is fired when the mouse enters the content of an element.

The mouseout event is fired when the mouse leaves an element.

## QUIZZ

### What is the event target?

The event target is the DOM element that the event fires on.

### What is the correct syntax for a keypress event?

eventTarget.onkeypress = eventHandlerFunction;

### All events rely on user interactions in the document object model.

False

### All events on a web page have specific responses assigned to them.

False

### Do the mouse events click and mousedown have the same functionality?

No, the click events rely on the mouse being pressed down and released for the events to fire, while mousedown events only rely on the mouse being pressed down.

### What is the benefit of the .addEventListener() method?

The .addEventListener() method is good for large code and it can be used to add multiple event handlers to a scpecific event.

### Event object properties store information about a specific event.

True

### How does JavaScript interpret events in the document object model?

Javascript interprets events as objects in the DOM with pre-determined properties and methods.

### What is an event on the web?

Event are user interactions and browser manipulations on the document object model.

1
