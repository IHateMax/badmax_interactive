gdjs.Scene_952Code = {};
gdjs.Scene_952Code.localVariables = [];
gdjs.Scene_952Code.idToCallbackMap = new Map();
gdjs.Scene_952Code.forEachCount0_3 = 0;

gdjs.Scene_952Code.forEachCount0_4 = 0;

gdjs.Scene_952Code.forEachCount1_3 = 0;

gdjs.Scene_952Code.forEachCount1_4 = 0;

gdjs.Scene_952Code.forEachIndex3 = 0;

gdjs.Scene_952Code.forEachIndex4 = 0;

gdjs.Scene_952Code.forEachObjects3 = [];

gdjs.Scene_952Code.forEachObjects4 = [];

gdjs.Scene_952Code.forEachTotalCount3 = 0;

gdjs.Scene_952Code.forEachTotalCount4 = 0;

gdjs.Scene_952Code.GDPathfindingBoundaryObjects1= [];
gdjs.Scene_952Code.GDPathfindingBoundaryObjects2= [];
gdjs.Scene_952Code.GDPathfindingBoundaryObjects3= [];
gdjs.Scene_952Code.GDPathfindingBoundaryObjects4= [];
gdjs.Scene_952Code.GDPathfindingBoundaryObjects5= [];
gdjs.Scene_952Code.GDPathfindingBoundaryObjects6= [];
gdjs.Scene_952Code.GDPathfindingBoundaryObjects7= [];
gdjs.Scene_952Code.GDPathfindingBoundaryObjects8= [];
gdjs.Scene_952Code.GDWallObjects1= [];
gdjs.Scene_952Code.GDWallObjects2= [];
gdjs.Scene_952Code.GDWallObjects3= [];
gdjs.Scene_952Code.GDWallObjects4= [];
gdjs.Scene_952Code.GDWallObjects5= [];
gdjs.Scene_952Code.GDWallObjects6= [];
gdjs.Scene_952Code.GDWallObjects7= [];
gdjs.Scene_952Code.GDWallObjects8= [];
gdjs.Scene_952Code.GDGroundObjects1= [];
gdjs.Scene_952Code.GDGroundObjects2= [];
gdjs.Scene_952Code.GDGroundObjects3= [];
gdjs.Scene_952Code.GDGroundObjects4= [];
gdjs.Scene_952Code.GDGroundObjects5= [];
gdjs.Scene_952Code.GDGroundObjects6= [];
gdjs.Scene_952Code.GDGroundObjects7= [];
gdjs.Scene_952Code.GDGroundObjects8= [];
gdjs.Scene_952Code.GDmapObjects1= [];
gdjs.Scene_952Code.GDmapObjects2= [];
gdjs.Scene_952Code.GDmapObjects3= [];
gdjs.Scene_952Code.GDmapObjects4= [];
gdjs.Scene_952Code.GDmapObjects5= [];
gdjs.Scene_952Code.GDmapObjects6= [];
gdjs.Scene_952Code.GDmapObjects7= [];
gdjs.Scene_952Code.GDmapObjects8= [];
gdjs.Scene_952Code.GDgreenlandObjects1= [];
gdjs.Scene_952Code.GDgreenlandObjects2= [];
gdjs.Scene_952Code.GDgreenlandObjects3= [];
gdjs.Scene_952Code.GDgreenlandObjects4= [];
gdjs.Scene_952Code.GDgreenlandObjects5= [];
gdjs.Scene_952Code.GDgreenlandObjects6= [];
gdjs.Scene_952Code.GDgreenlandObjects7= [];
gdjs.Scene_952Code.GDgreenlandObjects8= [];
gdjs.Scene_952Code.GDdiscoObjects1= [];
gdjs.Scene_952Code.GDdiscoObjects2= [];
gdjs.Scene_952Code.GDdiscoObjects3= [];
gdjs.Scene_952Code.GDdiscoObjects4= [];
gdjs.Scene_952Code.GDdiscoObjects5= [];
gdjs.Scene_952Code.GDdiscoObjects6= [];
gdjs.Scene_952Code.GDdiscoObjects7= [];
gdjs.Scene_952Code.GDdiscoObjects8= [];
gdjs.Scene_952Code.GDGround2Objects1= [];
gdjs.Scene_952Code.GDGround2Objects2= [];
gdjs.Scene_952Code.GDGround2Objects3= [];
gdjs.Scene_952Code.GDGround2Objects4= [];
gdjs.Scene_952Code.GDGround2Objects5= [];
gdjs.Scene_952Code.GDGround2Objects6= [];
gdjs.Scene_952Code.GDGround2Objects7= [];
gdjs.Scene_952Code.GDGround2Objects8= [];
gdjs.Scene_952Code.GDNoteSignObjects1= [];
gdjs.Scene_952Code.GDNoteSignObjects2= [];
gdjs.Scene_952Code.GDNoteSignObjects3= [];
gdjs.Scene_952Code.GDNoteSignObjects4= [];
gdjs.Scene_952Code.GDNoteSignObjects5= [];
gdjs.Scene_952Code.GDNoteSignObjects6= [];
gdjs.Scene_952Code.GDNoteSignObjects7= [];
gdjs.Scene_952Code.GDNoteSignObjects8= [];
gdjs.Scene_952Code.GDNoteTextObjects1= [];
gdjs.Scene_952Code.GDNoteTextObjects2= [];
gdjs.Scene_952Code.GDNoteTextObjects3= [];
gdjs.Scene_952Code.GDNoteTextObjects4= [];
gdjs.Scene_952Code.GDNoteTextObjects5= [];
gdjs.Scene_952Code.GDNoteTextObjects6= [];
gdjs.Scene_952Code.GDNoteTextObjects7= [];
gdjs.Scene_952Code.GDNoteTextObjects8= [];
gdjs.Scene_952Code.GDNoteInputObjects1= [];
gdjs.Scene_952Code.GDNoteInputObjects2= [];
gdjs.Scene_952Code.GDNoteInputObjects3= [];
gdjs.Scene_952Code.GDNoteInputObjects4= [];
gdjs.Scene_952Code.GDNoteInputObjects5= [];
gdjs.Scene_952Code.GDNoteInputObjects6= [];
gdjs.Scene_952Code.GDNoteInputObjects7= [];
gdjs.Scene_952Code.GDNoteInputObjects8= [];
gdjs.Scene_952Code.GDNoteButtonObjects1= [];
gdjs.Scene_952Code.GDNoteButtonObjects2= [];
gdjs.Scene_952Code.GDNoteButtonObjects3= [];
gdjs.Scene_952Code.GDNoteButtonObjects4= [];
gdjs.Scene_952Code.GDNoteButtonObjects5= [];
gdjs.Scene_952Code.GDNoteButtonObjects6= [];
gdjs.Scene_952Code.GDNoteButtonObjects7= [];
gdjs.Scene_952Code.GDNoteButtonObjects8= [];
gdjs.Scene_952Code.GDPostButtonObjects1= [];
gdjs.Scene_952Code.GDPostButtonObjects2= [];
gdjs.Scene_952Code.GDPostButtonObjects3= [];
gdjs.Scene_952Code.GDPostButtonObjects4= [];
gdjs.Scene_952Code.GDPostButtonObjects5= [];
gdjs.Scene_952Code.GDPostButtonObjects6= [];
gdjs.Scene_952Code.GDPostButtonObjects7= [];
gdjs.Scene_952Code.GDPostButtonObjects8= [];
gdjs.Scene_952Code.GDNoteText3DObjects1= [];
gdjs.Scene_952Code.GDNoteText3DObjects2= [];
gdjs.Scene_952Code.GDNoteText3DObjects3= [];
gdjs.Scene_952Code.GDNoteText3DObjects4= [];
gdjs.Scene_952Code.GDNoteText3DObjects5= [];
gdjs.Scene_952Code.GDNoteText3DObjects6= [];
gdjs.Scene_952Code.GDNoteText3DObjects7= [];
gdjs.Scene_952Code.GDNoteText3DObjects8= [];
gdjs.Scene_952Code.GDNameInputObjects1= [];
gdjs.Scene_952Code.GDNameInputObjects2= [];
gdjs.Scene_952Code.GDNameInputObjects3= [];
gdjs.Scene_952Code.GDNameInputObjects4= [];
gdjs.Scene_952Code.GDNameInputObjects5= [];
gdjs.Scene_952Code.GDNameInputObjects6= [];
gdjs.Scene_952Code.GDNameInputObjects7= [];
gdjs.Scene_952Code.GDNameInputObjects8= [];
gdjs.Scene_952Code.GDJoinButtonObjects1= [];
gdjs.Scene_952Code.GDJoinButtonObjects2= [];
gdjs.Scene_952Code.GDJoinButtonObjects3= [];
gdjs.Scene_952Code.GDJoinButtonObjects4= [];
gdjs.Scene_952Code.GDJoinButtonObjects5= [];
gdjs.Scene_952Code.GDJoinButtonObjects6= [];
gdjs.Scene_952Code.GDJoinButtonObjects7= [];
gdjs.Scene_952Code.GDJoinButtonObjects8= [];
gdjs.Scene_952Code.GDStatusTextObjects1= [];
gdjs.Scene_952Code.GDStatusTextObjects2= [];
gdjs.Scene_952Code.GDStatusTextObjects3= [];
gdjs.Scene_952Code.GDStatusTextObjects4= [];
gdjs.Scene_952Code.GDStatusTextObjects5= [];
gdjs.Scene_952Code.GDStatusTextObjects6= [];
gdjs.Scene_952Code.GDStatusTextObjects7= [];
gdjs.Scene_952Code.GDStatusTextObjects8= [];
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects1= [];
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2= [];
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3= [];
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4= [];
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5= [];
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6= [];
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects7= [];
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects8= [];
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects1= [];
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects2= [];
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects3= [];
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects4= [];
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects5= [];
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects6= [];
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects7= [];
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects8= [];
gdjs.Scene_952Code.GDColor_9595PickerObjects1= [];
gdjs.Scene_952Code.GDColor_9595PickerObjects2= [];
gdjs.Scene_952Code.GDColor_9595PickerObjects3= [];
gdjs.Scene_952Code.GDColor_9595PickerObjects4= [];
gdjs.Scene_952Code.GDColor_9595PickerObjects5= [];
gdjs.Scene_952Code.GDColor_9595PickerObjects6= [];
gdjs.Scene_952Code.GDColor_9595PickerObjects7= [];
gdjs.Scene_952Code.GDColor_9595PickerObjects8= [];
gdjs.Scene_952Code.GDCancelObjects1= [];
gdjs.Scene_952Code.GDCancelObjects2= [];
gdjs.Scene_952Code.GDCancelObjects3= [];
gdjs.Scene_952Code.GDCancelObjects4= [];
gdjs.Scene_952Code.GDCancelObjects5= [];
gdjs.Scene_952Code.GDCancelObjects6= [];
gdjs.Scene_952Code.GDCancelObjects7= [];
gdjs.Scene_952Code.GDCancelObjects8= [];
gdjs.Scene_952Code.GDpissObjects1= [];
gdjs.Scene_952Code.GDpissObjects2= [];
gdjs.Scene_952Code.GDpissObjects3= [];
gdjs.Scene_952Code.GDpissObjects4= [];
gdjs.Scene_952Code.GDpissObjects5= [];
gdjs.Scene_952Code.GDpissObjects6= [];
gdjs.Scene_952Code.GDpissObjects7= [];
gdjs.Scene_952Code.GDpissObjects8= [];
gdjs.Scene_952Code.GDpiss2Objects1= [];
gdjs.Scene_952Code.GDpiss2Objects2= [];
gdjs.Scene_952Code.GDpiss2Objects3= [];
gdjs.Scene_952Code.GDpiss2Objects4= [];
gdjs.Scene_952Code.GDpiss2Objects5= [];
gdjs.Scene_952Code.GDpiss2Objects6= [];
gdjs.Scene_952Code.GDpiss2Objects7= [];
gdjs.Scene_952Code.GDpiss2Objects8= [];
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects1= [];
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects2= [];
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects3= [];
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects4= [];
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects5= [];
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects6= [];
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects7= [];
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects8= [];
gdjs.Scene_952Code.GDcol_95951Objects1= [];
gdjs.Scene_952Code.GDcol_95951Objects2= [];
gdjs.Scene_952Code.GDcol_95951Objects3= [];
gdjs.Scene_952Code.GDcol_95951Objects4= [];
gdjs.Scene_952Code.GDcol_95951Objects5= [];
gdjs.Scene_952Code.GDcol_95951Objects6= [];
gdjs.Scene_952Code.GDcol_95951Objects7= [];
gdjs.Scene_952Code.GDcol_95951Objects8= [];
gdjs.Scene_952Code.GDcol_95952Objects1= [];
gdjs.Scene_952Code.GDcol_95952Objects2= [];
gdjs.Scene_952Code.GDcol_95952Objects3= [];
gdjs.Scene_952Code.GDcol_95952Objects4= [];
gdjs.Scene_952Code.GDcol_95952Objects5= [];
gdjs.Scene_952Code.GDcol_95952Objects6= [];
gdjs.Scene_952Code.GDcol_95952Objects7= [];
gdjs.Scene_952Code.GDcol_95952Objects8= [];
gdjs.Scene_952Code.GDcol_95953Objects1= [];
gdjs.Scene_952Code.GDcol_95953Objects2= [];
gdjs.Scene_952Code.GDcol_95953Objects3= [];
gdjs.Scene_952Code.GDcol_95953Objects4= [];
gdjs.Scene_952Code.GDcol_95953Objects5= [];
gdjs.Scene_952Code.GDcol_95953Objects6= [];
gdjs.Scene_952Code.GDcol_95953Objects7= [];
gdjs.Scene_952Code.GDcol_95953Objects8= [];
gdjs.Scene_952Code.GDcol_95954Objects1= [];
gdjs.Scene_952Code.GDcol_95954Objects2= [];
gdjs.Scene_952Code.GDcol_95954Objects3= [];
gdjs.Scene_952Code.GDcol_95954Objects4= [];
gdjs.Scene_952Code.GDcol_95954Objects5= [];
gdjs.Scene_952Code.GDcol_95954Objects6= [];
gdjs.Scene_952Code.GDcol_95954Objects7= [];
gdjs.Scene_952Code.GDcol_95954Objects8= [];
gdjs.Scene_952Code.GDcol_95955Objects1= [];
gdjs.Scene_952Code.GDcol_95955Objects2= [];
gdjs.Scene_952Code.GDcol_95955Objects3= [];
gdjs.Scene_952Code.GDcol_95955Objects4= [];
gdjs.Scene_952Code.GDcol_95955Objects5= [];
gdjs.Scene_952Code.GDcol_95955Objects6= [];
gdjs.Scene_952Code.GDcol_95955Objects7= [];
gdjs.Scene_952Code.GDcol_95955Objects8= [];
gdjs.Scene_952Code.GDcol_95956Objects1= [];
gdjs.Scene_952Code.GDcol_95956Objects2= [];
gdjs.Scene_952Code.GDcol_95956Objects3= [];
gdjs.Scene_952Code.GDcol_95956Objects4= [];
gdjs.Scene_952Code.GDcol_95956Objects5= [];
gdjs.Scene_952Code.GDcol_95956Objects6= [];
gdjs.Scene_952Code.GDcol_95956Objects7= [];
gdjs.Scene_952Code.GDcol_95956Objects8= [];
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects1= [];
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2= [];
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3= [];
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4= [];
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5= [];
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6= [];
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects7= [];
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects8= [];
gdjs.Scene_952Code.GDdog_9595selectObjects1= [];
gdjs.Scene_952Code.GDdog_9595selectObjects2= [];
gdjs.Scene_952Code.GDdog_9595selectObjects3= [];
gdjs.Scene_952Code.GDdog_9595selectObjects4= [];
gdjs.Scene_952Code.GDdog_9595selectObjects5= [];
gdjs.Scene_952Code.GDdog_9595selectObjects6= [];
gdjs.Scene_952Code.GDdog_9595selectObjects7= [];
gdjs.Scene_952Code.GDdog_9595selectObjects8= [];
gdjs.Scene_952Code.GDcrawly_9595selectObjects1= [];
gdjs.Scene_952Code.GDcrawly_9595selectObjects2= [];
gdjs.Scene_952Code.GDcrawly_9595selectObjects3= [];
gdjs.Scene_952Code.GDcrawly_9595selectObjects4= [];
gdjs.Scene_952Code.GDcrawly_9595selectObjects5= [];
gdjs.Scene_952Code.GDcrawly_9595selectObjects6= [];
gdjs.Scene_952Code.GDcrawly_9595selectObjects7= [];
gdjs.Scene_952Code.GDcrawly_9595selectObjects8= [];
gdjs.Scene_952Code.GDnextObjects1= [];
gdjs.Scene_952Code.GDnextObjects2= [];
gdjs.Scene_952Code.GDnextObjects3= [];
gdjs.Scene_952Code.GDnextObjects4= [];
gdjs.Scene_952Code.GDnextObjects5= [];
gdjs.Scene_952Code.GDnextObjects6= [];
gdjs.Scene_952Code.GDnextObjects7= [];
gdjs.Scene_952Code.GDnextObjects8= [];
gdjs.Scene_952Code.GDbackObjects1= [];
gdjs.Scene_952Code.GDbackObjects2= [];
gdjs.Scene_952Code.GDbackObjects3= [];
gdjs.Scene_952Code.GDbackObjects4= [];
gdjs.Scene_952Code.GDbackObjects5= [];
gdjs.Scene_952Code.GDbackObjects6= [];
gdjs.Scene_952Code.GDbackObjects7= [];
gdjs.Scene_952Code.GDbackObjects8= [];
gdjs.Scene_952Code.GDexit_9595videoObjects1= [];
gdjs.Scene_952Code.GDexit_9595videoObjects2= [];
gdjs.Scene_952Code.GDexit_9595videoObjects3= [];
gdjs.Scene_952Code.GDexit_9595videoObjects4= [];
gdjs.Scene_952Code.GDexit_9595videoObjects5= [];
gdjs.Scene_952Code.GDexit_9595videoObjects6= [];
gdjs.Scene_952Code.GDexit_9595videoObjects7= [];
gdjs.Scene_952Code.GDexit_9595videoObjects8= [];
gdjs.Scene_952Code.GDbeansObjects1= [];
gdjs.Scene_952Code.GDbeansObjects2= [];
gdjs.Scene_952Code.GDbeansObjects3= [];
gdjs.Scene_952Code.GDbeansObjects4= [];
gdjs.Scene_952Code.GDbeansObjects5= [];
gdjs.Scene_952Code.GDbeansObjects6= [];
gdjs.Scene_952Code.GDbeansObjects7= [];
gdjs.Scene_952Code.GDbeansObjects8= [];
gdjs.Scene_952Code.GDyeetObjects1= [];
gdjs.Scene_952Code.GDyeetObjects2= [];
gdjs.Scene_952Code.GDyeetObjects3= [];
gdjs.Scene_952Code.GDyeetObjects4= [];
gdjs.Scene_952Code.GDyeetObjects5= [];
gdjs.Scene_952Code.GDyeetObjects6= [];
gdjs.Scene_952Code.GDyeetObjects7= [];
gdjs.Scene_952Code.GDyeetObjects8= [];
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects1= [];
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects2= [];
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects3= [];
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects4= [];
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects5= [];
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects6= [];
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects7= [];
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects8= [];
gdjs.Scene_952Code.GDteleportObjects1= [];
gdjs.Scene_952Code.GDteleportObjects2= [];
gdjs.Scene_952Code.GDteleportObjects3= [];
gdjs.Scene_952Code.GDteleportObjects4= [];
gdjs.Scene_952Code.GDteleportObjects5= [];
gdjs.Scene_952Code.GDteleportObjects6= [];
gdjs.Scene_952Code.GDteleportObjects7= [];
gdjs.Scene_952Code.GDteleportObjects8= [];


gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects2ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects2Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2, "dog_player_crawly": gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2});
gdjs.Scene_952Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NameTagTimer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CleanupTimer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerSync");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PollTimer");
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length = 0;

gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene(runtimeScene, gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects2ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects2Objects, "dog_player_" + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), 0, 0, "");
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getVariables().get("IsLocal")).setBoolean(true);
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("IsLocal")).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getBehavior("Object3D").setZ(0);
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getBehavior("Object3D").setZ(0);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getVariables().get("selectedcharacter")).setString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("selectedcharacter")).setString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getVariables().get("PlayerName")).setString(runtimeScene.getGame().getVariables().getFromIndex(23).getAsString());
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("PlayerName")).setString(runtimeScene.getGame().getVariables().getFromIndex(23).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(24).setBoolean(true);
}
}

}


};gdjs.Scene_952Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PathfindingBoundary"), gdjs.Scene_952Code.GDPathfindingBoundaryObjects2);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "HUD", 0, 0, 0);
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "notebutton");
}
{for(var i = 0, len = gdjs.Scene_952Code.GDPathfindingBoundaryObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDPathfindingBoundaryObjects2[i].hide();
}
}

{ //Subevents
gdjs.Scene_952Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("exit_video"), gdjs.Scene_952Code.GDexit_9595videoObjects1);
{for(var i = 0, len = gdjs.Scene_952Code.GDexit_9595videoObjects1.length ;i < len;++i) {
    gdjs.Scene_952Code.GDexit_9595videoObjects1[i].hide();
}
}
}

}


};gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects2ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects2Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2, "dog_player_crawly": gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDmapObjects2Objects = Hashtable.newFrom({"map": gdjs.Scene_952Code.GDmapObjects2});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects2ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects2Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2, "dog_player_crawly": gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDGroundObjects2Objects = Hashtable.newFrom({"Ground": gdjs.Scene_952Code.GDGroundObjects2});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects2ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects2Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2, "dog_player_crawly": gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdiscoObjects2Objects = Hashtable.newFrom({"disco": gdjs.Scene_952Code.GDdiscoObjects2});
gdjs.Scene_952Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2);
gdjs.copyArray(runtimeScene.getObjects("map"), gdjs.Scene_952Code.GDmapObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.haveObjectsStartedColliding(gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects2ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects2Objects, "Physics3D", gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDmapObjects2Objects, "Physics3D", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21245508);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "thud", false, 100, gdjs.randomFloatInRange(0.5, 1.25));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.Scene_952Code.GDGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.haveObjectsStartedColliding(gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects2ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects2Objects, "Physics3D", gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDGroundObjects2Objects, "Physics3D", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21247076);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "tink", false, 100, gdjs.randomFloatInRange(0.5, 1.25));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getVariableNumber(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getVariables().get("pissing")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getVariableNumber(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("pissing")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "piss25", false, 25, gdjs.randomFloatInRange(0.5, 1.25));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("disco"), gdjs.Scene_952Code.GDdiscoObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects2ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects2Objects, gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdiscoObjects2Objects, 600, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21250484);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets/audio/setbadrecording_1.mp3", 1, false, 1, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("yeet"), gdjs.Scene_952Code.GDyeetObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDyeetObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDyeetObjects2[i].getTimerElapsedTimeInSecondsOrNaN("spin") > 2 ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDyeetObjects2[k] = gdjs.Scene_952Code.GDyeetObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDyeetObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDyeetObjects2 */
{for(var i = 0, len = gdjs.Scene_952Code.GDyeetObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDyeetObjects2[i].resetTimer("spin");
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDyeetObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDyeetObjects2[i].getBehavior("PhysicsEllipseMovement3D").ToggleTurningLeft(null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("disco"), gdjs.Scene_952Code.GDdiscoObjects1);
gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects1);
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, Math.max(0, 100 - ((( gdjs.Scene_952Code.GDdiscoObjects1.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdiscoObjects1[0].getDistanceToObject((gdjs.Scene_952Code.GDdog_9595player_9595dogObjects1.length !== 0 ? gdjs.Scene_952Code.GDdog_9595player_9595dogObjects1[0] : (gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects1.length !== 0 ? gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects1[0] : null))))) / 600 * 100));
}
}

}


};gdjs.Scene_952Code.asyncCallback21291684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scene_952Code.localVariables);
gdjs.Scene_952Code.localVariables.length = 0;
}
gdjs.Scene_952Code.idToCallbackMap.set(21291684, gdjs.Scene_952Code.asyncCallback21291684);
gdjs.Scene_952Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scene_952Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "NoteFetch", runtimeScene.getScene().getVariables().getFromIndex(7), null), (runtimeScene) => (gdjs.Scene_952Code.asyncCallback21291684(runtimeScene, asyncObjectsList)), 21291684, asyncObjectsList);
}
}

}


};gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDNoteSignObjects6Objects = Hashtable.newFrom({"NoteSign": gdjs.Scene_952Code.GDNoteSignObjects6});
gdjs.Scene_952Code.eventsList4 = function(runtimeScene, asyncObjectsList) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(gdjs.Scene_952Code.GDNoteSignObjects3, gdjs.Scene_952Code.GDNoteSignObjects7);


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDNoteSignObjects7.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDNoteSignObjects7[i].getVariableString(gdjs.Scene_952Code.GDNoteSignObjects7[i].getVariables().getFromIndex(3)) == gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDNoteSignObjects7[k] = gdjs.Scene_952Code.GDNoteSignObjects7[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDNoteSignObjects7.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDNoteSignObjects7 */
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteSignObjects7.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteSignObjects7[i].returnVariable(gdjs.Scene_952Code.GDNoteSignObjects7[i].getVariables().getFromIndex(4)).setBoolean(true);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(gdjs.Scene_952Code.GDNoteSignObjects3, gdjs.Scene_952Code.GDNoteSignObjects6);

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDNoteSignObjects6Objects, runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("x").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("y").getAsNumber(), "");
}
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteSignObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteSignObjects6[i].getBehavior("Object3D").setZ(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("z").getAsNumber());
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteSignObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteSignObjects6[i].returnVariable(gdjs.Scene_952Code.GDNoteSignObjects6[i].getVariables().getFromIndex(3)).setString(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString());
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteSignObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteSignObjects6[i].returnVariable(gdjs.Scene_952Code.GDNoteSignObjects6[i].getVariables().getFromIndex(1)).setString(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("name").getAsString(), "[", ""), "]", ""));
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteSignObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteSignObjects6[i].returnVariable(gdjs.Scene_952Code.GDNoteSignObjects6[i].getVariables().getFromIndex(0)).setString(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("text").getAsString(), "[", ""), "]", ""));
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteSignObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteSignObjects6[i].returnVariable(gdjs.Scene_952Code.GDNoteSignObjects6[i].getVariables().getFromIndex(2)).setString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("colour").getAsString());
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteSignObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteSignObjects6[i].returnVariable(gdjs.Scene_952Code.GDNoteSignObjects6[i].getVariables().getFromIndex(4)).setBoolean(true);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Scene_952Code.eventsList5 = function(runtimeScene, asyncObjectsList) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("scene").getAsString() == "");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(22).setString(runtimeScene.getGame().getVariables().getFromIndex(21).getAsString());
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{runtimeScene.getGame().getVariables().getFromIndex(22).setString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("scene").getAsString());
}
elseEventsChainSatisfied = true;
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(22).getAsString() == gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Scene_952Code.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
}

}

}

};gdjs.Scene_952Code.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variables._declare("noteData", variable);
}
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("noteIdx", variable);
}
gdjs.Scene_952Code.localVariables.push(variables);
}
const keyIteratorReference5 = gdjs.Scene_952Code.localVariables[0].getFromIndex(1);
const valueIteratorReference5 = gdjs.Scene_952Code.localVariables[0].getFromIndex(0);
const iterableReference5 = runtimeScene.getGame().getVariables().getFromIndex(0);
if(!iterableReference5.isPrimitive()) {
for(
    const iteratorKey5 in 
    iterableReference5.getType() === "structure"
      ? iterableReference5.getAllChildren()
      : iterableReference5.getType() === "array"
        ? iterableReference5.getAllChildrenArray()
        : []
) {
    if(iterableReference5.getType() === "structure")
        keyIteratorReference5.setString(iteratorKey5);
    else if(iterableReference5.getType() === "array")
        keyIteratorReference5.setNumber(iteratorKey5);
    const structureChildVariable5 = iterableReference5.getChild(iteratorKey5)
    valueIteratorReference5.castTo(structureChildVariable5.getType())
    if(structureChildVariable5.isPrimitive()) {
        valueIteratorReference5.setValue(structureChildVariable5.getValue());
    } else if (structureChildVariable5.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference5.replaceChildren(structureChildVariable5.getAllChildren());
    } else if (structureChildVariable5.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference5.replaceChildrenArray(structureChildVariable5.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.Scene_952Code.eventsList5(runtimeScene, asyncObjectsList);} //Subevents end.
}
}
}
gdjs.Scene_952Code.localVariables.pop();

}


{

/* Reuse gdjs.Scene_952Code.GDNoteSignObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDNoteSignObjects3.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDNoteSignObjects3[i].getVariableBoolean(gdjs.Scene_952Code.GDNoteSignObjects3[i].getVariables().getFromIndex(4), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDNoteSignObjects3[k] = gdjs.Scene_952Code.GDNoteSignObjects3[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDNoteSignObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDNoteSignObjects3 */
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteSignObjects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteSignObjects3[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.Scene_952Code.asyncCallback21293092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scene_952Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NoteSign"), gdjs.Scene_952Code.GDNoteSignObjects3);
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Scene_952Code.GDStatusTextObjects3);
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(6).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(0));
}
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteSignObjects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteSignObjects3[i].returnVariable(gdjs.Scene_952Code.GDNoteSignObjects3[i].getVariables().getFromIndex(4)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDStatusTextObjects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDStatusTextObjects3[i].setBBText("Notes loaded: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(0))) + " found");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0);
}

{ //Subevents
gdjs.Scene_952Code.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Scene_952Code.localVariables.length = 0;
}
gdjs.Scene_952Code.idToCallbackMap.set(21293092, gdjs.Scene_952Code.asyncCallback21293092);
gdjs.Scene_952Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scene_952Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ReadResponseText.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(7), runtimeScene.getScene().getVariables().getFromIndex(6), null), (runtimeScene) => (gdjs.Scene_952Code.asyncCallback21293092(runtimeScene, asyncObjectsList)), 21293092, asyncObjectsList);
}
}

}


};gdjs.Scene_952Code.userFunc0xb2a670 = function GDJSInlineCode(runtimeScene) {
// Firebase RTDB live stream (SSE) -> PlayersData. Opens once; browser auto-reconnects.
try {
  if (!gdjs.__pStream) {
    if (typeof gdjs.__pCache === "undefined") gdjs.__pCache = {};
    var _wb = function() {
      runtimeScene.getGame().getVariables().get("SyncGetBody").setString(JSON.stringify(gdjs.__pCache || {}));
      runtimeScene.getGame().getVariables().get("PlayersDirty").setNumber(1);
    };
    var _setPath = function(path, value) {
      var parts = (path || "").split("/").filter(function(s){ return s.length > 0; });
      if (parts.length === 0) { gdjs.__pCache = (value === null ? {} : value); return; }
      var obj = gdjs.__pCache;
      for (var i = 0; i < parts.length - 1; i++) {
        if (typeof obj[parts[i]] !== "object" || obj[parts[i]] === null) obj[parts[i]] = {};
        obj = obj[parts[i]];
      }
      var last = parts[parts.length - 1];
      if (value === null) delete obj[last]; else obj[last] = value;
    };
    var base = runtimeScene.getGame().getVariables().get("PlayersURL").getAsString();
    var es = new EventSource(base + ".json");
    gdjs.__pStream = es;
    es.addEventListener("put", function(e) {
      try { var m = JSON.parse(e.data); _setPath(m.path, m.data); _wb(); } catch (err) {}
    });
    es.addEventListener("patch", function(e) {
      try {
        var m = JSON.parse(e.data);
        var dd = m.data || {};
        var pfx = (m.path === "/" ? "" : m.path);
        for (var k in dd) { if (dd.hasOwnProperty(k)) _setPath(pfx + "/" + k, dd[k]); }
        _wb();
      } catch (err) {}
    });
    es.onerror = function() {};
  }
} catch (e) { console.error("Player stream error:", e); }
};
gdjs.Scene_952Code.eventsList8 = function(runtimeScene) {

{


gdjs.Scene_952Code.userFunc0xb2a670(runtimeScene);

}


};gdjs.Scene_952Code.asyncCallback21315788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scene_952Code.localVariables);
gdjs.Scene_952Code.localVariables.length = 0;
}
gdjs.Scene_952Code.idToCallbackMap.set(21315788, gdjs.Scene_952Code.asyncCallback21315788);
gdjs.Scene_952Code.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scene_952Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "PlayerPut", runtimeScene.getScene().getVariables().getFromIndex(11), null), (runtimeScene) => (gdjs.Scene_952Code.asyncCallback21315788(runtimeScene, asyncObjectsList)), 21315788, asyncObjectsList);
}
}

}


};gdjs.Scene_952Code.eventsList10 = function(runtimeScene) {

};gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects5ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects5Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5, "dog_player_crawly": gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5});
gdjs.Scene_952Code.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length = 0;

gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene(runtimeScene, gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects5ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects5Objects, "dog_player_" + runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("selectedcharacter").getAsString(), runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("x").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("y").getAsNumber(), "");
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].activateBehavior("ThirdPersonCamera", false);
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].activateBehavior("ThirdPersonCamera", false);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getBehavior("Object3D").setZ(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("z").getAsNumber());
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getBehavior("Object3D").setZ(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("z").getAsNumber());
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getVariables().get("SyncedID")).setString(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("SyncedID")).setString(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString());
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getVariables().get("SyncedName")).setString(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("name").getAsString());
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("SyncedName")).setString(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("name").getAsString());
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getVariables().get("IsLocal")).setBoolean(false);
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("IsLocal")).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getVariables().get("Matched")).setBoolean(true);
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("Matched")).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getVariables().get("RTgtX")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("x").getAsNumber());
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("RTgtX")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("x").getAsNumber());
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getVariables().get("RTgtY")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("y").getAsNumber());
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("RTgtY")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("y").getAsNumber());
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getVariables().get("RVelX")).setNumber(0);
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("RVelX")).setNumber(0);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getVariables().get("RVelY")).setNumber(0);
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("RVelY")).setNumber(0);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getVariables().get("RSince")).setNumber(0);
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("RSince")).setNumber(0);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getVariables().get("pissing")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("pissing").getAsNumber());
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("pissing")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("pissing").getAsNumber());
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getVariables().get("anim")).setString(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("anim").getAsString());
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("anim")).setString(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("anim").getAsString());
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getVariables().get("angle")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("angle").getAsNumber());
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("angle")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("angle").getAsNumber());
}
}
}

}


};gdjs.Scene_952Code.eventsList12 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].getVariableString(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].getVariables().get("SyncedID")) == gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].getVariableString(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("SyncedID")) == gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6 */
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6 */
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].getVariables().get("RVelX")).setNumber((runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("x").getAsNumber() - gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].getVariables().get("RTgtX").getAsNumber()) / Math.max(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].getVariables().get("RSince").getAsNumber(), 0.05));
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("RVelX")).setNumber((runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("x").getAsNumber() - gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("RTgtX").getAsNumber()) / Math.max(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("RSince").getAsNumber(), 0.05));
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].getVariables().get("RVelY")).setNumber((runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("y").getAsNumber() - gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].getVariables().get("RTgtY").getAsNumber()) / Math.max(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].getVariables().get("RSince").getAsNumber(), 0.05));
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("RVelY")).setNumber((runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("y").getAsNumber() - gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("RTgtY").getAsNumber()) / Math.max(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("RSince").getAsNumber(), 0.05));
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].getVariables().get("RTgtX")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("x").getAsNumber());
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("RTgtX")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("x").getAsNumber());
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].getVariables().get("RTgtY")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("y").getAsNumber());
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("RTgtY")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("y").getAsNumber());
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].getVariables().get("RSince")).setNumber(0);
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("RSince")).setNumber(0);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].getBehavior("Object3D").setZ(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("z").getAsNumber());
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].getBehavior("Object3D").setZ(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("z").getAsNumber());
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].getVariables().get("Matched")).setBoolean(true);
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("Matched")).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].getVariables().get("pissing")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("pissing").getAsNumber());
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("pissing")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("pissing").getAsNumber());
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].getVariables().get("anim")).setString(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("anim").getAsString());
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("anim")).setString(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("anim").getAsString());
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6[i].getVariables().get("angle")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("angle").getAsNumber());
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("angle")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("angle").getAsNumber());
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {

{ //Subevents
gdjs.Scene_952Code.eventsList11(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Scene_952Code.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString() != runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("scene").getAsString() == gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Scene_952Code.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.Scene_952Code.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3);

gdjs.Scene_952Code.forEachTotalCount4 = 0;
gdjs.Scene_952Code.forEachObjects4.length = 0;
gdjs.Scene_952Code.forEachCount0_4 = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length;
gdjs.Scene_952Code.forEachTotalCount4 += gdjs.Scene_952Code.forEachCount0_4;
gdjs.Scene_952Code.forEachObjects4.push.apply(gdjs.Scene_952Code.forEachObjects4,gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3);
gdjs.Scene_952Code.forEachCount1_4 = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length;
gdjs.Scene_952Code.forEachTotalCount4 += gdjs.Scene_952Code.forEachCount1_4;
gdjs.Scene_952Code.forEachObjects4.push.apply(gdjs.Scene_952Code.forEachObjects4,gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3);
for (gdjs.Scene_952Code.forEachIndex4 = 0;gdjs.Scene_952Code.forEachIndex4 < gdjs.Scene_952Code.forEachTotalCount4;++gdjs.Scene_952Code.forEachIndex4) {
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4.length = 0;

gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4.length = 0;


if (gdjs.Scene_952Code.forEachIndex4 < gdjs.Scene_952Code.forEachCount0_4) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4.push(gdjs.Scene_952Code.forEachObjects4[gdjs.Scene_952Code.forEachIndex4]);
}
else if (gdjs.Scene_952Code.forEachIndex4 < gdjs.Scene_952Code.forEachCount0_4+gdjs.Scene_952Code.forEachCount1_4) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4.push(gdjs.Scene_952Code.forEachObjects4[gdjs.Scene_952Code.forEachIndex4]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4[i].getVariables().get("IsLocal"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4[i].getVariables().get("IsLocal"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4[i].getVariables().get("Matched")).setBoolean(false);
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4[i].getVariables().get("Matched")).setBoolean(false);
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
gdjs.Scene_952Code.localVariables.push(variables);
}
const keyIteratorReference4 = gdjs.Scene_952Code.localVariables[0].getFromIndex(1);
const valueIteratorReference4 = gdjs.Scene_952Code.localVariables[0].getFromIndex(0);
const iterableReference4 = runtimeScene.getGame().getVariables().getFromIndex(10);
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
gdjs.Scene_952Code.eventsList13(runtimeScene);} //Subevents end.
}
}
}
gdjs.Scene_952Code.localVariables.pop();

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getVariables().get("IsLocal"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("IsLocal"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getVariables().get("Matched"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("Matched"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2 */
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2 */
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.Scene_952Code.eventsList15 = function(runtimeScene) {

};gdjs.Scene_952Code.asyncCallback21329796 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scene_952Code.localVariables);
gdjs.Scene_952Code.localVariables.length = 0;
}
gdjs.Scene_952Code.idToCallbackMap.set(21329796, gdjs.Scene_952Code.asyncCallback21329796);
gdjs.Scene_952Code.eventsList16 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scene_952Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "Cleanup", runtimeScene.getScene().getVariables().getFromIndex(9), null), (runtimeScene) => (gdjs.Scene_952Code.asyncCallback21329796(runtimeScene, asyncObjectsList)), 21329796, asyncObjectsList);
}
}

}


};gdjs.Scene_952Code.eventsList17 = function(runtimeScene, asyncObjectsList) {

};gdjs.Scene_952Code.asyncCallback21329172 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scene_952Code.localVariables);
gdjs.Scene_952Code.localVariables.length = 0;
}
gdjs.Scene_952Code.idToCallbackMap.set(21329172, gdjs.Scene_952Code.asyncCallback21329172);
gdjs.Scene_952Code.eventsList18 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scene_952Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "CleanupDel", runtimeScene.getScene().getVariables().getFromIndex(8), null), (runtimeScene) => (gdjs.Scene_952Code.asyncCallback21329172(runtimeScene, asyncObjectsList)), 21329172, asyncObjectsList);
}
}

}


};gdjs.Scene_952Code.eventsList19 = function(runtimeScene, asyncObjectsList) {

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
gdjs.Scene_952Code.localVariables.push(variables);
}
const keyIteratorReference5 = gdjs.Scene_952Code.localVariables[0].getFromIndex(1);
const valueIteratorReference5 = gdjs.Scene_952Code.localVariables[0].getFromIndex(0);
const iterableReference5 = runtimeScene.getScene().getVariables().getFromIndex(5);
if(!iterableReference5.isPrimitive()) {
for(
    const iteratorKey5 in 
    iterableReference5.getType() === "structure"
      ? iterableReference5.getAllChildren()
      : iterableReference5.getType() === "array"
        ? iterableReference5.getAllChildrenArray()
        : []
) {
    if(iterableReference5.getType() === "structure")
        keyIteratorReference5.setString(iteratorKey5);
    else if(iterableReference5.getType() === "array")
        keyIteratorReference5.setNumber(iteratorKey5);
    const structureChildVariable5 = iterableReference5.getChild(iteratorKey5)
    valueIteratorReference5.castTo(structureChildVariable5.getType())
    if(structureChildVariable5.isPrimitive()) {
        valueIteratorReference5.setValue(structureChildVariable5.getValue());
    } else if (structureChildVariable5.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference5.replaceChildren(structureChildVariable5.getAllChildren());
    } else if (structureChildVariable5.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference5.replaceChildrenArray(structureChildVariable5.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(16).getAsString() == "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp") - runtimeScene.getScene().getVariables().getFromIndex(5).getChild(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString()).getChild("ts").getAsNumber() > runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber());
}
}
if (isConditionTrue_0)
{
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(gdjs.Scene_952Code.localVariables[0].getFromIndex(1).getAsString());
}
}
}
}
gdjs.Scene_952Code.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(16).getAsString() != "");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "CleanupDel", runtimeScene.getGame().getVariables().getFromIndex(11).getAsString() + "/" + runtimeScene.getGame().getVariables().getFromIndex(16).getAsString() + ".json" + runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "CleanupDel", "DELETE", null);
}

