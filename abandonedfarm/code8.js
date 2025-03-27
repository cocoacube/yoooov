gdjs._28216_25103_35828_26126Code = {};
gdjs._28216_25103_35828_26126Code.localVariables = [];
gdjs._28216_25103_35828_26126Code.GDNewTextObjects1= [];
gdjs._28216_25103_35828_26126Code.GDNewTextObjects2= [];
gdjs._28216_25103_35828_26126Code.GDRedButtonWithMetalFrameObjects1= [];
gdjs._28216_25103_35828_26126Code.GDRedButtonWithMetalFrameObjects2= [];


gdjs._28216_25103_35828_26126Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithMetalFrame"), gdjs._28216_25103_35828_26126Code.GDRedButtonWithMetalFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28216_25103_35828_26126Code.GDRedButtonWithMetalFrameObjects1.length;i<l;++i) {
    if ( gdjs._28216_25103_35828_26126Code.GDRedButtonWithMetalFrameObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._28216_25103_35828_26126Code.GDRedButtonWithMetalFrameObjects1[k] = gdjs._28216_25103_35828_26126Code.GDRedButtonWithMetalFrameObjects1[i];
        ++k;
    }
}
gdjs._28216_25103_35828_26126Code.GDRedButtonWithMetalFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "开始开始开始", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "aebbe6ed65e4ff42ed9fa8f7ce6259c5672dd30b6886f5478aa11cd264e8f3ee_Creepy Comedy.aac", true, 100, 1);
}}

}


};

gdjs._28216_25103_35828_26126Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._28216_25103_35828_26126Code.GDNewTextObjects1.length = 0;
gdjs._28216_25103_35828_26126Code.GDNewTextObjects2.length = 0;
gdjs._28216_25103_35828_26126Code.GDRedButtonWithMetalFrameObjects1.length = 0;
gdjs._28216_25103_35828_26126Code.GDRedButtonWithMetalFrameObjects2.length = 0;

gdjs._28216_25103_35828_26126Code.eventsList0(runtimeScene);
gdjs._28216_25103_35828_26126Code.GDNewTextObjects1.length = 0;
gdjs._28216_25103_35828_26126Code.GDNewTextObjects2.length = 0;
gdjs._28216_25103_35828_26126Code.GDRedButtonWithMetalFrameObjects1.length = 0;
gdjs._28216_25103_35828_26126Code.GDRedButtonWithMetalFrameObjects2.length = 0;


return;

}

gdjs['_28216_25103_35828_26126Code'] = gdjs._28216_25103_35828_26126Code;
