function evilTwin(obj) {
var twin = Object.create(obj);
twin.hasGoatee = true;
return twin;
}