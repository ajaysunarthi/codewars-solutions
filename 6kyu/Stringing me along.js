function createMessage(str) {
  return function(next){
    if(next==undefined){
      return str;
    }
    return createMessage(str+ ' ' +next)
  }
}
