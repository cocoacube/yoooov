gdjs.game_32overCode = {};
gdjs.game_32overCode.localVariables = [];
gdjs.game_32overCode.GDNewTextObjects1= [];
gdjs.game_32overCode.GDNewTextObjects2= [];
gdjs.game_32overCode.GDRedButtonWithStoneFrameObjects1= [];
gdjs.game_32overCode.GDRedButtonWithStoneFrameObjects2= [];


gdjs.game_32overCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "d98dcd316cae27b2e5896d7fe856218da9e81006db0c099059a8d7f670b791d4_Satin Danger.aac", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithStoneFrame"), gdjs.game_32overCode.GDRedButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.game_32overCode.GDRedButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.game_32overCode.GDRedButtonWithStoneFrameObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.game_32overCode.GDRedButtonWithStoneFrameObjects1[k] = gdjs.game_32overCode.GDRedButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.game_32overCode.GDRedButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MAP 1", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "44753b4d3c538ac8b8af26578feab2d0ad562856703bbe64f0b7fc64d8003778_Click_04.aac", false, 100, 1);
}}

}


};

gdjs.game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32overCode.GDNewTextObjects1.length = 0;
gdjs.game_32overCode.GDNewTextObjects2.length = 0;
gdjs.game_32overCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.game_32overCode.GDRedButtonWithStoneFrameObjects2.length = 0;

gdjs.game_32overCode.eventsList0(runtimeScene);
gdjs.game_32overCode.GDNewTextObjects1.length = 0;
gdjs.game_32overCode.GDNewTextObjects2.length = 0;
gdjs.game_32overCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.game_32overCode.GDRedButtonWithStoneFrameObjects2.length = 0;


return;

}

gdjs['game_32overCode'] = gdjs.game_32overCode;
