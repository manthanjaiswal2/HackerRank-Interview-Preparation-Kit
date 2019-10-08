function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  arr = collection.filter(function(a) {
    for(var i in source){
      if(source[i] != a[i]) {
        return false;
      }
    }
    return true;
  })
  // Only change code above this line
  return arr;
}

