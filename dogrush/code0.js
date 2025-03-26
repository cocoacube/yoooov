gdjs._20027_39029Code = {};
gdjs._20027_39029Code.localVariables = [];
gdjs._20027_39029Code.GDGrassAndTreeBackgroundObjects1= [];
gdjs._20027_39029Code.GDGrassAndTreeBackgroundObjects2= [];
gdjs._20027_39029Code.GDNewTextObjects1= [];
gdjs._20027_39029Code.GDNewTextObjects2= [];
gdjs._20027_39029Code.GDNewSpriteObjects1= [];
gdjs._20027_39029Code.GDNewSpriteObjects2= [];
gdjs._20027_39029Code.GDNewSprite2Objects1= [];
gdjs._20027_39029Code.GDNewSprite2Objects2= [];
gdjs._20027_39029Code.GDGunObjects1= [];
gdjs._20027_39029Code.GDGunObjects2= [];
gdjs._20027_39029Code.GDaboutObjects1= [];
gdjs._20027_39029Code.GDaboutObjects2= [];
gdjs._20027_39029Code.GDSTARTObjects1= [];
gdjs._20027_39029Code.GDSTARTObjects2= [];
gdjs._20027_39029Code.GDNewSprite5Objects1= [];
gdjs._20027_39029Code.GDNewSprite5Objects2= [];
gdjs._20027_39029Code.GDNewText2Objects1= [];
gdjs._20027_39029Code.GDNewText2Objects2= [];
gdjs._20027_39029Code.GDCloseRoundButtonObjects1= [];
gdjs._20027_39029Code.GDCloseRoundButtonObjects2= [];
gdjs._20027_39029Code.GDDog2Objects1= [];
gdjs._20027_39029Code.GDDog2Objects2= [];
gdjs._20027_39029Code.GDNewSprite3Objects1= [];
gdjs._20027_39029Code.GDNewSprite3Objects2= [];
gdjs._20027_39029Code.GDCopperReObjects1= [];
gdjs._20027_39029Code.GDCopperReObjects2= [];
gdjs._20027_39029Code.GDOrangeFlatBarObjects1= [];
gdjs._20027_39029Code.GDOrangeFlatBarObjects2= [];
gdjs._20027_39029Code.GDDollarsBagObjects1= [];
gdjs._20027_39029Code.GDDollarsBagObjects2= [];
gdjs._20027_39029Code.GDDoorObjects1= [];
gdjs._20027_39029Code.GDDoorObjects2= [];
gdjs._20027_39029Code.GDGoldKeyObjects1= [];
gdjs._20027_39029Code.GDGoldKeyObjects2= [];
gdjs._20027_39029Code.GD_9536947_9520855_9526694Objects1= [];
gdjs._20027_39029Code.GD_9536947_9520855_9526694Objects2= [];
gdjs._20027_39029Code.GD_9520851_9538381Objects1= [];
gdjs._20027_39029Code.GD_9520851_9538381Objects2= [];
gdjs._20027_39029Code.GD_9521512_9537329_9530002_9595_9536947_9520855Objects1= [];
gdjs._20027_39029Code.GD_9521512_9537329_9530002_9595_9536947_9520855Objects2= [];
gdjs._20027_39029Code.GDNewSprite4Objects1= [];
gdjs._20027_39029Code.GDNewSprite4Objects2= [];
gdjs._20027_39029Code.GDRETURNObjects1= [];
gdjs._20027_39029Code.GDRETURNObjects2= [];
gdjs._20027_39029Code.GDRESTARTObjects1= [];
gdjs._20027_39029Code.GDRESTARTObjects2= [];
gdjs._20027_39029Code.GDyouaredeadObjects1= [];
gdjs._20027_39029Code.GDyouaredeadObjects2= [];
gdjs._20027_39029Code.GDLaserObjects1= [];
gdjs._20027_39029Code.GDLaserObjects2= [];
gdjs._20027_39029Code.GDFloorSpikes2Objects1= [];
gdjs._20027_39029Code.GDFloorSpikes2Objects2= [];
gdjs._20027_39029Code.GD_9525342_9521462Objects1= [];
gdjs._20027_39029Code.GD_9525342_9521462Objects2= [];


