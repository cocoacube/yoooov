gdjs.gameoverCode = {};
gdjs.gameoverCode.localVariables = [];
gdjs.gameoverCode.GDNewSpriteObjects1= [];
gdjs.gameoverCode.GDNewSpriteObjects2= [];
gdjs.gameoverCode.GDNewSprite2Objects1= [];
gdjs.gameoverCode.GDNewSprite2Objects2= [];


gdjs.gameoverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.gameoverCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameoverCode.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.gameoverCode.GDNewSprite2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameoverCode.GDNewSprite2Objects1[k] = gdjs.gameoverCode.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.gameoverCode.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


};

gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameoverCode.GDNewSpriteObjects1.length = 0;
gdjs.gameoverCode.GDNewSpriteObjects2.length = 0;
gdjs.gameoverCode.GDNewSprite2Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite2Objects2.length = 0;

gdjs.gameoverCode.eventsList0(runtimeScene);
gdjs.gameoverCode.GDNewSpriteObjects1.length = 0;
gdjs.gameoverCode.GDNewSpriteObjects2.length = 0;
gdjs.gameoverCode.GDNewSprite2Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['gameoverCode'] = gdjs.gameoverCode;
