import "./type.ts";

export var trim_comp_to_work_area = function() { app.executeCommand(2360) };
export var add_footage_to_comp = function() { app.executeCommand(2005) };
export var create_camera = function() { app.executeCommand(2564) };

export var print = (function () {
  var arr: unknown[] = [];
  for (var i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  alert(arr.join("\n"));
}) as any;