gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.idToCallbackMap = new Map();
gdjs.Game_32SceneCode.forEachCount0_3 = 0;

gdjs.Game_32SceneCode.forEachCount0_4 = 0;

gdjs.Game_32SceneCode.forEachCount1_3 = 0;

gdjs.Game_32SceneCode.forEachCount1_4 = 0;

gdjs.Game_32SceneCode.forEachIndex2 = 0;

gdjs.Game_32SceneCode.forEachIndex3 = 0;

gdjs.Game_32SceneCode.forEachIndex4 = 0;

gdjs.Game_32SceneCode.forEachObjects2 = [];

gdjs.Game_32SceneCode.forEachObjects3 = [];

gdjs.Game_32SceneCode.forEachObjects4 = [];

gdjs.Game_32SceneCode.forEachTemporary2 = null;

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
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects8= [];
gdjs.Game_32SceneCode.GDWallObjects1= [];
gdjs.Game_32SceneCode.GDWallObjects2= [];
gdjs.Game_32SceneCode.GDWallObjects3= [];
gdjs.Game_32SceneCode.GDWallObjects4= [];
gdjs.Game_32SceneCode.GDWallObjects5= [];
gdjs.Game_32SceneCode.GDWallObjects6= [];
gdjs.Game_32SceneCode.GDWallObjects7= [];
gdjs.Game_32SceneCode.GDWallObjects8= [];
gdjs.Game_32SceneCode.GDGroundObjects1= [];
gdjs.Game_32SceneCode.GDGroundObjects2= [];
gdjs.Game_32SceneCode.GDGroundObjects3= [];
gdjs.Game_32SceneCode.GDGroundObjects4= [];
gdjs.Game_32SceneCode.GDGroundObjects5= [];
gdjs.Game_32SceneCode.GDGroundObjects6= [];
gdjs.Game_32SceneCode.GDGroundObjects7= [];
gdjs.Game_32SceneCode.GDGroundObjects8= [];
gdjs.Game_32SceneCode.GDmapObjects1= [];
gdjs.Game_32SceneCode.GDmapObjects2= [];
gdjs.Game_32SceneCode.GDmapObjects3= [];
gdjs.Game_32SceneCode.GDmapObjects4= [];
gdjs.Game_32SceneCode.GDmapObjects5= [];
gdjs.Game_32SceneCode.GDmapObjects6= [];
gdjs.Game_32SceneCode.GDmapObjects7= [];
gdjs.Game_32SceneCode.GDmapObjects8= [];
gdjs.Game_32SceneCode.GDgreenlandObjects1= [];
gdjs.Game_32SceneCode.GDgreenlandObjects2= [];
gdjs.Game_32SceneCode.GDgreenlandObjects3= [];
gdjs.Game_32SceneCode.GDgreenlandObjects4= [];
gdjs.Game_32SceneCode.GDgreenlandObjects5= [];
gdjs.Game_32SceneCode.GDgreenlandObjects6= [];
gdjs.Game_32SceneCode.GDgreenlandObjects7= [];
gdjs.Game_32SceneCode.GDgreenlandObjects8= [];
gdjs.Game_32SceneCode.GDdiscoObjects1= [];
gdjs.Game_32SceneCode.GDdiscoObjects2= [];
gdjs.Game_32SceneCode.GDdiscoObjects3= [];
gdjs.Game_32SceneCode.GDdiscoObjects4= [];
gdjs.Game_32SceneCode.GDdiscoObjects5= [];
gdjs.Game_32SceneCode.GDdiscoObjects6= [];
gdjs.Game_32SceneCode.GDdiscoObjects7= [];
gdjs.Game_32SceneCode.GDdiscoObjects8= [];
gdjs.Game_32SceneCode.GDgorillamanstageObjects1= [];
gdjs.Game_32SceneCode.GDgorillamanstageObjects2= [];
gdjs.Game_32SceneCode.GDgorillamanstageObjects3= [];
gdjs.Game_32SceneCode.GDgorillamanstageObjects4= [];
gdjs.Game_32SceneCode.GDgorillamanstageObjects5= [];
gdjs.Game_32SceneCode.GDgorillamanstageObjects6= [];
gdjs.Game_32SceneCode.GDgorillamanstageObjects7= [];
gdjs.Game_32SceneCode.GDgorillamanstageObjects8= [];
gdjs.Game_32SceneCode.GDdog_9595modelObjects1= [];
gdjs.Game_32SceneCode.GDdog_9595modelObjects2= [];
gdjs.Game_32SceneCode.GDdog_9595modelObjects3= [];
gdjs.Game_32SceneCode.GDdog_9595modelObjects4= [];
gdjs.Game_32SceneCode.GDdog_9595modelObjects5= [];
gdjs.Game_32SceneCode.GDdog_9595modelObjects6= [];
gdjs.Game_32SceneCode.GDdog_9595modelObjects7= [];
gdjs.Game_32SceneCode.GDdog_9595modelObjects8= [];
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects1= [];
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects2= [];
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects3= [];
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects4= [];
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects5= [];
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects6= [];
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects7= [];
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects8= [];
gdjs.Game_32SceneCode.GDred_9595curtainObjects1= [];
gdjs.Game_32SceneCode.GDred_9595curtainObjects2= [];
gdjs.Game_32SceneCode.GDred_9595curtainObjects3= [];
gdjs.Game_32SceneCode.GDred_9595curtainObjects4= [];
gdjs.Game_32SceneCode.GDred_9595curtainObjects5= [];
gdjs.Game_32SceneCode.GDred_9595curtainObjects6= [];
gdjs.Game_32SceneCode.GDred_9595curtainObjects7= [];
gdjs.Game_32SceneCode.GDred_9595curtainObjects8= [];
gdjs.Game_32SceneCode.GDFabric004BlockObjects1= [];
gdjs.Game_32SceneCode.GDFabric004BlockObjects2= [];
gdjs.Game_32SceneCode.GDFabric004BlockObjects3= [];
gdjs.Game_32SceneCode.GDFabric004BlockObjects4= [];
gdjs.Game_32SceneCode.GDFabric004BlockObjects5= [];
gdjs.Game_32SceneCode.GDFabric004BlockObjects6= [];
gdjs.Game_32SceneCode.GDFabric004BlockObjects7= [];
gdjs.Game_32SceneCode.GDFabric004BlockObjects8= [];
gdjs.Game_32SceneCode.GDNewSpotLightObjects1= [];
gdjs.Game_32SceneCode.GDNewSpotLightObjects2= [];
gdjs.Game_32SceneCode.GDNewSpotLightObjects3= [];
gdjs.Game_32SceneCode.GDNewSpotLightObjects4= [];
gdjs.Game_32SceneCode.GDNewSpotLightObjects5= [];
gdjs.Game_32SceneCode.GDNewSpotLightObjects6= [];
gdjs.Game_32SceneCode.GDNewSpotLightObjects7= [];
gdjs.Game_32SceneCode.GDNewSpotLightObjects8= [];
gdjs.Game_32SceneCode.GDNoteSignObjects1= [];
gdjs.Game_32SceneCode.GDNoteSignObjects2= [];
gdjs.Game_32SceneCode.GDNoteSignObjects3= [];
gdjs.Game_32SceneCode.GDNoteSignObjects4= [];
gdjs.Game_32SceneCode.GDNoteSignObjects5= [];
gdjs.Game_32SceneCode.GDNoteSignObjects6= [];
gdjs.Game_32SceneCode.GDNoteSignObjects7= [];
gdjs.Game_32SceneCode.GDNoteSignObjects8= [];
gdjs.Game_32SceneCode.GDNoteTextObjects1= [];
gdjs.Game_32SceneCode.GDNoteTextObjects2= [];
gdjs.Game_32SceneCode.GDNoteTextObjects3= [];
gdjs.Game_32SceneCode.GDNoteTextObjects4= [];
gdjs.Game_32SceneCode.GDNoteTextObjects5= [];
gdjs.Game_32SceneCode.GDNoteTextObjects6= [];
gdjs.Game_32SceneCode.GDNoteTextObjects7= [];
gdjs.Game_32SceneCode.GDNoteTextObjects8= [];
gdjs.Game_32SceneCode.GDNoteInputObjects1= [];
gdjs.Game_32SceneCode.GDNoteInputObjects2= [];
gdjs.Game_32SceneCode.GDNoteInputObjects3= [];
gdjs.Game_32SceneCode.GDNoteInputObjects4= [];
gdjs.Game_32SceneCode.GDNoteInputObjects5= [];
gdjs.Game_32SceneCode.GDNoteInputObjects6= [];
gdjs.Game_32SceneCode.GDNoteInputObjects7= [];
gdjs.Game_32SceneCode.GDNoteInputObjects8= [];
gdjs.Game_32SceneCode.GDNoteButtonObjects1= [];
gdjs.Game_32SceneCode.GDNoteButtonObjects2= [];
gdjs.Game_32SceneCode.GDNoteButtonObjects3= [];
gdjs.Game_32SceneCode.GDNoteButtonObjects4= [];
gdjs.Game_32SceneCode.GDNoteButtonObjects5= [];
gdjs.Game_32SceneCode.GDNoteButtonObjects6= [];
gdjs.Game_32SceneCode.GDNoteButtonObjects7= [];
gdjs.Game_32SceneCode.GDNoteButtonObjects8= [];
gdjs.Game_32SceneCode.GDPostButtonObjects1= [];
gdjs.Game_32SceneCode.GDPostButtonObjects2= [];
gdjs.Game_32SceneCode.GDPostButtonObjects3= [];
gdjs.Game_32SceneCode.GDPostButtonObjects4= [];
gdjs.Game_32SceneCode.GDPostButtonObjects5= [];
gdjs.Game_32SceneCode.GDPostButtonObjects6= [];
gdjs.Game_32SceneCode.GDPostButtonObjects7= [];
gdjs.Game_32SceneCode.GDPostButtonObjects8= [];
gdjs.Game_32SceneCode.GDNoteText3DObjects1= [];
gdjs.Game_32SceneCode.GDNoteText3DObjects2= [];
gdjs.Game_32SceneCode.GDNoteText3DObjects3= [];
gdjs.Game_32SceneCode.GDNoteText3DObjects4= [];
gdjs.Game_32SceneCode.GDNoteText3DObjects5= [];
gdjs.Game_32SceneCode.GDNoteText3DObjects6= [];
gdjs.Game_32SceneCode.GDNoteText3DObjects7= [];
gdjs.Game_32SceneCode.GDNoteText3DObjects8= [];
gdjs.Game_32SceneCode.GDNameInputObjects1= [];
gdjs.Game_32SceneCode.GDNameInputObjects2= [];
gdjs.Game_32SceneCode.GDNameInputObjects3= [];
gdjs.Game_32SceneCode.GDNameInputObjects4= [];
gdjs.Game_32SceneCode.GDNameInputObjects5= [];
gdjs.Game_32SceneCode.GDNameInputObjects6= [];
gdjs.Game_32SceneCode.GDNameInputObjects7= [];
gdjs.Game_32SceneCode.GDNameInputObjects8= [];
gdjs.Game_32SceneCode.GDJoinButtonObjects1= [];
gdjs.Game_32SceneCode.GDJoinButtonObjects2= [];
gdjs.Game_32SceneCode.GDJoinButtonObjects3= [];
gdjs.Game_32SceneCode.GDJoinButtonObjects4= [];
gdjs.Game_32SceneCode.GDJoinButtonObjects5= [];
gdjs.Game_32SceneCode.GDJoinButtonObjects6= [];
gdjs.Game_32SceneCode.GDJoinButtonObjects7= [];
gdjs.Game_32SceneCode.GDJoinButtonObjects8= [];
gdjs.Game_32SceneCode.GDStatusTextObjects1= [];
gdjs.Game_32SceneCode.GDStatusTextObjects2= [];
gdjs.Game_32SceneCode.GDStatusTextObjects3= [];
gdjs.Game_32SceneCode.GDStatusTextObjects4= [];
gdjs.Game_32SceneCode.GDStatusTextObjects5= [];
gdjs.Game_32SceneCode.GDStatusTextObjects6= [];
gdjs.Game_32SceneCode.GDStatusTextObjects7= [];
gdjs.Game_32SceneCode.GDStatusTextObjects8= [];
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1= [];
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2= [];
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3= [];
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4= [];
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5= [];
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6= [];
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects7= [];
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects8= [];
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects1= [];
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects2= [];
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects3= [];
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects4= [];
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects5= [];
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects6= [];
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects7= [];
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects8= [];
gdjs.Game_32SceneCode.GDColor_9595PickerObjects1= [];
gdjs.Game_32SceneCode.GDColor_9595PickerObjects2= [];
gdjs.Game_32SceneCode.GDColor_9595PickerObjects3= [];
gdjs.Game_32SceneCode.GDColor_9595PickerObjects4= [];
gdjs.Game_32SceneCode.GDColor_9595PickerObjects5= [];
gdjs.Game_32SceneCode.GDColor_9595PickerObjects6= [];
gdjs.Game_32SceneCode.GDColor_9595PickerObjects7= [];
gdjs.Game_32SceneCode.GDColor_9595PickerObjects8= [];
gdjs.Game_32SceneCode.GDCancelObjects1= [];
gdjs.Game_32SceneCode.GDCancelObjects2= [];
gdjs.Game_32SceneCode.GDCancelObjects3= [];
gdjs.Game_32SceneCode.GDCancelObjects4= [];
gdjs.Game_32SceneCode.GDCancelObjects5= [];
gdjs.Game_32SceneCode.GDCancelObjects6= [];
gdjs.Game_32SceneCode.GDCancelObjects7= [];
gdjs.Game_32SceneCode.GDCancelObjects8= [];
gdjs.Game_32SceneCode.GDpissObjects1= [];
gdjs.Game_32SceneCode.GDpissObjects2= [];
gdjs.Game_32SceneCode.GDpissObjects3= [];
gdjs.Game_32SceneCode.GDpissObjects4= [];
gdjs.Game_32SceneCode.GDpissObjects5= [];
gdjs.Game_32SceneCode.GDpissObjects6= [];
gdjs.Game_32SceneCode.GDpissObjects7= [];
gdjs.Game_32SceneCode.GDpissObjects8= [];
gdjs.Game_32SceneCode.GDpiss2Objects1= [];
gdjs.Game_32SceneCode.GDpiss2Objects2= [];
gdjs.Game_32SceneCode.GDpiss2Objects3= [];
gdjs.Game_32SceneCode.GDpiss2Objects4= [];
gdjs.Game_32SceneCode.GDpiss2Objects5= [];
gdjs.Game_32SceneCode.GDpiss2Objects6= [];
gdjs.Game_32SceneCode.GDpiss2Objects7= [];
gdjs.Game_32SceneCode.GDpiss2Objects8= [];
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects1= [];
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects2= [];
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects3= [];
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects4= [];
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects5= [];
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects6= [];
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects7= [];
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects8= [];
gdjs.Game_32SceneCode.GDcol_95951Objects1= [];
gdjs.Game_32SceneCode.GDcol_95951Objects2= [];
gdjs.Game_32SceneCode.GDcol_95951Objects3= [];
gdjs.Game_32SceneCode.GDcol_95951Objects4= [];
gdjs.Game_32SceneCode.GDcol_95951Objects5= [];
gdjs.Game_32SceneCode.GDcol_95951Objects6= [];
gdjs.Game_32SceneCode.GDcol_95951Objects7= [];
gdjs.Game_32SceneCode.GDcol_95951Objects8= [];
gdjs.Game_32SceneCode.GDcol_95952Objects1= [];
gdjs.Game_32SceneCode.GDcol_95952Objects2= [];
gdjs.Game_32SceneCode.GDcol_95952Objects3= [];
gdjs.Game_32SceneCode.GDcol_95952Objects4= [];
gdjs.Game_32SceneCode.GDcol_95952Objects5= [];
gdjs.Game_32SceneCode.GDcol_95952Objects6= [];
gdjs.Game_32SceneCode.GDcol_95952Objects7= [];
gdjs.Game_32SceneCode.GDcol_95952Objects8= [];
gdjs.Game_32SceneCode.GDcol_95953Objects1= [];
gdjs.Game_32SceneCode.GDcol_95953Objects2= [];
gdjs.Game_32SceneCode.GDcol_95953Objects3= [];
gdjs.Game_32SceneCode.GDcol_95953Objects4= [];
gdjs.Game_32SceneCode.GDcol_95953Objects5= [];
gdjs.Game_32SceneCode.GDcol_95953Objects6= [];
gdjs.Game_32SceneCode.GDcol_95953Objects7= [];
gdjs.Game_32SceneCode.GDcol_95953Objects8= [];
gdjs.Game_32SceneCode.GDcol_95954Objects1= [];
gdjs.Game_32SceneCode.GDcol_95954Objects2= [];
gdjs.Game_32SceneCode.GDcol_95954Objects3= [];
gdjs.Game_32SceneCode.GDcol_95954Objects4= [];
gdjs.Game_32SceneCode.GDcol_95954Objects5= [];
gdjs.Game_32SceneCode.GDcol_95954Objects6= [];
gdjs.Game_32SceneCode.GDcol_95954Objects7= [];
gdjs.Game_32SceneCode.GDcol_95954Objects8= [];
gdjs.Game_32SceneCode.GDcol_95955Objects1= [];
gdjs.Game_32SceneCode.GDcol_95955Objects2= [];
gdjs.Game_32SceneCode.GDcol_95955Objects3= [];
gdjs.Game_32SceneCode.GDcol_95955Objects4= [];
gdjs.Game_32SceneCode.GDcol_95955Objects5= [];
gdjs.Game_32SceneCode.GDcol_95955Objects6= [];
gdjs.Game_32SceneCode.GDcol_95955Objects7= [];
gdjs.Game_32SceneCode.GDcol_95955Objects8= [];
gdjs.Game_32SceneCode.GDcol_95956Objects1= [];
gdjs.Game_32SceneCode.GDcol_95956Objects2= [];
gdjs.Game_32SceneCode.GDcol_95956Objects3= [];
gdjs.Game_32SceneCode.GDcol_95956Objects4= [];
gdjs.Game_32SceneCode.GDcol_95956Objects5= [];
gdjs.Game_32SceneCode.GDcol_95956Objects6= [];
gdjs.Game_32SceneCode.GDcol_95956Objects7= [];
gdjs.Game_32SceneCode.GDcol_95956Objects8= [];
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1= [];
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2= [];
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3= [];
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4= [];
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5= [];
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6= [];
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects7= [];
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects8= [];
gdjs.Game_32SceneCode.GDdog_9595selectObjects1= [];
gdjs.Game_32SceneCode.GDdog_9595selectObjects2= [];
gdjs.Game_32SceneCode.GDdog_9595selectObjects3= [];
gdjs.Game_32SceneCode.GDdog_9595selectObjects4= [];
gdjs.Game_32SceneCode.GDdog_9595selectObjects5= [];
gdjs.Game_32SceneCode.GDdog_9595selectObjects6= [];
gdjs.Game_32SceneCode.GDdog_9595selectObjects7= [];
gdjs.Game_32SceneCode.GDdog_9595selectObjects8= [];
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects1= [];
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2= [];
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects3= [];
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects4= [];
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects5= [];
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects6= [];
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects7= [];
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects8= [];
gdjs.Game_32SceneCode.GDnextObjects1= [];
gdjs.Game_32SceneCode.GDnextObjects2= [];
gdjs.Game_32SceneCode.GDnextObjects3= [];
gdjs.Game_32SceneCode.GDnextObjects4= [];
gdjs.Game_32SceneCode.GDnextObjects5= [];
gdjs.Game_32SceneCode.GDnextObjects6= [];
gdjs.Game_32SceneCode.GDnextObjects7= [];
gdjs.Game_32SceneCode.GDnextObjects8= [];
gdjs.Game_32SceneCode.GDbackObjects1= [];
gdjs.Game_32SceneCode.GDbackObjects2= [];
gdjs.Game_32SceneCode.GDbackObjects3= [];
gdjs.Game_32SceneCode.GDbackObjects4= [];
gdjs.Game_32SceneCode.GDbackObjects5= [];
gdjs.Game_32SceneCode.GDbackObjects6= [];
gdjs.Game_32SceneCode.GDbackObjects7= [];
gdjs.Game_32SceneCode.GDbackObjects8= [];
gdjs.Game_32SceneCode.GDexit_9595videoObjects1= [];
gdjs.Game_32SceneCode.GDexit_9595videoObjects2= [];
gdjs.Game_32SceneCode.GDexit_9595videoObjects3= [];
gdjs.Game_32SceneCode.GDexit_9595videoObjects4= [];
gdjs.Game_32SceneCode.GDexit_9595videoObjects5= [];
gdjs.Game_32SceneCode.GDexit_9595videoObjects6= [];
gdjs.Game_32SceneCode.GDexit_9595videoObjects7= [];
gdjs.Game_32SceneCode.GDexit_9595videoObjects8= [];
gdjs.Game_32SceneCode.GDbeansObjects1= [];
gdjs.Game_32SceneCode.GDbeansObjects2= [];
gdjs.Game_32SceneCode.GDbeansObjects3= [];
gdjs.Game_32SceneCode.GDbeansObjects4= [];
gdjs.Game_32SceneCode.GDbeansObjects5= [];
gdjs.Game_32SceneCode.GDbeansObjects6= [];
gdjs.Game_32SceneCode.GDbeansObjects7= [];
gdjs.Game_32SceneCode.GDbeansObjects8= [];
gdjs.Game_32SceneCode.GDyeetObjects1= [];
gdjs.Game_32SceneCode.GDyeetObjects2= [];
gdjs.Game_32SceneCode.GDyeetObjects3= [];
gdjs.Game_32SceneCode.GDyeetObjects4= [];
gdjs.Game_32SceneCode.GDyeetObjects5= [];
gdjs.Game_32SceneCode.GDyeetObjects6= [];
gdjs.Game_32SceneCode.GDyeetObjects7= [];
gdjs.Game_32SceneCode.GDyeetObjects8= [];
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects1= [];
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects2= [];
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects3= [];
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects4= [];
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects5= [];
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects6= [];
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects7= [];
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects8= [];
gdjs.Game_32SceneCode.GDteleportObjects1= [];
gdjs.Game_32SceneCode.GDteleportObjects2= [];
gdjs.Game_32SceneCode.GDteleportObjects3= [];
gdjs.Game_32SceneCode.GDteleportObjects4= [];
gdjs.Game_32SceneCode.GDteleportObjects5= [];
gdjs.Game_32SceneCode.GDteleportObjects6= [];
gdjs.Game_32SceneCode.GDteleportObjects7= [];
gdjs.Game_32SceneCode.GDteleportObjects8= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595selectObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDcrawly_95959595selectObjects2Objects = Hashtable.newFrom({"dog_select": gdjs.Game_32SceneCode.GDdog_9595selectObjects2, "crawly_select": gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("yeet"), gdjs.Game_32SceneCode.GDyeetObjects3);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NameTagTimer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CleanupTimer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerSync");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PollTimer");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDyeetObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDyeetObjects3[i].resetTimer("spin");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2.length = 0;

