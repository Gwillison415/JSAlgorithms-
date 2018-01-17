// given a set of coin denominations how many combos can be made that equal a given value



//brute force add each value by looping through each idx in array and
//w a nested loop, adding each other value to a set of matches
// count total in set
class Change {
  constructor(memo) {
    this.memo = memo
  }

  changePossibilitiesTopDown(amountLeft, denominations, currentIndex) {
    currentIndex = (typeof currentIndex !== 'undefined') ? currentIndex : 0;
    let memoKey = [amountLeft, currentIndex].join(', ')

    if (this.memo.hasOwnProperty(memoKey)) {
      console.log(`pulling memoKey ${memoKey}`);
      return this.memo[memoKey]
    }
    // base cases:
    // we hit the amount spot on. yes!
    if (amountLeft === 0) return 1;

    // we overshot the amount left (used too many coins)
    if (amountLeft < 0) return 0;

    // we're out of denominations
    if (currentIndex === denominations.length) return 0;

    console.log('checking ways to make ' + amountLeft + ' with [' + denominations.slice(currentIndex).join(', ') + ']');

    // choose a current coin
    var currentCoin = denominations[currentIndex];

    // see how many possibilities we can get
    // for each number of times to use currentCoin
    var numPossibilities = 0;
    while (amountLeft >= 0) {
        numPossibilities += this.changePossibilitiesTopDown(amountLeft,
            denominations, currentIndex + 1);
        amountLeft -= currentCoin;
    }
    console.log(numPossibilities);
    this.memo[memoKey] = numPossibilities;
    return numPossibilities;
  }

}
function changePossibilitiesBottomUp(amount, denominations) {

  var waysOfDoingNcents = new Array(amount + 1).fill(0)

  waysOfDoingNcents[0] = 1;

  denominations.forEach(function(coin) {
      for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {

          var higherAmountRemainder = higherAmount - coin;
          waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
      }
  });
  console.log(waysOfDoingNcents[amount]);
  return waysOfDoingNcents[amount];
}

changePossibilitiesBottomUp(5, [1,2,3,5])
// class ClassName {
//   constructor(ways) {
//     this.ways = ways;
//   }
//   waysOf1(targetVal, denominations, idx) {
//
//     let denomination = denominations[idx];
//     this.ways[denomination] = {};
//     while (denomination < targetVal) {
//
//     }
//   }
// }
// function changePossibilitiesBottomUp(targetVal, denominations, idx) {
//   //add each number by itself
//     // memoize the additions
//   // add each number by the other numbers
//
//   while (true) {
//
//   }
// }
