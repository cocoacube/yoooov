gdjs.deathCode = {};
gdjs.deathCode.localVariables = [];
gdjs.deathCode.GDNewSpriteObjects1= [];
gdjs.deathCode.GDNewSpriteObjects2= [];
gdjs.deathCode.GDNewSprite2Objects1= [];
gdjs.deathCode.GDNewSprite2Objects2= [];
gdjs.deathCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.deathCode.GDWhiteSquareDecoratedButtonObjects2= [];


gdjs.deathCode.asyncCallback26328564 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.deathCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}gdjs.deathCode.localVariables.length = 0;
}
gdjs.deathCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.deathCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.51), (runtimeScene) => (gdjs.deathCode.asyncCallback26328564(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.deathCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.deathCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.deathCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.deathCode.GDNewSprite2Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.deathCode.GDWhiteSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.deathCode.GDWhiteSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.deathCode.GDWhiteSquareDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.deathCode.GDWhiteSquareDecoratedButtonObjects1[k] = gdjs.deathCode.GDWhiteSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.deathCode.GDWhiteSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.deathCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.deathCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.deathCode.GDNewSprite2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.deathCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.deathCode.GDNewSprite2Objects1[i].getBehavior("Animation").resumeAnimation();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "0f4c6b63a22a6960a861b7cb69993524cef1867c1b11fb7958f8a5c48db09b5d_Explosion 2.aac", false, 29, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.deathCode.GDWhiteSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.deathCode.GDWhiteSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.deathCode.GDWhiteSquareDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.deathCode.GDWhiteSquareDecoratedButtonObjects1[k] = gdjs.deathCode.GDWhiteSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.deathCode.GDWhiteSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.deathCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.deathCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.deathCode.GDNewSpriteObjects1.length = 0;
gdjs.deathCode.GDNewSpriteObjects2.length = 0;
gdjs.deathCode.GDNewSprite2Objects1.length = 0;
gdjs.deathCode.GDNewSprite2Objects2.length = 0;
gdjs.deathCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.deathCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;

gdjs.deathCode.eventsList1(runtimeScene);
gdjs.deathCode.GDNewSpriteObjects1.length = 0;
gdjs.deathCode.GDNewSpriteObjects2.length = 0;
gdjs.deathCode.GDNewSprite2Objects1.length = 0;
gdjs.deathCode.GDNewSprite2Objects2.length = 0;
gdjs.deathCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.deathCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;


return;

}

gdjs['deathCode'] = gdjs.deathCode;
