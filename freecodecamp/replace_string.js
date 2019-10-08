function myReplace(str, before, after) {
  var arr1 = str.split(' ');
  var pos = arr1.indexOf(before);
  var letters = arr1[pos].split('');
  var pattern = after.split('');
  
  if(letters[0] == letters[0].toUpperCase()) {
    pattern[0] = pattern[0].toUpperCase();
    arr1.splice(pos,1,pattern.join(''));
  }
  else{
    arr1.splice(pos,1,after);
  }
  
  return arr1.join(' ');
}

