//sol1
function validParentheses(parens){
   console.log(parens);
   var count=0;
   for(var i=0;i<parens.length;i++){
     if(parens[i]==='('){
     count++;}
     else{
       count--;
       if(count<0){return false;}
     }
   }
   return count===0;
}
//sol 2
function validParentheses(parens){
  var count=0;
   for(var i=0;i<parens.length && count>=0;i++){
     
     count += (parens[i]==='(')?1:-1 ;
       
   }
   return count===0;
}