gdjs._22833_36133Code = {};
gdjs._22833_36133Code.localVariables = [];
gdjs._22833_36133Code.GDNewTextObjects1= [];
gdjs._22833_36133Code.GDNewTextObjects2= [];
gdjs._22833_36133Code.GDBrownButtonWithShadowObjects1= [];
gdjs._22833_36133Code.GDBrownButtonWithShadowObjects2= [];


gdjs._22833_36133Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow"), gdjs._22833_36133Code.GDBrownButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._22833_36133Code.GDBrownButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs._22833_36133Code.GDBrownButtonWithShadowObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._22833_36133Code.GDBrownButtonWithShadowObjects1[k] = gdjs._22833_36133Code.GDBrownButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs._22833_36133Code.GDBrownButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "开始界面", false);
}}

}


};

gdjs._22833_36133Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._22833_36133Code.GDNewTextObjects1.length = 0;
gdjs._22833_36133Code.GDNewTextObjects2.length = 0;
gdjs._22833_36133Code.GDBrownButtonWithShadowObjects1.length = 0;
gdjs._22833_36133Code.GDBrownButtonWithShadowObjects2.length = 0;

gdjs._22833_36133Code.eventsList0(runtimeScene);
gdjs._22833_36133Code.GDNewTextObjects1.length = 0;
gdjs._22833_36133Code.GDNewTextObjects2.length = 0;
gdjs._22833_36133Code.GDBrownButtonWithShadowObjects1.length = 0;
gdjs._22833_36133Code.GDBrownButtonWithShadowObjects2.length = 0;


return;

}

gdjs['_22833_36133Code'] = gdjs._22833_36133Code;
