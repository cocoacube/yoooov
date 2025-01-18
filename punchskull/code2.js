gdjs.Success2Code = {};
gdjs.Success2Code.localVariables = [];
gdjs.Success2Code.GDDesertBackground2Objects1= [];
gdjs.Success2Code.GDDesertBackground2Objects2= [];
gdjs.Success2Code.GDStarEmoteObjects1= [];
gdjs.Success2Code.GDStarEmoteObjects2= [];
gdjs.Success2Code.GDBlankEmoteObjects1= [];
gdjs.Success2Code.GDBlankEmoteObjects2= [];
gdjs.Success2Code.GDEmoteAlertObjects1= [];
gdjs.Success2Code.GDEmoteAlertObjects2= [];
gdjs.Success2Code.GDNewTextObjects1= [];
gdjs.Success2Code.GDNewTextObjects2= [];
gdjs.Success2Code.GDEmoteHeartObjects1= [];
gdjs.Success2Code.GDEmoteHeartObjects2= [];
gdjs.Success2Code.GDRedButtonWithStoneFrameObjects1= [];
gdjs.Success2Code.GDRedButtonWithStoneFrameObjects2= [];
gdjs.Success2Code.GDBlackDecoratedButtonObjects1= [];
gdjs.Success2Code.GDBlackDecoratedButtonObjects2= [];
gdjs.Success2Code.GDGreenButtonWithStoneFrameObjects1= [];
gdjs.Success2Code.GDGreenButtonWithStoneFrameObjects2= [];
gdjs.Success2Code.GDNewSpriteObjects1= [];
gdjs.Success2Code.GDNewSpriteObjects2= [];
gdjs.Success2Code.GDNewSprite2Objects1= [];
gdjs.Success2Code.GDNewSprite2Objects2= [];


gdjs.Success2Code.mapOfGDgdjs_9546Success2Code_9546GDStarEmoteObjects1Objects = Hashtable.newFrom({"StarEmote": gdjs.Success2Code.GDStarEmoteObjects1});
gdjs.Success2Code.mapOfGDgdjs_9546Success2Code_9546GDBlackDecoratedButtonObjects1Objects = Hashtable.newFrom({"BlackDecoratedButton": gdjs.Success2Code.GDBlackDecoratedButtonObjects1});
gdjs.Success2Code.mapOfGDgdjs_9546Success2Code_9546GDGreenButtonWithStoneFrameObjects1Objects = Hashtable.newFrom({"GreenButtonWithStoneFrame": gdjs.Success2Code.GDGreenButtonWithStoneFrameObjects1});
gdjs.Success2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StarEmote"), gdjs.Success2Code.GDStarEmoteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Success2Code.mapOfGDgdjs_9546Success2Code_9546GDStarEmoteObjects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EmoteAlert"), gdjs.Success2Code.GDEmoteAlertObjects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "ai");
}{for(var i = 0, len = gdjs.Success2Code.GDEmoteAlertObjects1.length ;i < len;++i) {
    gdjs.Success2Code.GDEmoteAlertObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "751052bbd3de6938713ebbe8782cc3f6feba91f9e3caf27272335ac4e549c0cd_Complete_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.Success2Code.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Success2Code.mapOfGDgdjs_9546Success2Code_9546GDBlackDecoratedButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "ai");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithStoneFrame"), gdjs.Success2Code.GDGreenButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Success2Code.mapOfGDgdjs_9546Success2Code_9546GDGreenButtonWithStoneFrameObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "satar", false);
}}

}


};

gdjs.Success2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Success2Code.GDDesertBackground2Objects1.length = 0;
gdjs.Success2Code.GDDesertBackground2Objects2.length = 0;
gdjs.Success2Code.GDStarEmoteObjects1.length = 0;
gdjs.Success2Code.GDStarEmoteObjects2.length = 0;
gdjs.Success2Code.GDBlankEmoteObjects1.length = 0;
gdjs.Success2Code.GDBlankEmoteObjects2.length = 0;
gdjs.Success2Code.GDEmoteAlertObjects1.length = 0;
gdjs.Success2Code.GDEmoteAlertObjects2.length = 0;
gdjs.Success2Code.GDNewTextObjects1.length = 0;
gdjs.Success2Code.GDNewTextObjects2.length = 0;
gdjs.Success2Code.GDEmoteHeartObjects1.length = 0;
gdjs.Success2Code.GDEmoteHeartObjects2.length = 0;
gdjs.Success2Code.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.Success2Code.GDRedButtonWithStoneFrameObjects2.length = 0;
gdjs.Success2Code.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.Success2Code.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.Success2Code.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs.Success2Code.GDGreenButtonWithStoneFrameObjects2.length = 0;
gdjs.Success2Code.GDNewSpriteObjects1.length = 0;
gdjs.Success2Code.GDNewSpriteObjects2.length = 0;
gdjs.Success2Code.GDNewSprite2Objects1.length = 0;
gdjs.Success2Code.GDNewSprite2Objects2.length = 0;

gdjs.Success2Code.eventsList0(runtimeScene);
gdjs.Success2Code.GDDesertBackground2Objects1.length = 0;
gdjs.Success2Code.GDDesertBackground2Objects2.length = 0;
gdjs.Success2Code.GDStarEmoteObjects1.length = 0;
gdjs.Success2Code.GDStarEmoteObjects2.length = 0;
gdjs.Success2Code.GDBlankEmoteObjects1.length = 0;
gdjs.Success2Code.GDBlankEmoteObjects2.length = 0;
gdjs.Success2Code.GDEmoteAlertObjects1.length = 0;
gdjs.Success2Code.GDEmoteAlertObjects2.length = 0;
gdjs.Success2Code.GDNewTextObjects1.length = 0;
gdjs.Success2Code.GDNewTextObjects2.length = 0;
gdjs.Success2Code.GDEmoteHeartObjects1.length = 0;
gdjs.Success2Code.GDEmoteHeartObjects2.length = 0;
gdjs.Success2Code.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.Success2Code.GDRedButtonWithStoneFrameObjects2.length = 0;
gdjs.Success2Code.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.Success2Code.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.Success2Code.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs.Success2Code.GDGreenButtonWithStoneFrameObjects2.length = 0;
gdjs.Success2Code.GDNewSpriteObjects1.length = 0;
gdjs.Success2Code.GDNewSpriteObjects2.length = 0;
gdjs.Success2Code.GDNewSprite2Objects1.length = 0;
gdjs.Success2Code.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['Success2Code'] = gdjs.Success2Code;
