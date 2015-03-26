# State Change

State is a module that takes an initial state and a update function, it returns an immutable state cursor, when any changes occur to that cursor a change event is triggered and istate calls the passed in update function with the new data.

This is very useful for virtual dom web based applications, it prevents the need to pass around emitters to track and adjust for state and re-rendering.

A common place to use istate is in tandem with `main-loop` - main-loop is a module that takes virtual-dom methods and a full state of data renders the new tree and redraws the dom based on the difference.  On of the features of main-loop is its logic to only paint during the animation frame cycle, so basically you can make several changes to state and the animation frame will post them together.

## Usage

``` js
var state = State({}, function update(data) {
  // data has changed
  console.log('Your state has changed')
})

state.set('beep', 'boop')
```

ex: with main-loop

``` js
var State = require('state-change')

var main = require('main-loop')
var initialState = {};
var loop = main(initialState, render, {
  create: require("virtual-dom/create-element"),
  diff: require("virtual-dom/diff"),
  patch: require("virtual-dom/patch")  
})
document.body.appendChild(loop.target)
var state = State(initialState, loop.update)

function render (state) {
  return h('h1', 'Hello World')
}

```
