gdjs.gameoverCode = {};
gdjs.gameoverCode.localVariables = [];
gdjs.gameoverCode.GDNewSpriteObjects1= [];
gdjs.gameoverCode.GDNewSpriteObjects2= [];
gdjs.gameoverCode.GDNewSprite2Objects1= [];
gdjs.gameoverCode.GDNewSprite2Objects2= [];
gdjs.gameoverCode.GDNewSprite3Objects1= [];
gdjs.gameoverCode.GDNewSprite3Objects2= [];
gdjs.gameoverCode.GDNewSprite4Objects1= [];
gdjs.gameoverCode.GDNewSprite4Objects2= [];


gdjs.gameoverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.gameoverCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameoverCode.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.gameoverCode.GDNewSprite2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameoverCode.GDNewSprite2Objects1[k] = gdjs.gameoverCode.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.gameoverCode.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "商店界面");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.gameoverCode.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameoverCode.GDNewSprite4Objects1.length;i<l;++i) {
    if ( gdjs.gameoverCode.GDNewSprite4Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameoverCode.GDNewSprite4Objects1[k] = gdjs.gameoverCode.GDNewSprite4Objects1[i];
        ++k;
    }
}
gdjs.gameoverCode.GDNewSprite4Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).add(6);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameoverCode.GDNewSpriteObjects1.length = 0;
gdjs.gameoverCode.GDNewSpriteObjects2.length = 0;
gdjs.gameoverCode.GDNewSprite2Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite2Objects2.length = 0;
gdjs.gameoverCode.GDNewSprite3Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite3Objects2.length = 0;
gdjs.gameoverCode.GDNewSprite4Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite4Objects2.length = 0;

gdjs.gameoverCode.eventsList0(runtimeScene);
gdjs.gameoverCode.GDNewSpriteObjects1.length = 0;
gdjs.gameoverCode.GDNewSpriteObjects2.length = 0;
gdjs.gameoverCode.GDNewSprite2Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite2Objects2.length = 0;
gdjs.gameoverCode.GDNewSprite3Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite3Objects2.length = 0;
gdjs.gameoverCode.GDNewSprite4Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite4Objects2.length = 0;


return;

}

gdjs['gameoverCode'] = gdjs.gameoverCode;
