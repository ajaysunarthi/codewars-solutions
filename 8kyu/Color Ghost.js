var Ghost = function() {
  // your code goes here
var colors = ['white','yellow','purple','red'];
var randColor = colors[Math.floor(Math.random()*colors.length)];
  this.color = randColor; 
};