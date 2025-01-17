gdjs.LevelChooseCode = {};
gdjs.LevelChooseCode.localVariables = [];
gdjs.LevelChooseCode.GDNewSpriteObjects1= [];
gdjs.LevelChooseCode.GDNewSpriteObjects2= [];
gdjs.LevelChooseCode.GDLevel_9595_95951Objects1= [];
gdjs.LevelChooseCode.GDLevel_9595_95951Objects2= [];


gdjs.LevelChooseCode.eventsList0 = function(runtimeScene) {

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


let isConditionTrue_0 = false;
{
}

}


};

gdjs.LevelChooseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelChooseCode.GDNewSpriteObjects1.length = 0;
gdjs.LevelChooseCode.GDNewSpriteObjects2.length = 0;
gdjs.LevelChooseCode.GDLevel_9595_95951Objects1.length = 0;
gdjs.LevelChooseCode.GDLevel_9595_95951Objects2.length = 0;

gdjs.LevelChooseCode.eventsList0(runtimeScene);
gdjs.LevelChooseCode.GDNewSpriteObjects1.length = 0;
gdjs.LevelChooseCode.GDNewSpriteObjects2.length = 0;
gdjs.LevelChooseCode.GDLevel_9595_95951Objects1.length = 0;
gdjs.LevelChooseCode.GDLevel_9595_95951Objects2.length = 0;


return;

}

gdjs['LevelChooseCode'] = gdjs.LevelChooseCode;
