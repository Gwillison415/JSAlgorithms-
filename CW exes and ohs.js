function XO(str) {

  str = str.toLowerCase();
  var xArray = str.match(/x/g) || [];
  var oArray = str.match(/o/g) || [];
if (xArray.length == oArray.length) {
    return true; }

 else {return false; }
};

console.log(XO('xo') //,true);
console.log(XO("xxOo") // ,true);
console.log(XO("xxxm") //,false);
console.log(XO("Oo") //,false);
console.log(XO("ooom") //,false);




function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}
function XO(str) {
    var a = str.replace(/x/gi, ''),
        b = str.replace(/o/gi, '');
    return a.length === b.length;
}