gdjs._20027_39029Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs._20027_39029Code.GDGunObjects1);
{for(var i = 0, len = gdjs._20027_39029Code.GDGunObjects1.length ;i < len;++i) {
    gdjs._20027_39029Code.GDGunObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("about"), gdjs._20027_39029Code.GDaboutObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_39029Code.GDaboutObjects1.length;i<l;++i) {
    if ( gdjs._20027_39029Code.GDaboutObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_39029Code.GDaboutObjects1[k] = gdjs._20027_39029Code.GDaboutObjects1[i];
        ++k;
    }
}
gdjs._20027_39029Code.GDaboutObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "about");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CloseRoundButton"), gdjs._20027_39029Code.GDCloseRoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_39029Code.GDCloseRoundButtonObjects1.length;i<l;++i) {
    if ( gdjs._20027_39029Code.GDCloseRoundButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_39029Code.GDCloseRoundButtonObjects1[k] = gdjs._20027_39029Code.GDCloseRoundButtonObjects1[i];
        ++k;
    }
}
gdjs._20027_39029Code.GDCloseRoundButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "about");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("START"), gdjs._20027_39029Code.GDSTARTObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_39029Code.GDSTARTObjects1.length;i<l;++i) {
    if ( gdjs._20027_39029Code.GDSTARTObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_39029Code.GDSTARTObjects1[k] = gdjs._20027_39029Code.GDSTARTObjects1[i];
        ++k;
    }
}
gdjs._20027_39029Code.GDSTARTObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "第一关", false);
}}

}


};

gdjs._20027_39029Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._20027_39029Code.GDGrassAndTreeBackgroundObjects1.length = 0;
gdjs._20027_39029Code.GDGrassAndTreeBackgroundObjects2.length = 0;
gdjs._20027_39029Code.GDNewTextObjects1.length = 0;
gdjs._20027_39029Code.GDNewTextObjects2.length = 0;
gdjs._20027_39029Code.GDNewSpriteObjects1.length = 0;
gdjs._20027_39029Code.GDNewSpriteObjects2.length = 0;
gdjs._20027_39029Code.GDNewSprite2Objects1.length = 0;
gdjs._20027_39029Code.GDNewSprite2Objects2.length = 0;
gdjs._20027_39029Code.GDGunObjects1.length = 0;
gdjs._20027_39029Code.GDGunObjects2.length = 0;
gdjs._20027_39029Code.GDaboutObjects1.length = 0;
gdjs._20027_39029Code.GDaboutObjects2.length = 0;
gdjs._20027_39029Code.GDSTARTObjects1.length = 0;
gdjs._20027_39029Code.GDSTARTObjects2.length = 0;
gdjs._20027_39029Code.GDNewSprite5Objects1.length = 0;
gdjs._20027_39029Code.GDNewSprite5Objects2.length = 0;
gdjs._20027_39029Code.GDNewText2Objects1.length = 0;
gdjs._20027_39029Code.GDNewText2Objects2.length = 0;
gdjs._20027_39029Code.GDCloseRoundButtonObjects1.length = 0;
gdjs._20027_39029Code.GDCloseRoundButtonObjects2.length = 0;
gdjs._20027_39029Code.GDDog2Objects1.length = 0;
gdjs._20027_39029Code.GDDog2Objects2.length = 0;
gdjs._20027_39029Code.GDNewSprite3Objects1.length = 0;
gdjs._20027_39029Code.GDNewSprite3Objects2.length = 0;
gdjs._20027_39029Code.GDCopperReObjects1.length = 0;
gdjs._20027_39029Code.GDCopperReObjects2.length = 0;
gdjs._20027_39029Code.GDOrangeFlatBarObjects1.length = 0;
gdjs._20027_39029Code.GDOrangeFlatBarObjects2.length = 0;
gdjs._20027_39029Code.GDDollarsBagObjects1.length = 0;
gdjs._20027_39029Code.GDDollarsBagObjects2.length = 0;
gdjs._20027_39029Code.GDDoorObjects1.length = 0;
gdjs._20027_39029Code.GDDoorObjects2.length = 0;
gdjs._20027_39029Code.GDGoldKeyObjects1.length = 0;
gdjs._20027_39029Code.GDGoldKeyObjects2.length = 0;
gdjs._20027_39029Code.GD_9536947_9520855_9526694Objects1.length = 0;
gdjs._20027_39029Code.GD_9536947_9520855_9526694Objects2.length = 0;
gdjs._20027_39029Code.GD_9520851_9538381Objects1.length = 0;
gdjs._20027_39029Code.GD_9520851_9538381Objects2.length = 0;
gdjs._20027_39029Code.GD_9521512_9537329_9530002_9595_9536947_9520855Objects1.length = 0;
gdjs._20027_39029Code.GD_9521512_9537329_9530002_9595_9536947_9520855Objects2.length = 0;
gdjs._20027_39029Code.GDNewSprite4Objects1.length = 0;
gdjs._20027_39029Code.GDNewSprite4Objects2.length = 0;
gdjs._20027_39029Code.GDRETURNObjects1.length = 0;
gdjs._20027_39029Code.GDRETURNObjects2.length = 0;
gdjs._20027_39029Code.GDRESTARTObjects1.length = 0;
gdjs._20027_39029Code.GDRESTARTObjects2.length = 0;
gdjs._20027_39029Code.GDyouaredeadObjects1.length = 0;
gdjs._20027_39029Code.GDyouaredeadObjects2.length = 0;
gdjs._20027_39029Code.GDLaserObjects1.length = 0;
gdjs._20027_39029Code.GDLaserObjects2.length = 0;
gdjs._20027_39029Code.GDFloorSpikes2Objects1.length = 0;
gdjs._20027_39029Code.GDFloorSpikes2Objects2.length = 0;
gdjs._20027_39029Code.GD_9525342_9521462Objects1.length = 0;
gdjs._20027_39029Code.GD_9525342_9521462Objects2.length = 0;

