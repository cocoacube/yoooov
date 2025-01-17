gdjs.overCode = {};
gdjs.overCode.localVariables = [];
gdjs.overCode.GDNewSpriteObjects1= [];
gdjs.overCode.GDNewSpriteObjects2= [];
gdjs.overCode.GDMedievalButtonBeigeObjects1= [];
gdjs.overCode.GDMedievalButtonBeigeObjects2= [];
gdjs.overCode.GDNewSprite2Objects1= [];
gdjs.overCode.GDNewSprite2Objects2= [];
gdjs.overCode.GDNewSprite3Objects1= [];
gdjs.overCode.GDNewSprite3Objects2= [];
gdjs.overCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.overCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.overCode.GDNewTextObjects1= [];
gdjs.overCode.GDNewTextObjects2= [];
gdjs.overCode.GDreturnObjects1= [];
gdjs.overCode.GDreturnObjects2= [];
gdjs.overCode.GDPlantObjects1= [];
gdjs.overCode.GDPlantObjects2= [];
gdjs.overCode.GDNewSprite4Objects1= [];
gdjs.overCode.GDNewSprite4Objects2= [];
gdjs.overCode.GDNewText2Objects1= [];
gdjs.overCode.GDNewText2Objects2= [];
gdjs.overCode.GDMetalBowObjects1= [];
gdjs.overCode.GDMetalBowObjects2= [];
gdjs.overCode.GDMetalBow2Objects1= [];
gdjs.overCode.GDMetalBow2Objects2= [];


gdjs.overCode.asyncCallback26509364 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.overCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Plant"), gdjs.overCode.GDPlantObjects2);
{for(var i = 0, len = gdjs.overCode.GDPlantObjects2.length ;i < len;++i) {
    gdjs.overCode.GDPlantObjects2[i].getBehavior("Animation").setAnimationName("Hit");
}
}gdjs.overCode.localVariables.length = 0;
}
gdjs.overCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.overCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.overCode.asyncCallback26509364(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.overCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.overCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.overCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.overCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.overCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.overCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.overCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.overCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("return"), gdjs.overCode.GDreturnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.overCode.GDreturnObjects1.length;i<l;++i) {
    if ( gdjs.overCode.GDreturnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.overCode.GDreturnObjects1[k] = gdjs.overCode.GDreturnObjects1[i];
        ++k;
    }
}
gdjs.overCode.GDreturnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


};

gdjs.overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.overCode.GDNewSpriteObjects1.length = 0;
gdjs.overCode.GDNewSpriteObjects2.length = 0;
gdjs.overCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.overCode.GDMedievalButtonBeigeObjects2.length = 0;
gdjs.overCode.GDNewSprite2Objects1.length = 0;
gdjs.overCode.GDNewSprite2Objects2.length = 0;
gdjs.overCode.GDNewSprite3Objects1.length = 0;
gdjs.overCode.GDNewSprite3Objects2.length = 0;
gdjs.overCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.overCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.overCode.GDNewTextObjects1.length = 0;
gdjs.overCode.GDNewTextObjects2.length = 0;
gdjs.overCode.GDreturnObjects1.length = 0;
gdjs.overCode.GDreturnObjects2.length = 0;
gdjs.overCode.GDPlantObjects1.length = 0;
gdjs.overCode.GDPlantObjects2.length = 0;
gdjs.overCode.GDNewSprite4Objects1.length = 0;
gdjs.overCode.GDNewSprite4Objects2.length = 0;
gdjs.overCode.GDNewText2Objects1.length = 0;
gdjs.overCode.GDNewText2Objects2.length = 0;
gdjs.overCode.GDMetalBowObjects1.length = 0;
gdjs.overCode.GDMetalBowObjects2.length = 0;
gdjs.overCode.GDMetalBow2Objects1.length = 0;
gdjs.overCode.GDMetalBow2Objects2.length = 0;

gdjs.overCode.eventsList1(runtimeScene);
gdjs.overCode.GDNewSpriteObjects1.length = 0;
gdjs.overCode.GDNewSpriteObjects2.length = 0;
gdjs.overCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.overCode.GDMedievalButtonBeigeObjects2.length = 0;
gdjs.overCode.GDNewSprite2Objects1.length = 0;
gdjs.overCode.GDNewSprite2Objects2.length = 0;
gdjs.overCode.GDNewSprite3Objects1.length = 0;
gdjs.overCode.GDNewSprite3Objects2.length = 0;
gdjs.overCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.overCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.overCode.GDNewTextObjects1.length = 0;
gdjs.overCode.GDNewTextObjects2.length = 0;
gdjs.overCode.GDreturnObjects1.length = 0;
gdjs.overCode.GDreturnObjects2.length = 0;
gdjs.overCode.GDPlantObjects1.length = 0;
gdjs.overCode.GDPlantObjects2.length = 0;
gdjs.overCode.GDNewSprite4Objects1.length = 0;
gdjs.overCode.GDNewSprite4Objects2.length = 0;
gdjs.overCode.GDNewText2Objects1.length = 0;
gdjs.overCode.GDNewText2Objects2.length = 0;
gdjs.overCode.GDMetalBowObjects1.length = 0;
gdjs.overCode.GDMetalBowObjects2.length = 0;
gdjs.overCode.GDMetalBow2Objects1.length = 0;
gdjs.overCode.GDMetalBow2Objects2.length = 0;


return;

}

gdjs['overCode'] = gdjs.overCode;
