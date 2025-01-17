gdjs.startCode = {};
gdjs.startCode.localVariables = [];
gdjs.startCode.GDNewTiledSpriteObjects1= [];
gdjs.startCode.GDNewTiledSpriteObjects2= [];
gdjs.startCode.GDNewSpriteObjects1= [];
gdjs.startCode.GDNewSpriteObjects2= [];
gdjs.startCode.GDNewSprite2Objects1= [];
gdjs.startCode.GDNewSprite2Objects2= [];
gdjs.startCode.GDNewSprite3Objects1= [];
gdjs.startCode.GDNewSprite3Objects2= [];
gdjs.startCode.GDFireBallObjects1= [];
gdjs.startCode.GDFireBallObjects2= [];
gdjs.startCode.GDFireBall3Objects1= [];
gdjs.startCode.GDFireBall3Objects2= [];
gdjs.startCode.GDFireBall2Objects1= [];
gdjs.startCode.GDFireBall2Objects2= [];
gdjs.startCode.GDExplosion3Objects1= [];
gdjs.startCode.GDExplosion3Objects2= [];
gdjs.startCode.GDExplosion1Objects1= [];
gdjs.startCode.GDExplosion1Objects2= [];
gdjs.startCode.GDExplosion2Objects1= [];
gdjs.startCode.GDExplosion2Objects2= [];
gdjs.startCode.GDIceCastObjects1= [];
gdjs.startCode.GDIceCastObjects2= [];
gdjs.startCode.GDHolyExplosionObjects1= [];
gdjs.startCode.GDHolyExplosionObjects2= [];
gdjs.startCode.GDFireCastObjects1= [];
gdjs.startCode.GDFireCastObjects2= [];
gdjs.startCode.GDFireBurstObjects1= [];
gdjs.startCode.GDFireBurstObjects2= [];
gdjs.startCode.GDIcePickObjects1= [];
gdjs.startCode.GDIcePickObjects2= [];
gdjs.startCode.GDIceShatter2Objects1= [];
gdjs.startCode.GDIceShatter2Objects2= [];
gdjs.startCode.GDPoisonCastObjects1= [];
gdjs.startCode.GDPoisonCastObjects2= [];
gdjs.startCode.GDLightCastObjects1= [];
gdjs.startCode.GDLightCastObjects2= [];
gdjs.startCode.GDIceShatterObjects1= [];
gdjs.startCode.GDIceShatterObjects2= [];
gdjs.startCode.GDMediumStarObjects1= [];
gdjs.startCode.GDMediumStarObjects2= [];
gdjs.startCode.GDPoisonClawObjects1= [];
gdjs.startCode.GDPoisonClawObjects2= [];
gdjs.startCode.GDMagicBarrierObjects1= [];
gdjs.startCode.GDMagicBarrierObjects2= [];
gdjs.startCode.GDSmallStarObjects1= [];
gdjs.startCode.GDSmallStarObjects2= [];
gdjs.startCode.GDTornadoObjects1= [];
gdjs.startCode.GDTornadoObjects2= [];
gdjs.startCode.GDNewSprite4Objects1= [];
gdjs.startCode.GDNewSprite4Objects2= [];
gdjs.startCode.GDNewSprite5Objects1= [];
gdjs.startCode.GDNewSprite5Objects2= [];
gdjs.startCode.GDstartObjects1= [];
gdjs.startCode.GDstartObjects2= [];
gdjs.startCode.GDGreenButtonObjects1= [];
gdjs.startCode.GDGreenButtonObjects2= [];


gdjs.startCode.mapOfGDgdjs_9546startCode_9546GDMediumStarObjects2Objects = Hashtable.newFrom({"MediumStar": gdjs.startCode.GDMediumStarObjects2});
gdjs.startCode.eventsList0 = function(runtimeScene) {

};gdjs.startCode.asyncCallback25793996 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.startCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}gdjs.startCode.localVariables.length = 0;
}
gdjs.startCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.startCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.startCode.asyncCallback25793996(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fireworks");
}{gdjs.evtTools.sound.playSound(runtimeScene, "55ea0c2124e0ea6901bd11c51593809569d949c7c59b678932f02b2623c65a78_Ghost Town.aac", false, 34, 1);
}}

}


