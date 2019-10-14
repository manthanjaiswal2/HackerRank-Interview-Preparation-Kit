function sumPrimes(num) {
  var result = [];
  var sum = 0;
  for(var i=2;i<= num;i++){
    for(var j=2;j<=i;j++){
      if(i === j) {
        result.push(i);
      }
      if(i%j === 0) {
        break;
      }
    }
  }
  //console.log(4 === 4)
  return result.reduce(function(x,y) {return x+y;});
}

sumPrimes(10);
