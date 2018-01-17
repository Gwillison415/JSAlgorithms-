function round(number) {
  number = number.toString();
  var decimal = '';
  var nonDecimal = 0;
  for (var i = 0; i < number.length; i++) {
    if (number[i] == '.') {
      nonDecimal = parseInt(number.slice(0, i));
      decimal = number.slice(i + 1, number.length);
      if (Number(decimal[0]) >= 5) {
        nonDecimal++;
        return nonDecimal;
      }
    }
  }
  return number;

}
