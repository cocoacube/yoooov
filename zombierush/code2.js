gdjs.you_32winCode = {};
gdjs.you_32winCode.localVariables = [];
gdjs.you_32winCode.GDAgentMikeObjects1= [];
gdjs.you_32winCode.GDAgentMikeObjects2= [];
gdjs.you_32winCode.GDRobotObjects1= [];
gdjs.you_32winCode.GDRobotObjects2= [];
gdjs.you_32winCode.GDRedButtonWithGoldFrameObjects1= [];
gdjs.you_32winCode.GDRedButtonWithGoldFrameObjects2= [];
gdjs.you_32winCode.GDGreenButtonWithStoneFrameObjects1= [];
gdjs.you_32winCode.GDGreenButtonWithStoneFrameObjects2= [];
gdjs.you_32winCode.GDBlackDecoratedButtonObjects1= [];
gdjs.you_32winCode.GDBlackDecoratedButtonObjects2= [];
gdjs.you_32winCode.GDGraveyardBackgroundObjects1= [];
gdjs.you_32winCode.GDGraveyardBackgroundObjects2= [];
gdjs.you_32winCode.GDRevolverObjects1= [];
gdjs.you_32winCode.GDRevolverObjects2= [];
gdjs.you_32winCode.GDShotgunObjects1= [];
gdjs.you_32winCode.GDShotgunObjects2= [];
gdjs.you_32winCode.GDAA12_9595g_9522823_9531206_9520891_9524037_9529305_9521035_95292561Objects1= [];
gdjs.you_32winCode.GDAA12_9595g_9522823_9531206_9520891_9524037_9529305_9521035_95292561Objects2= [];
gdjs.you_32winCode.GD_9526538_9526538_9529190_9522836_9565292_9522909_9536816_9531896_9531896_9512290_9525105_9526159_9529401_9520987_9525163_9534880_9524433_9565292_9527491_9529255_9524320_9522987_9520102_95652813Objects1= [];
gdjs.you_32winCode.GD_9526538_9526538_9529190_9522836_9565292_9522909_9536816_9531896_9531896_9512290_9525105_9526159_9529401_9520987_9525163_9534880_9524433_9565292_9527491_9529255_9524320_9522987_9520102_95652813Objects2= [];
gdjs.you_32winCode.GD_9528608_9520809_9528846_9595_9522823_9531206_9520891_9524037_9529305_9521035_95292562Objects1= [];
gdjs.you_32winCode.GD_9528608_9520809_9528846_9595_9522823_9531206_9520891_9524037_9529305_9521035_95292562Objects2= [];
gdjs.you_32winCode.GDNewSprite14Objects1= [];
gdjs.you_32winCode.GDNewSprite14Objects2= [];
gdjs.you_32winCode.GDNewSprite13Objects1= [];
gdjs.you_32winCode.GDNewSprite13Objects2= [];


gdjs.you_32winCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithStoneFrame"), gdjs.you_32winCode.GDGreenButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.you_32winCode.GDGreenButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.you_32winCode.GDGreenButtonWithStoneFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.you_32winCode.GDGreenButtonWithStoneFrameObjects1[k] = gdjs.you_32winCode.GDGreenButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.you_32winCode.GDGreenButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithGoldFrame"), gdjs.you_32winCode.GDRedButtonWithGoldFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.you_32winCode.GDRedButtonWithGoldFrameObjects1.length;i<l;++i) {
    if ( gdjs.you_32winCode.GDRedButtonWithGoldFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.you_32winCode.GDRedButtonWithGoldFrameObjects1[k] = gdjs.you_32winCode.GDRedButtonWithGoldFrameObjects1[i];
        ++k;
    }
}
gdjs.you_32winCode.GDRedButtonWithGoldFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level 2", false);
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


};

