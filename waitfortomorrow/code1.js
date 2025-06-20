gdjs.choosecardCode = {};
gdjs.choosecardCode.localVariables = [];
gdjs.choosecardCode.GDNewSpriteObjects1= [];
gdjs.choosecardCode.GDNewSpriteObjects2= [];
gdjs.choosecardCode.GDNewSprite2Objects1= [];
gdjs.choosecardCode.GDNewSprite2Objects2= [];
gdjs.choosecardCode.GDNewSprite3Objects1= [];
gdjs.choosecardCode.GDNewSprite3Objects2= [];
gdjs.choosecardCode.GDRedPotionObjects1= [];
gdjs.choosecardCode.GDRedPotionObjects2= [];
gdjs.choosecardCode.GDYellowPotionObjects1= [];
gdjs.choosecardCode.GDYellowPotionObjects2= [];
gdjs.choosecardCode.GDBluePotionObjects1= [];
gdjs.choosecardCode.GDBluePotionObjects2= [];
gdjs.choosecardCode.GDBombObjects1= [];
gdjs.choosecardCode.GDBombObjects2= [];
gdjs.choosecardCode.GDNewTextObjects1= [];
gdjs.choosecardCode.GDNewTextObjects2= [];
gdjs.choosecardCode.GDNewText2Objects1= [];
gdjs.choosecardCode.GDNewText2Objects2= [];
gdjs.choosecardCode.GDNewText3Objects1= [];
gdjs.choosecardCode.GDNewText3Objects2= [];
gdjs.choosecardCode.GDHeart2Objects1= [];
gdjs.choosecardCode.GDHeart2Objects2= [];
gdjs.choosecardCode.GDJIAObjects1= [];
gdjs.choosecardCode.GDJIAObjects2= [];
gdjs.choosecardCode.GDJIA2Objects1= [];
gdjs.choosecardCode.GDJIA2Objects2= [];
gdjs.choosecardCode.GDLeatherShoesObjects1= [];
gdjs.choosecardCode.GDLeatherShoesObjects2= [];
gdjs.choosecardCode.GDStartButtonObjects1= [];
gdjs.choosecardCode.GDStartButtonObjects2= [];


gdjs.choosecardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bomb"), gdjs.choosecardCode.GDBombObjects1);
{for(var i = 0, len = gdjs.choosecardCode.GDBombObjects1.length ;i < len;++i) {
    gdjs.choosecardCode.GDBombObjects1[i].getBehavior("Animation").setAnimationName("Bomb On");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedPotion"), gdjs.choosecardCode.GDRedPotionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.choosecardCode.GDRedPotionObjects1.length;i<l;++i) {
    if ( gdjs.choosecardCode.GDRedPotionObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.choosecardCode.GDRedPotionObjects1[k] = gdjs.choosecardCode.GDRedPotionObjects1[i];
        ++k;
    }
}
gdjs.choosecardCode.GDRedPotionObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowPotion"), gdjs.choosecardCode.GDYellowPotionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.choosecardCode.GDYellowPotionObjects1.length;i<l;++i) {
    if ( gdjs.choosecardCode.GDYellowPotionObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.choosecardCode.GDYellowPotionObjects1[k] = gdjs.choosecardCode.GDYellowPotionObjects1[i];
        ++k;
    }
}
gdjs.choosecardCode.GDYellowPotionObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(true);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePotion"), gdjs.choosecardCode.GDBluePotionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.choosecardCode.GDBluePotionObjects1.length;i<l;++i) {
    if ( gdjs.choosecardCode.GDBluePotionObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.choosecardCode.GDBluePotionObjects1[k] = gdjs.choosecardCode.GDBluePotionObjects1[i];
        ++k;
    }
}
gdjs.choosecardCode.GDBluePotionObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(10);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


};

