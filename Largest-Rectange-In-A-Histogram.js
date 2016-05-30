function findLargestRectangle(hist) {
  var h, pos;
  var tempH, tempPos;
  var hStack = [];
  var posStack = [];
  var maxSize = -Infinity;
  var tempSize = 0;

  function popThatShit() {
    tempH = hStack.pop();
    tempPos = posStack.pop();
    tempSize = tempH * (pos - tempPos);
    maxSize = Math.max(tempSize, maxSize);
  }

  for (pos = 0; pos < hist.length; pos++) {
    h = hist[pos];
    if (hStack.length === 0 || h > hStack[hStack.length - 1]) {
      hStack.push(h);
      posStack.push(pos);
    } else if (h < hStack[hStack.length - 1]) {
      while (hStack.length && h < hStack[hStack.length - 1]) {
        popThatShit();
      }
      hStack.push(h);
      posStack.push(tempPos);
    }
  }
  while (hStack.length) {
    popThatShit();
  }
  return maxSize;
}

function test(hist, answer) {
  var size = findLargestRectangle(hist);
  console.log(
    'Testing ' + hist.join(',') + 
    ' - Answer should be: ' + answer + 
    ', Discovered Answer: ' + size
  );
  if (size !== answer) {
    console.log('!!! shit is fucked !!!');
  }
  console.log("\n");
}

test([ 1, 2, 3, 4, 2, 3, 5, 2, 1, 0, 8 ], 14);
test([ 5, 5, 1, 0, 1, 0, 1], 10);
test([ 6, 5, 4, 0, 1, 0, 1], 12);
test([ 0, 1, 0, 1, 0, 5, 6], 10);
test([ 5, 1, 1, 1, 1, 1, 0], 6);
test([ 5, 0, 3, 3, 3], 9);
test([ 0, 1, 0], 1);
test([ 1, 2, 3, 4, 5], 9);
test([ 5, 4, 3, 2, 1], 9);
test([ 0, 1, 0, 1, 3, 2, 0, 1, 0, 1], 4);
test([], -Infinity);
test([ 1 ], 1);
