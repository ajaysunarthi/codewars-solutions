function lowercaseCount(str){
    return str.length - str.replace(/[a-z]/g, '').length; 
}