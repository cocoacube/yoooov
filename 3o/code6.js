gdjs.QYCode = {};
gdjs.QYCode.localVariables = [];
gdjs.QYCode.GDBenchDecoratedObjects1= [];
gdjs.QYCode.GDBenchDecoratedObjects2= [];
gdjs.QYCode.GDBoneCObjects1= [];
gdjs.QYCode.GDBoneCObjects2= [];
gdjs.QYCode.GDBoneBObjects1= [];
gdjs.QYCode.GDBoneBObjects2= [];
gdjs.QYCode.GDBoneAObjects1= [];
gdjs.QYCode.GDBoneAObjects2= [];
gdjs.QYCode.GDCandleThinObjects1= [];
gdjs.QYCode.GDCandleThinObjects2= [];
gdjs.QYCode.GDCandleTripleObjects1= [];
gdjs.QYCode.GDCandleTripleObjects2= [];
gdjs.QYCode.GDCandleObjects1= [];
gdjs.QYCode.GDCandleObjects2= [];
gdjs.QYCode.GDCoffinObjects1= [];
gdjs.QYCode.GDCoffinObjects2= [];
gdjs.QYCode.GDCoffinDecoratedObjects1= [];
gdjs.QYCode.GDCoffinDecoratedObjects2= [];
gdjs.QYCode.GDGraveADestroyedObjects1= [];
gdjs.QYCode.GDGraveADestroyedObjects2= [];
gdjs.QYCode.GDGravemarkerAObjects1= [];
gdjs.QYCode.GDGravemarkerAObjects2= [];
gdjs.QYCode.GDGraveAObjects1= [];
gdjs.QYCode.GDGraveAObjects2= [];
gdjs.QYCode.GDGraveBObjects1= [];
gdjs.QYCode.GDGraveBObjects2= [];
gdjs.QYCode.GDLanternHangingObjects1= [];
gdjs.QYCode.GDLanternHangingObjects2= [];
gdjs.QYCode.GDPlaqueCandlesObjects1= [];
gdjs.QYCode.GDPlaqueCandlesObjects2= [];
gdjs.QYCode.GDLanternStandingObjects1= [];
gdjs.QYCode.GDLanternStandingObjects2= [];
gdjs.QYCode.GDGravemarkerBObjects1= [];
gdjs.QYCode.GDGravemarkerBObjects2= [];
gdjs.QYCode.GDPlaqueObjects1= [];
gdjs.QYCode.GDPlaqueObjects2= [];
gdjs.QYCode.GDGravestoneObjects1= [];
gdjs.QYCode.GDGravestoneObjects2= [];
gdjs.QYCode.GDPostLanternObjects1= [];
gdjs.QYCode.GDPostLanternObjects2= [];
gdjs.QYCode.GDPostObjects1= [];
gdjs.QYCode.GDPostObjects2= [];
gdjs.QYCode.GDShrineCandlesObjects1= [];
gdjs.QYCode.GDShrineCandlesObjects2= [];
gdjs.QYCode.GDPostSkullObjects1= [];
gdjs.QYCode.GDPostSkullObjects2= [];
gdjs.QYCode.GDRibcageObjects1= [];
gdjs.QYCode.GDRibcageObjects2= [];
gdjs.QYCode.GDShrineObjects1= [];
gdjs.QYCode.GDShrineObjects2= [];
gdjs.QYCode.GDSkullCandleObjects1= [];
gdjs.QYCode.GDSkullCandleObjects2= [];
gdjs.QYCode.GDFloorDirtGraveObjects1= [];
gdjs.QYCode.GDFloorDirtGraveObjects2= [];
gdjs.QYCode.GDSkullObjects1= [];
gdjs.QYCode.GDSkullObjects2= [];
gdjs.QYCode.GDFloorDirtSmallObjects1= [];
gdjs.QYCode.GDFloorDirtSmallObjects2= [];
gdjs.QYCode.GDCryptObjects1= [];
gdjs.QYCode.GDCryptObjects2= [];
gdjs.QYCode.GDFloorDirtObjects1= [];
gdjs.QYCode.GDFloorDirtObjects2= [];
gdjs.QYCode.GDPathAObjects1= [];
gdjs.QYCode.GDPathAObjects2= [];
gdjs.QYCode.GDPathBObjects1= [];
gdjs.QYCode.GDPathBObjects2= [];
gdjs.QYCode.GDPathDObjects1= [];
gdjs.QYCode.GDPathDObjects2= [];
gdjs.QYCode.GDPathCObjects1= [];
gdjs.QYCode.GDPathCObjects2= [];
gdjs.QYCode.GDFenceBrokenObjects1= [];
gdjs.QYCode.GDFenceBrokenObjects2= [];
gdjs.QYCode.GDFencePillarObjects1= [];
gdjs.QYCode.GDFencePillarObjects2= [];
gdjs.QYCode.GDArchGateObjects1= [];
gdjs.QYCode.GDArchGateObjects2= [];
gdjs.QYCode.GDFenceSeperateObjects1= [];
gdjs.QYCode.GDFenceSeperateObjects2= [];
gdjs.QYCode.GDFenceGateObjects1= [];
gdjs.QYCode.GDFenceGateObjects2= [];
gdjs.QYCode.GDTreasureChestObjects1= [];
gdjs.QYCode.GDTreasureChestObjects2= [];
gdjs.QYCode.GDLeafRangerObjects1= [];
gdjs.QYCode.GDLeafRangerObjects2= [];


