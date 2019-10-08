function pairing(x) {
  switch(x) {
    case('A'):
      temp.push(x);
      temp.push('T');
      //console.log(result.push(temp));
      break;
    case('T'):
      temp.push(x);
      temp.push('A');
      //console.log(result.push(temp));
      break;
    case('C'):
      temp.push(x);
      temp.push('G');
      //console.log(result.push(temp));
      break;
    case('G'):
      temp.push(x);
      temp.push('C');
      //console.log(result.push(temp));
      break;
  }
  return temp;
}

function pairElement(str) {
  var len = str.length;
  var arr1 = str.split('');
  var result = [];
  var count = 0;
  //console.log(arr1)
  
  for(var i=0;i<len;i++){
    pairing(arr1[i]);
  }
  //console.log(temp);

  while(count < temp.length) {
    result.push(temp.splice(count,count+2));
    //count = count + 2;
  }
  //console.log(result)
  return result;
}

