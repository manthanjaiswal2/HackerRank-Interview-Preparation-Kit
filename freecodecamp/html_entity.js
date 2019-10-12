var arr1 = [];
function swapChar(ch) {
   
  switch(ch) {
    case '&':
      arr1.splice(arr1.indexOf(ch),1,"&amp;");      
      break;
    
    case '"':
      arr1.splice(arr1.indexOf(ch),1,"&quot;");
      break;
    
    case '<':
      arr1.splice(arr1.indexOf(ch),1,"&lt;");
      break;

    case '>':
      arr1.splice(arr1.indexOf(ch),1,"&gt;");
      break;
    
    case '\'':
      arr1.splice(arr1.indexOf(ch),1,"&apos;");
      break;
  }

}
function convertHTML(str) { 

  var arr = str.split('');
  arr1 = [...arr];

  for(var i=0;i<arr.length;i++){
    swapChar(arr[i]);
  }
  // &colon;&rpar;
  return arr1.join('');
}

convertHTML("<>");