{ //Subevents
gdjs.Scene_952Code.eventsList18(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.Scene_952Code.asyncCallback21329716 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scene_952Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString("");
}

{ //Subevents
gdjs.Scene_952Code.eventsList19(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Scene_952Code.localVariables.length = 0;
}
gdjs.Scene_952Code.idToCallbackMap.set(21329716, gdjs.Scene_952Code.asyncCallback21329716);
gdjs.Scene_952Code.eventsList20 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scene_952Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ReadResponseJSON.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(9), runtimeScene.getScene().getVariables().getFromIndex(5), null), (runtimeScene) => (gdjs.Scene_952Code.asyncCallback21329716(runtimeScene, asyncObjectsList)), 21329716, asyncObjectsList);
}
}

}


};gdjs.Scene_952Code.asyncCallback21268132 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scene_952Code.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(0);
}
gdjs.Scene_952Code.localVariables.length = 0;
}
gdjs.Scene_952Code.idToCallbackMap.set(21268132, gdjs.Scene_952Code.asyncCallback21268132);
gdjs.Scene_952Code.eventsList21 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scene_952Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "NoteSave", runtimeScene.getScene().getVariables().getFromIndex(10), null), (runtimeScene) => (gdjs.Scene_952Code.asyncCallback21268132(runtimeScene, asyncObjectsList)), 21268132, asyncObjectsList);
}
}

}


};gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects2ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects2Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2, "dog_player_crawly": gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDVideo_95959595Trigger_959595951Objects2Objects = Hashtable.newFrom({"Video_Trigger_1": gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects2});
gdjs.Scene_952Code.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects2 */
gdjs.copyArray(runtimeScene.getObjects("exit_video"), gdjs.Scene_952Code.GDexit_9595videoObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "video_test", ((gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects2[0].getVariables()).getFromIndex(0).getAsString(), gdjs.evtTools.window.getWindowInnerWidth() / 2, gdjs.evtTools.window.getWindowInnerHeight() / 2, (gdjs.evtTools.window.getWindowInnerWidth() / 2) - (gdjs.evtTools.window.getWindowInnerWidth() / 2) / 2, (gdjs.evtTools.window.getWindowInnerHeight() / 2) - (gdjs.evtTools.window.getWindowInnerHeight() / 2) / 2, false, true, "", null);
}
{for(var i = 0, len = gdjs.Scene_952Code.GDexit_9595videoObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDexit_9595videoObjects2[i].hide(false);
}
}
}

}


};gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects2ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects2Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2, "dog_player_crawly": gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDVideo_95959595Trigger_959595951Objects2Objects = Hashtable.newFrom({"Video_Trigger_1": gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects2});
gdjs.Scene_952Code.eventsList23 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("exit_video"), gdjs.Scene_952Code.GDexit_9595videoObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}
{gdjs.evtsExt__Iframe__Delete.func(runtimeScene, "video_test", null);
}
{for(var i = 0, len = gdjs.Scene_952Code.GDexit_9595videoObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDexit_9595videoObjects2[i].hide();
}
}
}

}


};gdjs.Scene_952Code.userFunc0xe14d18 = function GDJSInlineCode(runtimeScene) {
try {
  var raw = runtimeScene
    .getGame()
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
    .getGame()
    .getVariables()
    .get("NoteClean")
    .setString(clean);

} catch (e) {
  console.error("Bad-word shuffle error:", e);

  runtimeScene
    .getGame()
    .getVariables()
    .get("NoteClean")
    .setString(
      runtimeScene
        .getGame()
        .getVariables()
        .get("NoteRaw")
        .getAsString()
    );
}
};
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDNoteSignObjects2Objects = Hashtable.newFrom({"NoteSign": gdjs.Scene_952Code.GDNoteSignObjects2});
gdjs.Scene_952Code.eventsList24 = function(runtimeScene) {

{


gdjs.Scene_952Code.userFunc0xe14d18(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cancel"), gdjs.Scene_952Code.GDCancelObjects2);
gdjs.copyArray(runtimeScene.getObjects("NoteButton"), gdjs.Scene_952Code.GDNoteButtonObjects2);
/* Reuse gdjs.Scene_952Code.GDNoteInputObjects2 */
/* Reuse gdjs.Scene_952Code.GDPostButtonObjects2 */
gdjs.copyArray(runtimeScene.getObjects("col_1"), gdjs.Scene_952Code.GDcol_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("col_2"), gdjs.Scene_952Code.GDcol_95952Objects2);
gdjs.copyArray(runtimeScene.getObjects("col_3"), gdjs.Scene_952Code.GDcol_95953Objects2);
gdjs.copyArray(runtimeScene.getObjects("col_4"), gdjs.Scene_952Code.GDcol_95954Objects2);
gdjs.copyArray(runtimeScene.getObjects("col_5"), gdjs.Scene_952Code.GDcol_95955Objects2);
gdjs.copyArray(runtimeScene.getObjects("col_6"), gdjs.Scene_952Code.GDcol_95956Objects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2);
gdjs.Scene_952Code.GDNoteSignObjects2.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(13).getChild("x").setNumber((( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[0].getX()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[0].getX()));
}
{runtimeScene.getGame().getVariables().getFromIndex(13).getChild("y").setNumber((( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[0].getY()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[0].getY()));
}
{runtimeScene.getGame().getVariables().getFromIndex(13).getChild("z").setNumber((( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[0].getBehavior("Object3D").getZ()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[0].getBehavior("Object3D").getZ()));
}
{runtimeScene.getGame().getVariables().getFromIndex(13).getChild("name").setString(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(((gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? ((gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[0].getVariables()) : gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[0].getVariables()).get("PlayerName").getAsString(), "[", ""), "]", ""));
}
{runtimeScene.getGame().getVariables().getFromIndex(13).getChild("text").setString(runtimeScene.getGame().getVariables().getFromIndex(18).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(13).getChild("colour").setString(runtimeScene.getGame().getVariables().getFromIndex(20).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(13).getChild("scene").setString(gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDNoteSignObjects2Objects, (( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[0].getX()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[0].getX()), (( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[0].getY()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[0].getY()), "");
}
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteSignObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteSignObjects2[i].getBehavior("Object3D").setZ(0);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteSignObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteSignObjects2[i].returnVariable(gdjs.Scene_952Code.GDNoteSignObjects2[i].getVariables().getFromIndex(1)).setString(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(((gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? ((gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[0].getVariables()) : gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[0].getVariables()).get("PlayerName").getAsString(), "[", ""), "]", ""));
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteSignObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteSignObjects2[i].returnVariable(gdjs.Scene_952Code.GDNoteSignObjects2[i].getVariables().getFromIndex(0)).setString(runtimeScene.getGame().getVariables().getFromIndex(18).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(1);
}
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteButtonObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteInputObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteInputObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDPostButtonObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDPostButtonObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDCancelObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDCancelObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDcol_95951Objects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDcol_95951Objects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDcol_95952Objects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDcol_95952Objects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDcol_95953Objects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDcol_95953Objects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDcol_95954Objects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDcol_95954Objects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDcol_95955Objects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDcol_95955Objects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDcol_95956Objects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDcol_95956Objects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}
}

}


};gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDmapObjects3ObjectsGDgdjs_9546Scene_9595952Code_9546GDGroundObjects3ObjectsGDgdjs_9546Scene_9595952Code_9546GDgreenlandObjects3ObjectsGDgdjs_9546Scene_9595952Code_9546GDGround2Objects3Objects = Hashtable.newFrom({"map": gdjs.Scene_952Code.GDmapObjects3, "Ground": gdjs.Scene_952Code.GDGroundObjects3, "greenland": gdjs.Scene_952Code.GDgreenlandObjects3, "Ground2": gdjs.Scene_952Code.GDGround2Objects3});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDNoteButtonObjects3Objects = Hashtable.newFrom({"NoteButton": gdjs.Scene_952Code.GDNoteButtonObjects3});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDpissObjects3Objects = Hashtable.newFrom({"piss": gdjs.Scene_952Code.GDpissObjects3});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects3ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects3Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3, "dog_player_crawly": gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDpiss2Objects5Objects = Hashtable.newFrom({"piss2": gdjs.Scene_952Code.GDpiss2Objects5});
gdjs.Scene_952Code.eventsList25 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4, gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5);

gdjs.copyArray(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4, gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5);


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getBehavior("Pathfinding").destinationReached() ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getBehavior("Pathfinding").destinationReached() ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getVariableNumber(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getVariables().get("pissing")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getVariableNumber(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("pissing")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5 */
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5 */
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getBehavior("Animation").setAnimationName("idle");
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getBehavior("Animation").setAnimationName("idle");
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4, gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5);

gdjs.copyArray(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4, gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5);


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getVariableNumber(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getVariables().get("pissing")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getVariableNumber(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("pissing")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length = k;
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5 */
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5 */
gdjs.Scene_952Code.GDpiss2Objects5.length = 0;

{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getBehavior("Animation").setAnimationName("piss");
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getBehavior("Animation").setAnimationName("piss");
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDpiss2Objects5Objects, (( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[0].getX()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[0].getX()), (( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[0].getY()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[0].getY()), "");
}
{for(var i = 0, len = gdjs.Scene_952Code.GDpiss2Objects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDpiss2Objects5[i].getBehavior("Object3D").setZ((( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[0].getBehavior("Object3D").getCenterZInScene()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[0].getBehavior("Object3D").getCenterZInScene()) - 10);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getBehavior("Object3D").setZ(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getBehavior("Object3D").getZ() + (5));
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getBehavior("Object3D").setZ(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getBehavior("Object3D").getZ() + (5));
}
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4, gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5);

gdjs.copyArray(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4, gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5);

{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getBehavior("Animation").setAnimationName("run");
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getBehavior("Animation").setAnimationName("run");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDpiss2Objects5Objects = Hashtable.newFrom({"piss2": gdjs.Scene_952Code.GDpiss2Objects5});
gdjs.Scene_952Code.eventsList26 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4, gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5);

gdjs.copyArray(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4, gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5);

{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].setAngle(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getVariables().get("angle").getAsNumber());
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].setAngle(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("angle").getAsNumber());
}
}
}

}


{

gdjs.copyArray(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4, gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5);

gdjs.copyArray(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4, gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5);


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getVariableString(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getVariables().get("anim")) == "idle" ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getVariableString(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("anim")) == "idle" ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5 */
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5 */
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getBehavior("Animation").setAnimationName("idle");
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getBehavior("Animation").setAnimationName("idle");
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4, gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5);

gdjs.copyArray(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4, gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5);


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getVariableNumber(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getVariables().get("pissing")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getVariableNumber(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("pissing")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length = k;
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5 */
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5 */
gdjs.Scene_952Code.GDpiss2Objects5.length = 0;

{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getBehavior("Animation").setAnimationName("piss");
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getBehavior("Animation").setAnimationName("piss");
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDpiss2Objects5Objects, (( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[0].getX()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[0].getX()), (( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[0].getY()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[0].getY()), "");
}
{for(var i = 0, len = gdjs.Scene_952Code.GDpiss2Objects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDpiss2Objects5[i].getBehavior("Object3D").setZ((( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[0].getBehavior("Object3D").getCenterZInScene()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[0].getBehavior("Object3D").getCenterZInScene()) - 10);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4, gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5);

gdjs.copyArray(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4, gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5);

{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5[i].getBehavior("Animation").setAnimationName("run");
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5[i].getBehavior("Animation").setAnimationName("run");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects3ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects3Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3, "dog_player_crawly": gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects3ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects3Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3, "dog_player_crawly": gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3});
gdjs.Scene_952Code.eventsList27 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.Scene_952Code.GDGroundObjects3);
gdjs.copyArray(runtimeScene.getObjects("Ground2"), gdjs.Scene_952Code.GDGround2Objects3);
gdjs.copyArray(runtimeScene.getObjects("NoteButton"), gdjs.Scene_952Code.GDNoteButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3);
gdjs.copyArray(runtimeScene.getObjects("greenland"), gdjs.Scene_952Code.GDgreenlandObjects3);
gdjs.copyArray(runtimeScene.getObjects("map"), gdjs.Scene_952Code.GDmapObjects3);
gdjs.copyArray(runtimeScene.getObjects("piss"), gdjs.Scene_952Code.GDpissObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Raycaster3D__RaycastFromCameraCursor.func(runtimeScene, gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDmapObjects3ObjectsGDgdjs_9546Scene_9595952Code_9546GDGroundObjects3ObjectsGDgdjs_9546Scene_9595952Code_9546GDgreenlandObjects3ObjectsGDgdjs_9546Scene_9595952Code_9546GDGround2Objects3Objects, "notebutton", 1500, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDNoteButtonObjects3Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDpissObjects3Objects, runtimeScene, true, true);
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3 */
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3 */
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getBehavior("Pathfinding").moveTo(runtimeScene, gdjs.evtsExt__Raycaster3D__IntersectionX.func(runtimeScene, null), gdjs.evtsExt__Raycaster3D__IntersectionY.func(runtimeScene, null));
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getBehavior("Pathfinding").moveTo(runtimeScene, gdjs.evtsExt__Raycaster3D__IntersectionX.func(runtimeScene, null), gdjs.evtsExt__Raycaster3D__IntersectionY.func(runtimeScene, null));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3);

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("angle", variable);
}
gdjs.Scene_952Code.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3 */
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3 */
{gdjs.Scene_952Code.localVariables[0].getFromIndex(0).setNumber((( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[0].getAngle()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[0].getAngle()));
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getBehavior("ThirdPersonCamera").SetTargetedRotationAngle(gdjs.evtTools.tween.ease("easeFromTo", gdjs.Scene_952Code.localVariables[0].getFromIndex(0).getAsNumber(), (gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getAngle()), gdjs.evtTools.common.clamp(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 25, 0, 1)), null);
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getBehavior("ThirdPersonCamera").SetTargetedRotationAngle(gdjs.evtTools.tween.ease("easeFromTo", gdjs.Scene_952Code.localVariables[0].getFromIndex(0).getAsNumber(), (gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getAngle()), gdjs.evtTools.common.clamp(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 25, 0, 1)), null);
}
}
}
gdjs.Scene_952Code.localVariables.pop();

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3 */
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3 */
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber((( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[0].getX()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[0].getX()));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber((( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[0].getY()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[0].getY()));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getVariables().get("IsLocal"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("IsLocal"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3 */
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3 */
{gdjs.evtTools.object.pickNearestObject(gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects3ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects3Objects, runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber((( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[0].getX()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[0].getX()));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber((( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[0].getY()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[0].getY()));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3);

gdjs.Scene_952Code.forEachTotalCount4 = 0;
gdjs.Scene_952Code.forEachObjects4.length = 0;
gdjs.Scene_952Code.forEachCount0_4 = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length;
gdjs.Scene_952Code.forEachTotalCount4 += gdjs.Scene_952Code.forEachCount0_4;
gdjs.Scene_952Code.forEachObjects4.push.apply(gdjs.Scene_952Code.forEachObjects4,gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3);
gdjs.Scene_952Code.forEachCount1_4 = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length;
gdjs.Scene_952Code.forEachTotalCount4 += gdjs.Scene_952Code.forEachCount1_4;
gdjs.Scene_952Code.forEachObjects4.push.apply(gdjs.Scene_952Code.forEachObjects4,gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3);
for (gdjs.Scene_952Code.forEachIndex4 = 0;gdjs.Scene_952Code.forEachIndex4 < gdjs.Scene_952Code.forEachTotalCount4;++gdjs.Scene_952Code.forEachIndex4) {
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4.length = 0;

gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4.length = 0;


if (gdjs.Scene_952Code.forEachIndex4 < gdjs.Scene_952Code.forEachCount0_4) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4.push(gdjs.Scene_952Code.forEachObjects4[gdjs.Scene_952Code.forEachIndex4]);
}
else if (gdjs.Scene_952Code.forEachIndex4 < gdjs.Scene_952Code.forEachCount0_4+gdjs.Scene_952Code.forEachCount1_4) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4.push(gdjs.Scene_952Code.forEachObjects4[gdjs.Scene_952Code.forEachIndex4]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.Scene_952Code.eventsList25(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3);

gdjs.Scene_952Code.forEachTotalCount4 = 0;
gdjs.Scene_952Code.forEachObjects4.length = 0;
gdjs.Scene_952Code.forEachCount0_4 = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length;
gdjs.Scene_952Code.forEachTotalCount4 += gdjs.Scene_952Code.forEachCount0_4;
gdjs.Scene_952Code.forEachObjects4.push.apply(gdjs.Scene_952Code.forEachObjects4,gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3);
gdjs.Scene_952Code.forEachCount1_4 = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length;
gdjs.Scene_952Code.forEachTotalCount4 += gdjs.Scene_952Code.forEachCount1_4;
gdjs.Scene_952Code.forEachObjects4.push.apply(gdjs.Scene_952Code.forEachObjects4,gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3);
for (gdjs.Scene_952Code.forEachIndex4 = 0;gdjs.Scene_952Code.forEachIndex4 < gdjs.Scene_952Code.forEachTotalCount4;++gdjs.Scene_952Code.forEachIndex4) {
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4.length = 0;

gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4.length = 0;


if (gdjs.Scene_952Code.forEachIndex4 < gdjs.Scene_952Code.forEachCount0_4) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4.push(gdjs.Scene_952Code.forEachObjects4[gdjs.Scene_952Code.forEachIndex4]);
}
else if (gdjs.Scene_952Code.forEachIndex4 < gdjs.Scene_952Code.forEachCount0_4+gdjs.Scene_952Code.forEachCount1_4) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4.push(gdjs.Scene_952Code.forEachObjects4[gdjs.Scene_952Code.forEachIndex4]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4[i].getVariables().get("IsLocal"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4[i].getVariables().get("IsLocal"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.Scene_952Code.eventsList26(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects3ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects3Objects, "Physics3D", gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects3ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects3Objects, "Physics3D", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21371292);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "bark", false, 100, gdjs.randomFloatInRange(0.5, 1.25));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getBehavior("Object3D").getZ() <= -1000 ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getBehavior("Object3D").getZ() <= -1000 ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21373236);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2 */
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2 */
gdjs.copyArray(runtimeScene.getObjects("map"), gdjs.Scene_952Code.GDmapObjects2);
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].setPosition((( gdjs.Scene_952Code.GDmapObjects2.length === 0 ) ? 0 :gdjs.Scene_952Code.GDmapObjects2[0].getAABBCenterX()),(( gdjs.Scene_952Code.GDmapObjects2.length === 0 ) ? 0 :gdjs.Scene_952Code.GDmapObjects2[0].getAABBCenterY()));
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].setPosition((( gdjs.Scene_952Code.GDmapObjects2.length === 0 ) ? 0 :gdjs.Scene_952Code.GDmapObjects2[0].getAABBCenterX()),(( gdjs.Scene_952Code.GDmapObjects2.length === 0 ) ? 0 :gdjs.Scene_952Code.GDmapObjects2[0].getAABBCenterY()));
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getBehavior("Object3D").setZ(500);
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getBehavior("Object3D").setZ(500);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "spawn", false, 100, gdjs.randomFloatInRange(0.6, 1.2));
}
}

}


};gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects4ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects4Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4, "dog_player_crawly": gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDNoteSignObjects4Objects = Hashtable.newFrom({"NoteSign": gdjs.Scene_952Code.GDNoteSignObjects4});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDNoteSignObjects4Objects = Hashtable.newFrom({"NoteSign": gdjs.Scene_952Code.GDNoteSignObjects4});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDNoteText3DObjects4Objects = Hashtable.newFrom({"NoteText3D": gdjs.Scene_952Code.GDNoteText3DObjects4});
gdjs.Scene_952Code.eventsList28 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21376532);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDNoteSignObjects4 */
/* Reuse gdjs.Scene_952Code.GDNoteText3DObjects4 */
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDNoteText3DObjects4Objects, (( gdjs.Scene_952Code.GDNoteSignObjects4.length === 0 ) ? 0 :gdjs.Scene_952Code.GDNoteSignObjects4[0].getAABBCenterX()), (( gdjs.Scene_952Code.GDNoteSignObjects4.length === 0 ) ? 0 :gdjs.Scene_952Code.GDNoteSignObjects4[0].getAABBCenterY()), "");
}
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteText3DObjects4.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteText3DObjects4[i].getBehavior("Text").setText(((gdjs.Scene_952Code.GDNoteSignObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Scene_952Code.GDNoteSignObjects4[0].getVariables()).getFromIndex(1).getAsString() + ": " + ((gdjs.Scene_952Code.GDNoteSignObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Scene_952Code.GDNoteSignObjects4[0].getVariables()).getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteText3DObjects4.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteText3DObjects4[i].SetWrappingWidth(250, null);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteText3DObjects4.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteText3DObjects4[i].SetWrapping(true, null);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteText3DObjects4.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteText3DObjects4[i].getBehavior("Object3D").setRotationX(-0);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteText3DObjects4.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteText3DObjects4[i].getBehavior("Object3D").setZ((( gdjs.Scene_952Code.GDNoteSignObjects4.length === 0 ) ? 0 :gdjs.Scene_952Code.GDNoteSignObjects4[0].getBehavior("Object3D").getZ()) + 150);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteText3DObjects4.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteText3DObjects4[i].putAround((( gdjs.Scene_952Code.GDNoteSignObjects4.length === 0 ) ? 0 :gdjs.Scene_952Code.GDNoteSignObjects4[0].getX()), (( gdjs.Scene_952Code.GDNoteSignObjects4.length === 0 ) ? 0 :gdjs.Scene_952Code.GDNoteSignObjects4[0].getY()), 1, 0);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "BARK", false, 100, gdjs.randomFloatInRange(0.5, 1.5));
}
}

}


};gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDNoteText3DObjects3Objects = Hashtable.newFrom({"NoteText3D": gdjs.Scene_952Code.GDNoteText3DObjects3});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects3ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects3Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3, "dog_player_crawly": gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3});
gdjs.Scene_952Code.eventsList29 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("NoteSign"), gdjs.Scene_952Code.GDNoteSignObjects4);
gdjs.copyArray(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3, gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4);

gdjs.copyArray(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3, gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4);


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects4ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects4Objects, gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDNoteSignObjects4Objects, 50, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDNoteSignObjects4Objects, (( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4[0].getX()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4[0].getX()), (( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4[0].getY()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4[0].getY()), false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDNoteSignObjects4 */
gdjs.copyArray(runtimeScene.getObjects("NoteText"), gdjs.Scene_952Code.GDNoteTextObjects4);
gdjs.copyArray(runtimeScene.getObjects("NoteText3D"), gdjs.Scene_952Code.GDNoteText3DObjects4);
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Scene_952Code.GDStatusTextObjects4);
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteTextObjects4.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteTextObjects4[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteTextObjects4.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteTextObjects4[i].setBBText(((gdjs.Scene_952Code.GDNoteSignObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Scene_952Code.GDNoteSignObjects4[0].getVariables()).getFromIndex(1).getAsString() + ": " + ((gdjs.Scene_952Code.GDNoteSignObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Scene_952Code.GDNoteSignObjects4[0].getVariables()).getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteSignObjects4.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteSignObjects4[i].setColor(gdjs.Scene_952Code.GDNoteSignObjects4[i].getVariables().getFromIndex(2).getAsString());
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDStatusTextObjects4.length ;i < len;++i) {
    gdjs.Scene_952Code.GDStatusTextObjects4[i].setBBText(((gdjs.Scene_952Code.GDNoteSignObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Scene_952Code.GDNoteSignObjects4[0].getVariables()).getFromIndex(2).getAsString());
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteText3DObjects4.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteText3DObjects4[i].SetColor(((gdjs.Scene_952Code.GDNoteSignObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Scene_952Code.GDNoteSignObjects4[0].getVariables()).getFromIndex(2).getAsString(), null);
}
}

{ //Subevents
gdjs.Scene_952Code.eventsList28(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NoteText3D"), gdjs.Scene_952Code.GDNoteText3DObjects3);
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3 */
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3 */

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDNoteText3DObjects3Objects, gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects3ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects3Objects, 200, true);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDNoteText3DObjects3 */
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteText3DObjects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteText3DObjects3[i].deleteFromScene(runtimeScene);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Scene_952Code.eventsList30 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Scene_952Code.eventsList29(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("NoteSign"), gdjs.Scene_952Code.GDNoteSignObjects2);
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteSignObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteSignObjects2[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDcol_959595951Objects4Objects = Hashtable.newFrom({"col_1": gdjs.Scene_952Code.GDcol_95951Objects4});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDcol_959595952Objects4Objects = Hashtable.newFrom({"col_2": gdjs.Scene_952Code.GDcol_95952Objects4});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDcol_959595953Objects4Objects = Hashtable.newFrom({"col_3": gdjs.Scene_952Code.GDcol_95953Objects4});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDcol_959595954Objects4Objects = Hashtable.newFrom({"col_4": gdjs.Scene_952Code.GDcol_95954Objects4});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDcol_959595955Objects4Objects = Hashtable.newFrom({"col_5": gdjs.Scene_952Code.GDcol_95955Objects4});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDcol_959595956Objects3Objects = Hashtable.newFrom({"col_6": gdjs.Scene_952Code.GDcol_95956Objects3});
gdjs.Scene_952Code.eventsList31 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("col_1"), gdjs.Scene_952Code.GDcol_95951Objects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDcol_959595951Objects4Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NoteInput"), gdjs.Scene_952Code.GDNoteInputObjects4);
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteInputObjects4.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteInputObjects4[i].setFillColor("255;0;0");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setString("255;0;0");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("col_2"), gdjs.Scene_952Code.GDcol_95952Objects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDcol_959595952Objects4Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NoteInput"), gdjs.Scene_952Code.GDNoteInputObjects4);
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteInputObjects4.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteInputObjects4[i].setFillColor("0;255;0");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setString("0;255;0");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("col_3"), gdjs.Scene_952Code.GDcol_95953Objects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDcol_959595953Objects4Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NoteInput"), gdjs.Scene_952Code.GDNoteInputObjects4);
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteInputObjects4.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteInputObjects4[i].setFillColor("0;0;255");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setString("0;0;255");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("col_4"), gdjs.Scene_952Code.GDcol_95954Objects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDcol_959595954Objects4Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NoteInput"), gdjs.Scene_952Code.GDNoteInputObjects4);
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteInputObjects4.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteInputObjects4[i].setFillColor("255;255;0");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setString("255;255;0");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("col_5"), gdjs.Scene_952Code.GDcol_95955Objects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDcol_959595955Objects4Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NoteInput"), gdjs.Scene_952Code.GDNoteInputObjects4);
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteInputObjects4.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteInputObjects4[i].setFillColor("0;255;255");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setString("0;255;255");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("col_6"), gdjs.Scene_952Code.GDcol_95956Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDcol_959595956Objects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NoteInput"), gdjs.Scene_952Code.GDNoteInputObjects3);
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteInputObjects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteInputObjects3[i].setFillColor("125;0;125");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setString("125;0;125");
}
}

}


};gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDpissObjects3Objects = Hashtable.newFrom({"piss": gdjs.Scene_952Code.GDpissObjects3});
gdjs.Scene_952Code.eventsList32 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FULLS_SCREEN"), gdjs.Scene_952Code.GDFULLS_9595SCREENObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDFULLS_9595SCREENObjects3.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDFULLS_9595SCREENObjects3[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDFULLS_9595SCREENObjects3[k] = gdjs.Scene_952Code.GDFULLS_9595SCREENObjects3[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21381084);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(19));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(19).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21381852);
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
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(19).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21382820);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NoteButton"), gdjs.Scene_952Code.GDNoteButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDNoteButtonObjects3.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDNoteButtonObjects3[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDNoteButtonObjects3[k] = gdjs.Scene_952Code.GDNoteButtonObjects3[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDNoteButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDNoteButtonObjects3 */
gdjs.copyArray(runtimeScene.getObjects("PostButton"), gdjs.Scene_952Code.GDPostButtonObjects3);
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteButtonObjects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteButtonObjects3[i].hide();
}
}
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Note_UI", 0, 0, 0);
}
{for(var i = 0, len = gdjs.Scene_952Code.GDPostButtonObjects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDPostButtonObjects3[i].Activate(true, null);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cancel"), gdjs.Scene_952Code.GDCancelObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDCancelObjects3.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDCancelObjects3[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDCancelObjects3[k] = gdjs.Scene_952Code.GDCancelObjects3[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDCancelObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDCancelObjects3.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDCancelObjects3[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDCancelObjects3[k] = gdjs.Scene_952Code.GDCancelObjects3[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDCancelObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDCancelObjects3 */
gdjs.copyArray(runtimeScene.getObjects("NoteButton"), gdjs.Scene_952Code.GDNoteButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("NoteInput"), gdjs.Scene_952Code.GDNoteInputObjects3);
gdjs.copyArray(runtimeScene.getObjects("PostButton"), gdjs.Scene_952Code.GDPostButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("col_1"), gdjs.Scene_952Code.GDcol_95951Objects3);
gdjs.copyArray(runtimeScene.getObjects("col_2"), gdjs.Scene_952Code.GDcol_95952Objects3);
gdjs.copyArray(runtimeScene.getObjects("col_3"), gdjs.Scene_952Code.GDcol_95953Objects3);
gdjs.copyArray(runtimeScene.getObjects("col_4"), gdjs.Scene_952Code.GDcol_95954Objects3);
gdjs.copyArray(runtimeScene.getObjects("col_5"), gdjs.Scene_952Code.GDcol_95955Objects3);
gdjs.copyArray(runtimeScene.getObjects("col_6"), gdjs.Scene_952Code.GDcol_95956Objects3);
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteInputObjects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteInputObjects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDPostButtonObjects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDPostButtonObjects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDCancelObjects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDCancelObjects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDcol_95951Objects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDcol_95951Objects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDcol_95952Objects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDcol_95952Objects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDcol_95953Objects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDcol_95953Objects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDcol_95954Objects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDcol_95954Objects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDcol_95955Objects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDcol_95955Objects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDcol_95956Objects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDcol_95956Objects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDNoteButtonObjects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDNoteButtonObjects3[i].hide(false);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Scene_952Code.eventsList31(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3);
gdjs.copyArray(runtimeScene.getObjects("piss"), gdjs.Scene_952Code.GDpissObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDpissObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21393500);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3 */
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pissing");
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getVariables().get("pissing")).setNumber(1);
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("pissing")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "pissing") > 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2 */
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2 */
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getVariables().get("pissing")).setNumber(0);
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("pissing")).setNumber(0);
}
}
}

}


};gdjs.Scene_952Code.eventsList33 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "PollTimer") > 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Scene_952Code.GDStatusTextObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PollTimer");
}
{for(var i = 0, len = gdjs.Scene_952Code.GDStatusTextObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDStatusTextObjects2[i].setBBText("Fetching notes...");
}
}
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "NoteFetch", runtimeScene.getGame().getVariables().getFromIndex(4).getAsString(), null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "NoteFetch", "GET", null);
}

