//sol1
function removeEveryOther(arr){
  
  for(var i = arr.length - 1; i >= 0; i--)
    {
      if(i%2 ===1){
        arr.splice(i, 1);
      }
      
    }
    
    return arr;
}


//sol2
function removeEveryOther(arr){
 return arr.filter(function(elem,index){
   return index %2 ===0 ;
 });
}