function resistor_parallel(){ 
let sum =0;
for(var i=0;i<arguments.length;i++)
{
 sum += 1/arguments[i];
} 
return 1/sum;
}