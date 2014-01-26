var through = require('through'),
    transpiler = require('es6-transpiler');

var buf = [];

module.exports = function(file) {
  if(!isES6(file)) return through();
  return through(buffer, transform);
};

function isES6(file) {
  return /\.js$/.test(file);
};

function buffer(data) {
  buf.push(data);
}

function transform(file) {
  var result = transpiler.run({
    src: buf.join(''),
    disallowUnknownReferences: false
  });

  if(result.errors && result.errors.length !== 0) {
    this.emit('error', result.errors);
  }

  this.queue(result.src);
  this.queue(null);
}
