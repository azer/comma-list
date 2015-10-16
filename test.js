var test = require("prova");
var list = require("./");

test('parse', function (t) {
  t.plan(1);
  t.deepEqual(list('   , foo, bar, qux, , span, eggs, '), ['foo', 'bar', 'qux', 'span', 'eggs']);
});
