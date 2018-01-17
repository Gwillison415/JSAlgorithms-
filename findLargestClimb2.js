//fails on  [10, 20, 20, 20, 10, 30, 50, 0, 0, 0, 0, 30]

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
    if (array[i] > endClimb && dupeCount <= 3) {
      endClimb = array[i];
      endIndex = i;
      dupeCount = 0;
    }
    if (array[i] <  array[i - 1]) { // find new low
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

console.log(findMaxClimb([10, 20, 20, 20, 10, 30, 50, 0, 0, 0, 0, 30] ))
