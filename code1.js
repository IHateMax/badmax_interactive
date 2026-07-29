gdjs.Scene2Code = {};
gdjs.Scene2Code.localVariables = [];
gdjs.Scene2Code.idToCallbackMap = new Map();


gdjs.Scene2Code.eventsList0 = function(runtimeScene) {

};

gdjs.Scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.Scene2Code.eventsList0(runtimeScene);


return;

}

gdjs['Scene2Code'] = gdjs.Scene2Code;