{


const repeatCount2 = 99;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.startCode.GDMediumStarObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "fireworks") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25792044);
}
}
if (isConditionTrue_0)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.startCode.mapOfGDgdjs_9546startCode_9546GDMediumStarObjects2Objects, gdjs.randomInRange(0, 1300), gdjs.randomInRange(0, 700), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fireworks");
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.startCode.GDstartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDstartObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDstartObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDstartObjects1[k] = gdjs.startCode.GDstartObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDstartObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.startCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.startCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.startCode.GDNewSprite3Objects1[i].addPolarForce(180, 1200, 1);
}
}
{ //Subevents
gdjs.startCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.startCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDGreenButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDGreenButtonObjects1[k] = gdjs.startCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "玩法", false);
}}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.startCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewSprite2Objects1.length = 0;
gdjs.startCode.GDNewSprite2Objects2.length = 0;
gdjs.startCode.GDNewSprite3Objects1.length = 0;
gdjs.startCode.GDNewSprite3Objects2.length = 0;
gdjs.startCode.GDFireBallObjects1.length = 0;
gdjs.startCode.GDFireBallObjects2.length = 0;
gdjs.startCode.GDFireBall3Objects1.length = 0;
gdjs.startCode.GDFireBall3Objects2.length = 0;
gdjs.startCode.GDFireBall2Objects1.length = 0;
gdjs.startCode.GDFireBall2Objects2.length = 0;
gdjs.startCode.GDExplosion3Objects1.length = 0;
gdjs.startCode.GDExplosion3Objects2.length = 0;
gdjs.startCode.GDExplosion1Objects1.length = 0;
gdjs.startCode.GDExplosion1Objects2.length = 0;
gdjs.startCode.GDExplosion2Objects1.length = 0;
gdjs.startCode.GDExplosion2Objects2.length = 0;
gdjs.startCode.GDIceCastObjects1.length = 0;
gdjs.startCode.GDIceCastObjects2.length = 0;
gdjs.startCode.GDHolyExplosionObjects1.length = 0;
gdjs.startCode.GDHolyExplosionObjects2.length = 0;
gdjs.startCode.GDFireCastObjects1.length = 0;
gdjs.startCode.GDFireCastObjects2.length = 0;
gdjs.startCode.GDFireBurstObjects1.length = 0;
gdjs.startCode.GDFireBurstObjects2.length = 0;
gdjs.startCode.GDIcePickObjects1.length = 0;
gdjs.startCode.GDIcePickObjects2.length = 0;
gdjs.startCode.GDIceShatter2Objects1.length = 0;
gdjs.startCode.GDIceShatter2Objects2.length = 0;
gdjs.startCode.GDPoisonCastObjects1.length = 0;
gdjs.startCode.GDPoisonCastObjects2.length = 0;
gdjs.startCode.GDLightCastObjects1.length = 0;
gdjs.startCode.GDLightCastObjects2.length = 0;
gdjs.startCode.GDIceShatterObjects1.length = 0;
gdjs.startCode.GDIceShatterObjects2.length = 0;
gdjs.startCode.GDMediumStarObjects1.length = 0;
gdjs.startCode.GDMediumStarObjects2.length = 0;
gdjs.startCode.GDPoisonClawObjects1.length = 0;
gdjs.startCode.GDPoisonClawObjects2.length = 0;
gdjs.startCode.GDMagicBarrierObjects1.length = 0;
gdjs.startCode.GDMagicBarrierObjects2.length = 0;
gdjs.startCode.GDSmallStarObjects1.length = 0;
gdjs.startCode.GDSmallStarObjects2.length = 0;
gdjs.startCode.GDTornadoObjects1.length = 0;
gdjs.startCode.GDTornadoObjects2.length = 0;
gdjs.startCode.GDNewSprite4Objects1.length = 0;
gdjs.startCode.GDNewSprite4Objects2.length = 0;
gdjs.startCode.GDNewSprite5Objects1.length = 0;
gdjs.startCode.GDNewSprite5Objects2.length = 0;
gdjs.startCode.GDstartObjects1.length = 0;
gdjs.startCode.GDstartObjects2.length = 0;
gdjs.startCode.GDGreenButtonObjects1.length = 0;
gdjs.startCode.GDGreenButtonObjects2.length = 0;

