/*
#### Aliquot Sequence ####
# A number's aliquot sum is the sum of all of its factors excluding itself.
#
# For example, the aliquot sum of 10 is: 1 + 2 + 5 = 8
#
# We can use the aliquot sum to define a special sequence, called the
# aliquot sequence. The aliquot sequence of a number begins with the
# number itself. The second number in the sequence is the first number's
# aliquot sum, the third number is the second number's aliquot sum, and
# so on.
#
# For example, the first 4 numbers in the aliquot sequence of 10 are: 10, 8, 7, 1
#
# Write a function that takes in two numbers, base and n, and returns the
# aliquot sequence of length n starting with base.
#
# Examples:
# aliquot_sequence(10, 4) # => [10, 8, 7, 1]
# aliquot_sequence(10, 2) # => [10, 8]
# aliquot_sequence(7, 4) # => [7, 1, 0, 0]

// find the given base's factors
// the addition of all of the bases is the output[1]
// then find the factors of output[1] that is the output[2]

// define method for returning base and sequence numbers by the length given as n
*/

function findFactors(num) {
    var aliquotSequence = 0;
    for (var i= 0; i < num; i++) {
      if (num  % i ==0 ) {
        aliquotSequence += i;
      }
    }
  return aliquotSequence;
}

function aliquot_sequence(base, n) {
    var finalOutput = [base];
    for (var i = 0; i < n -1; i++) {

        finalOutput.push(findFactors(finalOutput[i]));

    }
  console.log(finalOutput);
}

aliquot_sequence(10, 4)
