// show the highest records

function breakingRecords (scores) {
  var max = scores[0];
  var min = scores[0];
  var count_max=0,count_min=0;

  for(var i=1;i<scores.length;i++) {
    if(max < scores[i]){
      max = scores[i];
      count_max++;
    }
    if(min > scores[i]){
      min = scores[i];
      count_min++;
    }
  }
  console.log(count_max + " " + count_min)
}

breakingRecords([3,4,21,36,10,28,35,5,24,42])

