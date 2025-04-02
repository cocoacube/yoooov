gdjs.ruleCode = {};
gdjs.ruleCode.localVariables = [];
gdjs.ruleCode.GDNewSpriteObjects1= [];
gdjs.ruleCode.GDNewSpriteObjects2= [];
gdjs.ruleCode.GDNewTextObjects1= [];
gdjs.ruleCode.GDNewTextObjects2= [];
gdjs.ruleCode.GDNewText2Objects1= [];
gdjs.ruleCode.GDNewText2Objects2= [];
gdjs.ruleCode.GDNewSprite2Objects1= [];
gdjs.ruleCode.GDNewSprite2Objects2= [];
gdjs.ruleCode.GDNewText3Objects1= [];
gdjs.ruleCode.GDNewText3Objects2= [];
gdjs.ruleCode.GDNewSprite3Objects1= [];
gdjs.ruleCode.GDNewSprite3Objects2= [];
gdjs.ruleCode.GDNewText4Objects1= [];
gdjs.ruleCode.GDNewText4Objects2= [];
gdjs.ruleCode.GDNewText5Objects1= [];
gdjs.ruleCode.GDNewText5Objects2= [];
gdjs.ruleCode.GDNewSprite4Objects1= [];
gdjs.ruleCode.GDNewSprite4Objects2= [];
gdjs.ruleCode.GDNewBBTextObjects1= [];
gdjs.ruleCode.GDNewBBTextObjects2= [];
gdjs.ruleCode.GDNewSprite5Objects1= [];
gdjs.ruleCode.GDNewSprite5Objects2= [];


gdjs.ruleCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.ruleCode.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ruleCode.GDNewSprite4Objects1.length;i<l;++i) {
    if ( gdjs.ruleCode.GDNewSprite4Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ruleCode.GDNewSprite4Objects1[k] = gdjs.ruleCode.GDNewSprite4Objects1[i];
        ++k;
    }
}
gdjs.ruleCode.GDNewSprite4Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "游戏界面", false);
}}

}


};

gdjs.ruleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ruleCode.GDNewSpriteObjects1.length = 0;
gdjs.ruleCode.GDNewSpriteObjects2.length = 0;
gdjs.ruleCode.GDNewTextObjects1.length = 0;
gdjs.ruleCode.GDNewTextObjects2.length = 0;
gdjs.ruleCode.GDNewText2Objects1.length = 0;
gdjs.ruleCode.GDNewText2Objects2.length = 0;
gdjs.ruleCode.GDNewSprite2Objects1.length = 0;
gdjs.ruleCode.GDNewSprite2Objects2.length = 0;
gdjs.ruleCode.GDNewText3Objects1.length = 0;
gdjs.ruleCode.GDNewText3Objects2.length = 0;
gdjs.ruleCode.GDNewSprite3Objects1.length = 0;
gdjs.ruleCode.GDNewSprite3Objects2.length = 0;
gdjs.ruleCode.GDNewText4Objects1.length = 0;
gdjs.ruleCode.GDNewText4Objects2.length = 0;
gdjs.ruleCode.GDNewText5Objects1.length = 0;
gdjs.ruleCode.GDNewText5Objects2.length = 0;
gdjs.ruleCode.GDNewSprite4Objects1.length = 0;
gdjs.ruleCode.GDNewSprite4Objects2.length = 0;
gdjs.ruleCode.GDNewBBTextObjects1.length = 0;
gdjs.ruleCode.GDNewBBTextObjects2.length = 0;
gdjs.ruleCode.GDNewSprite5Objects1.length = 0;
gdjs.ruleCode.GDNewSprite5Objects2.length = 0;

gdjs.ruleCode.eventsList0(runtimeScene);
gdjs.ruleCode.GDNewSpriteObjects1.length = 0;
gdjs.ruleCode.GDNewSpriteObjects2.length = 0;
gdjs.ruleCode.GDNewTextObjects1.length = 0;
gdjs.ruleCode.GDNewTextObjects2.length = 0;
gdjs.ruleCode.GDNewText2Objects1.length = 0;
gdjs.ruleCode.GDNewText2Objects2.length = 0;
gdjs.ruleCode.GDNewSprite2Objects1.length = 0;
gdjs.ruleCode.GDNewSprite2Objects2.length = 0;
gdjs.ruleCode.GDNewText3Objects1.length = 0;
gdjs.ruleCode.GDNewText3Objects2.length = 0;
gdjs.ruleCode.GDNewSprite3Objects1.length = 0;
gdjs.ruleCode.GDNewSprite3Objects2.length = 0;
gdjs.ruleCode.GDNewText4Objects1.length = 0;
gdjs.ruleCode.GDNewText4Objects2.length = 0;
gdjs.ruleCode.GDNewText5Objects1.length = 0;
gdjs.ruleCode.GDNewText5Objects2.length = 0;
gdjs.ruleCode.GDNewSprite4Objects1.length = 0;
gdjs.ruleCode.GDNewSprite4Objects2.length = 0;
gdjs.ruleCode.GDNewBBTextObjects1.length = 0;
gdjs.ruleCode.GDNewBBTextObjects2.length = 0;
gdjs.ruleCode.GDNewSprite5Objects1.length = 0;
gdjs.ruleCode.GDNewSprite5Objects2.length = 0;


return;

}

gdjs['ruleCode'] = gdjs.ruleCode;
