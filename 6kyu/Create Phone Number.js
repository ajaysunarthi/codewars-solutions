function createPhoneNumber(num){
  num = num.join("");
  return '('+num.substring(0,3)+') '+ num.substring(3,6) +'-'+ num.substring(6,10)
}