gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.idToCallbackMap = new Map();
gdjs.Game_32SceneCode.forEachIndex2 = 0;

gdjs.Game_32SceneCode.forEachIndex3 = 0;

gdjs.Game_32SceneCode.forEachIndex4 = 0;

gdjs.Game_32SceneCode.forEachObjects2 = [];

gdjs.Game_32SceneCode.forEachObjects3 = [];

gdjs.Game_32SceneCode.forEachObjects4 = [];

gdjs.Game_32SceneCode.forEachTemporary2 = null;

gdjs.Game_32SceneCode.forEachTemporary3 = null;

gdjs.Game_32SceneCode.forEachTemporary4 = null;

gdjs.Game_32SceneCode.forEachTotalCount2 = 0;

gdjs.Game_32SceneCode.forEachTotalCount3 = 0;

gdjs.Game_32SceneCode.forEachTotalCount4 = 0;

gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects1= [];
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects2= [];
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects3= [];
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects4= [];
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects1= [];
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects2= [];
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects3= [];
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects4= [];
gdjs.Game_32SceneCode.GDCameraObjects1= [];
gdjs.Game_32SceneCode.GDCameraObjects2= [];
gdjs.Game_32SceneCode.GDCameraObjects3= [];
gdjs.Game_32SceneCode.GDCameraObjects4= [];
gdjs.Game_32SceneCode.GDWallObjects1= [];
gdjs.Game_32SceneCode.GDWallObjects2= [];
gdjs.Game_32SceneCode.GDWallObjects3= [];
gdjs.Game_32SceneCode.GDWallObjects4= [];
gdjs.Game_32SceneCode.GDWaterObjects1= [];
gdjs.Game_32SceneCode.GDWaterObjects2= [];
gdjs.Game_32SceneCode.GDWaterObjects3= [];
gdjs.Game_32SceneCode.GDWaterObjects4= [];
gdjs.Game_32SceneCode.GDGroundObjects1= [];
gdjs.Game_32SceneCode.GDGroundObjects2= [];
gdjs.Game_32SceneCode.GDGroundObjects3= [];
gdjs.Game_32SceneCode.GDGroundObjects4= [];
gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDPlayerObjects3= [];
gdjs.Game_32SceneCode.GDPlayerObjects4= [];
gdjs.Game_32SceneCode.GDNPCObjects1= [];
gdjs.Game_32SceneCode.GDNPCObjects2= [];
gdjs.Game_32SceneCode.GDNPCObjects3= [];
gdjs.Game_32SceneCode.GDNPCObjects4= [];
gdjs.Game_32SceneCode.GDGrassObjects1= [];
gdjs.Game_32SceneCode.GDGrassObjects2= [];
gdjs.Game_32SceneCode.GDGrassObjects3= [];
gdjs.Game_32SceneCode.GDGrassObjects4= [];
gdjs.Game_32SceneCode.GDNameInputObjects1= [];
gdjs.Game_32SceneCode.GDNameInputObjects2= [];
gdjs.Game_32SceneCode.GDNameInputObjects3= [];
gdjs.Game_32SceneCode.GDNameInputObjects4= [];
gdjs.Game_32SceneCode.GDJoinButtonObjects1= [];
gdjs.Game_32SceneCode.GDJoinButtonObjects2= [];
gdjs.Game_32SceneCode.GDJoinButtonObjects3= [];
gdjs.Game_32SceneCode.GDJoinButtonObjects4= [];
gdjs.Game_32SceneCode.GDNameTagObjects1= [];
gdjs.Game_32SceneCode.GDNameTagObjects2= [];
gdjs.Game_32SceneCode.GDNameTagObjects3= [];
gdjs.Game_32SceneCode.GDNameTagObjects4= [];
gdjs.Game_32SceneCode.GDStatusTextObjects1= [];
gdjs.Game_32SceneCode.GDStatusTextObjects2= [];
gdjs.Game_32SceneCode.GDStatusTextObjects3= [];
gdjs.Game_32SceneCode.GDStatusTextObjects4= [];
gdjs.Game_32SceneCode.GDNoteSignObjects1= [];
gdjs.Game_32SceneCode.GDNoteSignObjects2= [];
gdjs.Game_32SceneCode.GDNoteSignObjects3= [];
gdjs.Game_32SceneCode.GDNoteSignObjects4= [];
gdjs.Game_32SceneCode.GDNoteTextObjects1= [];
gdjs.Game_32SceneCode.GDNoteTextObjects2= [];
gdjs.Game_32SceneCode.GDNoteTextObjects3= [];
gdjs.Game_32SceneCode.GDNoteTextObjects4= [];
gdjs.Game_32SceneCode.GDNoteInputObjects1= [];
gdjs.Game_32SceneCode.GDNoteInputObjects2= [];
gdjs.Game_32SceneCode.GDNoteInputObjects3= [];
gdjs.Game_32SceneCode.GDNoteInputObjects4= [];
gdjs.Game_32SceneCode.GDNoteButtonObjects1= [];
gdjs.Game_32SceneCode.GDNoteButtonObjects2= [];
gdjs.Game_32SceneCode.GDNoteButtonObjects3= [];
gdjs.Game_32SceneCode.GDNoteButtonObjects4= [];
gdjs.Game_32SceneCode.GDPostButtonObjects1= [];
gdjs.Game_32SceneCode.GDPostButtonObjects2= [];
gdjs.Game_32SceneCode.GDPostButtonObjects3= [];
gdjs.Game_32SceneCode.GDPostButtonObjects4= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

