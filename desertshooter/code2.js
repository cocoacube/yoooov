gdjs.startCode = {};
gdjs.startCode.localVariables = [];
gdjs.startCode.GDNewSpriteObjects1= [];
gdjs.startCode.GDNewSpriteObjects2= [];
gdjs.startCode.GDNewTextObjects1= [];
gdjs.startCode.GDNewTextObjects2= [];
gdjs.startCode.GDNewSprite2Objects1= [];
gdjs.startCode.GDNewSprite2Objects2= [];
gdjs.startCode.GDMedievalButtonBrownObjects1= [];
gdjs.startCode.GDMedievalButtonBrownObjects2= [];


gdjs.startCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBrown"), gdjs.startCode.GDMedievalButtonBrownObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDMedievalButtonBrownObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDMedievalButtonBrownObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDMedievalButtonBrownObjects1[k] = gdjs.startCode.GDMedievalButtonBrownObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDMedievalButtonBrownObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;
gdjs.startCode.GDNewSprite2Objects1.length = 0;
gdjs.startCode.GDNewSprite2Objects2.length = 0;
gdjs.startCode.GDMedievalButtonBrownObjects1.length = 0;
gdjs.startCode.GDMedievalButtonBrownObjects2.length = 0;

gdjs.startCode.eventsList0(runtimeScene);
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;
gdjs.startCode.GDNewSprite2Objects1.length = 0;
gdjs.startCode.GDNewSprite2Objects2.length = 0;
gdjs.startCode.GDMedievalButtonBrownObjects1.length = 0;
gdjs.startCode.GDMedievalButtonBrownObjects2.length = 0;


return;

}

gdjs['startCode'] = gdjs.startCode;
