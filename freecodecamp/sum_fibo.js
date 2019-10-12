function fibo(n) {
  var x=0,y=1;
  var temp=1;
  var arr = [];

  while(true){
    if(temp <= n){
      arr.push(temp);
      temp=x+y;
      x=y;
      y=temp;
    }
    else {
      break;
    }
  }

  return arr;
}

function sumFibs(num) {

  var result = [];
  var sum=0;
  var arr = fibo(num);
  

  for(var i=0;i<arr.length;i++) {
    if(arr[i]%2 != 0) {
      sum = sum + arr[i];
    }
  }
  result.push(sum);
  return sum;
}

sumFibs(75025);
