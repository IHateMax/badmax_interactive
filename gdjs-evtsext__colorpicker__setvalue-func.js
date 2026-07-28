
if (typeof gdjs.evtsExt__ColorPicker__SetValue !== "undefined") {
  gdjs.evtsExt__ColorPicker__SetValue.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ColorPicker__SetValue = {};
gdjs.evtsExt__ColorPicker__SetValue.idToCallbackMap = new Map();


gdjs.evtsExt__ColorPicker__SetValue.userFunc0xcee060 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// get the picker.
var colorPicker = document.getElementById("colorpicker")

// get Argument.
var HexValue = eventsFunctionContext.getArgument('ChangeValue')

// set the value.
colorPicker.value = HexValue
};
gdjs.evtsExt__ColorPicker__SetValue.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ColorPicker__SetValue.userFunc0xcee060(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__ColorPicker__SetValue.func = function(runtimeScene, ChangeValue, parentEventsFunctionContext) {
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
if (argName === "ChangeValue") return ChangeValue;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ColorPicker__SetValue.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__ColorPicker__SetValue.registeredGdjsCallbacks = [];