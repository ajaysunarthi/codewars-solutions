function solution(hour) {
  //The hour parameter should be an integer with 3 or four digits (I.E. 800)
  var string = hour.toString();
  if( string.length > 4|| string.length < 3)
  {
  	// raise
    throw "Number must have 3 or 4 digits";
  }
  else{
   return string.slice(0, -2) + ":" + string.slice(-2);
}
  
  
}