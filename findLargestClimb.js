// Given an array of altitudes find the largest climb (the largest contiguous group of altitudes that get sequentially larger)

//1) must not decrease by more than 10,
// 2) must not be the same number 3 times in a row.
// return the index of the start, and the index of the end of the highest climb
// [10,20,30,40,50] --> (0,4)
// [10,20,30,10,50] --> (3,4)
// [10,20,20,20,30,40] --> (3,5)
// [10, 20, 20, 20, 10, 30, 50] (4, 6)
// [10, 20, 20, 20, 10, 30, 50, 0, 40, 60] (7, 9)
// [10, 20, 20, 20, 10, 30, 50, 0, 0, 0, 0, 40, 60] (10, 12)
//[10, 20, 20, 20, 10, 30, 50, 0, 0, 0, 0, 30] (4,6)
function findMaxClimb(array) {
  if (array.length < 2) {
    throw new Error('not enough data')
  }
  let startClimb = array[0];
  let endClimb = array[1];
  let maxClimb = endClimb - startClimb
  let startIndex = 0
  let endIndex;

  let dupeCount = 0;
  for (var i = 1; i < array.length; i++) {

    if (array[i] === array[i - 1]) {
        startIndex = i;
        startClimb = array[i]
      dupeCount++;
      continue;
    }
    if (array[i] > endClimb && dupeCount <= 3) { //if new highpoint
      endClimb = array[i];
      maxClimb = endClimb - startClimb
      endIndex = i;
      dupeCount = 0;
    }
    if (array[i] <  array[i - 1]) { // find new low
      startClimb = array[i]
      maxClimb = endClimb - startClimb

      startIndex = i;
      if (array[i + 1] >= 0) {// if there's actually more to check
      // either we have a new climb or we have a final descent / ending
        if (isFinalDescent(array.slice(i))) {
          return [startIndex, endIndex];
        } else { // if not the final descent its a new startIndex
          startClimb = array[i]; //only if not final descent
          startIndex = i;
        }

      }else {
        return [startIndex, endIndex];
      }

      //if new climb reset startIndex startClimb

      //fn final descent isFinalDescent(array.slice(i))
      dupeCount = 0;
    }

  }
  return [startIndex, endIndex];
}

function isFinalDescent(array) {
  let low = array[0];
  for (var i = 1; i < array.length; i++) {
    if ( array[i] > low) {
      return false
    }

  }
  return true;
}
