function sc(a,b,c){
  if(a+b===c) return (a + '+' + b+ '=' +c)
  else if (b+c===a) return (b + '+' + c+ '=' +a)
  else if (c+a===b) return (c + '+' + a+ '=' +b)
  
  else if (a*b===c) return a + '*' + b+ '=' +c
  else if (b*c===a) return b + '*' + c+ '=' +a
  else if (c*a===b) return c + '*' + a+ '=' +b
  
  else if (a/b===c) return a + '/' + b+ '=' +c
  
  else return ""
}
