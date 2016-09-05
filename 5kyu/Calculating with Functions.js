var implement = function (num,operation){
	if(!operation){
  	return num;
  }
  return operation(num);
}

function zero(operation) {return implement(0,operation)}
function one(operation) {return implement(1,operation)}
function two(operation) {return implement(2,operation)}
function three(operation) {return implement(3,operation)}
function four(operation) {return implement(4,operation)}
function five(operation) {return implement(5,operation)}
function six(operation) {return implement(6,operation)}
function seven(operation) {return implement(7,operation)}
function eight(operation) {return implement(8,operation)}
function nine(operation) {return implement(9,operation)}

function plus(a) {return function(b){return b+a}}
function minus(a) {return function(b){return b-a}}
function times(a) {return function(b){return b*a}}
function dividedBy(a) {return function(b){return b/a}}