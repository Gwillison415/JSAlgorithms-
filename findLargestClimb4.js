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

// when we see a new increase we can set that as a possible endidx
// that is when we can also define a new startIndex NOTE unhandled
//IF it's part of the same climb
// when we see a plateu we can advance the startIndex to that idx val

// when we see a descent we know that we have either a complete set
// or are begining a new set

// a end idx must be after a startIndex
// it's possible to see amny climbs
//only a higher climb will change our return values
//

function findClimbs(arr) {
  if (arr.length > 2) {
    throw new Error('bad data')
  }

  let maxClimb = 0;
  let startIdx = 0;
  let endIdx = null;
  let maxClimbIndices = [];
  let maxClimbObj = {};

  for (var i = 1; i < arr.length; i++) {

    if (endIdx) {

      if (arr[i - 1] > arr[i]) { // handle a start reset
        startIdx = idx;
        endIdx = null; // handles new highest increase
        // endIdx might change here
      }
    }

    if (arr[i] > arr[i - 1]) { // handle increase
      endIdx = idx;
      maxClimb = arr[endIdx] - arr[startIndex];
      // maxClimbIndices = [startIndex, endIdx];
      maxClimbObj[maxClimb] = {
        startIndex,
        endIdx
      };
    }

    if (arr[i] === arr[i - 1]) { // handle plateu
      startIdx = idx;
    }

  }
  if (maxClimbIndices.length) {
    let maxClimbArr = Object.keys(maxClimbIndices).sort((a, b) => a + b)
    let maxVal = maxClimbArr[0];
    return [
      maxClimbObj[maxVal].startIndex,
      maxClimbObj[maxVal].endIdx
    ];

  } else {
    throw new Error('also bad data')
  }
}
