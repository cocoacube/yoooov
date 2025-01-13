gdjs._24471_32988_32_36807_20851Code = {};
gdjs._24471_32988_32_36807_20851Code.localVariables = [];
gdjs._24471_32988_32_36807_20851Code.GDNewSpriteObjects1= [];
gdjs._24471_32988_32_36807_20851Code.GDNewSpriteObjects2= [];
gdjs._24471_32988_32_36807_20851Code.GDNewSprite2Objects1= [];
gdjs._24471_32988_32_36807_20851Code.GDNewSprite2Objects2= [];
gdjs._24471_32988_32_36807_20851Code.GDNewTextObjects1= [];
gdjs._24471_32988_32_36807_20851Code.GDNewTextObjects2= [];
gdjs._24471_32988_32_36807_20851Code.GDaObjects1= [];
gdjs._24471_32988_32_36807_20851Code.GDaObjects2= [];
gdjs._24471_32988_32_36807_20851Code.GDa2Objects1= [];
gdjs._24471_32988_32_36807_20851Code.GDa2Objects2= [];
gdjs._24471_32988_32_36807_20851Code.GDYButtonObjects1= [];
gdjs._24471_32988_32_36807_20851Code.GDYButtonObjects2= [];


gdjs._24471_32988_32_36807_20851Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("a2"), gdjs._24471_32988_32_36807_20851Code.GDa2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._24471_32988_32_36807_20851Code.GDa2Objects1.length;i<l;++i) {
    if ( gdjs._24471_32988_32_36807_20851Code.GDa2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._24471_32988_32_36807_20851Code.GDa2Objects1[k] = gdjs._24471_32988_32_36807_20851Code.GDa2Objects1[i];
        ++k;
    }
}
gdjs._24471_32988_32_36807_20851Code.GDa2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "选择页面", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "tadaa-47995.mp3", false, 100, 1);
}}

}


};

gdjs._24471_32988_32_36807_20851Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._24471_32988_32_36807_20851Code.GDNewSpriteObjects1.length = 0;
gdjs._24471_32988_32_36807_20851Code.GDNewSpriteObjects2.length = 0;
gdjs._24471_32988_32_36807_20851Code.GDNewSprite2Objects1.length = 0;
gdjs._24471_32988_32_36807_20851Code.GDNewSprite2Objects2.length = 0;
gdjs._24471_32988_32_36807_20851Code.GDNewTextObjects1.length = 0;
gdjs._24471_32988_32_36807_20851Code.GDNewTextObjects2.length = 0;
gdjs._24471_32988_32_36807_20851Code.GDaObjects1.length = 0;
gdjs._24471_32988_32_36807_20851Code.GDaObjects2.length = 0;
gdjs._24471_32988_32_36807_20851Code.GDa2Objects1.length = 0;
gdjs._24471_32988_32_36807_20851Code.GDa2Objects2.length = 0;
gdjs._24471_32988_32_36807_20851Code.GDYButtonObjects1.length = 0;
gdjs._24471_32988_32_36807_20851Code.GDYButtonObjects2.length = 0;

gdjs._24471_32988_32_36807_20851Code.eventsList0(runtimeScene);
gdjs._24471_32988_32_36807_20851Code.GDNewSpriteObjects1.length = 0;
gdjs._24471_32988_32_36807_20851Code.GDNewSpriteObjects2.length = 0;
gdjs._24471_32988_32_36807_20851Code.GDNewSprite2Objects1.length = 0;
gdjs._24471_32988_32_36807_20851Code.GDNewSprite2Objects2.length = 0;
gdjs._24471_32988_32_36807_20851Code.GDNewTextObjects1.length = 0;
gdjs._24471_32988_32_36807_20851Code.GDNewTextObjects2.length = 0;
gdjs._24471_32988_32_36807_20851Code.GDaObjects1.length = 0;
gdjs._24471_32988_32_36807_20851Code.GDaObjects2.length = 0;
gdjs._24471_32988_32_36807_20851Code.GDa2Objects1.length = 0;
gdjs._24471_32988_32_36807_20851Code.GDa2Objects2.length = 0;
gdjs._24471_32988_32_36807_20851Code.GDYButtonObjects1.length = 0;
gdjs._24471_32988_32_36807_20851Code.GDYButtonObjects2.length = 0;


return;

}

gdjs['_24471_32988_32_36807_20851Code'] = gdjs._24471_32988_32_36807_20851Code;
