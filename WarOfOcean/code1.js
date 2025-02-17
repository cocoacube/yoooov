gdjs.dockCode = {};
gdjs.dockCode.localVariables = [];
gdjs.dockCode.GDNewSpriteObjects1= [];
gdjs.dockCode.GDNewSpriteObjects2= [];
gdjs.dockCode.GDNewSprite2Objects1= [];
gdjs.dockCode.GDNewSprite2Objects2= [];
gdjs.dockCode.GDNewSprite3Objects1= [];
gdjs.dockCode.GDNewSprite3Objects2= [];
gdjs.dockCode.GDNewSprite4Objects1= [];
gdjs.dockCode.GDNewSprite4Objects2= [];
gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorder2Objects1= [];
gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorder2Objects2= [];


gdjs.dockCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "war", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("battle ship");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder2"), gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorder2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length;i<l;++i) {
    if ( gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorder2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorder2Objects1[k] = gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorder2Objects1[i];
        ++k;
    }
}
gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "war", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("submarin");
}}

}


};

gdjs.dockCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.dockCode.GDNewSpriteObjects1.length = 0;
gdjs.dockCode.GDNewSpriteObjects2.length = 0;
gdjs.dockCode.GDNewSprite2Objects1.length = 0;
gdjs.dockCode.GDNewSprite2Objects2.length = 0;
gdjs.dockCode.GDNewSprite3Objects1.length = 0;
gdjs.dockCode.GDNewSprite3Objects2.length = 0;
gdjs.dockCode.GDNewSprite4Objects1.length = 0;
gdjs.dockCode.GDNewSprite4Objects2.length = 0;
gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length = 0;
gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorder2Objects2.length = 0;

gdjs.dockCode.eventsList0(runtimeScene);
gdjs.dockCode.GDNewSpriteObjects1.length = 0;
gdjs.dockCode.GDNewSpriteObjects2.length = 0;
gdjs.dockCode.GDNewSprite2Objects1.length = 0;
gdjs.dockCode.GDNewSprite2Objects2.length = 0;
gdjs.dockCode.GDNewSprite3Objects1.length = 0;
gdjs.dockCode.GDNewSprite3Objects2.length = 0;
gdjs.dockCode.GDNewSprite4Objects1.length = 0;
gdjs.dockCode.GDNewSprite4Objects2.length = 0;
gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length = 0;
gdjs.dockCode.GDTransparentButtonWithWhiteBlueBorder2Objects2.length = 0;


return;

}

gdjs['dockCode'] = gdjs.dockCode;
