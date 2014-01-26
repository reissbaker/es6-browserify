var through = require('through'),
    transpiler = require('es6-transpiler');

module.exports = function(file) {
  return through(transform);
};

function transform(file) {
  var result = transpiler.run({
    src: file,
    disallowUnknownReferences: false
  });

  if(result.errors && result.errors.length !== 0) {
    throw errors;
  }
  this.queue(result.src);
}
