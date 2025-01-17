gdjs.startCode = {};
gdjs.startCode.localVariables = [];
gdjs.startCode.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.startCode.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.startCode.GDBlueButtonObjects1= [];
gdjs.startCode.GDBlueButtonObjects2= [];
gdjs.startCode.GDBlackSquareDecoratedButtonObjects1= [];
gdjs.startCode.GDBlackSquareDecoratedButtonObjects2= [];
gdjs.startCode.GDBlueButtonWithShadowObjects1= [];
gdjs.startCode.GDBlueButtonWithShadowObjects2= [];
gdjs.startCode.GDBrownButtonWithShadowObjects1= [];
gdjs.startCode.GDBrownButtonWithShadowObjects2= [];
gdjs.startCode.GDBlackDecoratedButtonObjects1= [];
gdjs.startCode.GDBlackDecoratedButtonObjects2= [];
gdjs.startCode.GDGreyButtonObjects1= [];
gdjs.startCode.GDGreyButtonObjects2= [];
gdjs.startCode.GDGreenButtonWithShadowObjects1= [];
gdjs.startCode.GDGreenButtonWithShadowObjects2= [];
gdjs.startCode.GDGreyButtonWithShadowObjects1= [];
gdjs.startCode.GDGreyButtonWithShadowObjects2= [];
gdjs.startCode.GDGreenButtonWithStoneFrameObjects1= [];
gdjs.startCode.GDGreenButtonWithStoneFrameObjects2= [];
gdjs.startCode.GDMedievalButtonBeigeObjects1= [];
gdjs.startCode.GDMedievalButtonBeigeObjects2= [];
gdjs.startCode.GDMedievalButtonBrownObjects1= [];
gdjs.startCode.GDMedievalButtonBrownObjects2= [];
gdjs.startCode.GDOnScreenControlsButtonObjects1= [];
gdjs.startCode.GDOnScreenControlsButtonObjects2= [];
gdjs.startCode.GDOrangeBubbleButtonObjects1= [];
gdjs.startCode.GDOrangeBubbleButtonObjects2= [];
gdjs.startCode.GDGreenButtonObjects1= [];
gdjs.startCode.GDGreenButtonObjects2= [];
gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1= [];
gdjs.startCode.GDOrangeButtonWithStoneFrameObjects2= [];
gdjs.startCode.GDRedButtonWithGoldFrameObjects1= [];
gdjs.startCode.GDRedButtonWithGoldFrameObjects2= [];
gdjs.startCode.GDRedButtonWithShadowObjects1= [];
gdjs.startCode.GDRedButtonWithShadowObjects2= [];
gdjs.startCode.GDPurpleButtonWithShadowObjects1= [];
gdjs.startCode.GDPurpleButtonWithShadowObjects2= [];
gdjs.startCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.startCode.GDPurpleButtonWithStoneFrameObjects2= [];
gdjs.startCode.GDRedButtonWithStoneFrameObjects1= [];
gdjs.startCode.GDRedButtonWithStoneFrameObjects2= [];
gdjs.startCode.GDRedButtonWithMetalFrameObjects1= [];
gdjs.startCode.GDRedButtonWithMetalFrameObjects2= [];
gdjs.startCode.GDRedButtonObjects1= [];
gdjs.startCode.GDRedButtonObjects2= [];
gdjs.startCode.GDTransparentButtonWithWhiteYellowBorderObjects1= [];
gdjs.startCode.GDTransparentButtonWithWhiteYellowBorderObjects2= [];
gdjs.startCode.GDWhiteDecoratedButtonObjects1= [];
gdjs.startCode.GDWhiteDecoratedButtonObjects2= [];
gdjs.startCode.GDWhiteSleekButtonObjects1= [];
gdjs.startCode.GDWhiteSleekButtonObjects2= [];
gdjs.startCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.startCode.GDWhiteSquareDecoratedButtonObjects2= [];
gdjs.startCode.GDYellowButtonObjects1= [];
gdjs.startCode.GDYellowButtonObjects2= [];
gdjs.startCode.GDYellowJellyButtonObjects1= [];
gdjs.startCode.GDYellowJellyButtonObjects2= [];
gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.startCode.GDNewSpriteObjects1= [];
gdjs.startCode.GDNewSpriteObjects2= [];
gdjs.startCode.GDNewSprite2Objects1= [];
gdjs.startCode.GDNewSprite2Objects2= [];
gdjs.startCode.GDNewTextObjects1= [];
gdjs.startCode.GDNewTextObjects2= [];
gdjs.startCode.GDNewSprite3Objects1= [];
gdjs.startCode.GDNewSprite3Objects2= [];
gdjs.startCode.GDNewBitmapTextObjects1= [];
gdjs.startCode.GDNewBitmapTextObjects2= [];
gdjs.startCode.GD_959501Objects1= [];
gdjs.startCode.GD_959501Objects2= [];
gdjs.startCode.GDNewSprite4Objects1= [];
gdjs.startCode.GDNewSprite4Objects2= [];
gdjs.startCode.GDNewText2Objects1= [];
gdjs.startCode.GDNewText2Objects2= [];
gdjs.startCode.GDAgentMikeObjects1= [];
gdjs.startCode.GDAgentMikeObjects2= [];
gdjs.startCode.GDFireballObjects1= [];
gdjs.startCode.GDFireballObjects2= [];


