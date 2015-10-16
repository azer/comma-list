module.exports = parse;

function parse (input) {
  return input
    .trim()
    .split(/\s*,\s*/)
    .map(function (col) {
      return col.trim();
    })
    .filter(function (col) {
      return col && col.length;
    });
}
