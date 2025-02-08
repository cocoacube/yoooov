gdjs.SuccessCode = {};
gdjs.SuccessCode.localVariables = [];
gdjs.SuccessCode.GDNewSpriteObjects1= [];
gdjs.SuccessCode.GDNewSpriteObjects2= [];
gdjs.SuccessCode.GDNewSprite2Objects1= [];
gdjs.SuccessCode.GDNewSprite2Objects2= [];
gdjs.SuccessCode.GDNewSprite3Objects1= [];
gdjs.SuccessCode.GDNewSprite3Objects2= [];
gdjs.SuccessCode.GDNewSprite4Objects1= [];
gdjs.SuccessCode.GDNewSprite4Objects2= [];
gdjs.SuccessCode.GDNewSprite5Objects1= [];
gdjs.SuccessCode.GDNewSprite5Objects2= [];


gdjs.SuccessCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.SuccessCode.GDNewSprite5Objects1);
{for(var i = 0, len = gdjs.SuccessCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.SuccessCode.GDNewSprite5Objects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "751052bbd3de6938713ebbe8782cc3f6feba91f9e3caf27272335ac4e549c0cd_Complete_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.SuccessCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SuccessCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( !(gdjs.SuccessCode.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.SuccessCode.GDNewSpriteObjects1[k] = gdjs.SuccessCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.SuccessCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SuccessCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.SuccessCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.SuccessCode.GDNewSpriteObjects1[i].getBehavior("Scale").setScale(1.2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.SuccessCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SuccessCode.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.SuccessCode.GDNewSprite2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SuccessCode.GDNewSprite2Objects1[k] = gdjs.SuccessCode.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.SuccessCode.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


};

gdjs.SuccessCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SuccessCode.GDNewSpriteObjects1.length = 0;
gdjs.SuccessCode.GDNewSpriteObjects2.length = 0;
gdjs.SuccessCode.GDNewSprite2Objects1.length = 0;
gdjs.SuccessCode.GDNewSprite2Objects2.length = 0;
gdjs.SuccessCode.GDNewSprite3Objects1.length = 0;
gdjs.SuccessCode.GDNewSprite3Objects2.length = 0;
gdjs.SuccessCode.GDNewSprite4Objects1.length = 0;
gdjs.SuccessCode.GDNewSprite4Objects2.length = 0;
gdjs.SuccessCode.GDNewSprite5Objects1.length = 0;
gdjs.SuccessCode.GDNewSprite5Objects2.length = 0;

gdjs.SuccessCode.eventsList0(runtimeScene);
gdjs.SuccessCode.GDNewSpriteObjects1.length = 0;
gdjs.SuccessCode.GDNewSpriteObjects2.length = 0;
gdjs.SuccessCode.GDNewSprite2Objects1.length = 0;
gdjs.SuccessCode.GDNewSprite2Objects2.length = 0;
gdjs.SuccessCode.GDNewSprite3Objects1.length = 0;
gdjs.SuccessCode.GDNewSprite3Objects2.length = 0;
gdjs.SuccessCode.GDNewSprite4Objects1.length = 0;
gdjs.SuccessCode.GDNewSprite4Objects2.length = 0;
gdjs.SuccessCode.GDNewSprite5Objects1.length = 0;
gdjs.SuccessCode.GDNewSprite5Objects2.length = 0;


return;

}

gdjs['SuccessCode'] = gdjs.SuccessCode;