gdjs.QYCode.mapOfGDgdjs_9546QYCode_9546GDLeafRangerObjects1Objects = Hashtable.newFrom({"LeafRanger": gdjs.QYCode.GDLeafRangerObjects1});
gdjs.QYCode.mapOfGDgdjs_9546QYCode_9546GDTreasureChestObjects1Objects = Hashtable.newFrom({"TreasureChest": gdjs.QYCode.GDTreasureChestObjects1});
gdjs.QYCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LeafRanger"), gdjs.QYCode.GDLeafRangerObjects1);
{for(var i = 0, len = gdjs.QYCode.GDLeafRangerObjects1.length ;i < len;++i) {
    gdjs.QYCode.GDLeafRangerObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeafRanger"), gdjs.QYCode.GDLeafRangerObjects1);
gdjs.copyArray(runtimeScene.getObjects("TreasureChest"), gdjs.QYCode.GDTreasureChestObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.QYCode.mapOfGDgdjs_9546QYCode_9546GDLeafRangerObjects1Objects, gdjs.QYCode.mapOfGDgdjs_9546QYCode_9546GDTreasureChestObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "yhgff", false);
}}

}


};

gdjs.QYCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.QYCode.GDBenchDecoratedObjects1.length = 0;
gdjs.QYCode.GDBenchDecoratedObjects2.length = 0;
gdjs.QYCode.GDBoneCObjects1.length = 0;
gdjs.QYCode.GDBoneCObjects2.length = 0;
gdjs.QYCode.GDBoneBObjects1.length = 0;
gdjs.QYCode.GDBoneBObjects2.length = 0;
gdjs.QYCode.GDBoneAObjects1.length = 0;
gdjs.QYCode.GDBoneAObjects2.length = 0;
gdjs.QYCode.GDCandleThinObjects1.length = 0;
gdjs.QYCode.GDCandleThinObjects2.length = 0;
gdjs.QYCode.GDCandleTripleObjects1.length = 0;
gdjs.QYCode.GDCandleTripleObjects2.length = 0;
gdjs.QYCode.GDCandleObjects1.length = 0;
gdjs.QYCode.GDCandleObjects2.length = 0;
gdjs.QYCode.GDCoffinObjects1.length = 0;
gdjs.QYCode.GDCoffinObjects2.length = 0;
gdjs.QYCode.GDCoffinDecoratedObjects1.length = 0;
gdjs.QYCode.GDCoffinDecoratedObjects2.length = 0;
gdjs.QYCode.GDGraveADestroyedObjects1.length = 0;
gdjs.QYCode.GDGraveADestroyedObjects2.length = 0;
gdjs.QYCode.GDGravemarkerAObjects1.length = 0;
gdjs.QYCode.GDGravemarkerAObjects2.length = 0;
gdjs.QYCode.GDGraveAObjects1.length = 0;
gdjs.QYCode.GDGraveAObjects2.length = 0;
gdjs.QYCode.GDGraveBObjects1.length = 0;
gdjs.QYCode.GDGraveBObjects2.length = 0;
gdjs.QYCode.GDLanternHangingObjects1.length = 0;
gdjs.QYCode.GDLanternHangingObjects2.length = 0;
gdjs.QYCode.GDPlaqueCandlesObjects1.length = 0;
gdjs.QYCode.GDPlaqueCandlesObjects2.length = 0;
gdjs.QYCode.GDLanternStandingObjects1.length = 0;
gdjs.QYCode.GDLanternStandingObjects2.length = 0;
gdjs.QYCode.GDGravemarkerBObjects1.length = 0;
gdjs.QYCode.GDGravemarkerBObjects2.length = 0;
gdjs.QYCode.GDPlaqueObjects1.length = 0;
gdjs.QYCode.GDPlaqueObjects2.length = 0;
gdjs.QYCode.GDGravestoneObjects1.length = 0;
gdjs.QYCode.GDGravestoneObjects2.length = 0;
gdjs.QYCode.GDPostLanternObjects1.length = 0;
gdjs.QYCode.GDPostLanternObjects2.length = 0;
gdjs.QYCode.GDPostObjects1.length = 0;
gdjs.QYCode.GDPostObjects2.length = 0;
gdjs.QYCode.GDShrineCandlesObjects1.length = 0;
gdjs.QYCode.GDShrineCandlesObjects2.length = 0;
gdjs.QYCode.GDPostSkullObjects1.length = 0;
gdjs.QYCode.GDPostSkullObjects2.length = 0;
gdjs.QYCode.GDRibcageObjects1.length = 0;
gdjs.QYCode.GDRibcageObjects2.length = 0;
gdjs.QYCode.GDShrineObjects1.length = 0;
gdjs.QYCode.GDShrineObjects2.length = 0;
gdjs.QYCode.GDSkullCandleObjects1.length = 0;
gdjs.QYCode.GDSkullCandleObjects2.length = 0;
gdjs.QYCode.GDFloorDirtGraveObjects1.length = 0;
gdjs.QYCode.GDFloorDirtGraveObjects2.length = 0;
gdjs.QYCode.GDSkullObjects1.length = 0;
gdjs.QYCode.GDSkullObjects2.length = 0;
gdjs.QYCode.GDFloorDirtSmallObjects1.length = 0;
gdjs.QYCode.GDFloorDirtSmallObjects2.length = 0;
gdjs.QYCode.GDCryptObjects1.length = 0;
gdjs.QYCode.GDCryptObjects2.length = 0;
gdjs.QYCode.GDFloorDirtObjects1.length = 0;
gdjs.QYCode.GDFloorDirtObjects2.length = 0;
gdjs.QYCode.GDPathAObjects1.length = 0;
gdjs.QYCode.GDPathAObjects2.length = 0;
gdjs.QYCode.GDPathBObjects1.length = 0;
gdjs.QYCode.GDPathBObjects2.length = 0;
gdjs.QYCode.GDPathDObjects1.length = 0;
gdjs.QYCode.GDPathDObjects2.length = 0;
gdjs.QYCode.GDPathCObjects1.length = 0;
gdjs.QYCode.GDPathCObjects2.length = 0;
gdjs.QYCode.GDFenceBrokenObjects1.length = 0;
gdjs.QYCode.GDFenceBrokenObjects2.length = 0;
gdjs.QYCode.GDFencePillarObjects1.length = 0;
gdjs.QYCode.GDFencePillarObjects2.length = 0;
gdjs.QYCode.GDArchGateObjects1.length = 0;
gdjs.QYCode.GDArchGateObjects2.length = 0;
gdjs.QYCode.GDFenceSeperateObjects1.length = 0;
gdjs.QYCode.GDFenceSeperateObjects2.length = 0;
gdjs.QYCode.GDFenceGateObjects1.length = 0;
gdjs.QYCode.GDFenceGateObjects2.length = 0;
gdjs.QYCode.GDTreasureChestObjects1.length = 0;
gdjs.QYCode.GDTreasureChestObjects2.length = 0;
gdjs.QYCode.GDLeafRangerObjects1.length = 0;
gdjs.QYCode.GDLeafRangerObjects2.length = 0;

