function last(){
 if (arguments.length == 1) {
list=arguments[0];
return typeof(list)=="number" ? list:list[list.length-1];
 }
else return arguments[arguments.length-1];

}