var Immutable = require('immutable')
var Cursor = require('immutable/contrib/cursor')

module.exports = function(initialState, update) {
  if (!initialState) initialState = {}
  var state = Cursor.from(Immutable.fromJS(initialState))

  if (update) {
    state._onChange = function (data) {
      update(data.toJS())
    }	
  }
  return state
}