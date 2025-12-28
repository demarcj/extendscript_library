var i;
var proj = app.project;
var current_comp = proj.activeItem;
var comp = {};

var trim_comp_to_work_area = function() { app.executeCommand(2360) };
var add_footage_to_comp = function() { app.executeCommand(2005) };
var create_camera = function() { app.executeCommand(2564) };

var get_index = function() {
  var comp_found = 0;
  for(i = 1; i <= proj.numItems; i += 1){
    comp[proj.item(i).name] = i;
    proj.item(i).selected = false;
  }
}