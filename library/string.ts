String.prototype.includes = function(search: any, start) {
  'use strict';

  if (search instanceof RegExp) {
    throw TypeError('first argument must not be a RegExp');
  }
  if (start === undefined) { start = 0; }
  return this.indexOf(search, start) !== -1;
};

String.prototype.replaceAll = function (search, replacement: any) {
  if (this == null) {
      throw new TypeError('String.prototype.replaceAll called on null or undefined');
  }

  var str = String(this);

  // RegExp path
  if (search instanceof RegExp) {
      if (!search.global) {
          throw new TypeError('replaceAll must be called with a global RegExp');
      }
      return str.replace(search, replacement);
  }

  // String path
  var searchStr = String(search);
  if (searchStr === '') {
      // Match JS behavior: insert replacement between every char
      var result = '';
      for (var i = 0; i < str.length; i++) {
          result += replacement + str.charAt(i);
      }
      return result + replacement;
  }

  return str.split(searchStr).join(replacement);
};