gdjs.Game_32SceneCode.GDdog_9595selectObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595selectObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDcrawly_95959595selectObjects2Objects, gdjs.evtTools.window.getWindowInnerWidth() / 2, gdjs.evtTools.window.getWindowInnerHeight() / 2, "UI");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595selectObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595selectObjects2[i].getBehavior("Object3D").setRotationX(90);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2[i].getBehavior("Object3D").setRotationX(90);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("dog");
}
}

}


};gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PathfindingBoundary"), gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects2);
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects2);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "BootUI", 0, 0, 0);
}
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "HUD", 0, 0, 0);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects2[i].setBBText("Enter your name, then press Join");
}
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "UI");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "notebutton");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects2[i].hide();
}
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("exit_video"), gdjs.Game_32SceneCode.GDexit_9595videoObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDexit_9595videoObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDexit_9595videoObjects1[i].hide();
}
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDnextObjects2Objects = Hashtable.newFrom({"next": gdjs.Game_32SceneCode.GDnextObjects2});
gdjs.Game_32SceneCode.mapOfEmptyGDdog_9595selectObjects = Hashtable.newFrom({"dog_select": []});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595selectObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDcrawly_95959595selectObjects2Objects = Hashtable.newFrom({"dog_select": gdjs.Game_32SceneCode.GDdog_9595selectObjects2, "crawly_select": gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDnextObjects2Objects = Hashtable.newFrom({"next": gdjs.Game_32SceneCode.GDnextObjects2});
gdjs.Game_32SceneCode.mapOfEmptyGDdog_9595selectObjects = Hashtable.newFrom({"dog_select": []});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595selectObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDcrawly_95959595selectObjects2Objects = Hashtable.newFrom({"dog_select": gdjs.Game_32SceneCode.GDdog_9595selectObjects2, "crawly_select": gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDbackObjects2Objects = Hashtable.newFrom({"back": gdjs.Game_32SceneCode.GDbackObjects2});
gdjs.Game_32SceneCode.mapOfEmptyGDcrawly_9595selectObjects = Hashtable.newFrom({"crawly_select": []});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595selectObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDcrawly_95959595selectObjects2Objects = Hashtable.newFrom({"dog_select": gdjs.Game_32SceneCode.GDdog_9595selectObjects2, "crawly_select": gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.Game_32SceneCode.GDbackObjects1});
gdjs.Game_32SceneCode.mapOfEmptyGDcrawly_9595selectObjects = Hashtable.newFrom({"crawly_select": []});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595selectObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDcrawly_95959595selectObjects1Objects = Hashtable.newFrom({"dog_select": gdjs.Game_32SceneCode.GDdog_9595selectObjects1, "crawly_select": gdjs.Game_32SceneCode.GDcrawly_9595selectObjects1});
gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.Game_32SceneCode.GDnextObjects2);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDnextObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.Game_32SceneCode.mapOfEmptyGDdog_9595selectObjects) == 1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("crawly_select"), gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_select"), gdjs.Game_32SceneCode.GDdog_9595selectObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595selectObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595selectObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectFromGroupOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595selectObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDcrawly_95959595selectObjects2Objects, "crawly_select", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2, "UI");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595selectObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595selectObjects2[i].getBehavior("Object3D").setRotationX(90);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2[i].getBehavior("Object3D").setRotationX(90);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("crawly");
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.Game_32SceneCode.GDnextObjects2);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDnextObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.Game_32SceneCode.mapOfEmptyGDdog_9595selectObjects) == 0;
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("crawly_select"), gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_select"), gdjs.Game_32SceneCode.GDdog_9595selectObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595selectObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595selectObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectFromGroupOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595selectObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDcrawly_95959595selectObjects2Objects, "dog_select", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2, "UI");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595selectObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595selectObjects2[i].getBehavior("Object3D").setRotationX(90);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2[i].getBehavior("Object3D").setRotationX(90);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("dog");
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.Game_32SceneCode.GDbackObjects2);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDbackObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.Game_32SceneCode.mapOfEmptyGDcrawly_9595selectObjects) == 1;
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("crawly_select"), gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_select"), gdjs.Game_32SceneCode.GDdog_9595selectObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595selectObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595selectObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectFromGroupOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595selectObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDcrawly_95959595selectObjects2Objects, "dog_select", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2, "UI");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595selectObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595selectObjects2[i].getBehavior("Object3D").setRotationX(90);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2[i].getBehavior("Object3D").setRotationX(90);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("dog");
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.Game_32SceneCode.GDbackObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDbackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.Game_32SceneCode.mapOfEmptyGDcrawly_9595selectObjects) == 0;
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("crawly_select"), gdjs.Game_32SceneCode.GDcrawly_9595selectObjects1);
gdjs.copyArray(runtimeScene.getObjects("dog_select"), gdjs.Game_32SceneCode.GDdog_9595selectObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595selectObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595selectObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDcrawly_9595selectObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcrawly_9595selectObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectFromGroupOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595selectObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDcrawly_95959595selectObjects1Objects, "crawly_select", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2, "UI");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595selectObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595selectObjects1[i].getBehavior("Object3D").setRotationX(90);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDcrawly_9595selectObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcrawly_9595selectObjects1[i].getBehavior("Object3D").setRotationX(90);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("crawly");
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects1Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1, "dog_player_crawly": gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1});
gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.Game_32SceneCode.GDGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("NameInput"), gdjs.Game_32SceneCode.GDNameInputObjects1);
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1.length = 0;

gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects1Objects, "dog_player_" + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), (( gdjs.Game_32SceneCode.GDGroundObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDGroundObjects1[0].getAABBCenterX()), (( gdjs.Game_32SceneCode.GDGroundObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDGroundObjects1[0].getAABBCenterY()), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1[i].getVariables().get("IsLocal")).setBoolean(true);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1[i].getVariables().get("IsLocal")).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1[i].getBehavior("Object3D").setZ(0);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1[i].getBehavior("Object3D").setZ(0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1[i].getVariables().get("selectedcharacter")).setString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1[i].getVariables().get("selectedcharacter")).setString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(23).setString((( gdjs.Game_32SceneCode.GDNameInputObjects1.length === 0 ) ? "" :gdjs.Game_32SceneCode.GDNameInputObjects1[0].getBehavior("Text").getText()));
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1[i].getVariables().get("PlayerName")).setString((( gdjs.Game_32SceneCode.GDNameInputObjects1.length === 0 ) ? "" :gdjs.Game_32SceneCode.GDNameInputObjects1[0].getBehavior("Text").getText()));
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1[i].getVariables().get("PlayerName")).setString((( gdjs.Game_32SceneCode.GDNameInputObjects1.length === 0 ) ? "" :gdjs.Game_32SceneCode.GDNameInputObjects1[0].getBehavior("Text").getText()));
}
}
}

}


};gdjs.Game_32SceneCode.mapOfEmptyGDdog_9595selectObjectsEmptyGDcrawly_9595selectObjects = Hashtable.newFrom({"dog_select": [], "crawly_select": []});
gdjs.Game_32SceneCode.asyncCallback17784116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("dog_model"), gdjs.Game_32SceneCode.GDdog_9595modelObjects4);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595modelObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595modelObjects4[i].getBehavior("ShakeModel3D").StartShaking(1, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595modelObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595modelObjects4[i].getBehavior("ShakeModel3D").SetFrequency(gdjs.randomInRange(1, 2.5), null);
}
}
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(17784116, gdjs.Game_32SceneCode.asyncCallback17784116);
gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
for (const obj of gdjs.Game_32SceneCode.GDdog_9595modelObjects2) asyncObjectsList.addObject("dog_model", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(gdjs.randomInRange(1, 4)), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback17784116(runtimeScene, asyncObjectsList)), 17784116, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32SceneCode.GDdog_9595modelObjects1 */

