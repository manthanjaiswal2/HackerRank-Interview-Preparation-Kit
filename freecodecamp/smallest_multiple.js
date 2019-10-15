function smallestCommons(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  console.log()
  var answer = max;
  for(var i=max;i>=min;i--){
    if(answer % i){
      answer += max;
      i = max;
      console.log(answer);
    }
  }
  return answer;
}


smallestCommons([1,13]);
