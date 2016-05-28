function findBestFittingSubrange(
  original, replacement) {

  var ii;
  var jj;
  var distance;
  var distanceSum;
  var smallestDistanceSum = Infinity;
  var smallestDistanceSumIndex;


  //   0  1  2  3  4  5  6
  // [ 0, 1, 2, 3, 4, 5, 6 ] 
  //             [ 4, 5, 6 ]
  //   7 - 3 = 4
  // Need one more than that to make sure we 
  // compare the last set of digits

  for (ii = 0; ii <= original.length - replacement.length; ii++) {
    distanceSum = 0;
    console.log('Logging for pass #' + ii);
    for (jj=0; jj<replacement.length; jj++) {
      distance = 
		Math.abs(original[ii + jj] - replacement[jj]);
      console.log(
        '  ' + original[ii + jj] + ' is ' + distance + 
		' off from ' + replacement[jj]
      );
      distanceSum += distance;
    }

    console.log(
	  '  The total distance on this pass is ' + distanceSum
	);
	
    if (distanceSum < smallestDistanceSum) {
      console.log('  >>> Found a new low with that.');
      smallestDistanceSum = distanceSum;
      smallestDistanceSumIndex = ii;
    }
  }
  return smallestDistanceSumIndex;
}

console.log('---Test Run---');
console.log(
  findBestFittingSubrange(
    [2,5,9,1,-3,40,2,19],
    [10,-3,39]
  )
);

console.log('---Test Run---');
console.log(
  findBestFittingSubrange(
    [2,5,9,1,-3,10,-3,39],
    [10,-3,39]
  )
);