gdjs.choosecardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.choosecardCode.GDNewSpriteObjects1.length = 0;
gdjs.choosecardCode.GDNewSpriteObjects2.length = 0;
gdjs.choosecardCode.GDNewSprite2Objects1.length = 0;
gdjs.choosecardCode.GDNewSprite2Objects2.length = 0;
gdjs.choosecardCode.GDNewSprite3Objects1.length = 0;
gdjs.choosecardCode.GDNewSprite3Objects2.length = 0;
gdjs.choosecardCode.GDRedPotionObjects1.length = 0;
gdjs.choosecardCode.GDRedPotionObjects2.length = 0;
gdjs.choosecardCode.GDYellowPotionObjects1.length = 0;
gdjs.choosecardCode.GDYellowPotionObjects2.length = 0;
gdjs.choosecardCode.GDBluePotionObjects1.length = 0;
gdjs.choosecardCode.GDBluePotionObjects2.length = 0;
gdjs.choosecardCode.GDBombObjects1.length = 0;
gdjs.choosecardCode.GDBombObjects2.length = 0;
gdjs.choosecardCode.GDNewTextObjects1.length = 0;
gdjs.choosecardCode.GDNewTextObjects2.length = 0;
gdjs.choosecardCode.GDNewText2Objects1.length = 0;
gdjs.choosecardCode.GDNewText2Objects2.length = 0;
gdjs.choosecardCode.GDNewText3Objects1.length = 0;
gdjs.choosecardCode.GDNewText3Objects2.length = 0;
gdjs.choosecardCode.GDHeart2Objects1.length = 0;
gdjs.choosecardCode.GDHeart2Objects2.length = 0;
gdjs.choosecardCode.GDJIAObjects1.length = 0;
gdjs.choosecardCode.GDJIAObjects2.length = 0;
gdjs.choosecardCode.GDJIA2Objects1.length = 0;
gdjs.choosecardCode.GDJIA2Objects2.length = 0;
gdjs.choosecardCode.GDLeatherShoesObjects1.length = 0;
gdjs.choosecardCode.GDLeatherShoesObjects2.length = 0;
gdjs.choosecardCode.GDStartButtonObjects1.length = 0;
gdjs.choosecardCode.GDStartButtonObjects2.length = 0;

gdjs.choosecardCode.eventsList0(runtimeScene);
gdjs.choosecardCode.GDNewSpriteObjects1.length = 0;
gdjs.choosecardCode.GDNewSpriteObjects2.length = 0;
gdjs.choosecardCode.GDNewSprite2Objects1.length = 0;
gdjs.choosecardCode.GDNewSprite2Objects2.length = 0;
gdjs.choosecardCode.GDNewSprite3Objects1.length = 0;
gdjs.choosecardCode.GDNewSprite3Objects2.length = 0;
gdjs.choosecardCode.GDRedPotionObjects1.length = 0;
gdjs.choosecardCode.GDRedPotionObjects2.length = 0;
gdjs.choosecardCode.GDYellowPotionObjects1.length = 0;
gdjs.choosecardCode.GDYellowPotionObjects2.length = 0;
gdjs.choosecardCode.GDBluePotionObjects1.length = 0;
gdjs.choosecardCode.GDBluePotionObjects2.length = 0;
gdjs.choosecardCode.GDBombObjects1.length = 0;
gdjs.choosecardCode.GDBombObjects2.length = 0;
gdjs.choosecardCode.GDNewTextObjects1.length = 0;
gdjs.choosecardCode.GDNewTextObjects2.length = 0;
gdjs.choosecardCode.GDNewText2Objects1.length = 0;
gdjs.choosecardCode.GDNewText2Objects2.length = 0;
gdjs.choosecardCode.GDNewText3Objects1.length = 0;
gdjs.choosecardCode.GDNewText3Objects2.length = 0;
gdjs.choosecardCode.GDHeart2Objects1.length = 0;
gdjs.choosecardCode.GDHeart2Objects2.length = 0;
gdjs.choosecardCode.GDJIAObjects1.length = 0;
gdjs.choosecardCode.GDJIAObjects2.length = 0;
gdjs.choosecardCode.GDJIA2Objects1.length = 0;
gdjs.choosecardCode.GDJIA2Objects2.length = 0;
gdjs.choosecardCode.GDLeatherShoesObjects1.length = 0;
gdjs.choosecardCode.GDLeatherShoesObjects2.length = 0;
gdjs.choosecardCode.GDStartButtonObjects1.length = 0;
gdjs.choosecardCode.GDStartButtonObjects2.length = 0;


return;

}

gdjs['choosecardCode'] = gdjs.choosecardCode;
