function translatePigLatin(str) {
  var arr1 = str.split('');
  var regex = /[aeiou]/;

  if(regex.test(arr1[0])){
    return arr1.join('') + "way";
  }
  while(true) {
    if(!regex.test(arr1)) {
      return arr1.join('') + "ay";
    }
    else if(!regex.test(arr1[0])) {
      arr1.push(arr1.splice(0,1));
    }
    else {
      break;
    }
  }
  str = arr1.join('') + "ay";
  return str;
}

