//sol1
function toInteger(n) {
console.log(n,typeof(n));

if(isFinite(n) == true)
  {
  
  var str = Number(n).toString();
  
  if( str.indexOf('.') != -1){
  return Number(str.substring(0,str.indexOf('.')) );}
  else {
  
  return Number(n);
  }

  
  }
else {
return 0;
}  
  
}

//sol2
function toInteger(n) {
  console.log(n|0);
  return n | 0;
}
