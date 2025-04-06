gdjs._24320_22987Code = {};
gdjs._24320_22987Code.localVariables = [];
gdjs._24320_22987Code.GDNewSpriteObjects1= [];
gdjs._24320_22987Code.GDNewSpriteObjects2= [];
gdjs._24320_22987Code.GDNewTextObjects1= [];
gdjs._24320_22987Code.GDNewTextObjects2= [];
gdjs._24320_22987Code.GDNewText2Objects1= [];
gdjs._24320_22987Code.GDNewText2Objects2= [];
gdjs._24320_22987Code.GDRedButtonWithMetalFrameObjects1= [];
gdjs._24320_22987Code.GDRedButtonWithMetalFrameObjects2= [];
gdjs._24320_22987Code.GDRedButtonWithMetalFrame2Objects1= [];
gdjs._24320_22987Code.GDRedButtonWithMetalFrame2Objects2= [];


gdjs._24320_22987Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithMetalFrame"), gdjs._24320_22987Code.GDRedButtonWithMetalFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._24320_22987Code.GDRedButtonWithMetalFrameObjects1.length;i<l;++i) {
    if ( gdjs._24320_22987Code.GDRedButtonWithMetalFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._24320_22987Code.GDRedButtonWithMetalFrameObjects1[k] = gdjs._24320_22987Code.GDRedButtonWithMetalFrameObjects1[i];
        ++k;
    }
}
gdjs._24320_22987Code.GDRedButtonWithMetalFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithMetalFrame2"), gdjs._24320_22987Code.GDRedButtonWithMetalFrame2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._24320_22987Code.GDRedButtonWithMetalFrame2Objects1.length;i<l;++i) {
    if ( gdjs._24320_22987Code.GDRedButtonWithMetalFrame2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._24320_22987Code.GDRedButtonWithMetalFrame2Objects1[k] = gdjs._24320_22987Code.GDRedButtonWithMetalFrame2Objects1[i];
        ++k;
    }
}
gdjs._24320_22987Code.GDRedButtonWithMetalFrame2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "前线", false);
}}

}


};

gdjs._24320_22987Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._24320_22987Code.GDNewSpriteObjects1.length = 0;
gdjs._24320_22987Code.GDNewSpriteObjects2.length = 0;
gdjs._24320_22987Code.GDNewTextObjects1.length = 0;
gdjs._24320_22987Code.GDNewTextObjects2.length = 0;
gdjs._24320_22987Code.GDNewText2Objects1.length = 0;
gdjs._24320_22987Code.GDNewText2Objects2.length = 0;
gdjs._24320_22987Code.GDRedButtonWithMetalFrameObjects1.length = 0;
gdjs._24320_22987Code.GDRedButtonWithMetalFrameObjects2.length = 0;
gdjs._24320_22987Code.GDRedButtonWithMetalFrame2Objects1.length = 0;
gdjs._24320_22987Code.GDRedButtonWithMetalFrame2Objects2.length = 0;

gdjs._24320_22987Code.eventsList0(runtimeScene);
gdjs._24320_22987Code.GDNewSpriteObjects1.length = 0;
gdjs._24320_22987Code.GDNewSpriteObjects2.length = 0;
gdjs._24320_22987Code.GDNewTextObjects1.length = 0;
gdjs._24320_22987Code.GDNewTextObjects2.length = 0;
gdjs._24320_22987Code.GDNewText2Objects1.length = 0;
gdjs._24320_22987Code.GDNewText2Objects2.length = 0;
gdjs._24320_22987Code.GDRedButtonWithMetalFrameObjects1.length = 0;
gdjs._24320_22987Code.GDRedButtonWithMetalFrameObjects2.length = 0;
gdjs._24320_22987Code.GDRedButtonWithMetalFrame2Objects1.length = 0;
gdjs._24320_22987Code.GDRedButtonWithMetalFrame2Objects2.length = 0;


return;

}

gdjs['_24320_22987Code'] = gdjs._24320_22987Code;