for (gdjs.Game_32SceneCode.forEachIndex2 = 0;gdjs.Game_32SceneCode.forEachIndex2 < gdjs.Game_32SceneCode.GDPlayerObjects1.length;++gdjs.Game_32SceneCode.forEachIndex2) {
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;


gdjs.Game_32SceneCode.forEachTemporary2 = gdjs.Game_32SceneCode.GDPlayerObjects1[gdjs.Game_32SceneCode.forEachIndex2];
gdjs.Game_32SceneCode.GDPlayerObjects2.push(gdjs.Game_32SceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(1), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("Pathfinding").moveTo(runtimeScene, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
}
}

}


};gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

for (gdjs.Game_32SceneCode.forEachIndex3 = 0;gdjs.Game_32SceneCode.forEachIndex3 < gdjs.Game_32SceneCode.GDPlayerObjects2.length;++gdjs.Game_32SceneCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("NameInput"), gdjs.Game_32SceneCode.GDNameInputObjects3);
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;


gdjs.Game_32SceneCode.forEachTemporary3 = gdjs.Game_32SceneCode.GDPlayerObjects2[gdjs.Game_32SceneCode.forEachIndex3];
gdjs.Game_32SceneCode.GDPlayerObjects3.push(gdjs.Game_32SceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects3[i].getVariableBoolean(gdjs.Game_32SceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(1), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects3[k] = gdjs.Game_32SceneCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)).setString((( gdjs.Game_32SceneCode.GDNameInputObjects3.length === 0 ) ? "" :gdjs.Game_32SceneCode.GDNameInputObjects3[0].getText()));
}
}
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

for (gdjs.Game_32SceneCode.forEachIndex2 = 0;gdjs.Game_32SceneCode.forEachIndex2 < gdjs.Game_32SceneCode.GDPlayerObjects1.length;++gdjs.Game_32SceneCode.forEachIndex2) {
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;


gdjs.Game_32SceneCode.forEachTemporary2 = gdjs.Game_32SceneCode.GDPlayerObjects1[gdjs.Game_32SceneCode.forEachIndex2];
gdjs.Game_32SceneCode.GDPlayerObjects2.push(gdjs.Game_32SceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(1), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.multiplayerMessageManager.sendCustomMessage("PlayerName", ((gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0).getAsString());
}
}
}

}


};gdjs.Game_32SceneCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects2, gdjs.Game_32SceneCode.GDPlayerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects3[i].getVariableString(gdjs.Game_32SceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)) == "" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects3[k] = gdjs.Game_32SceneCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)).setString(gdjs.multiplayerMessageManager.getCustomMessageData("PlayerName"));
}
}
}

}


};gdjs.Game_32SceneCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

