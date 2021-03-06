// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * CharacterEscape :: c ControlLetter
 *
 * @path ch15/15.10/15.10.2/15.10.2.10/S15.10.2.10_A2.1_T2.js
 * @description ControlLetter :: a - z
 */

//CHECK#0061-007A
var result = true; 
for (alpha = 0x0061; alpha <= 0x007A; alpha++) {
  str = String.fromCharCode(alpha % 32);
  arr = (new RegExp("\\c" + String.fromCharCode(alpha))).exec(str);  
  if ((arr === null) || (arr[0] !== str)) {
    result = false;
  }
}

if (result !== true) {
  $ERROR('#1: CharacterEscape :: c a - z');
}    