gdjs.QYCode.eventsList0(runtimeScene);
gdjs.QYCode.GDBenchDecoratedObjects1.length = 0;
gdjs.QYCode.GDBenchDecoratedObjects2.length = 0;
gdjs.QYCode.GDBoneCObjects1.length = 0;
gdjs.QYCode.GDBoneCObjects2.length = 0;
gdjs.QYCode.GDBoneBObjects1.length = 0;
gdjs.QYCode.GDBoneBObjects2.length = 0;
gdjs.QYCode.GDBoneAObjects1.length = 0;
gdjs.QYCode.GDBoneAObjects2.length = 0;
gdjs.QYCode.GDCandleThinObjects1.length = 0;
gdjs.QYCode.GDCandleThinObjects2.length = 0;
gdjs.QYCode.GDCandleTripleObjects1.length = 0;
gdjs.QYCode.GDCandleTripleObjects2.length = 0;
gdjs.QYCode.GDCandleObjects1.length = 0;
gdjs.QYCode.GDCandleObjects2.length = 0;
gdjs.QYCode.GDCoffinObjects1.length = 0;
gdjs.QYCode.GDCoffinObjects2.length = 0;
gdjs.QYCode.GDCoffinDecoratedObjects1.length = 0;
gdjs.QYCode.GDCoffinDecoratedObjects2.length = 0;
gdjs.QYCode.GDGraveADestroyedObjects1.length = 0;
gdjs.QYCode.GDGraveADestroyedObjects2.length = 0;
gdjs.QYCode.GDGravemarkerAObjects1.length = 0;
gdjs.QYCode.GDGravemarkerAObjects2.length = 0;
gdjs.QYCode.GDGraveAObjects1.length = 0;
gdjs.QYCode.GDGraveAObjects2.length = 0;
gdjs.QYCode.GDGraveBObjects1.length = 0;
gdjs.QYCode.GDGraveBObjects2.length = 0;
gdjs.QYCode.GDLanternHangingObjects1.length = 0;
gdjs.QYCode.GDLanternHangingObjects2.length = 0;
gdjs.QYCode.GDPlaqueCandlesObjects1.length = 0;
gdjs.QYCode.GDPlaqueCandlesObjects2.length = 0;
gdjs.QYCode.GDLanternStandingObjects1.length = 0;
gdjs.QYCode.GDLanternStandingObjects2.length = 0;
gdjs.QYCode.GDGravemarkerBObjects1.length = 0;
gdjs.QYCode.GDGravemarkerBObjects2.length = 0;
gdjs.QYCode.GDPlaqueObjects1.length = 0;
gdjs.QYCode.GDPlaqueObjects2.length = 0;
gdjs.QYCode.GDGravestoneObjects1.length = 0;
gdjs.QYCode.GDGravestoneObjects2.length = 0;
gdjs.QYCode.GDPostLanternObjects1.length = 0;
gdjs.QYCode.GDPostLanternObjects2.length = 0;
gdjs.QYCode.GDPostObjects1.length = 0;
gdjs.QYCode.GDPostObjects2.length = 0;
gdjs.QYCode.GDShrineCandlesObjects1.length = 0;
gdjs.QYCode.GDShrineCandlesObjects2.length = 0;
gdjs.QYCode.GDPostSkullObjects1.length = 0;
gdjs.QYCode.GDPostSkullObjects2.length = 0;
gdjs.QYCode.GDRibcageObjects1.length = 0;
gdjs.QYCode.GDRibcageObjects2.length = 0;
gdjs.QYCode.GDShrineObjects1.length = 0;
gdjs.QYCode.GDShrineObjects2.length = 0;
gdjs.QYCode.GDSkullCandleObjects1.length = 0;
gdjs.QYCode.GDSkullCandleObjects2.length = 0;
gdjs.QYCode.GDFloorDirtGraveObjects1.length = 0;
gdjs.QYCode.GDFloorDirtGraveObjects2.length = 0;
gdjs.QYCode.GDSkullObjects1.length = 0;
gdjs.QYCode.GDSkullObjects2.length = 0;
gdjs.QYCode.GDFloorDirtSmallObjects1.length = 0;
gdjs.QYCode.GDFloorDirtSmallObjects2.length = 0;
gdjs.QYCode.GDCryptObjects1.length = 0;
gdjs.QYCode.GDCryptObjects2.length = 0;
gdjs.QYCode.GDFloorDirtObjects1.length = 0;
gdjs.QYCode.GDFloorDirtObjects2.length = 0;
gdjs.QYCode.GDPathAObjects1.length = 0;
gdjs.QYCode.GDPathAObjects2.length = 0;
gdjs.QYCode.GDPathBObjects1.length = 0;
gdjs.QYCode.GDPathBObjects2.length = 0;
gdjs.QYCode.GDPathDObjects1.length = 0;
gdjs.QYCode.GDPathDObjects2.length = 0;
gdjs.QYCode.GDPathCObjects1.length = 0;
gdjs.QYCode.GDPathCObjects2.length = 0;
gdjs.QYCode.GDFenceBrokenObjects1.length = 0;
gdjs.QYCode.GDFenceBrokenObjects2.length = 0;
gdjs.QYCode.GDFencePillarObjects1.length = 0;
gdjs.QYCode.GDFencePillarObjects2.length = 0;
gdjs.QYCode.GDArchGateObjects1.length = 0;
gdjs.QYCode.GDArchGateObjects2.length = 0;
gdjs.QYCode.GDFenceSeperateObjects1.length = 0;
gdjs.QYCode.GDFenceSeperateObjects2.length = 0;
gdjs.QYCode.GDFenceGateObjects1.length = 0;
gdjs.QYCode.GDFenceGateObjects2.length = 0;
gdjs.QYCode.GDTreasureChestObjects1.length = 0;
gdjs.QYCode.GDTreasureChestObjects2.length = 0;
gdjs.QYCode.GDLeafRangerObjects1.length = 0;
gdjs.QYCode.GDLeafRangerObjects2.length = 0;


return;

}

gdjs['QYCode'] = gdjs.QYCode;