for (gdjs.Game_32SceneCode.forEachIndex2 = 0;gdjs.Game_32SceneCode.forEachIndex2 < gdjs.Game_32SceneCode.GDPlayerObjects1.length;++gdjs.Game_32SceneCode.forEachIndex2) {
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;


gdjs.Game_32SceneCode.forEachTemporary2 = gdjs.Game_32SceneCode.GDPlayerObjects1[gdjs.Game_32SceneCode.forEachIndex2];
gdjs.Game_32SceneCode.GDPlayerObjects2.push(gdjs.Game_32SceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.Game_32SceneCode.eventsList5(runtimeScene);} //Subevents end.
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.eventsList7 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList8 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */

for (gdjs.Game_32SceneCode.forEachIndex2 = 0;gdjs.Game_32SceneCode.forEachIndex2 < gdjs.Game_32SceneCode.GDPlayerObjects1.length;++gdjs.Game_32SceneCode.forEachIndex2) {
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;


gdjs.Game_32SceneCode.forEachTemporary2 = gdjs.Game_32SceneCode.GDPlayerObjects1[gdjs.Game_32SceneCode.forEachIndex2];
gdjs.Game_32SceneCode.GDPlayerObjects2.push(gdjs.Game_32SceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(1), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
{gdjs.multiplayerMessageManager.sendCustomMessage("PlayerName", ((gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0).getAsString());
}
}
}

}


};gdjs.Game_32SceneCode.eventsList9 = function(runtimeScene) {

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNameTagObjects2Objects = Hashtable.newFrom({"NameTag": gdjs.Game_32SceneCode.GDNameTagObjects2});
gdjs.Game_32SceneCode.eventsList10 = function(runtimeScene) {

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteSignObjects2Objects = Hashtable.newFrom({"NoteSign": gdjs.Game_32SceneCode.GDNoteSignObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteTextObjects2Objects = Hashtable.newFrom({"NoteText": gdjs.Game_32SceneCode.GDNoteTextObjects2});
gdjs.Game_32SceneCode.eventsList11 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

for (gdjs.Game_32SceneCode.forEachIndex2 = 0;gdjs.Game_32SceneCode.forEachIndex2 < gdjs.Game_32SceneCode.GDPlayerObjects1.length;++gdjs.Game_32SceneCode.forEachIndex2) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDNoteInputObjects1, gdjs.Game_32SceneCode.GDNoteInputObjects2);

gdjs.Game_32SceneCode.GDNoteSignObjects2.length = 0;

gdjs.Game_32SceneCode.GDNoteTextObjects2.length = 0;

gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;


gdjs.Game_32SceneCode.forEachTemporary2 = gdjs.Game_32SceneCode.GDPlayerObjects1[gdjs.Game_32SceneCode.forEachIndex2];
gdjs.Game_32SceneCode.GDPlayerObjects2.push(gdjs.Game_32SceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(1), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).add(1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteSignObjects2Objects, (( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getX()), (( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getY()), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects2[i].getBehavior("Object3D").setZ(0);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteTextObjects2Objects, (( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getX()) + 30, (( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getY()) - 80, "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteTextObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteTextObjects2[i].setBBText(((gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0).getAsString() + ": " + (( gdjs.Game_32SceneCode.GDNoteInputObjects2.length === 0 ) ? "" :gdjs.Game_32SceneCode.GDNoteInputObjects2[0].getText()));
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber())).getChild("name").setString(((gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber())).getChild("text").setString((( gdjs.Game_32SceneCode.GDNoteInputObjects2.length === 0 ) ? "" :gdjs.Game_32SceneCode.GDNoteInputObjects2[0].getText()));
}
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber())).getChild("x").setNumber((( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getX()));
}
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber())).getChild("y").setNumber((( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getY()));
}
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber())).getChild("z").setNumber(0);
}
}
}

}


};gdjs.Game_32SceneCode.asyncCallback12288108 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(12288108, gdjs.Game_32SceneCode.asyncCallback12288108);
gdjs.Game_32SceneCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "NoteSave", runtimeScene.getScene().getVariables().getFromIndex(2), null), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback12288108(runtimeScene, asyncObjectsList)), 12288108, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.asyncCallback18997836 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PollTimer");
}
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(18997836, gdjs.Game_32SceneCode.asyncCallback18997836);
gdjs.Game_32SceneCode.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "NoteFetch", runtimeScene.getScene().getVariables().getFromIndex(1), null), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback18997836(runtimeScene, asyncObjectsList)), 18997836, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.eventsList15 = function(runtimeScene, asyncObjectsList) {

};gdjs.Game_32SceneCode.eventsList16 = function(runtimeScene, asyncObjectsList) {

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteSignObjects3Objects = Hashtable.newFrom({"NoteSign": gdjs.Game_32SceneCode.GDNoteSignObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteTextObjects3Objects = Hashtable.newFrom({"NoteText": gdjs.Game_32SceneCode.GDNoteTextObjects3});
gdjs.Game_32SceneCode.eventsList17 = function(runtimeScene, asyncObjectsList) {

};gdjs.Game_32SceneCode.eventsList18 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(runtimeScene.getObjects("NoteSign"), gdjs.Game_32SceneCode.GDNoteSignObjects3);

for (gdjs.Game_32SceneCode.forEachIndex4 = 0;gdjs.Game_32SceneCode.forEachIndex4 < gdjs.Game_32SceneCode.GDNoteSignObjects3.length;++gdjs.Game_32SceneCode.forEachIndex4) {
gdjs.Game_32SceneCode.GDNoteSignObjects4.length = 0;


gdjs.Game_32SceneCode.forEachTemporary4 = gdjs.Game_32SceneCode.GDNoteSignObjects3[gdjs.Game_32SceneCode.forEachIndex4];
gdjs.Game_32SceneCode.GDNoteSignObjects4.push(gdjs.Game_32SceneCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects4[i].deleteFromScene(runtimeScene);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NoteText"), gdjs.Game_32SceneCode.GDNoteTextObjects3);

for (gdjs.Game_32SceneCode.forEachIndex4 = 0;gdjs.Game_32SceneCode.forEachIndex4 < gdjs.Game_32SceneCode.GDNoteTextObjects3.length;++gdjs.Game_32SceneCode.forEachIndex4) {
gdjs.Game_32SceneCode.GDNoteTextObjects4.length = 0;


gdjs.Game_32SceneCode.forEachTemporary4 = gdjs.Game_32SceneCode.GDNoteTextObjects3[gdjs.Game_32SceneCode.forEachIndex4];
gdjs.Game_32SceneCode.GDNoteTextObjects4.push(gdjs.Game_32SceneCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteTextObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteTextObjects4[i].deleteFromScene(runtimeScene);
}
}
}
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("noteIdx", variable);
}
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("noteData", variable);
}
gdjs.Game_32SceneCode.localVariables.push(variables);
}
const keyIteratorReference3 = gdjs.Game_32SceneCode.localVariables[1].getFromIndex(0);
const valueIteratorReference3 = gdjs.Game_32SceneCode.localVariables[1].getFromIndex(1);
const iterableReference3 = runtimeScene.getGame().getVariables().getFromIndex(1);
if(!iterableReference3.isPrimitive()) {
for(
    const iteratorKey3 in 
    iterableReference3.getType() === "structure"
      ? iterableReference3.getAllChildren()
      : iterableReference3.getType() === "array"
        ? iterableReference3.getAllChildrenArray()
        : []
) {
    if(iterableReference3.getType() === "structure")
        keyIteratorReference3.setString(iteratorKey3);
    else if(iterableReference3.getType() === "array")
        keyIteratorReference3.setNumber(iteratorKey3);
    const structureChildVariable3 = iterableReference3.getChild(iteratorKey3)
    valueIteratorReference3.castTo(structureChildVariable3.getType())
    if(structureChildVariable3.isPrimitive()) {
        valueIteratorReference3.setValue(structureChildVariable3.getValue());
    } else if (structureChildVariable3.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference3.replaceChildren(structureChildVariable3.getAllChildren());
    } else if (structureChildVariable3.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference3.replaceChildrenArray(structureChildVariable3.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.Game_32SceneCode.GDNoteSignObjects3.length = 0;

gdjs.Game_32SceneCode.GDNoteTextObjects3.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteSignObjects3Objects, runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.Game_32SceneCode.localVariables[1].getFromIndex(0).getAsString()).getChild("x").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.Game_32SceneCode.localVariables[1].getFromIndex(0).getAsString()).getChild("y").getAsNumber(), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects3[i].getBehavior("Object3D").setZ(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.Game_32SceneCode.localVariables[1].getFromIndex(0).getAsString()).getChild("z").getAsNumber());
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteTextObjects3Objects, runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.Game_32SceneCode.localVariables[1].getFromIndex(0).getAsString()).getChild("x").getAsNumber() + 30, runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.Game_32SceneCode.localVariables[1].getFromIndex(0).getAsString()).getChild("y").getAsNumber() - 80, "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteTextObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteTextObjects3[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.Game_32SceneCode.localVariables[1].getFromIndex(0).getAsString()).getChild("name").getAsString() + ": " + runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.Game_32SceneCode.localVariables[1].getFromIndex(0).getAsString()).getChild("text").getAsString());
}
}
}
}
}
gdjs.Game_32SceneCode.localVariables.pop();

}


};gdjs.Game_32SceneCode.asyncCallback16438716 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects2);
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(1));
}
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects2[i].setBBText("✓ Loaded " + gdjs.evtTools.common.toString(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsNumber()) + " notes from server");
}
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList18(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(16438716, gdjs.Game_32SceneCode.asyncCallback16438716);
gdjs.Game_32SceneCode.eventsList19 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ReadResponseText.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1), runtimeScene.getScene().getVariables().getFromIndex(0), null), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback16438716(runtimeScene, asyncObjectsList)), 16438716, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.asyncCallback20243012 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(20243012, gdjs.Game_32SceneCode.asyncCallback20243012);
gdjs.Game_32SceneCode.eventsList20 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "NoteFetch", runtimeScene.getScene().getVariables().getFromIndex(1), null), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback20243012(runtimeScene, asyncObjectsList)), 20243012, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteSignObjects2Objects = Hashtable.newFrom({"NoteSign": gdjs.Game_32SceneCode.GDNoteSignObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteTextObjects2Objects = Hashtable.newFrom({"NoteText": gdjs.Game_32SceneCode.GDNoteTextObjects2});
gdjs.Game_32SceneCode.eventsList21 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList22 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("noteIndex", variable);
}
{
const variable = new gdjs.Variable();
variables._declare("noteData", variable);
}
gdjs.Game_32SceneCode.localVariables.push(variables);
}
const keyIteratorReference2 = gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0);
const valueIteratorReference2 = gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1);
const iterableReference2 = runtimeScene.getGame().getVariables().getFromIndex(1);
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.Game_32SceneCode.GDNoteSignObjects2.length = 0;

