// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Operator --x returns x = ToNumber(x) - 1
 *
 * @path ch11/11.4/11.4.5/S11.4.5_A3_T1.js
 * @description Type(x) is boolean primitive or Boolean object
 */

//CHECK#1
var x = true; 
--x;
if (x !== 1 - 1) {
  $ERROR('#1: var x = true; --x; x === 1 - 1. Actual: ' + (x));
}

//CHECK#2
var x = new Boolean(false); 
--x;
if (x !== 0 - 1) {
  $ERROR('#2: var x = new Boolean(false); --x; x === 0 - 1. Actual: ' + (x));
}

