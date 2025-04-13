gdjs.startCode = {};
gdjs.startCode.localVariables = [];
gdjs.startCode.GDMikeShapePainterObjects1= [];
gdjs.startCode.GDMikeShapePainterObjects2= [];
gdjs.startCode.GDMikeShapePainterObjects3= [];
gdjs.startCode.GDBobShapePainter2Objects1= [];
gdjs.startCode.GDBobShapePainter2Objects2= [];
gdjs.startCode.GDBobShapePainter2Objects3= [];
gdjs.startCode.GDAgentMikeObjects1= [];
gdjs.startCode.GDAgentMikeObjects2= [];
gdjs.startCode.GDAgentMikeObjects3= [];
gdjs.startCode.GDNewSpriteObjects1= [];
gdjs.startCode.GDNewSpriteObjects2= [];
gdjs.startCode.GDNewSpriteObjects3= [];
gdjs.startCode.GDShotgunObjects1= [];
gdjs.startCode.GDShotgunObjects2= [];
gdjs.startCode.GDShotgunObjects3= [];
gdjs.startCode.GDNewSprite2Objects1= [];
gdjs.startCode.GDNewSprite2Objects2= [];
gdjs.startCode.GDNewSprite2Objects3= [];
gdjs.startCode.GDNewSprite3Objects1= [];
gdjs.startCode.GDNewSprite3Objects2= [];
gdjs.startCode.GDNewSprite3Objects3= [];
gdjs.startCode.GDBlankeyObjects1= [];
gdjs.startCode.GDBlankeyObjects2= [];
gdjs.startCode.GDBlankeyObjects3= [];
gdjs.startCode.GDNewTextObjects1= [];
gdjs.startCode.GDNewTextObjects2= [];
gdjs.startCode.GDNewTextObjects3= [];
gdjs.startCode.GDBlankPlayingCardObjects1= [];
gdjs.startCode.GDBlankPlayingCardObjects2= [];
gdjs.startCode.GDBlankPlayingCardObjects3= [];
gdjs.startCode.GDNewSprite4Objects1= [];
gdjs.startCode.GDNewSprite4Objects2= [];
gdjs.startCode.GDNewSprite4Objects3= [];
gdjs.startCode.GDBlankEmoteLeftObjects1= [];
gdjs.startCode.GDBlankEmoteLeftObjects2= [];
gdjs.startCode.GDBlankEmoteLeftObjects3= [];
gdjs.startCode.GDBlankEmoteMidObjects1= [];
gdjs.startCode.GDBlankEmoteMidObjects2= [];
gdjs.startCode.GDBlankEmoteMidObjects3= [];
gdjs.startCode.GDNewText2Objects1= [];
gdjs.startCode.GDNewText2Objects2= [];
gdjs.startCode.GDNewText2Objects3= [];
gdjs.startCode.GDTransitionObjects1= [];
gdjs.startCode.GDTransitionObjects2= [];
gdjs.startCode.GDTransitionObjects3= [];
gdjs.startCode.GDDarkenObjects1= [];
gdjs.startCode.GDDarkenObjects2= [];
gdjs.startCode.GDDarkenObjects3= [];
gdjs.startCode.GDNewSprite3Objects1= [];
gdjs.startCode.GDNewSprite3Objects2= [];
gdjs.startCode.GDNewSprite3Objects3= [];


gdjs.startCode.asyncCallback34170212 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.startCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}gdjs.startCode.localVariables.length = 0;
}
gdjs.startCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.startCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.startCode.asyncCallback34170212(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startCode.asyncCallback34170140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.startCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("BlankEmoteLeft"), gdjs.startCode.GDBlankEmoteLeftObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("NewText2"), gdjs.startCode.GDNewText2Objects2);

