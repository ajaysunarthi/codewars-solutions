function replaceAll(input, find, replace) {
  var newStr = input.split(find);
  if (find === "") {
    newStr.unshift("");
    newStr.push("");
  }
  return newStr.join(replace);
}