Function.prototype.clone = function() {
  return new Function('return ' + this.toString())();
};
