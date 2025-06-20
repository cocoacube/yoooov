gdjs.startCode = {};
gdjs.startCode.localVariables = [];
gdjs.startCode.GDGrass1Objects1= [];
gdjs.startCode.GDGrass1Objects2= [];
gdjs.startCode.GDDinoVitaObjects1= [];
gdjs.startCode.GDDinoVitaObjects2= [];
gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1= [];
gdjs.startCode.GDOrangeButtonWithStoneFrameObjects2= [];
gdjs.startCode.GDNewSpriteObjects1= [];
gdjs.startCode.GDNewSpriteObjects2= [];
gdjs.startCode.GDNewTextObjects1= [];
gdjs.startCode.GDNewTextObjects2= [];
gdjs.startCode.GDDroid2ImpactObjects1= [];
gdjs.startCode.GDDroid2ImpactObjects2= [];
gdjs.startCode.GDNewText2Objects1= [];
gdjs.startCode.GDNewText2Objects2= [];
gdjs.startCode.GDStartButtonObjects1= [];
gdjs.startCode.GDStartButtonObjects2= [];


gdjs.startCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OrangeButtonWithStoneFrame"), gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1[k] = gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.input.showCursor(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GAME", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Droid2Impact"), gdjs.startCode.GDDroid2ImpactObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDDroid2ImpactObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDDroid2ImpactObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDDroid2ImpactObjects1[k] = gdjs.startCode.GDDroid2ImpactObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDDroid2ImpactObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "说名", false);
}}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDGrass1Objects1.length = 0;
gdjs.startCode.GDGrass1Objects2.length = 0;
gdjs.startCode.GDDinoVitaObjects1.length = 0;
gdjs.startCode.GDDinoVitaObjects2.length = 0;
gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1.length = 0;
gdjs.startCode.GDOrangeButtonWithStoneFrameObjects2.length = 0;
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;
gdjs.startCode.GDDroid2ImpactObjects1.length = 0;
gdjs.startCode.GDDroid2ImpactObjects2.length = 0;
gdjs.startCode.GDNewText2Objects1.length = 0;
gdjs.startCode.GDNewText2Objects2.length = 0;
gdjs.startCode.GDStartButtonObjects1.length = 0;
gdjs.startCode.GDStartButtonObjects2.length = 0;

gdjs.startCode.eventsList0(runtimeScene);
gdjs.startCode.GDGrass1Objects1.length = 0;
gdjs.startCode.GDGrass1Objects2.length = 0;
gdjs.startCode.GDDinoVitaObjects1.length = 0;
gdjs.startCode.GDDinoVitaObjects2.length = 0;
gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1.length = 0;
gdjs.startCode.GDOrangeButtonWithStoneFrameObjects2.length = 0;
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;
gdjs.startCode.GDDroid2ImpactObjects1.length = 0;
gdjs.startCode.GDDroid2ImpactObjects2.length = 0;
gdjs.startCode.GDNewText2Objects1.length = 0;
gdjs.startCode.GDNewText2Objects2.length = 0;
gdjs.startCode.GDStartButtonObjects1.length = 0;
gdjs.startCode.GDStartButtonObjects2.length = 0;


return;

}

gdjs['startCode'] = gdjs.startCode;
