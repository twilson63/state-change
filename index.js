var Immutable = require('immutable')
var Cursor = require('immutable/contrib/cursor')

State.change = change 
module.exports = State

function State (initialState) {
  if (!initialState) initialState = {}
  var state = Cursor.from(Immutable.fromJS(initialState))

  return state
}

function change (cursor, fn) {
  if (fn) {
    cursor._onChange = function (data) {
      fn(data.toJS())
    } 
  }
}