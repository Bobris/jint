/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-272.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is an array index named property, name is accessor property and 'desc' is accessor descriptor, test updating the [[Configurable]] attribute value of 'name' (15.4.5.1 step 4.c)
 */


function testcase() {

        var arrObj = [];
        function setFunc(value) {
            arrObj.setVerifyHelpProp = value;
        }

        Object.defineProperty(arrObj, "0", {
            set: setFunc,
            configurable: true
        });

        Object.defineProperty(arrObj, "0", {
            configurable: false
        });
        return accessorPropertyAttributesAreCorrect(arrObj, "0", undefined, setFunc, "setVerifyHelpProp", false, false);
    }
runTestCase(testcase);
