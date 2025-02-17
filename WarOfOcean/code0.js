gdjs.startCode = {};
gdjs.startCode.localVariables = [];
gdjs.startCode.GDoceanObjects1= [];
gdjs.startCode.GDoceanObjects2= [];
gdjs.startCode.GDNewTextObjects1= [];
gdjs.startCode.GDNewTextObjects2= [];
gdjs.startCode.GDNewSpriteObjects1= [];
gdjs.startCode.GDNewSpriteObjects2= [];
gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];


gdjs.startCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "dock", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "dock", false);
}}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDoceanObjects1.length = 0;
gdjs.startCode.GDoceanObjects2.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;

gdjs.startCode.eventsList0(runtimeScene);
gdjs.startCode.GDoceanObjects1.length = 0;
gdjs.startCode.GDoceanObjects2.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;


return;

}

gdjs['startCode'] = gdjs.startCode;
