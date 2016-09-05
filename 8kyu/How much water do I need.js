function howMuchWater(L,X,N){
  // Insert your brilliant code here
  if(N>2*X) {
    return 'Too much clothes';}
  
  else if(N<X){
    return 'Not enough clothes';}
  
  else{
    
    var valt = L;
    for(var i = X;i<N;i++){
      valt = valt *1.1;
    }
    
   return parseFloat(valt.toFixed(2));
  }
  
}