{ //Subevents
gdjs.Scene_952Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AdvancedHTTP__ResponseSuccess.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(7), null);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Scene_952Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__AdvancedHTTP__ResponseStatusCode.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(7), null) >= 400);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Scene_952Code.GDStatusTextObjects2);
{for(var i = 0, len = gdjs.Scene_952Code.GDStatusTextObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDStatusTextObjects2[i].setBBText("Fetch failed: HTTP " + gdjs.evtTools.common.toString(gdjs.evtsExt__AdvancedHTTP__ResponseStatusCode.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(7), null)));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() != "");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Scene_952Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2);

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variables._declare("PutData", variable);
}
gdjs.Scene_952Code.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "PlayerSync") > 0.15;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() != "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2 */
/* Reuse gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2 */
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "PlayerPut", runtimeScene.getGame().getVariables().getFromIndex(11).getAsString() + "/" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + ".json" + runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "PlayerPut", "PUT", null);
}
{gdjs.Scene_952Code.localVariables[0].getFromIndex(0).getChild("pissing").setNumber(((gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? ((gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[0].getVariables()) : gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[0].getVariables()).get("pissing").getAsNumber());
}
{gdjs.Scene_952Code.localVariables[0].getFromIndex(0).getChild("x").setNumber((( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[0].getX()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[0].getX()));
}
{gdjs.Scene_952Code.localVariables[0].getFromIndex(0).getChild("y").setNumber((( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[0].getY()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[0].getY()));
}
{gdjs.Scene_952Code.localVariables[0].getFromIndex(0).getChild("z").setNumber((( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[0].getBehavior("Object3D").getZ()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[0].getBehavior("Object3D").getZ()));
}
{gdjs.Scene_952Code.localVariables[0].getFromIndex(0).getChild("name").setString(((gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? ((gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[0].getVariables()) : gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[0].getVariables()).get("PlayerName").getAsString());
}
{gdjs.Scene_952Code.localVariables[0].getFromIndex(0).getChild("ts").setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp"));
}
{gdjs.Scene_952Code.localVariables[0].getFromIndex(0).getChild("selectedcharacter").setString(((gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? ((gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[0].getVariables()) : gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[0].getVariables()).get("selectedcharacter").getAsString());
}
{gdjs.Scene_952Code.localVariables[0].getFromIndex(0).getChild("anim").setString((( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length === 0 ) ? "" :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[0].getBehavior("Animation").getAnimationName()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[0].getBehavior("Animation").getAnimationName()));
}
{gdjs.Scene_952Code.localVariables[0].getFromIndex(0).getChild("angle").setNumber((( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? (( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length === 0 ) ? 0 :gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[0].getAngle()) :gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[0].getAngle()));
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerSync");
}
{gdjs.Scene_952Code.localVariables[0].getFromIndex(0).getChild("scene").setString(gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestBody.func(runtimeScene, gdjs.evtTools.network.variableStructureToJSON(gdjs.Scene_952Code.localVariables[0].getFromIndex(0)), "PlayerPut", null);
}

{ //Subevents
gdjs.Scene_952Code.eventsList9(runtimeScene);} //End of subevents
}
gdjs.Scene_952Code.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getGame().getVariables().getFromIndex(9).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(10));
}
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(0);
}

{ //Subevents
gdjs.Scene_952Code.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2);

gdjs.Scene_952Code.forEachTotalCount3 = 0;
gdjs.Scene_952Code.forEachObjects3.length = 0;
gdjs.Scene_952Code.forEachCount0_3 = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length;
gdjs.Scene_952Code.forEachTotalCount3 += gdjs.Scene_952Code.forEachCount0_3;
gdjs.Scene_952Code.forEachObjects3.push.apply(gdjs.Scene_952Code.forEachObjects3,gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2);
gdjs.Scene_952Code.forEachCount1_3 = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length;
gdjs.Scene_952Code.forEachTotalCount3 += gdjs.Scene_952Code.forEachCount1_3;
gdjs.Scene_952Code.forEachObjects3.push.apply(gdjs.Scene_952Code.forEachObjects3,gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2);
for (gdjs.Scene_952Code.forEachIndex3 = 0;gdjs.Scene_952Code.forEachIndex3 < gdjs.Scene_952Code.forEachTotalCount3;++gdjs.Scene_952Code.forEachIndex3) {
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length = 0;

gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length = 0;


if (gdjs.Scene_952Code.forEachIndex3 < gdjs.Scene_952Code.forEachCount0_3) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.push(gdjs.Scene_952Code.forEachObjects3[gdjs.Scene_952Code.forEachIndex3]);
}
else if (gdjs.Scene_952Code.forEachIndex3 < gdjs.Scene_952Code.forEachCount0_3+gdjs.Scene_952Code.forEachCount1_3) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.push(gdjs.Scene_952Code.forEachObjects3[gdjs.Scene_952Code.forEachIndex3]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getVariables().get("IsLocal"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("IsLocal"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].setPosition(gdjs.evtTools.common.lerp((gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getX()), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getVariables().get("RTgtX").getAsNumber() + gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getVariables().get("RVelX").getAsNumber() * Math.min(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getVariables().get("RSince").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()), Math.min(1, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))),gdjs.evtTools.common.lerp((gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getY()), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getVariables().get("RTgtY").getAsNumber() + gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getVariables().get("RVelY").getAsNumber() * Math.min(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getVariables().get("RSince").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()), Math.min(1, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))));
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].setPosition(gdjs.evtTools.common.lerp((gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getX()), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("RTgtX").getAsNumber() + gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("RVelX").getAsNumber() * Math.min(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("RSince").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()), Math.min(1, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))),gdjs.evtTools.common.lerp((gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getY()), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("RTgtY").getAsNumber() + gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("RVelY").getAsNumber() * Math.min(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("RSince").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()), Math.min(1, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))));
}
}
{for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3[i].getVariables().get("RSince")).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
for(var i = 0, len = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length ;i < len;++i) {
    gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].returnVariable(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("RSince")).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "CleanupTimer") > runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CleanupTimer");
}
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "Cleanup", runtimeScene.getGame().getVariables().getFromIndex(11).getAsString() + ".json" + runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "Cleanup", "GET", null);
}

