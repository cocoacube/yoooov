gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.GDGreenButtonWithStoneFrameObjects1= [];
gdjs.menuCode.GDGreenButtonWithStoneFrameObjects2= [];
gdjs.menuCode.GDOrangeButtonWithStoneFrameObjects1= [];
gdjs.menuCode.GDOrangeButtonWithStoneFrameObjects2= [];
gdjs.menuCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.menuCode.GDPurpleButtonWithStoneFrameObjects2= [];
gdjs.menuCode.GDNewTextObjects1= [];
gdjs.menuCode.GDNewTextObjects2= [];
gdjs.menuCode.GDNewBitmapTextObjects1= [];
gdjs.menuCode.GDNewBitmapTextObjects2= [];
gdjs.menuCode.GDNewSprite2Objects1= [];
gdjs.menuCode.GDNewSprite2Objects2= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.menuCode.GDPurpleButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDPurpleButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDPurpleButtonWithStoneFrameObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDPurpleButtonWithStoneFrameObjects1[k] = gdjs.menuCode.GDPurpleButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDPurpleButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OrangeButtonWithStoneFrame"), gdjs.menuCode.GDOrangeButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDOrangeButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDOrangeButtonWithStoneFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDOrangeButtonWithStoneFrameObjects1[k] = gdjs.menuCode.GDOrangeButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDOrangeButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "train", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithStoneFrame"), gdjs.menuCode.GDGreenButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDGreenButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDGreenButtonWithStoneFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDGreenButtonWithStoneFrameObjects1[k] = gdjs.menuCode.GDGreenButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDGreenButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs.menuCode.GDGreenButtonWithStoneFrameObjects2.length = 0;
gdjs.menuCode.GDOrangeButtonWithStoneFrameObjects1.length = 0;
gdjs.menuCode.GDOrangeButtonWithStoneFrameObjects2.length = 0;
gdjs.menuCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.menuCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.menuCode.GDNewTextObjects1.length = 0;
gdjs.menuCode.GDNewTextObjects2.length = 0;
gdjs.menuCode.GDNewBitmapTextObjects1.length = 0;
gdjs.menuCode.GDNewBitmapTextObjects2.length = 0;
gdjs.menuCode.GDNewSprite2Objects1.length = 0;
gdjs.menuCode.GDNewSprite2Objects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
gdjs.menuCode.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs.menuCode.GDGreenButtonWithStoneFrameObjects2.length = 0;
gdjs.menuCode.GDOrangeButtonWithStoneFrameObjects1.length = 0;
gdjs.menuCode.GDOrangeButtonWithStoneFrameObjects2.length = 0;
gdjs.menuCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.menuCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.menuCode.GDNewTextObjects1.length = 0;
gdjs.menuCode.GDNewTextObjects2.length = 0;
gdjs.menuCode.GDNewBitmapTextObjects1.length = 0;
gdjs.menuCode.GDNewBitmapTextObjects2.length = 0;
gdjs.menuCode.GDNewSprite2Objects1.length = 0;
gdjs.menuCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
