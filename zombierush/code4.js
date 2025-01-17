gdjs.you_32loseCode = {};
gdjs.you_32loseCode.localVariables = [];
gdjs.you_32loseCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.you_32loseCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.you_32loseCode.GDRedButtonWithGoldFrameObjects1= [];
gdjs.you_32loseCode.GDRedButtonWithGoldFrameObjects2= [];
gdjs.you_32loseCode.GDOnScreenControlsButtonObjects1= [];
gdjs.you_32loseCode.GDOnScreenControlsButtonObjects2= [];
gdjs.you_32loseCode.GDAgentMikeObjects1= [];
gdjs.you_32loseCode.GDAgentMikeObjects2= [];
gdjs.you_32loseCode.GDRobotObjects1= [];
gdjs.you_32loseCode.GDRobotObjects2= [];
gdjs.you_32loseCode.GDRedButtonWithGoldFrameObjects1= [];
gdjs.you_32loseCode.GDRedButtonWithGoldFrameObjects2= [];
gdjs.you_32loseCode.GDGreenButtonWithStoneFrameObjects1= [];
gdjs.you_32loseCode.GDGreenButtonWithStoneFrameObjects2= [];
gdjs.you_32loseCode.GDBlackDecoratedButtonObjects1= [];
gdjs.you_32loseCode.GDBlackDecoratedButtonObjects2= [];
gdjs.you_32loseCode.GDGraveyardBackgroundObjects1= [];
gdjs.you_32loseCode.GDGraveyardBackgroundObjects2= [];
gdjs.you_32loseCode.GDRevolverObjects1= [];
gdjs.you_32loseCode.GDRevolverObjects2= [];
gdjs.you_32loseCode.GDShotgunObjects1= [];
gdjs.you_32loseCode.GDShotgunObjects2= [];
gdjs.you_32loseCode.GDAA12_9595g_9522823_9531206_9520891_9524037_9529305_9521035_95292561Objects1= [];
gdjs.you_32loseCode.GDAA12_9595g_9522823_9531206_9520891_9524037_9529305_9521035_95292561Objects2= [];
gdjs.you_32loseCode.GD_9526538_9526538_9529190_9522836_9565292_9522909_9536816_9531896_9531896_9512290_9525105_9526159_9529401_9520987_9525163_9534880_9524433_9565292_9527491_9529255_9524320_9522987_9520102_95652813Objects1= [];
gdjs.you_32loseCode.GD_9526538_9526538_9529190_9522836_9565292_9522909_9536816_9531896_9531896_9512290_9525105_9526159_9529401_9520987_9525163_9534880_9524433_9565292_9527491_9529255_9524320_9522987_9520102_95652813Objects2= [];
gdjs.you_32loseCode.GD_9528608_9520809_9528846_9595_9522823_9531206_9520891_9524037_9529305_9521035_95292562Objects1= [];
gdjs.you_32loseCode.GD_9528608_9520809_9528846_9595_9522823_9531206_9520891_9524037_9529305_9521035_95292562Objects2= [];
gdjs.you_32loseCode.GDNewSprite14Objects1= [];
gdjs.you_32loseCode.GDNewSprite14Objects2= [];


gdjs.you_32loseCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.you_32loseCode.GDOnScreenControlsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.you_32loseCode.GDOnScreenControlsButtonObjects1.length;i<l;++i) {
    if ( gdjs.you_32loseCode.GDOnScreenControlsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.you_32loseCode.GDOnScreenControlsButtonObjects1[k] = gdjs.you_32loseCode.GDOnScreenControlsButtonObjects1[i];
        ++k;
    }
}
gdjs.you_32loseCode.GDOnScreenControlsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level 1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithGoldFrame"), gdjs.you_32loseCode.GDRedButtonWithGoldFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.you_32loseCode.GDRedButtonWithGoldFrameObjects1.length;i<l;++i) {
    if ( gdjs.you_32loseCode.GDRedButtonWithGoldFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.you_32loseCode.GDRedButtonWithGoldFrameObjects1[k] = gdjs.you_32loseCode.GDRedButtonWithGoldFrameObjects1[i];
        ++k;
    }
}
gdjs.you_32loseCode.GDRedButtonWithGoldFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};

