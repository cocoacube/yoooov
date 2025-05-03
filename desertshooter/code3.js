gdjs.endingCode = {};
gdjs.endingCode.localVariables = [];
gdjs.endingCode.GDNewSpriteObjects1= [];
gdjs.endingCode.GDNewSpriteObjects2= [];
gdjs.endingCode.GDNewTiledSpriteObjects1= [];
gdjs.endingCode.GDNewTiledSpriteObjects2= [];
gdjs.endingCode.GDNewSprite2Objects1= [];
gdjs.endingCode.GDNewSprite2Objects2= [];
gdjs.endingCode.GDNewSprite3Objects1= [];
gdjs.endingCode.GDNewSprite3Objects2= [];
gdjs.endingCode.GDNewSprite4Objects1= [];
gdjs.endingCode.GDNewSprite4Objects2= [];
gdjs.endingCode.GDNewTextObjects1= [];
gdjs.endingCode.GDNewTextObjects2= [];
gdjs.endingCode.GDNewText2Objects1= [];
gdjs.endingCode.GDNewText2Objects2= [];
gdjs.endingCode.GDNewSprite5Objects1= [];
gdjs.endingCode.GDNewSprite5Objects2= [];
gdjs.endingCode.GDMedievalButtonBrownObjects1= [];
gdjs.endingCode.GDMedievalButtonBrownObjects2= [];


gdjs.endingCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBrown"), gdjs.endingCode.GDMedievalButtonBrownObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.endingCode.GDMedievalButtonBrownObjects1.length;i<l;++i) {
    if ( gdjs.endingCode.GDMedievalButtonBrownObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.endingCode.GDMedievalButtonBrownObjects1[k] = gdjs.endingCode.GDMedievalButtonBrownObjects1[i];
        ++k;
    }
}
gdjs.endingCode.GDMedievalButtonBrownObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


};

gdjs.endingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.endingCode.GDNewSpriteObjects1.length = 0;
gdjs.endingCode.GDNewSpriteObjects2.length = 0;
gdjs.endingCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.endingCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.endingCode.GDNewSprite2Objects1.length = 0;
gdjs.endingCode.GDNewSprite2Objects2.length = 0;
gdjs.endingCode.GDNewSprite3Objects1.length = 0;
gdjs.endingCode.GDNewSprite3Objects2.length = 0;
gdjs.endingCode.GDNewSprite4Objects1.length = 0;
gdjs.endingCode.GDNewSprite4Objects2.length = 0;
gdjs.endingCode.GDNewTextObjects1.length = 0;
gdjs.endingCode.GDNewTextObjects2.length = 0;
gdjs.endingCode.GDNewText2Objects1.length = 0;
gdjs.endingCode.GDNewText2Objects2.length = 0;
gdjs.endingCode.GDNewSprite5Objects1.length = 0;
gdjs.endingCode.GDNewSprite5Objects2.length = 0;
gdjs.endingCode.GDMedievalButtonBrownObjects1.length = 0;
gdjs.endingCode.GDMedievalButtonBrownObjects2.length = 0;

gdjs.endingCode.eventsList0(runtimeScene);
gdjs.endingCode.GDNewSpriteObjects1.length = 0;
gdjs.endingCode.GDNewSpriteObjects2.length = 0;
gdjs.endingCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.endingCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.endingCode.GDNewSprite2Objects1.length = 0;
gdjs.endingCode.GDNewSprite2Objects2.length = 0;
gdjs.endingCode.GDNewSprite3Objects1.length = 0;
gdjs.endingCode.GDNewSprite3Objects2.length = 0;
gdjs.endingCode.GDNewSprite4Objects1.length = 0;
gdjs.endingCode.GDNewSprite4Objects2.length = 0;
gdjs.endingCode.GDNewTextObjects1.length = 0;
gdjs.endingCode.GDNewTextObjects2.length = 0;
gdjs.endingCode.GDNewText2Objects1.length = 0;
gdjs.endingCode.GDNewText2Objects2.length = 0;
gdjs.endingCode.GDNewSprite5Objects1.length = 0;
gdjs.endingCode.GDNewSprite5Objects2.length = 0;
gdjs.endingCode.GDMedievalButtonBrownObjects1.length = 0;
gdjs.endingCode.GDMedievalButtonBrownObjects2.length = 0;


return;

}

gdjs['endingCode'] = gdjs.endingCode;
