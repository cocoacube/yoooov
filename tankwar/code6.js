gdjs.firstCode = {};
gdjs.firstCode.localVariables = [];
gdjs.firstCode.GDNewSpriteObjects1= [];
gdjs.firstCode.GDNewSpriteObjects2= [];
gdjs.firstCode.GDNewSprite2Objects1= [];
gdjs.firstCode.GDNewSprite2Objects2= [];


gdjs.firstCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.firstCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.firstCode.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.firstCode.GDNewSprite2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.firstCode.GDNewSprite2Objects1[k] = gdjs.firstCode.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.firstCode.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "游戏界面", false);
}}

}


};

gdjs.firstCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.firstCode.GDNewSpriteObjects1.length = 0;
gdjs.firstCode.GDNewSpriteObjects2.length = 0;
gdjs.firstCode.GDNewSprite2Objects1.length = 0;
gdjs.firstCode.GDNewSprite2Objects2.length = 0;

gdjs.firstCode.eventsList0(runtimeScene);
gdjs.firstCode.GDNewSpriteObjects1.length = 0;
gdjs.firstCode.GDNewSpriteObjects2.length = 0;
gdjs.firstCode.GDNewSprite2Objects1.length = 0;
gdjs.firstCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['firstCode'] = gdjs.firstCode;
