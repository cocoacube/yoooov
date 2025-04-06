gdjs.level2uCode = {};
gdjs.level2uCode.localVariables = [];
gdjs.level2uCode.GDWoodBackgroundObjects1= [];
gdjs.level2uCode.GDWoodBackgroundObjects2= [];
gdjs.level2uCode.GDWoodBackgroundObjects3= [];
gdjs.level2uCode.GDWoodBackgroundObjects4= [];
gdjs.level2uCode.GDGraveyardTileObjects1= [];
gdjs.level2uCode.GDGraveyardTileObjects2= [];
gdjs.level2uCode.GDGraveyardTileObjects3= [];
gdjs.level2uCode.GDGraveyardTileObjects4= [];
gdjs.level2uCode.GDPlatform2Objects1= [];
gdjs.level2uCode.GDPlatform2Objects2= [];
gdjs.level2uCode.GDPlatform2Objects3= [];
gdjs.level2uCode.GDPlatform2Objects4= [];
gdjs.level2uCode.GDBush1Objects1= [];
gdjs.level2uCode.GDBush1Objects2= [];
gdjs.level2uCode.GDBush1Objects3= [];
gdjs.level2uCode.GDBush1Objects4= [];
gdjs.level2uCode.GDPlatform1Objects1= [];
gdjs.level2uCode.GDPlatform1Objects2= [];
gdjs.level2uCode.GDPlatform1Objects3= [];
gdjs.level2uCode.GDPlatform1Objects4= [];
gdjs.level2uCode.GDEvilBearObjects1= [];
gdjs.level2uCode.GDEvilBearObjects2= [];
gdjs.level2uCode.GDEvilBearObjects3= [];
gdjs.level2uCode.GDEvilBearObjects4= [];
gdjs.level2uCode.GDNativeAngryObjects1= [];
gdjs.level2uCode.GDNativeAngryObjects2= [];
gdjs.level2uCode.GDNativeAngryObjects3= [];
gdjs.level2uCode.GDNativeAngryObjects4= [];
gdjs.level2uCode.GDSpikeHeadObjects1= [];
gdjs.level2uCode.GDSpikeHeadObjects2= [];
gdjs.level2uCode.GDSpikeHeadObjects3= [];
gdjs.level2uCode.GDSpikeHeadObjects4= [];
gdjs.level2uCode.GDRockHeadObjects1= [];
gdjs.level2uCode.GDRockHeadObjects2= [];
gdjs.level2uCode.GDRockHeadObjects3= [];
gdjs.level2uCode.GDRockHeadObjects4= [];
gdjs.level2uCode.GDSkeletonObjects1= [];
gdjs.level2uCode.GDSkeletonObjects2= [];
gdjs.level2uCode.GDSkeletonObjects3= [];
gdjs.level2uCode.GDSkeletonObjects4= [];
gdjs.level2uCode.GDLeafRangerObjects1= [];
gdjs.level2uCode.GDLeafRangerObjects2= [];
gdjs.level2uCode.GDLeafRangerObjects3= [];
gdjs.level2uCode.GDLeafRangerObjects4= [];
gdjs.level2uCode.GDArrowObjects1= [];
gdjs.level2uCode.GDArrowObjects2= [];
gdjs.level2uCode.GDArrowObjects3= [];
gdjs.level2uCode.GDArrowObjects4= [];
gdjs.level2uCode.GDBurgerCheeseDoubleObjects1= [];
gdjs.level2uCode.GDBurgerCheeseDoubleObjects2= [];
gdjs.level2uCode.GDBurgerCheeseDoubleObjects3= [];
gdjs.level2uCode.GDBurgerCheeseDoubleObjects4= [];
gdjs.level2uCode.GDRedFlatBarObjects1= [];
gdjs.level2uCode.GDRedFlatBarObjects2= [];
gdjs.level2uCode.GDRedFlatBarObjects3= [];
gdjs.level2uCode.GDRedFlatBarObjects4= [];
gdjs.level2uCode.GDBlueFlatBarObjects1= [];
gdjs.level2uCode.GDBlueFlatBarObjects2= [];
gdjs.level2uCode.GDBlueFlatBarObjects3= [];
gdjs.level2uCode.GDBlueFlatBarObjects4= [];
gdjs.level2uCode.GDCat6Objects1= [];
gdjs.level2uCode.GDCat6Objects2= [];
gdjs.level2uCode.GDCat6Objects3= [];
gdjs.level2uCode.GDCat6Objects4= [];
gdjs.level2uCode.GDlaserObjects1= [];
gdjs.level2uCode.GDlaserObjects2= [];
gdjs.level2uCode.GDlaserObjects3= [];
gdjs.level2uCode.GDlaserObjects4= [];
gdjs.level2uCode.GDNewSpriteObjects1= [];
gdjs.level2uCode.GDNewSpriteObjects2= [];
gdjs.level2uCode.GDNewSpriteObjects3= [];
gdjs.level2uCode.GDNewSpriteObjects4= [];
gdjs.level2uCode.GDRedPotionObjects1= [];
gdjs.level2uCode.GDRedPotionObjects2= [];
gdjs.level2uCode.GDRedPotionObjects3= [];
gdjs.level2uCode.GDRedPotionObjects4= [];
gdjs.level2uCode.GDMagicGreenSwordObjects1= [];
gdjs.level2uCode.GDMagicGreenSwordObjects2= [];
gdjs.level2uCode.GDMagicGreenSwordObjects3= [];
gdjs.level2uCode.GDMagicGreenSwordObjects4= [];
gdjs.level2uCode.GDNewSprite2Objects1= [];
gdjs.level2uCode.GDNewSprite2Objects2= [];
gdjs.level2uCode.GDNewSprite2Objects3= [];
gdjs.level2uCode.GDNewSprite2Objects4= [];


gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDLeafRangerObjects1Objects = Hashtable.newFrom({"LeafRanger": gdjs.level2uCode.GDLeafRangerObjects1});
gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDArrowObjects2Objects = Hashtable.newFrom({"Arrow": gdjs.level2uCode.GDArrowObjects2});
gdjs.level2uCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(gdjs.level2uCode.GDLeafRangerObjects2, gdjs.level2uCode.GDLeafRangerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2uCode.GDLeafRangerObjects3.length;i<l;++i) {
    if ( gdjs.level2uCode.GDLeafRangerObjects3[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.level2uCode.GDLeafRangerObjects3[k] = gdjs.level2uCode.GDLeafRangerObjects3[i];
        ++k;
    }
}
gdjs.level2uCode.GDLeafRangerObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.level2uCode.GDArrowObjects2, gdjs.level2uCode.GDArrowObjects3);

{for(var i = 0, len = gdjs.level2uCode.GDArrowObjects3.length ;i < len;++i) {
    gdjs.level2uCode.GDArrowObjects3[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.level2uCode.GDArrowObjects3.length ;i < len;++i) {
    gdjs.level2uCode.GDArrowObjects3[i].addForce(-(500), 0, 1);
}
}}

}


{

/* Reuse gdjs.level2uCode.GDLeafRangerObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2uCode.GDLeafRangerObjects2.length;i<l;++i) {
    if ( !(gdjs.level2uCode.GDLeafRangerObjects2[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.level2uCode.GDLeafRangerObjects2[k] = gdjs.level2uCode.GDLeafRangerObjects2[i];
        ++k;
    }
}
gdjs.level2uCode.GDLeafRangerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level2uCode.GDArrowObjects2 */
{for(var i = 0, len = gdjs.level2uCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.level2uCode.GDArrowObjects2[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.level2uCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.level2uCode.GDArrowObjects2[i].addForce(500, 0, 1);
}
}}

}


};gdjs.level2uCode.asyncCallback29655484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.level2uCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("LeafRanger"), gdjs.level2uCode.GDLeafRangerObjects2);

