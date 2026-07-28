
if (typeof gdjs.evtsExt__ColorPicker__BLUE !== "undefined") {
  gdjs.evtsExt__ColorPicker__BLUE.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ColorPicker__BLUE = {};
gdjs.evtsExt__ColorPicker__BLUE.idToCallbackMap = new Map();


gdjs.evtsExt__ColorPicker__BLUE.userFunc0xccc8f8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// get the picker.
var hex = document.getElementById('colorpicker').value

// Remove '#' from the hex value.
hex = hex.substring(1);

// Convert the hex color into RGB components.
let b = parseInt(hex.substring(4, 6), 16);

// return the value.
eventsFunctionContext.returnValue = b

};
gdjs.evtsExt__ColorPicker__BLUE.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__ColorPicker__BLUE.userFunc0xccc8f8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__ColorPicker__BLUE.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__ColorPicker__BLUE.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ColorPicker__BLUE.registeredGdjsCallbacks = [];