for (gdjs.Game_32SceneCode.forEachIndex2 = 0;gdjs.Game_32SceneCode.forEachIndex2 < gdjs.Game_32SceneCode.GDdog_9595modelObjects1.length;++gdjs.Game_32SceneCode.forEachIndex2) {
gdjs.Game_32SceneCode.GDdog_9595modelObjects2.length = 0;


gdjs.Game_32SceneCode.forEachTemporary2 = gdjs.Game_32SceneCode.GDdog_9595modelObjects1[gdjs.Game_32SceneCode.forEachIndex2];
gdjs.Game_32SceneCode.GDdog_9595modelObjects2.push(gdjs.Game_32SceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.Game_32SceneCode.eventsList4(runtimeScene);} //Subevents end.
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects2Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2, "dog_player_crawly": gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDmapObjects2Objects = Hashtable.newFrom({"map": gdjs.Game_32SceneCode.GDmapObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects2Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2, "dog_player_crawly": gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDGroundObjects2Objects = Hashtable.newFrom({"Ground": gdjs.Game_32SceneCode.GDGroundObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects2Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2, "dog_player_crawly": gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdiscoObjects2Objects = Hashtable.newFrom({"disco": gdjs.Game_32SceneCode.GDdiscoObjects2});
gdjs.Game_32SceneCode.asyncCallback21157172 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("beans"), gdjs.Game_32SceneCode.GDbeansObjects3);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDbeansObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDbeansObjects3[i].resetTimer("jump");
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDbeansObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDbeansObjects3[i].getBehavior("Animation").setAnimationName("jam_1");
}
}
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(21157172, gdjs.Game_32SceneCode.asyncCallback21157172);
gdjs.Game_32SceneCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
for (const obj of gdjs.Game_32SceneCode.GDbeansObjects2) asyncObjectsList.addObject("beans", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback21157172(runtimeScene, asyncObjectsList)), 21157172, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.eventsList7 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2);
gdjs.copyArray(runtimeScene.getObjects("map"), gdjs.Game_32SceneCode.GDmapObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.haveObjectsStartedColliding(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects2Objects, "Physics3D", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDmapObjects2Objects, "Physics3D", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21150716);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "thud", false, 100, gdjs.randomFloatInRange(0.5, 1.25));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.Game_32SceneCode.GDGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.haveObjectsStartedColliding(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects2Objects, "Physics3D", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDGroundObjects2Objects, "Physics3D", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21151604);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "tink", false, 100, gdjs.randomFloatInRange(0.5, 1.25));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getVariableNumber(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getVariables().get("pissing")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getVariableNumber(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("pissing")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "piss25", false, 25, gdjs.randomFloatInRange(0.5, 1.25));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("disco"), gdjs.Game_32SceneCode.GDdiscoObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdiscoObjects2Objects, 600, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21153476);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("beans"), gdjs.Game_32SceneCode.GDbeansObjects2);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets/audio/videoplayback.mp3", 1, false, 1, 1);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDbeansObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDbeansObjects2[i].resetTimer("jump");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("disco"), gdjs.Game_32SceneCode.GDdiscoObjects2);
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2 */
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2 */
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, Math.max(0, 100 - ((( gdjs.Game_32SceneCode.GDdiscoObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdiscoObjects2[0].getDistanceToObject((gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length !== 0 ? gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[0] : (gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length !== 0 ? gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[0] : null))))) / 600 * 100));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("yeet"), gdjs.Game_32SceneCode.GDyeetObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDyeetObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDyeetObjects2[i].getTimerElapsedTimeInSecondsOrNaN("spin") > 2 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDyeetObjects2[k] = gdjs.Game_32SceneCode.GDyeetObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDyeetObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDyeetObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDyeetObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDyeetObjects2[i].resetTimer("spin");
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDyeetObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDyeetObjects2[i].getBehavior("PhysicsEllipseMovement3D").ToggleTurningLeft(null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("beans"), gdjs.Game_32SceneCode.GDbeansObjects2);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDbeansObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDbeansObjects2[i].getTimerElapsedTimeInSecondsOrNaN("jump") > gdjs.randomInRange(5, 15) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDbeansObjects2[k] = gdjs.Game_32SceneCode.GDbeansObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDbeansObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21155852);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDbeansObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDbeansObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDbeansObjects2[i].getBehavior("Animation").setAnimationName("jump");
}
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList6(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("beans"), gdjs.Game_32SceneCode.GDbeansObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDbeansObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDbeansObjects1[i].getBehavior("Animation").getAnimationName() != "jump" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDbeansObjects1[k] = gdjs.Game_32SceneCode.GDbeansObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDbeansObjects1.length = k;
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDbeansObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDbeansObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDbeansObjects1[i].getBehavior("Animation").setAnimationName("jam_1");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Game_32SceneCode.asyncCallback21295668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(21295668, gdjs.Game_32SceneCode.asyncCallback21295668);
gdjs.Game_32SceneCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "NoteFetch", runtimeScene.getScene().getVariables().getFromIndex(7), null), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback21295668(runtimeScene, asyncObjectsList)), 21295668, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteSignObjects6Objects = Hashtable.newFrom({"NoteSign": gdjs.Game_32SceneCode.GDNoteSignObjects6});
gdjs.Game_32SceneCode.eventsList9 = function(runtimeScene, asyncObjectsList) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(gdjs.Game_32SceneCode.GDNoteSignObjects3, gdjs.Game_32SceneCode.GDNoteSignObjects7);


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDNoteSignObjects7.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDNoteSignObjects7[i].getVariableString(gdjs.Game_32SceneCode.GDNoteSignObjects7[i].getVariables().getFromIndex(3)) == gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDNoteSignObjects7[k] = gdjs.Game_32SceneCode.GDNoteSignObjects7[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDNoteSignObjects7.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDNoteSignObjects7 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects7.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects7[i].returnVariable(gdjs.Game_32SceneCode.GDNoteSignObjects7[i].getVariables().getFromIndex(4)).setBoolean(true);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDNoteSignObjects3, gdjs.Game_32SceneCode.GDNoteSignObjects6);

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteSignObjects6Objects, runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("x").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("y").getAsNumber(), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects6[i].getBehavior("Object3D").setZ(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("z").getAsNumber());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDNoteSignObjects6[i].getVariables().getFromIndex(3)).setString(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDNoteSignObjects6[i].getVariables().getFromIndex(1)).setString(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("name").getAsString(), "[", ""), "]", ""));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDNoteSignObjects6[i].getVariables().getFromIndex(0)).setString(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("text").getAsString(), "[", ""), "]", ""));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDNoteSignObjects6[i].getVariables().getFromIndex(2)).setString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("colour").getAsString());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDNoteSignObjects6[i].getVariables().getFromIndex(4)).setBoolean(true);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Game_32SceneCode.eventsList10 = function(runtimeScene, asyncObjectsList) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("scene").getAsString() == "");
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
{runtimeScene.getGame().getVariables().getFromIndex(22).setString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("scene").getAsString());
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
gdjs.Game_32SceneCode.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
}

}

}

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
variable.setString("");
variables._declare("noteIdx", variable);
}
gdjs.Game_32SceneCode.localVariables.push(variables);
}
const keyIteratorReference5 = gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1);
const valueIteratorReference5 = gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0);
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
gdjs.Game_32SceneCode.eventsList10(runtimeScene, asyncObjectsList);} //Subevents end.
}
}
}
gdjs.Game_32SceneCode.localVariables.pop();

}


{

/* Reuse gdjs.Game_32SceneCode.GDNoteSignObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDNoteSignObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDNoteSignObjects3[i].getVariableBoolean(gdjs.Game_32SceneCode.GDNoteSignObjects3[i].getVariables().getFromIndex(4), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDNoteSignObjects3[k] = gdjs.Game_32SceneCode.GDNoteSignObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDNoteSignObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDNoteSignObjects3 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects3[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.Game_32SceneCode.asyncCallback21297076 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NoteSign"), gdjs.Game_32SceneCode.GDNoteSignObjects3);
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects3);
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(6).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(0));
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects3[i].returnVariable(gdjs.Game_32SceneCode.GDNoteSignObjects3[i].getVariables().getFromIndex(4)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects3[i].setBBText("Notes loaded: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(0))) + " found");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0);
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList11(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(21297076, gdjs.Game_32SceneCode.asyncCallback21297076);
gdjs.Game_32SceneCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ReadResponseText.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(7), runtimeScene.getScene().getVariables().getFromIndex(6), null), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback21297076(runtimeScene, asyncObjectsList)), 21297076, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.userFunc0x8b5458 = function GDJSInlineCode(runtimeScene) {
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
gdjs.Game_32SceneCode.eventsList13 = function(runtimeScene) {

{


gdjs.Game_32SceneCode.userFunc0x8b5458(runtimeScene);

}


};gdjs.Game_32SceneCode.asyncCallback21319772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(21319772, gdjs.Game_32SceneCode.asyncCallback21319772);
gdjs.Game_32SceneCode.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "PlayerPut", runtimeScene.getScene().getVariables().getFromIndex(11), null), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback21319772(runtimeScene, asyncObjectsList)), 21319772, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.eventsList15 = function(runtimeScene) {

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects5ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects5Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5, "dog_player_crawly": gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5});
gdjs.Game_32SceneCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length = 0;

gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects5ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects5Objects, "dog_player_" + runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("selectedcharacter").getAsString(), runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("x").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("y").getAsNumber(), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].activateBehavior("ThirdPersonCamera", false);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].activateBehavior("ThirdPersonCamera", false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getBehavior("Object3D").setZ(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("z").getAsNumber());
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getBehavior("Object3D").setZ(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("z").getAsNumber());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getVariables().get("SyncedID")).setString(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("SyncedID")).setString(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getVariables().get("SyncedName")).setString(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("name").getAsString());
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("SyncedName")).setString(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("name").getAsString());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getVariables().get("IsLocal")).setBoolean(false);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("IsLocal")).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getVariables().get("Matched")).setBoolean(true);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("Matched")).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getVariables().get("RTgtX")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("x").getAsNumber());
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("RTgtX")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("x").getAsNumber());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getVariables().get("RTgtY")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("y").getAsNumber());
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("RTgtY")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("y").getAsNumber());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getVariables().get("RVelX")).setNumber(0);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("RVelX")).setNumber(0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getVariables().get("RVelY")).setNumber(0);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("RVelY")).setNumber(0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getVariables().get("RSince")).setNumber(0);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("RSince")).setNumber(0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getVariables().get("pissing")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("pissing").getAsNumber());
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("pissing")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("pissing").getAsNumber());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getVariables().get("anim")).setString(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("anim").getAsString());
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("anim")).setString(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("anim").getAsString());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getVariables().get("angle")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("angle").getAsNumber());
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("angle")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("angle").getAsNumber());
}
}
}

}


};gdjs.Game_32SceneCode.eventsList17 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].getVariableString(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].getVariables().get("SyncedID")) == gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].getVariableString(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("SyncedID")) == gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6 */
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].getVariables().get("RVelX")).setNumber((runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("x").getAsNumber() - gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].getVariables().get("RTgtX").getAsNumber()) / Math.max(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].getVariables().get("RSince").getAsNumber(), 0.05));
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("RVelX")).setNumber((runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("x").getAsNumber() - gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("RTgtX").getAsNumber()) / Math.max(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("RSince").getAsNumber(), 0.05));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].getVariables().get("RVelY")).setNumber((runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("y").getAsNumber() - gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].getVariables().get("RTgtY").getAsNumber()) / Math.max(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].getVariables().get("RSince").getAsNumber(), 0.05));
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("RVelY")).setNumber((runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("y").getAsNumber() - gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("RTgtY").getAsNumber()) / Math.max(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("RSince").getAsNumber(), 0.05));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].getVariables().get("RTgtX")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("x").getAsNumber());
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("RTgtX")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("x").getAsNumber());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].getVariables().get("RTgtY")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("y").getAsNumber());
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("RTgtY")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("y").getAsNumber());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].getVariables().get("RSince")).setNumber(0);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("RSince")).setNumber(0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].getBehavior("Object3D").setZ(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("z").getAsNumber());
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].getBehavior("Object3D").setZ(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("z").getAsNumber());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].getVariables().get("Matched")).setBoolean(true);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("Matched")).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].getVariables().get("pissing")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("pissing").getAsNumber());
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("pissing")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("pissing").getAsNumber());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].getVariables().get("anim")).setString(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("anim").getAsString());
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("anim")).setString(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("anim").getAsString());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6[i].getVariables().get("angle")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("angle").getAsNumber());
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6[i].getVariables().get("angle")).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("angle").getAsNumber());
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
gdjs.Game_32SceneCode.eventsList16(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Game_32SceneCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString() != runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("scene").getAsString() == gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3);