gdjs.level2uCode.GDArrowObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDArrowObjects2Objects, (( gdjs.level2uCode.GDLeafRangerObjects2.length === 0 ) ? 0 :gdjs.level2uCode.GDLeafRangerObjects2[0].getPointX("arrow")), (( gdjs.level2uCode.GDLeafRangerObjects2.length === 0 ) ? 0 :gdjs.level2uCode.GDLeafRangerObjects2[0].getPointY("arrow")), "");
}
{ //Subevents
gdjs.level2uCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.level2uCode.localVariables.length = 0;
}
gdjs.level2uCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.level2uCode.localVariables);
for (const obj of gdjs.level2uCode.GDLeafRangerObjects1) asyncObjectsList.addObject("LeafRanger", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.level2uCode.asyncCallback29655484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.level2uCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(29655412);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LeafRanger"), gdjs.level2uCode.GDLeafRangerObjects1);
{for(var i = 0, len = gdjs.level2uCode.GDLeafRangerObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDLeafRangerObjects1[i].getBehavior("Animation").setAnimationName("Attack2");
}
}
{ //Subevents
gdjs.level2uCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDArrowObjects1Objects = Hashtable.newFrom({"Arrow": gdjs.level2uCode.GDArrowObjects1});
gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDNativeAngryObjects1Objects = Hashtable.newFrom({"NativeAngry": gdjs.level2uCode.GDNativeAngryObjects1});
gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDSkeletonObjects1Objects = Hashtable.newFrom({"Skeleton": gdjs.level2uCode.GDSkeletonObjects1});
gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDArrowObjects1Objects = Hashtable.newFrom({"Arrow": gdjs.level2uCode.GDArrowObjects1});
gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDArrowObjects1Objects = Hashtable.newFrom({"Arrow": gdjs.level2uCode.GDArrowObjects1});
gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDSkeletonObjects1Objects = Hashtable.newFrom({"Skeleton": gdjs.level2uCode.GDSkeletonObjects1});
gdjs.level2uCode.asyncCallback29663532 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.level2uCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Skeleton"), gdjs.level2uCode.GDSkeletonObjects2);

{for(var i = 0, len = gdjs.level2uCode.GDSkeletonObjects2.length ;i < len;++i) {
    gdjs.level2uCode.GDSkeletonObjects2[i].getBehavior("Animation").setAnimationName("Bone Pile Wakeup");
}
}gdjs.level2uCode.localVariables.length = 0;
}
gdjs.level2uCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.level2uCode.localVariables);
for (const obj of gdjs.level2uCode.GDSkeletonObjects1) asyncObjectsList.addObject("Skeleton", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.384), (runtimeScene) => (gdjs.level2uCode.asyncCallback29663532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.level2uCode.asyncCallback29665004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.level2uCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Skeleton"), gdjs.level2uCode.GDSkeletonObjects2);

{for(var i = 0, len = gdjs.level2uCode.GDSkeletonObjects2.length ;i < len;++i) {
    gdjs.level2uCode.GDSkeletonObjects2[i].deleteFromScene(runtimeScene);
}
}gdjs.level2uCode.localVariables.length = 0;
}
gdjs.level2uCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.level2uCode.localVariables);
for (const obj of gdjs.level2uCode.GDSkeletonObjects1) asyncObjectsList.addObject("Skeleton", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.384), (runtimeScene) => (gdjs.level2uCode.asyncCallback29665004(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDNativeAngryObjects1Objects = Hashtable.newFrom({"NativeAngry": gdjs.level2uCode.GDNativeAngryObjects1});
gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDNativeAngryObjects1Objects = Hashtable.newFrom({"NativeAngry": gdjs.level2uCode.GDNativeAngryObjects1});
gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDLeafRangerObjects1Objects = Hashtable.newFrom({"LeafRanger": gdjs.level2uCode.GDLeafRangerObjects1});
gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDSpikeHeadObjects1Objects = Hashtable.newFrom({"SpikeHead": gdjs.level2uCode.GDSpikeHeadObjects1});
gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDLeafRangerObjects1Objects = Hashtable.newFrom({"LeafRanger": gdjs.level2uCode.GDLeafRangerObjects1});
gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDlaserObjects2Objects = Hashtable.newFrom({"laser": gdjs.level2uCode.GDlaserObjects2});
gdjs.level2uCode.asyncCallback29673404 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.level2uCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("laser"), gdjs.level2uCode.GDlaserObjects3);

{for(var i = 0, len = gdjs.level2uCode.GDlaserObjects3.length ;i < len;++i) {
    gdjs.level2uCode.GDlaserObjects3[i].deleteFromScene(runtimeScene);
}
}gdjs.level2uCode.localVariables.length = 0;
}
gdjs.level2uCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.level2uCode.localVariables);
for (const obj of gdjs.level2uCode.GDlaserObjects2) asyncObjectsList.addObject("laser", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.15), (runtimeScene) => (gdjs.level2uCode.asyncCallback29673404(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.level2uCode.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.level2uCode.GDLeafRangerObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2uCode.GDLeafRangerObjects2.length;i<l;++i) {
    if ( gdjs.level2uCode.GDLeafRangerObjects2[i].getAnimationFrame() == 10 ) {
        isConditionTrue_0 = true;
        gdjs.level2uCode.GDLeafRangerObjects2[k] = gdjs.level2uCode.GDLeafRangerObjects2[i];
        ++k;
    }
}
gdjs.level2uCode.GDLeafRangerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level2uCode.GDLeafRangerObjects2 */
gdjs.level2uCode.GDlaserObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDlaserObjects2Objects, (( gdjs.level2uCode.GDLeafRangerObjects2.length === 0 ) ? 0 :gdjs.level2uCode.GDLeafRangerObjects2[0].getPointX("arrow")), (( gdjs.level2uCode.GDLeafRangerObjects2.length === 0 ) ? 0 :gdjs.level2uCode.GDLeafRangerObjects2[0].getPointY("arrow")) + 5, "");
}{for(var i = 0, len = gdjs.level2uCode.GDlaserObjects2.length ;i < len;++i) {
    gdjs.level2uCode.GDlaserObjects2[i].getBehavior("Resizable").setWidth(2000);
}
}{for(var i = 0, len = gdjs.level2uCode.GDlaserObjects2.length ;i < len;++i) {
    gdjs.level2uCode.GDlaserObjects2[i].getBehavior("Resizable").setHeight(10);
}
}
{ //Subevents
gdjs.level2uCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDlaserObjects1Objects = Hashtable.newFrom({"laser": gdjs.level2uCode.GDlaserObjects1});
gdjs.level2uCode.asyncCallback29675004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.level2uCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("laser"), gdjs.level2uCode.GDlaserObjects2);

