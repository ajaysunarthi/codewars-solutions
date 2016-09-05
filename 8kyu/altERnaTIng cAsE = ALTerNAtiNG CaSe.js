String.prototype.toAlternatingCase = function () {
  return this.split("").map(function(a){
  return a===a.toUpperCase() ? a.toLowerCase():a.toUpperCase()}).join('')
}