{for(var i = 0, len = gdjs.startCode.GDBlankEmoteLeftObjects2.length ;i < len;++i) {
    gdjs.startCode.GDBlankEmoteLeftObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.startCode.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.startCode.GDNewText2Objects2[i].hide(false);
}
}
{ //Subevents
gdjs.startCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.startCode.localVariables.length = 0;
}
gdjs.startCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.startCode.localVariables);
for (const obj of gdjs.startCode.GDBlankEmoteLeftObjects1) asyncObjectsList.addObject("BlankEmoteLeft", obj);
for (const obj of gdjs.startCode.GDNewText2Objects1) asyncObjectsList.addObject("NewText2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.startCode.asyncCallback34170140(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlankEmoteLeft"), gdjs.startCode.GDBlankEmoteLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("BlankEmoteMid"), gdjs.startCode.GDBlankEmoteMidObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.startCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.startCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.startCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shotgun"), gdjs.startCode.GDShotgunObjects1);
{for(var i = 0, len = gdjs.startCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.startCode.GDNewSpriteObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.startCode.GDShotgunObjects1.length ;i < len;++i) {
    gdjs.startCode.GDShotgunObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.startCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.startCode.GDNewTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.startCode.GDBlankEmoteLeftObjects1.length ;i < len;++i) {
    gdjs.startCode.GDBlankEmoteLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.startCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.startCode.GDNewText2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.startCode.GDBlankEmoteMidObjects1.length ;i < len;++i) {
    gdjs.startCode.GDBlankEmoteMidObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlankEmoteLeft"), gdjs.startCode.GDBlankEmoteLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.startCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.startCode.GDBlankEmoteLeftObjects1.length ;i < len;++i) {
    gdjs.startCode.GDBlankEmoteLeftObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.startCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.startCode.GDNewText2Objects1[i].hide(false);
}
}
{ //Subevents
gdjs.startCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDMikeShapePainterObjects1.length = 0;
gdjs.startCode.GDMikeShapePainterObjects2.length = 0;
gdjs.startCode.GDMikeShapePainterObjects3.length = 0;
gdjs.startCode.GDBobShapePainter2Objects1.length = 0;
gdjs.startCode.GDBobShapePainter2Objects2.length = 0;
gdjs.startCode.GDBobShapePainter2Objects3.length = 0;
gdjs.startCode.GDAgentMikeObjects1.length = 0;
gdjs.startCode.GDAgentMikeObjects2.length = 0;
gdjs.startCode.GDAgentMikeObjects3.length = 0;
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewSpriteObjects3.length = 0;
gdjs.startCode.GDShotgunObjects1.length = 0;
gdjs.startCode.GDShotgunObjects2.length = 0;
gdjs.startCode.GDShotgunObjects3.length = 0;
gdjs.startCode.GDNewSprite2Objects1.length = 0;
gdjs.startCode.GDNewSprite2Objects2.length = 0;
gdjs.startCode.GDNewSprite2Objects3.length = 0;
gdjs.startCode.GDNewSprite3Objects1.length = 0;
gdjs.startCode.GDNewSprite3Objects2.length = 0;
gdjs.startCode.GDNewSprite3Objects3.length = 0;
gdjs.startCode.GDBlankeyObjects1.length = 0;
gdjs.startCode.GDBlankeyObjects2.length = 0;
gdjs.startCode.GDBlankeyObjects3.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;
gdjs.startCode.GDNewTextObjects3.length = 0;
gdjs.startCode.GDBlankPlayingCardObjects1.length = 0;
gdjs.startCode.GDBlankPlayingCardObjects2.length = 0;
gdjs.startCode.GDBlankPlayingCardObjects3.length = 0;
gdjs.startCode.GDNewSprite4Objects1.length = 0;
gdjs.startCode.GDNewSprite4Objects2.length = 0;
gdjs.startCode.GDNewSprite4Objects3.length = 0;
gdjs.startCode.GDBlankEmoteLeftObjects1.length = 0;
gdjs.startCode.GDBlankEmoteLeftObjects2.length = 0;
gdjs.startCode.GDBlankEmoteLeftObjects3.length = 0;
gdjs.startCode.GDBlankEmoteMidObjects1.length = 0;
gdjs.startCode.GDBlankEmoteMidObjects2.length = 0;
gdjs.startCode.GDBlankEmoteMidObjects3.length = 0;
gdjs.startCode.GDNewText2Objects1.length = 0;
gdjs.startCode.GDNewText2Objects2.length = 0;
gdjs.startCode.GDNewText2Objects3.length = 0;
gdjs.startCode.GDTransitionObjects1.length = 0;
gdjs.startCode.GDTransitionObjects2.length = 0;
gdjs.startCode.GDTransitionObjects3.length = 0;
gdjs.startCode.GDDarkenObjects1.length = 0;
gdjs.startCode.GDDarkenObjects2.length = 0;
gdjs.startCode.GDDarkenObjects3.length = 0;
gdjs.startCode.GDNewSprite3Objects1.length = 0;
gdjs.startCode.GDNewSprite3Objects2.length = 0;
gdjs.startCode.GDNewSprite3Objects3.length = 0;

gdjs.startCode.eventsList2(runtimeScene);
gdjs.startCode.GDMikeShapePainterObjects1.length = 0;
gdjs.startCode.GDMikeShapePainterObjects2.length = 0;
gdjs.startCode.GDMikeShapePainterObjects3.length = 0;
gdjs.startCode.GDBobShapePainter2Objects1.length = 0;
gdjs.startCode.GDBobShapePainter2Objects2.length = 0;
gdjs.startCode.GDBobShapePainter2Objects3.length = 0;
gdjs.startCode.GDAgentMikeObjects1.length = 0;
gdjs.startCode.GDAgentMikeObjects2.length = 0;
gdjs.startCode.GDAgentMikeObjects3.length = 0;
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewSpriteObjects3.length = 0;
gdjs.startCode.GDShotgunObjects1.length = 0;
gdjs.startCode.GDShotgunObjects2.length = 0;
gdjs.startCode.GDShotgunObjects3.length = 0;
gdjs.startCode.GDNewSprite2Objects1.length = 0;
gdjs.startCode.GDNewSprite2Objects2.length = 0;
gdjs.startCode.GDNewSprite2Objects3.length = 0;
gdjs.startCode.GDNewSprite3Objects1.length = 0;
gdjs.startCode.GDNewSprite3Objects2.length = 0;
gdjs.startCode.GDNewSprite3Objects3.length = 0;
gdjs.startCode.GDBlankeyObjects1.length = 0;
gdjs.startCode.GDBlankeyObjects2.length = 0;
gdjs.startCode.GDBlankeyObjects3.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;
gdjs.startCode.GDNewTextObjects3.length = 0;
gdjs.startCode.GDBlankPlayingCardObjects1.length = 0;
gdjs.startCode.GDBlankPlayingCardObjects2.length = 0;
gdjs.startCode.GDBlankPlayingCardObjects3.length = 0;
gdjs.startCode.GDNewSprite4Objects1.length = 0;
gdjs.startCode.GDNewSprite4Objects2.length = 0;
gdjs.startCode.GDNewSprite4Objects3.length = 0;
gdjs.startCode.GDBlankEmoteLeftObjects1.length = 0;
gdjs.startCode.GDBlankEmoteLeftObjects2.length = 0;
gdjs.startCode.GDBlankEmoteLeftObjects3.length = 0;
gdjs.startCode.GDBlankEmoteMidObjects1.length = 0;
gdjs.startCode.GDBlankEmoteMidObjects2.length = 0;
gdjs.startCode.GDBlankEmoteMidObjects3.length = 0;
gdjs.startCode.GDNewText2Objects1.length = 0;
gdjs.startCode.GDNewText2Objects2.length = 0;
gdjs.startCode.GDNewText2Objects3.length = 0;
gdjs.startCode.GDTransitionObjects1.length = 0;
gdjs.startCode.GDTransitionObjects2.length = 0;
gdjs.startCode.GDTransitionObjects3.length = 0;
gdjs.startCode.GDDarkenObjects1.length = 0;
gdjs.startCode.GDDarkenObjects2.length = 0;
gdjs.startCode.GDDarkenObjects3.length = 0;
gdjs.startCode.GDNewSprite3Objects1.length = 0;
gdjs.startCode.GDNewSprite3Objects2.length = 0;
gdjs.startCode.GDNewSprite3Objects3.length = 0;


return;

}

gdjs['startCode'] = gdjs.startCode;
