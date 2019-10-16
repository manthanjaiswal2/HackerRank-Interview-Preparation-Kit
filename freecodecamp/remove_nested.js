function steamrollArray(arr) {
  // I'm a steamroller, baby
  var result = [];
  remove_nested(arr);

  function remove_nested(arr) {
    arr.forEach(function(arr2){
      if(!Array.isArray(arr2)){
        result.push(arr2);
      }
      else {
        remove_nested(arr2);
      }
    });
  }
  return result;
}

steamrollArray([1, [2], [3, [[4]]]]);

