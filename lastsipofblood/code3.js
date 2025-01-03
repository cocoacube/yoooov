gdjs.WinCode = {};
gdjs.WinCode.localVariables = [];
gdjs.WinCode.GDNewSpriteObjects1= [];
gdjs.WinCode.GDNewSpriteObjects2= [];
gdjs.WinCode.GDNewSprite2Objects1= [];
gdjs.WinCode.GDNewSprite2Objects2= [];
gdjs.WinCode.GDNewTextObjects1= [];
gdjs.WinCode.GDNewTextObjects2= [];
gdjs.WinCode.GDNewText2Objects1= [];
gdjs.WinCode.GDNewText2Objects2= [];
gdjs.WinCode.GDNewSprite3Objects1= [];
gdjs.WinCode.GDNewSprite3Objects2= [];
gdjs.WinCode.GDRedButtonWithStoneFrameObjects1= [];
gdjs.WinCode.GDRedButtonWithStoneFrameObjects2= [];


gdjs.WinCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "a8c8916ac81f64f9904c4bdc5ce43bbdeb08331be4889455a2ecca7e38551a68_Finally See The Light.aac", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithStoneFrame"), gdjs.WinCode.GDRedButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinCode.GDRedButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.WinCode.GDRedButtonWithStoneFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WinCode.GDRedButtonWithStoneFrameObjects1[k] = gdjs.WinCode.GDRedButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.WinCode.GDRedButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "44753b4d3c538ac8b8af26578feab2d0ad562856703bbe64f0b7fc64d8003778_Click_04.aac", false, 100, 1);
}}

}


};

gdjs.WinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinCode.GDNewSpriteObjects1.length = 0;
gdjs.WinCode.GDNewSpriteObjects2.length = 0;
gdjs.WinCode.GDNewSprite2Objects1.length = 0;
gdjs.WinCode.GDNewSprite2Objects2.length = 0;
gdjs.WinCode.GDNewTextObjects1.length = 0;
gdjs.WinCode.GDNewTextObjects2.length = 0;
gdjs.WinCode.GDNewText2Objects1.length = 0;
gdjs.WinCode.GDNewText2Objects2.length = 0;
gdjs.WinCode.GDNewSprite3Objects1.length = 0;
gdjs.WinCode.GDNewSprite3Objects2.length = 0;
gdjs.WinCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.WinCode.GDRedButtonWithStoneFrameObjects2.length = 0;

gdjs.WinCode.eventsList0(runtimeScene);
gdjs.WinCode.GDNewSpriteObjects1.length = 0;
gdjs.WinCode.GDNewSpriteObjects2.length = 0;
gdjs.WinCode.GDNewSprite2Objects1.length = 0;
gdjs.WinCode.GDNewSprite2Objects2.length = 0;
gdjs.WinCode.GDNewTextObjects1.length = 0;
gdjs.WinCode.GDNewTextObjects2.length = 0;
gdjs.WinCode.GDNewText2Objects1.length = 0;
gdjs.WinCode.GDNewText2Objects2.length = 0;
gdjs.WinCode.GDNewSprite3Objects1.length = 0;
gdjs.WinCode.GDNewSprite3Objects2.length = 0;
gdjs.WinCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.WinCode.GDRedButtonWithStoneFrameObjects2.length = 0;


return;

}

gdjs['WinCode'] = gdjs.WinCode;
