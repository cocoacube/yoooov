gdjs.CaidanCode = {};
gdjs.CaidanCode.localVariables = [];
gdjs.CaidanCode.GDNewSpriteObjects1= [];
gdjs.CaidanCode.GDNewSpriteObjects2= [];
gdjs.CaidanCode.GDNewSprite2Objects1= [];
gdjs.CaidanCode.GDNewSprite2Objects2= [];
gdjs.CaidanCode.GDNewSprite3Objects1= [];
gdjs.CaidanCode.GDNewSprite3Objects2= [];
gdjs.CaidanCode.GDAgentMikeObjects1= [];
gdjs.CaidanCode.GDAgentMikeObjects2= [];
gdjs.CaidanCode.GDNewSprite4Objects1= [];
gdjs.CaidanCode.GDNewSprite4Objects2= [];
gdjs.CaidanCode.GDPlantObjects1= [];
gdjs.CaidanCode.GDPlantObjects2= [];
gdjs.CaidanCode.GDNewText2Objects1= [];
gdjs.CaidanCode.GDNewText2Objects2= [];
gdjs.CaidanCode.GDMetalBowObjects1= [];
gdjs.CaidanCode.GDMetalBowObjects2= [];
gdjs.CaidanCode.GDMetalBow2Objects1= [];
gdjs.CaidanCode.GDMetalBow2Objects2= [];


gdjs.CaidanCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AgentMike"), gdjs.CaidanCode.GDAgentMikeObjects1);
{for(var i = 0, len = gdjs.CaidanCode.GDAgentMikeObjects1.length ;i < len;++i) {
    gdjs.CaidanCode.GDAgentMikeObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


};

gdjs.CaidanCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CaidanCode.GDNewSpriteObjects1.length = 0;
gdjs.CaidanCode.GDNewSpriteObjects2.length = 0;
gdjs.CaidanCode.GDNewSprite2Objects1.length = 0;
gdjs.CaidanCode.GDNewSprite2Objects2.length = 0;
gdjs.CaidanCode.GDNewSprite3Objects1.length = 0;
gdjs.CaidanCode.GDNewSprite3Objects2.length = 0;
gdjs.CaidanCode.GDAgentMikeObjects1.length = 0;
gdjs.CaidanCode.GDAgentMikeObjects2.length = 0;
gdjs.CaidanCode.GDNewSprite4Objects1.length = 0;
gdjs.CaidanCode.GDNewSprite4Objects2.length = 0;
gdjs.CaidanCode.GDPlantObjects1.length = 0;
gdjs.CaidanCode.GDPlantObjects2.length = 0;
gdjs.CaidanCode.GDNewText2Objects1.length = 0;
gdjs.CaidanCode.GDNewText2Objects2.length = 0;
gdjs.CaidanCode.GDMetalBowObjects1.length = 0;
gdjs.CaidanCode.GDMetalBowObjects2.length = 0;
gdjs.CaidanCode.GDMetalBow2Objects1.length = 0;
gdjs.CaidanCode.GDMetalBow2Objects2.length = 0;

gdjs.CaidanCode.eventsList0(runtimeScene);
gdjs.CaidanCode.GDNewSpriteObjects1.length = 0;
gdjs.CaidanCode.GDNewSpriteObjects2.length = 0;
gdjs.CaidanCode.GDNewSprite2Objects1.length = 0;
gdjs.CaidanCode.GDNewSprite2Objects2.length = 0;
gdjs.CaidanCode.GDNewSprite3Objects1.length = 0;
gdjs.CaidanCode.GDNewSprite3Objects2.length = 0;
gdjs.CaidanCode.GDAgentMikeObjects1.length = 0;
gdjs.CaidanCode.GDAgentMikeObjects2.length = 0;
gdjs.CaidanCode.GDNewSprite4Objects1.length = 0;
gdjs.CaidanCode.GDNewSprite4Objects2.length = 0;
gdjs.CaidanCode.GDPlantObjects1.length = 0;
gdjs.CaidanCode.GDPlantObjects2.length = 0;
gdjs.CaidanCode.GDNewText2Objects1.length = 0;
gdjs.CaidanCode.GDNewText2Objects2.length = 0;
gdjs.CaidanCode.GDMetalBowObjects1.length = 0;
gdjs.CaidanCode.GDMetalBowObjects2.length = 0;
gdjs.CaidanCode.GDMetalBow2Objects1.length = 0;
gdjs.CaidanCode.GDMetalBow2Objects2.length = 0;


return;

}

gdjs['CaidanCode'] = gdjs.CaidanCode;