gdjs.Game_32SceneCode.GDNoteTextObjects2.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteSignObjects2Objects, runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsString()).getChild("x").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsString()).getChild("y").getAsNumber(), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects2[i].getBehavior("Object3D").setZ(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsString()).getChild("z").getAsNumber());
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteTextObjects2Objects, runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsString()).getChild("x").getAsNumber() + 30, runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsString()).getChild("y").getAsNumber() - 80, "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteTextObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteTextObjects2[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsString()).getChild("name").getAsString() + ": " + runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsString()).getChild("text").getAsString());
}
}
}
}
}
gdjs.Game_32SceneCode.localVariables.pop();

}


};gdjs.Game_32SceneCode.eventsList23 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NoteInput"), gdjs.Game_32SceneCode.GDNoteInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("PathfindingBoundary"), gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("PostButton"), gdjs.Game_32SceneCode.GDPostButtonObjects1);
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;

{gdjs.multiplayer.authenticateAndQuickJoinLobby(runtimeScene, true, true);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, 288, 480, "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Object3D").setZ(0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(1)).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPostButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPostButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteInputObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteInputObjects1[i].hide();
}
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "notebutton");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(1), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, "Object3D", 1000, (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getAngle()) + 90, 55, "", null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12894028);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("JoinButton"), gdjs.Game_32SceneCode.GDJoinButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDJoinButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDJoinButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDJoinButtonObjects1[k] = gdjs.Game_32SceneCode.GDJoinButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDJoinButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayerMessageManager.hasCustomMessageBeenReceived("PlayerName");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayerMessageManager.hasAnyPlayerJustJoined();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayerMessageManager.getLatestPlayerWhoJustJoined() != gdjs.multiplayer.getCurrentPlayerNumber());
}
}
if (isConditionTrue_0) {
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, 288, 480, "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Object3D").setZ(0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("MultiplayerObject").setPlayerObjectOwnership(gdjs.multiplayerMessageManager.getLatestPlayerWhoJustJoined());
}
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NameTag"), gdjs.Game_32SceneCode.GDNameTagObjects1);

