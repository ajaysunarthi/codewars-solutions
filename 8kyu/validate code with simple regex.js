function validateCode (code) {

code = code.toString();
return (/[1-3]+/.test(code[0]));
}