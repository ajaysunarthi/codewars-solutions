function slope(points)
{
var x1 = points[0],
    y1 = points[1],
    x2 = points[2],
    y2 = points[3];

var slope = (y2-y1)/(x2-x1);

slope = slope.toString();

if(slope == "NaN" || slope == "Infinity" || slope == "-Infinity") return "undefined";
else return slope;

 
}