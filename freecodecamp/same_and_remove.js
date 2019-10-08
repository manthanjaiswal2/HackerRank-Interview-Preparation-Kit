function destroyer(arr) {
  // Remove all the values
  var arr1 = Array.prototype.slice.call(arguments);
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr1.length;j++){
      if(arr[i] == arr1[j]){
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

