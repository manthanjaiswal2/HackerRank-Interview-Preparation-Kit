function truthCheck(collection, pre) {
  // Is everyone being true?
  var flag = 0;
  for (var i in collection) {
    
    if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])) {
      flag++;
    }
  }

  return flag == collection.length;
  
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

