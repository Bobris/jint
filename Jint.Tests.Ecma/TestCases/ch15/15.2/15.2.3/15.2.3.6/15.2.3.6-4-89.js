/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-89.js
 * @description Object.defineProperty will throw TypeError when name.configurable = false, name.writable = false, desc.value and name.value are two numbers with different values (8.12.9 step 10.a.ii.1)
 */


function testcase() {

        var obj = {};

        Object.defineProperty(obj, "foo", { 
            value: 10, 
            writable: false, 
            configurable: false 
        });
        
        try {
            Object.defineProperty(obj, "foo", { value: 20 });
            return false;
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(obj, "foo", 10, false, false, false);
        }
    }
runTestCase(testcase);