{for(var i = 0, len = gdjs.level2uCode.GDlaserObjects2.length ;i < len;++i) {
    gdjs.level2uCode.GDlaserObjects2[i].deleteFromScene(runtimeScene);
}
}gdjs.level2uCode.localVariables.length = 0;
}
gdjs.level2uCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.level2uCode.localVariables);
for (const obj of gdjs.level2uCode.GDlaserObjects1) asyncObjectsList.addObject("laser", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.15), (runtimeScene) => (gdjs.level2uCode.asyncCallback29675004(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.level2uCode.eventsList8 = function(runtimeScene) {

{

/* Reuse gdjs.level2uCode.GDLeafRangerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2uCode.GDLeafRangerObjects1.length;i<l;++i) {
    if ( gdjs.level2uCode.GDLeafRangerObjects1[i].getAnimationFrame() == 10 ) {
        isConditionTrue_0 = true;
        gdjs.level2uCode.GDLeafRangerObjects1[k] = gdjs.level2uCode.GDLeafRangerObjects1[i];
        ++k;
    }
}
gdjs.level2uCode.GDLeafRangerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level2uCode.GDLeafRangerObjects1 */
gdjs.level2uCode.GDlaserObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDlaserObjects1Objects, (( gdjs.level2uCode.GDLeafRangerObjects1.length === 0 ) ? 0 :gdjs.level2uCode.GDLeafRangerObjects1[0].getPointX("arrow")), (( gdjs.level2uCode.GDLeafRangerObjects1.length === 0 ) ? 0 :gdjs.level2uCode.GDLeafRangerObjects1[0].getPointY("arrow")) + 5, "");
}{for(var i = 0, len = gdjs.level2uCode.GDlaserObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDlaserObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.level2uCode.GDlaserObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDlaserObjects1[i].getBehavior("Resizable").setWidth(2000);
}
}{for(var i = 0, len = gdjs.level2uCode.GDlaserObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDlaserObjects1[i].getBehavior("Resizable").setHeight(10);
}
}
{ //Subevents
gdjs.level2uCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.level2uCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.level2uCode.GDLeafRangerObjects1, gdjs.level2uCode.GDLeafRangerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2uCode.GDLeafRangerObjects2.length;i<l;++i) {
    if ( !(gdjs.level2uCode.GDLeafRangerObjects2[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.level2uCode.GDLeafRangerObjects2[k] = gdjs.level2uCode.GDLeafRangerObjects2[i];
        ++k;
    }
}
gdjs.level2uCode.GDLeafRangerObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level2uCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.level2uCode.GDLeafRangerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2uCode.GDLeafRangerObjects1.length;i<l;++i) {
    if ( gdjs.level2uCode.GDLeafRangerObjects1[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.level2uCode.GDLeafRangerObjects1[k] = gdjs.level2uCode.GDLeafRangerObjects1[i];
        ++k;
    }
}
gdjs.level2uCode.GDLeafRangerObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level2uCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDNativeAngryObjects1Objects = Hashtable.newFrom({"NativeAngry": gdjs.level2uCode.GDNativeAngryObjects1});
gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDlaserObjects1Objects = Hashtable.newFrom({"laser": gdjs.level2uCode.GDlaserObjects1});
gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDSkeletonObjects1Objects = Hashtable.newFrom({"Skeleton": gdjs.level2uCode.GDSkeletonObjects1});
gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDLeafRangerObjects1Objects = Hashtable.newFrom({"LeafRanger": gdjs.level2uCode.GDLeafRangerObjects1});
gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDLeafRangerObjects1Objects = Hashtable.newFrom({"LeafRanger": gdjs.level2uCode.GDLeafRangerObjects1});
gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDRedPotionObjects1Objects = Hashtable.newFrom({"RedPotion": gdjs.level2uCode.GDRedPotionObjects1});
gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDLeafRangerObjects1Objects = Hashtable.newFrom({"LeafRanger": gdjs.level2uCode.GDLeafRangerObjects1});
gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.level2uCode.GDNewSprite2Objects1});
gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.level2uCode.GDNewSprite2Objects1});
gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDNativeAngryObjects1Objects = Hashtable.newFrom({"NativeAngry": gdjs.level2uCode.GDNativeAngryObjects1});
gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDlaserObjects1Objects = Hashtable.newFrom({"laser": gdjs.level2uCode.GDlaserObjects1});
gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDBurgerCheeseDoubleObjects1Objects = Hashtable.newFrom({"BurgerCheeseDouble": gdjs.level2uCode.GDBurgerCheeseDoubleObjects1});
gdjs.level2uCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LeafRanger"), gdjs.level2uCode.GDLeafRangerObjects1);
gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.level2uCode.GDNativeAngryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.level2uCode.GDSkeletonObjects1);
{for(var i = 0, len = gdjs.level2uCode.GDLeafRangerObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDLeafRangerObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "natimer");
}{for(var i = 0, len = gdjs.level2uCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDSkeletonObjects1[i].getBehavior("Animation").setAnimationName("Standing Idle");
}
}{for(var i = 0, len = gdjs.level2uCode.GDNativeAngryObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDNativeAngryObjects1[i].getBehavior("Animation").setAnimationName("Walk");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(29652836);
}
}
if (isConditionTrue_0) {
gdjs.level2uCode.GDLeafRangerObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDLeafRangerObjects1Objects, -(14), 378, "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LeafRanger"), gdjs.level2uCode.GDLeafRangerObjects1);
{for(var i = 0, len = gdjs.level2uCode.GDLeafRangerObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDLeafRangerObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LeafRanger"), gdjs.level2uCode.GDLeafRangerObjects1);
{for(var i = 0, len = gdjs.level2uCode.GDLeafRangerObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDLeafRangerObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.level2uCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LeafRanger"), gdjs.level2uCode.GDLeafRangerObjects1);
{for(var i = 0, len = gdjs.level2uCode.GDLeafRangerObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDLeafRangerObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.level2uCode.GDLeafRangerObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDLeafRangerObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LeafRanger"), gdjs.level2uCode.GDLeafRangerObjects1);
{for(var i = 0, len = gdjs.level2uCode.GDLeafRangerObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDLeafRangerObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LeafRanger"), gdjs.level2uCode.GDLeafRangerObjects1);
{for(var i = 0, len = gdjs.level2uCode.GDLeafRangerObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDLeafRangerObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.level2uCode.GDLeafRangerObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDLeafRangerObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LeafRanger"), gdjs.level2uCode.GDLeafRangerObjects1);
{for(var i = 0, len = gdjs.level2uCode.GDLeafRangerObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDLeafRangerObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.level2uCode.GDArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.level2uCode.GDNativeAngryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDArrowObjects1Objects, gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDNativeAngryObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.level2uCode.GDArrowObjects1 */
/* Reuse gdjs.level2uCode.GDNativeAngryObjects1 */
{for(var i = 0, len = gdjs.level2uCode.GDNativeAngryObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDNativeAngryObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.level2uCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDArrowObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.level2uCode.GDArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.level2uCode.GDSkeletonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDSkeletonObjects1Objects, gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDArrowObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDArrowObjects1Objects, gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDSkeletonObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.level2uCode.GDArrowObjects1 */
/* Reuse gdjs.level2uCode.GDSkeletonObjects1 */
{for(var i = 0, len = gdjs.level2uCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDSkeletonObjects1[i].returnVariable(gdjs.level2uCode.GDSkeletonObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}{for(var i = 0, len = gdjs.level2uCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDArrowObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.level2uCode.GDSkeletonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2uCode.GDSkeletonObjects1.length;i<l;++i) {
    if ( gdjs.level2uCode.GDSkeletonObjects1[i].getVariableNumber(gdjs.level2uCode.GDSkeletonObjects1[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.level2uCode.GDSkeletonObjects1[k] = gdjs.level2uCode.GDSkeletonObjects1[i];
        ++k;
    }
}
gdjs.level2uCode.GDSkeletonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level2uCode.GDSkeletonObjects1 */
{for(var i = 0, len = gdjs.level2uCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDSkeletonObjects1[i].getBehavior("Animation").setAnimationName("Crumbling Into Bone Pile");
}
}
{ //Subevents
gdjs.level2uCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.level2uCode.GDSkeletonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2uCode.GDSkeletonObjects1.length;i<l;++i) {
    if ( gdjs.level2uCode.GDSkeletonObjects1[i].getVariableNumber(gdjs.level2uCode.GDSkeletonObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.level2uCode.GDSkeletonObjects1[k] = gdjs.level2uCode.GDSkeletonObjects1[i];
        ++k;
    }
}
gdjs.level2uCode.GDSkeletonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level2uCode.GDSkeletonObjects1 */
{for(var i = 0, len = gdjs.level2uCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDSkeletonObjects1[i].getBehavior("Animation").setAnimationName("Crumbling Into Bone Pile");
}
}
{ //Subevents
gdjs.level2uCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "natimer") >= 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BurgerCheeseDouble"), gdjs.level2uCode.GDBurgerCheeseDoubleObjects1);
gdjs.level2uCode.GDNativeAngryObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDNativeAngryObjects1Objects, (( gdjs.level2uCode.GDBurgerCheeseDoubleObjects1.length === 0 ) ? 0 :gdjs.level2uCode.GDBurgerCheeseDoubleObjects1[0].getCenterXInScene()), (( gdjs.level2uCode.GDBurgerCheeseDoubleObjects1.length === 0 ) ? 0 :gdjs.level2uCode.GDBurgerCheeseDoubleObjects1[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.level2uCode.GDNativeAngryObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDNativeAngryObjects1[i].getBehavior("Animation").setAnimationName("Walk");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "natimer");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LeafRanger"), gdjs.level2uCode.GDLeafRangerObjects1);
gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.level2uCode.GDNativeAngryObjects1);
{for(var i = 0, len = gdjs.level2uCode.GDNativeAngryObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDNativeAngryObjects1[i].addForceTowardObject((gdjs.level2uCode.GDLeafRangerObjects1.length !== 0 ? gdjs.level2uCode.GDLeafRangerObjects1[0] : null), 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.level2uCode.GDNativeAngryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2uCode.GDNativeAngryObjects1.length;i<l;++i) {
    if ( gdjs.level2uCode.GDNativeAngryObjects1[i].getBehavior("PlatformerObject").getCurrentSpeed() < 10 ) {
        isConditionTrue_0 = true;
        gdjs.level2uCode.GDNativeAngryObjects1[k] = gdjs.level2uCode.GDNativeAngryObjects1[i];
        ++k;
    }
}
gdjs.level2uCode.GDNativeAngryObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level2uCode.GDNativeAngryObjects1 */
{for(var i = 0, len = gdjs.level2uCode.GDNativeAngryObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDNativeAngryObjects1[i].addForce(0, -(400), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeafRanger"), gdjs.level2uCode.GDLeafRangerObjects1);
gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.level2uCode.GDNativeAngryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDNativeAngryObjects1Objects, gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDLeafRangerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.level2uCode.GDNativeAngryObjects1 */
gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.level2uCode.GDRedFlatBarObjects1);
{for(var i = 0, len = gdjs.level2uCode.GDRedFlatBarObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDRedFlatBarObjects1[i].SetValue(gdjs.level2uCode.GDRedFlatBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (5), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.level2uCode.GDNativeAngryObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDNativeAngryObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeafRanger"), gdjs.level2uCode.GDLeafRangerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpikeHead"), gdjs.level2uCode.GDSpikeHeadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDSpikeHeadObjects1Objects, gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDLeafRangerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.level2uCode.GDRedFlatBarObjects1);
/* Reuse gdjs.level2uCode.GDSpikeHeadObjects1 */
{for(var i = 0, len = gdjs.level2uCode.GDRedFlatBarObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDRedFlatBarObjects1[i].SetValue(gdjs.level2uCode.GDRedFlatBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (3), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.level2uCode.GDSpikeHeadObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDSpikeHeadObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.level2uCode.GDRedFlatBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2uCode.GDRedFlatBarObjects1.length;i<l;++i) {
    if ( gdjs.level2uCode.GDRedFlatBarObjects1[i].IsEmpty((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level2uCode.GDRedFlatBarObjects1[k] = gdjs.level2uCode.GDRedFlatBarObjects1[i];
        ++k;
    }
}
gdjs.level2uCode.GDRedFlatBarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "rrhds", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LeafRanger"), gdjs.level2uCode.GDLeafRangerObjects1);
{for(var i = 0, len = gdjs.level2uCode.GDLeafRangerObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDLeafRangerObjects1[i].getBehavior("Animation").setAnimationName("Special Attack");
}
}
{ //Subevents
gdjs.level2uCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.level2uCode.GDNativeAngryObjects1);
gdjs.copyArray(runtimeScene.getObjects("laser"), gdjs.level2uCode.GDlaserObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDNativeAngryObjects1Objects, gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDlaserObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.level2uCode.GDNativeAngryObjects1 */
{for(var i = 0, len = gdjs.level2uCode.GDNativeAngryObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDNativeAngryObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeafRanger"), gdjs.level2uCode.GDLeafRangerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.level2uCode.GDSkeletonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDSkeletonObjects1Objects, gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDLeafRangerObjects1Objects, 20, false);
if (isConditionTrue_0) {
/* Reuse gdjs.level2uCode.GDSkeletonObjects1 */
{for(var i = 0, len = gdjs.level2uCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDSkeletonObjects1[i].getBehavior("Animation").setAnimationName("Bone Toss");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeafRanger"), gdjs.level2uCode.GDLeafRangerObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedPotion"), gdjs.level2uCode.GDRedPotionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDLeafRangerObjects1Objects, gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDRedPotionObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.level2uCode.GDRedFlatBarObjects1);
/* Reuse gdjs.level2uCode.GDRedPotionObjects1 */
{for(var i = 0, len = gdjs.level2uCode.GDRedFlatBarObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDRedFlatBarObjects1[i].SetValue(gdjs.level2uCode.GDRedFlatBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (100), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.level2uCode.GDRedPotionObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDRedPotionObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeafRanger"), gdjs.level2uCode.GDLeafRangerObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.level2uCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDLeafRangerObjects1Objects, gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(29678356);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LeafRanger"), gdjs.level2uCode.GDLeafRangerObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.level2uCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.level2uCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.level2uCode.GDNewSprite2Objects1[i].setPosition((( gdjs.level2uCode.GDLeafRangerObjects1.length === 0 ) ? 0 :gdjs.level2uCode.GDLeafRangerObjects1[0].getCenterXInScene()),(( gdjs.level2uCode.GDLeafRangerObjects1.length === 0 ) ? 0 :gdjs.level2uCode.GDLeafRangerObjects1[0].getCenterYInScene()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeafRanger"), gdjs.level2uCode.GDLeafRangerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2uCode.GDLeafRangerObjects1.length;i<l;++i) {
    if ( !(gdjs.level2uCode.GDLeafRangerObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.level2uCode.GDLeafRangerObjects1[k] = gdjs.level2uCode.GDLeafRangerObjects1[i];
        ++k;
    }
}
gdjs.level2uCode.GDLeafRangerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(29680076);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.level2uCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.level2uCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.level2uCode.GDNewSprite2Objects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeafRanger"), gdjs.level2uCode.GDLeafRangerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2uCode.GDLeafRangerObjects1.length;i<l;++i) {
    if ( gdjs.level2uCode.GDLeafRangerObjects1[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.level2uCode.GDLeafRangerObjects1[k] = gdjs.level2uCode.GDLeafRangerObjects1[i];
        ++k;
    }
}
gdjs.level2uCode.GDLeafRangerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(29680996);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.level2uCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.level2uCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.level2uCode.GDNewSprite2Objects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.level2uCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.level2uCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.level2uCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("attack");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.level2uCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.level2uCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.level2uCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.level2uCode.GDNativeAngryObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.level2uCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDNewSprite2Objects1Objects, gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDNativeAngryObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.level2uCode.GDNativeAngryObjects1 */
gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.level2uCode.GDRedFlatBarObjects1);
{for(var i = 0, len = gdjs.level2uCode.GDRedFlatBarObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDRedFlatBarObjects1[i].SetValue(gdjs.level2uCode.GDRedFlatBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.level2uCode.GDNativeAngryObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDNativeAngryObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BurgerCheeseDouble"), gdjs.level2uCode.GDBurgerCheeseDoubleObjects1);
gdjs.copyArray(runtimeScene.getObjects("laser"), gdjs.level2uCode.GDlaserObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDlaserObjects1Objects, gdjs.level2uCode.mapOfGDgdjs_9546level2uCode_9546GDBurgerCheeseDoubleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.level2uCode.GDBurgerCheeseDoubleObjects1 */
{for(var i = 0, len = gdjs.level2uCode.GDBurgerCheeseDoubleObjects1.length ;i < len;++i) {
    gdjs.level2uCode.GDBurgerCheeseDoubleObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QY", false);
}}

}


};

gdjs.level2uCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level2uCode.GDWoodBackgroundObjects1.length = 0;
gdjs.level2uCode.GDWoodBackgroundObjects2.length = 0;
gdjs.level2uCode.GDWoodBackgroundObjects3.length = 0;
gdjs.level2uCode.GDWoodBackgroundObjects4.length = 0;
gdjs.level2uCode.GDGraveyardTileObjects1.length = 0;
gdjs.level2uCode.GDGraveyardTileObjects2.length = 0;
gdjs.level2uCode.GDGraveyardTileObjects3.length = 0;
gdjs.level2uCode.GDGraveyardTileObjects4.length = 0;
gdjs.level2uCode.GDPlatform2Objects1.length = 0;
gdjs.level2uCode.GDPlatform2Objects2.length = 0;
gdjs.level2uCode.GDPlatform2Objects3.length = 0;
gdjs.level2uCode.GDPlatform2Objects4.length = 0;
gdjs.level2uCode.GDBush1Objects1.length = 0;
gdjs.level2uCode.GDBush1Objects2.length = 0;
gdjs.level2uCode.GDBush1Objects3.length = 0;
gdjs.level2uCode.GDBush1Objects4.length = 0;
gdjs.level2uCode.GDPlatform1Objects1.length = 0;
gdjs.level2uCode.GDPlatform1Objects2.length = 0;
gdjs.level2uCode.GDPlatform1Objects3.length = 0;
gdjs.level2uCode.GDPlatform1Objects4.length = 0;
gdjs.level2uCode.GDEvilBearObjects1.length = 0;
gdjs.level2uCode.GDEvilBearObjects2.length = 0;
gdjs.level2uCode.GDEvilBearObjects3.length = 0;
gdjs.level2uCode.GDEvilBearObjects4.length = 0;
gdjs.level2uCode.GDNativeAngryObjects1.length = 0;
gdjs.level2uCode.GDNativeAngryObjects2.length = 0;
gdjs.level2uCode.GDNativeAngryObjects3.length = 0;
gdjs.level2uCode.GDNativeAngryObjects4.length = 0;
gdjs.level2uCode.GDSpikeHeadObjects1.length = 0;
gdjs.level2uCode.GDSpikeHeadObjects2.length = 0;
gdjs.level2uCode.GDSpikeHeadObjects3.length = 0;
gdjs.level2uCode.GDSpikeHeadObjects4.length = 0;
gdjs.level2uCode.GDRockHeadObjects1.length = 0;
gdjs.level2uCode.GDRockHeadObjects2.length = 0;
gdjs.level2uCode.GDRockHeadObjects3.length = 0;
gdjs.level2uCode.GDRockHeadObjects4.length = 0;
gdjs.level2uCode.GDSkeletonObjects1.length = 0;
gdjs.level2uCode.GDSkeletonObjects2.length = 0;
gdjs.level2uCode.GDSkeletonObjects3.length = 0;
gdjs.level2uCode.GDSkeletonObjects4.length = 0;
gdjs.level2uCode.GDLeafRangerObjects1.length = 0;
gdjs.level2uCode.GDLeafRangerObjects2.length = 0;
gdjs.level2uCode.GDLeafRangerObjects3.length = 0;
gdjs.level2uCode.GDLeafRangerObjects4.length = 0;
gdjs.level2uCode.GDArrowObjects1.length = 0;
gdjs.level2uCode.GDArrowObjects2.length = 0;
gdjs.level2uCode.GDArrowObjects3.length = 0;
gdjs.level2uCode.GDArrowObjects4.length = 0;
gdjs.level2uCode.GDBurgerCheeseDoubleObjects1.length = 0;
gdjs.level2uCode.GDBurgerCheeseDoubleObjects2.length = 0;
gdjs.level2uCode.GDBurgerCheeseDoubleObjects3.length = 0;
gdjs.level2uCode.GDBurgerCheeseDoubleObjects4.length = 0;
gdjs.level2uCode.GDRedFlatBarObjects1.length = 0;
gdjs.level2uCode.GDRedFlatBarObjects2.length = 0;
gdjs.level2uCode.GDRedFlatBarObjects3.length = 0;
gdjs.level2uCode.GDRedFlatBarObjects4.length = 0;
gdjs.level2uCode.GDBlueFlatBarObjects1.length = 0;
gdjs.level2uCode.GDBlueFlatBarObjects2.length = 0;
gdjs.level2uCode.GDBlueFlatBarObjects3.length = 0;
gdjs.level2uCode.GDBlueFlatBarObjects4.length = 0;
gdjs.level2uCode.GDCat6Objects1.length = 0;
gdjs.level2uCode.GDCat6Objects2.length = 0;
gdjs.level2uCode.GDCat6Objects3.length = 0;
gdjs.level2uCode.GDCat6Objects4.length = 0;
gdjs.level2uCode.GDlaserObjects1.length = 0;
gdjs.level2uCode.GDlaserObjects2.length = 0;
gdjs.level2uCode.GDlaserObjects3.length = 0;
gdjs.level2uCode.GDlaserObjects4.length = 0;
gdjs.level2uCode.GDNewSpriteObjects1.length = 0;
gdjs.level2uCode.GDNewSpriteObjects2.length = 0;
gdjs.level2uCode.GDNewSpriteObjects3.length = 0;
gdjs.level2uCode.GDNewSpriteObjects4.length = 0;
gdjs.level2uCode.GDRedPotionObjects1.length = 0;
gdjs.level2uCode.GDRedPotionObjects2.length = 0;
gdjs.level2uCode.GDRedPotionObjects3.length = 0;
gdjs.level2uCode.GDRedPotionObjects4.length = 0;
gdjs.level2uCode.GDMagicGreenSwordObjects1.length = 0;
gdjs.level2uCode.GDMagicGreenSwordObjects2.length = 0;
gdjs.level2uCode.GDMagicGreenSwordObjects3.length = 0;
gdjs.level2uCode.GDMagicGreenSwordObjects4.length = 0;
gdjs.level2uCode.GDNewSprite2Objects1.length = 0;
gdjs.level2uCode.GDNewSprite2Objects2.length = 0;
gdjs.level2uCode.GDNewSprite2Objects3.length = 0;
gdjs.level2uCode.GDNewSprite2Objects4.length = 0;

gdjs.level2uCode.eventsList10(runtimeScene);
gdjs.level2uCode.GDWoodBackgroundObjects1.length = 0;
gdjs.level2uCode.GDWoodBackgroundObjects2.length = 0;
gdjs.level2uCode.GDWoodBackgroundObjects3.length = 0;
gdjs.level2uCode.GDWoodBackgroundObjects4.length = 0;
gdjs.level2uCode.GDGraveyardTileObjects1.length = 0;
gdjs.level2uCode.GDGraveyardTileObjects2.length = 0;
gdjs.level2uCode.GDGraveyardTileObjects3.length = 0;
gdjs.level2uCode.GDGraveyardTileObjects4.length = 0;
gdjs.level2uCode.GDPlatform2Objects1.length = 0;
gdjs.level2uCode.GDPlatform2Objects2.length = 0;
gdjs.level2uCode.GDPlatform2Objects3.length = 0;
gdjs.level2uCode.GDPlatform2Objects4.length = 0;
gdjs.level2uCode.GDBush1Objects1.length = 0;
gdjs.level2uCode.GDBush1Objects2.length = 0;
gdjs.level2uCode.GDBush1Objects3.length = 0;
gdjs.level2uCode.GDBush1Objects4.length = 0;
gdjs.level2uCode.GDPlatform1Objects1.length = 0;
gdjs.level2uCode.GDPlatform1Objects2.length = 0;
gdjs.level2uCode.GDPlatform1Objects3.length = 0;
gdjs.level2uCode.GDPlatform1Objects4.length = 0;
gdjs.level2uCode.GDEvilBearObjects1.length = 0;
gdjs.level2uCode.GDEvilBearObjects2.length = 0;
gdjs.level2uCode.GDEvilBearObjects3.length = 0;
gdjs.level2uCode.GDEvilBearObjects4.length = 0;
gdjs.level2uCode.GDNativeAngryObjects1.length = 0;
gdjs.level2uCode.GDNativeAngryObjects2.length = 0;
gdjs.level2uCode.GDNativeAngryObjects3.length = 0;
gdjs.level2uCode.GDNativeAngryObjects4.length = 0;
gdjs.level2uCode.GDSpikeHeadObjects1.length = 0;
gdjs.level2uCode.GDSpikeHeadObjects2.length = 0;
gdjs.level2uCode.GDSpikeHeadObjects3.length = 0;
gdjs.level2uCode.GDSpikeHeadObjects4.length = 0;
gdjs.level2uCode.GDRockHeadObjects1.length = 0;
gdjs.level2uCode.GDRockHeadObjects2.length = 0;
gdjs.level2uCode.GDRockHeadObjects3.length = 0;
gdjs.level2uCode.GDRockHeadObjects4.length = 0;
gdjs.level2uCode.GDSkeletonObjects1.length = 0;
gdjs.level2uCode.GDSkeletonObjects2.length = 0;
gdjs.level2uCode.GDSkeletonObjects3.length = 0;
gdjs.level2uCode.GDSkeletonObjects4.length = 0;
gdjs.level2uCode.GDLeafRangerObjects1.length = 0;
gdjs.level2uCode.GDLeafRangerObjects2.length = 0;
gdjs.level2uCode.GDLeafRangerObjects3.length = 0;
gdjs.level2uCode.GDLeafRangerObjects4.length = 0;
gdjs.level2uCode.GDArrowObjects1.length = 0;
gdjs.level2uCode.GDArrowObjects2.length = 0;
gdjs.level2uCode.GDArrowObjects3.length = 0;
gdjs.level2uCode.GDArrowObjects4.length = 0;
gdjs.level2uCode.GDBurgerCheeseDoubleObjects1.length = 0;
gdjs.level2uCode.GDBurgerCheeseDoubleObjects2.length = 0;
gdjs.level2uCode.GDBurgerCheeseDoubleObjects3.length = 0;
gdjs.level2uCode.GDBurgerCheeseDoubleObjects4.length = 0;
gdjs.level2uCode.GDRedFlatBarObjects1.length = 0;
gdjs.level2uCode.GDRedFlatBarObjects2.length = 0;
gdjs.level2uCode.GDRedFlatBarObjects3.length = 0;
gdjs.level2uCode.GDRedFlatBarObjects4.length = 0;
gdjs.level2uCode.GDBlueFlatBarObjects1.length = 0;
gdjs.level2uCode.GDBlueFlatBarObjects2.length = 0;
gdjs.level2uCode.GDBlueFlatBarObjects3.length = 0;
gdjs.level2uCode.GDBlueFlatBarObjects4.length = 0;
gdjs.level2uCode.GDCat6Objects1.length = 0;
gdjs.level2uCode.GDCat6Objects2.length = 0;
gdjs.level2uCode.GDCat6Objects3.length = 0;
gdjs.level2uCode.GDCat6Objects4.length = 0;
gdjs.level2uCode.GDlaserObjects1.length = 0;
gdjs.level2uCode.GDlaserObjects2.length = 0;
gdjs.level2uCode.GDlaserObjects3.length = 0;
gdjs.level2uCode.GDlaserObjects4.length = 0;
gdjs.level2uCode.GDNewSpriteObjects1.length = 0;
gdjs.level2uCode.GDNewSpriteObjects2.length = 0;
gdjs.level2uCode.GDNewSpriteObjects3.length = 0;
gdjs.level2uCode.GDNewSpriteObjects4.length = 0;
gdjs.level2uCode.GDRedPotionObjects1.length = 0;
gdjs.level2uCode.GDRedPotionObjects2.length = 0;
gdjs.level2uCode.GDRedPotionObjects3.length = 0;
gdjs.level2uCode.GDRedPotionObjects4.length = 0;
gdjs.level2uCode.GDMagicGreenSwordObjects1.length = 0;
gdjs.level2uCode.GDMagicGreenSwordObjects2.length = 0;
gdjs.level2uCode.GDMagicGreenSwordObjects3.length = 0;
gdjs.level2uCode.GDMagicGreenSwordObjects4.length = 0;
gdjs.level2uCode.GDNewSprite2Objects1.length = 0;
gdjs.level2uCode.GDNewSprite2Objects2.length = 0;
gdjs.level2uCode.GDNewSprite2Objects3.length = 0;
gdjs.level2uCode.GDNewSprite2Objects4.length = 0;


return;

}

gdjs['level2uCode'] = gdjs.level2uCode;
