Array.prototype.filter = function(callback, context) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i])
    }
  }
  return arr;
}

Array.prototype.map = function(callback) {
  var arr = []; 
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this)) 
  }
  return arr;
}

Array.prototype.forEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}

Array.prototype.some = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError('Array.prototype.some called on null or undefined');
  }

  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
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