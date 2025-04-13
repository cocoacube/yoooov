gdjs.dino1Code = {};
gdjs.dino1Code.localVariables = [];
gdjs.dino1Code.GDDinoDouxObjects1= [];
gdjs.dino1Code.GDDinoDouxObjects2= [];
gdjs.dino1Code.GDDinoMortObjects1= [];
gdjs.dino1Code.GDDinoMortObjects2= [];
gdjs.dino1Code.GDDinoShadowObjects1= [];
gdjs.dino1Code.GDDinoShadowObjects2= [];
gdjs.dino1Code.GDDinoVitaObjects1= [];
gdjs.dino1Code.GDDinoVitaObjects2= [];
gdjs.dino1Code.GDDinoLenaObjects1= [];
gdjs.dino1Code.GDDinoLenaObjects2= [];
gdjs.dino1Code.GDNewTextObjects1= [];
gdjs.dino1Code.GDNewTextObjects2= [];
gdjs.dino1Code.GDNewSpriteObjects1= [];
gdjs.dino1Code.GDNewSpriteObjects2= [];
gdjs.dino1Code.GDNewText2Objects1= [];
gdjs.dino1Code.GDNewText2Objects2= [];
gdjs.dino1Code.GDBlueButtonWithShadowObjects1= [];
gdjs.dino1Code.GDBlueButtonWithShadowObjects2= [];
gdjs.dino1Code.GDNewSprite2Objects1= [];
gdjs.dino1Code.GDNewSprite2Objects2= [];
gdjs.dino1Code.GDTransitionObjects1= [];
gdjs.dino1Code.GDTransitionObjects2= [];
gdjs.dino1Code.GDDarkenObjects1= [];
gdjs.dino1Code.GDDarkenObjects2= [];
gdjs.dino1Code.GDNewSprite3Objects1= [];
gdjs.dino1Code.GDNewSprite3Objects2= [];


gdjs.dino1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.dino1Code.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.dino1Code.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.dino1Code.GDBlueButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.dino1Code.GDBlueButtonWithShadowObjects1[k] = gdjs.dino1Code.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.dino1Code.GDBlueButtonWithShadowObjects1.length = k;
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

gdjs.dino1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.dino1Code.GDDinoDouxObjects1.length = 0;
gdjs.dino1Code.GDDinoDouxObjects2.length = 0;
gdjs.dino1Code.GDDinoMortObjects1.length = 0;
gdjs.dino1Code.GDDinoMortObjects2.length = 0;
gdjs.dino1Code.GDDinoShadowObjects1.length = 0;
gdjs.dino1Code.GDDinoShadowObjects2.length = 0;
gdjs.dino1Code.GDDinoVitaObjects1.length = 0;
gdjs.dino1Code.GDDinoVitaObjects2.length = 0;
gdjs.dino1Code.GDDinoLenaObjects1.length = 0;
gdjs.dino1Code.GDDinoLenaObjects2.length = 0;
gdjs.dino1Code.GDNewTextObjects1.length = 0;
gdjs.dino1Code.GDNewTextObjects2.length = 0;
gdjs.dino1Code.GDNewSpriteObjects1.length = 0;
gdjs.dino1Code.GDNewSpriteObjects2.length = 0;
gdjs.dino1Code.GDNewText2Objects1.length = 0;
gdjs.dino1Code.GDNewText2Objects2.length = 0;
gdjs.dino1Code.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.dino1Code.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.dino1Code.GDNewSprite2Objects1.length = 0;
gdjs.dino1Code.GDNewSprite2Objects2.length = 0;
gdjs.dino1Code.GDTransitionObjects1.length = 0;
gdjs.dino1Code.GDTransitionObjects2.length = 0;
gdjs.dino1Code.GDDarkenObjects1.length = 0;
gdjs.dino1Code.GDDarkenObjects2.length = 0;
gdjs.dino1Code.GDNewSprite3Objects1.length = 0;
gdjs.dino1Code.GDNewSprite3Objects2.length = 0;

gdjs.dino1Code.eventsList0(runtimeScene);
gdjs.dino1Code.GDDinoDouxObjects1.length = 0;
gdjs.dino1Code.GDDinoDouxObjects2.length = 0;
gdjs.dino1Code.GDDinoMortObjects1.length = 0;
gdjs.dino1Code.GDDinoMortObjects2.length = 0;
gdjs.dino1Code.GDDinoShadowObjects1.length = 0;
gdjs.dino1Code.GDDinoShadowObjects2.length = 0;
gdjs.dino1Code.GDDinoVitaObjects1.length = 0;
gdjs.dino1Code.GDDinoVitaObjects2.length = 0;
gdjs.dino1Code.GDDinoLenaObjects1.length = 0;
gdjs.dino1Code.GDDinoLenaObjects2.length = 0;
gdjs.dino1Code.GDNewTextObjects1.length = 0;
gdjs.dino1Code.GDNewTextObjects2.length = 0;
gdjs.dino1Code.GDNewSpriteObjects1.length = 0;
gdjs.dino1Code.GDNewSpriteObjects2.length = 0;
gdjs.dino1Code.GDNewText2Objects1.length = 0;
gdjs.dino1Code.GDNewText2Objects2.length = 0;
gdjs.dino1Code.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.dino1Code.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.dino1Code.GDNewSprite2Objects1.length = 0;
gdjs.dino1Code.GDNewSprite2Objects2.length = 0;
gdjs.dino1Code.GDTransitionObjects1.length = 0;
gdjs.dino1Code.GDTransitionObjects2.length = 0;
gdjs.dino1Code.GDDarkenObjects1.length = 0;
gdjs.dino1Code.GDDarkenObjects2.length = 0;
gdjs.dino1Code.GDNewSprite3Objects1.length = 0;
gdjs.dino1Code.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['dino1Code'] = gdjs.dino1Code;
