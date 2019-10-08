function fearNotLetter(str) {
  var arr = str.split('');
  var alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var first = alphabets.indexOf(arr[0]);

  for(var i=first;i<alphabets.length;i++){
    if(arr.indexOf(alphabets[i]) == -1){
      return alphabets[i];
      break;
    }
  }

}