gdjs.Game_32SceneCode.forEachTotalCount4 = 0;
gdjs.Game_32SceneCode.forEachObjects4.length = 0;
gdjs.Game_32SceneCode.forEachCount0_4 = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length;
gdjs.Game_32SceneCode.forEachTotalCount4 += gdjs.Game_32SceneCode.forEachCount0_4;
gdjs.Game_32SceneCode.forEachObjects4.push.apply(gdjs.Game_32SceneCode.forEachObjects4,gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3);
gdjs.Game_32SceneCode.forEachCount1_4 = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length;
gdjs.Game_32SceneCode.forEachTotalCount4 += gdjs.Game_32SceneCode.forEachCount1_4;
gdjs.Game_32SceneCode.forEachObjects4.push.apply(gdjs.Game_32SceneCode.forEachObjects4,gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3);
for (gdjs.Game_32SceneCode.forEachIndex4 = 0;gdjs.Game_32SceneCode.forEachIndex4 < gdjs.Game_32SceneCode.forEachTotalCount4;++gdjs.Game_32SceneCode.forEachIndex4) {
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4.length = 0;

gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4.length = 0;


if (gdjs.Game_32SceneCode.forEachIndex4 < gdjs.Game_32SceneCode.forEachCount0_4) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4.push(gdjs.Game_32SceneCode.forEachObjects4[gdjs.Game_32SceneCode.forEachIndex4]);
}
else if (gdjs.Game_32SceneCode.forEachIndex4 < gdjs.Game_32SceneCode.forEachCount0_4+gdjs.Game_32SceneCode.forEachCount1_4) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4.push(gdjs.Game_32SceneCode.forEachObjects4[gdjs.Game_32SceneCode.forEachIndex4]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4[i].getVariables().get("IsLocal"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4[i].getVariables().get("IsLocal"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4[i].getVariables().get("Matched")).setBoolean(false);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4[i].getVariables().get("Matched")).setBoolean(false);
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
gdjs.Game_32SceneCode.eventsList18(runtimeScene);} //Subevents end.
}
}
}
gdjs.Game_32SceneCode.localVariables.pop();

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getVariables().get("IsLocal"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("IsLocal"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getVariables().get("Matched"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("Matched"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2 */
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.Game_32SceneCode.eventsList20 = function(runtimeScene) {

};gdjs.Game_32SceneCode.asyncCallback21333780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(21333780, gdjs.Game_32SceneCode.asyncCallback21333780);
gdjs.Game_32SceneCode.eventsList21 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "Cleanup", runtimeScene.getScene().getVariables().getFromIndex(9), null), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback21333780(runtimeScene, asyncObjectsList)), 21333780, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.eventsList22 = function(runtimeScene, asyncObjectsList) {

};gdjs.Game_32SceneCode.asyncCallback21333156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(21333156, gdjs.Game_32SceneCode.asyncCallback21333156);
gdjs.Game_32SceneCode.eventsList23 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "CleanupDel", runtimeScene.getScene().getVariables().getFromIndex(8), null), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback21333156(runtimeScene, asyncObjectsList)), 21333156, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.eventsList24 = function(runtimeScene, asyncObjectsList) {

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
const keyIteratorReference5 = gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1);
const valueIteratorReference5 = gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0);
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
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp") - runtimeScene.getScene().getVariables().getFromIndex(5).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString()).getChild("ts").getAsNumber() > runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber());
}
}
if (isConditionTrue_0)
{
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(1).getAsString());
}
}
}
}
gdjs.Game_32SceneCode.localVariables.pop();

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
gdjs.Game_32SceneCode.eventsList23(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.Game_32SceneCode.asyncCallback21333700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString("");
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList24(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(21333700, gdjs.Game_32SceneCode.asyncCallback21333700);
gdjs.Game_32SceneCode.eventsList25 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ReadResponseJSON.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(9), runtimeScene.getScene().getVariables().getFromIndex(5), null), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback21333700(runtimeScene, asyncObjectsList)), 21333700, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.asyncCallback21272116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(0);
}
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(21272116, gdjs.Game_32SceneCode.asyncCallback21272116);
gdjs.Game_32SceneCode.eventsList26 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "NoteSave", runtimeScene.getScene().getVariables().getFromIndex(10), null), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback21272116(runtimeScene, asyncObjectsList)), 21272116, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects2Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2, "dog_player_crawly": gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDVideo_95959595Trigger_959595951Objects2Objects = Hashtable.newFrom({"Video_Trigger_1": gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects2});
gdjs.Game_32SceneCode.eventsList27 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects2 */
gdjs.copyArray(runtimeScene.getObjects("exit_video"), gdjs.Game_32SceneCode.GDexit_9595videoObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "video_test", ((gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects2[0].getVariables()).getFromIndex(0).getAsString(), gdjs.evtTools.window.getWindowInnerWidth() / 2, gdjs.evtTools.window.getWindowInnerHeight() / 2, (gdjs.evtTools.window.getWindowInnerWidth() / 2) - (gdjs.evtTools.window.getWindowInnerWidth() / 2) / 2, (gdjs.evtTools.window.getWindowInnerHeight() / 2) - (gdjs.evtTools.window.getWindowInnerHeight() / 2) / 2, false, true, "", null);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDexit_9595videoObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDexit_9595videoObjects2[i].hide(false);
}
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects2Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2, "dog_player_crawly": gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDVideo_95959595Trigger_959595951Objects2Objects = Hashtable.newFrom({"Video_Trigger_1": gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects2});
gdjs.Game_32SceneCode.eventsList28 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("exit_video"), gdjs.Game_32SceneCode.GDexit_9595videoObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}
{gdjs.evtsExt__Iframe__Delete.func(runtimeScene, "video_test", null);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDexit_9595videoObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDexit_9595videoObjects2[i].hide();
}
}
}

}


};gdjs.Game_32SceneCode.userFunc0x17ba6a0 = function GDJSInlineCode(runtimeScene) {
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
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteSignObjects2Objects = Hashtable.newFrom({"NoteSign": gdjs.Game_32SceneCode.GDNoteSignObjects2});
gdjs.Game_32SceneCode.eventsList29 = function(runtimeScene) {

{


gdjs.Game_32SceneCode.userFunc0x17ba6a0(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cancel"), gdjs.Game_32SceneCode.GDCancelObjects2);
gdjs.copyArray(runtimeScene.getObjects("NoteButton"), gdjs.Game_32SceneCode.GDNoteButtonObjects2);
/* Reuse gdjs.Game_32SceneCode.GDNoteInputObjects2 */
/* Reuse gdjs.Game_32SceneCode.GDPostButtonObjects2 */
gdjs.copyArray(runtimeScene.getObjects("col_1"), gdjs.Game_32SceneCode.GDcol_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("col_2"), gdjs.Game_32SceneCode.GDcol_95952Objects2);
gdjs.copyArray(runtimeScene.getObjects("col_3"), gdjs.Game_32SceneCode.GDcol_95953Objects2);
gdjs.copyArray(runtimeScene.getObjects("col_4"), gdjs.Game_32SceneCode.GDcol_95954Objects2);
gdjs.copyArray(runtimeScene.getObjects("col_5"), gdjs.Game_32SceneCode.GDcol_95955Objects2);
gdjs.copyArray(runtimeScene.getObjects("col_6"), gdjs.Game_32SceneCode.GDcol_95956Objects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2);
gdjs.Game_32SceneCode.GDNoteSignObjects2.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(13).getChild("x").setNumber((( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[0].getX()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[0].getX()));
}
{runtimeScene.getGame().getVariables().getFromIndex(13).getChild("y").setNumber((( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[0].getY()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[0].getY()));
}
{runtimeScene.getGame().getVariables().getFromIndex(13).getChild("z").setNumber((( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[0].getBehavior("Object3D").getZ()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[0].getBehavior("Object3D").getZ()));
}
{runtimeScene.getGame().getVariables().getFromIndex(13).getChild("name").setString(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(((gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? ((gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[0].getVariables()) : gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[0].getVariables()).get("PlayerName").getAsString(), "[", ""), "]", ""));
}
{runtimeScene.getGame().getVariables().getFromIndex(13).getChild("text").setString(runtimeScene.getGame().getVariables().getFromIndex(18).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(13).getChild("colour").setString(runtimeScene.getGame().getVariables().getFromIndex(20).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(13).getChild("scene").setString(gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteSignObjects2Objects, (( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[0].getX()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[0].getX()), (( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[0].getY()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[0].getY()), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects2[i].getBehavior("Object3D").setZ(0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects2[i].returnVariable(gdjs.Game_32SceneCode.GDNoteSignObjects2[i].getVariables().getFromIndex(1)).setString(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(((gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? ((gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[0].getVariables()) : gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[0].getVariables()).get("PlayerName").getAsString(), "[", ""), "]", ""));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects2[i].returnVariable(gdjs.Game_32SceneCode.GDNoteSignObjects2[i].getVariables().getFromIndex(0)).setString(runtimeScene.getGame().getVariables().getFromIndex(18).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(1);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteButtonObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteInputObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteInputObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPostButtonObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPostButtonObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCancelObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCancelObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDcol_95951Objects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcol_95951Objects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDcol_95952Objects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcol_95952Objects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDcol_95953Objects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcol_95953Objects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDcol_95954Objects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcol_95954Objects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDcol_95955Objects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcol_95955Objects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDcol_95956Objects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcol_95956Objects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDmapObjects3ObjectsGDgdjs_9546Game_959532SceneCode_9546GDGroundObjects3ObjectsGDgdjs_9546Game_959532SceneCode_9546GDgreenlandObjects3ObjectsGDgdjs_9546Game_959532SceneCode_9546GDgorillamanstageObjects3Objects = Hashtable.newFrom({"map": gdjs.Game_32SceneCode.GDmapObjects3, "Ground": gdjs.Game_32SceneCode.GDGroundObjects3, "greenland": gdjs.Game_32SceneCode.GDgreenlandObjects3, "gorillamanstage": gdjs.Game_32SceneCode.GDgorillamanstageObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteButtonObjects3Objects = Hashtable.newFrom({"NoteButton": gdjs.Game_32SceneCode.GDNoteButtonObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDpissObjects3Objects = Hashtable.newFrom({"piss": gdjs.Game_32SceneCode.GDpissObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects3ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects3Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3, "dog_player_crawly": gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDpiss2Objects5Objects = Hashtable.newFrom({"piss2": gdjs.Game_32SceneCode.GDpiss2Objects5});
gdjs.Game_32SceneCode.eventsList30 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4, gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5);

gdjs.copyArray(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4, gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5);


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getBehavior("Pathfinding").destinationReached() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getBehavior("Pathfinding").destinationReached() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getVariableNumber(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getVariables().get("pissing")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getVariableNumber(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("pissing")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5 */
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getBehavior("Animation").setAnimationName("idle");
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getBehavior("Animation").setAnimationName("idle");
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4, gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5);

gdjs.copyArray(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4, gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5);


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getVariableNumber(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getVariables().get("pissing")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getVariableNumber(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("pissing")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length = k;
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5 */
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5 */
gdjs.Game_32SceneCode.GDpiss2Objects5.length = 0;

{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getBehavior("Animation").setAnimationName("piss");
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getBehavior("Animation").setAnimationName("piss");
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDpiss2Objects5Objects, (( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[0].getX()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[0].getX()), (( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[0].getY()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[0].getY()), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDpiss2Objects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDpiss2Objects5[i].getBehavior("Object3D").setZ((( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[0].getBehavior("Object3D").getCenterZInScene()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[0].getBehavior("Object3D").getCenterZInScene()) - 10);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getBehavior("Object3D").setZ(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getBehavior("Object3D").getZ() + (5));
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getBehavior("Object3D").setZ(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getBehavior("Object3D").getZ() + (5));
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
gdjs.copyArray(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4, gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5);

gdjs.copyArray(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4, gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getBehavior("Animation").setAnimationName("run");
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getBehavior("Animation").setAnimationName("run");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDpiss2Objects5Objects = Hashtable.newFrom({"piss2": gdjs.Game_32SceneCode.GDpiss2Objects5});
gdjs.Game_32SceneCode.eventsList31 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4, gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5);

gdjs.copyArray(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4, gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].setAngle(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getVariables().get("angle").getAsNumber());
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].setAngle(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("angle").getAsNumber());
}
}
}

}


{

gdjs.copyArray(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4, gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5);

gdjs.copyArray(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4, gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5);


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getVariableString(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getVariables().get("anim")) == "idle" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getVariableString(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("anim")) == "idle" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5 */
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getBehavior("Animation").setAnimationName("idle");
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getBehavior("Animation").setAnimationName("idle");
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4, gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5);

gdjs.copyArray(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4, gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5);


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getVariableNumber(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getVariables().get("pissing")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getVariableNumber(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getVariables().get("pissing")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length = k;
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5 */
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5 */
gdjs.Game_32SceneCode.GDpiss2Objects5.length = 0;

{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getBehavior("Animation").setAnimationName("piss");
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getBehavior("Animation").setAnimationName("piss");
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDpiss2Objects5Objects, (( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[0].getX()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[0].getX()), (( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[0].getY()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[0].getY()), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDpiss2Objects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDpiss2Objects5[i].getBehavior("Object3D").setZ((( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[0].getBehavior("Object3D").getCenterZInScene()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[0].getBehavior("Object3D").getCenterZInScene()) - 10);
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
gdjs.copyArray(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4, gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5);

gdjs.copyArray(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4, gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5[i].getBehavior("Animation").setAnimationName("run");
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5[i].getBehavior("Animation").setAnimationName("run");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects3ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects3Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3, "dog_player_crawly": gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects3ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects3Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3, "dog_player_crawly": gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3});
gdjs.Game_32SceneCode.eventsList32 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.Game_32SceneCode.GDGroundObjects3);
gdjs.copyArray(runtimeScene.getObjects("NoteButton"), gdjs.Game_32SceneCode.GDNoteButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3);
gdjs.copyArray(runtimeScene.getObjects("gorillamanstage"), gdjs.Game_32SceneCode.GDgorillamanstageObjects3);
gdjs.copyArray(runtimeScene.getObjects("greenland"), gdjs.Game_32SceneCode.GDgreenlandObjects3);
gdjs.copyArray(runtimeScene.getObjects("map"), gdjs.Game_32SceneCode.GDmapObjects3);
gdjs.copyArray(runtimeScene.getObjects("piss"), gdjs.Game_32SceneCode.GDpissObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Raycaster3D__RaycastFromCameraCursor.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDmapObjects3ObjectsGDgdjs_9546Game_959532SceneCode_9546GDGroundObjects3ObjectsGDgdjs_9546Game_959532SceneCode_9546GDgreenlandObjects3ObjectsGDgdjs_9546Game_959532SceneCode_9546GDgorillamanstageObjects3Objects, "notebutton", 1500, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteButtonObjects3Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDpissObjects3Objects, runtimeScene, true, true);
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3 */
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getBehavior("Pathfinding").moveTo(runtimeScene, gdjs.evtsExt__Raycaster3D__IntersectionX.func(runtimeScene, null), gdjs.evtsExt__Raycaster3D__IntersectionY.func(runtimeScene, null));
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getBehavior("Pathfinding").moveTo(runtimeScene, gdjs.evtsExt__Raycaster3D__IntersectionX.func(runtimeScene, null), gdjs.evtsExt__Raycaster3D__IntersectionY.func(runtimeScene, null));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3);

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("angle", variable);
}
gdjs.Game_32SceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3 */
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3 */
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).setNumber((( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[0].getAngle()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[0].getAngle()));
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getBehavior("ThirdPersonCamera").SetTargetedRotationAngle(gdjs.evtTools.tween.ease("easeFromTo", gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsNumber(), (gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getAngle()), gdjs.evtTools.common.clamp(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 25, 0, 1)), null);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getBehavior("ThirdPersonCamera").SetTargetedRotationAngle(gdjs.evtTools.tween.ease("easeFromTo", gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsNumber(), (gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getAngle()), gdjs.evtTools.common.clamp(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 25, 0, 1)), null);
}
}
}
gdjs.Game_32SceneCode.localVariables.pop();

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3 */
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3 */
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber((( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[0].getX()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[0].getX()));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber((( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[0].getY()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[0].getY()));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getVariables().get("IsLocal"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("IsLocal"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3 */
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3 */
{gdjs.evtTools.object.pickNearestObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects3ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects3Objects, runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber((( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[0].getX()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[0].getX()));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber((( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[0].getY()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[0].getY()));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3);

gdjs.Game_32SceneCode.forEachTotalCount4 = 0;
gdjs.Game_32SceneCode.forEachObjects4.length = 0;
gdjs.Game_32SceneCode.forEachCount0_4 = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length;
gdjs.Game_32SceneCode.forEachTotalCount4 += gdjs.Game_32SceneCode.forEachCount0_4;
gdjs.Game_32SceneCode.forEachObjects4.push.apply(gdjs.Game_32SceneCode.forEachObjects4,gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3);
gdjs.Game_32SceneCode.forEachCount1_4 = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length;
gdjs.Game_32SceneCode.forEachTotalCount4 += gdjs.Game_32SceneCode.forEachCount1_4;
gdjs.Game_32SceneCode.forEachObjects4.push.apply(gdjs.Game_32SceneCode.forEachObjects4,gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3);
for (gdjs.Game_32SceneCode.forEachIndex4 = 0;gdjs.Game_32SceneCode.forEachIndex4 < gdjs.Game_32SceneCode.forEachTotalCount4;++gdjs.Game_32SceneCode.forEachIndex4) {
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4.length = 0;

gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4.length = 0;


if (gdjs.Game_32SceneCode.forEachIndex4 < gdjs.Game_32SceneCode.forEachCount0_4) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4.push(gdjs.Game_32SceneCode.forEachObjects4[gdjs.Game_32SceneCode.forEachIndex4]);
}
else if (gdjs.Game_32SceneCode.forEachIndex4 < gdjs.Game_32SceneCode.forEachCount0_4+gdjs.Game_32SceneCode.forEachCount1_4) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4.push(gdjs.Game_32SceneCode.forEachObjects4[gdjs.Game_32SceneCode.forEachIndex4]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.Game_32SceneCode.eventsList30(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3);

gdjs.Game_32SceneCode.forEachTotalCount4 = 0;
gdjs.Game_32SceneCode.forEachObjects4.length = 0;
gdjs.Game_32SceneCode.forEachCount0_4 = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length;
gdjs.Game_32SceneCode.forEachTotalCount4 += gdjs.Game_32SceneCode.forEachCount0_4;
gdjs.Game_32SceneCode.forEachObjects4.push.apply(gdjs.Game_32SceneCode.forEachObjects4,gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3);
gdjs.Game_32SceneCode.forEachCount1_4 = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length;
gdjs.Game_32SceneCode.forEachTotalCount4 += gdjs.Game_32SceneCode.forEachCount1_4;
gdjs.Game_32SceneCode.forEachObjects4.push.apply(gdjs.Game_32SceneCode.forEachObjects4,gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3);
for (gdjs.Game_32SceneCode.forEachIndex4 = 0;gdjs.Game_32SceneCode.forEachIndex4 < gdjs.Game_32SceneCode.forEachTotalCount4;++gdjs.Game_32SceneCode.forEachIndex4) {
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4.length = 0;

gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4.length = 0;


if (gdjs.Game_32SceneCode.forEachIndex4 < gdjs.Game_32SceneCode.forEachCount0_4) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4.push(gdjs.Game_32SceneCode.forEachObjects4[gdjs.Game_32SceneCode.forEachIndex4]);
}
else if (gdjs.Game_32SceneCode.forEachIndex4 < gdjs.Game_32SceneCode.forEachCount0_4+gdjs.Game_32SceneCode.forEachCount1_4) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4.push(gdjs.Game_32SceneCode.forEachObjects4[gdjs.Game_32SceneCode.forEachIndex4]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4[i].getVariables().get("IsLocal"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4[i].getVariables().get("IsLocal"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.Game_32SceneCode.eventsList31(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects3ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects3Objects, "Physics3D", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects3ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects3Objects, "Physics3D", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21375276);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "bark", false, 100, gdjs.randomFloatInRange(0.5, 1.25));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getBehavior("Object3D").getZ() <= -1000 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getBehavior("Object3D").getZ() <= -1000 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21377220);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2 */
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2 */
gdjs.copyArray(runtimeScene.getObjects("map"), gdjs.Game_32SceneCode.GDmapObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].setPosition((( gdjs.Game_32SceneCode.GDmapObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDmapObjects2[0].getAABBCenterX()),(( gdjs.Game_32SceneCode.GDmapObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDmapObjects2[0].getAABBCenterY()));
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].setPosition((( gdjs.Game_32SceneCode.GDmapObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDmapObjects2[0].getAABBCenterX()),(( gdjs.Game_32SceneCode.GDmapObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDmapObjects2[0].getAABBCenterY()));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getBehavior("Object3D").setZ(500);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getBehavior("Object3D").setZ(500);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "spawn", false, 100, gdjs.randomFloatInRange(0.6, 1.2));
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects4ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects4Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4, "dog_player_crawly": gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteSignObjects4Objects = Hashtable.newFrom({"NoteSign": gdjs.Game_32SceneCode.GDNoteSignObjects4});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteSignObjects4Objects = Hashtable.newFrom({"NoteSign": gdjs.Game_32SceneCode.GDNoteSignObjects4});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteText3DObjects4Objects = Hashtable.newFrom({"NoteText3D": gdjs.Game_32SceneCode.GDNoteText3DObjects4});
gdjs.Game_32SceneCode.eventsList33 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21380516);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDNoteSignObjects4 */
/* Reuse gdjs.Game_32SceneCode.GDNoteText3DObjects4 */
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteText3DObjects4Objects, (( gdjs.Game_32SceneCode.GDNoteSignObjects4.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDNoteSignObjects4[0].getAABBCenterX()), (( gdjs.Game_32SceneCode.GDNoteSignObjects4.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDNoteSignObjects4[0].getAABBCenterY()), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteText3DObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteText3DObjects4[i].getBehavior("Text").setText(((gdjs.Game_32SceneCode.GDNoteSignObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDNoteSignObjects4[0].getVariables()).getFromIndex(1).getAsString() + ": " + ((gdjs.Game_32SceneCode.GDNoteSignObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDNoteSignObjects4[0].getVariables()).getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteText3DObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteText3DObjects4[i].SetWrappingWidth(250, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteText3DObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteText3DObjects4[i].SetWrapping(true, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteText3DObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteText3DObjects4[i].getBehavior("Object3D").setRotationX(-0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteText3DObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteText3DObjects4[i].getBehavior("Object3D").setZ((( gdjs.Game_32SceneCode.GDNoteSignObjects4.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDNoteSignObjects4[0].getBehavior("Object3D").getZ()) + 150);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteText3DObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteText3DObjects4[i].putAround((( gdjs.Game_32SceneCode.GDNoteSignObjects4.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDNoteSignObjects4[0].getX()), (( gdjs.Game_32SceneCode.GDNoteSignObjects4.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDNoteSignObjects4[0].getY()), 1, 0);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "BARK", false, 100, gdjs.randomFloatInRange(0.5, 1.5));
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteText3DObjects3Objects = Hashtable.newFrom({"NoteText3D": gdjs.Game_32SceneCode.GDNoteText3DObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects3ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects3Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3, "dog_player_crawly": gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3});
gdjs.Game_32SceneCode.eventsList34 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("NoteSign"), gdjs.Game_32SceneCode.GDNoteSignObjects4);
gdjs.copyArray(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3, gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4);

gdjs.copyArray(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3, gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4);


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects4ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects4Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteSignObjects4Objects, 50, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteSignObjects4Objects, (( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4[0].getX()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4[0].getX()), (( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4[0].getY()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4[0].getY()), false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDNoteSignObjects4 */
gdjs.copyArray(runtimeScene.getObjects("NoteText"), gdjs.Game_32SceneCode.GDNoteTextObjects4);
gdjs.copyArray(runtimeScene.getObjects("NoteText3D"), gdjs.Game_32SceneCode.GDNoteText3DObjects4);
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects4);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteTextObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteTextObjects4[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteTextObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteTextObjects4[i].setBBText(((gdjs.Game_32SceneCode.GDNoteSignObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDNoteSignObjects4[0].getVariables()).getFromIndex(1).getAsString() + ": " + ((gdjs.Game_32SceneCode.GDNoteSignObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDNoteSignObjects4[0].getVariables()).getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects4[i].setColor(gdjs.Game_32SceneCode.GDNoteSignObjects4[i].getVariables().getFromIndex(2).getAsString());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects4[i].setBBText(((gdjs.Game_32SceneCode.GDNoteSignObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDNoteSignObjects4[0].getVariables()).getFromIndex(2).getAsString());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteText3DObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteText3DObjects4[i].SetColor(((gdjs.Game_32SceneCode.GDNoteSignObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDNoteSignObjects4[0].getVariables()).getFromIndex(2).getAsString(), null);
}
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList33(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NoteText3D"), gdjs.Game_32SceneCode.GDNoteText3DObjects3);
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3 */
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3 */

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNoteText3DObjects3Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects3ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects3Objects, 200, true);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDNoteText3DObjects3 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteText3DObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteText3DObjects3[i].deleteFromScene(runtimeScene);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Game_32SceneCode.eventsList35 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList34(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("NoteSign"), gdjs.Game_32SceneCode.GDNoteSignObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteSignObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteSignObjects2[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDcol_959595951Objects4Objects = Hashtable.newFrom({"col_1": gdjs.Game_32SceneCode.GDcol_95951Objects4});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDcol_959595952Objects4Objects = Hashtable.newFrom({"col_2": gdjs.Game_32SceneCode.GDcol_95952Objects4});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDcol_959595953Objects4Objects = Hashtable.newFrom({"col_3": gdjs.Game_32SceneCode.GDcol_95953Objects4});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDcol_959595954Objects4Objects = Hashtable.newFrom({"col_4": gdjs.Game_32SceneCode.GDcol_95954Objects4});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDcol_959595955Objects4Objects = Hashtable.newFrom({"col_5": gdjs.Game_32SceneCode.GDcol_95955Objects4});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDcol_959595956Objects3Objects = Hashtable.newFrom({"col_6": gdjs.Game_32SceneCode.GDcol_95956Objects3});
gdjs.Game_32SceneCode.eventsList36 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("col_1"), gdjs.Game_32SceneCode.GDcol_95951Objects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDcol_959595951Objects4Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NoteInput"), gdjs.Game_32SceneCode.GDNoteInputObjects4);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteInputObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteInputObjects4[i].setFillColor("255;0;0");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setString("255;0;0");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("col_2"), gdjs.Game_32SceneCode.GDcol_95952Objects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDcol_959595952Objects4Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NoteInput"), gdjs.Game_32SceneCode.GDNoteInputObjects4);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteInputObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteInputObjects4[i].setFillColor("0;255;0");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setString("0;255;0");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("col_3"), gdjs.Game_32SceneCode.GDcol_95953Objects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDcol_959595953Objects4Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NoteInput"), gdjs.Game_32SceneCode.GDNoteInputObjects4);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteInputObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteInputObjects4[i].setFillColor("0;0;255");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setString("0;0;255");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("col_4"), gdjs.Game_32SceneCode.GDcol_95954Objects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDcol_959595954Objects4Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NoteInput"), gdjs.Game_32SceneCode.GDNoteInputObjects4);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteInputObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteInputObjects4[i].setFillColor("255;255;0");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setString("255;255;0");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("col_5"), gdjs.Game_32SceneCode.GDcol_95955Objects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDcol_959595955Objects4Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NoteInput"), gdjs.Game_32SceneCode.GDNoteInputObjects4);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteInputObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteInputObjects4[i].setFillColor("0;255;255");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setString("0;255;255");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("col_6"), gdjs.Game_32SceneCode.GDcol_95956Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDcol_959595956Objects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NoteInput"), gdjs.Game_32SceneCode.GDNoteInputObjects3);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteInputObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteInputObjects3[i].setFillColor("125;0;125");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setString("125;0;125");
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDpissObjects3Objects = Hashtable.newFrom({"piss": gdjs.Game_32SceneCode.GDpissObjects3});
gdjs.Game_32SceneCode.eventsList37 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FULLS_SCREEN"), gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects3[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects3[k] = gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21385068);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21385836);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21386804);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NoteButton"), gdjs.Game_32SceneCode.GDNoteButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDNoteButtonObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDNoteButtonObjects3[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDNoteButtonObjects3[k] = gdjs.Game_32SceneCode.GDNoteButtonObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDNoteButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDNoteButtonObjects3 */
gdjs.copyArray(runtimeScene.getObjects("PostButton"), gdjs.Game_32SceneCode.GDPostButtonObjects3);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteButtonObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteButtonObjects3[i].hide();
}
}
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Note_UI", 0, 0, 0);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPostButtonObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPostButtonObjects3[i].Activate(true, null);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cancel"), gdjs.Game_32SceneCode.GDCancelObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDCancelObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDCancelObjects3[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDCancelObjects3[k] = gdjs.Game_32SceneCode.GDCancelObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDCancelObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDCancelObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDCancelObjects3[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDCancelObjects3[k] = gdjs.Game_32SceneCode.GDCancelObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDCancelObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDCancelObjects3 */
gdjs.copyArray(runtimeScene.getObjects("NoteButton"), gdjs.Game_32SceneCode.GDNoteButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("NoteInput"), gdjs.Game_32SceneCode.GDNoteInputObjects3);
gdjs.copyArray(runtimeScene.getObjects("PostButton"), gdjs.Game_32SceneCode.GDPostButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("col_1"), gdjs.Game_32SceneCode.GDcol_95951Objects3);
gdjs.copyArray(runtimeScene.getObjects("col_2"), gdjs.Game_32SceneCode.GDcol_95952Objects3);
gdjs.copyArray(runtimeScene.getObjects("col_3"), gdjs.Game_32SceneCode.GDcol_95953Objects3);
gdjs.copyArray(runtimeScene.getObjects("col_4"), gdjs.Game_32SceneCode.GDcol_95954Objects3);
gdjs.copyArray(runtimeScene.getObjects("col_5"), gdjs.Game_32SceneCode.GDcol_95955Objects3);
gdjs.copyArray(runtimeScene.getObjects("col_6"), gdjs.Game_32SceneCode.GDcol_95956Objects3);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteInputObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteInputObjects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPostButtonObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPostButtonObjects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCancelObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCancelObjects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDcol_95951Objects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcol_95951Objects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDcol_95952Objects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcol_95952Objects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDcol_95953Objects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcol_95953Objects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDcol_95954Objects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcol_95954Objects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDcol_95955Objects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcol_95955Objects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDcol_95956Objects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcol_95956Objects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNoteButtonObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNoteButtonObjects3[i].hide(false);
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
gdjs.Game_32SceneCode.eventsList36(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3);
gdjs.copyArray(runtimeScene.getObjects("piss"), gdjs.Game_32SceneCode.GDpissObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDpissObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21397484);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3 */
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pissing");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getVariables().get("pissing")).setNumber(1);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("pissing")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "pissing") > 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2 */
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getVariables().get("pissing")).setNumber(0);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("pissing")).setNumber(0);
}
}
}

}


};gdjs.Game_32SceneCode.eventsList38 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "PollTimer") > 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PollTimer");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects2[i].setBBText("Fetching notes...");
}
}
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "NoteFetch", runtimeScene.getGame().getVariables().getFromIndex(4).getAsString(), null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "NoteFetch", "GET", null);
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AdvancedHTTP__ResponseSuccess.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(7), null);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__AdvancedHTTP__ResponseStatusCode.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(7), null) >= 400);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects2[i].setBBText("Fetch failed: HTTP " + gdjs.evtTools.common.toString(gdjs.evtsExt__AdvancedHTTP__ResponseStatusCode.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(7), null)));
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
gdjs.Game_32SceneCode.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2);

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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() != "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2 */
/* Reuse gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2 */
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "PlayerPut", runtimeScene.getGame().getVariables().getFromIndex(11).getAsString() + "/" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + ".json" + runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "PlayerPut", "PUT", null);
}
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getChild("pissing").setNumber(((gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? ((gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[0].getVariables()) : gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[0].getVariables()).get("pissing").getAsNumber());
}
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getChild("x").setNumber((( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[0].getX()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[0].getX()));
}
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getChild("y").setNumber((( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[0].getY()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[0].getY()));
}
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getChild("z").setNumber((( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[0].getBehavior("Object3D").getZ()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[0].getBehavior("Object3D").getZ()));
}
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getChild("name").setString(((gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? ((gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[0].getVariables()) : gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[0].getVariables()).get("PlayerName").getAsString());
}
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getChild("ts").setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp"));
}
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getChild("selectedcharacter").setString(((gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? ((gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[0].getVariables()) : gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[0].getVariables()).get("selectedcharacter").getAsString());
}
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getChild("anim").setString((( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length === 0 ) ? "" :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[0].getBehavior("Animation").getAnimationName()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[0].getBehavior("Animation").getAnimationName()));
}
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getChild("angle").setNumber((( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length === 0 ) ? (( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[0].getAngle()) :gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[0].getAngle()));
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerSync");
}
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getChild("scene").setString(gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getGame().getVariables().getFromIndex(9).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(10));
}
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(0);
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList19(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2);

gdjs.Game_32SceneCode.forEachTotalCount3 = 0;
gdjs.Game_32SceneCode.forEachObjects3.length = 0;
gdjs.Game_32SceneCode.forEachCount0_3 = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length;
gdjs.Game_32SceneCode.forEachTotalCount3 += gdjs.Game_32SceneCode.forEachCount0_3;
gdjs.Game_32SceneCode.forEachObjects3.push.apply(gdjs.Game_32SceneCode.forEachObjects3,gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2);
gdjs.Game_32SceneCode.forEachCount1_3 = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length;
gdjs.Game_32SceneCode.forEachTotalCount3 += gdjs.Game_32SceneCode.forEachCount1_3;
gdjs.Game_32SceneCode.forEachObjects3.push.apply(gdjs.Game_32SceneCode.forEachObjects3,gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2);
for (gdjs.Game_32SceneCode.forEachIndex3 = 0;gdjs.Game_32SceneCode.forEachIndex3 < gdjs.Game_32SceneCode.forEachTotalCount3;++gdjs.Game_32SceneCode.forEachIndex3) {
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length = 0;

gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length = 0;


if (gdjs.Game_32SceneCode.forEachIndex3 < gdjs.Game_32SceneCode.forEachCount0_3) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.push(gdjs.Game_32SceneCode.forEachObjects3[gdjs.Game_32SceneCode.forEachIndex3]);
}
else if (gdjs.Game_32SceneCode.forEachIndex3 < gdjs.Game_32SceneCode.forEachCount0_3+gdjs.Game_32SceneCode.forEachCount1_3) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.push(gdjs.Game_32SceneCode.forEachObjects3[gdjs.Game_32SceneCode.forEachIndex3]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getVariables().get("IsLocal"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("IsLocal"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].setPosition(gdjs.evtTools.common.lerp((gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getX()), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getVariables().get("RTgtX").getAsNumber() + gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getVariables().get("RVelX").getAsNumber() * Math.min(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getVariables().get("RSince").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()), Math.min(1, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))),gdjs.evtTools.common.lerp((gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getY()), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getVariables().get("RTgtY").getAsNumber() + gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getVariables().get("RVelY").getAsNumber() * Math.min(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getVariables().get("RSince").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()), Math.min(1, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))));
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].setPosition(gdjs.evtTools.common.lerp((gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getX()), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("RTgtX").getAsNumber() + gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("RVelX").getAsNumber() * Math.min(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("RSince").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()), Math.min(1, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))),gdjs.evtTools.common.lerp((gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getY()), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("RTgtY").getAsNumber() + gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("RVelY").getAsNumber() * Math.min(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("RSince").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()), Math.min(1, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3[i].getVariables().get("RSince")).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].returnVariable(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3[i].getVariables().get("RSince")).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
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
gdjs.Game_32SceneCode.eventsList21(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AdvancedHTTP__ResponseSuccess.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(9), null);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList25(runtimeScene);} //End of subevents
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21278524);
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
gdjs.Game_32SceneCode.eventsList26(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Video_Trigger_1"), gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDVideo_95959595Trigger_959595951Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21272532);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList27(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Video_Trigger_1"), gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDVideo_95959595Trigger_959595951Objects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19738316);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList28(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit_video"), gdjs.Game_32SceneCode.GDexit_9595videoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDexit_9595videoObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDexit_9595videoObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDexit_9595videoObjects2[k] = gdjs.Game_32SceneCode.GDexit_9595videoObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDexit_9595videoObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDexit_9595videoObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}
{gdjs.evtsExt__Iframe__Delete.func(runtimeScene, "video_test", null);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDexit_9595videoObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDexit_9595videoObjects2[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PostButton"), gdjs.Game_32SceneCode.GDPostButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPostButtonObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPostButtonObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPostButtonObjects2[k] = gdjs.Game_32SceneCode.GDPostButtonObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPostButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPostButtonObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPostButtonObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPostButtonObjects2[k] = gdjs.Game_32SceneCode.GDPostButtonObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPostButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21336532);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NoteInput"), gdjs.Game_32SceneCode.GDNoteInputObjects2);
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects2[i].setBBText("Saving note...");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll((( gdjs.Game_32SceneCode.GDNoteInputObjects2.length === 0 ) ? "" :gdjs.Game_32SceneCode.GDNoteInputObjects2[0].getText()), "[", ""), "]", ""));
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList29(runtimeScene);} //End of subevents
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AdvancedHTTP__ResponseSuccess.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(10), null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects2[i].setBBText("Note saved! u2713");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStatusTextObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStatusTextObjects2[i].setBBText("Save failed: HTTP " + gdjs.evtTools.common.toString(gdjs.evtsExt__AdvancedHTTP__ResponseStatusCode.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(10), null)));
}
}
elseEventsChainSatisfied = true;
}
}

}


{


gdjs.Game_32SceneCode.eventsList32(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList35(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList37(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}

}

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects1Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1, "dog_player_crawly": gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDteleportObjects1Objects = Hashtable.newFrom({"teleport": gdjs.Game_32SceneCode.GDteleportObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects1Objects = Hashtable.newFrom({"dog_player_dog": gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1, "dog_player_crawly": gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDteleportObjects1Objects = Hashtable.newFrom({"teleport": gdjs.Game_32SceneCode.GDteleportObjects1});
gdjs.Game_32SceneCode.eventsList39 = function(runtimeScene) {

{


gdjs.Game_32SceneCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList2(runtimeScene);} //End of subevents
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21144652);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDJoinButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("StatusText"), gdjs.Game_32SceneCode.GDStatusTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setString(gdjs.evtsExt__UUID__GenerateUUIDv4.func(runtimeScene, null));
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
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "camera");
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.Game_32SceneCode.mapOfEmptyGDdog_9595selectObjectsEmptyGDcrawly_9595selectObjects) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("crawly_select"), gdjs.Game_32SceneCode.GDcrawly_9595selectObjects1);
gdjs.copyArray(runtimeScene.getObjects("dog_select"), gdjs.Game_32SceneCode.GDdog_9595selectObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595selectObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595selectObjects1[i].getBehavior("Object3D").turnAroundY(1);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDcrawly_9595selectObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcrawly_9595selectObjects1[i].getBehavior("Object3D").turnAroundY(1);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595selectObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595selectObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDcrawly_9595selectObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcrawly_9595selectObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dog_model"), gdjs.Game_32SceneCode.GDdog_9595modelObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdog_9595modelObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdog_9595modelObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_32SceneCode.eventsList7(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList38(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1);
gdjs.copyArray(runtimeScene.getObjects("teleport"), gdjs.Game_32SceneCode.GDteleportObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDteleportObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(24).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21160316);
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(24).setBoolean(false);
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Scene_2");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dog_player_crawly"), gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("dog_player_dog"), gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1);
gdjs.copyArray(runtimeScene.getObjects("teleport"), gdjs.Game_32SceneCode.GDteleportObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595dogObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDdog_95959595player_95959595crawlyObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDteleportObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1[i].getVariables().get("IsLocal"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1[k] = gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(24).setBoolean(true);
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
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects8.length = 0;
gdjs.Game_32SceneCode.GDWallObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallObjects3.length = 0;
gdjs.Game_32SceneCode.GDWallObjects4.length = 0;
gdjs.Game_32SceneCode.GDWallObjects5.length = 0;
gdjs.Game_32SceneCode.GDWallObjects6.length = 0;
gdjs.Game_32SceneCode.GDWallObjects7.length = 0;
gdjs.Game_32SceneCode.GDWallObjects8.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects5.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects6.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects7.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects8.length = 0;
gdjs.Game_32SceneCode.GDmapObjects1.length = 0;
gdjs.Game_32SceneCode.GDmapObjects2.length = 0;
gdjs.Game_32SceneCode.GDmapObjects3.length = 0;
gdjs.Game_32SceneCode.GDmapObjects4.length = 0;
gdjs.Game_32SceneCode.GDmapObjects5.length = 0;
gdjs.Game_32SceneCode.GDmapObjects6.length = 0;
gdjs.Game_32SceneCode.GDmapObjects7.length = 0;
gdjs.Game_32SceneCode.GDmapObjects8.length = 0;
gdjs.Game_32SceneCode.GDgreenlandObjects1.length = 0;
gdjs.Game_32SceneCode.GDgreenlandObjects2.length = 0;
gdjs.Game_32SceneCode.GDgreenlandObjects3.length = 0;
gdjs.Game_32SceneCode.GDgreenlandObjects4.length = 0;
gdjs.Game_32SceneCode.GDgreenlandObjects5.length = 0;
gdjs.Game_32SceneCode.GDgreenlandObjects6.length = 0;
gdjs.Game_32SceneCode.GDgreenlandObjects7.length = 0;
gdjs.Game_32SceneCode.GDgreenlandObjects8.length = 0;
gdjs.Game_32SceneCode.GDdiscoObjects1.length = 0;
gdjs.Game_32SceneCode.GDdiscoObjects2.length = 0;
gdjs.Game_32SceneCode.GDdiscoObjects3.length = 0;
gdjs.Game_32SceneCode.GDdiscoObjects4.length = 0;
gdjs.Game_32SceneCode.GDdiscoObjects5.length = 0;
gdjs.Game_32SceneCode.GDdiscoObjects6.length = 0;
gdjs.Game_32SceneCode.GDdiscoObjects7.length = 0;
gdjs.Game_32SceneCode.GDdiscoObjects8.length = 0;
gdjs.Game_32SceneCode.GDgorillamanstageObjects1.length = 0;
gdjs.Game_32SceneCode.GDgorillamanstageObjects2.length = 0;
gdjs.Game_32SceneCode.GDgorillamanstageObjects3.length = 0;
gdjs.Game_32SceneCode.GDgorillamanstageObjects4.length = 0;
gdjs.Game_32SceneCode.GDgorillamanstageObjects5.length = 0;
gdjs.Game_32SceneCode.GDgorillamanstageObjects6.length = 0;
gdjs.Game_32SceneCode.GDgorillamanstageObjects7.length = 0;
gdjs.Game_32SceneCode.GDgorillamanstageObjects8.length = 0;
gdjs.Game_32SceneCode.GDdog_9595modelObjects1.length = 0;
gdjs.Game_32SceneCode.GDdog_9595modelObjects2.length = 0;
gdjs.Game_32SceneCode.GDdog_9595modelObjects3.length = 0;
gdjs.Game_32SceneCode.GDdog_9595modelObjects4.length = 0;
gdjs.Game_32SceneCode.GDdog_9595modelObjects5.length = 0;
gdjs.Game_32SceneCode.GDdog_9595modelObjects6.length = 0;
gdjs.Game_32SceneCode.GDdog_9595modelObjects7.length = 0;
gdjs.Game_32SceneCode.GDdog_9595modelObjects8.length = 0;
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects1.length = 0;
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects2.length = 0;
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects3.length = 0;
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects4.length = 0;
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects5.length = 0;
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects6.length = 0;
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects7.length = 0;
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects8.length = 0;
gdjs.Game_32SceneCode.GDred_9595curtainObjects1.length = 0;
gdjs.Game_32SceneCode.GDred_9595curtainObjects2.length = 0;
gdjs.Game_32SceneCode.GDred_9595curtainObjects3.length = 0;
gdjs.Game_32SceneCode.GDred_9595curtainObjects4.length = 0;
gdjs.Game_32SceneCode.GDred_9595curtainObjects5.length = 0;
gdjs.Game_32SceneCode.GDred_9595curtainObjects6.length = 0;
gdjs.Game_32SceneCode.GDred_9595curtainObjects7.length = 0;
gdjs.Game_32SceneCode.GDred_9595curtainObjects8.length = 0;
gdjs.Game_32SceneCode.GDFabric004BlockObjects1.length = 0;
gdjs.Game_32SceneCode.GDFabric004BlockObjects2.length = 0;
gdjs.Game_32SceneCode.GDFabric004BlockObjects3.length = 0;
gdjs.Game_32SceneCode.GDFabric004BlockObjects4.length = 0;
gdjs.Game_32SceneCode.GDFabric004BlockObjects5.length = 0;
gdjs.Game_32SceneCode.GDFabric004BlockObjects6.length = 0;
gdjs.Game_32SceneCode.GDFabric004BlockObjects7.length = 0;
gdjs.Game_32SceneCode.GDFabric004BlockObjects8.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects4.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects5.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects6.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects7.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects8.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects5.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects6.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects7.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects8.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects5.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects6.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects7.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects8.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects5.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects6.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects7.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects8.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects5.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects6.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects7.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects8.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects5.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects6.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects7.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects8.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects5.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects6.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects7.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects8.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects1.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects2.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects3.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects4.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects5.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects6.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects7.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects8.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects5.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects6.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects7.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects8.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects5.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects6.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects7.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects8.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects7.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects8.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects1.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects2.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects3.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects4.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects5.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects6.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects7.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects8.length = 0;
gdjs.Game_32SceneCode.GDColor_9595PickerObjects1.length = 0;
gdjs.Game_32SceneCode.GDColor_9595PickerObjects2.length = 0;
gdjs.Game_32SceneCode.GDColor_9595PickerObjects3.length = 0;
gdjs.Game_32SceneCode.GDColor_9595PickerObjects4.length = 0;
gdjs.Game_32SceneCode.GDColor_9595PickerObjects5.length = 0;
gdjs.Game_32SceneCode.GDColor_9595PickerObjects6.length = 0;
gdjs.Game_32SceneCode.GDColor_9595PickerObjects7.length = 0;
gdjs.Game_32SceneCode.GDColor_9595PickerObjects8.length = 0;
gdjs.Game_32SceneCode.GDCancelObjects1.length = 0;
gdjs.Game_32SceneCode.GDCancelObjects2.length = 0;
gdjs.Game_32SceneCode.GDCancelObjects3.length = 0;
gdjs.Game_32SceneCode.GDCancelObjects4.length = 0;
gdjs.Game_32SceneCode.GDCancelObjects5.length = 0;
gdjs.Game_32SceneCode.GDCancelObjects6.length = 0;
gdjs.Game_32SceneCode.GDCancelObjects7.length = 0;
gdjs.Game_32SceneCode.GDCancelObjects8.length = 0;
gdjs.Game_32SceneCode.GDpissObjects1.length = 0;
gdjs.Game_32SceneCode.GDpissObjects2.length = 0;
gdjs.Game_32SceneCode.GDpissObjects3.length = 0;
gdjs.Game_32SceneCode.GDpissObjects4.length = 0;
gdjs.Game_32SceneCode.GDpissObjects5.length = 0;
gdjs.Game_32SceneCode.GDpissObjects6.length = 0;
gdjs.Game_32SceneCode.GDpissObjects7.length = 0;
gdjs.Game_32SceneCode.GDpissObjects8.length = 0;
gdjs.Game_32SceneCode.GDpiss2Objects1.length = 0;
gdjs.Game_32SceneCode.GDpiss2Objects2.length = 0;
gdjs.Game_32SceneCode.GDpiss2Objects3.length = 0;
gdjs.Game_32SceneCode.GDpiss2Objects4.length = 0;
gdjs.Game_32SceneCode.GDpiss2Objects5.length = 0;
gdjs.Game_32SceneCode.GDpiss2Objects6.length = 0;
gdjs.Game_32SceneCode.GDpiss2Objects7.length = 0;
gdjs.Game_32SceneCode.GDpiss2Objects8.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects1.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects2.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects3.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects4.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects5.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects6.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects7.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects8.length = 0;
gdjs.Game_32SceneCode.GDcol_95951Objects1.length = 0;
gdjs.Game_32SceneCode.GDcol_95951Objects2.length = 0;
gdjs.Game_32SceneCode.GDcol_95951Objects3.length = 0;
gdjs.Game_32SceneCode.GDcol_95951Objects4.length = 0;
gdjs.Game_32SceneCode.GDcol_95951Objects5.length = 0;
gdjs.Game_32SceneCode.GDcol_95951Objects6.length = 0;
gdjs.Game_32SceneCode.GDcol_95951Objects7.length = 0;
gdjs.Game_32SceneCode.GDcol_95951Objects8.length = 0;
gdjs.Game_32SceneCode.GDcol_95952Objects1.length = 0;
gdjs.Game_32SceneCode.GDcol_95952Objects2.length = 0;
gdjs.Game_32SceneCode.GDcol_95952Objects3.length = 0;
gdjs.Game_32SceneCode.GDcol_95952Objects4.length = 0;
gdjs.Game_32SceneCode.GDcol_95952Objects5.length = 0;
gdjs.Game_32SceneCode.GDcol_95952Objects6.length = 0;
gdjs.Game_32SceneCode.GDcol_95952Objects7.length = 0;
gdjs.Game_32SceneCode.GDcol_95952Objects8.length = 0;
gdjs.Game_32SceneCode.GDcol_95953Objects1.length = 0;
gdjs.Game_32SceneCode.GDcol_95953Objects2.length = 0;
gdjs.Game_32SceneCode.GDcol_95953Objects3.length = 0;
gdjs.Game_32SceneCode.GDcol_95953Objects4.length = 0;
gdjs.Game_32SceneCode.GDcol_95953Objects5.length = 0;
gdjs.Game_32SceneCode.GDcol_95953Objects6.length = 0;
gdjs.Game_32SceneCode.GDcol_95953Objects7.length = 0;
gdjs.Game_32SceneCode.GDcol_95953Objects8.length = 0;
gdjs.Game_32SceneCode.GDcol_95954Objects1.length = 0;
gdjs.Game_32SceneCode.GDcol_95954Objects2.length = 0;
gdjs.Game_32SceneCode.GDcol_95954Objects3.length = 0;
gdjs.Game_32SceneCode.GDcol_95954Objects4.length = 0;
gdjs.Game_32SceneCode.GDcol_95954Objects5.length = 0;
gdjs.Game_32SceneCode.GDcol_95954Objects6.length = 0;
gdjs.Game_32SceneCode.GDcol_95954Objects7.length = 0;
gdjs.Game_32SceneCode.GDcol_95954Objects8.length = 0;
gdjs.Game_32SceneCode.GDcol_95955Objects1.length = 0;
gdjs.Game_32SceneCode.GDcol_95955Objects2.length = 0;
gdjs.Game_32SceneCode.GDcol_95955Objects3.length = 0;
gdjs.Game_32SceneCode.GDcol_95955Objects4.length = 0;
gdjs.Game_32SceneCode.GDcol_95955Objects5.length = 0;
gdjs.Game_32SceneCode.GDcol_95955Objects6.length = 0;
gdjs.Game_32SceneCode.GDcol_95955Objects7.length = 0;
gdjs.Game_32SceneCode.GDcol_95955Objects8.length = 0;
gdjs.Game_32SceneCode.GDcol_95956Objects1.length = 0;
gdjs.Game_32SceneCode.GDcol_95956Objects2.length = 0;
gdjs.Game_32SceneCode.GDcol_95956Objects3.length = 0;
gdjs.Game_32SceneCode.GDcol_95956Objects4.length = 0;
gdjs.Game_32SceneCode.GDcol_95956Objects5.length = 0;
gdjs.Game_32SceneCode.GDcol_95956Objects6.length = 0;
gdjs.Game_32SceneCode.GDcol_95956Objects7.length = 0;
gdjs.Game_32SceneCode.GDcol_95956Objects8.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects7.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects8.length = 0;
gdjs.Game_32SceneCode.GDdog_9595selectObjects1.length = 0;
gdjs.Game_32SceneCode.GDdog_9595selectObjects2.length = 0;
gdjs.Game_32SceneCode.GDdog_9595selectObjects3.length = 0;
gdjs.Game_32SceneCode.GDdog_9595selectObjects4.length = 0;
gdjs.Game_32SceneCode.GDdog_9595selectObjects5.length = 0;
gdjs.Game_32SceneCode.GDdog_9595selectObjects6.length = 0;
gdjs.Game_32SceneCode.GDdog_9595selectObjects7.length = 0;
gdjs.Game_32SceneCode.GDdog_9595selectObjects8.length = 0;
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects1.length = 0;
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2.length = 0;
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects3.length = 0;
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects4.length = 0;
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects5.length = 0;
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects6.length = 0;
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects7.length = 0;
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects8.length = 0;
gdjs.Game_32SceneCode.GDnextObjects1.length = 0;
gdjs.Game_32SceneCode.GDnextObjects2.length = 0;
gdjs.Game_32SceneCode.GDnextObjects3.length = 0;
gdjs.Game_32SceneCode.GDnextObjects4.length = 0;
gdjs.Game_32SceneCode.GDnextObjects5.length = 0;
gdjs.Game_32SceneCode.GDnextObjects6.length = 0;
gdjs.Game_32SceneCode.GDnextObjects7.length = 0;
gdjs.Game_32SceneCode.GDnextObjects8.length = 0;
gdjs.Game_32SceneCode.GDbackObjects1.length = 0;
gdjs.Game_32SceneCode.GDbackObjects2.length = 0;
gdjs.Game_32SceneCode.GDbackObjects3.length = 0;
gdjs.Game_32SceneCode.GDbackObjects4.length = 0;
gdjs.Game_32SceneCode.GDbackObjects5.length = 0;
gdjs.Game_32SceneCode.GDbackObjects6.length = 0;
gdjs.Game_32SceneCode.GDbackObjects7.length = 0;
gdjs.Game_32SceneCode.GDbackObjects8.length = 0;
gdjs.Game_32SceneCode.GDexit_9595videoObjects1.length = 0;
gdjs.Game_32SceneCode.GDexit_9595videoObjects2.length = 0;
gdjs.Game_32SceneCode.GDexit_9595videoObjects3.length = 0;
gdjs.Game_32SceneCode.GDexit_9595videoObjects4.length = 0;
gdjs.Game_32SceneCode.GDexit_9595videoObjects5.length = 0;
gdjs.Game_32SceneCode.GDexit_9595videoObjects6.length = 0;
gdjs.Game_32SceneCode.GDexit_9595videoObjects7.length = 0;
gdjs.Game_32SceneCode.GDexit_9595videoObjects8.length = 0;
gdjs.Game_32SceneCode.GDbeansObjects1.length = 0;
gdjs.Game_32SceneCode.GDbeansObjects2.length = 0;
gdjs.Game_32SceneCode.GDbeansObjects3.length = 0;
gdjs.Game_32SceneCode.GDbeansObjects4.length = 0;
gdjs.Game_32SceneCode.GDbeansObjects5.length = 0;
gdjs.Game_32SceneCode.GDbeansObjects6.length = 0;
gdjs.Game_32SceneCode.GDbeansObjects7.length = 0;
gdjs.Game_32SceneCode.GDbeansObjects8.length = 0;
gdjs.Game_32SceneCode.GDyeetObjects1.length = 0;
gdjs.Game_32SceneCode.GDyeetObjects2.length = 0;
gdjs.Game_32SceneCode.GDyeetObjects3.length = 0;
gdjs.Game_32SceneCode.GDyeetObjects4.length = 0;
gdjs.Game_32SceneCode.GDyeetObjects5.length = 0;
gdjs.Game_32SceneCode.GDyeetObjects6.length = 0;
gdjs.Game_32SceneCode.GDyeetObjects7.length = 0;
gdjs.Game_32SceneCode.GDyeetObjects8.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects1.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects2.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects3.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects4.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects5.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects6.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects7.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects8.length = 0;
gdjs.Game_32SceneCode.GDteleportObjects1.length = 0;
gdjs.Game_32SceneCode.GDteleportObjects2.length = 0;
gdjs.Game_32SceneCode.GDteleportObjects3.length = 0;
gdjs.Game_32SceneCode.GDteleportObjects4.length = 0;
gdjs.Game_32SceneCode.GDteleportObjects5.length = 0;
gdjs.Game_32SceneCode.GDteleportObjects6.length = 0;
gdjs.Game_32SceneCode.GDteleportObjects7.length = 0;
gdjs.Game_32SceneCode.GDteleportObjects8.length = 0;

gdjs.Game_32SceneCode.eventsList39(runtimeScene);
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects1.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects2.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects3.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects4.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects5.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects6.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects7.length = 0;
gdjs.Game_32SceneCode.GDPathfindingBoundaryObjects8.length = 0;
gdjs.Game_32SceneCode.GDWallObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallObjects3.length = 0;
gdjs.Game_32SceneCode.GDWallObjects4.length = 0;
gdjs.Game_32SceneCode.GDWallObjects5.length = 0;
gdjs.Game_32SceneCode.GDWallObjects6.length = 0;
gdjs.Game_32SceneCode.GDWallObjects7.length = 0;
gdjs.Game_32SceneCode.GDWallObjects8.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects5.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects6.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects7.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects8.length = 0;
gdjs.Game_32SceneCode.GDmapObjects1.length = 0;
gdjs.Game_32SceneCode.GDmapObjects2.length = 0;
gdjs.Game_32SceneCode.GDmapObjects3.length = 0;
gdjs.Game_32SceneCode.GDmapObjects4.length = 0;
gdjs.Game_32SceneCode.GDmapObjects5.length = 0;
gdjs.Game_32SceneCode.GDmapObjects6.length = 0;
gdjs.Game_32SceneCode.GDmapObjects7.length = 0;
gdjs.Game_32SceneCode.GDmapObjects8.length = 0;
gdjs.Game_32SceneCode.GDgreenlandObjects1.length = 0;
gdjs.Game_32SceneCode.GDgreenlandObjects2.length = 0;
gdjs.Game_32SceneCode.GDgreenlandObjects3.length = 0;
gdjs.Game_32SceneCode.GDgreenlandObjects4.length = 0;
gdjs.Game_32SceneCode.GDgreenlandObjects5.length = 0;
gdjs.Game_32SceneCode.GDgreenlandObjects6.length = 0;
gdjs.Game_32SceneCode.GDgreenlandObjects7.length = 0;
gdjs.Game_32SceneCode.GDgreenlandObjects8.length = 0;
gdjs.Game_32SceneCode.GDdiscoObjects1.length = 0;
gdjs.Game_32SceneCode.GDdiscoObjects2.length = 0;
gdjs.Game_32SceneCode.GDdiscoObjects3.length = 0;
gdjs.Game_32SceneCode.GDdiscoObjects4.length = 0;
gdjs.Game_32SceneCode.GDdiscoObjects5.length = 0;
gdjs.Game_32SceneCode.GDdiscoObjects6.length = 0;
gdjs.Game_32SceneCode.GDdiscoObjects7.length = 0;
gdjs.Game_32SceneCode.GDdiscoObjects8.length = 0;
gdjs.Game_32SceneCode.GDgorillamanstageObjects1.length = 0;
gdjs.Game_32SceneCode.GDgorillamanstageObjects2.length = 0;
gdjs.Game_32SceneCode.GDgorillamanstageObjects3.length = 0;
gdjs.Game_32SceneCode.GDgorillamanstageObjects4.length = 0;
gdjs.Game_32SceneCode.GDgorillamanstageObjects5.length = 0;
gdjs.Game_32SceneCode.GDgorillamanstageObjects6.length = 0;
gdjs.Game_32SceneCode.GDgorillamanstageObjects7.length = 0;
gdjs.Game_32SceneCode.GDgorillamanstageObjects8.length = 0;
gdjs.Game_32SceneCode.GDdog_9595modelObjects1.length = 0;
gdjs.Game_32SceneCode.GDdog_9595modelObjects2.length = 0;
gdjs.Game_32SceneCode.GDdog_9595modelObjects3.length = 0;
gdjs.Game_32SceneCode.GDdog_9595modelObjects4.length = 0;
gdjs.Game_32SceneCode.GDdog_9595modelObjects5.length = 0;
gdjs.Game_32SceneCode.GDdog_9595modelObjects6.length = 0;
gdjs.Game_32SceneCode.GDdog_9595modelObjects7.length = 0;
gdjs.Game_32SceneCode.GDdog_9595modelObjects8.length = 0;
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects1.length = 0;
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects2.length = 0;
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects3.length = 0;
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects4.length = 0;
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects5.length = 0;
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects6.length = 0;
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects7.length = 0;
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects8.length = 0;
gdjs.Game_32SceneCode.GDred_9595curtainObjects1.length = 0;
gdjs.Game_32SceneCode.GDred_9595curtainObjects2.length = 0;
gdjs.Game_32SceneCode.GDred_9595curtainObjects3.length = 0;
gdjs.Game_32SceneCode.GDred_9595curtainObjects4.length = 0;
gdjs.Game_32SceneCode.GDred_9595curtainObjects5.length = 0;
gdjs.Game_32SceneCode.GDred_9595curtainObjects6.length = 0;
gdjs.Game_32SceneCode.GDred_9595curtainObjects7.length = 0;
gdjs.Game_32SceneCode.GDred_9595curtainObjects8.length = 0;
gdjs.Game_32SceneCode.GDFabric004BlockObjects1.length = 0;
gdjs.Game_32SceneCode.GDFabric004BlockObjects2.length = 0;
gdjs.Game_32SceneCode.GDFabric004BlockObjects3.length = 0;
gdjs.Game_32SceneCode.GDFabric004BlockObjects4.length = 0;
gdjs.Game_32SceneCode.GDFabric004BlockObjects5.length = 0;
gdjs.Game_32SceneCode.GDFabric004BlockObjects6.length = 0;
gdjs.Game_32SceneCode.GDFabric004BlockObjects7.length = 0;
gdjs.Game_32SceneCode.GDFabric004BlockObjects8.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects4.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects5.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects6.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects7.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects8.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects5.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects6.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects7.length = 0;
gdjs.Game_32SceneCode.GDNoteSignObjects8.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects5.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects6.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects7.length = 0;
gdjs.Game_32SceneCode.GDNoteTextObjects8.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects5.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects6.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects7.length = 0;
gdjs.Game_32SceneCode.GDNoteInputObjects8.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects5.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects6.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects7.length = 0;
gdjs.Game_32SceneCode.GDNoteButtonObjects8.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects5.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects6.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects7.length = 0;
gdjs.Game_32SceneCode.GDPostButtonObjects8.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects1.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects2.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects3.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects4.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects5.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects6.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects7.length = 0;
gdjs.Game_32SceneCode.GDNoteText3DObjects8.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects1.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects2.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects3.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects4.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects5.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects6.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects7.length = 0;
gdjs.Game_32SceneCode.GDNameInputObjects8.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects5.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects6.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects7.length = 0;
gdjs.Game_32SceneCode.GDJoinButtonObjects8.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects5.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects6.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects7.length = 0;
gdjs.Game_32SceneCode.GDStatusTextObjects8.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects1.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects2.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects3.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects4.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects5.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects6.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects7.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595dogObjects8.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects1.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects2.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects3.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects4.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects5.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects6.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects7.length = 0;
gdjs.Game_32SceneCode.GDFULLS_9595SCREENObjects8.length = 0;
gdjs.Game_32SceneCode.GDColor_9595PickerObjects1.length = 0;
gdjs.Game_32SceneCode.GDColor_9595PickerObjects2.length = 0;
gdjs.Game_32SceneCode.GDColor_9595PickerObjects3.length = 0;
gdjs.Game_32SceneCode.GDColor_9595PickerObjects4.length = 0;
gdjs.Game_32SceneCode.GDColor_9595PickerObjects5.length = 0;
gdjs.Game_32SceneCode.GDColor_9595PickerObjects6.length = 0;
gdjs.Game_32SceneCode.GDColor_9595PickerObjects7.length = 0;
gdjs.Game_32SceneCode.GDColor_9595PickerObjects8.length = 0;
gdjs.Game_32SceneCode.GDCancelObjects1.length = 0;
gdjs.Game_32SceneCode.GDCancelObjects2.length = 0;
gdjs.Game_32SceneCode.GDCancelObjects3.length = 0;
gdjs.Game_32SceneCode.GDCancelObjects4.length = 0;
gdjs.Game_32SceneCode.GDCancelObjects5.length = 0;
gdjs.Game_32SceneCode.GDCancelObjects6.length = 0;
gdjs.Game_32SceneCode.GDCancelObjects7.length = 0;
gdjs.Game_32SceneCode.GDCancelObjects8.length = 0;
gdjs.Game_32SceneCode.GDpissObjects1.length = 0;
gdjs.Game_32SceneCode.GDpissObjects2.length = 0;
gdjs.Game_32SceneCode.GDpissObjects3.length = 0;
gdjs.Game_32SceneCode.GDpissObjects4.length = 0;
gdjs.Game_32SceneCode.GDpissObjects5.length = 0;
gdjs.Game_32SceneCode.GDpissObjects6.length = 0;
gdjs.Game_32SceneCode.GDpissObjects7.length = 0;
gdjs.Game_32SceneCode.GDpissObjects8.length = 0;
gdjs.Game_32SceneCode.GDpiss2Objects1.length = 0;
gdjs.Game_32SceneCode.GDpiss2Objects2.length = 0;
gdjs.Game_32SceneCode.GDpiss2Objects3.length = 0;
gdjs.Game_32SceneCode.GDpiss2Objects4.length = 0;
gdjs.Game_32SceneCode.GDpiss2Objects5.length = 0;
gdjs.Game_32SceneCode.GDpiss2Objects6.length = 0;
gdjs.Game_32SceneCode.GDpiss2Objects7.length = 0;
gdjs.Game_32SceneCode.GDpiss2Objects8.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects1.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects2.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects3.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects4.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects5.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects6.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects7.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95951Objects8.length = 0;
gdjs.Game_32SceneCode.GDcol_95951Objects1.length = 0;
gdjs.Game_32SceneCode.GDcol_95951Objects2.length = 0;
gdjs.Game_32SceneCode.GDcol_95951Objects3.length = 0;
gdjs.Game_32SceneCode.GDcol_95951Objects4.length = 0;
gdjs.Game_32SceneCode.GDcol_95951Objects5.length = 0;
gdjs.Game_32SceneCode.GDcol_95951Objects6.length = 0;
gdjs.Game_32SceneCode.GDcol_95951Objects7.length = 0;
gdjs.Game_32SceneCode.GDcol_95951Objects8.length = 0;
gdjs.Game_32SceneCode.GDcol_95952Objects1.length = 0;
gdjs.Game_32SceneCode.GDcol_95952Objects2.length = 0;
gdjs.Game_32SceneCode.GDcol_95952Objects3.length = 0;
gdjs.Game_32SceneCode.GDcol_95952Objects4.length = 0;
gdjs.Game_32SceneCode.GDcol_95952Objects5.length = 0;
gdjs.Game_32SceneCode.GDcol_95952Objects6.length = 0;
gdjs.Game_32SceneCode.GDcol_95952Objects7.length = 0;
gdjs.Game_32SceneCode.GDcol_95952Objects8.length = 0;
gdjs.Game_32SceneCode.GDcol_95953Objects1.length = 0;
gdjs.Game_32SceneCode.GDcol_95953Objects2.length = 0;
gdjs.Game_32SceneCode.GDcol_95953Objects3.length = 0;
gdjs.Game_32SceneCode.GDcol_95953Objects4.length = 0;
gdjs.Game_32SceneCode.GDcol_95953Objects5.length = 0;
gdjs.Game_32SceneCode.GDcol_95953Objects6.length = 0;
gdjs.Game_32SceneCode.GDcol_95953Objects7.length = 0;
gdjs.Game_32SceneCode.GDcol_95953Objects8.length = 0;
gdjs.Game_32SceneCode.GDcol_95954Objects1.length = 0;
gdjs.Game_32SceneCode.GDcol_95954Objects2.length = 0;
gdjs.Game_32SceneCode.GDcol_95954Objects3.length = 0;
gdjs.Game_32SceneCode.GDcol_95954Objects4.length = 0;
gdjs.Game_32SceneCode.GDcol_95954Objects5.length = 0;
gdjs.Game_32SceneCode.GDcol_95954Objects6.length = 0;
gdjs.Game_32SceneCode.GDcol_95954Objects7.length = 0;
gdjs.Game_32SceneCode.GDcol_95954Objects8.length = 0;
gdjs.Game_32SceneCode.GDcol_95955Objects1.length = 0;
gdjs.Game_32SceneCode.GDcol_95955Objects2.length = 0;
gdjs.Game_32SceneCode.GDcol_95955Objects3.length = 0;
gdjs.Game_32SceneCode.GDcol_95955Objects4.length = 0;
gdjs.Game_32SceneCode.GDcol_95955Objects5.length = 0;
gdjs.Game_32SceneCode.GDcol_95955Objects6.length = 0;
gdjs.Game_32SceneCode.GDcol_95955Objects7.length = 0;
gdjs.Game_32SceneCode.GDcol_95955Objects8.length = 0;
gdjs.Game_32SceneCode.GDcol_95956Objects1.length = 0;
gdjs.Game_32SceneCode.GDcol_95956Objects2.length = 0;
gdjs.Game_32SceneCode.GDcol_95956Objects3.length = 0;
gdjs.Game_32SceneCode.GDcol_95956Objects4.length = 0;
gdjs.Game_32SceneCode.GDcol_95956Objects5.length = 0;
gdjs.Game_32SceneCode.GDcol_95956Objects6.length = 0;
gdjs.Game_32SceneCode.GDcol_95956Objects7.length = 0;
gdjs.Game_32SceneCode.GDcol_95956Objects8.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects1.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects2.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects3.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects4.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects5.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects6.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects7.length = 0;
gdjs.Game_32SceneCode.GDdog_9595player_9595crawlyObjects8.length = 0;
gdjs.Game_32SceneCode.GDdog_9595selectObjects1.length = 0;
gdjs.Game_32SceneCode.GDdog_9595selectObjects2.length = 0;
gdjs.Game_32SceneCode.GDdog_9595selectObjects3.length = 0;
gdjs.Game_32SceneCode.GDdog_9595selectObjects4.length = 0;
gdjs.Game_32SceneCode.GDdog_9595selectObjects5.length = 0;
gdjs.Game_32SceneCode.GDdog_9595selectObjects6.length = 0;
gdjs.Game_32SceneCode.GDdog_9595selectObjects7.length = 0;
gdjs.Game_32SceneCode.GDdog_9595selectObjects8.length = 0;
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects1.length = 0;
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects2.length = 0;
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects3.length = 0;
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects4.length = 0;
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects5.length = 0;
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects6.length = 0;
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects7.length = 0;
gdjs.Game_32SceneCode.GDcrawly_9595selectObjects8.length = 0;
gdjs.Game_32SceneCode.GDnextObjects1.length = 0;
gdjs.Game_32SceneCode.GDnextObjects2.length = 0;
gdjs.Game_32SceneCode.GDnextObjects3.length = 0;
gdjs.Game_32SceneCode.GDnextObjects4.length = 0;
gdjs.Game_32SceneCode.GDnextObjects5.length = 0;
gdjs.Game_32SceneCode.GDnextObjects6.length = 0;
gdjs.Game_32SceneCode.GDnextObjects7.length = 0;
gdjs.Game_32SceneCode.GDnextObjects8.length = 0;
gdjs.Game_32SceneCode.GDbackObjects1.length = 0;
gdjs.Game_32SceneCode.GDbackObjects2.length = 0;
gdjs.Game_32SceneCode.GDbackObjects3.length = 0;
gdjs.Game_32SceneCode.GDbackObjects4.length = 0;
gdjs.Game_32SceneCode.GDbackObjects5.length = 0;
gdjs.Game_32SceneCode.GDbackObjects6.length = 0;
gdjs.Game_32SceneCode.GDbackObjects7.length = 0;
gdjs.Game_32SceneCode.GDbackObjects8.length = 0;
gdjs.Game_32SceneCode.GDexit_9595videoObjects1.length = 0;
gdjs.Game_32SceneCode.GDexit_9595videoObjects2.length = 0;
gdjs.Game_32SceneCode.GDexit_9595videoObjects3.length = 0;
gdjs.Game_32SceneCode.GDexit_9595videoObjects4.length = 0;
gdjs.Game_32SceneCode.GDexit_9595videoObjects5.length = 0;
gdjs.Game_32SceneCode.GDexit_9595videoObjects6.length = 0;
gdjs.Game_32SceneCode.GDexit_9595videoObjects7.length = 0;
gdjs.Game_32SceneCode.GDexit_9595videoObjects8.length = 0;
gdjs.Game_32SceneCode.GDbeansObjects1.length = 0;
gdjs.Game_32SceneCode.GDbeansObjects2.length = 0;
gdjs.Game_32SceneCode.GDbeansObjects3.length = 0;
gdjs.Game_32SceneCode.GDbeansObjects4.length = 0;
gdjs.Game_32SceneCode.GDbeansObjects5.length = 0;
gdjs.Game_32SceneCode.GDbeansObjects6.length = 0;
gdjs.Game_32SceneCode.GDbeansObjects7.length = 0;
gdjs.Game_32SceneCode.GDbeansObjects8.length = 0;
gdjs.Game_32SceneCode.GDyeetObjects1.length = 0;
gdjs.Game_32SceneCode.GDyeetObjects2.length = 0;
gdjs.Game_32SceneCode.GDyeetObjects3.length = 0;
gdjs.Game_32SceneCode.GDyeetObjects4.length = 0;
gdjs.Game_32SceneCode.GDyeetObjects5.length = 0;
gdjs.Game_32SceneCode.GDyeetObjects6.length = 0;
gdjs.Game_32SceneCode.GDyeetObjects7.length = 0;
gdjs.Game_32SceneCode.GDyeetObjects8.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects1.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects2.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects3.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects4.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects5.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects6.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects7.length = 0;
gdjs.Game_32SceneCode.GDVideo_9595Trigger_95952Objects8.length = 0;
gdjs.Game_32SceneCode.GDteleportObjects1.length = 0;
gdjs.Game_32SceneCode.GDteleportObjects2.length = 0;
gdjs.Game_32SceneCode.GDteleportObjects3.length = 0;
gdjs.Game_32SceneCode.GDteleportObjects4.length = 0;
gdjs.Game_32SceneCode.GDteleportObjects5.length = 0;
gdjs.Game_32SceneCode.GDteleportObjects6.length = 0;
gdjs.Game_32SceneCode.GDteleportObjects7.length = 0;
gdjs.Game_32SceneCode.GDteleportObjects8.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
