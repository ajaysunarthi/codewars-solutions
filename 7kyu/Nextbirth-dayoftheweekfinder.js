var nextBirthdayOfTheWeek = function (birthday) {
var year = birthday.getFullYear();
var day = birthday.getDay();

do {
birthday.setFullYear(birthday.getFullYear()+1);
}
while(birthday.getDay() !== day)

return (birthday.getFullYear() - year) ;
}