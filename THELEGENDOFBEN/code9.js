gdjs.bossdieCode = {};
gdjs.bossdieCode.localVariables = [];
gdjs.bossdieCode.GDNewSpriteObjects1= [];
gdjs.bossdieCode.GDNewSpriteObjects2= [];
gdjs.bossdieCode.GDNewBitmapTextObjects1= [];
gdjs.bossdieCode.GDNewBitmapTextObjects2= [];
gdjs.bossdieCode.GDOrangeButtonWithStoneFrameObjects1= [];
gdjs.bossdieCode.GDOrangeButtonWithStoneFrameObjects2= [];


gdjs.bossdieCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OrangeButtonWithStoneFrame"), gdjs.bossdieCode.GDOrangeButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossdieCode.GDOrangeButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.bossdieCode.GDOrangeButtonWithStoneFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.bossdieCode.GDOrangeButtonWithStoneFrameObjects1[k] = gdjs.bossdieCode.GDOrangeButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.bossdieCode.GDOrangeButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", false);
}}

}


};

gdjs.bossdieCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.bossdieCode.GDNewSpriteObjects1.length = 0;
gdjs.bossdieCode.GDNewSpriteObjects2.length = 0;
gdjs.bossdieCode.GDNewBitmapTextObjects1.length = 0;
gdjs.bossdieCode.GDNewBitmapTextObjects2.length = 0;
gdjs.bossdieCode.GDOrangeButtonWithStoneFrameObjects1.length = 0;
gdjs.bossdieCode.GDOrangeButtonWithStoneFrameObjects2.length = 0;

gdjs.bossdieCode.eventsList0(runtimeScene);
gdjs.bossdieCode.GDNewSpriteObjects1.length = 0;
gdjs.bossdieCode.GDNewSpriteObjects2.length = 0;
gdjs.bossdieCode.GDNewBitmapTextObjects1.length = 0;
gdjs.bossdieCode.GDNewBitmapTextObjects2.length = 0;
gdjs.bossdieCode.GDOrangeButtonWithStoneFrameObjects1.length = 0;
gdjs.bossdieCode.GDOrangeButtonWithStoneFrameObjects2.length = 0;


return;

}

gdjs['bossdieCode'] = gdjs.bossdieCode;
