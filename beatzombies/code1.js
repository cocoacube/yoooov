gdjs.startCode = {};
gdjs.startCode.localVariables = [];
gdjs.startCode.GDForestBackgroundObjects1= [];
gdjs.startCode.GDForestBackgroundObjects2= [];
gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1= [];
gdjs.startCode.GDOrangeButtonWithStoneFrameObjects2= [];
gdjs.startCode.GDNewSpriteObjects1= [];
gdjs.startCode.GDNewSpriteObjects2= [];
gdjs.startCode.GDNewTextObjects1= [];
gdjs.startCode.GDNewTextObjects2= [];


gdjs.startCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OrangeButtonWithStoneFrame"), gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1[k] = gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15252748);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ca44b353329c01e524b4c1fcfe96d920ccee61db1506cc5a394477caad66f759_MetalV1_Jump_Land_01.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OrangeButtonWithStoneFrame"), gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1[k] = gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level 1", false);
}}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDForestBackgroundObjects1.length = 0;
gdjs.startCode.GDForestBackgroundObjects2.length = 0;
gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1.length = 0;
gdjs.startCode.GDOrangeButtonWithStoneFrameObjects2.length = 0;
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;

gdjs.startCode.eventsList0(runtimeScene);
gdjs.startCode.GDForestBackgroundObjects1.length = 0;
gdjs.startCode.GDForestBackgroundObjects2.length = 0;
gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1.length = 0;
gdjs.startCode.GDOrangeButtonWithStoneFrameObjects2.length = 0;
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['startCode'] = gdjs.startCode;
