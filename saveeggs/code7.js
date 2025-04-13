gdjs.dino2Code = {};
gdjs.dino2Code.localVariables = [];
gdjs.dino2Code.GDDinoDouxObjects1= [];
gdjs.dino2Code.GDDinoDouxObjects2= [];
gdjs.dino2Code.GDDinoMortObjects1= [];
gdjs.dino2Code.GDDinoMortObjects2= [];
gdjs.dino2Code.GDDinoShadowObjects1= [];
gdjs.dino2Code.GDDinoShadowObjects2= [];
gdjs.dino2Code.GDDinoVitaObjects1= [];
gdjs.dino2Code.GDDinoVitaObjects2= [];
gdjs.dino2Code.GDDinoLenaObjects1= [];
gdjs.dino2Code.GDDinoLenaObjects2= [];
gdjs.dino2Code.GDNewTextObjects1= [];
gdjs.dino2Code.GDNewTextObjects2= [];
gdjs.dino2Code.GDNewSpriteObjects1= [];
gdjs.dino2Code.GDNewSpriteObjects2= [];
gdjs.dino2Code.GDNewText2Objects1= [];
gdjs.dino2Code.GDNewText2Objects2= [];
gdjs.dino2Code.GDBlueButtonWithShadowObjects1= [];
gdjs.dino2Code.GDBlueButtonWithShadowObjects2= [];
gdjs.dino2Code.GDNewSprite2Objects1= [];
gdjs.dino2Code.GDNewSprite2Objects2= [];
gdjs.dino2Code.GDTransitionObjects1= [];
gdjs.dino2Code.GDTransitionObjects2= [];
gdjs.dino2Code.GDDarkenObjects1= [];
gdjs.dino2Code.GDDarkenObjects2= [];
gdjs.dino2Code.GDNewSprite3Objects1= [];
gdjs.dino2Code.GDNewSprite3Objects2= [];


gdjs.dino2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.dino2Code.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.dino2Code.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.dino2Code.GDBlueButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.dino2Code.GDBlueButtonWithShadowObjects1[k] = gdjs.dino2Code.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.dino2Code.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game2", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "1b076da05b01b6a99f825e9241940bc0b652218300d92689e45656a1c9dcb8f6_Happy Whistling Ukulele.aac", true, 100, 1);
}}

}


};

gdjs.dino2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.dino2Code.GDDinoDouxObjects1.length = 0;
gdjs.dino2Code.GDDinoDouxObjects2.length = 0;
gdjs.dino2Code.GDDinoMortObjects1.length = 0;
gdjs.dino2Code.GDDinoMortObjects2.length = 0;
gdjs.dino2Code.GDDinoShadowObjects1.length = 0;
gdjs.dino2Code.GDDinoShadowObjects2.length = 0;
gdjs.dino2Code.GDDinoVitaObjects1.length = 0;
gdjs.dino2Code.GDDinoVitaObjects2.length = 0;
gdjs.dino2Code.GDDinoLenaObjects1.length = 0;
gdjs.dino2Code.GDDinoLenaObjects2.length = 0;
gdjs.dino2Code.GDNewTextObjects1.length = 0;
gdjs.dino2Code.GDNewTextObjects2.length = 0;
gdjs.dino2Code.GDNewSpriteObjects1.length = 0;
gdjs.dino2Code.GDNewSpriteObjects2.length = 0;
gdjs.dino2Code.GDNewText2Objects1.length = 0;
gdjs.dino2Code.GDNewText2Objects2.length = 0;
gdjs.dino2Code.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.dino2Code.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.dino2Code.GDNewSprite2Objects1.length = 0;
gdjs.dino2Code.GDNewSprite2Objects2.length = 0;
gdjs.dino2Code.GDTransitionObjects1.length = 0;
gdjs.dino2Code.GDTransitionObjects2.length = 0;
gdjs.dino2Code.GDDarkenObjects1.length = 0;
gdjs.dino2Code.GDDarkenObjects2.length = 0;
gdjs.dino2Code.GDNewSprite3Objects1.length = 0;
gdjs.dino2Code.GDNewSprite3Objects2.length = 0;

gdjs.dino2Code.eventsList0(runtimeScene);
gdjs.dino2Code.GDDinoDouxObjects1.length = 0;
gdjs.dino2Code.GDDinoDouxObjects2.length = 0;
gdjs.dino2Code.GDDinoMortObjects1.length = 0;
gdjs.dino2Code.GDDinoMortObjects2.length = 0;
gdjs.dino2Code.GDDinoShadowObjects1.length = 0;
gdjs.dino2Code.GDDinoShadowObjects2.length = 0;
gdjs.dino2Code.GDDinoVitaObjects1.length = 0;
gdjs.dino2Code.GDDinoVitaObjects2.length = 0;
gdjs.dino2Code.GDDinoLenaObjects1.length = 0;
gdjs.dino2Code.GDDinoLenaObjects2.length = 0;
gdjs.dino2Code.GDNewTextObjects1.length = 0;
gdjs.dino2Code.GDNewTextObjects2.length = 0;
gdjs.dino2Code.GDNewSpriteObjects1.length = 0;
gdjs.dino2Code.GDNewSpriteObjects2.length = 0;
gdjs.dino2Code.GDNewText2Objects1.length = 0;
gdjs.dino2Code.GDNewText2Objects2.length = 0;
gdjs.dino2Code.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.dino2Code.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.dino2Code.GDNewSprite2Objects1.length = 0;
gdjs.dino2Code.GDNewSprite2Objects2.length = 0;
gdjs.dino2Code.GDTransitionObjects1.length = 0;
gdjs.dino2Code.GDTransitionObjects2.length = 0;
gdjs.dino2Code.GDDarkenObjects1.length = 0;
gdjs.dino2Code.GDDarkenObjects2.length = 0;
gdjs.dino2Code.GDNewSprite3Objects1.length = 0;
gdjs.dino2Code.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['dino2Code'] = gdjs.dino2Code;
