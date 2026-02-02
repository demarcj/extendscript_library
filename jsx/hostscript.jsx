"use strict";

// library/object.ts
if (!Object.keys) {
  Object.keys = (function() {
    "use strict";
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var hasDontEnumBug = !{ toString: null }.propertyIsEnumerable("toString");
    var dontEnums = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ];
    var dontEnumsLength = dontEnums.length;
    return function(obj) {
      if (typeof obj !== "function" && (typeof obj !== "object" || obj === null)) {
        throw new TypeError("Object.keys called on non-object");
      }
      var result = [];
      var prop;
      var i;
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
}
if (!Object.values) {
  Object.values = (function() {
    "use strict";
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var hasDontEnumBug = !{ toString: null }.propertyIsEnumerable("toString");
    var dontEnums = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ];
    var dontEnumsLength = dontEnums.length;
    return function(obj) {
      if (typeof obj !== "function" && (typeof obj !== "object" || obj === null)) {
        throw new TypeError("Object.values called on non-object");
      }
      var result = [];
      var prop;
      var i;
      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(obj[prop]);
        }
      }
      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(obj[dontEnums[i]]);
          }
        }
      }
      return result;
    };
  })();
}

// library/string.ts
if (!String.prototype.includes) {
  String.prototype.includes = function(searchString, position) {
    "use strict";
    if (searchString instanceof RegExp) {
      throw new TypeError("first argument must not be a RegExp");
    }
    var start = position === void 0 ? 0 : position;
    return this.indexOf(String(searchString), start) !== -1;
  };
}
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function(searchValue, replaceValue) {
    if (this == null) {
      throw new TypeError("String.prototype.replaceAll called on null or undefined");
    }
    var str = String(this);
    if (searchValue instanceof RegExp) {
      if (!searchValue.global) {
        throw new TypeError("replaceAll must be called with a global RegExp");
      }
      return str.replace(searchValue, replaceValue);
    }
    var searchStr = String(searchValue);
    if (searchStr === "") {
      var out = "";
      for (var i = 0; i < str.length; i++) {
        out += (typeof replaceValue === "function" ? String(replaceValue.call(void 0, "", i, str)) : String(replaceValue)) + str.charAt(i);
      }
      out += typeof replaceValue === "function" ? String(replaceValue.call(void 0, "", str.length, str)) : String(replaceValue);
      return out;
    }
    if (typeof replaceValue !== "function") {
      return str.split(searchStr).join(String(replaceValue));
    }
    var fn = replaceValue;
    var result = "";
    var startIndex = 0;
    var matchIndex = str.indexOf(searchStr, startIndex);
    while (matchIndex !== -1) {
      result += str.substring(startIndex, matchIndex);
      result += String(fn.call(void 0, searchStr, matchIndex, str));
      startIndex = matchIndex + searchStr.length;
      matchIndex = str.indexOf(searchStr, startIndex);
    }
    result += str.substring(startIndex);
    return result;
  };
}

// library/array.ts
if (!Array.prototype.filter) {
  Array.prototype.filter = function(callbackfn, thisArg) {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
      if (callbackfn.call(thisArg, this[i], i, this)) {
        arr.push(this[i]);
      }
    }
    return arr;
  };
}
if (!Array.prototype.map) {
  Array.prototype.map = function(callbackfn, thisArg) {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
      arr.push(callbackfn.call(thisArg, this[i], i, this));
    }
    return arr;
  };
}
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(callbackfn, thisArg) {
    for (var i = 0; i < this.length; i++) {
      callbackfn.call(thisArg, this[i], i, this);
    }
  };
}
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === searchElement) {
        return true;
      }
    }
    return false;
  };
  try {
    Object.defineProperty(Array.prototype, "includes", {
      value: Array.prototype.includes,
      enumerable: false
    });
  } catch (e) {
  }
}
if (!Array.prototype.some) {
  Array.prototype.some = function(callbackfn, thisArg) {
    if (this == null) {
      throw new TypeError("Array.prototype.some called on null or undefined");
    }
    if (typeof callbackfn !== "function") {
      throw new TypeError(String(callbackfn) + " is not a function");
    }
    var obj = Object(this);
    var len = obj.length >>> 0;
    for (var i = 0; i < len; i++) {
      if (i in obj) {
        if (callbackfn.call(thisArg, obj[i], i, this)) {
          return true;
        }
      }
    }
    return false;
  };
}

// index.ts
var sayHello = function() {
  return alert("Hello from ExtendScript");
};
