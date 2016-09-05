function doubleChar(str) {
var arr = [];
for (var i = 0,l=str.length; i < l; i++) {
    arr.push( (str[i] + str[i] ));
}
return arr.join("");
}
 
function doubleChar(str) {
return str.split("").map(function(n){return (n+n);}).join("");

}