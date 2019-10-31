// Mendering array

function menderingfArray(unsorted) {
  //var max = unsorted.reduce(function(a,b) { return Math.max(a,b);})
  //console.log(unsorted.sort())
  var result = [];
  while(true) {
    var max = unsorted.reduce(function(a,b) { return Math.max(a,b);})
    var min = unsorted.reduce(function(a,b) { return Math.min(a,b);})
    result.push(max);
    result.push(min);
    unsorted.splice(unsorted.indexOf(max),1);
    unsorted.splice(unsorted.indexOf(min),1);
    if(unsorted.length == 1){
      result.push(unsorted[0]);
      break;
    }
    //result.pop()
  }
  console.log(result)
}

menderingfArray([5,2,7,8,-2,25,25])
