gdjs.SuccessCode = {};
gdjs.SuccessCode.localVariables = [];
gdjs.SuccessCode.GDmissionObjects1= [];
gdjs.SuccessCode.GDmissionObjects2= [];
gdjs.SuccessCode.GDstatObjects1= [];
gdjs.SuccessCode.GDstatObjects2= [];
gdjs.SuccessCode.GDNewSprite3Objects1= [];
gdjs.SuccessCode.GDNewSprite3Objects2= [];
gdjs.SuccessCode.GDplatObjects1= [];
gdjs.SuccessCode.GDplatObjects2= [];


gdjs.SuccessCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("plat"), gdjs.SuccessCode.GDplatObjects1);
{for(var i = 0, len = gdjs.SuccessCode.GDplatObjects1.length ;i < len;++i) {
    gdjs.SuccessCode.GDplatObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "937fcf8d0cab03061661ab5a55a5aa28d11476493348612e54a716a4bbbe7bc6_Complete_01.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("stat"), gdjs.SuccessCode.GDstatObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SuccessCode.GDstatObjects1.length;i<l;++i) {
    if ( gdjs.SuccessCode.GDstatObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SuccessCode.GDstatObjects1[k] = gdjs.SuccessCode.GDstatObjects1[i];
        ++k;
    }
}
gdjs.SuccessCode.GDstatObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "satar", false);
}}

}


};

gdjs.SuccessCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SuccessCode.GDmissionObjects1.length = 0;
gdjs.SuccessCode.GDmissionObjects2.length = 0;
gdjs.SuccessCode.GDstatObjects1.length = 0;
gdjs.SuccessCode.GDstatObjects2.length = 0;
gdjs.SuccessCode.GDNewSprite3Objects1.length = 0;
gdjs.SuccessCode.GDNewSprite3Objects2.length = 0;
gdjs.SuccessCode.GDplatObjects1.length = 0;
gdjs.SuccessCode.GDplatObjects2.length = 0;

gdjs.SuccessCode.eventsList0(runtimeScene);
gdjs.SuccessCode.GDmissionObjects1.length = 0;
gdjs.SuccessCode.GDmissionObjects2.length = 0;
gdjs.SuccessCode.GDstatObjects1.length = 0;
gdjs.SuccessCode.GDstatObjects2.length = 0;
gdjs.SuccessCode.GDNewSprite3Objects1.length = 0;
gdjs.SuccessCode.GDNewSprite3Objects2.length = 0;
gdjs.SuccessCode.GDplatObjects1.length = 0;
gdjs.SuccessCode.GDplatObjects2.length = 0;


return;

}

gdjs['SuccessCode'] = gdjs.SuccessCode;
