gdjs.finishCode = {};
gdjs.finishCode.localVariables = [];
gdjs.finishCode.GDNewSpriteObjects1= [];
gdjs.finishCode.GDNewSpriteObjects2= [];
gdjs.finishCode.GDNewTextObjects1= [];
gdjs.finishCode.GDNewTextObjects2= [];
gdjs.finishCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.finishCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];


gdjs.finishCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.finishCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.finishCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.finishCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.finishCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.finishCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.finishCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "de0fe8d42aebd1dc02c6eda7af3e60e4cad68a1cc68a47356d87106b1a2c7637_Funky Energy Loop.aac", false, 60, 1.25);
}}

}


};

gdjs.finishCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.finishCode.GDNewSpriteObjects1.length = 0;
gdjs.finishCode.GDNewSpriteObjects2.length = 0;
gdjs.finishCode.GDNewTextObjects1.length = 0;
gdjs.finishCode.GDNewTextObjects2.length = 0;
gdjs.finishCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.finishCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;

gdjs.finishCode.eventsList0(runtimeScene);
gdjs.finishCode.GDNewSpriteObjects1.length = 0;
gdjs.finishCode.GDNewSpriteObjects2.length = 0;
gdjs.finishCode.GDNewTextObjects1.length = 0;
gdjs.finishCode.GDNewTextObjects2.length = 0;
gdjs.finishCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.finishCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;


return;

}

gdjs['finishCode'] = gdjs.finishCode;
