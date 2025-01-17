gdjs._29609_27861Code = {};
gdjs._29609_27861Code.localVariables = [];
gdjs._29609_27861Code.GDNewTextObjects1= [];
gdjs._29609_27861Code.GDNewTextObjects2= [];
gdjs._29609_27861Code.GDNewSpriteObjects1= [];
gdjs._29609_27861Code.GDNewSpriteObjects2= [];
gdjs._29609_27861Code.GDNewSprite2Objects1= [];
gdjs._29609_27861Code.GDNewSprite2Objects2= [];
gdjs._29609_27861Code.GDNewSprite3Objects1= [];
gdjs._29609_27861Code.GDNewSprite3Objects2= [];
gdjs._29609_27861Code.GDNewSprite4Objects1= [];
gdjs._29609_27861Code.GDNewSprite4Objects2= [];


gdjs._29609_27861Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._29609_27861Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._29609_27861Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs._29609_27861Code.GDNewSpriteObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._29609_27861Code.GDNewSpriteObjects1[k] = gdjs._29609_27861Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._29609_27861Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


};

gdjs._29609_27861Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._29609_27861Code.GDNewTextObjects1.length = 0;
gdjs._29609_27861Code.GDNewTextObjects2.length = 0;
gdjs._29609_27861Code.GDNewSpriteObjects1.length = 0;
gdjs._29609_27861Code.GDNewSpriteObjects2.length = 0;
gdjs._29609_27861Code.GDNewSprite2Objects1.length = 0;
gdjs._29609_27861Code.GDNewSprite2Objects2.length = 0;
gdjs._29609_27861Code.GDNewSprite3Objects1.length = 0;
gdjs._29609_27861Code.GDNewSprite3Objects2.length = 0;
gdjs._29609_27861Code.GDNewSprite4Objects1.length = 0;
gdjs._29609_27861Code.GDNewSprite4Objects2.length = 0;

gdjs._29609_27861Code.eventsList0(runtimeScene);
gdjs._29609_27861Code.GDNewTextObjects1.length = 0;
gdjs._29609_27861Code.GDNewTextObjects2.length = 0;
gdjs._29609_27861Code.GDNewSpriteObjects1.length = 0;
gdjs._29609_27861Code.GDNewSpriteObjects2.length = 0;
gdjs._29609_27861Code.GDNewSprite2Objects1.length = 0;
gdjs._29609_27861Code.GDNewSprite2Objects2.length = 0;
gdjs._29609_27861Code.GDNewSprite3Objects1.length = 0;
gdjs._29609_27861Code.GDNewSprite3Objects2.length = 0;
gdjs._29609_27861Code.GDNewSprite4Objects1.length = 0;
gdjs._29609_27861Code.GDNewSprite4Objects2.length = 0;


return;

}

gdjs['_29609_27861Code'] = gdjs._29609_27861Code;
