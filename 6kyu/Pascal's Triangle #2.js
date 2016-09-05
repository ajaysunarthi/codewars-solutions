function pascal(n) {
var arr = []
  for(var line=1;line<=n;line++){
  	var arr1=[];
  	var C=1;
    for(var i=1;i<=line;i++){
      arr1.push(C);
    	C=C*(line-i)/i;
    }
    arr.push(arr1);
  }
  return arr;
}