"use strict";

// library/array.ts
Array.prototype.filter = function(callback, context) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};
Array.prototype.map = function(callback) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};
Array.prototype.forEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
Array.prototype.some = function(callback, thisArg) {
  if (this == null) {
    throw new TypeError("Array.prototype.some called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  var obj = Object(this);
  var len = obj.length >>> 0;
  for (var i = 0; i < len; i++) {
    if (i in obj) {
      if (callback.call(thisArg, obj[i], i, obj)) {
        return true;
      }
    }
  }
  return false;
};

// library/object.ts
Object.keys = (function() {
  "use strict";
  var hasOwnProperty = Object.prototype.hasOwnProperty, hasDontEnumBug = !{ toString: null }.propertyIsEnumerable("toString"), dontEnums = [
    "toString",
    "toLocaleString",
    "valueOf",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "constructor"
  ], dontEnumsLength = dontEnums.length;
  return function(obj) {
    if (typeof obj !== "function" && (typeof obj !== "object" || obj === null)) {
      throw new TypeError("Object.keys called on non-object");
    }
    var result = [], prop, i;
    for (prop in obj) {
      if (hasOwnProperty.call(obj, prop)) {
        result.push(prop);
      }
    }
    if (hasDontEnumBug) {
      for (i = 0; i < dontEnumsLength; i++) {
        if (hasOwnProperty.call(obj, dontEnums[i])) {
          result.push(dontEnums[i]);
        }
      }
    }
    return result;
  };
})();
Object.values = (function() {
  "use strict";
  var hasOwnProperty = Object.prototype.hasOwnProperty, hasDontEnumBug = !{ toString: null }.propertyIsEnumerable("toString"), dontEnums = [
    "toString",
    "toLocaleString",
    "valueOf",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "constructor"
  ], dontEnumsLength = dontEnums.length;
  return function(obj) {
    if (typeof obj !== "function" && (typeof obj !== "object" || obj === null)) {
      throw new TypeError("Object.keys called on non-object");
    }
    var result = [], prop, i;
    for (prop in obj) {
      if (hasOwnProperty.call(obj, prop)) {
        result.push(obj[prop]);
      }
    }
    if (hasDontEnumBug) {
      for (i = 0; i < dontEnumsLength; i++) {
        if (hasOwnProperty.call(obj, dontEnums[i])) {
          result.push(dontEnums[i]);
        }
      }
    }
    return result;
  };
})();

// library/string.ts
String.prototype.includes = function(search, start) {
  "use strict";
  if (search instanceof RegExp) {
    throw TypeError("first argument must not be a RegExp");
  }
  if (start === void 0) {
    start = 0;
  }
  return this.indexOf(search, start) !== -1;
};
String.prototype.replaceAll = function(search, replacement) {
  if (this == null) {
    throw new TypeError("String.prototype.replaceAll called on null or undefined");
  }
  var str = String(this);
  if (search instanceof RegExp) {
    if (!search.global) {
      throw new TypeError("replaceAll must be called with a global RegExp");
    }
    return str.replace(search, replacement);
  }
  var searchStr = String(search);
  if (searchStr === "") {
    var result = "";
    for (var i = 0; i < str.length; i++) {
      result += replacement + str.charAt(i);
    }
    return result + replacement;
  }
  return str.split(searchStr).join(replacement);
};

// index.ts
var sayHello = function() {
  alert("Hello from ExtendScript");
};
