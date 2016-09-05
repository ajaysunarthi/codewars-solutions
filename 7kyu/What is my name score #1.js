function nameScore(name){
   var u_name = name.toUpperCase();
   var counter = 0;
   for(var i=0; i<u_name.length; i++){
   		for(var key in alpha){
      	if(key.indexOf(u_name.charAt(i)) > -1)
        	{counter =counter+alpha[key];}
        }
         }
    var dic = {}
    dic[name] = counter
    return dic
}