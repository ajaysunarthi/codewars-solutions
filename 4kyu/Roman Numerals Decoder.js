function solution(str){

  var Values = [
      ['M', 1000], ['CM', 900], ['D',  500], ['CD', 400], 
      ['C',  100], ['XC',  90], ['L',  50],  ['XL',  40],  
      ['X',   10], ['IX',   9], ['V',   5],  ['IV',   4],   
      ['I',    1]
  ];
           
    var result = 0
    
    for (var i=0; i<Values.length; ++i) {
    
     var pair = Values[i],
       key = pair[0],
       value = pair[1],
       regex = RegExp('^' + key);
       
      while (str.match(regex)) {
        result += value
        str = str.replace(regex, '')
      }
    }
    return result
}
