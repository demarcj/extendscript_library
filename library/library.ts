export var project = app.project;
export var active_comp = () => project?.activeItem;
export var selected_layers = () => active_comp()?.selectedLayers;
export var selected_layer = () => selected_layers()?.[0];
export var has_active_comp = (): boolean => {
  try{
    if(!project?.activeItem){
      throw new Error("No comp was selected");
    }
    return true;
  } catch(e) {
    alert("Please select a comp");
    return false;
  }
}

export var has_selected_layer = (): boolean => {
  try{
    if(!selected_layers()?.length){
      throw new Error("No layer selected");
    }
    return true;
  } catch(e) {
    alert("Please select a layer");
    return false;
  }
}

export var has_single_selected_layer = (): boolean => {
  try{
    if(selected_layers()?.length && !(selected_layers()?.length === 1)){
      throw new Error("Has multiple layers selected");
    }
    return true;
  } catch(e) {
    alert("Please only select one layer");
    return false;
  }
}

export var is_text_layer_empty = (): boolean => {
  try{
    if(!(selected_layer()?.property("Source Text") as Property).value.text.length){
      throw new Error("Text layer contains no text");
    }
    return true;
  } catch(e) {
    alert("This text layer is empty. Please add text to this layer");
    return false;
  }
}

export var is_text_layer = (): boolean => {
  try{
    if(selected_layer()?.property("Source Text") === null){
      throw new Error("No text layer was selected");
    }
    return true;
  } catch(e) {
    alert("Please select a text layer");
    return false;
  }
}

export var check_error = (check_func: (() => boolean)[]) => check_func.some((confirm) => !confirm());

export var print = (function () {
  var arr: unknown[] = [];
  for (var i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  alert(arr.join("\n"));
}) as any;