var ranNum = require('./randomNumber.js');
var convert= require('./convertToDollars.js');

function value3(min, max){
  return convert(ranNum(min, max));
}



module.exports = {
value3: value3,
convert: convert
};
