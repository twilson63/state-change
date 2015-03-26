var test = require('tap').test

var State = require('../') 

test('get notified on change', function (t) {
  var state = State({})
  State.change(state, function (d) {
  	t.equals(d.foo, 'bar')
  	t.end()
  })
  state.set('foo', 'bar')
})