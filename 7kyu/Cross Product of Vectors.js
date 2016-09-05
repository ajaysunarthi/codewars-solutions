function crossProduct (vector1, vector2) {
if(!Array.isArray(vector1) || !Array.isArray(vector2) || vector1.length !== 3 ||
vector2.length !== 3  ){
 throw "Arguments are not 3D vectors!";
}
else{
var 
xi=vector1[0],xj=vector1[1],xk=vector1[2],
yi=vector2[0],yj=vector2[1],yk=vector2[2];
  
var output = [];
output[0] = (xj*yk)-(xk*yj),
output[1] = - (xi*yk)+(xk*yi),
output[2] = (xi*yj)-(xj*yi);

return output;
} 
}