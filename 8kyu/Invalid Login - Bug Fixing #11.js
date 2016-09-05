function validate(username, password){
if( password.indexOf('||') != -1 || password.indexOf('//') != -1)
{
return 'Wrong username or password!';
}

else{
var database = new Database();
  return database.login(username, password);
}
  
}