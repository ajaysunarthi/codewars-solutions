function getSize(w, h, d)
{
var tsa = 2*(w*h+h*d+d*w);
var vol = w*h*d;

return [tsa,vol];

}