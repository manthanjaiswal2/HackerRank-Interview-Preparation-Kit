function rot13(str) { 
    // LBH QVQ VG!
    var alphabets = [' ','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var arr = str.split('');
    var rot13,sub;
    var result = [];
    var regex = /[^\w]/g;

    for(var i=0;i<arr.length;i++) {
      if(arr[i] == ' '){
        arr.splice(arr.indexOf(arr[i]),1,0);
      }
    }
  
    for(var i=0;i<arr.length;i++) {
      if(arr[i] == 0 || arr[i].match(regex)){
        result.push(arr[i]);
      }
      else {
        rot13 = alphabets.indexOf(arr[i]) + 13;
        if(rot13 > 26){
          sub = rot13 - 26;
          result.push(alphabets[sub]);
        }
  
        else {
          result.push(alphabets[rot13]);
        }
      }
    }     
          
    var result_string = result.join('').split(0);
    
    console.log(result_string.join(' '))
  }
  
  // Change the inputs below to test
  rot13("LBH QVQ VG!")
  
