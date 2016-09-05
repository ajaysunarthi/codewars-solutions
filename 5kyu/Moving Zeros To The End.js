//sol1
var moveZeros = function (arr) {
//console.log(arr);
  for(var i=arr.length-1;i>=0;i--){
    if(arr[i]===0){
      var temp = arr.splice(i,1);
      arr.push(temp[0]);
    }
  }
  
  return arr;
  
}

//sol2
var moveZeros = function (arr) {
  var nonZero = arr.filter(function(n){
  return n!==0;
  });
var zero = arr.filter(function(n){
  return n===0;
  });
  
  return nonZero.concat(zero);
  
}
