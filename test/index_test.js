var test = require('tap').test

var stateEvent = require('../') 

test('get notified on change', function (t) {
  var state = stateEvent({}, function (d) {
  	t.equals(d.foo, 'bar')
  	t.end()
  })
  state.set('foo', 'bar')
})