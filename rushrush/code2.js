gdjs.level2Code = {};
gdjs.level2Code.localVariables = [];
gdjs.level2Code.GDNewSpriteObjects1= [];
gdjs.level2Code.GDNewSpriteObjects2= [];
gdjs.level2Code.GDAgentMikeObjects1= [];
gdjs.level2Code.GDAgentMikeObjects2= [];
gdjs.level2Code.GDNewSprite2Objects1= [];
gdjs.level2Code.GDNewSprite2Objects2= [];
gdjs.level2Code.GDPlatform1Objects1= [];
gdjs.level2Code.GDPlatform1Objects2= [];
gdjs.level2Code.GDGreenBush4Objects1= [];
gdjs.level2Code.GDGreenBush4Objects2= [];
gdjs.level2Code.GDNewSprite3Objects1= [];
gdjs.level2Code.GDNewSprite3Objects2= [];
gdjs.level2Code.GDGasObjects1= [];
gdjs.level2Code.GDGasObjects2= [];
gdjs.level2Code.GDZombieObjects1= [];
gdjs.level2Code.GDZombieObjects2= [];
gdjs.level2Code.GDGoldIngotObjects1= [];
gdjs.level2Code.GDGoldIngotObjects2= [];
gdjs.level2Code.GDCopperRedBarObjects1= [];
gdjs.level2Code.GDCopperRedBarObjects2= [];
gdjs.level2Code.GDBlueExplosionObjects1= [];
gdjs.level2Code.GDBlueExplosionObjects2= [];
gdjs.level2Code.GDBasicExplosionEnergySparksObjects1= [];
gdjs.level2Code.GDBasicExplosionEnergySparksObjects2= [];
gdjs.level2Code.GDBasicExplosionSmoothObjects1= [];
gdjs.level2Code.GDBasicExplosionSmoothObjects2= [];
gdjs.level2Code.GDBasicExplosionEnergyObjects1= [];
gdjs.level2Code.GDBasicExplosionEnergyObjects2= [];
gdjs.level2Code.GDLightningTextureObjects1= [];
gdjs.level2Code.GDLightningTextureObjects2= [];
gdjs.level2Code.GDBlueExplosion2Objects1= [];
gdjs.level2Code.GDBlueExplosion2Objects2= [];
gdjs.level2Code.GDcoinNumberObjects1= [];
gdjs.level2Code.GDcoinNumberObjects2= [];
gdjs.level2Code.GDpointerObjects1= [];
gdjs.level2Code.GDpointerObjects2= [];
gdjs.level2Code.GDNewTextObjects1= [];
gdjs.level2Code.GDNewTextObjects2= [];
gdjs.level2Code.GDNewText2Objects1= [];
gdjs.level2Code.GDNewText2Objects2= [];
gdjs.level2Code.GDPointBlueObjects1= [];
gdjs.level2Code.GDPointBlueObjects2= [];
gdjs.level2Code.GDAgentMikeObjects1= [];
gdjs.level2Code.GDAgentMikeObjects2= [];
gdjs.level2Code.GDFireballObjects1= [];
gdjs.level2Code.GDFireballObjects2= [];


gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.level2Code.GDNewSprite3Objects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.level2Code.GDZombieObjects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.level2Code.GDZombieObjects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDAgentMikeObjects1Objects = Hashtable.newFrom({"AgentMike": gdjs.level2Code.GDAgentMikeObjects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDFireballObjects1Objects = Hashtable.newFrom({"Fireball": gdjs.level2Code.GDFireballObjects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.level2Code.GDZombieObjects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDFireballObjects1Objects = Hashtable.newFrom({"Fireball": gdjs.level2Code.GDFireballObjects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDGoldIngotObjects1Objects = Hashtable.newFrom({"GoldIngot": gdjs.level2Code.GDGoldIngotObjects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDAgentMikeObjects1Objects = Hashtable.newFrom({"AgentMike": gdjs.level2Code.GDAgentMikeObjects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDGoldIngotObjects1Objects = Hashtable.newFrom({"GoldIngot": gdjs.level2Code.GDGoldIngotObjects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.level2Code.GDZombieObjects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDPlatform1Objects1Objects = Hashtable.newFrom({"Platform1": gdjs.level2Code.GDPlatform1Objects1});
gdjs.level2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("coinNumber"), gdjs.level2Code.GDcoinNumberObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "zombietimer");
}{for(var i = 0, len = gdjs.level2Code.GDcoinNumberObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDcoinNumberObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "player", 0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("AgentMike"), gdjs.level2Code.GDAgentMikeObjects1);
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.level2Code.GDCopperRedBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.level2Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("PointBlue"), gdjs.level2Code.GDPointBlueObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.level2Code.GDAgentMikeObjects1.length !== 0 ? gdjs.level2Code.GDAgentMikeObjects1[0] : null), true, "player", 0);
}{for(var i = 0, len = gdjs.level2Code.GDPointBlueObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDPointBlueObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.level2Code.GDAgentMikeObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDAgentMikeObjects1[i].separateFromObjectsList(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDNewSprite3Objects1Objects, false);
}
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.level2Code.GDCopperRedBarObjects1.length !== 0 ? gdjs.level2Code.GDCopperRedBarObjects1[0] : null), (gdjs.level2Code.GDAgentMikeObjects1.length !== 0 ? gdjs.level2Code.GDAgentMikeObjects1[0] : null));
}{for(var i = 0, len = gdjs.level2Code.GDCopperRedBarObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDCopperRedBarObjects1[i].setPosition((( gdjs.level2Code.GDAgentMikeObjects1.length === 0 ) ? 0 :gdjs.level2Code.GDAgentMikeObjects1[0].getPointX("")),(( gdjs.level2Code.GDAgentMikeObjects1.length === 0 ) ? 0 :gdjs.level2Code.GDAgentMikeObjects1[0].getPointY("")) - 20);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "zombietimer") >= 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gas"), gdjs.level2Code.GDGasObjects1);
gdjs.level2Code.GDZombieObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDZombieObjects1Objects, (( gdjs.level2Code.GDGasObjects1.length === 0 ) ? 0 :gdjs.level2Code.GDGasObjects1[0].getAABBCenterX()), (( gdjs.level2Code.GDGasObjects1.length === 0 ) ? 0 :gdjs.level2Code.GDGasObjects1[0].getAABBCenterY()), "player");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "zombietimer");
}{for(var i = 0, len = gdjs.level2Code.GDZombieObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDZombieObjects1[i].getBehavior("Scale").setScale(3);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("AgentMike"), gdjs.level2Code.GDAgentMikeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.level2Code.GDZombieObjects1);
{for(var i = 0, len = gdjs.level2Code.GDZombieObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDZombieObjects1[i].rotateTowardPosition((( gdjs.level2Code.GDAgentMikeObjects1.length === 0 ) ? 0 :gdjs.level2Code.GDAgentMikeObjects1[0].getCenterXInScene()), (( gdjs.level2Code.GDAgentMikeObjects1.length === 0 ) ? 0 :gdjs.level2Code.GDAgentMikeObjects1[0].getCenterYInScene()), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.level2Code.GDZombieObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDZombieObjects1[i].addForceTowardObject((gdjs.level2Code.GDAgentMikeObjects1.length !== 0 ? gdjs.level2Code.GDAgentMikeObjects1[0] : null), 200, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AgentMike"), gdjs.level2Code.GDAgentMikeObjects1);
{for(var i = 0, len = gdjs.level2Code.GDAgentMikeObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDAgentMikeObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.level2Code.GDAgentMikeObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDAgentMikeObjects1[i].getBehavior("Animation").setAnimationName("Running");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AgentMike"), gdjs.level2Code.GDAgentMikeObjects1);
{for(var i = 0, len = gdjs.level2Code.GDAgentMikeObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDAgentMikeObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.level2Code.GDAgentMikeObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDAgentMikeObjects1[i].getBehavior("Animation").setAnimationName("Running");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AgentMike"), gdjs.level2Code.GDAgentMikeObjects1);
{for(var i = 0, len = gdjs.level2Code.GDAgentMikeObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDAgentMikeObjects1[i].getBehavior("Animation").setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AgentMike"), gdjs.level2Code.GDAgentMikeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2Code.GDAgentMikeObjects1.length;i<l;++i) {
    if ( gdjs.level2Code.GDAgentMikeObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.level2Code.GDAgentMikeObjects1[k] = gdjs.level2Code.GDAgentMikeObjects1[i];
        ++k;
    }
}
gdjs.level2Code.GDAgentMikeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level2Code.GDAgentMikeObjects1 */
{for(var i = 0, len = gdjs.level2Code.GDAgentMikeObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDAgentMikeObjects1[i].getBehavior("Animation").setAnimationName("Falling");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AgentMike"), gdjs.level2Code.GDAgentMikeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.level2Code.GDZombieObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDZombieObjects1Objects, gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDAgentMikeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.level2Code.GDCopperRedBarObjects1);
/* Reuse gdjs.level2Code.GDZombieObjects1 */
{for(var i = 0, len = gdjs.level2Code.GDCopperRedBarObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDCopperRedBarObjects1[i].SetValue(gdjs.level2Code.GDCopperRedBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (10), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.level2Code.GDZombieObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDZombieObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(30141108);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AgentMike"), gdjs.level2Code.GDAgentMikeObjects1);
gdjs.level2Code.GDFireballObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDFireballObjects1Objects, (( gdjs.level2Code.GDAgentMikeObjects1.length === 0 ) ? 0 :gdjs.level2Code.GDAgentMikeObjects1[0].getCenterXInScene()), (( gdjs.level2Code.GDAgentMikeObjects1.length === 0 ) ? 0 :gdjs.level2Code.GDAgentMikeObjects1[0].getCenterYInScene()), "player");
}{for(var i = 0, len = gdjs.level2Code.GDFireballObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDFireballObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 500, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fireball"), gdjs.level2Code.GDFireballObjects1);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.level2Code.GDZombieObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDZombieObjects1Objects, gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDFireballObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.level2Code.GDFireballObjects1 */
/* Reuse gdjs.level2Code.GDZombieObjects1 */
gdjs.level2Code.GDGoldIngotObjects1.length = 0;

{for(var i = 0, len = gdjs.level2Code.GDZombieObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDZombieObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.level2Code.GDFireballObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDFireballObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDGoldIngotObjects1Objects, (( gdjs.level2Code.GDZombieObjects1.length === 0 ) ? 0 :gdjs.level2Code.GDZombieObjects1[0].getCenterXInScene()), (( gdjs.level2Code.GDZombieObjects1.length === 0 ) ? 0 :gdjs.level2Code.GDZombieObjects1[0].getCenterYInScene()), "player");
}{for(var i = 0, len = gdjs.level2Code.GDGoldIngotObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDGoldIngotObjects1[i].getBehavior("Scale").setScale(2.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AgentMike"), gdjs.level2Code.GDAgentMikeObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoldIngot"), gdjs.level2Code.GDGoldIngotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDAgentMikeObjects1Objects, gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDGoldIngotObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.level2Code.GDGoldIngotObjects1 */
gdjs.copyArray(runtimeScene.getObjects("coinNumber"), gdjs.level2Code.GDcoinNumberObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.level2Code.GDGoldIngotObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDGoldIngotObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.level2Code.GDcoinNumberObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDcoinNumberObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.level2Code.GDZombieObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2Code.GDZombieObjects1.length;i<l;++i) {
    if ( gdjs.level2Code.GDZombieObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.level2Code.GDZombieObjects1[k] = gdjs.level2Code.GDZombieObjects1[i];
        ++k;
    }
}
gdjs.level2Code.GDZombieObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level2Code.GDZombieObjects1 */
{for(var i = 0, len = gdjs.level2Code.GDZombieObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDZombieObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform1"), gdjs.level2Code.GDPlatform1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.level2Code.GDZombieObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDZombieObjects1Objects, gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDPlatform1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.level2Code.GDZombieObjects1 */
{for(var i = 0, len = gdjs.level2Code.GDZombieObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDZombieObjects1[i].addForce(5, -(50), 1);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.level2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level2Code.GDNewSpriteObjects1.length = 0;
gdjs.level2Code.GDNewSpriteObjects2.length = 0;
gdjs.level2Code.GDAgentMikeObjects1.length = 0;
gdjs.level2Code.GDAgentMikeObjects2.length = 0;
gdjs.level2Code.GDNewSprite2Objects1.length = 0;
gdjs.level2Code.GDNewSprite2Objects2.length = 0;
gdjs.level2Code.GDPlatform1Objects1.length = 0;
gdjs.level2Code.GDPlatform1Objects2.length = 0;
gdjs.level2Code.GDGreenBush4Objects1.length = 0;
gdjs.level2Code.GDGreenBush4Objects2.length = 0;
gdjs.level2Code.GDNewSprite3Objects1.length = 0;
gdjs.level2Code.GDNewSprite3Objects2.length = 0;
gdjs.level2Code.GDGasObjects1.length = 0;
gdjs.level2Code.GDGasObjects2.length = 0;
gdjs.level2Code.GDZombieObjects1.length = 0;
gdjs.level2Code.GDZombieObjects2.length = 0;
gdjs.level2Code.GDGoldIngotObjects1.length = 0;
gdjs.level2Code.GDGoldIngotObjects2.length = 0;
gdjs.level2Code.GDCopperRedBarObjects1.length = 0;
gdjs.level2Code.GDCopperRedBarObjects2.length = 0;
gdjs.level2Code.GDBlueExplosionObjects1.length = 0;
gdjs.level2Code.GDBlueExplosionObjects2.length = 0;
gdjs.level2Code.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.level2Code.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.level2Code.GDBasicExplosionSmoothObjects1.length = 0;
gdjs.level2Code.GDBasicExplosionSmoothObjects2.length = 0;
gdjs.level2Code.GDBasicExplosionEnergyObjects1.length = 0;
gdjs.level2Code.GDBasicExplosionEnergyObjects2.length = 0;
gdjs.level2Code.GDLightningTextureObjects1.length = 0;
gdjs.level2Code.GDLightningTextureObjects2.length = 0;
gdjs.level2Code.GDBlueExplosion2Objects1.length = 0;
gdjs.level2Code.GDBlueExplosion2Objects2.length = 0;
gdjs.level2Code.GDcoinNumberObjects1.length = 0;
gdjs.level2Code.GDcoinNumberObjects2.length = 0;
gdjs.level2Code.GDpointerObjects1.length = 0;
gdjs.level2Code.GDpointerObjects2.length = 0;
gdjs.level2Code.GDNewTextObjects1.length = 0;
gdjs.level2Code.GDNewTextObjects2.length = 0;
gdjs.level2Code.GDNewText2Objects1.length = 0;
gdjs.level2Code.GDNewText2Objects2.length = 0;
gdjs.level2Code.GDPointBlueObjects1.length = 0;
gdjs.level2Code.GDPointBlueObjects2.length = 0;
gdjs.level2Code.GDAgentMikeObjects1.length = 0;
gdjs.level2Code.GDAgentMikeObjects2.length = 0;
gdjs.level2Code.GDFireballObjects1.length = 0;
gdjs.level2Code.GDFireballObjects2.length = 0;

gdjs.level2Code.eventsList0(runtimeScene);
gdjs.level2Code.GDNewSpriteObjects1.length = 0;
gdjs.level2Code.GDNewSpriteObjects2.length = 0;
gdjs.level2Code.GDAgentMikeObjects1.length = 0;
gdjs.level2Code.GDAgentMikeObjects2.length = 0;
gdjs.level2Code.GDNewSprite2Objects1.length = 0;
gdjs.level2Code.GDNewSprite2Objects2.length = 0;
gdjs.level2Code.GDPlatform1Objects1.length = 0;
gdjs.level2Code.GDPlatform1Objects2.length = 0;
gdjs.level2Code.GDGreenBush4Objects1.length = 0;
gdjs.level2Code.GDGreenBush4Objects2.length = 0;
gdjs.level2Code.GDNewSprite3Objects1.length = 0;
gdjs.level2Code.GDNewSprite3Objects2.length = 0;
gdjs.level2Code.GDGasObjects1.length = 0;
gdjs.level2Code.GDGasObjects2.length = 0;
gdjs.level2Code.GDZombieObjects1.length = 0;
gdjs.level2Code.GDZombieObjects2.length = 0;
gdjs.level2Code.GDGoldIngotObjects1.length = 0;
gdjs.level2Code.GDGoldIngotObjects2.length = 0;
gdjs.level2Code.GDCopperRedBarObjects1.length = 0;
gdjs.level2Code.GDCopperRedBarObjects2.length = 0;
gdjs.level2Code.GDBlueExplosionObjects1.length = 0;
gdjs.level2Code.GDBlueExplosionObjects2.length = 0;
gdjs.level2Code.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.level2Code.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.level2Code.GDBasicExplosionSmoothObjects1.length = 0;
gdjs.level2Code.GDBasicExplosionSmoothObjects2.length = 0;
gdjs.level2Code.GDBasicExplosionEnergyObjects1.length = 0;
gdjs.level2Code.GDBasicExplosionEnergyObjects2.length = 0;
gdjs.level2Code.GDLightningTextureObjects1.length = 0;
gdjs.level2Code.GDLightningTextureObjects2.length = 0;
gdjs.level2Code.GDBlueExplosion2Objects1.length = 0;
gdjs.level2Code.GDBlueExplosion2Objects2.length = 0;
gdjs.level2Code.GDcoinNumberObjects1.length = 0;
gdjs.level2Code.GDcoinNumberObjects2.length = 0;
gdjs.level2Code.GDpointerObjects1.length = 0;
gdjs.level2Code.GDpointerObjects2.length = 0;
gdjs.level2Code.GDNewTextObjects1.length = 0;
gdjs.level2Code.GDNewTextObjects2.length = 0;
gdjs.level2Code.GDNewText2Objects1.length = 0;
gdjs.level2Code.GDNewText2Objects2.length = 0;
gdjs.level2Code.GDPointBlueObjects1.length = 0;
gdjs.level2Code.GDPointBlueObjects2.length = 0;
gdjs.level2Code.GDAgentMikeObjects1.length = 0;
gdjs.level2Code.GDAgentMikeObjects2.length = 0;
gdjs.level2Code.GDFireballObjects1.length = 0;
gdjs.level2Code.GDFireballObjects2.length = 0;


return;

}

gdjs['level2Code'] = gdjs.level2Code;
