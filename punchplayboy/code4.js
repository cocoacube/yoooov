gdjs.succeedCode = {};
gdjs.succeedCode.localVariables = [];
gdjs.succeedCode.GDmissionObjects1= [];
gdjs.succeedCode.GDmissionObjects2= [];
gdjs.succeedCode.GDNewSprite3Objects1= [];
gdjs.succeedCode.GDNewSprite3Objects2= [];
gdjs.succeedCode.GDunderObjects1= [];
gdjs.succeedCode.GDunderObjects2= [];
gdjs.succeedCode.GDgroundObjects1= [];
gdjs.succeedCode.GDgroundObjects2= [];


gdjs.succeedCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ground"), gdjs.succeedCode.GDgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("mission"), gdjs.succeedCode.GDmissionObjects1);
{for(var i = 0, len = gdjs.succeedCode.GDgroundObjects1.length ;i < len;++i) {
    gdjs.succeedCode.GDgroundObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.succeedCode.GDmissionObjects1.length ;i < len;++i) {
    gdjs.succeedCode.GDmissionObjects1[i].getBehavior("Scale").setScale(0.2);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "mario-coin.mp3", false, 86, 1.25);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.succeedCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.succeedCode.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs.succeedCode.GDNewSprite3Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.succeedCode.GDNewSprite3Objects1[k] = gdjs.succeedCode.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs.succeedCode.GDNewSprite3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


};

gdjs.succeedCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.succeedCode.GDmissionObjects1.length = 0;
gdjs.succeedCode.GDmissionObjects2.length = 0;
gdjs.succeedCode.GDNewSprite3Objects1.length = 0;
gdjs.succeedCode.GDNewSprite3Objects2.length = 0;
gdjs.succeedCode.GDunderObjects1.length = 0;
gdjs.succeedCode.GDunderObjects2.length = 0;
gdjs.succeedCode.GDgroundObjects1.length = 0;
gdjs.succeedCode.GDgroundObjects2.length = 0;

gdjs.succeedCode.eventsList0(runtimeScene);
gdjs.succeedCode.GDmissionObjects1.length = 0;
gdjs.succeedCode.GDmissionObjects2.length = 0;
gdjs.succeedCode.GDNewSprite3Objects1.length = 0;
gdjs.succeedCode.GDNewSprite3Objects2.length = 0;
gdjs.succeedCode.GDunderObjects1.length = 0;
gdjs.succeedCode.GDunderObjects2.length = 0;
gdjs.succeedCode.GDgroundObjects1.length = 0;
gdjs.succeedCode.GDgroundObjects2.length = 0;


return;

}

gdjs['succeedCode'] = gdjs.succeedCode;
