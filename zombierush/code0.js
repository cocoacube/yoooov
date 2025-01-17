gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDGunslingerObjects1= [];
gdjs.Untitled_32sceneCode.GDGunslingerObjects2= [];
gdjs.Untitled_32sceneCode.GDGatlingGunObjects1= [];
gdjs.Untitled_32sceneCode.GDGatlingGunObjects2= [];
gdjs.Untitled_32sceneCode.GDShotgunObjects1= [];
gdjs.Untitled_32sceneCode.GDShotgunObjects2= [];
gdjs.Untitled_32sceneCode.GDRifleObjects1= [];
gdjs.Untitled_32sceneCode.GDRifleObjects2= [];
gdjs.Untitled_32sceneCode.GDGunObjects1= [];
gdjs.Untitled_32sceneCode.GDGunObjects2= [];
gdjs.Untitled_32sceneCode.GDMissileObjects1= [];
gdjs.Untitled_32sceneCode.GDMissileObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDBigSpaceGun2000PickupObjects1= [];
gdjs.Untitled_32sceneCode.GDBigSpaceGun2000PickupObjects2= [];
gdjs.Untitled_32sceneCode.GDRocketPickupObjects1= [];
gdjs.Untitled_32sceneCode.GDRocketPickupObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite4Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite4Objects2= [];
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1= [];
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects2= [];
gdjs.Untitled_32sceneCode.GDOrangeButtonWithStoneFrameObjects1= [];
gdjs.Untitled_32sceneCode.GDOrangeButtonWithStoneFrameObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite5Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite5Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2= [];
gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.Untitled_32sceneCode.GDAgentMike2Objects1= [];
gdjs.Untitled_32sceneCode.GDAgentMike2Objects2= [];
gdjs.Untitled_32sceneCode.GDBlackSquareDecoratedButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDBlackSquareDecoratedButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDAgentMikeObjects1= [];
gdjs.Untitled_32sceneCode.GDAgentMikeObjects2= [];
gdjs.Untitled_32sceneCode.GDRobotObjects1= [];
gdjs.Untitled_32sceneCode.GDRobotObjects2= [];
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1= [];
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects2= [];
gdjs.Untitled_32sceneCode.GDGreenButtonWithStoneFrameObjects1= [];
gdjs.Untitled_32sceneCode.GDGreenButtonWithStoneFrameObjects2= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDGraveyardBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDGraveyardBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDRevolverObjects1= [];
gdjs.Untitled_32sceneCode.GDRevolverObjects2= [];
gdjs.Untitled_32sceneCode.GDShotgunObjects1= [];
gdjs.Untitled_32sceneCode.GDShotgunObjects2= [];
gdjs.Untitled_32sceneCode.GDAA12_9595g_9522823_9531206_9520891_9524037_9529305_9521035_95292561Objects1= [];
gdjs.Untitled_32sceneCode.GDAA12_9595g_9522823_9531206_9520891_9524037_9529305_9521035_95292561Objects2= [];
gdjs.Untitled_32sceneCode.GD_9526538_9526538_9529190_9522836_9565292_9522909_9536816_9531896_9531896_9512290_9525105_9526159_9529401_9520987_9525163_9534880_9524433_9565292_9527491_9529255_9524320_9522987_9520102_95652813Objects1= [];
gdjs.Untitled_32sceneCode.GD_9526538_9526538_9529190_9522836_9565292_9522909_9536816_9531896_9531896_9512290_9525105_9526159_9529401_9520987_9525163_9534880_9524433_9565292_9527491_9529255_9524320_9522987_9520102_95652813Objects2= [];
gdjs.Untitled_32sceneCode.GD_9528608_9520809_9528846_9595_9522823_9531206_9520891_9524037_9529305_9521035_95292562Objects1= [];
gdjs.Untitled_32sceneCode.GD_9528608_9520809_9528846_9595_9522823_9531206_9520891_9524037_9529305_9521035_95292562Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite14Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite14Objects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OrangeButtonWithStoneFrame"), gdjs.Untitled_32sceneCode.GDOrangeButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDOrangeButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDOrangeButtonWithStoneFrameObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDOrangeButtonWithStoneFrameObjects1[k] = gdjs.Untitled_32sceneCode.GDOrangeButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDOrangeButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level 1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackSquareDecoratedButton"), gdjs.Untitled_32sceneCode.GDBlackSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBlackSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBlackSquareDecoratedButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBlackSquareDecoratedButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDBlackSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBlackSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "未命名场景", false);
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDGunslingerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGunslingerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGatlingGunObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGatlingGunObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDShotgunObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDShotgunObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRifleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRifleObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGunObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGunObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMissileObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMissileObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBigSpaceGun2000PickupObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBigSpaceGun2000PickupObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRocketPickupObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRocketPickupObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDOrangeButtonWithStoneFrameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDOrangeButtonWithStoneFrameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite5Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite5Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDAgentMike2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDAgentMike2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDAgentMikeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDAgentMikeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRobotObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRobotObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreenButtonWithStoneFrameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGraveyardBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGraveyardBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRevolverObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRevolverObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDShotgunObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDShotgunObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDAA12_9595g_9522823_9531206_9520891_9524037_9529305_9521035_95292561Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDAA12_9595g_9522823_9531206_9520891_9524037_9529305_9521035_95292561Objects2.length = 0;
gdjs.Untitled_32sceneCode.GD_9526538_9526538_9529190_9522836_9565292_9522909_9536816_9531896_9531896_9512290_9525105_9526159_9529401_9520987_9525163_9534880_9524433_9565292_9527491_9529255_9524320_9522987_9520102_95652813Objects1.length = 0;
gdjs.Untitled_32sceneCode.GD_9526538_9526538_9529190_9522836_9565292_9522909_9536816_9531896_9531896_9512290_9525105_9526159_9529401_9520987_9525163_9534880_9524433_9565292_9527491_9529255_9524320_9522987_9520102_95652813Objects2.length = 0;
gdjs.Untitled_32sceneCode.GD_9528608_9520809_9528846_9595_9522823_9531206_9520891_9524037_9529305_9521035_95292562Objects1.length = 0;
gdjs.Untitled_32sceneCode.GD_9528608_9520809_9528846_9595_9522823_9531206_9520891_9524037_9529305_9521035_95292562Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite14Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite14Objects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDGunslingerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGunslingerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGatlingGunObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGatlingGunObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDShotgunObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDShotgunObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRifleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRifleObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGunObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGunObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMissileObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMissileObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBigSpaceGun2000PickupObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBigSpaceGun2000PickupObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRocketPickupObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRocketPickupObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDOrangeButtonWithStoneFrameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDOrangeButtonWithStoneFrameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite5Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite5Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDAgentMike2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDAgentMike2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDAgentMikeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDAgentMikeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRobotObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRobotObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreenButtonWithStoneFrameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGraveyardBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGraveyardBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRevolverObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRevolverObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDShotgunObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDShotgunObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDAA12_9595g_9522823_9531206_9520891_9524037_9529305_9521035_95292561Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDAA12_9595g_9522823_9531206_9520891_9524037_9529305_9521035_95292561Objects2.length = 0;
gdjs.Untitled_32sceneCode.GD_9526538_9526538_9529190_9522836_9565292_9522909_9536816_9531896_9531896_9512290_9525105_9526159_9529401_9520987_9525163_9534880_9524433_9565292_9527491_9529255_9524320_9522987_9520102_95652813Objects1.length = 0;
gdjs.Untitled_32sceneCode.GD_9526538_9526538_9529190_9522836_9565292_9522909_9536816_9531896_9531896_9512290_9525105_9526159_9529401_9520987_9525163_9534880_9524433_9565292_9527491_9529255_9524320_9522987_9520102_95652813Objects2.length = 0;
gdjs.Untitled_32sceneCode.GD_9528608_9520809_9528846_9595_9522823_9531206_9520891_9524037_9529305_9521035_95292562Objects1.length = 0;
gdjs.Untitled_32sceneCode.GD_9528608_9520809_9528846_9595_9522823_9531206_9520891_9524037_9529305_9521035_95292562Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite14Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite14Objects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
