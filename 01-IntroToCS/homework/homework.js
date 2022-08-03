'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  return parseInt(num,2);

}

function DecimalABinario(num) {
  // tu codigo aca
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    return binary;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}