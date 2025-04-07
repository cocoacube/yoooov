gdjs.GAME_32OVERCode = {};
gdjs.GAME_32OVERCode.localVariables = [];
gdjs.GAME_32OVERCode.GDNewSpriteObjects1= [];
gdjs.GAME_32OVERCode.GDNewSpriteObjects2= [];
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];


gdjs.GAME_32OVERCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PlayScene", false);
}}

}


};

gdjs.GAME_32OVERCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GAME_32OVERCode.GDNewSpriteObjects1.length = 0;
gdjs.GAME_32OVERCode.GDNewSpriteObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;

gdjs.GAME_32OVERCode.eventsList0(runtimeScene);
gdjs.GAME_32OVERCode.GDNewSpriteObjects1.length = 0;
gdjs.GAME_32OVERCode.GDNewSpriteObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;


return;

}

gdjs['GAME_32OVERCode'] = gdjs.GAME_32OVERCode;
