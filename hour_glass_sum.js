// Maximum hourglass sum in the 2D in 6x6 array




function hourGlassSum(arr){
  
  var total = 0;
  var totalArray = [];
  var middleOne = [];
  var hourGlassSum = [];
  var result = [];
  var k=0;
  
 for(var i=0;i<6;i++){
   for(var j=0;j<6;j++){
     total = total + arr[i][j] + arr[i][j+1] + arr[i][j+2];
     totalArray.push(total);  
     total = 0;
   }
 }
 
  for(var i=1;i<5;i++){
    for(var j=0;j<4;j++){
      middleOne.push(arr[i][j+1]);
    }
  }
  
   
  totalArray = totalArray.filter((item) => {
      return !Number.isNaN(item);
  });
                                              
  
  middleOne = middleOne.filter((item) => {
      return item !== undefined;
  })
  
  for(var i=0;i<totalArray.length;i++){
      total = total + totalArray[i] + totalArray[i+8];
      hourGlassSum.push(total);
      total = 0;
  }
    
  hourGlassSum = hourGlassSum.filter((item) => {
    return !Number.isNaN(item);
  });
  
  for(var i=0;i<middleOne.length;i++){
    total = total + hourGlassSum[i] + middleOne[i];
    result.push(total);
    total = 0;
  }
  console.log(Math.max(...result));
}

hourGlassSum([[1,1,1,0,0,0],[0,1,0,0,0,0],[1,1,1,0,0,0],[0,0,2,4,4,0],[0,0,0,2,0,0],[0,0,1,2,4,0]]);
