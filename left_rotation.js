// Rotate the arrays in d times

function rotLeft(a, d) {
    var temp = [];
    

    for(var i=0;i<d;i++){
        temp.push(a[0]);
        a.splice(a.indexOf(a[0]),1);
      
    }
    
    
    console.log(a.concat(temp));
}

rotLeft([1,2,3,4,5],4);
