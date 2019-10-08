function pythagoreanTriplet(int n) {
    // Considering triplets in
    // sorted order. The value
    // of first element in sorted
    // triplet can be at-most n/3.

    var arr = [];
    var prod=1;
    for (var i = 1; i <= n / 3; i++){
        // The value of second
        // element must be less
        // than equal to n/2
        for (var j = i + 1; j <= n / 2; j++)
        {
            int k = n - i - j;
            if (i * i + j * j == k * k)
            {
               arr.push(i);
	       arr.push(j);
	       arr.push(k);
            }
        }
    }


    for(var i=0;i<arr.length;i++) {
	prod *= arr[i];
    }

   return prod;
}


