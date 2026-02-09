import "./library/object";
import "./library/string";
import "./library/array";
import "./library/json";
import * as lib from "./library/library";

// var sayHello = () => alert("Hello from ExtendScript");
var sayHello = () => {
  lib.print(`hey`);
  lib.print(lib.all_layers());
};