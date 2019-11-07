// To check the palindrome and remove the special characters.
function palindrome(str) {
  // Good luck!
  var singlechar = str.toLowerCase().split('');
  var regex = /[^\w\s]|^_/ig;
  var regex1 = /[^\s]/g;
  var i=0;
  var intermediate_result = [];
  var final_result = [];

  while(true) {
    
    if(!singlechar[i].match(regex)){
      intermediate_result.push(singlechar[i]);
    }  
    i++;

    if(i == singlechar.length){
      break;
    }
  }

  for(var i=0;i<intermediate_result.length;i++){
    if(intermediate_result[i].match(regex1)){
      final_result.push(intermediate_result[i]);
    }
  }

  //console.log(asli_result)

  if(final_result.join('') === final_result.reverse().join('')){
    return true;
  }
  else{
    return false;
  }

}

palindrome("_eye");

