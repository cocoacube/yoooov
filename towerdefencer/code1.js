gdjs.startCode = {};
gdjs.startCode.localVariables = [];
gdjs.startCode.GDNewSpriteObjects1= [];
gdjs.startCode.GDNewSpriteObjects2= [];
gdjs.startCode.GDNewSprite2Objects1= [];
gdjs.startCode.GDNewSprite2Objects2= [];
gdjs.startCode.GDRedButtonWithStoneFrameObjects1= [];
gdjs.startCode.GDRedButtonWithStoneFrameObjects2= [];
gdjs.startCode.GDNewTextObjects1= [];
gdjs.startCode.GDNewTextObjects2= [];


gdjs.startCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithStoneFrame"), gdjs.startCode.GDRedButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDRedButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDRedButtonWithStoneFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDRedButtonWithStoneFrameObjects1[k] = gdjs.startCode.GDRedButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDRedButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithStoneFrame"), gdjs.startCode.GDRedButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDRedButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDRedButtonWithStoneFrameObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDRedButtonWithStoneFrameObjects1[k] = gdjs.startCode.GDRedButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDRedButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14308908);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "f5d3ffae911b06f5a36cc912f77f25acdd0a6e0e2fad464b2a524ec3064881f2_Click_03.aac", false, 100, 1);
}}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewSprite2Objects1.length = 0;
gdjs.startCode.GDNewSprite2Objects2.length = 0;
gdjs.startCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.startCode.GDRedButtonWithStoneFrameObjects2.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;

gdjs.startCode.eventsList0(runtimeScene);
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewSprite2Objects1.length = 0;
gdjs.startCode.GDNewSprite2Objects2.length = 0;
gdjs.startCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.startCode.GDRedButtonWithStoneFrameObjects2.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['startCode'] = gdjs.startCode;