{ //Subevents
gdjs.Scene_952Code.eventsList16(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AdvancedHTTP__ResponseSuccess.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(9), null);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Scene_952Code.eventsList20(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21274540);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "NoteSave", runtimeScene.getGame().getVariables().getFromIndex(4).getAsString(), null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "NoteSave", "POST", null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestBody.func(runtimeScene, gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(13)), "NoteSave", null);
}

{ //Subevents
gdjs.Scene_952Code.eventsList21(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Video_Trigger_1"), gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects2ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects2Objects, gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDVideo_95959595Trigger_959595951Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21268548);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Scene_952Code.eventsList22(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Video_Trigger_1"), gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects2ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects2Objects, gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDVideo_95959595Trigger_959595951Objects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19734948);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Scene_952Code.eventsList23(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit_video"), gdjs.Scene_952Code.GDexit_9595videoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDexit_9595videoObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDexit_9595videoObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDexit_9595videoObjects2[k] = gdjs.Scene_952Code.GDexit_9595videoObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDexit_9595videoObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Scene_952Code.GDexit_9595videoObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}
{gdjs.evtsExt__Iframe__Delete.func(runtimeScene, "video_test", null);
}
{for(var i = 0, len = gdjs.Scene_952Code.GDexit_9595videoObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDexit_9595videoObjects2[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PostButton"), gdjs.Scene_952Code.GDPostButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDPostButtonObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDPostButtonObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDPostButtonObjects2[k] = gdjs.Scene_952Code.GDPostButtonObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDPostButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDPostButtonObjects2.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDPostButtonObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDPostButtonObjects2[k] = gdjs.Scene_952Code.GDPostButtonObjects2[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDPostButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21332548);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NoteInput"), gdjs.Scene_952Code.GDNoteInputObjects2);
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Scene_952Code.GDStatusTextObjects2);
{for(var i = 0, len = gdjs.Scene_952Code.GDStatusTextObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDStatusTextObjects2[i].setBBText("Saving note...");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll((( gdjs.Scene_952Code.GDNoteInputObjects2.length === 0 ) ? "" :gdjs.Scene_952Code.GDNoteInputObjects2[0].getText()), "[", ""), "]", ""));
}

{ //Subevents
gdjs.Scene_952Code.eventsList24(runtimeScene);} //End of subevents
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AdvancedHTTP__ResponseSuccess.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(10), null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Scene_952Code.GDStatusTextObjects2);
{for(var i = 0, len = gdjs.Scene_952Code.GDStatusTextObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDStatusTextObjects2[i].setBBText("Note saved! u2713");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Scene_952Code.GDStatusTextObjects2);
{for(var i = 0, len = gdjs.Scene_952Code.GDStatusTextObjects2.length ;i < len;++i) {
    gdjs.Scene_952Code.GDStatusTextObjects2[i].setBBText("Save failed: HTTP " + gdjs.evtTools.common.toString(gdjs.evtsExt__AdvancedHTTP__ResponseStatusCode.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(10), null)));
}
}
elseEventsChainSatisfied = true;
}
}

}


{


gdjs.Scene_952Code.eventsList27(runtimeScene);
}


{


gdjs.Scene_952Code.eventsList30(runtimeScene);
}


