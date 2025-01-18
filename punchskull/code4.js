gdjs.game_32_32ovarCode = {};
gdjs.game_32_32ovarCode.localVariables = [];
gdjs.game_32_32ovarCode.GDNewSpriteObjects1= [];
gdjs.game_32_32ovarCode.GDNewSpriteObjects2= [];
gdjs.game_32_32ovarCode.GDMedievalButtonBrownObjects1= [];
gdjs.game_32_32ovarCode.GDMedievalButtonBrownObjects2= [];
gdjs.game_32_32ovarCode.GDNewSprite2Objects1= [];
gdjs.game_32_32ovarCode.GDNewSprite2Objects2= [];


gdjs.game_32_32ovarCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBrown"), gdjs.game_32_32ovarCode.GDMedievalButtonBrownObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.game_32_32ovarCode.GDMedievalButtonBrownObjects1.length;i<l;++i) {
    if ( gdjs.game_32_32ovarCode.GDMedievalButtonBrownObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.game_32_32ovarCode.GDMedievalButtonBrownObjects1[k] = gdjs.game_32_32ovarCode.GDMedievalButtonBrownObjects1[i];
        ++k;
    }
}
gdjs.game_32_32ovarCode.GDMedievalButtonBrownObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", false);
}}

}


};

gdjs.game_32_32ovarCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32_32ovarCode.GDNewSpriteObjects1.length = 0;
gdjs.game_32_32ovarCode.GDNewSpriteObjects2.length = 0;
gdjs.game_32_32ovarCode.GDMedievalButtonBrownObjects1.length = 0;
gdjs.game_32_32ovarCode.GDMedievalButtonBrownObjects2.length = 0;
gdjs.game_32_32ovarCode.GDNewSprite2Objects1.length = 0;
gdjs.game_32_32ovarCode.GDNewSprite2Objects2.length = 0;

gdjs.game_32_32ovarCode.eventsList0(runtimeScene);
gdjs.game_32_32ovarCode.GDNewSpriteObjects1.length = 0;
gdjs.game_32_32ovarCode.GDNewSpriteObjects2.length = 0;
gdjs.game_32_32ovarCode.GDMedievalButtonBrownObjects1.length = 0;
gdjs.game_32_32ovarCode.GDMedievalButtonBrownObjects2.length = 0;
gdjs.game_32_32ovarCode.GDNewSprite2Objects1.length = 0;
gdjs.game_32_32ovarCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['game_32_32ovarCode'] = gdjs.game_32_32ovarCode;
