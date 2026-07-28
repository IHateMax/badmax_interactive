
if (typeof gdjs.evtsExt__ColorPicker__RGB !== "undefined") {
  gdjs.evtsExt__ColorPicker__RGB.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ColorPicker__RGB = {};
gdjs.evtsExt__ColorPicker__RGB.idToCallbackMap = new Map();


gdjs.evtsExt__ColorPicker__RGB.userFunc0x225bea0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// get the picker.
var hex = document.getElementById('colorpicker').value

// Remove '#' from the hex value.
hex = hex.substring(1);

// Convert the hex color into RGB components.
let r = parseInt(hex.substring(0, 2), 16);
let g = parseInt(hex.substring(2, 4), 16);
let b = parseInt(hex.substring(4, 6), 16);

// return the value.
eventsFunctionContext.returnValue = r + ";" + g + ";" + b

};
gdjs.evtsExt__ColorPicker__RGB.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ColorPicker__RGB.userFunc0x225bea0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__ColorPicker__RGB.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ColorPicker"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ColorPicker"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ColorPicker__RGB.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ColorPicker__RGB.registeredGdjsCallbacks = [];