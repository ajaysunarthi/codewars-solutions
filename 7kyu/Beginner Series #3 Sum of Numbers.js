function GetSum( a,b )
{
// assume a < b do everything
// check if wrong do opposite

var s = a,
e = b,
sum =0;

if(a>b) {s=b;e=a;}

for(s;s<=e;s++)
 {
sum +=s; 
}
return sum;
}