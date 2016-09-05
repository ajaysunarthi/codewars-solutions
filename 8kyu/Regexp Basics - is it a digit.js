String.prototype.digit = function() {
  
var reg = new RegExp('^[0-9]$');
console.log(this,reg);
return reg.test(this);
  
};
