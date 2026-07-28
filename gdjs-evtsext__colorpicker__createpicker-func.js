
if (typeof gdjs.evtsExt__ColorPicker__CreatePicker !== "undefined") {
  gdjs.evtsExt__ColorPicker__CreatePicker.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ColorPicker__CreatePicker = {};
gdjs.evtsExt__ColorPicker__CreatePicker.idToCallbackMap = new Map();


gdjs.evtsExt__ColorPicker__CreatePicker.userFunc0xcee060 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// get the X,Y position.
var X = eventsFunctionContext.getArgument("X")
var Y = eventsFunctionContext.getArgument("Y")


// Create picker.
const colorPicker = document.createElement("input")
colorPicker.type = 'color'
colorPicker.id = 'colorpicker'
document.body.appendChild(colorPicker)

// Position. 
colorPicker.style.position = 'absolute'
colorPicker.style.left = X + 'px'
colorPicker.style.top = Y + 'px'



};
gdjs.evtsExt__ColorPicker__CreatePicker.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ColorPicker__CreatePicker.userFunc0xcee060(runtimeScene, eventsFunctionContext);

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__ColorPicker__CreatePicker.func = function(runtimeScene, X, Y, parentEventsFunctionContext) {
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
if (argName === "X") return X;
if (argName === "Y") return Y;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ColorPicker__CreatePicker.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__ColorPicker__CreatePicker.registeredGdjsCallbacks = [];