for (gdjs.Game_32SceneCode.forEachIndex2 = 0;gdjs.Game_32SceneCode.forEachIndex2 < gdjs.Game_32SceneCode.GDNameTagObjects1.length;++gdjs.Game_32SceneCode.forEachIndex2) {
gdjs.Game_32SceneCode.GDNameTagObjects2.length = 0;


gdjs.Game_32SceneCode.forEachTemporary2 = gdjs.Game_32SceneCode.GDNameTagObjects1[gdjs.Game_32SceneCode.forEachIndex2];
gdjs.Game_32SceneCode.GDNameTagObjects2.push(gdjs.Game_32SceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNameTagObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNameTagObjects2[i].deleteFromScene(runtimeScene);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

for (gdjs.Game_32SceneCode.forEachIndex2 = 0;gdjs.Game_32SceneCode.forEachIndex2 < gdjs.Game_32SceneCode.GDPlayerObjects1.length;++gdjs.Game_32SceneCode.forEachIndex2) {
gdjs.Game_32SceneCode.GDNameTagObjects2.length = 0;

gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;


gdjs.Game_32SceneCode.forEachTemporary2 = gdjs.Game_32SceneCode.GDPlayerObjects1[gdjs.Game_32SceneCode.forEachIndex2];
gdjs.Game_32SceneCode.GDPlayerObjects2.push(gdjs.Game_32SceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariableString(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) != "" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNameTagObjects2Objects, (( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getX()), (( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getY()), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNameTagObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNameTagObjects2[i].setBBText(((gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0).getAsString());
}
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "notebutton");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NoteButton"), gdjs.Game_32SceneCode.GDNoteButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDNoteButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDNoteButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDNoteButtonObjects1[k] = gdjs.Game_32SceneCode.GDNoteButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDNoteButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDNoteButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NoteInput"), gdjs.Game_32SceneCode.GDNoteInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("PostButton"), gdjs.Game_32SceneCode.GDPostButtonObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteInputObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteInputObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPostButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPostButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PostButton"), gdjs.Game_32SceneCode.GDPostButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPostButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPostButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPostButtonObjects1[k] = gdjs.Game_32SceneCode.GDPostButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPostButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NoteButton"), gdjs.Game_32SceneCode.GDNoteButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NoteInput"), gdjs.Game_32SceneCode.GDNoteInputObjects1);
/* Reuse gdjs.Game_32SceneCode.GDPostButtonObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteInputObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteInputObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPostButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPostButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteButtonObjects1[i].hide(false);
}
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PostButton"), gdjs.Game_32SceneCode.GDPostButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPostButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPostButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPostButtonObjects1[k] = gdjs.Game_32SceneCode.GDPostButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPostButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects1[i].setBBText("[color=yellow]Sending note...[/color]");
}
}
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "NoteSave", runtimeScene.getScene().getVariables().getFromIndex(4).getAsString(), null);
}
{gdjs.evtsExt__AdvancedHTTP__UseCORSBypass.func(runtimeScene, "NoteSave", true, null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "NoteSave", "PUT", null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, "application/json", "NoteSave", "Content-Type", null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestBody.func(runtimeScene, gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(1)), "NoteSave", null);
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AdvancedHTTP__ResponseSuccess.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2), null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects1[i].setBBText("[color=green]Note saved! (" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(1))) + " total)[/color]");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects1[i].setBBText("[color=cyan]Loading notes from Firebase...[/color]");
}
}
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "NoteFetch", runtimeScene.getScene().getVariables().getFromIndex(4).getAsString(), null);
}
{gdjs.evtsExt__AdvancedHTTP__UseCORSBypass.func(runtimeScene, "NoteFetch", true, null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "NoteFetch", "GET", null);
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("noteCount", variable);
}
gdjs.Game_32SceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AdvancedHTTP__ResponseSuccess.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1), null);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList19(runtimeScene);} //End of subevents
}
gdjs.Game_32SceneCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AdvancedHTTP__ResponseStatusCode.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1), null) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() != 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects1[i].setBBText("[color=orange]Cannot reach Firebase[/color]");
}
}
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("code", variable);
}
gdjs.Game_32SceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AdvancedHTTP__ResponseStatusCode.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1), null) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__AdvancedHTTP__ResponseSuccess.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1), null));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects1);
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).setNumber(gdjs.evtsExt__AdvancedHTTP__ResponseStatusCode.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1), null));
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects1[i].setBBText("[color=red]Load failed (HTTP " + gdjs.evtTools.common.toString(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsNumber()) + ")[/color]");
}
}
}
gdjs.Game_32SceneCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "PollTimer") > 5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PollTimer");
}
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "NoteFetch", runtimeScene.getScene().getVariables().getFromIndex(4).getAsString(), null);
}
{gdjs.evtsExt__AdvancedHTTP__UseCORSBypass.func(runtimeScene, "NoteFetch", true, null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "NoteFetch", "GET", null);
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList20(runtimeScene);} //End of subevents
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("code", variable);
}
gdjs.Game_32SceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AdvancedHTTP__ResponseStatusCode.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2), null) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__AdvancedHTTP__ResponseSuccess.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2), null));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects1);
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).setNumber(gdjs.evtsExt__AdvancedHTTP__ResponseStatusCode.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2), null));
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects1[i].setBBText("[color=red]Save failed (HTTP " + gdjs.evtTools.common.toString(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsNumber()) + ")[/color]");
}
}
}
gdjs.Game_32SceneCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList22(runtimeScene);} //End of subevents
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects1.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects2.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects3.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects4.length = 0;
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects3.length = 0;
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects4.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects1.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects2.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects3.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects4.length = 0;
gdjs.Game_32SceneCode.GDWallObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallObjects3.length = 0;
gdjs.Game_32SceneCode.GDWallObjects4.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects1.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects2.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects3.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects4.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDNPCObjects1.length = 0;
gdjs.Game_32SceneCode.GDNPCObjects2.length = 0;
gdjs.Game_32SceneCode.GDNPCObjects3.length = 0;
gdjs.Game_32SceneCode.GDNPCObjects4.length = 0;
gdjs.Game_32SceneCode.GDGrassObjects1.length = 0;
gdjs.Game_32SceneCode.GDGrassObjects2.length = 0;
gdjs.Game_32SceneCode.GDGrassObjects3.length = 0;
gdjs.Game_32SceneCode.GDGrassObjects4.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects1.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects2.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects3.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects4.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDNameTagObjects1.length = 0;
gdjs.Game_32SceneCode.GDNameTagObjects2.length = 0;
gdjs.Game_32SceneCode.GDNameTagObjects3.length = 0;
gdjs.Game_32SceneCode.GDNameTagObjects4.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects4.length = 0;

gdjs.Game_32SceneCode.eventsList23(runtimeScene);
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects1.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects2.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects3.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects4.length = 0;
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects3.length = 0;
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects4.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects1.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects2.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects3.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects4.length = 0;
gdjs.Game_32SceneCode.GDWallObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallObjects3.length = 0;
gdjs.Game_32SceneCode.GDWallObjects4.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects1.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects2.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects3.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects4.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDNPCObjects1.length = 0;
gdjs.Game_32SceneCode.GDNPCObjects2.length = 0;
gdjs.Game_32SceneCode.GDNPCObjects3.length = 0;
gdjs.Game_32SceneCode.GDNPCObjects4.length = 0;
gdjs.Game_32SceneCode.GDGrassObjects1.length = 0;
gdjs.Game_32SceneCode.GDGrassObjects2.length = 0;
gdjs.Game_32SceneCode.GDGrassObjects3.length = 0;
gdjs.Game_32SceneCode.GDGrassObjects4.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects1.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects2.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects3.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects4.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDNameTagObjects1.length = 0;
gdjs.Game_32SceneCode.GDNameTagObjects2.length = 0;
gdjs.Game_32SceneCode.GDNameTagObjects3.length = 0;
gdjs.Game_32SceneCode.GDNameTagObjects4.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects4.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
