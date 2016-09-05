function SafeInteger(n) {
var max = Math.pow(2,53) -1;
if(n > max)
return false;

else return true;

}