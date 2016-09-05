function getCharacters(obj, key, val) {
  //var foundCharacters = [];
  
  val=val.toLowerCase();
  return obj.characters.filter(function(v){
  	return (v[key]||"").toLowerCase()  == val
  })
  //return foundCharacters;
}