gdjs.win_33Code = {};
gdjs.win_33Code.localVariables = [];
gdjs.win_33Code.GDDinoDouxObjects1= [];
gdjs.win_33Code.GDDinoDouxObjects2= [];
gdjs.win_33Code.GDDinoLenaObjects1= [];
gdjs.win_33Code.GDDinoLenaObjects2= [];
gdjs.win_33Code.GDDinoMortObjects1= [];
gdjs.win_33Code.GDDinoMortObjects2= [];
gdjs.win_33Code.GDBlueButtonObjects1= [];
gdjs.win_33Code.GDBlueButtonObjects2= [];
gdjs.win_33Code.GDNewSpriteObjects1= [];
gdjs.win_33Code.GDNewSpriteObjects2= [];
gdjs.win_33Code.GDTransitionObjects1= [];
gdjs.win_33Code.GDTransitionObjects2= [];
gdjs.win_33Code.GDDarkenObjects1= [];
gdjs.win_33Code.GDDarkenObjects2= [];
gdjs.win_33Code.GDNewSprite3Objects1= [];
gdjs.win_33Code.GDNewSprite3Objects2= [];


gdjs.win_33Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DinoMort"), gdjs.win_33Code.GDDinoMortObjects1);
{for(var i = 0, len = gdjs.win_33Code.GDDinoMortObjects1.length ;i < len;++i) {
    gdjs.win_33Code.GDDinoMortObjects1[i].getBehavior("Animation").setAnimationName("Kick");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DinoLena"), gdjs.win_33Code.GDDinoLenaObjects1);
{for(var i = 0, len = gdjs.win_33Code.GDDinoLenaObjects1.length ;i < len;++i) {
    gdjs.win_33Code.GDDinoLenaObjects1[i].getBehavior("Animation").setAnimationName("Kick");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DinoDoux"), gdjs.win_33Code.GDDinoDouxObjects1);
{for(var i = 0, len = gdjs.win_33Code.GDDinoDouxObjects1.length ;i < len;++i) {
    gdjs.win_33Code.GDDinoDouxObjects1[i].getBehavior("Animation").setAnimationName("Kick");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DinoLena"), gdjs.win_33Code.GDDinoLenaObjects1);
{for(var i = 0, len = gdjs.win_33Code.GDDinoLenaObjects1.length ;i < len;++i) {
    gdjs.win_33Code.GDDinoLenaObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "1b076da05b01b6a99f825e9241940bc0b652218300d92689e45656a1c9dcb8f6_Happy Whistling Ukulele.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.win_33Code.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.win_33Code.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.win_33Code.GDBlueButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.win_33Code.GDBlueButtonObjects1[k] = gdjs.win_33Code.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.win_33Code.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.win_33Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.win_33Code.GDDinoDouxObjects1.length = 0;
gdjs.win_33Code.GDDinoDouxObjects2.length = 0;
gdjs.win_33Code.GDDinoLenaObjects1.length = 0;
gdjs.win_33Code.GDDinoLenaObjects2.length = 0;
gdjs.win_33Code.GDDinoMortObjects1.length = 0;
gdjs.win_33Code.GDDinoMortObjects2.length = 0;
gdjs.win_33Code.GDBlueButtonObjects1.length = 0;
gdjs.win_33Code.GDBlueButtonObjects2.length = 0;
gdjs.win_33Code.GDNewSpriteObjects1.length = 0;
gdjs.win_33Code.GDNewSpriteObjects2.length = 0;
gdjs.win_33Code.GDTransitionObjects1.length = 0;
gdjs.win_33Code.GDTransitionObjects2.length = 0;
gdjs.win_33Code.GDDarkenObjects1.length = 0;
gdjs.win_33Code.GDDarkenObjects2.length = 0;
gdjs.win_33Code.GDNewSprite3Objects1.length = 0;
gdjs.win_33Code.GDNewSprite3Objects2.length = 0;

gdjs.win_33Code.eventsList0(runtimeScene);
gdjs.win_33Code.GDDinoDouxObjects1.length = 0;
gdjs.win_33Code.GDDinoDouxObjects2.length = 0;
gdjs.win_33Code.GDDinoLenaObjects1.length = 0;
gdjs.win_33Code.GDDinoLenaObjects2.length = 0;
gdjs.win_33Code.GDDinoMortObjects1.length = 0;
gdjs.win_33Code.GDDinoMortObjects2.length = 0;
gdjs.win_33Code.GDBlueButtonObjects1.length = 0;
gdjs.win_33Code.GDBlueButtonObjects2.length = 0;
gdjs.win_33Code.GDNewSpriteObjects1.length = 0;
gdjs.win_33Code.GDNewSpriteObjects2.length = 0;
gdjs.win_33Code.GDTransitionObjects1.length = 0;
gdjs.win_33Code.GDTransitionObjects2.length = 0;
gdjs.win_33Code.GDDarkenObjects1.length = 0;
gdjs.win_33Code.GDDarkenObjects2.length = 0;
gdjs.win_33Code.GDNewSprite3Objects1.length = 0;
gdjs.win_33Code.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['win_33Code'] = gdjs.win_33Code;
