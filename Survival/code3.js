gdjs.LevelChooseCode = {};
gdjs.LevelChooseCode.localVariables = [];
gdjs.LevelChooseCode.GDNewSpriteObjects1= [];
gdjs.LevelChooseCode.GDNewSpriteObjects2= [];
gdjs.LevelChooseCode.GDLevel_9595_95951Objects1= [];
gdjs.LevelChooseCode.GDLevel_9595_95951Objects2= [];
gdjs.LevelChooseCode.GDLevel_9595_95952Objects1= [];
gdjs.LevelChooseCode.GDLevel_9595_95952Objects2= [];
gdjs.LevelChooseCode.GDNewSprite2Objects1= [];
gdjs.LevelChooseCode.GDNewSprite2Objects2= [];
gdjs.LevelChooseCode.GDOnScreenControlsButtonObjects1= [];
gdjs.LevelChooseCode.GDOnScreenControlsButtonObjects2= [];
gdjs.LevelChooseCode.GDLevel_9595_95953Objects1= [];
gdjs.LevelChooseCode.GDLevel_9595_95953Objects2= [];
gdjs.LevelChooseCode.GDLevel_9595_95954Objects1= [];
gdjs.LevelChooseCode.GDLevel_9595_95954Objects2= [];
gdjs.LevelChooseCode.GDFloatTextObjects1= [];
gdjs.LevelChooseCode.GDFloatTextObjects2= [];


gdjs.LevelChooseCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "e1e650f2510bc0db5c39f0cc50b54026771bc3a1ca60f393928cee4c3b137559_50 - haunted forest of iarnvid.aac", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level__1"), gdjs.LevelChooseCode.GDLevel_9595_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelChooseCode.GDLevel_9595_95951Objects1.length;i<l;++i) {
    if ( gdjs.LevelChooseCode.GDLevel_9595_95951Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelChooseCode.GDLevel_9595_95951Objects1[k] = gdjs.LevelChooseCode.GDLevel_9595_95951Objects1[i];
        ++k;
    }
}
gdjs.LevelChooseCode.GDLevel_9595_95951Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.unloadAllAudio(runtimeScene);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "f5d3ffae911b06f5a36cc912f77f25acdd0a6e0e2fad464b2a524ec3064881f2_Click_03.aac", false, 100, 0.8);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "First Level", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level__2"), gdjs.LevelChooseCode.GDLevel_9595_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelChooseCode.GDLevel_9595_95952Objects1.length;i<l;++i) {
    if ( gdjs.LevelChooseCode.GDLevel_9595_95952Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelChooseCode.GDLevel_9595_95952Objects1[k] = gdjs.LevelChooseCode.GDLevel_9595_95952Objects1[i];
        ++k;
    }
}
gdjs.LevelChooseCode.GDLevel_9595_95952Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.unloadAllAudio(runtimeScene);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "f5d3ffae911b06f5a36cc912f77f25acdd0a6e0e2fad464b2a524ec3064881f2_Click_03.aac", false, 100, 0.8);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Second Level", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level__3"), gdjs.LevelChooseCode.GDLevel_9595_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelChooseCode.GDLevel_9595_95953Objects1.length;i<l;++i) {
    if ( gdjs.LevelChooseCode.GDLevel_9595_95953Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelChooseCode.GDLevel_9595_95953Objects1[k] = gdjs.LevelChooseCode.GDLevel_9595_95953Objects1[i];
        ++k;
    }
}
gdjs.LevelChooseCode.GDLevel_9595_95953Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.unloadAllAudio(runtimeScene);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "f5d3ffae911b06f5a36cc912f77f25acdd0a6e0e2fad464b2a524ec3064881f2_Click_03.aac", false, 100, 0.8);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Third Level", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level__4"), gdjs.LevelChooseCode.GDLevel_9595_95954Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelChooseCode.GDLevel_9595_95954Objects1.length;i<l;++i) {
    if ( gdjs.LevelChooseCode.GDLevel_9595_95954Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelChooseCode.GDLevel_9595_95954Objects1[k] = gdjs.LevelChooseCode.GDLevel_9595_95954Objects1[i];
        ++k;
    }
}
gdjs.LevelChooseCode.GDLevel_9595_95954Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.unloadAllAudio(runtimeScene);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "f5d3ffae911b06f5a36cc912f77f25acdd0a6e0e2fad464b2a524ec3064881f2_Click_03.aac", false, 100, 0.8);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fourth Level", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.LevelChooseCode.GDOnScreenControlsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelChooseCode.GDOnScreenControlsButtonObjects1.length;i<l;++i) {
    if ( gdjs.LevelChooseCode.GDOnScreenControlsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelChooseCode.GDOnScreenControlsButtonObjects1[k] = gdjs.LevelChooseCode.GDOnScreenControlsButtonObjects1[i];
        ++k;
    }
}
gdjs.LevelChooseCode.GDOnScreenControlsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.unloadAllAudio(runtimeScene);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "f5d3ffae911b06f5a36cc912f77f25acdd0a6e0e2fad464b2a524ec3064881f2_Click_03.aac", false, 100, 0.8);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "UI", false);
}}

}


};

