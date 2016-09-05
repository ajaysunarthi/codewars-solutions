function fixTheMeerkat(arr) {
 var t = arr[0];
 arr[0] = arr[2];
 arr[2] = t;
 
 return arr
}
