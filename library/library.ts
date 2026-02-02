export var print = (function () {
  var arr: unknown[] = [];
  for (var i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  alert(arr.join("\n"));
}) as any;