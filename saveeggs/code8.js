gdjs.dino3Code = {};
gdjs.dino3Code.localVariables = [];
gdjs.dino3Code.GDDinoDouxObjects1= [];
gdjs.dino3Code.GDDinoDouxObjects2= [];
gdjs.dino3Code.GDDinoMortObjects1= [];
gdjs.dino3Code.GDDinoMortObjects2= [];
gdjs.dino3Code.GDDinoShadowObjects1= [];
gdjs.dino3Code.GDDinoShadowObjects2= [];
gdjs.dino3Code.GDDinoVitaObjects1= [];
gdjs.dino3Code.GDDinoVitaObjects2= [];
gdjs.dino3Code.GDDinoLenaObjects1= [];
gdjs.dino3Code.GDDinoLenaObjects2= [];
gdjs.dino3Code.GDNewTextObjects1= [];
gdjs.dino3Code.GDNewTextObjects2= [];
gdjs.dino3Code.GDNewSpriteObjects1= [];
gdjs.dino3Code.GDNewSpriteObjects2= [];
gdjs.dino3Code.GDNewText2Objects1= [];
gdjs.dino3Code.GDNewText2Objects2= [];
gdjs.dino3Code.GDBlueButtonWithShadowObjects1= [];
gdjs.dino3Code.GDBlueButtonWithShadowObjects2= [];
gdjs.dino3Code.GDNewSprite2Objects1= [];
gdjs.dino3Code.GDNewSprite2Objects2= [];
gdjs.dino3Code.GDTransitionObjects1= [];
gdjs.dino3Code.GDTransitionObjects2= [];
gdjs.dino3Code.GDDarkenObjects1= [];
gdjs.dino3Code.GDDarkenObjects2= [];
gdjs.dino3Code.GDNewSprite3Objects1= [];
gdjs.dino3Code.GDNewSprite3Objects2= [];


gdjs.dino3Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.dino3Code.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.dino3Code.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.dino3Code.GDBlueButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.dino3Code.GDBlueButtonWithShadowObjects1[k] = gdjs.dino3Code.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.dino3Code.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game2", false);
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


};

gdjs.dino3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.dino3Code.GDDinoDouxObjects1.length = 0;
gdjs.dino3Code.GDDinoDouxObjects2.length = 0;
gdjs.dino3Code.GDDinoMortObjects1.length = 0;
gdjs.dino3Code.GDDinoMortObjects2.length = 0;
gdjs.dino3Code.GDDinoShadowObjects1.length = 0;
gdjs.dino3Code.GDDinoShadowObjects2.length = 0;
gdjs.dino3Code.GDDinoVitaObjects1.length = 0;
gdjs.dino3Code.GDDinoVitaObjects2.length = 0;
gdjs.dino3Code.GDDinoLenaObjects1.length = 0;
gdjs.dino3Code.GDDinoLenaObjects2.length = 0;
gdjs.dino3Code.GDNewTextObjects1.length = 0;
gdjs.dino3Code.GDNewTextObjects2.length = 0;
gdjs.dino3Code.GDNewSpriteObjects1.length = 0;
gdjs.dino3Code.GDNewSpriteObjects2.length = 0;
gdjs.dino3Code.GDNewText2Objects1.length = 0;
gdjs.dino3Code.GDNewText2Objects2.length = 0;
gdjs.dino3Code.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.dino3Code.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.dino3Code.GDNewSprite2Objects1.length = 0;
gdjs.dino3Code.GDNewSprite2Objects2.length = 0;
gdjs.dino3Code.GDTransitionObjects1.length = 0;
gdjs.dino3Code.GDTransitionObjects2.length = 0;
gdjs.dino3Code.GDDarkenObjects1.length = 0;
gdjs.dino3Code.GDDarkenObjects2.length = 0;
gdjs.dino3Code.GDNewSprite3Objects1.length = 0;
gdjs.dino3Code.GDNewSprite3Objects2.length = 0;

gdjs.dino3Code.eventsList0(runtimeScene);
gdjs.dino3Code.GDDinoDouxObjects1.length = 0;
gdjs.dino3Code.GDDinoDouxObjects2.length = 0;
gdjs.dino3Code.GDDinoMortObjects1.length = 0;
gdjs.dino3Code.GDDinoMortObjects2.length = 0;
gdjs.dino3Code.GDDinoShadowObjects1.length = 0;
gdjs.dino3Code.GDDinoShadowObjects2.length = 0;
gdjs.dino3Code.GDDinoVitaObjects1.length = 0;
gdjs.dino3Code.GDDinoVitaObjects2.length = 0;
gdjs.dino3Code.GDDinoLenaObjects1.length = 0;
gdjs.dino3Code.GDDinoLenaObjects2.length = 0;
gdjs.dino3Code.GDNewTextObjects1.length = 0;
gdjs.dino3Code.GDNewTextObjects2.length = 0;
gdjs.dino3Code.GDNewSpriteObjects1.length = 0;
gdjs.dino3Code.GDNewSpriteObjects2.length = 0;
gdjs.dino3Code.GDNewText2Objects1.length = 0;
gdjs.dino3Code.GDNewText2Objects2.length = 0;
gdjs.dino3Code.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.dino3Code.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.dino3Code.GDNewSprite2Objects1.length = 0;
gdjs.dino3Code.GDNewSprite2Objects2.length = 0;
gdjs.dino3Code.GDTransitionObjects1.length = 0;
gdjs.dino3Code.GDTransitionObjects2.length = 0;
gdjs.dino3Code.GDDarkenObjects1.length = 0;
gdjs.dino3Code.GDDarkenObjects2.length = 0;
gdjs.dino3Code.GDNewSprite3Objects1.length = 0;
gdjs.dino3Code.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['dino3Code'] = gdjs.dino3Code;