gdjs.LevelChooseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelChooseCode.GDNewSpriteObjects1.length = 0;
gdjs.LevelChooseCode.GDNewSpriteObjects2.length = 0;
gdjs.LevelChooseCode.GDLevel_9595_95951Objects1.length = 0;
gdjs.LevelChooseCode.GDLevel_9595_95951Objects2.length = 0;
gdjs.LevelChooseCode.GDLevel_9595_95952Objects1.length = 0;
gdjs.LevelChooseCode.GDLevel_9595_95952Objects2.length = 0;
gdjs.LevelChooseCode.GDNewSprite2Objects1.length = 0;
gdjs.LevelChooseCode.GDNewSprite2Objects2.length = 0;
gdjs.LevelChooseCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.LevelChooseCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.LevelChooseCode.GDLevel_9595_95953Objects1.length = 0;
gdjs.LevelChooseCode.GDLevel_9595_95953Objects2.length = 0;
gdjs.LevelChooseCode.GDLevel_9595_95954Objects1.length = 0;
gdjs.LevelChooseCode.GDLevel_9595_95954Objects2.length = 0;
gdjs.LevelChooseCode.GDFloatTextObjects1.length = 0;
gdjs.LevelChooseCode.GDFloatTextObjects2.length = 0;

gdjs.LevelChooseCode.eventsList0(runtimeScene);
gdjs.LevelChooseCode.GDNewSpriteObjects1.length = 0;
gdjs.LevelChooseCode.GDNewSpriteObjects2.length = 0;
gdjs.LevelChooseCode.GDLevel_9595_95951Objects1.length = 0;
gdjs.LevelChooseCode.GDLevel_9595_95951Objects2.length = 0;
gdjs.LevelChooseCode.GDLevel_9595_95952Objects1.length = 0;
gdjs.LevelChooseCode.GDLevel_9595_95952Objects2.length = 0;
gdjs.LevelChooseCode.GDNewSprite2Objects1.length = 0;
gdjs.LevelChooseCode.GDNewSprite2Objects2.length = 0;
gdjs.LevelChooseCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.LevelChooseCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.LevelChooseCode.GDLevel_9595_95953Objects1.length = 0;
gdjs.LevelChooseCode.GDLevel_9595_95953Objects2.length = 0;
gdjs.LevelChooseCode.GDLevel_9595_95954Objects1.length = 0;
gdjs.LevelChooseCode.GDLevel_9595_95954Objects2.length = 0;
gdjs.LevelChooseCode.GDFloatTextObjects1.length = 0;
gdjs.LevelChooseCode.GDFloatTextObjects2.length = 0;


return;

}

gdjs['LevelChooseCode'] = gdjs.LevelChooseCode;