gdjs.you_32loseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.you_32loseCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.you_32loseCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.you_32loseCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.you_32loseCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.you_32loseCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.you_32loseCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.you_32loseCode.GDAgentMikeObjects1.length = 0;
gdjs.you_32loseCode.GDAgentMikeObjects2.length = 0;
gdjs.you_32loseCode.GDRobotObjects1.length = 0;
gdjs.you_32loseCode.GDRobotObjects2.length = 0;
gdjs.you_32loseCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.you_32loseCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.you_32loseCode.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs.you_32loseCode.GDGreenButtonWithStoneFrameObjects2.length = 0;
gdjs.you_32loseCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.you_32loseCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.you_32loseCode.GDGraveyardBackgroundObjects1.length = 0;
gdjs.you_32loseCode.GDGraveyardBackgroundObjects2.length = 0;
gdjs.you_32loseCode.GDRevolverObjects1.length = 0;
gdjs.you_32loseCode.GDRevolverObjects2.length = 0;
gdjs.you_32loseCode.GDShotgunObjects1.length = 0;
gdjs.you_32loseCode.GDShotgunObjects2.length = 0;
gdjs.you_32loseCode.GDAA12_9595g_9522823_9531206_9520891_9524037_9529305_9521035_95292561Objects1.length = 0;
gdjs.you_32loseCode.GDAA12_9595g_9522823_9531206_9520891_9524037_9529305_9521035_95292561Objects2.length = 0;
gdjs.you_32loseCode.GD_9526538_9526538_9529190_9522836_9565292_9522909_9536816_9531896_9531896_9512290_9525105_9526159_9529401_9520987_9525163_9534880_9524433_9565292_9527491_9529255_9524320_9522987_9520102_95652813Objects1.length = 0;
gdjs.you_32loseCode.GD_9526538_9526538_9529190_9522836_9565292_9522909_9536816_9531896_9531896_9512290_9525105_9526159_9529401_9520987_9525163_9534880_9524433_9565292_9527491_9529255_9524320_9522987_9520102_95652813Objects2.length = 0;
gdjs.you_32loseCode.GD_9528608_9520809_9528846_9595_9522823_9531206_9520891_9524037_9529305_9521035_95292562Objects1.length = 0;
gdjs.you_32loseCode.GD_9528608_9520809_9528846_9595_9522823_9531206_9520891_9524037_9529305_9521035_95292562Objects2.length = 0;
gdjs.you_32loseCode.GDNewSprite14Objects1.length = 0;
gdjs.you_32loseCode.GDNewSprite14Objects2.length = 0;

gdjs.you_32loseCode.eventsList0(runtimeScene);
gdjs.you_32loseCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.you_32loseCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.you_32loseCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.you_32loseCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.you_32loseCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.you_32loseCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.you_32loseCode.GDAgentMikeObjects1.length = 0;
gdjs.you_32loseCode.GDAgentMikeObjects2.length = 0;
gdjs.you_32loseCode.GDRobotObjects1.length = 0;
gdjs.you_32loseCode.GDRobotObjects2.length = 0;
gdjs.you_32loseCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.you_32loseCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.you_32loseCode.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs.you_32loseCode.GDGreenButtonWithStoneFrameObjects2.length = 0;
gdjs.you_32loseCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.you_32loseCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.you_32loseCode.GDGraveyardBackgroundObjects1.length = 0;
gdjs.you_32loseCode.GDGraveyardBackgroundObjects2.length = 0;
gdjs.you_32loseCode.GDRevolverObjects1.length = 0;
gdjs.you_32loseCode.GDRevolverObjects2.length = 0;
gdjs.you_32loseCode.GDShotgunObjects1.length = 0;
gdjs.you_32loseCode.GDShotgunObjects2.length = 0;
gdjs.you_32loseCode.GDAA12_9595g_9522823_9531206_9520891_9524037_9529305_9521035_95292561Objects1.length = 0;
gdjs.you_32loseCode.GDAA12_9595g_9522823_9531206_9520891_9524037_9529305_9521035_95292561Objects2.length = 0;
gdjs.you_32loseCode.GD_9526538_9526538_9529190_9522836_9565292_9522909_9536816_9531896_9531896_9512290_9525105_9526159_9529401_9520987_9525163_9534880_9524433_9565292_9527491_9529255_9524320_9522987_9520102_95652813Objects1.length = 0;
gdjs.you_32loseCode.GD_9526538_9526538_9529190_9522836_9565292_9522909_9536816_9531896_9531896_9512290_9525105_9526159_9529401_9520987_9525163_9534880_9524433_9565292_9527491_9529255_9524320_9522987_9520102_95652813Objects2.length = 0;
gdjs.you_32loseCode.GD_9528608_9520809_9528846_9595_9522823_9531206_9520891_9524037_9529305_9521035_95292562Objects1.length = 0;
gdjs.you_32loseCode.GD_9528608_9520809_9528846_9595_9522823_9531206_9520891_9524037_9529305_9521035_95292562Objects2.length = 0;
gdjs.you_32loseCode.GDNewSprite14Objects1.length = 0;
gdjs.you_32loseCode.GDNewSprite14Objects2.length = 0;


return;

}

gdjs['you_32loseCode'] = gdjs.you_32loseCode;
