gdjs.UICode = {};
gdjs.UICode.localVariables = [];
gdjs.UICode.GDbackgroundObjects1= [];
gdjs.UICode.GDbackgroundObjects2= [];
gdjs.UICode.GDBlueButtonObjects1= [];
gdjs.UICode.GDBlueButtonObjects2= [];
gdjs.UICode.GDNewTextObjects1= [];
gdjs.UICode.GDNewTextObjects2= [];
gdjs.UICode.GDBlankEmoteMidObjects1= [];
gdjs.UICode.GDBlankEmoteMidObjects2= [];
gdjs.UICode.GDNewText2Objects1= [];
gdjs.UICode.GDNewText2Objects2= [];
gdjs.UICode.GDRedButtonWithShadowObjects1= [];
gdjs.UICode.GDRedButtonWithShadowObjects2= [];


gdjs.UICode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "First Level");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.UICode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.UICode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.UICode.GDBlueButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.UICode.GDBlueButtonObjects1[k] = gdjs.UICode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.UICode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.unloadAllAudio(runtimeScene);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "f5d3ffae911b06f5a36cc912f77f25acdd0a6e0e2fad464b2a524ec3064881f2_Click_03.aac", false, 100, 0.8);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelChoose", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.UICode.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.UICode.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.UICode.GDRedButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.UICode.GDRedButtonWithShadowObjects1[k] = gdjs.UICode.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.UICode.GDRedButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.unloadAllAudio(runtimeScene);
}{gdjs.evtTools.sound.playSound(runtimeScene, "f5d3ffae911b06f5a36cc912f77f25acdd0a6e0e2fad464b2a524ec3064881f2_Click_03.aac", false, 100, 0.8);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "About", true);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.UICode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.UICode.GDbackgroundObjects1.length = 0;
gdjs.UICode.GDbackgroundObjects2.length = 0;
gdjs.UICode.GDBlueButtonObjects1.length = 0;
gdjs.UICode.GDBlueButtonObjects2.length = 0;
gdjs.UICode.GDNewTextObjects1.length = 0;
gdjs.UICode.GDNewTextObjects2.length = 0;
gdjs.UICode.GDBlankEmoteMidObjects1.length = 0;
gdjs.UICode.GDBlankEmoteMidObjects2.length = 0;
gdjs.UICode.GDNewText2Objects1.length = 0;
gdjs.UICode.GDNewText2Objects2.length = 0;
gdjs.UICode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.UICode.GDRedButtonWithShadowObjects2.length = 0;

gdjs.UICode.eventsList0(runtimeScene);
gdjs.UICode.GDbackgroundObjects1.length = 0;
gdjs.UICode.GDbackgroundObjects2.length = 0;
gdjs.UICode.GDBlueButtonObjects1.length = 0;
gdjs.UICode.GDBlueButtonObjects2.length = 0;
gdjs.UICode.GDNewTextObjects1.length = 0;
gdjs.UICode.GDNewTextObjects2.length = 0;
gdjs.UICode.GDBlankEmoteMidObjects1.length = 0;
gdjs.UICode.GDBlankEmoteMidObjects2.length = 0;
gdjs.UICode.GDNewText2Objects1.length = 0;
gdjs.UICode.GDNewText2Objects2.length = 0;
gdjs.UICode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.UICode.GDRedButtonWithShadowObjects2.length = 0;


return;

}

gdjs['UICode'] = gdjs.UICode;
