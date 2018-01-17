var someNumbers = [6, 5, 0, 8, 3, 5, 9, 1, 7, 2];
var numberObject = new PhoneNumberFormatter(someNumbers);

function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  string += this.parenthesize() + this.getLineNumber()+ '-' +this.getExchangeCode();
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
   var start = 0;
  var end = 3;
  return this.slice(start, end);
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  // your code here last four digits
  var start = 6;
  var end = 10;
  return this.slice(start, end);
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  var start = 3;
  var end = 6;
  return this.slice(start, end);
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + this.getAreaCode() + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};
console.log(numberObject.render());
