// https://leetcode.ca/2023-06-09-2633-Convert-Object-to-JSON-String/
// Description
// Given an object, return a valid JSON string of that object. You may assume the object only inludes strings, integers, arrays, objects, booleans, and null. The returned string should not include extra spaces. The order of keys should be the same as the order returned by Object.keys()
// Please solve it without using the built-in JSON.stringify method

// Input: object = {"y":1,"x":2}
// Output: {"y":1,"x":2}
// Explanation: 
// Return the JSON representation.
// Note that the order of keys should be the same as the order returned by Object.keys().

function jsonStringify(object) {
    if(object==null){
      return 'null';
    }
    if(typeof object==='string'){
      return `"${object}"`;
    }
    if (typeof object === 'number' || typeof object === 'boolean') {
      // console.log(object.toString())
        return object.toString();
    }
    if(Array.isArray(object)){
      return `[${object.map(jsonStringify).join(',')}]`;
    }
    if (typeof object === 'object') {
      return `{${Object.entries(object)
          .map(
              ([key, value]) =>
                  `${jsonStringify(key)}:${jsonStringify(value)}`,
          )
          .join(',')} }`;
    }
    return '';
    
  }
  
  console.log( jsonStringify([1,2,3,4]))