gdjs.startCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "说明");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteYellowBorder"), gdjs.startCode.GDTransparentButtonWithWhiteYellowBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDTransparentButtonWithWhiteYellowBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDTransparentButtonWithWhiteYellowBorderObjects1[k] = gdjs.startCode.GDTransparentButtonWithWhiteYellowBorderObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_01"), gdjs.startCode.GD_959501Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GD_959501Objects1.length;i<l;++i) {
    if ( gdjs.startCode.GD_959501Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GD_959501Objects1[k] = gdjs.startCode.GD_959501Objects1[i];
        ++k;
    }
}
gdjs.startCode.GD_959501Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "说明");
}}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.startCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.startCode.GDBlueButtonObjects1.length = 0;
gdjs.startCode.GDBlueButtonObjects2.length = 0;
gdjs.startCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.startCode.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.startCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.startCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.startCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.startCode.GDBrownButtonWithShadowObjects2.length = 0;
gdjs.startCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.startCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.startCode.GDGreyButtonObjects1.length = 0;
gdjs.startCode.GDGreyButtonObjects2.length = 0;
gdjs.startCode.GDGreenButtonWithShadowObjects1.length = 0;
gdjs.startCode.GDGreenButtonWithShadowObjects2.length = 0;
gdjs.startCode.GDGreyButtonWithShadowObjects1.length = 0;
gdjs.startCode.GDGreyButtonWithShadowObjects2.length = 0;
gdjs.startCode.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs.startCode.GDGreenButtonWithStoneFrameObjects2.length = 0;
gdjs.startCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.startCode.GDMedievalButtonBeigeObjects2.length = 0;
gdjs.startCode.GDMedievalButtonBrownObjects1.length = 0;
gdjs.startCode.GDMedievalButtonBrownObjects2.length = 0;
gdjs.startCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.startCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.startCode.GDOrangeBubbleButtonObjects1.length = 0;
gdjs.startCode.GDOrangeBubbleButtonObjects2.length = 0;
gdjs.startCode.GDGreenButtonObjects1.length = 0;
gdjs.startCode.GDGreenButtonObjects2.length = 0;
gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1.length = 0;
gdjs.startCode.GDOrangeButtonWithStoneFrameObjects2.length = 0;
gdjs.startCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.startCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.startCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.startCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.startCode.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.startCode.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.startCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.startCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.startCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.startCode.GDRedButtonWithStoneFrameObjects2.length = 0;
gdjs.startCode.GDRedButtonWithMetalFrameObjects1.length = 0;
gdjs.startCode.GDRedButtonWithMetalFrameObjects2.length = 0;
gdjs.startCode.GDRedButtonObjects1.length = 0;
gdjs.startCode.GDRedButtonObjects2.length = 0;
gdjs.startCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.startCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.startCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.startCode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.startCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.startCode.GDWhiteSleekButtonObjects2.length = 0;
gdjs.startCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.startCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.startCode.GDYellowButtonObjects1.length = 0;
gdjs.startCode.GDYellowButtonObjects2.length = 0;
gdjs.startCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.startCode.GDYellowJellyButtonObjects2.length = 0;
gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewSprite2Objects1.length = 0;
gdjs.startCode.GDNewSprite2Objects2.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;
gdjs.startCode.GDNewSprite3Objects1.length = 0;
gdjs.startCode.GDNewSprite3Objects2.length = 0;
gdjs.startCode.GDNewBitmapTextObjects1.length = 0;
gdjs.startCode.GDNewBitmapTextObjects2.length = 0;
gdjs.startCode.GD_959501Objects1.length = 0;
gdjs.startCode.GD_959501Objects2.length = 0;
gdjs.startCode.GDNewSprite4Objects1.length = 0;
gdjs.startCode.GDNewSprite4Objects2.length = 0;
gdjs.startCode.GDNewText2Objects1.length = 0;
gdjs.startCode.GDNewText2Objects2.length = 0;
gdjs.startCode.GDAgentMikeObjects1.length = 0;
gdjs.startCode.GDAgentMikeObjects2.length = 0;
gdjs.startCode.GDFireballObjects1.length = 0;
gdjs.startCode.GDFireballObjects2.length = 0;

