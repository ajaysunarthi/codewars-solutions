function truncateString(str, num) {
	if(num<4){
  	return str.substr(0,num) + '...'
  }
  return str.substr(0,num-3)+ '...'
}