{


gdjs.Scene_952Code.eventsList32(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}

}

};gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects1ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects1Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Scene_952Code.GDdog_9595player_9595dogObjects1, "dog_player_crawly": gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects1});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDteleportObjects1Objects = Hashtable.newFrom({"teleport": gdjs.Scene_952Code.GDteleportObjects1});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects1ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects1Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Scene_952Code.GDdog_9595player_9595dogObjects1, "dog_player_crawly": gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects1});
gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDteleportObjects1Objects = Hashtable.newFrom({"teleport": gdjs.Scene_952Code.GDteleportObjects1});
gdjs.Scene_952Code.eventsList34 = function(runtimeScene) {

{


gdjs.Scene_952Code.eventsList1(runtimeScene);
}


{


gdjs.Scene_952Code.eventsList2(runtimeScene);
}


{


gdjs.Scene_952Code.eventsList33(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects1);
gdjs.copyArray(runtimeScene.getObjects("teleport"), gdjs.Scene_952Code.GDteleportObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects1ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects1Objects, gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDteleportObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects1.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects1[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects1[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects1[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects1[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects1.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects1[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects1[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects1[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects1[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(24).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(24).setBoolean(false);
}
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Scene_952Code.GDdog_9595player_9595dogObjects1);
gdjs.copyArray(runtimeScene.getObjects("teleport"), gdjs.Scene_952Code.GDteleportObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595dogObjects1ObjectsGDgdjs_9546Scene_9595952Code_9546GDdog_95959595player_95959595crawlyObjects1Objects, gdjs.Scene_952Code.mapOfGDgdjs_9546Scene_9595952Code_9546GDteleportObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects1.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595dogObjects1[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595dogObjects1[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595dogObjects1[k] = gdjs.Scene_952Code.GDdog_9595player_9595dogObjects1[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects1.length;i<l;++i) {
    if ( gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects1[i].getVariableBoolean(gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects1[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects1[k] = gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects1[i];
        ++k;
    }
}
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects1.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(24).setBoolean(true);
}
}

}


};

gdjs.Scene_952Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene_952Code.GDPathfindingBoundaryObjects1.length = 0;
gdjs.Scene_952Code.GDPathfindingBoundaryObjects2.length = 0;
gdjs.Scene_952Code.GDPathfindingBoundaryObjects3.length = 0;
gdjs.Scene_952Code.GDPathfindingBoundaryObjects4.length = 0;
gdjs.Scene_952Code.GDPathfindingBoundaryObjects5.length = 0;
gdjs.Scene_952Code.GDPathfindingBoundaryObjects6.length = 0;
gdjs.Scene_952Code.GDPathfindingBoundaryObjects7.length = 0;
gdjs.Scene_952Code.GDPathfindingBoundaryObjects8.length = 0;
gdjs.Scene_952Code.GDWallObjects1.length = 0;
gdjs.Scene_952Code.GDWallObjects2.length = 0;
gdjs.Scene_952Code.GDWallObjects3.length = 0;
gdjs.Scene_952Code.GDWallObjects4.length = 0;
gdjs.Scene_952Code.GDWallObjects5.length = 0;
gdjs.Scene_952Code.GDWallObjects6.length = 0;
gdjs.Scene_952Code.GDWallObjects7.length = 0;
gdjs.Scene_952Code.GDWallObjects8.length = 0;
gdjs.Scene_952Code.GDGroundObjects1.length = 0;
gdjs.Scene_952Code.GDGroundObjects2.length = 0;
gdjs.Scene_952Code.GDGroundObjects3.length = 0;
gdjs.Scene_952Code.GDGroundObjects4.length = 0;
gdjs.Scene_952Code.GDGroundObjects5.length = 0;
gdjs.Scene_952Code.GDGroundObjects6.length = 0;
gdjs.Scene_952Code.GDGroundObjects7.length = 0;
gdjs.Scene_952Code.GDGroundObjects8.length = 0;
gdjs.Scene_952Code.GDmapObjects1.length = 0;
gdjs.Scene_952Code.GDmapObjects2.length = 0;
gdjs.Scene_952Code.GDmapObjects3.length = 0;
gdjs.Scene_952Code.GDmapObjects4.length = 0;
gdjs.Scene_952Code.GDmapObjects5.length = 0;
gdjs.Scene_952Code.GDmapObjects6.length = 0;
gdjs.Scene_952Code.GDmapObjects7.length = 0;
gdjs.Scene_952Code.GDmapObjects8.length = 0;
gdjs.Scene_952Code.GDgreenlandObjects1.length = 0;
gdjs.Scene_952Code.GDgreenlandObjects2.length = 0;
gdjs.Scene_952Code.GDgreenlandObjects3.length = 0;
gdjs.Scene_952Code.GDgreenlandObjects4.length = 0;
gdjs.Scene_952Code.GDgreenlandObjects5.length = 0;
gdjs.Scene_952Code.GDgreenlandObjects6.length = 0;
gdjs.Scene_952Code.GDgreenlandObjects7.length = 0;
gdjs.Scene_952Code.GDgreenlandObjects8.length = 0;
gdjs.Scene_952Code.GDdiscoObjects1.length = 0;
gdjs.Scene_952Code.GDdiscoObjects2.length = 0;
gdjs.Scene_952Code.GDdiscoObjects3.length = 0;
gdjs.Scene_952Code.GDdiscoObjects4.length = 0;
gdjs.Scene_952Code.GDdiscoObjects5.length = 0;
gdjs.Scene_952Code.GDdiscoObjects6.length = 0;
gdjs.Scene_952Code.GDdiscoObjects7.length = 0;
gdjs.Scene_952Code.GDdiscoObjects8.length = 0;
gdjs.Scene_952Code.GDGround2Objects1.length = 0;
gdjs.Scene_952Code.GDGround2Objects2.length = 0;
gdjs.Scene_952Code.GDGround2Objects3.length = 0;
gdjs.Scene_952Code.GDGround2Objects4.length = 0;
gdjs.Scene_952Code.GDGround2Objects5.length = 0;
gdjs.Scene_952Code.GDGround2Objects6.length = 0;
gdjs.Scene_952Code.GDGround2Objects7.length = 0;
gdjs.Scene_952Code.GDGround2Objects8.length = 0;
gdjs.Scene_952Code.GDNoteSignObjects1.length = 0;
gdjs.Scene_952Code.GDNoteSignObjects2.length = 0;
gdjs.Scene_952Code.GDNoteSignObjects3.length = 0;
gdjs.Scene_952Code.GDNoteSignObjects4.length = 0;
gdjs.Scene_952Code.GDNoteSignObjects5.length = 0;
gdjs.Scene_952Code.GDNoteSignObjects6.length = 0;
gdjs.Scene_952Code.GDNoteSignObjects7.length = 0;
gdjs.Scene_952Code.GDNoteSignObjects8.length = 0;
gdjs.Scene_952Code.GDNoteTextObjects1.length = 0;
gdjs.Scene_952Code.GDNoteTextObjects2.length = 0;
gdjs.Scene_952Code.GDNoteTextObjects3.length = 0;
gdjs.Scene_952Code.GDNoteTextObjects4.length = 0;
gdjs.Scene_952Code.GDNoteTextObjects5.length = 0;
gdjs.Scene_952Code.GDNoteTextObjects6.length = 0;
gdjs.Scene_952Code.GDNoteTextObjects7.length = 0;
gdjs.Scene_952Code.GDNoteTextObjects8.length = 0;
gdjs.Scene_952Code.GDNoteInputObjects1.length = 0;
gdjs.Scene_952Code.GDNoteInputObjects2.length = 0;
gdjs.Scene_952Code.GDNoteInputObjects3.length = 0;
gdjs.Scene_952Code.GDNoteInputObjects4.length = 0;
gdjs.Scene_952Code.GDNoteInputObjects5.length = 0;
gdjs.Scene_952Code.GDNoteInputObjects6.length = 0;
gdjs.Scene_952Code.GDNoteInputObjects7.length = 0;
gdjs.Scene_952Code.GDNoteInputObjects8.length = 0;
gdjs.Scene_952Code.GDNoteButtonObjects1.length = 0;
gdjs.Scene_952Code.GDNoteButtonObjects2.length = 0;
gdjs.Scene_952Code.GDNoteButtonObjects3.length = 0;
gdjs.Scene_952Code.GDNoteButtonObjects4.length = 0;
gdjs.Scene_952Code.GDNoteButtonObjects5.length = 0;
gdjs.Scene_952Code.GDNoteButtonObjects6.length = 0;
gdjs.Scene_952Code.GDNoteButtonObjects7.length = 0;
gdjs.Scene_952Code.GDNoteButtonObjects8.length = 0;
gdjs.Scene_952Code.GDPostButtonObjects1.length = 0;
gdjs.Scene_952Code.GDPostButtonObjects2.length = 0;
gdjs.Scene_952Code.GDPostButtonObjects3.length = 0;
gdjs.Scene_952Code.GDPostButtonObjects4.length = 0;
gdjs.Scene_952Code.GDPostButtonObjects5.length = 0;
gdjs.Scene_952Code.GDPostButtonObjects6.length = 0;
gdjs.Scene_952Code.GDPostButtonObjects7.length = 0;
gdjs.Scene_952Code.GDPostButtonObjects8.length = 0;
gdjs.Scene_952Code.GDNoteText3DObjects1.length = 0;
gdjs.Scene_952Code.GDNoteText3DObjects2.length = 0;
gdjs.Scene_952Code.GDNoteText3DObjects3.length = 0;
gdjs.Scene_952Code.GDNoteText3DObjects4.length = 0;
gdjs.Scene_952Code.GDNoteText3DObjects5.length = 0;
gdjs.Scene_952Code.GDNoteText3DObjects6.length = 0;
gdjs.Scene_952Code.GDNoteText3DObjects7.length = 0;
gdjs.Scene_952Code.GDNoteText3DObjects8.length = 0;
gdjs.Scene_952Code.GDNameInputObjects1.length = 0;
gdjs.Scene_952Code.GDNameInputObjects2.length = 0;
gdjs.Scene_952Code.GDNameInputObjects3.length = 0;
gdjs.Scene_952Code.GDNameInputObjects4.length = 0;
gdjs.Scene_952Code.GDNameInputObjects5.length = 0;
gdjs.Scene_952Code.GDNameInputObjects6.length = 0;
gdjs.Scene_952Code.GDNameInputObjects7.length = 0;
gdjs.Scene_952Code.GDNameInputObjects8.length = 0;
gdjs.Scene_952Code.GDJoinButtonObjects1.length = 0;
gdjs.Scene_952Code.GDJoinButtonObjects2.length = 0;
gdjs.Scene_952Code.GDJoinButtonObjects3.length = 0;
gdjs.Scene_952Code.GDJoinButtonObjects4.length = 0;
gdjs.Scene_952Code.GDJoinButtonObjects5.length = 0;
gdjs.Scene_952Code.GDJoinButtonObjects6.length = 0;
gdjs.Scene_952Code.GDJoinButtonObjects7.length = 0;
gdjs.Scene_952Code.GDJoinButtonObjects8.length = 0;
gdjs.Scene_952Code.GDStatusTextObjects1.length = 0;
gdjs.Scene_952Code.GDStatusTextObjects2.length = 0;
gdjs.Scene_952Code.GDStatusTextObjects3.length = 0;
gdjs.Scene_952Code.GDStatusTextObjects4.length = 0;
gdjs.Scene_952Code.GDStatusTextObjects5.length = 0;
gdjs.Scene_952Code.GDStatusTextObjects6.length = 0;
gdjs.Scene_952Code.GDStatusTextObjects7.length = 0;
gdjs.Scene_952Code.GDStatusTextObjects8.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects1.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects7.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects8.length = 0;
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects1.length = 0;
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects2.length = 0;
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects3.length = 0;
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects4.length = 0;
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects5.length = 0;
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects6.length = 0;
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects7.length = 0;
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects8.length = 0;
gdjs.Scene_952Code.GDColor_9595PickerObjects1.length = 0;
gdjs.Scene_952Code.GDColor_9595PickerObjects2.length = 0;
gdjs.Scene_952Code.GDColor_9595PickerObjects3.length = 0;
gdjs.Scene_952Code.GDColor_9595PickerObjects4.length = 0;
gdjs.Scene_952Code.GDColor_9595PickerObjects5.length = 0;
gdjs.Scene_952Code.GDColor_9595PickerObjects6.length = 0;
gdjs.Scene_952Code.GDColor_9595PickerObjects7.length = 0;
gdjs.Scene_952Code.GDColor_9595PickerObjects8.length = 0;
gdjs.Scene_952Code.GDCancelObjects1.length = 0;
gdjs.Scene_952Code.GDCancelObjects2.length = 0;
gdjs.Scene_952Code.GDCancelObjects3.length = 0;
gdjs.Scene_952Code.GDCancelObjects4.length = 0;
gdjs.Scene_952Code.GDCancelObjects5.length = 0;
gdjs.Scene_952Code.GDCancelObjects6.length = 0;
gdjs.Scene_952Code.GDCancelObjects7.length = 0;
gdjs.Scene_952Code.GDCancelObjects8.length = 0;
gdjs.Scene_952Code.GDpissObjects1.length = 0;
gdjs.Scene_952Code.GDpissObjects2.length = 0;
gdjs.Scene_952Code.GDpissObjects3.length = 0;
gdjs.Scene_952Code.GDpissObjects4.length = 0;
gdjs.Scene_952Code.GDpissObjects5.length = 0;
gdjs.Scene_952Code.GDpissObjects6.length = 0;
gdjs.Scene_952Code.GDpissObjects7.length = 0;
gdjs.Scene_952Code.GDpissObjects8.length = 0;
gdjs.Scene_952Code.GDpiss2Objects1.length = 0;
gdjs.Scene_952Code.GDpiss2Objects2.length = 0;
gdjs.Scene_952Code.GDpiss2Objects3.length = 0;
gdjs.Scene_952Code.GDpiss2Objects4.length = 0;
gdjs.Scene_952Code.GDpiss2Objects5.length = 0;
gdjs.Scene_952Code.GDpiss2Objects6.length = 0;
gdjs.Scene_952Code.GDpiss2Objects7.length = 0;
gdjs.Scene_952Code.GDpiss2Objects8.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects1.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects2.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects3.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects4.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects5.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects6.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects7.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects8.length = 0;
gdjs.Scene_952Code.GDcol_95951Objects1.length = 0;
gdjs.Scene_952Code.GDcol_95951Objects2.length = 0;
gdjs.Scene_952Code.GDcol_95951Objects3.length = 0;
gdjs.Scene_952Code.GDcol_95951Objects4.length = 0;
gdjs.Scene_952Code.GDcol_95951Objects5.length = 0;
gdjs.Scene_952Code.GDcol_95951Objects6.length = 0;
gdjs.Scene_952Code.GDcol_95951Objects7.length = 0;
gdjs.Scene_952Code.GDcol_95951Objects8.length = 0;
gdjs.Scene_952Code.GDcol_95952Objects1.length = 0;
gdjs.Scene_952Code.GDcol_95952Objects2.length = 0;
gdjs.Scene_952Code.GDcol_95952Objects3.length = 0;
gdjs.Scene_952Code.GDcol_95952Objects4.length = 0;
gdjs.Scene_952Code.GDcol_95952Objects5.length = 0;
gdjs.Scene_952Code.GDcol_95952Objects6.length = 0;
gdjs.Scene_952Code.GDcol_95952Objects7.length = 0;
gdjs.Scene_952Code.GDcol_95952Objects8.length = 0;
gdjs.Scene_952Code.GDcol_95953Objects1.length = 0;
gdjs.Scene_952Code.GDcol_95953Objects2.length = 0;
gdjs.Scene_952Code.GDcol_95953Objects3.length = 0;
gdjs.Scene_952Code.GDcol_95953Objects4.length = 0;
gdjs.Scene_952Code.GDcol_95953Objects5.length = 0;
gdjs.Scene_952Code.GDcol_95953Objects6.length = 0;
gdjs.Scene_952Code.GDcol_95953Objects7.length = 0;
gdjs.Scene_952Code.GDcol_95953Objects8.length = 0;
gdjs.Scene_952Code.GDcol_95954Objects1.length = 0;
gdjs.Scene_952Code.GDcol_95954Objects2.length = 0;
gdjs.Scene_952Code.GDcol_95954Objects3.length = 0;
gdjs.Scene_952Code.GDcol_95954Objects4.length = 0;
gdjs.Scene_952Code.GDcol_95954Objects5.length = 0;
gdjs.Scene_952Code.GDcol_95954Objects6.length = 0;
gdjs.Scene_952Code.GDcol_95954Objects7.length = 0;
gdjs.Scene_952Code.GDcol_95954Objects8.length = 0;
gdjs.Scene_952Code.GDcol_95955Objects1.length = 0;
gdjs.Scene_952Code.GDcol_95955Objects2.length = 0;
gdjs.Scene_952Code.GDcol_95955Objects3.length = 0;
gdjs.Scene_952Code.GDcol_95955Objects4.length = 0;
gdjs.Scene_952Code.GDcol_95955Objects5.length = 0;
gdjs.Scene_952Code.GDcol_95955Objects6.length = 0;
gdjs.Scene_952Code.GDcol_95955Objects7.length = 0;
gdjs.Scene_952Code.GDcol_95955Objects8.length = 0;
gdjs.Scene_952Code.GDcol_95956Objects1.length = 0;
gdjs.Scene_952Code.GDcol_95956Objects2.length = 0;
gdjs.Scene_952Code.GDcol_95956Objects3.length = 0;
gdjs.Scene_952Code.GDcol_95956Objects4.length = 0;
gdjs.Scene_952Code.GDcol_95956Objects5.length = 0;
gdjs.Scene_952Code.GDcol_95956Objects6.length = 0;
gdjs.Scene_952Code.GDcol_95956Objects7.length = 0;
gdjs.Scene_952Code.GDcol_95956Objects8.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects1.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects7.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects8.length = 0;
gdjs.Scene_952Code.GDdog_9595selectObjects1.length = 0;
gdjs.Scene_952Code.GDdog_9595selectObjects2.length = 0;
gdjs.Scene_952Code.GDdog_9595selectObjects3.length = 0;
gdjs.Scene_952Code.GDdog_9595selectObjects4.length = 0;
gdjs.Scene_952Code.GDdog_9595selectObjects5.length = 0;
gdjs.Scene_952Code.GDdog_9595selectObjects6.length = 0;
gdjs.Scene_952Code.GDdog_9595selectObjects7.length = 0;
gdjs.Scene_952Code.GDdog_9595selectObjects8.length = 0;
gdjs.Scene_952Code.GDcrawly_9595selectObjects1.length = 0;
gdjs.Scene_952Code.GDcrawly_9595selectObjects2.length = 0;
gdjs.Scene_952Code.GDcrawly_9595selectObjects3.length = 0;
gdjs.Scene_952Code.GDcrawly_9595selectObjects4.length = 0;
gdjs.Scene_952Code.GDcrawly_9595selectObjects5.length = 0;
gdjs.Scene_952Code.GDcrawly_9595selectObjects6.length = 0;
gdjs.Scene_952Code.GDcrawly_9595selectObjects7.length = 0;
gdjs.Scene_952Code.GDcrawly_9595selectObjects8.length = 0;
gdjs.Scene_952Code.GDnextObjects1.length = 0;
gdjs.Scene_952Code.GDnextObjects2.length = 0;
gdjs.Scene_952Code.GDnextObjects3.length = 0;
gdjs.Scene_952Code.GDnextObjects4.length = 0;
gdjs.Scene_952Code.GDnextObjects5.length = 0;
gdjs.Scene_952Code.GDnextObjects6.length = 0;
gdjs.Scene_952Code.GDnextObjects7.length = 0;
gdjs.Scene_952Code.GDnextObjects8.length = 0;
gdjs.Scene_952Code.GDbackObjects1.length = 0;
gdjs.Scene_952Code.GDbackObjects2.length = 0;
gdjs.Scene_952Code.GDbackObjects3.length = 0;
gdjs.Scene_952Code.GDbackObjects4.length = 0;
gdjs.Scene_952Code.GDbackObjects5.length = 0;
gdjs.Scene_952Code.GDbackObjects6.length = 0;
gdjs.Scene_952Code.GDbackObjects7.length = 0;
gdjs.Scene_952Code.GDbackObjects8.length = 0;
gdjs.Scene_952Code.GDexit_9595videoObjects1.length = 0;
gdjs.Scene_952Code.GDexit_9595videoObjects2.length = 0;
gdjs.Scene_952Code.GDexit_9595videoObjects3.length = 0;
gdjs.Scene_952Code.GDexit_9595videoObjects4.length = 0;
gdjs.Scene_952Code.GDexit_9595videoObjects5.length = 0;
gdjs.Scene_952Code.GDexit_9595videoObjects6.length = 0;
gdjs.Scene_952Code.GDexit_9595videoObjects7.length = 0;
gdjs.Scene_952Code.GDexit_9595videoObjects8.length = 0;
gdjs.Scene_952Code.GDbeansObjects1.length = 0;
gdjs.Scene_952Code.GDbeansObjects2.length = 0;
gdjs.Scene_952Code.GDbeansObjects3.length = 0;
gdjs.Scene_952Code.GDbeansObjects4.length = 0;
gdjs.Scene_952Code.GDbeansObjects5.length = 0;
gdjs.Scene_952Code.GDbeansObjects6.length = 0;
gdjs.Scene_952Code.GDbeansObjects7.length = 0;
gdjs.Scene_952Code.GDbeansObjects8.length = 0;
gdjs.Scene_952Code.GDyeetObjects1.length = 0;
gdjs.Scene_952Code.GDyeetObjects2.length = 0;
gdjs.Scene_952Code.GDyeetObjects3.length = 0;
gdjs.Scene_952Code.GDyeetObjects4.length = 0;
gdjs.Scene_952Code.GDyeetObjects5.length = 0;
gdjs.Scene_952Code.GDyeetObjects6.length = 0;
gdjs.Scene_952Code.GDyeetObjects7.length = 0;
gdjs.Scene_952Code.GDyeetObjects8.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects1.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects2.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects3.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects4.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects5.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects6.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects7.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects8.length = 0;
gdjs.Scene_952Code.GDteleportObjects1.length = 0;
gdjs.Scene_952Code.GDteleportObjects2.length = 0;
gdjs.Scene_952Code.GDteleportObjects3.length = 0;
gdjs.Scene_952Code.GDteleportObjects4.length = 0;
gdjs.Scene_952Code.GDteleportObjects5.length = 0;
gdjs.Scene_952Code.GDteleportObjects6.length = 0;
gdjs.Scene_952Code.GDteleportObjects7.length = 0;
gdjs.Scene_952Code.GDteleportObjects8.length = 0;

gdjs.Scene_952Code.eventsList34(runtimeScene);
gdjs.Scene_952Code.GDPathfindingBoundaryObjects1.length = 0;
gdjs.Scene_952Code.GDPathfindingBoundaryObjects2.length = 0;
gdjs.Scene_952Code.GDPathfindingBoundaryObjects3.length = 0;
gdjs.Scene_952Code.GDPathfindingBoundaryObjects4.length = 0;
gdjs.Scene_952Code.GDPathfindingBoundaryObjects5.length = 0;
gdjs.Scene_952Code.GDPathfindingBoundaryObjects6.length = 0;
gdjs.Scene_952Code.GDPathfindingBoundaryObjects7.length = 0;
gdjs.Scene_952Code.GDPathfindingBoundaryObjects8.length = 0;
gdjs.Scene_952Code.GDWallObjects1.length = 0;
gdjs.Scene_952Code.GDWallObjects2.length = 0;
gdjs.Scene_952Code.GDWallObjects3.length = 0;
gdjs.Scene_952Code.GDWallObjects4.length = 0;
gdjs.Scene_952Code.GDWallObjects5.length = 0;
gdjs.Scene_952Code.GDWallObjects6.length = 0;
gdjs.Scene_952Code.GDWallObjects7.length = 0;
gdjs.Scene_952Code.GDWallObjects8.length = 0;
gdjs.Scene_952Code.GDGroundObjects1.length = 0;
gdjs.Scene_952Code.GDGroundObjects2.length = 0;
gdjs.Scene_952Code.GDGroundObjects3.length = 0;
gdjs.Scene_952Code.GDGroundObjects4.length = 0;
gdjs.Scene_952Code.GDGroundObjects5.length = 0;
gdjs.Scene_952Code.GDGroundObjects6.length = 0;
gdjs.Scene_952Code.GDGroundObjects7.length = 0;
gdjs.Scene_952Code.GDGroundObjects8.length = 0;
gdjs.Scene_952Code.GDmapObjects1.length = 0;
gdjs.Scene_952Code.GDmapObjects2.length = 0;
gdjs.Scene_952Code.GDmapObjects3.length = 0;
gdjs.Scene_952Code.GDmapObjects4.length = 0;
gdjs.Scene_952Code.GDmapObjects5.length = 0;
gdjs.Scene_952Code.GDmapObjects6.length = 0;
gdjs.Scene_952Code.GDmapObjects7.length = 0;
gdjs.Scene_952Code.GDmapObjects8.length = 0;
gdjs.Scene_952Code.GDgreenlandObjects1.length = 0;
gdjs.Scene_952Code.GDgreenlandObjects2.length = 0;
gdjs.Scene_952Code.GDgreenlandObjects3.length = 0;
gdjs.Scene_952Code.GDgreenlandObjects4.length = 0;
gdjs.Scene_952Code.GDgreenlandObjects5.length = 0;
gdjs.Scene_952Code.GDgreenlandObjects6.length = 0;
gdjs.Scene_952Code.GDgreenlandObjects7.length = 0;
gdjs.Scene_952Code.GDgreenlandObjects8.length = 0;
gdjs.Scene_952Code.GDdiscoObjects1.length = 0;
gdjs.Scene_952Code.GDdiscoObjects2.length = 0;
gdjs.Scene_952Code.GDdiscoObjects3.length = 0;
gdjs.Scene_952Code.GDdiscoObjects4.length = 0;
gdjs.Scene_952Code.GDdiscoObjects5.length = 0;
gdjs.Scene_952Code.GDdiscoObjects6.length = 0;
gdjs.Scene_952Code.GDdiscoObjects7.length = 0;
gdjs.Scene_952Code.GDdiscoObjects8.length = 0;
gdjs.Scene_952Code.GDGround2Objects1.length = 0;
gdjs.Scene_952Code.GDGround2Objects2.length = 0;
gdjs.Scene_952Code.GDGround2Objects3.length = 0;
gdjs.Scene_952Code.GDGround2Objects4.length = 0;
gdjs.Scene_952Code.GDGround2Objects5.length = 0;
gdjs.Scene_952Code.GDGround2Objects6.length = 0;
gdjs.Scene_952Code.GDGround2Objects7.length = 0;
gdjs.Scene_952Code.GDGround2Objects8.length = 0;
gdjs.Scene_952Code.GDNoteSignObjects1.length = 0;
gdjs.Scene_952Code.GDNoteSignObjects2.length = 0;
gdjs.Scene_952Code.GDNoteSignObjects3.length = 0;
gdjs.Scene_952Code.GDNoteSignObjects4.length = 0;
gdjs.Scene_952Code.GDNoteSignObjects5.length = 0;
gdjs.Scene_952Code.GDNoteSignObjects6.length = 0;
gdjs.Scene_952Code.GDNoteSignObjects7.length = 0;
gdjs.Scene_952Code.GDNoteSignObjects8.length = 0;
gdjs.Scene_952Code.GDNoteTextObjects1.length = 0;
gdjs.Scene_952Code.GDNoteTextObjects2.length = 0;
gdjs.Scene_952Code.GDNoteTextObjects3.length = 0;
gdjs.Scene_952Code.GDNoteTextObjects4.length = 0;
gdjs.Scene_952Code.GDNoteTextObjects5.length = 0;
gdjs.Scene_952Code.GDNoteTextObjects6.length = 0;
gdjs.Scene_952Code.GDNoteTextObjects7.length = 0;
gdjs.Scene_952Code.GDNoteTextObjects8.length = 0;
gdjs.Scene_952Code.GDNoteInputObjects1.length = 0;
gdjs.Scene_952Code.GDNoteInputObjects2.length = 0;
gdjs.Scene_952Code.GDNoteInputObjects3.length = 0;
gdjs.Scene_952Code.GDNoteInputObjects4.length = 0;
gdjs.Scene_952Code.GDNoteInputObjects5.length = 0;
gdjs.Scene_952Code.GDNoteInputObjects6.length = 0;
gdjs.Scene_952Code.GDNoteInputObjects7.length = 0;
gdjs.Scene_952Code.GDNoteInputObjects8.length = 0;
gdjs.Scene_952Code.GDNoteButtonObjects1.length = 0;
gdjs.Scene_952Code.GDNoteButtonObjects2.length = 0;
gdjs.Scene_952Code.GDNoteButtonObjects3.length = 0;
gdjs.Scene_952Code.GDNoteButtonObjects4.length = 0;
gdjs.Scene_952Code.GDNoteButtonObjects5.length = 0;
gdjs.Scene_952Code.GDNoteButtonObjects6.length = 0;
gdjs.Scene_952Code.GDNoteButtonObjects7.length = 0;
gdjs.Scene_952Code.GDNoteButtonObjects8.length = 0;
gdjs.Scene_952Code.GDPostButtonObjects1.length = 0;
gdjs.Scene_952Code.GDPostButtonObjects2.length = 0;
gdjs.Scene_952Code.GDPostButtonObjects3.length = 0;
gdjs.Scene_952Code.GDPostButtonObjects4.length = 0;
gdjs.Scene_952Code.GDPostButtonObjects5.length = 0;
gdjs.Scene_952Code.GDPostButtonObjects6.length = 0;
gdjs.Scene_952Code.GDPostButtonObjects7.length = 0;
gdjs.Scene_952Code.GDPostButtonObjects8.length = 0;
gdjs.Scene_952Code.GDNoteText3DObjects1.length = 0;
gdjs.Scene_952Code.GDNoteText3DObjects2.length = 0;
gdjs.Scene_952Code.GDNoteText3DObjects3.length = 0;
gdjs.Scene_952Code.GDNoteText3DObjects4.length = 0;
gdjs.Scene_952Code.GDNoteText3DObjects5.length = 0;
gdjs.Scene_952Code.GDNoteText3DObjects6.length = 0;
gdjs.Scene_952Code.GDNoteText3DObjects7.length = 0;
gdjs.Scene_952Code.GDNoteText3DObjects8.length = 0;
gdjs.Scene_952Code.GDNameInputObjects1.length = 0;
gdjs.Scene_952Code.GDNameInputObjects2.length = 0;
gdjs.Scene_952Code.GDNameInputObjects3.length = 0;
gdjs.Scene_952Code.GDNameInputObjects4.length = 0;
gdjs.Scene_952Code.GDNameInputObjects5.length = 0;
gdjs.Scene_952Code.GDNameInputObjects6.length = 0;
gdjs.Scene_952Code.GDNameInputObjects7.length = 0;
gdjs.Scene_952Code.GDNameInputObjects8.length = 0;
gdjs.Scene_952Code.GDJoinButtonObjects1.length = 0;
gdjs.Scene_952Code.GDJoinButtonObjects2.length = 0;
gdjs.Scene_952Code.GDJoinButtonObjects3.length = 0;
gdjs.Scene_952Code.GDJoinButtonObjects4.length = 0;
gdjs.Scene_952Code.GDJoinButtonObjects5.length = 0;
gdjs.Scene_952Code.GDJoinButtonObjects6.length = 0;
gdjs.Scene_952Code.GDJoinButtonObjects7.length = 0;
gdjs.Scene_952Code.GDJoinButtonObjects8.length = 0;
gdjs.Scene_952Code.GDStatusTextObjects1.length = 0;
gdjs.Scene_952Code.GDStatusTextObjects2.length = 0;
gdjs.Scene_952Code.GDStatusTextObjects3.length = 0;
gdjs.Scene_952Code.GDStatusTextObjects4.length = 0;
gdjs.Scene_952Code.GDStatusTextObjects5.length = 0;
gdjs.Scene_952Code.GDStatusTextObjects6.length = 0;
gdjs.Scene_952Code.GDStatusTextObjects7.length = 0;
gdjs.Scene_952Code.GDStatusTextObjects8.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects1.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects2.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects3.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects4.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects5.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects6.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects7.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595dogObjects8.length = 0;
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects1.length = 0;
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects2.length = 0;
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects3.length = 0;
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects4.length = 0;
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects5.length = 0;
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects6.length = 0;
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects7.length = 0;
gdjs.Scene_952Code.GDFULLS_9595SCREENObjects8.length = 0;
gdjs.Scene_952Code.GDColor_9595PickerObjects1.length = 0;
gdjs.Scene_952Code.GDColor_9595PickerObjects2.length = 0;
gdjs.Scene_952Code.GDColor_9595PickerObjects3.length = 0;
gdjs.Scene_952Code.GDColor_9595PickerObjects4.length = 0;
gdjs.Scene_952Code.GDColor_9595PickerObjects5.length = 0;
gdjs.Scene_952Code.GDColor_9595PickerObjects6.length = 0;
gdjs.Scene_952Code.GDColor_9595PickerObjects7.length = 0;
gdjs.Scene_952Code.GDColor_9595PickerObjects8.length = 0;
gdjs.Scene_952Code.GDCancelObjects1.length = 0;
gdjs.Scene_952Code.GDCancelObjects2.length = 0;
gdjs.Scene_952Code.GDCancelObjects3.length = 0;
gdjs.Scene_952Code.GDCancelObjects4.length = 0;
gdjs.Scene_952Code.GDCancelObjects5.length = 0;
gdjs.Scene_952Code.GDCancelObjects6.length = 0;
gdjs.Scene_952Code.GDCancelObjects7.length = 0;
gdjs.Scene_952Code.GDCancelObjects8.length = 0;
gdjs.Scene_952Code.GDpissObjects1.length = 0;
gdjs.Scene_952Code.GDpissObjects2.length = 0;
gdjs.Scene_952Code.GDpissObjects3.length = 0;
gdjs.Scene_952Code.GDpissObjects4.length = 0;
gdjs.Scene_952Code.GDpissObjects5.length = 0;
gdjs.Scene_952Code.GDpissObjects6.length = 0;
gdjs.Scene_952Code.GDpissObjects7.length = 0;
gdjs.Scene_952Code.GDpissObjects8.length = 0;
gdjs.Scene_952Code.GDpiss2Objects1.length = 0;
gdjs.Scene_952Code.GDpiss2Objects2.length = 0;
gdjs.Scene_952Code.GDpiss2Objects3.length = 0;
gdjs.Scene_952Code.GDpiss2Objects4.length = 0;
gdjs.Scene_952Code.GDpiss2Objects5.length = 0;
gdjs.Scene_952Code.GDpiss2Objects6.length = 0;
gdjs.Scene_952Code.GDpiss2Objects7.length = 0;
gdjs.Scene_952Code.GDpiss2Objects8.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects1.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects2.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects3.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects4.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects5.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects6.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects7.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95951Objects8.length = 0;
gdjs.Scene_952Code.GDcol_95951Objects1.length = 0;
gdjs.Scene_952Code.GDcol_95951Objects2.length = 0;
gdjs.Scene_952Code.GDcol_95951Objects3.length = 0;
gdjs.Scene_952Code.GDcol_95951Objects4.length = 0;
gdjs.Scene_952Code.GDcol_95951Objects5.length = 0;
gdjs.Scene_952Code.GDcol_95951Objects6.length = 0;
gdjs.Scene_952Code.GDcol_95951Objects7.length = 0;
gdjs.Scene_952Code.GDcol_95951Objects8.length = 0;
gdjs.Scene_952Code.GDcol_95952Objects1.length = 0;
gdjs.Scene_952Code.GDcol_95952Objects2.length = 0;
gdjs.Scene_952Code.GDcol_95952Objects3.length = 0;
gdjs.Scene_952Code.GDcol_95952Objects4.length = 0;
gdjs.Scene_952Code.GDcol_95952Objects5.length = 0;
gdjs.Scene_952Code.GDcol_95952Objects6.length = 0;
gdjs.Scene_952Code.GDcol_95952Objects7.length = 0;
gdjs.Scene_952Code.GDcol_95952Objects8.length = 0;
gdjs.Scene_952Code.GDcol_95953Objects1.length = 0;
gdjs.Scene_952Code.GDcol_95953Objects2.length = 0;
gdjs.Scene_952Code.GDcol_95953Objects3.length = 0;
gdjs.Scene_952Code.GDcol_95953Objects4.length = 0;
gdjs.Scene_952Code.GDcol_95953Objects5.length = 0;
gdjs.Scene_952Code.GDcol_95953Objects6.length = 0;
gdjs.Scene_952Code.GDcol_95953Objects7.length = 0;
gdjs.Scene_952Code.GDcol_95953Objects8.length = 0;
gdjs.Scene_952Code.GDcol_95954Objects1.length = 0;
gdjs.Scene_952Code.GDcol_95954Objects2.length = 0;
gdjs.Scene_952Code.GDcol_95954Objects3.length = 0;
gdjs.Scene_952Code.GDcol_95954Objects4.length = 0;
gdjs.Scene_952Code.GDcol_95954Objects5.length = 0;
gdjs.Scene_952Code.GDcol_95954Objects6.length = 0;
gdjs.Scene_952Code.GDcol_95954Objects7.length = 0;
gdjs.Scene_952Code.GDcol_95954Objects8.length = 0;
gdjs.Scene_952Code.GDcol_95955Objects1.length = 0;
gdjs.Scene_952Code.GDcol_95955Objects2.length = 0;
gdjs.Scene_952Code.GDcol_95955Objects3.length = 0;
gdjs.Scene_952Code.GDcol_95955Objects4.length = 0;
gdjs.Scene_952Code.GDcol_95955Objects5.length = 0;
gdjs.Scene_952Code.GDcol_95955Objects6.length = 0;
gdjs.Scene_952Code.GDcol_95955Objects7.length = 0;
gdjs.Scene_952Code.GDcol_95955Objects8.length = 0;
gdjs.Scene_952Code.GDcol_95956Objects1.length = 0;
gdjs.Scene_952Code.GDcol_95956Objects2.length = 0;
gdjs.Scene_952Code.GDcol_95956Objects3.length = 0;
gdjs.Scene_952Code.GDcol_95956Objects4.length = 0;
gdjs.Scene_952Code.GDcol_95956Objects5.length = 0;
gdjs.Scene_952Code.GDcol_95956Objects6.length = 0;
gdjs.Scene_952Code.GDcol_95956Objects7.length = 0;
gdjs.Scene_952Code.GDcol_95956Objects8.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects1.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects2.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects3.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects4.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects5.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects6.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects7.length = 0;
gdjs.Scene_952Code.GDdog_9595player_9595crawlyObjects8.length = 0;
gdjs.Scene_952Code.GDdog_9595selectObjects1.length = 0;
gdjs.Scene_952Code.GDdog_9595selectObjects2.length = 0;
gdjs.Scene_952Code.GDdog_9595selectObjects3.length = 0;
gdjs.Scene_952Code.GDdog_9595selectObjects4.length = 0;
gdjs.Scene_952Code.GDdog_9595selectObjects5.length = 0;
gdjs.Scene_952Code.GDdog_9595selectObjects6.length = 0;
gdjs.Scene_952Code.GDdog_9595selectObjects7.length = 0;
gdjs.Scene_952Code.GDdog_9595selectObjects8.length = 0;
gdjs.Scene_952Code.GDcrawly_9595selectObjects1.length = 0;
gdjs.Scene_952Code.GDcrawly_9595selectObjects2.length = 0;
gdjs.Scene_952Code.GDcrawly_9595selectObjects3.length = 0;
gdjs.Scene_952Code.GDcrawly_9595selectObjects4.length = 0;
gdjs.Scene_952Code.GDcrawly_9595selectObjects5.length = 0;
gdjs.Scene_952Code.GDcrawly_9595selectObjects6.length = 0;
gdjs.Scene_952Code.GDcrawly_9595selectObjects7.length = 0;
gdjs.Scene_952Code.GDcrawly_9595selectObjects8.length = 0;
gdjs.Scene_952Code.GDnextObjects1.length = 0;
gdjs.Scene_952Code.GDnextObjects2.length = 0;
gdjs.Scene_952Code.GDnextObjects3.length = 0;
gdjs.Scene_952Code.GDnextObjects4.length = 0;
gdjs.Scene_952Code.GDnextObjects5.length = 0;
gdjs.Scene_952Code.GDnextObjects6.length = 0;
gdjs.Scene_952Code.GDnextObjects7.length = 0;
gdjs.Scene_952Code.GDnextObjects8.length = 0;
gdjs.Scene_952Code.GDbackObjects1.length = 0;
gdjs.Scene_952Code.GDbackObjects2.length = 0;
gdjs.Scene_952Code.GDbackObjects3.length = 0;
gdjs.Scene_952Code.GDbackObjects4.length = 0;
gdjs.Scene_952Code.GDbackObjects5.length = 0;
gdjs.Scene_952Code.GDbackObjects6.length = 0;
gdjs.Scene_952Code.GDbackObjects7.length = 0;
gdjs.Scene_952Code.GDbackObjects8.length = 0;
gdjs.Scene_952Code.GDexit_9595videoObjects1.length = 0;
gdjs.Scene_952Code.GDexit_9595videoObjects2.length = 0;
gdjs.Scene_952Code.GDexit_9595videoObjects3.length = 0;
gdjs.Scene_952Code.GDexit_9595videoObjects4.length = 0;
gdjs.Scene_952Code.GDexit_9595videoObjects5.length = 0;
gdjs.Scene_952Code.GDexit_9595videoObjects6.length = 0;
gdjs.Scene_952Code.GDexit_9595videoObjects7.length = 0;
gdjs.Scene_952Code.GDexit_9595videoObjects8.length = 0;
gdjs.Scene_952Code.GDbeansObjects1.length = 0;
gdjs.Scene_952Code.GDbeansObjects2.length = 0;
gdjs.Scene_952Code.GDbeansObjects3.length = 0;
gdjs.Scene_952Code.GDbeansObjects4.length = 0;
gdjs.Scene_952Code.GDbeansObjects5.length = 0;
gdjs.Scene_952Code.GDbeansObjects6.length = 0;
gdjs.Scene_952Code.GDbeansObjects7.length = 0;
gdjs.Scene_952Code.GDbeansObjects8.length = 0;
gdjs.Scene_952Code.GDyeetObjects1.length = 0;
gdjs.Scene_952Code.GDyeetObjects2.length = 0;
gdjs.Scene_952Code.GDyeetObjects3.length = 0;
gdjs.Scene_952Code.GDyeetObjects4.length = 0;
gdjs.Scene_952Code.GDyeetObjects5.length = 0;
gdjs.Scene_952Code.GDyeetObjects6.length = 0;
gdjs.Scene_952Code.GDyeetObjects7.length = 0;
gdjs.Scene_952Code.GDyeetObjects8.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects1.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects2.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects3.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects4.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects5.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects6.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects7.length = 0;
gdjs.Scene_952Code.GDVideo_9595Trigger_95952Objects8.length = 0;
gdjs.Scene_952Code.GDteleportObjects1.length = 0;
gdjs.Scene_952Code.GDteleportObjects2.length = 0;
gdjs.Scene_952Code.GDteleportObjects3.length = 0;
gdjs.Scene_952Code.GDteleportObjects4.length = 0;
gdjs.Scene_952Code.GDteleportObjects5.length = 0;
gdjs.Scene_952Code.GDteleportObjects6.length = 0;
gdjs.Scene_952Code.GDteleportObjects7.length = 0;
gdjs.Scene_952Code.GDteleportObjects8.length = 0;


return;

}

gdjs['Scene_952Code'] = gdjs.Scene_952Code;
