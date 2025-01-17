gdjs.AboutCode = {};
gdjs.AboutCode.localVariables = [];
gdjs.AboutCode.GDNewSpriteObjects1= [];
gdjs.AboutCode.GDNewSpriteObjects2= [];
gdjs.AboutCode.GDNewTextObjects1= [];
gdjs.AboutCode.GDNewTextObjects2= [];
gdjs.AboutCode.GDRedButtonWithShadowObjects1= [];
gdjs.AboutCode.GDRedButtonWithShadowObjects2= [];


gdjs.AboutCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.AboutCode.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AboutCode.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.AboutCode.GDRedButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.AboutCode.GDRedButtonWithShadowObjects1[k] = gdjs.AboutCode.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.AboutCode.GDRedButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "f5d3ffae911b06f5a36cc912f77f25acdd0a6e0e2fad464b2a524ec3064881f2_Click_03.aac", false, 100, 0.8);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "UI", true);
}}

}


};

gdjs.AboutCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AboutCode.GDNewSpriteObjects1.length = 0;
gdjs.AboutCode.GDNewSpriteObjects2.length = 0;
gdjs.AboutCode.GDNewTextObjects1.length = 0;
gdjs.AboutCode.GDNewTextObjects2.length = 0;
gdjs.AboutCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.AboutCode.GDRedButtonWithShadowObjects2.length = 0;

gdjs.AboutCode.eventsList0(runtimeScene);
gdjs.AboutCode.GDNewSpriteObjects1.length = 0;
gdjs.AboutCode.GDNewSpriteObjects2.length = 0;
gdjs.AboutCode.GDNewTextObjects1.length = 0;
gdjs.AboutCode.GDNewTextObjects2.length = 0;
gdjs.AboutCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.AboutCode.GDRedButtonWithShadowObjects2.length = 0;


return;

}

gdjs['AboutCode'] = gdjs.AboutCode;
