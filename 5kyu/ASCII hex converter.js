function Converter(){
  this.toAscii = function(hex){
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        {str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));}
    return str;
  };
  this.toHex = function(ascii){
    var str = '';
    for (var i = 0; i < ascii.length; i ++)
        {str += ascii.charCodeAt(i).toString(16);}
    return str;
  };
}

var Converter = new Converter();