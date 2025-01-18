gdjs.toCode = {};
gdjs.toCode.localVariables = [];
gdjs.toCode.GDNewTextObjects1= [];
gdjs.toCode.GDNewTextObjects2= [];
gdjs.toCode.GDNewSpriteObjects1= [];
gdjs.toCode.GDNewSpriteObjects2= [];
gdjs.toCode.GDNewSprite2Objects1= [];
gdjs.toCode.GDNewSprite2Objects2= [];
gdjs.toCode.GDNewSprite3Objects1= [];
gdjs.toCode.GDNewSprite3Objects2= [];


gdjs.toCode.asyncCallback14993196 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.toCode.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "l1");
}gdjs.toCode.localVariables.length = 0;
}
gdjs.toCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.toCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4.56), (runtimeScene) => (gdjs.toCode.asyncCallback14993196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.toCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.toCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.toCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.toCode.GDNewSprite3Objects1[i].hide(false);
}
}
{ //Subevents
gdjs.toCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.toCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.toCode.GDNewTextObjects1.length = 0;
gdjs.toCode.GDNewTextObjects2.length = 0;
gdjs.toCode.GDNewSpriteObjects1.length = 0;
gdjs.toCode.GDNewSpriteObjects2.length = 0;
gdjs.toCode.GDNewSprite2Objects1.length = 0;
gdjs.toCode.GDNewSprite2Objects2.length = 0;
gdjs.toCode.GDNewSprite3Objects1.length = 0;
gdjs.toCode.GDNewSprite3Objects2.length = 0;

gdjs.toCode.eventsList1(runtimeScene);
gdjs.toCode.GDNewTextObjects1.length = 0;
gdjs.toCode.GDNewTextObjects2.length = 0;
gdjs.toCode.GDNewSpriteObjects1.length = 0;
gdjs.toCode.GDNewSpriteObjects2.length = 0;
gdjs.toCode.GDNewSprite2Objects1.length = 0;
gdjs.toCode.GDNewSprite2Objects2.length = 0;
gdjs.toCode.GDNewSprite3Objects1.length = 0;
gdjs.toCode.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['toCode'] = gdjs.toCode;