gdjs.startCode.eventsList2(runtimeScene);
gdjs.startCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.startCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewSprite2Objects1.length = 0;
gdjs.startCode.GDNewSprite2Objects2.length = 0;
gdjs.startCode.GDNewSprite3Objects1.length = 0;
gdjs.startCode.GDNewSprite3Objects2.length = 0;
gdjs.startCode.GDFireBallObjects1.length = 0;
gdjs.startCode.GDFireBallObjects2.length = 0;
gdjs.startCode.GDFireBall3Objects1.length = 0;
gdjs.startCode.GDFireBall3Objects2.length = 0;
gdjs.startCode.GDFireBall2Objects1.length = 0;
gdjs.startCode.GDFireBall2Objects2.length = 0;
gdjs.startCode.GDExplosion3Objects1.length = 0;
gdjs.startCode.GDExplosion3Objects2.length = 0;
gdjs.startCode.GDExplosion1Objects1.length = 0;
gdjs.startCode.GDExplosion1Objects2.length = 0;
gdjs.startCode.GDExplosion2Objects1.length = 0;
gdjs.startCode.GDExplosion2Objects2.length = 0;
gdjs.startCode.GDIceCastObjects1.length = 0;
gdjs.startCode.GDIceCastObjects2.length = 0;
gdjs.startCode.GDHolyExplosionObjects1.length = 0;
gdjs.startCode.GDHolyExplosionObjects2.length = 0;
gdjs.startCode.GDFireCastObjects1.length = 0;
gdjs.startCode.GDFireCastObjects2.length = 0;
gdjs.startCode.GDFireBurstObjects1.length = 0;
gdjs.startCode.GDFireBurstObjects2.length = 0;
gdjs.startCode.GDIcePickObjects1.length = 0;
gdjs.startCode.GDIcePickObjects2.length = 0;
gdjs.startCode.GDIceShatter2Objects1.length = 0;
gdjs.startCode.GDIceShatter2Objects2.length = 0;
gdjs.startCode.GDPoisonCastObjects1.length = 0;
gdjs.startCode.GDPoisonCastObjects2.length = 0;
gdjs.startCode.GDLightCastObjects1.length = 0;
gdjs.startCode.GDLightCastObjects2.length = 0;
gdjs.startCode.GDIceShatterObjects1.length = 0;
gdjs.startCode.GDIceShatterObjects2.length = 0;
gdjs.startCode.GDMediumStarObjects1.length = 0;
gdjs.startCode.GDMediumStarObjects2.length = 0;
gdjs.startCode.GDPoisonClawObjects1.length = 0;
gdjs.startCode.GDPoisonClawObjects2.length = 0;
gdjs.startCode.GDMagicBarrierObjects1.length = 0;
gdjs.startCode.GDMagicBarrierObjects2.length = 0;
gdjs.startCode.GDSmallStarObjects1.length = 0;
gdjs.startCode.GDSmallStarObjects2.length = 0;
gdjs.startCode.GDTornadoObjects1.length = 0;
gdjs.startCode.GDTornadoObjects2.length = 0;
gdjs.startCode.GDNewSprite4Objects1.length = 0;
gdjs.startCode.GDNewSprite4Objects2.length = 0;
gdjs.startCode.GDNewSprite5Objects1.length = 0;
gdjs.startCode.GDNewSprite5Objects2.length = 0;
gdjs.startCode.GDstartObjects1.length = 0;
gdjs.startCode.GDstartObjects2.length = 0;
gdjs.startCode.GDGreenButtonObjects1.length = 0;
gdjs.startCode.GDGreenButtonObjects2.length = 0;


return;

}

gdjs['startCode'] = gdjs.startCode;
