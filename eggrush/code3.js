gdjs.Level2_462Code = {};
gdjs.Level2_462Code.localVariables = [];
gdjs.Level2_462Code.GDNewSpriteObjects1= [];
gdjs.Level2_462Code.GDNewSpriteObjects2= [];
gdjs.Level2_462Code.GDGreenButtonObjects1= [];
gdjs.Level2_462Code.GDGreenButtonObjects2= [];
gdjs.Level2_462Code.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.Level2_462Code.GDPurpleButtonWithStoneFrameObjects2= [];


gdjs.Level2_462Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.Level2_462Code.GDPurpleButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level2_462Code.GDPurpleButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.Level2_462Code.GDPurpleButtonWithStoneFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level2_462Code.GDPurpleButtonWithStoneFrameObjects1[k] = gdjs.Level2_462Code.GDPurpleButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.Level2_462Code.GDPurpleButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


};

gdjs.Level2_462Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level2_462Code.GDNewSpriteObjects1.length = 0;
gdjs.Level2_462Code.GDNewSpriteObjects2.length = 0;
gdjs.Level2_462Code.GDGreenButtonObjects1.length = 0;
gdjs.Level2_462Code.GDGreenButtonObjects2.length = 0;
gdjs.Level2_462Code.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.Level2_462Code.GDPurpleButtonWithStoneFrameObjects2.length = 0;

gdjs.Level2_462Code.eventsList0(runtimeScene);
gdjs.Level2_462Code.GDNewSpriteObjects1.length = 0;
gdjs.Level2_462Code.GDNewSpriteObjects2.length = 0;
gdjs.Level2_462Code.GDGreenButtonObjects1.length = 0;
gdjs.Level2_462Code.GDGreenButtonObjects2.length = 0;
gdjs.Level2_462Code.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.Level2_462Code.GDPurpleButtonWithStoneFrameObjects2.length = 0;


return;

}

gdjs['Level2_462Code'] = gdjs.Level2_462Code;