gdjs._20027_39029Code.eventsList0(runtimeScene);
gdjs._20027_39029Code.GDGrassAndTreeBackgroundObjects1.length = 0;
gdjs._20027_39029Code.GDGrassAndTreeBackgroundObjects2.length = 0;
gdjs._20027_39029Code.GDNewTextObjects1.length = 0;
gdjs._20027_39029Code.GDNewTextObjects2.length = 0;
gdjs._20027_39029Code.GDNewSpriteObjects1.length = 0;
gdjs._20027_39029Code.GDNewSpriteObjects2.length = 0;
gdjs._20027_39029Code.GDNewSprite2Objects1.length = 0;
gdjs._20027_39029Code.GDNewSprite2Objects2.length = 0;
gdjs._20027_39029Code.GDGunObjects1.length = 0;
gdjs._20027_39029Code.GDGunObjects2.length = 0;
gdjs._20027_39029Code.GDaboutObjects1.length = 0;
gdjs._20027_39029Code.GDaboutObjects2.length = 0;
gdjs._20027_39029Code.GDSTARTObjects1.length = 0;
gdjs._20027_39029Code.GDSTARTObjects2.length = 0;
gdjs._20027_39029Code.GDNewSprite5Objects1.length = 0;
gdjs._20027_39029Code.GDNewSprite5Objects2.length = 0;
gdjs._20027_39029Code.GDNewText2Objects1.length = 0;
gdjs._20027_39029Code.GDNewText2Objects2.length = 0;
gdjs._20027_39029Code.GDCloseRoundButtonObjects1.length = 0;
gdjs._20027_39029Code.GDCloseRoundButtonObjects2.length = 0;
gdjs._20027_39029Code.GDDog2Objects1.length = 0;
gdjs._20027_39029Code.GDDog2Objects2.length = 0;
gdjs._20027_39029Code.GDNewSprite3Objects1.length = 0;
gdjs._20027_39029Code.GDNewSprite3Objects2.length = 0;
gdjs._20027_39029Code.GDCopperReObjects1.length = 0;
gdjs._20027_39029Code.GDCopperReObjects2.length = 0;
gdjs._20027_39029Code.GDOrangeFlatBarObjects1.length = 0;
gdjs._20027_39029Code.GDOrangeFlatBarObjects2.length = 0;
gdjs._20027_39029Code.GDDollarsBagObjects1.length = 0;
gdjs._20027_39029Code.GDDollarsBagObjects2.length = 0;
gdjs._20027_39029Code.GDDoorObjects1.length = 0;
gdjs._20027_39029Code.GDDoorObjects2.length = 0;
gdjs._20027_39029Code.GDGoldKeyObjects1.length = 0;
gdjs._20027_39029Code.GDGoldKeyObjects2.length = 0;
gdjs._20027_39029Code.GD_9536947_9520855_9526694Objects1.length = 0;
gdjs._20027_39029Code.GD_9536947_9520855_9526694Objects2.length = 0;
gdjs._20027_39029Code.GD_9520851_9538381Objects1.length = 0;
gdjs._20027_39029Code.GD_9520851_9538381Objects2.length = 0;
gdjs._20027_39029Code.GD_9521512_9537329_9530002_9595_9536947_9520855Objects1.length = 0;
gdjs._20027_39029Code.GD_9521512_9537329_9530002_9595_9536947_9520855Objects2.length = 0;
gdjs._20027_39029Code.GDNewSprite4Objects1.length = 0;
gdjs._20027_39029Code.GDNewSprite4Objects2.length = 0;
gdjs._20027_39029Code.GDRETURNObjects1.length = 0;
gdjs._20027_39029Code.GDRETURNObjects2.length = 0;
gdjs._20027_39029Code.GDRESTARTObjects1.length = 0;
gdjs._20027_39029Code.GDRESTARTObjects2.length = 0;
gdjs._20027_39029Code.GDyouaredeadObjects1.length = 0;
gdjs._20027_39029Code.GDyouaredeadObjects2.length = 0;
gdjs._20027_39029Code.GDLaserObjects1.length = 0;
gdjs._20027_39029Code.GDLaserObjects2.length = 0;
gdjs._20027_39029Code.GDFloorSpikes2Objects1.length = 0;
gdjs._20027_39029Code.GDFloorSpikes2Objects2.length = 0;
gdjs._20027_39029Code.GD_9525342_9521462Objects1.length = 0;
gdjs._20027_39029Code.GD_9525342_9521462Objects2.length = 0;


return;

}

gdjs['_20027_39029Code'] = gdjs._20027_39029Code;
