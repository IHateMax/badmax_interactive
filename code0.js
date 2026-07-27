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
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects5= [];
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects6= [];
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects7= [];
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects1= [];
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects2= [];
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects3= [];
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects4= [];
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects5= [];
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects6= [];
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects7= [];
gdjs.Game_32SceneCode.GDCameraObjects1= [];
gdjs.Game_32SceneCode.GDCameraObjects2= [];
gdjs.Game_32SceneCode.GDCameraObjects3= [];
gdjs.Game_32SceneCode.GDCameraObjects4= [];
gdjs.Game_32SceneCode.GDCameraObjects5= [];
gdjs.Game_32SceneCode.GDCameraObjects6= [];
gdjs.Game_32SceneCode.GDCameraObjects7= [];
gdjs.Game_32SceneCode.GDWallObjects1= [];
gdjs.Game_32SceneCode.GDWallObjects2= [];
gdjs.Game_32SceneCode.GDWallObjects3= [];
gdjs.Game_32SceneCode.GDWallObjects4= [];
gdjs.Game_32SceneCode.GDWallObjects5= [];
gdjs.Game_32SceneCode.GDWallObjects6= [];
gdjs.Game_32SceneCode.GDWallObjects7= [];
gdjs.Game_32SceneCode.GDWaterObjects1= [];
gdjs.Game_32SceneCode.GDWaterObjects2= [];
gdjs.Game_32SceneCode.GDWaterObjects3= [];
gdjs.Game_32SceneCode.GDWaterObjects4= [];
gdjs.Game_32SceneCode.GDWaterObjects5= [];
gdjs.Game_32SceneCode.GDWaterObjects6= [];
gdjs.Game_32SceneCode.GDWaterObjects7= [];
gdjs.Game_32SceneCode.GDGroundObjects1= [];
gdjs.Game_32SceneCode.GDGroundObjects2= [];
gdjs.Game_32SceneCode.GDGroundObjects3= [];
gdjs.Game_32SceneCode.GDGroundObjects4= [];
gdjs.Game_32SceneCode.GDGroundObjects5= [];
gdjs.Game_32SceneCode.GDGroundObjects6= [];
gdjs.Game_32SceneCode.GDGroundObjects7= [];
gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDPlayerObjects3= [];
gdjs.Game_32SceneCode.GDPlayerObjects4= [];
gdjs.Game_32SceneCode.GDPlayerObjects5= [];
gdjs.Game_32SceneCode.GDPlayerObjects6= [];
gdjs.Game_32SceneCode.GDPlayerObjects7= [];
gdjs.Game_32SceneCode.GDNPCObjects1= [];
gdjs.Game_32SceneCode.GDNPCObjects2= [];
gdjs.Game_32SceneCode.GDNPCObjects3= [];
gdjs.Game_32SceneCode.GDNPCObjects4= [];
gdjs.Game_32SceneCode.GDNPCObjects5= [];
gdjs.Game_32SceneCode.GDNPCObjects6= [];
gdjs.Game_32SceneCode.GDNPCObjects7= [];
gdjs.Game_32SceneCode.GDGrassObjects1= [];
gdjs.Game_32SceneCode.GDGrassObjects2= [];
gdjs.Game_32SceneCode.GDGrassObjects3= [];
gdjs.Game_32SceneCode.GDGrassObjects4= [];
gdjs.Game_32SceneCode.GDGrassObjects5= [];
gdjs.Game_32SceneCode.GDGrassObjects6= [];
gdjs.Game_32SceneCode.GDGrassObjects7= [];
gdjs.Game_32SceneCode.GDNameInputObjects1= [];
gdjs.Game_32SceneCode.GDNameInputObjects2= [];
gdjs.Game_32SceneCode.GDNameInputObjects3= [];
gdjs.Game_32SceneCode.GDNameInputObjects4= [];
gdjs.Game_32SceneCode.GDNameInputObjects5= [];
gdjs.Game_32SceneCode.GDNameInputObjects6= [];
gdjs.Game_32SceneCode.GDNameInputObjects7= [];
gdjs.Game_32SceneCode.GDJoinButtonObjects1= [];
gdjs.Game_32SceneCode.GDJoinButtonObjects2= [];
gdjs.Game_32SceneCode.GDJoinButtonObjects3= [];
gdjs.Game_32SceneCode.GDJoinButtonObjects4= [];
gdjs.Game_32SceneCode.GDJoinButtonObjects5= [];
gdjs.Game_32SceneCode.GDJoinButtonObjects6= [];
gdjs.Game_32SceneCode.GDJoinButtonObjects7= [];
gdjs.Game_32SceneCode.GDNameTagObjects1= [];
gdjs.Game_32SceneCode.GDNameTagObjects2= [];
gdjs.Game_32SceneCode.GDNameTagObjects3= [];
gdjs.Game_32SceneCode.GDNameTagObjects4= [];
gdjs.Game_32SceneCode.GDNameTagObjects5= [];
gdjs.Game_32SceneCode.GDNameTagObjects6= [];
gdjs.Game_32SceneCode.GDNameTagObjects7= [];
gdjs.Game_32SceneCode.GDStatusTextObjects1= [];
gdjs.Game_32SceneCode.GDStatusTextObjects2= [];
gdjs.Game_32SceneCode.GDStatusTextObjects3= [];
gdjs.Game_32SceneCode.GDStatusTextObjects4= [];
gdjs.Game_32SceneCode.GDStatusTextObjects5= [];
gdjs.Game_32SceneCode.GDStatusTextObjects6= [];
gdjs.Game_32SceneCode.GDStatusTextObjects7= [];
gdjs.Game_32SceneCode.GDdog_9595playerObjects1= [];
gdjs.Game_32SceneCode.GDdog_9595playerObjects2= [];
gdjs.Game_32SceneCode.GDdog_9595playerObjects3= [];
gdjs.Game_32SceneCode.GDdog_9595playerObjects4= [];
gdjs.Game_32SceneCode.GDdog_9595playerObjects5= [];
gdjs.Game_32SceneCode.GDdog_9595playerObjects6= [];
gdjs.Game_32SceneCode.GDdog_9595playerObjects7= [];
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects1= [];
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects2= [];
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects3= [];
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects4= [];
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects5= [];
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects6= [];
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects7= [];
gdjs.Game_32SceneCode.GDNoteSignObjects1= [];
gdjs.Game_32SceneCode.GDNoteSignObjects2= [];
gdjs.Game_32SceneCode.GDNoteSignObjects3= [];
gdjs.Game_32SceneCode.GDNoteSignObjects4= [];
gdjs.Game_32SceneCode.GDNoteSignObjects5= [];
gdjs.Game_32SceneCode.GDNoteSignObjects6= [];
gdjs.Game_32SceneCode.GDNoteSignObjects7= [];
gdjs.Game_32SceneCode.GDNoteTextObjects1= [];
gdjs.Game_32SceneCode.GDNoteTextObjects2= [];
gdjs.Game_32SceneCode.GDNoteTextObjects3= [];
gdjs.Game_32SceneCode.GDNoteTextObjects4= [];
gdjs.Game_32SceneCode.GDNoteTextObjects5= [];
gdjs.Game_32SceneCode.GDNoteTextObjects6= [];
gdjs.Game_32SceneCode.GDNoteTextObjects7= [];
gdjs.Game_32SceneCode.GDNoteInputObjects1= [];
gdjs.Game_32SceneCode.GDNoteInputObjects2= [];
gdjs.Game_32SceneCode.GDNoteInputObjects3= [];
gdjs.Game_32SceneCode.GDNoteInputObjects4= [];
gdjs.Game_32SceneCode.GDNoteInputObjects5= [];
gdjs.Game_32SceneCode.GDNoteInputObjects6= [];
gdjs.Game_32SceneCode.GDNoteInputObjects7= [];
gdjs.Game_32SceneCode.GDNoteButtonObjects1= [];
gdjs.Game_32SceneCode.GDNoteButtonObjects2= [];
gdjs.Game_32SceneCode.GDNoteButtonObjects3= [];
gdjs.Game_32SceneCode.GDNoteButtonObjects4= [];
gdjs.Game_32SceneCode.GDNoteButtonObjects5= [];
gdjs.Game_32SceneCode.GDNoteButtonObjects6= [];
gdjs.Game_32SceneCode.GDNoteButtonObjects7= [];
gdjs.Game_32SceneCode.GDPostButtonObjects1= [];
gdjs.Game_32SceneCode.GDPostButtonObjects2= [];
gdjs.Game_32SceneCode.GDPostButtonObjects3= [];
gdjs.Game_32SceneCode.GDPostButtonObjects4= [];
gdjs.Game_32SceneCode.GDPostButtonObjects5= [];
gdjs.Game_32SceneCode.GDPostButtonObjects6= [];
gdjs.Game_32SceneCode.GDPostButtonObjects7= [];
gdjs.Game_32SceneCode.GDNoteText3DObjects1= [];
gdjs.Game_32SceneCode.GDNoteText3DObjects2= [];
gdjs.Game_32SceneCode.GDNoteText3DObjects3= [];
gdjs.Game_32SceneCode.GDNoteText3DObjects4= [];
gdjs.Game_32SceneCode.GDNoteText3DObjects5= [];
gdjs.Game_32SceneCode.GDNoteText3DObjects6= [];
gdjs.Game_32SceneCode.GDNoteText3DObjects7= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595playerObjects1Objects = Hashtable.newFrom({"dog_player": gdjs.Game_32SceneCode.GDdog_9595playerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteSignObjects1Objects = Hashtable.newFrom({"NoteSign": gdjs.Game_32SceneCode.GDNoteSignObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595playerObjects2Objects = Hashtable.newFrom({"dog_player": gdjs.Game_32SceneCode.GDdog_9595playerObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteSignObjects2Objects = Hashtable.newFrom({"NoteSign": gdjs.Game_32SceneCode.GDNoteSignObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteText3DObjects2Objects = Hashtable.newFrom({"NoteText3D": gdjs.Game_32SceneCode.GDNoteText3DObjects2});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19751308);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDNoteSignObjects2 */
gdjs.Game_32SceneCode.GDNoteText3DObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteText3DObjects2Objects, (( gdjs.Game_32SceneCode.GDNoteSignObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDNoteSignObjects2[0].getAABBCenterX()), (( gdjs.Game_32SceneCode.GDNoteSignObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDNoteSignObjects2[0].getAABBCenterY()), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteText3DObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteText3DObjects2[i].getBehavior("Text").setText(((gdjs.Game_32SceneCode.GDNoteSignObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDNoteSignObjects2[0].getVariables()).getFromIndex(1).getAsString() + ": " + ((gdjs.Game_32SceneCode.GDNoteSignObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDNoteSignObjects2[0].getVariables()).getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteText3DObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteText3DObjects2[i].SetWrappingWidth(250, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteText3DObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteText3DObjects2[i].SetWrapping(true, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteText3DObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteText3DObjects2[i].getBehavior("Object3D").setRotationX(-0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteText3DObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteText3DObjects2[i].getBehavior("Object3D").setZ(150);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteText3DObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteText3DObjects2[i].putAround((( gdjs.Game_32SceneCode.GDNoteSignObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDNoteSignObjects2[0].getX()), (( gdjs.Game_32SceneCode.GDNoteSignObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDNoteSignObjects2[0].getY()), 1, 0);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "BARK", false, 100, gdjs.randomFloatInRange(0.5, 1.5));
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteText3DObjects1Objects = Hashtable.newFrom({"NoteText3D": gdjs.Game_32SceneCode.GDNoteText3DObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595playerObjects1Objects = Hashtable.newFrom({"dog_player": gdjs.Game_32SceneCode.GDdog_9595playerObjects1});
gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(gdjs.Game_32SceneCode.GDNoteSignObjects1, gdjs.Game_32SceneCode.GDNoteSignObjects2);

gdjs.copyArray(gdjs.Game_32SceneCode.GDdog_9595playerObjects1, gdjs.Game_32SceneCode.GDdog_9595playerObjects2);


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595playerObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteSignObjects2Objects, 25, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDNoteSignObjects2 */
gdjs.copyArray(runtimeScene.getObjects("NoteText"), gdjs.Game_32SceneCode.GDNoteTextObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteTextObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteTextObjects2[i].setBBText(((gdjs.Game_32SceneCode.GDNoteSignObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDNoteSignObjects2[0].getVariables()).getFromIndex(1).getAsString() + ": " + ((gdjs.Game_32SceneCode.GDNoteSignObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDNoteSignObjects2[0].getVariables()).getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteTextObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteTextObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects2[i].setColor("255;0;0");
}
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NoteText3D"), gdjs.Game_32SceneCode.GDNoteText3DObjects1);
/* Reuse gdjs.Game_32SceneCode.GDdog_9595playerObjects1 */

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteText3DObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595playerObjects1Objects, 200, true);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDNoteText3DObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteText3DObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteText3DObjects1[i].deleteFromScene(runtimeScene);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteButtonObjects1Objects = Hashtable.newFrom({"NoteButton": gdjs.Game_32SceneCode.GDNoteButtonObjects1});
gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(gdjs.Game_32SceneCode.GDdog_9595playerObjects2, gdjs.Game_32SceneCode.GDdog_9595playerObjects3);


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595playerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595playerObjects3[i].getBehavior("Pathfinding").destinationReached() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595playerObjects3[k] = gdjs.Game_32SceneCode.GDdog_9595playerObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595playerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDdog_9595playerObjects3 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595playerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595playerObjects3[i].getBehavior("Animation").setAnimationIndex(0);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDdog_9595playerObjects2, gdjs.Game_32SceneCode.GDdog_9595playerObjects3);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595playerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595playerObjects3[i].getBehavior("Animation").setAnimationIndex(1);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

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


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNameTagObjects3Objects = Hashtable.newFrom({"NameTag": gdjs.Game_32SceneCode.GDNameTagObjects3});
gdjs.Game_32SceneCode.eventsList5 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("dog_player"), gdjs.Game_32SceneCode.GDdog_9595playerObjects2);

for (gdjs.Game_32SceneCode.forEachIndex3 = 0;gdjs.Game_32SceneCode.forEachIndex3 < gdjs.Game_32SceneCode.GDdog_9595playerObjects2.length;++gdjs.Game_32SceneCode.forEachIndex3) {
gdjs.Game_32SceneCode.GDNameTagObjects3.length = 0;

gdjs.Game_32SceneCode.GDdog_9595playerObjects3.length = 0;


gdjs.Game_32SceneCode.forEachTemporary3 = gdjs.Game_32SceneCode.GDdog_9595playerObjects2[gdjs.Game_32SceneCode.forEachIndex3];
gdjs.Game_32SceneCode.GDdog_9595playerObjects3.push(gdjs.Game_32SceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595playerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595playerObjects3[i].getVariableString(gdjs.Game_32SceneCode.GDdog_9595playerObjects3[i].getVariables().getFromIndex(4)) != "" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595playerObjects3[k] = gdjs.Game_32SceneCode.GDdog_9595playerObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595playerObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNameTagObjects3Objects, (( gdjs.Game_32SceneCode.GDdog_9595playerObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595playerObjects3[0].getX()), (( gdjs.Game_32SceneCode.GDdog_9595playerObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595playerObjects3[0].getY()), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNameTagObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNameTagObjects3[i].setBBText(((gdjs.Game_32SceneCode.GDdog_9595playerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDdog_9595playerObjects3[0].getVariables()).getFromIndex(4).getAsString());
}
}
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NameTagTimer");
}
}

}


};gdjs.Game_32SceneCode.userFunc0x13bbdf8 = function GDJSInlineCode(runtimeScene) {
try {
  var raw = runtimeScene
    .getVariables()
    .get("NoteRaw")
    .getAsString();

  var words = [
    "2g1c",
    "2 girls 1 cup",
    "acrotomophilia",
    "alabama hot pocket",
    "alaskan pipeline",
    "anal",
    "anilingus",
    "anus",
    "apeshit",
    "arsehole",
    "ass",
    "asshole",
    "assmunch",
    "auto erotic",
    "autoerotic",
    "babeland",
    "baby batter",
    "baby juice",
    "ball gag",
    "ball gravy",
    "ball kicking",
    "ball licking",
    "ball sack",
    "ball sucking",
    "bangbros",
    "bangbus",
    "bareback",
    "barely legal",
    "barenaked",
    "bastard",
    "bastardo",
    "bastinado",
    "bbw",
    "bdsm",
    "beaner",
    "beaners",
    "beaver cleaver",
    "beaver lips",
    "beastiality",
    "bestiality",
    "big black",
    "big breasts",
    "big knockers",
    "big tits",
    "bimbos",
    "birdlock",
    "bitch",
    "bitches",
    "black cock",
    "blonde action",
    "blonde on blonde action",
    "blowjob",
    "blow job",
    "blow your load",
    "blue waffle",
    "blumpkin",
    "bollocks",
    "bondage",
    "boner",
    "boob",
    "boobs",
    "booty call",
    "brown showers",
    "brunette action",
    "bukkake",
    "bulldyke",
    "bullet vibe",
    "bullshit",
    "bung hole",
    "bunghole",
    "busty",
    "butt",
    "buttcheeks",
    "butthole",
    "camel toe",
    "camgirl",
    "camslut",
    "camwhore",
    "carpet muncher",
    "carpetmuncher",
    "chocolate rosebuds",
    "cialis",
    "circlejerk",
    "cleveland steamer",
    "clit",
    "clitoris",
    "clover clamps",
    "clusterfuck",
    "cock",
    "cocks",
    "coprolagnia",
    "coprophilia",
    "cornhole",
    "coon",
    "coons",
    "creampie",
    "cum",
    "cumming",
    "cumshot",
    "cumshots",
    "cunnilingus",
    "cunt",
    "darkie",
    "date rape",
    "daterape",
    "deep throat",
    "deepthroat",
    "dendrophilia",
    "dick",
    "dildo",
    "dingleberry",
    "dingleberries",
    "dirty pillows",
    "dirty sanchez",
    "doggie style",
    "doggiestyle",
    "doggy style",
    "doggystyle",
    "dog style",
    "dolcett",
    "domination",
    "dominatrix",
    "dommes",
    "donkey punch",
    "double dong",
    "double penetration",
    "dp action",
    "dry hump",
    "dvda",
    "eat my ass",
    "ecchi",
    "ejaculation",
    "erotic",
    "erotism",
    "escort",
    "eunuch",
    "fag",
    "faggot",
    "fecal",
    "felch",
    "fellatio",
    "feltch",
    "female squirting",
    "femdom",
    "figging",
    "fingerbang",
    "fingering",
    "fisting",
    "foot fetish",
    "footjob",
    "frotting",
    "fuck",
    "fuck buttons",
    "fuckin",
    "fucking",
    "fucktards",
    "fudge packer",
    "fudgepacker",
    "futanari",
    "gangbang",
    "gang bang",
    "gay sex",
    "genitals",
    "giant cock",
    "girl on",
    "girl on top",
    "girls gone wild",
    "goatcx",
    "goatse",
    "god damn",
    "gokkun",
    "golden shower",
    "goodpoop",
    "goo girl",
    "goregasm",
    "grope",
    "group sex",
    "g-spot",
    "guro",
    "hand job",
    "handjob",
    "hard core",
    "hardcore",
    "hentai",
    "homoerotic",
    "honkey",
    "hooker",
    "horny",
    "hot carl",
    "hot chick",
    "how to kill",
    "how to murder",
    "huge fat",
    "humping",
    "incest",
    "intercourse",
    "jack off",
    "jail bait",
    "jailbait",
    "jelly donut",
    "jerk off",
    "jigaboo",
    "jiggaboo",
    "jiggerboo",
    "jizz",
    "juggs",
    "kike",
    "kinbaku",
    "kinkster",
    "kinky",
    "knobbing",
    "leather restraint",
    "leather straight jacket",
    "lemon party",
    "livesex",
    "lolita",
    "lovemaking",
    "make me come",
    "male squirting",
    "masturbate",
    "masturbating",
    "masturbation",
    "menage a trois",
    "milf",
    "missionary position",
    "mong",
    "motherfucker",
    "mound of venus",
    "mr hands",
    "muff diver",
    "muffdiving",
    "nambla",
    "nawashi",
    "negro",
    "neonazi",
    "nigga",
    "nigger",
    "nig nog",
    "nimphomania",
    "nipple",
    "nipples",
    "nsfw",
    "nsfw images",
    "nude",
    "nudity",
    "nutten",
    "nympho",
    "nymphomania",
    "octopussy",
    "omorashi",
    "one cup two girls",
    "one guy one jar",
    "orgasm",
    "orgy",
    "paedophile",
    "paki",
    "panties",
    "panty",
    "pedobear",
    "pedophile",
    "pegging",
    "penis",
    "phone sex",
    "piece of shit",
    "pikey",
    "pissing",
    "piss pig",
    "pisspig",
    "playboy",
    "pleasure chest",
    "pole smoker",
    "ponyplay",
    "poof",
    "poon",
    "poontang",
    "punany",
    "poop chute",
    "poopchute",
    "porn",
    "porno",
    "pornography",
    "prince albert piercing",
    "pthc",
    "pubes",
    "pussy",
    "queaf",
    "queef",
    "quim",
    "raghead",
    "raging boner",
    "rape",
    "raping",
    "rapist",
    "rectum",
    "reverse cowgirl",
    "rimjob",
    "rimming",
    "rosy palm",
    "rosy palm and her 5 sisters",
    "rusty trombone",
    "sadism",
    "santorum",
    "scat",
    "schlong",
    "scissoring",
    "semen",
    "sex",
    "sexcam",
    "sexo",
    "sexy",
    "sexual",
    "sexually",
    "sexuality",
    "shaved beaver",
    "shaved pussy",
    "shemale",
    "shibari",
    "shit",
    "shitblimp",
    "shitty",
    "shota",
    "shrimping",
    "skeet",
    "slanteye",
    "slut",
    "s&m",
    "smut",
    "snatch",
    "snowballing",
    "sodomize",
    "sodomy",
    "spastic",
    "spic",
    "splooge",
    "splooge moose",
    "spooge",
    "spread legs",
    "spunk",
    "strap on",
    "strapon",
    "strappado",
    "strip club",
    "style doggy",
    "suck",
    "sucks",
    "suicide girls",
    "sultry women",
    "swastika",
    "swinger",
    "tainted love",
    "taste my",
    "tea bagging",
    "threesome",
    "throating",
    "thumbzilla",
    "tied up",
    "tight white",
    "tit",
    "tits",
    "titties",
    "titty",
    "tongue in a",
    "topless",
    "tosser",
    "towelhead",
    "tranny",
    "tribadism",
    "tub girl",
    "tubgirl",
    "tushy",
    "twat",
    "twink",
    "twinkie",
    "two girls one cup",
    "undressing",
    "upskirt",
    "urethra play",
    "urophilia",
    "vagina",
    "venus mound",
    "viagra",
    "vibrator",
    "violet wand",
    "vorarephilia",
    "voyeur",
    "voyeurweb",
    "voyuer",
    "vulva",
    "wank",
    "wetback",
    "wet dream",
    "white power",
    "whore",
    "worldsex",
    "wrapping men",
    "wrinkled starfish",
    "xx",
    "xxx",
    "yaoi",
    "yellow showers",
    "yiffy",
    "zoophilia",
    "🖕"
  ];

  var escapeRegex = function(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  words.sort(function(a, b) {
    return b.length - a.length;
  });

  /*
    Uses (^|non-word) before the phrase and a lookahead after it.

    This works for:
    - Normal words
    - Multi-word phrases
    - Punctuation
    - The emoji entry
  */
  var badWordsRegex = new RegExp(
    "(^|[^A-Za-z0-9_])(" +
      words.map(escapeRegex).join("|") +
    ")(?=$|[^A-Za-z0-9_])",
    "gi"
  );

  function shuffleLetters(text) {
    var characters = text.split("");
    var letterPositions = [];
    var letters = [];

    for (var i = 0; i < characters.length; i++) {
      if (/[A-Za-z]/.test(characters[i])) {
        letterPositions.push(i);
        letters.push(characters[i]);
      }
    }

    if (letters.length < 2) {
      return text;
    }

    var original = letters.join("");
    var shuffled = letters.slice();

    /*
      Try repeatedly so short words do not randomly
      return in exactly the same order.
    */
    for (var attempt = 0; attempt < 30; attempt++) {
      shuffled = letters.slice();

      for (var j = shuffled.length - 1; j > 0; j--) {
        var randomIndex = Math.floor(Math.random() * (j + 1));
        var temporary = shuffled[j];

        shuffled[j] = shuffled[randomIndex];
        shuffled[randomIndex] = temporary;
      }

      if (shuffled.join("") !== original) {
        break;
      }
    }

    /*
      If it still did not change, rotate the letters.
      This handles words containing repeated letters.
    */
    if (shuffled.join("") === original && shuffled.length > 1) {
      shuffled.push(shuffled.shift());
    }

    for (var k = 0; k < letterPositions.length; k++) {
      characters[letterPositions[k]] = shuffled[k];
    }

    return characters.join("");
  }

  var clean = raw.replace(
    badWordsRegex,
    function(fullMatch, prefix, matchedWord) {
      /*
        An entry with no letters, such as the emoji,
        cannot be shuffled. Leave it unchanged.
      */
      return prefix + shuffleLetters(matchedWord);
    }
  );

  runtimeScene
    .getVariables()
    .get("NoteClean")
    .setString(clean);

} catch (e) {
  console.error("Bad-word shuffle error:", e);

  runtimeScene
    .getVariables()
    .get("NoteClean")
    .setString(
      runtimeScene
        .getVariables()
        .get("NoteRaw")
        .getAsString()
    );
}
};
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteSignObjects1Objects = Hashtable.newFrom({"NoteSign": gdjs.Game_32SceneCode.GDNoteSignObjects1});
gdjs.Game_32SceneCode.asyncCallback19948524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("PostButton"), gdjs.Game_32SceneCode.GDPostButtonObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPostButtonObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPostButtonObjects2[i].Activate(false, null);
}
}
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(19948524, gdjs.Game_32SceneCode.asyncCallback19948524);
gdjs.Game_32SceneCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
for (const obj of gdjs.Game_32SceneCode.GDPostButtonObjects1) asyncObjectsList.addObject("PostButton", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "NoteSave", runtimeScene.getScene().getVariables().getFromIndex(15), null), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback19948524(runtimeScene, asyncObjectsList)), 19948524, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.eventsList8 = function(runtimeScene) {

{


gdjs.Game_32SceneCode.userFunc0x13bbdf8(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NoteButton"), gdjs.Game_32SceneCode.GDNoteButtonObjects1);
/* Reuse gdjs.Game_32SceneCode.GDNoteInputObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDPostButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("dog_player"), gdjs.Game_32SceneCode.GDdog_9595playerObjects1);
gdjs.Game_32SceneCode.GDNoteSignObjects1.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(12).getChild("x").setNumber((( gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595playerObjects1[0].getX()));
}
{runtimeScene.getScene().getVariables().getFromIndex(12).getChild("y").setNumber((( gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595playerObjects1[0].getY()));
}
{runtimeScene.getScene().getVariables().getFromIndex(12).getChild("z").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(12).getChild("name").setString(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(((gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDdog_9595playerObjects1[0].getVariables()).getFromIndex(4).getAsString(), "[", ""), "]", ""));
}
{runtimeScene.getScene().getVariables().getFromIndex(12).getChild("text").setString(runtimeScene.getScene().getVariables().getFromIndex(26).getAsString());
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteSignObjects1Objects, (( gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595playerObjects1[0].getX()), (( gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595playerObjects1[0].getY()), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects1[i].getBehavior("Object3D").setZ(0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDNoteSignObjects1[i].getVariables().getFromIndex(1)).setString(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(((gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDdog_9595playerObjects1[0].getVariables()).getFromIndex(4).getAsString(), "[", ""), "]", ""));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDNoteSignObjects1[i].getVariables().getFromIndex(0)).setString(runtimeScene.getScene().getVariables().getFromIndex(26).getAsString());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteInputObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteInputObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPostButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPostButtonObjects1[i].hide();
}
}
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "NoteSave", runtimeScene.getScene().getVariables().getFromIndex(16).getAsString(), null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "NoteSave", "POST", null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestBody.func(runtimeScene, gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(12)), "NoteSave", null);
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.asyncCallback19863212 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(19863212, gdjs.Game_32SceneCode.asyncCallback19863212);
gdjs.Game_32SceneCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "NoteFetch", runtimeScene.getScene().getVariables().getFromIndex(14), null), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback19863212(runtimeScene, asyncObjectsList)), 19863212, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteSignObjects3Objects = Hashtable.newFrom({"NoteSign": gdjs.Game_32SceneCode.GDNoteSignObjects3});
gdjs.Game_32SceneCode.eventsList10 = function(runtimeScene, asyncObjectsList) {

};gdjs.Game_32SceneCode.eventsList11 = function(runtimeScene, asyncObjectsList) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variables._declare("noteData", variable);
}
{
const variable = new gdjs.Variable();
variable.setString("0");
variables._declare("noteIdx", variable);
}
gdjs.Game_32SceneCode.localVariables.push(variables);
}
const keyIteratorReference3 = gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1);
const valueIteratorReference3 = gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0);
const iterableReference3 = runtimeScene.getGame().getVariables().getFromIndex(0);
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
gdjs.copyArray(gdjs.Game_32SceneCode.GDNoteSignObjects2, gdjs.Game_32SceneCode.GDNoteSignObjects3);


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteSignObjects3Objects, runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("x").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("y").getAsNumber(), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects3[i].getBehavior("Object3D").setZ(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("z").getAsNumber());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects3[i].returnVariable(gdjs.Game_32SceneCode.GDNoteSignObjects3[i].getVariables().getFromIndex(1)).setString(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("name").getAsString(), "[", ""), "]", ""));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects3[i].returnVariable(gdjs.Game_32SceneCode.GDNoteSignObjects3[i].getVariables().getFromIndex(0)).setString(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("text").getAsString(), "[", ""), "]", ""));
}
}
}
}
}
gdjs.Game_32SceneCode.localVariables.pop();

}


};gdjs.Game_32SceneCode.asyncCallback20015732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NoteSign"), gdjs.Game_32SceneCode.GDNoteSignObjects2);
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects2);
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(13).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(0));
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects2[i].setBBText("Notes loaded: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(0))) + " found");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(14).setNumber(0);
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList11(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(20015732, gdjs.Game_32SceneCode.asyncCallback20015732);
gdjs.Game_32SceneCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ReadResponseText.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(14), runtimeScene.getScene().getVariables().getFromIndex(13), null), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback20015732(runtimeScene, asyncObjectsList)), 20015732, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.asyncCallback19894164 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerSync");
}
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(19894164, gdjs.Game_32SceneCode.asyncCallback19894164);
gdjs.Game_32SceneCode.eventsList13 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "PlayerGet", runtimeScene.getScene().getVariables().getFromIndex(3), null), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback19894164(runtimeScene, asyncObjectsList)), 19894164, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.asyncCallback19888772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "PlayerGet", runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() + ".json" + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "PlayerGet", "GET", null);
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList13(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(19888772, gdjs.Game_32SceneCode.asyncCallback19888772);
gdjs.Game_32SceneCode.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "PlayerPut", runtimeScene.getScene().getVariables().getFromIndex(1), null), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback19888772(runtimeScene, asyncObjectsList)), 19888772, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.eventsList15 = function(runtimeScene, asyncObjectsList) {

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595playerObjects5Objects = Hashtable.newFrom({"dog_player": gdjs.Game_32SceneCode.GDdog_9595playerObjects5});
gdjs.Game_32SceneCode.eventsList16 = function(runtimeScene, asyncObjectsList) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("dog_player"), gdjs.Game_32SceneCode.GDdog_9595playerObjects6);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595playerObjects6.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595playerObjects6[i].getVariableString(gdjs.Game_32SceneCode.GDdog_9595playerObjects6[i].getVariables().getFromIndex(2)) == gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595playerObjects6[k] = gdjs.Game_32SceneCode.GDdog_9595playerObjects6[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595playerObjects6.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDdog_9595playerObjects6 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595playerObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595playerObjects6[i].getBehavior("Pathfinding").moveTo(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("x").getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(4).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("y").getAsNumber());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595playerObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595playerObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595playerObjects6[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.Game_32SceneCode.GDdog_9595playerObjects5.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595playerObjects5Objects, runtimeScene.getScene().getVariables().getFromIndex(4).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("x").getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(4).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("y").getAsNumber(), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595playerObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595playerObjects5[i].getBehavior("Object3D").setZ(0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595playerObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595playerObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595playerObjects5[i].getVariables().getFromIndex(2)).setString(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595playerObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595playerObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595playerObjects5[i].getVariables().getFromIndex(1)).setString(runtimeScene.getScene().getVariables().getFromIndex(4).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("name").getAsString());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595playerObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595playerObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595playerObjects5[i].getVariables().getFromIndex(3)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595playerObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595playerObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595playerObjects5[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595playerObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595playerObjects5[i].activateBehavior("ThirdPersonCamera", false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595playerObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595playerObjects5[i].getBehavior("Pathfinding").moveTo(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("x").getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(4).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("y").getAsNumber());
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Game_32SceneCode.eventsList17 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString() != runtimeScene.getScene().getVariables().getFromIndex(6).getAsString());
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList16(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList18 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(runtimeScene.getObjects("dog_player"), gdjs.Game_32SceneCode.GDdog_9595playerObjects3);

for (gdjs.Game_32SceneCode.forEachIndex4 = 0;gdjs.Game_32SceneCode.forEachIndex4 < gdjs.Game_32SceneCode.GDdog_9595playerObjects3.length;++gdjs.Game_32SceneCode.forEachIndex4) {
gdjs.Game_32SceneCode.GDdog_9595playerObjects4.length = 0;


gdjs.Game_32SceneCode.forEachTemporary4 = gdjs.Game_32SceneCode.GDdog_9595playerObjects3[gdjs.Game_32SceneCode.forEachIndex4];
gdjs.Game_32SceneCode.GDdog_9595playerObjects4.push(gdjs.Game_32SceneCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595playerObjects4.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595playerObjects4[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595playerObjects4[i].getVariables().getFromIndex(3), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595playerObjects4[k] = gdjs.Game_32SceneCode.GDdog_9595playerObjects4[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595playerObjects4.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595playerObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595playerObjects4[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595playerObjects4[i].getVariables().getFromIndex(0)).setBoolean(false);
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
variables._declare("PlayerValue", variable);
}
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("PlayerKey", variable);
}
gdjs.Game_32SceneCode.localVariables.push(variables);
}
const keyIteratorReference4 = gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1);
const valueIteratorReference4 = gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0);
const iterableReference4 = runtimeScene.getScene().getVariables().getFromIndex(4);
if(!iterableReference4.isPrimitive()) {
for(
    const iteratorKey4 in 
    iterableReference4.getType() === "structure"
      ? iterableReference4.getAllChildren()
      : iterableReference4.getType() === "array"
        ? iterableReference4.getAllChildrenArray()
        : []
) {
    if(iterableReference4.getType() === "structure")
        keyIteratorReference4.setString(iteratorKey4);
    else if(iterableReference4.getType() === "array")
        keyIteratorReference4.setNumber(iteratorKey4);
    const structureChildVariable4 = iterableReference4.getChild(iteratorKey4)
    valueIteratorReference4.castTo(structureChildVariable4.getType())
    if(structureChildVariable4.isPrimitive()) {
        valueIteratorReference4.setValue(structureChildVariable4.getValue());
    } else if (structureChildVariable4.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference4.replaceChildren(structureChildVariable4.getAllChildren());
    } else if (structureChildVariable4.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference4.replaceChildrenArray(structureChildVariable4.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.Game_32SceneCode.eventsList17(runtimeScene, asyncObjectsList);} //Subevents end.
}
}
}
gdjs.Game_32SceneCode.localVariables.pop();

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player"), gdjs.Game_32SceneCode.GDdog_9595playerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595playerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595playerObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595playerObjects2[i].getVariables().getFromIndex(3), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595playerObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595playerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595playerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595playerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595playerObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595playerObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595playerObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595playerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595playerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDdog_9595playerObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595playerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595playerObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.Game_32SceneCode.asyncCallback19805516 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList18(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(19805516, gdjs.Game_32SceneCode.asyncCallback19805516);
gdjs.Game_32SceneCode.eventsList19 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ReadResponseJSON.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(4), null), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback19805516(runtimeScene, asyncObjectsList)), 19805516, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.asyncCallback20015276 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(20015276, gdjs.Game_32SceneCode.asyncCallback20015276);
gdjs.Game_32SceneCode.eventsList20 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "Cleanup", runtimeScene.getScene().getVariables().getFromIndex(21), null), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback20015276(runtimeScene, asyncObjectsList)), 20015276, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.eventsList21 = function(runtimeScene, asyncObjectsList) {

};gdjs.Game_32SceneCode.asyncCallback19952260 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(19952260, gdjs.Game_32SceneCode.asyncCallback19952260);
gdjs.Game_32SceneCode.eventsList22 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "CleanupDel", runtimeScene.getScene().getVariables().getFromIndex(22), null), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback19952260(runtimeScene, asyncObjectsList)), 19952260, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.eventsList23 = function(runtimeScene, asyncObjectsList) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variables._declare("CleanValue", variable);
}
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("CleanKey", variable);
}
gdjs.Game_32SceneCode.localVariables.push(variables);
}
const keyIteratorReference4 = gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1);
const valueIteratorReference4 = gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0);
const iterableReference4 = runtimeScene.getScene().getVariables().getFromIndex(24);
if(!iterableReference4.isPrimitive()) {
for(
    const iteratorKey4 in 
    iterableReference4.getType() === "structure"
      ? iterableReference4.getAllChildren()
      : iterableReference4.getType() === "array"
        ? iterableReference4.getAllChildrenArray()
        : []
) {
    if(iterableReference4.getType() === "structure")
        keyIteratorReference4.setString(iteratorKey4);
    else if(iterableReference4.getType() === "array")
        keyIteratorReference4.setNumber(iteratorKey4);
    const structureChildVariable4 = iterableReference4.getChild(iteratorKey4)
    valueIteratorReference4.castTo(structureChildVariable4.getType())
    if(structureChildVariable4.isPrimitive()) {
        valueIteratorReference4.setValue(structureChildVariable4.getValue());
    } else if (structureChildVariable4.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference4.replaceChildren(structureChildVariable4.getAllChildren());
    } else if (structureChildVariable4.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference4.replaceChildrenArray(structureChildVariable4.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(23).getAsString() == "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp") - runtimeScene.getScene().getVariables().getFromIndex(24).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("ts").getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(19).getAsNumber());
}
}
if (isConditionTrue_0)
{
{runtimeScene.getScene().getVariables().getFromIndex(23).setString(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString());
}
}
}
}
gdjs.Game_32SceneCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(23).getAsString() != "");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "CleanupDel", runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() + "/" + runtimeScene.getScene().getVariables().getFromIndex(23).getAsString() + ".json" + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "CleanupDel", "DELETE", null);
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList22(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.Game_32SceneCode.asyncCallback20017852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(21).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(23).setString("");
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList23(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(20017852, gdjs.Game_32SceneCode.asyncCallback20017852);
gdjs.Game_32SceneCode.eventsList24 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ReadResponseJSON.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(21), runtimeScene.getScene().getVariables().getFromIndex(24), null), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback20017852(runtimeScene, asyncObjectsList)), 20017852, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.eventsList25 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NoteInput"), gdjs.Game_32SceneCode.GDNoteInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("PathfindingBoundary"), gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("PostButton"), gdjs.Game_32SceneCode.GDPostButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "UI");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "notebutton");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects1[i].setBBText("Enter your name, then press Join");
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteInputObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteInputObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPostButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPostButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NameTagTimer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CleanupTimer");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPostButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPostButtonObjects1[i].Activate(false, null);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PollTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FULLS_SCREEN"), gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects1[k] = gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21247540);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(27));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(27).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17351676);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(27).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24389420);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}
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
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19688156);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.Game_32SceneCode.GDGroundObjects1);
/* Reuse gdjs.Game_32SceneCode.GDJoinButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NameInput"), gdjs.Game_32SceneCode.GDNameInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects1);
gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(6).setString(gdjs.evtsExt__UUID__GenerateUUIDv4.func(runtimeScene, null));
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595playerObjects1Objects, (( gdjs.Game_32SceneCode.GDGroundObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDGroundObjects1[0].getAABBCenterX()), (( gdjs.Game_32SceneCode.GDGroundObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDGroundObjects1[0].getAABBCenterY()), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595playerObjects1[i].getBehavior("Object3D").setZ(0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595playerObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595playerObjects1[i].getVariables().getFromIndex(4)).setString((( gdjs.Game_32SceneCode.GDNameInputObjects1.length === 0 ) ? "" :gdjs.Game_32SceneCode.GDNameInputObjects1[0].getBehavior("Text").getText()));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595playerObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595playerObjects1[i].getVariables().getFromIndex(3)).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects1[i].setBBText("Joined!");
}
}
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoinButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoinButtonObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "notebutton");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerSync");
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
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPostButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPostButtonObjects1[i].Activate(true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NoteSign"), gdjs.Game_32SceneCode.GDNoteSignObjects1);
gdjs.copyArray(runtimeScene.getObjects("dog_player"), gdjs.Game_32SceneCode.GDdog_9595playerObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595playerObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595playerObjects1[i].getVariables().getFromIndex(3), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595playerObjects1[k] = gdjs.Game_32SceneCode.GDdog_9595playerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteSignObjects1Objects, (( gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595playerObjects1[0].getX()), (( gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595playerObjects1[0].getY()), false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList1(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("NoteSign"), gdjs.Game_32SceneCode.GDNoteSignObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects1[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NoteButton"), gdjs.Game_32SceneCode.GDNoteButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("PostButton"), gdjs.Game_32SceneCode.GDPostButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("dog_player"), gdjs.Game_32SceneCode.GDdog_9595playerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595playerObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595playerObjects1[i].getVariables().getFromIndex(3), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595playerObjects1[k] = gdjs.Game_32SceneCode.GDdog_9595playerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPostButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDPostButtonObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPostButtonObjects1[k] = gdjs.Game_32SceneCode.GDPostButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPostButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19868644);
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDdog_9595playerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595playerObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595playerObjects1[i].getBehavior("ThirdPersonCamera").SetTargetedRotationAngle(gdjs.evtTools.tween.ease("linear", (gdjs.Game_32SceneCode.GDdog_9595playerObjects1[i].getBehavior("ThirdPersonCamera").TargetedRotationAngle(null)), (gdjs.Game_32SceneCode.GDdog_9595playerObjects1[i].getAngle()), 0.25), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player"), gdjs.Game_32SceneCode.GDdog_9595playerObjects1);

for (gdjs.Game_32SceneCode.forEachIndex2 = 0;gdjs.Game_32SceneCode.forEachIndex2 < gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length;++gdjs.Game_32SceneCode.forEachIndex2) {
gdjs.Game_32SceneCode.GDdog_9595playerObjects2.length = 0;


gdjs.Game_32SceneCode.forEachTemporary2 = gdjs.Game_32SceneCode.GDdog_9595playerObjects1[gdjs.Game_32SceneCode.forEachIndex2];
gdjs.Game_32SceneCode.GDdog_9595playerObjects2.push(gdjs.Game_32SceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.Game_32SceneCode.eventsList2(runtimeScene);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "NameTagTimer") > 0.5;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "NameTagTimer") > 0.5;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList6(runtimeScene);} //End of subevents
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
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19761292);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NoteInput"), gdjs.Game_32SceneCode.GDNoteInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects1[i].setBBText("Saving note...");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(25).setString(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll((( gdjs.Game_32SceneCode.GDNoteInputObjects1.length === 0 ) ? "" :gdjs.Game_32SceneCode.GDNoteInputObjects1[0].getText()), "[", ""), "]", ""));
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AdvancedHTTP__ResponseSuccess.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(15), null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects1[i].setBBText("Note saved! u2713");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects1[i].setBBText("Save failed: HTTP " + gdjs.evtTools.common.toString(gdjs.evtsExt__AdvancedHTTP__ResponseStatusCode.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(15), null)));
}
}
elseEventsChainSatisfied = true;
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "PollTimer") > 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PollTimer");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects1[i].setBBText("Fetching notes...");
}
}
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "NoteFetch", runtimeScene.getScene().getVariables().getFromIndex(16).getAsString(), null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "NoteFetch", "GET", null);
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AdvancedHTTP__ResponseSuccess.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(14), null);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__AdvancedHTTP__ResponseStatusCode.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(14), null) >= 400);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects1[i].setBBText("Fetch failed: HTTP " + gdjs.evtTools.common.toString(gdjs.evtsExt__AdvancedHTTP__ResponseStatusCode.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(14), null)));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(14).setNumber(0);
}
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variables._declare("PutData", variable);
}
gdjs.Game_32SceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "PlayerSync") > 0.15;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() != "");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dog_player"), gdjs.Game_32SceneCode.GDdog_9595playerObjects1);
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "PlayerPut", runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() + "/" + runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() + ".json" + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "PlayerPut", "PUT", null);
}
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getChild("x").setNumber((( gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595playerObjects1[0].getX()));
}
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getChild("y").setNumber((( gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595playerObjects1[0].getY()));
}
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getChild("name").setString(((gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDdog_9595playerObjects1[0].getVariables()).getFromIndex(4).getAsString());
}
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getChild("ts").setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp"));
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestBody.func(runtimeScene, gdjs.evtTools.network.variableStructureToJSON(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0)), "PlayerPut", null);
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList14(runtimeScene);} //End of subevents
}
gdjs.Game_32SceneCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AdvancedHTTP__ResponseSuccess.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3), null);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList19(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "CleanupTimer") > runtimeScene.getScene().getVariables().getFromIndex(20).getAsNumber();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CleanupTimer");
}
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "Cleanup", runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() + ".json" + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "Cleanup", "GET", null);
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList20(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AdvancedHTTP__ResponseSuccess.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(21), null);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList24(runtimeScene);} //End of subevents
}

}

}

};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects1.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects2.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects3.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects4.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects5.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects6.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects7.length = 0;
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects3.length = 0;
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects4.length = 0;
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects5.length = 0;
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects6.length = 0;
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects7.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects1.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects2.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects3.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects4.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects5.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects6.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects7.length = 0;
gdjs.Game_32SceneCode.GDWallObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallObjects3.length = 0;
gdjs.Game_32SceneCode.GDWallObjects4.length = 0;
gdjs.Game_32SceneCode.GDWallObjects5.length = 0;
gdjs.Game_32SceneCode.GDWallObjects6.length = 0;
gdjs.Game_32SceneCode.GDWallObjects7.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects1.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects2.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects3.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects4.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects5.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects6.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects7.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects5.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects6.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects7.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects5.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects6.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects7.length = 0;
gdjs.Game_32SceneCode.GDNPCObjects1.length = 0;
gdjs.Game_32SceneCode.GDNPCObjects2.length = 0;
gdjs.Game_32SceneCode.GDNPCObjects3.length = 0;
gdjs.Game_32SceneCode.GDNPCObjects4.length = 0;
gdjs.Game_32SceneCode.GDNPCObjects5.length = 0;
gdjs.Game_32SceneCode.GDNPCObjects6.length = 0;
gdjs.Game_32SceneCode.GDNPCObjects7.length = 0;
gdjs.Game_32SceneCode.GDGrassObjects1.length = 0;
gdjs.Game_32SceneCode.GDGrassObjects2.length = 0;
gdjs.Game_32SceneCode.GDGrassObjects3.length = 0;
gdjs.Game_32SceneCode.GDGrassObjects4.length = 0;
gdjs.Game_32SceneCode.GDGrassObjects5.length = 0;
gdjs.Game_32SceneCode.GDGrassObjects6.length = 0;
gdjs.Game_32SceneCode.GDGrassObjects7.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects1.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects2.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects3.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects4.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects5.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects6.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects7.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects5.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects6.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects7.length = 0;
gdjs.Game_32SceneCode.GDNameTagObjects1.length = 0;
gdjs.Game_32SceneCode.GDNameTagObjects2.length = 0;
gdjs.Game_32SceneCode.GDNameTagObjects3.length = 0;
gdjs.Game_32SceneCode.GDNameTagObjects4.length = 0;
gdjs.Game_32SceneCode.GDNameTagObjects5.length = 0;
gdjs.Game_32SceneCode.GDNameTagObjects6.length = 0;
gdjs.Game_32SceneCode.GDNameTagObjects7.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects5.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects6.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects7.length = 0;
gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length = 0;
gdjs.Game_32SceneCode.GDdog_9595playerObjects2.length = 0;
gdjs.Game_32SceneCode.GDdog_9595playerObjects3.length = 0;
gdjs.Game_32SceneCode.GDdog_9595playerObjects4.length = 0;
gdjs.Game_32SceneCode.GDdog_9595playerObjects5.length = 0;
gdjs.Game_32SceneCode.GDdog_9595playerObjects6.length = 0;
gdjs.Game_32SceneCode.GDdog_9595playerObjects7.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects1.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects2.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects3.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects4.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects5.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects6.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects7.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects5.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects6.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects7.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects5.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects6.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects7.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects5.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects6.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects7.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects5.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects6.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects7.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects5.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects6.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects7.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects5.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects6.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects7.length = 0;

gdjs.Game_32SceneCode.eventsList25(runtimeScene);
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects1.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects2.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects3.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects4.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects5.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects6.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects7.length = 0;
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects3.length = 0;
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects4.length = 0;
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects5.length = 0;
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects6.length = 0;
gdjs.Game_32SceneCode.GDTwoChoicesDialogBoxObjects7.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects1.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects2.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects3.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects4.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects5.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects6.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects7.length = 0;
gdjs.Game_32SceneCode.GDWallObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallObjects3.length = 0;
gdjs.Game_32SceneCode.GDWallObjects4.length = 0;
gdjs.Game_32SceneCode.GDWallObjects5.length = 0;
gdjs.Game_32SceneCode.GDWallObjects6.length = 0;
gdjs.Game_32SceneCode.GDWallObjects7.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects1.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects2.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects3.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects4.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects5.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects6.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects7.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects5.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects6.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects7.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects5.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects6.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects7.length = 0;
gdjs.Game_32SceneCode.GDNPCObjects1.length = 0;
gdjs.Game_32SceneCode.GDNPCObjects2.length = 0;
gdjs.Game_32SceneCode.GDNPCObjects3.length = 0;
gdjs.Game_32SceneCode.GDNPCObjects4.length = 0;
gdjs.Game_32SceneCode.GDNPCObjects5.length = 0;
gdjs.Game_32SceneCode.GDNPCObjects6.length = 0;
gdjs.Game_32SceneCode.GDNPCObjects7.length = 0;
gdjs.Game_32SceneCode.GDGrassObjects1.length = 0;
gdjs.Game_32SceneCode.GDGrassObjects2.length = 0;
gdjs.Game_32SceneCode.GDGrassObjects3.length = 0;
gdjs.Game_32SceneCode.GDGrassObjects4.length = 0;
gdjs.Game_32SceneCode.GDGrassObjects5.length = 0;
gdjs.Game_32SceneCode.GDGrassObjects6.length = 0;
gdjs.Game_32SceneCode.GDGrassObjects7.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects1.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects2.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects3.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects4.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects5.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects6.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects7.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects5.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects6.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects7.length = 0;
gdjs.Game_32SceneCode.GDNameTagObjects1.length = 0;
gdjs.Game_32SceneCode.GDNameTagObjects2.length = 0;
gdjs.Game_32SceneCode.GDNameTagObjects3.length = 0;
gdjs.Game_32SceneCode.GDNameTagObjects4.length = 0;
gdjs.Game_32SceneCode.GDNameTagObjects5.length = 0;
gdjs.Game_32SceneCode.GDNameTagObjects6.length = 0;
gdjs.Game_32SceneCode.GDNameTagObjects7.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects5.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects6.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects7.length = 0;
gdjs.Game_32SceneCode.GDdog_9595playerObjects1.length = 0;
gdjs.Game_32SceneCode.GDdog_9595playerObjects2.length = 0;
gdjs.Game_32SceneCode.GDdog_9595playerObjects3.length = 0;
gdjs.Game_32SceneCode.GDdog_9595playerObjects4.length = 0;
gdjs.Game_32SceneCode.GDdog_9595playerObjects5.length = 0;
gdjs.Game_32SceneCode.GDdog_9595playerObjects6.length = 0;
gdjs.Game_32SceneCode.GDdog_9595playerObjects7.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects1.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects2.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects3.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects4.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects5.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects6.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects7.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects5.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects6.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects7.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects5.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects6.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects7.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects5.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects6.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects7.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects5.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects6.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects7.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects5.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects6.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects7.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects5.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects6.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects7.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
