function powerfullZombie(n,arr) {
  var sum;
  var max = Math.max(...arr);
  var maximum;
  
  for(var i=0;i<n;i++){
    var result = [];
    for(var j=0;j<n;j++){
      result.push(max - arr[j]);   
    }

    if(max < Math.max(...result)){
      max = Math.max(...result);  
    }
  }
  console.log(max);
}

powerfullZombie(4,[0,-1,-1,-1]);
