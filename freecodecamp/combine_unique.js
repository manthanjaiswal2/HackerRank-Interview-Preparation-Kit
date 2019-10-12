function uniteUnique(arr,arr1,arr2) {
  var placeHolder = arr;
  //console.log(arguments[0][1])

  for(var i=0;i<arguments.length;i++) {
    for(var j=0;j<arguments[i].length;j++) {
      if(placeHolder.indexOf(arguments[i][j]) === -1) {
        placeHolder.push(arguments[i][j]);
      }
    }
  }
  arr = placeHolder;
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