gdjs.you_32winCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.you_32winCode.GDAgentMikeObjects1.length = 0;
gdjs.you_32winCode.GDAgentMikeObjects2.length = 0;
gdjs.you_32winCode.GDRobotObjects1.length = 0;
gdjs.you_32winCode.GDRobotObjects2.length = 0;
gdjs.you_32winCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.you_32winCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.you_32winCode.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs.you_32winCode.GDGreenButtonWithStoneFrameObjects2.length = 0;
gdjs.you_32winCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.you_32winCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.you_32winCode.GDGraveyardBackgroundObjects1.length = 0;
gdjs.you_32winCode.GDGraveyardBackgroundObjects2.length = 0;
gdjs.you_32winCode.GDRevolverObjects1.length = 0;
gdjs.you_32winCode.GDRevolverObjects2.length = 0;
gdjs.you_32winCode.GDShotgunObjects1.length = 0;
gdjs.you_32winCode.GDShotgunObjects2.length = 0;
gdjs.you_32winCode.GDAA12_9595g_9522823_9531206_9520891_9524037_9529305_9521035_95292561Objects1.length = 0;
gdjs.you_32winCode.GDAA12_9595g_9522823_9531206_9520891_9524037_9529305_9521035_95292561Objects2.length = 0;
gdjs.you_32winCode.GD_9526538_9526538_9529190_9522836_9565292_9522909_9536816_9531896_9531896_9512290_9525105_9526159_9529401_9520987_9525163_9534880_9524433_9565292_9527491_9529255_9524320_9522987_9520102_95652813Objects1.length = 0;
gdjs.you_32winCode.GD_9526538_9526538_9529190_9522836_9565292_9522909_9536816_9531896_9531896_9512290_9525105_9526159_9529401_9520987_9525163_9534880_9524433_9565292_9527491_9529255_9524320_9522987_9520102_95652813Objects2.length = 0;
gdjs.you_32winCode.GD_9528608_9520809_9528846_9595_9522823_9531206_9520891_9524037_9529305_9521035_95292562Objects1.length = 0;
gdjs.you_32winCode.GD_9528608_9520809_9528846_9595_9522823_9531206_9520891_9524037_9529305_9521035_95292562Objects2.length = 0;
gdjs.you_32winCode.GDNewSprite14Objects1.length = 0;
gdjs.you_32winCode.GDNewSprite14Objects2.length = 0;
gdjs.you_32winCode.GDNewSprite13Objects1.length = 0;
gdjs.you_32winCode.GDNewSprite13Objects2.length = 0;

gdjs.you_32winCode.eventsList0(runtimeScene);
gdjs.you_32winCode.GDAgentMikeObjects1.length = 0;
gdjs.you_32winCode.GDAgentMikeObjects2.length = 0;
gdjs.you_32winCode.GDRobotObjects1.length = 0;
gdjs.you_32winCode.GDRobotObjects2.length = 0;
gdjs.you_32winCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.you_32winCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.you_32winCode.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs.you_32winCode.GDGreenButtonWithStoneFrameObjects2.length = 0;
gdjs.you_32winCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.you_32winCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.you_32winCode.GDGraveyardBackgroundObjects1.length = 0;
gdjs.you_32winCode.GDGraveyardBackgroundObjects2.length = 0;
gdjs.you_32winCode.GDRevolverObjects1.length = 0;
gdjs.you_32winCode.GDRevolverObjects2.length = 0;
gdjs.you_32winCode.GDShotgunObjects1.length = 0;
gdjs.you_32winCode.GDShotgunObjects2.length = 0;
gdjs.you_32winCode.GDAA12_9595g_9522823_9531206_9520891_9524037_9529305_9521035_95292561Objects1.length = 0;
gdjs.you_32winCode.GDAA12_9595g_9522823_9531206_9520891_9524037_9529305_9521035_95292561Objects2.length = 0;
gdjs.you_32winCode.GD_9526538_9526538_9529190_9522836_9565292_9522909_9536816_9531896_9531896_9512290_9525105_9526159_9529401_9520987_9525163_9534880_9524433_9565292_9527491_9529255_9524320_9522987_9520102_95652813Objects1.length = 0;
gdjs.you_32winCode.GD_9526538_9526538_9529190_9522836_9565292_9522909_9536816_9531896_9531896_9512290_9525105_9526159_9529401_9520987_9525163_9534880_9524433_9565292_9527491_9529255_9524320_9522987_9520102_95652813Objects2.length = 0;
gdjs.you_32winCode.GD_9528608_9520809_9528846_9595_9522823_9531206_9520891_9524037_9529305_9521035_95292562Objects1.length = 0;
gdjs.you_32winCode.GD_9528608_9520809_9528846_9595_9522823_9531206_9520891_9524037_9529305_9521035_95292562Objects2.length = 0;
gdjs.you_32winCode.GDNewSprite14Objects1.length = 0;
gdjs.you_32winCode.GDNewSprite14Objects2.length = 0;
gdjs.you_32winCode.GDNewSprite13Objects1.length = 0;
gdjs.you_32winCode.GDNewSprite13Objects2.length = 0;


return;

}

gdjs['you_32winCode'] = gdjs.you_32winCode;
