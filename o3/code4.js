gdjs.level2Code = {};
gdjs.level2Code.localVariables = [];
gdjs.level2Code.GDRedFlatBarObjects1= [];
gdjs.level2Code.GDRedFlatBarObjects2= [];
gdjs.level2Code.GDBlueFlatBarObjects1= [];
gdjs.level2Code.GDBlueFlatBarObjects2= [];
gdjs.level2Code.GDLeafRangerObjects1= [];
gdjs.level2Code.GDLeafRangerObjects2= [];
gdjs.level2Code.GDLeafRangerPortraitObjects1= [];
gdjs.level2Code.GDLeafRangerPortraitObjects2= [];
gdjs.level2Code.GDSteambot1Objects1= [];
gdjs.level2Code.GDSteambot1Objects2= [];
gdjs.level2Code.GDWoodBackgroundObjects1= [];
gdjs.level2Code.GDWoodBackgroundObjects2= [];
gdjs.level2Code.GDGraveyardTileObjects1= [];
gdjs.level2Code.GDGraveyardTileObjects2= [];
gdjs.level2Code.GDRedButtonWithMetalFrameObjects1= [];
gdjs.level2Code.GDRedButtonWithMetalFrameObjects2= [];
gdjs.level2Code.GDRedButtonWithMetalFrame2Objects1= [];
gdjs.level2Code.GDRedButtonWithMetalFrame2Objects2= [];
gdjs.level2Code.GDRedFlatBar2Objects1= [];
gdjs.level2Code.GDRedFlatBar2Objects2= [];
gdjs.level2Code.GDBlueFlatBar2Objects1= [];
gdjs.level2Code.GDBlueFlatBar2Objects2= [];
gdjs.level2Code.GDArrowObjects1= [];
gdjs.level2Code.GDArrowObjects2= [];
gdjs.level2Code.GDBurgerCheeseDoubleObjects1= [];
gdjs.level2Code.GDBurgerCheeseDoubleObjects2= [];


gdjs.level2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithMetalFrame"), gdjs.level2Code.GDRedButtonWithMetalFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2Code.GDRedButtonWithMetalFrameObjects1.length;i<l;++i) {
    if ( gdjs.level2Code.GDRedButtonWithMetalFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level2Code.GDRedButtonWithMetalFrameObjects1[k] = gdjs.level2Code.GDRedButtonWithMetalFrameObjects1[i];
        ++k;
    }
}
gdjs.level2Code.GDRedButtonWithMetalFrameObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level2u", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithMetalFrame2"), gdjs.level2Code.GDRedButtonWithMetalFrame2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2Code.GDRedButtonWithMetalFrame2Objects1.length;i<l;++i) {
    if ( gdjs.level2Code.GDRedButtonWithMetalFrame2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level2Code.GDRedButtonWithMetalFrame2Objects1[k] = gdjs.level2Code.GDRedButtonWithMetalFrame2Objects1[i];
        ++k;
    }
}
gdjs.level2Code.GDRedButtonWithMetalFrame2Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level2u", false);
}}

}


};

gdjs.level2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level2Code.GDRedFlatBarObjects1.length = 0;
gdjs.level2Code.GDRedFlatBarObjects2.length = 0;
gdjs.level2Code.GDBlueFlatBarObjects1.length = 0;
gdjs.level2Code.GDBlueFlatBarObjects2.length = 0;
gdjs.level2Code.GDLeafRangerObjects1.length = 0;
gdjs.level2Code.GDLeafRangerObjects2.length = 0;
gdjs.level2Code.GDLeafRangerPortraitObjects1.length = 0;
gdjs.level2Code.GDLeafRangerPortraitObjects2.length = 0;
gdjs.level2Code.GDSteambot1Objects1.length = 0;
gdjs.level2Code.GDSteambot1Objects2.length = 0;
gdjs.level2Code.GDWoodBackgroundObjects1.length = 0;
gdjs.level2Code.GDWoodBackgroundObjects2.length = 0;
gdjs.level2Code.GDGraveyardTileObjects1.length = 0;
gdjs.level2Code.GDGraveyardTileObjects2.length = 0;
gdjs.level2Code.GDRedButtonWithMetalFrameObjects1.length = 0;
gdjs.level2Code.GDRedButtonWithMetalFrameObjects2.length = 0;
gdjs.level2Code.GDRedButtonWithMetalFrame2Objects1.length = 0;
gdjs.level2Code.GDRedButtonWithMetalFrame2Objects2.length = 0;
gdjs.level2Code.GDRedFlatBar2Objects1.length = 0;
gdjs.level2Code.GDRedFlatBar2Objects2.length = 0;
gdjs.level2Code.GDBlueFlatBar2Objects1.length = 0;
gdjs.level2Code.GDBlueFlatBar2Objects2.length = 0;
gdjs.level2Code.GDArrowObjects1.length = 0;
gdjs.level2Code.GDArrowObjects2.length = 0;
gdjs.level2Code.GDBurgerCheeseDoubleObjects1.length = 0;
gdjs.level2Code.GDBurgerCheeseDoubleObjects2.length = 0;

gdjs.level2Code.eventsList0(runtimeScene);
gdjs.level2Code.GDRedFlatBarObjects1.length = 0;
gdjs.level2Code.GDRedFlatBarObjects2.length = 0;
gdjs.level2Code.GDBlueFlatBarObjects1.length = 0;
gdjs.level2Code.GDBlueFlatBarObjects2.length = 0;
gdjs.level2Code.GDLeafRangerObjects1.length = 0;
gdjs.level2Code.GDLeafRangerObjects2.length = 0;
gdjs.level2Code.GDLeafRangerPortraitObjects1.length = 0;
gdjs.level2Code.GDLeafRangerPortraitObjects2.length = 0;
gdjs.level2Code.GDSteambot1Objects1.length = 0;
gdjs.level2Code.GDSteambot1Objects2.length = 0;
gdjs.level2Code.GDWoodBackgroundObjects1.length = 0;
gdjs.level2Code.GDWoodBackgroundObjects2.length = 0;
gdjs.level2Code.GDGraveyardTileObjects1.length = 0;
gdjs.level2Code.GDGraveyardTileObjects2.length = 0;
gdjs.level2Code.GDRedButtonWithMetalFrameObjects1.length = 0;
gdjs.level2Code.GDRedButtonWithMetalFrameObjects2.length = 0;
gdjs.level2Code.GDRedButtonWithMetalFrame2Objects1.length = 0;
gdjs.level2Code.GDRedButtonWithMetalFrame2Objects2.length = 0;
gdjs.level2Code.GDRedFlatBar2Objects1.length = 0;
gdjs.level2Code.GDRedFlatBar2Objects2.length = 0;
gdjs.level2Code.GDBlueFlatBar2Objects1.length = 0;
gdjs.level2Code.GDBlueFlatBar2Objects2.length = 0;
gdjs.level2Code.GDArrowObjects1.length = 0;
gdjs.level2Code.GDArrowObjects2.length = 0;
gdjs.level2Code.GDBurgerCheeseDoubleObjects1.length = 0;
gdjs.level2Code.GDBurgerCheeseDoubleObjects2.length = 0;


return;

}

gdjs['level2Code'] = gdjs.level2Code;