gdjs.startCode.eventsList0(runtimeScene);
gdjs.startCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.startCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.startCode.GDBlueButtonObjects1.length = 0;
gdjs.startCode.GDBlueButtonObjects2.length = 0;
gdjs.startCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.startCode.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.startCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.startCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.startCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.startCode.GDBrownButtonWithShadowObjects2.length = 0;
gdjs.startCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.startCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.startCode.GDGreyButtonObjects1.length = 0;
gdjs.startCode.GDGreyButtonObjects2.length = 0;
gdjs.startCode.GDGreenButtonWithShadowObjects1.length = 0;
gdjs.startCode.GDGreenButtonWithShadowObjects2.length = 0;
gdjs.startCode.GDGreyButtonWithShadowObjects1.length = 0;
gdjs.startCode.GDGreyButtonWithShadowObjects2.length = 0;
gdjs.startCode.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs.startCode.GDGreenButtonWithStoneFrameObjects2.length = 0;
gdjs.startCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.startCode.GDMedievalButtonBeigeObjects2.length = 0;
gdjs.startCode.GDMedievalButtonBrownObjects1.length = 0;
gdjs.startCode.GDMedievalButtonBrownObjects2.length = 0;
gdjs.startCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.startCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.startCode.GDOrangeBubbleButtonObjects1.length = 0;
gdjs.startCode.GDOrangeBubbleButtonObjects2.length = 0;
gdjs.startCode.GDGreenButtonObjects1.length = 0;
gdjs.startCode.GDGreenButtonObjects2.length = 0;
gdjs.startCode.GDOrangeButtonWithStoneFrameObjects1.length = 0;
gdjs.startCode.GDOrangeButtonWithStoneFrameObjects2.length = 0;
gdjs.startCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.startCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.startCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.startCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.startCode.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.startCode.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.startCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.startCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.startCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.startCode.GDRedButtonWithStoneFrameObjects2.length = 0;
gdjs.startCode.GDRedButtonWithMetalFrameObjects1.length = 0;
gdjs.startCode.GDRedButtonWithMetalFrameObjects2.length = 0;
gdjs.startCode.GDRedButtonObjects1.length = 0;
gdjs.startCode.GDRedButtonObjects2.length = 0;
gdjs.startCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.startCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.startCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.startCode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.startCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.startCode.GDWhiteSleekButtonObjects2.length = 0;
gdjs.startCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.startCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.startCode.GDYellowButtonObjects1.length = 0;
gdjs.startCode.GDYellowButtonObjects2.length = 0;
gdjs.startCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.startCode.GDYellowJellyButtonObjects2.length = 0;
gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.startCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewSprite2Objects1.length = 0;
gdjs.startCode.GDNewSprite2Objects2.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;
gdjs.startCode.GDNewSprite3Objects1.length = 0;
gdjs.startCode.GDNewSprite3Objects2.length = 0;
gdjs.startCode.GDNewBitmapTextObjects1.length = 0;
gdjs.startCode.GDNewBitmapTextObjects2.length = 0;
gdjs.startCode.GD_959501Objects1.length = 0;
gdjs.startCode.GD_959501Objects2.length = 0;
gdjs.startCode.GDNewSprite4Objects1.length = 0;
gdjs.startCode.GDNewSprite4Objects2.length = 0;
gdjs.startCode.GDNewText2Objects1.length = 0;
gdjs.startCode.GDNewText2Objects2.length = 0;
gdjs.startCode.GDAgentMikeObjects1.length = 0;
gdjs.startCode.GDAgentMikeObjects2.length = 0;
gdjs.startCode.GDFireballObjects1.length = 0;
gdjs.startCode.GDFireballObjects2.length = 0;


return;

}

gdjs['startCode'] = gdjs.startCode;
