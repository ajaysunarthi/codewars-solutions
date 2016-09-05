function Dog (breed) {
  this.breed = breed;
}

Dog.prototype.bark = function(){
return "Woof";}

var snoopy = new Dog("Beagle");

var scoobydoo = new Dog("Great Dane");
