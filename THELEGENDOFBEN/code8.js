gdjs.fightingCourtSceneCode = {};
gdjs.fightingCourtSceneCode.localVariables = [];
gdjs.fightingCourtSceneCode.GDArrowObjects1_1final = [];

gdjs.fightingCourtSceneCode.GDBeeObjects1_1final = [];

gdjs.fightingCourtSceneCode.GDBigDemonObjects1_1final = [];

gdjs.fightingCourtSceneCode.GDGhostObjects1_1final = [];

gdjs.fightingCourtSceneCode.GDSkeletonObjects1_1final = [];

gdjs.fightingCourtSceneCode.GDBigDemonObjects1= [];
gdjs.fightingCourtSceneCode.GDBigDemonObjects2= [];
gdjs.fightingCourtSceneCode.GDBigDemonObjects3= [];
gdjs.fightingCourtSceneCode.GDbgObjects1= [];
gdjs.fightingCourtSceneCode.GDbgObjects2= [];
gdjs.fightingCourtSceneCode.GDbgObjects3= [];
gdjs.fightingCourtSceneCode.GDSkeletonObjects1= [];
gdjs.fightingCourtSceneCode.GDSkeletonObjects2= [];
gdjs.fightingCourtSceneCode.GDSkeletonObjects3= [];
gdjs.fightingCourtSceneCode.GDGhostObjects1= [];
gdjs.fightingCourtSceneCode.GDGhostObjects2= [];
gdjs.fightingCourtSceneCode.GDGhostObjects3= [];
gdjs.fightingCourtSceneCode.GDMerchantObjects1= [];
gdjs.fightingCourtSceneCode.GDMerchantObjects2= [];
gdjs.fightingCourtSceneCode.GDMerchantObjects3= [];
gdjs.fightingCourtSceneCode.GDWoodRedBarObjects1= [];
gdjs.fightingCourtSceneCode.GDWoodRedBarObjects2= [];
gdjs.fightingCourtSceneCode.GDWoodRedBarObjects3= [];
gdjs.fightingCourtSceneCode.GDCrossbowObjects1= [];
gdjs.fightingCourtSceneCode.GDCrossbowObjects2= [];
gdjs.fightingCourtSceneCode.GDCrossbowObjects3= [];
gdjs.fightingCourtSceneCode.GDArrowObjects1= [];
gdjs.fightingCourtSceneCode.GDArrowObjects2= [];
gdjs.fightingCourtSceneCode.GDArrowObjects3= [];
gdjs.fightingCourtSceneCode.GDhintObjects1= [];
gdjs.fightingCourtSceneCode.GDhintObjects2= [];
gdjs.fightingCourtSceneCode.GDhintObjects3= [];
gdjs.fightingCourtSceneCode.GDBeeObjects1= [];
gdjs.fightingCourtSceneCode.GDBeeObjects2= [];
gdjs.fightingCourtSceneCode.GDBeeObjects3= [];
gdjs.fightingCourtSceneCode.GDspawnpoint_9595bees_9595Objects1= [];
gdjs.fightingCourtSceneCode.GDspawnpoint_9595bees_9595Objects2= [];
gdjs.fightingCourtSceneCode.GDspawnpoint_9595bees_9595Objects3= [];
gdjs.fightingCourtSceneCode.GDskeletonspawnpointObjects1= [];
gdjs.fightingCourtSceneCode.GDskeletonspawnpointObjects2= [];
gdjs.fightingCourtSceneCode.GDskeletonspawnpointObjects3= [];
gdjs.fightingCourtSceneCode.GDghostspawnpointObjects1= [];
gdjs.fightingCourtSceneCode.GDghostspawnpointObjects2= [];
gdjs.fightingCourtSceneCode.GDghostspawnpointObjects3= [];
gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1= [];
gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects2= [];
gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects3= [];
gdjs.fightingCourtSceneCode.GDArrow2Objects1= [];
gdjs.fightingCourtSceneCode.GDArrow2Objects2= [];
gdjs.fightingCourtSceneCode.GDArrow2Objects3= [];
gdjs.fightingCourtSceneCode.GDwallObjects1= [];
gdjs.fightingCourtSceneCode.GDwallObjects2= [];
gdjs.fightingCourtSceneCode.GDwallObjects3= [];
gdjs.fightingCourtSceneCode.GDBoneObjects1= [];
gdjs.fightingCourtSceneCode.GDBoneObjects2= [];
gdjs.fightingCourtSceneCode.GDBoneObjects3= [];
gdjs.fightingCourtSceneCode.GDHoneyObjects1= [];
gdjs.fightingCourtSceneCode.GDHoneyObjects2= [];
gdjs.fightingCourtSceneCode.GDHoneyObjects3= [];
gdjs.fightingCourtSceneCode.GDhealthadd2Objects1= [];
gdjs.fightingCourtSceneCode.GDhealthadd2Objects2= [];
gdjs.fightingCourtSceneCode.GDhealthadd2Objects3= [];
gdjs.fightingCourtSceneCode.GDhealthsubtract5Objects1= [];
gdjs.fightingCourtSceneCode.GDhealthsubtract5Objects2= [];
gdjs.fightingCourtSceneCode.GDhealthsubtract5Objects3= [];
gdjs.fightingCourtSceneCode.GDbigbossdieObjects1= [];
gdjs.fightingCourtSceneCode.GDbigbossdieObjects2= [];
gdjs.fightingCourtSceneCode.GDbigbossdieObjects3= [];


gdjs.fightingCourtSceneCode.asyncCallback25479956 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.fightingCourtSceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Skeleton"), gdjs.fightingCourtSceneCode.GDSkeletonObjects2);

gdjs.copyArray(runtimeScene.getObjects("wall"), gdjs.fightingCourtSceneCode.GDwallObjects2);
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDSkeletonObjects2.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDSkeletonObjects2[i].getBehavior("Animation").setAnimationName("Standing Idle");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "beespawntimer");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "skeletonspawntimer");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ghostspawntimer");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "bigbossattacktimer");
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDwallObjects2.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDwallObjects2[i].hide();
}
}gdjs.fightingCourtSceneCode.localVariables.length = 0;
}
gdjs.fightingCourtSceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.fightingCourtSceneCode.localVariables);
for (const obj of gdjs.fightingCourtSceneCode.GDSkeletonObjects1) asyncObjectsList.addObject("Skeleton", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.fightingCourtSceneCode.asyncCallback25479956(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDMerchantObjects1Objects = Hashtable.newFrom({"Merchant": gdjs.fightingCourtSceneCode.GDMerchantObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDCrossbowObjects1Objects = Hashtable.newFrom({"Crossbow": gdjs.fightingCourtSceneCode.GDCrossbowObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrowObjects1Objects = Hashtable.newFrom({"Arrow": gdjs.fightingCourtSceneCode.GDArrowObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrowObjects1Objects = Hashtable.newFrom({"Arrow": gdjs.fightingCourtSceneCode.GDArrowObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDBigDemonObjects1Objects = Hashtable.newFrom({"BigDemon": gdjs.fightingCourtSceneCode.GDBigDemonObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrowObjects1Objects = Hashtable.newFrom({"Arrow": gdjs.fightingCourtSceneCode.GDArrowObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDSkeletonObjects1Objects = Hashtable.newFrom({"Skeleton": gdjs.fightingCourtSceneCode.GDSkeletonObjects1});
gdjs.fightingCourtSceneCode.asyncCallback25491388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.fightingCourtSceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Skeleton"), gdjs.fightingCourtSceneCode.GDSkeletonObjects2);

{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDSkeletonObjects2.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDSkeletonObjects2[i].getBehavior("Animation").setAnimationName("Standing Idle");
}
}gdjs.fightingCourtSceneCode.localVariables.length = 0;
}
gdjs.fightingCourtSceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.fightingCourtSceneCode.localVariables);
for (const obj of gdjs.fightingCourtSceneCode.GDSkeletonObjects1) asyncObjectsList.addObject("Skeleton", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.fightingCourtSceneCode.asyncCallback25491388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrowObjects1Objects = Hashtable.newFrom({"Arrow": gdjs.fightingCourtSceneCode.GDArrowObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDGhostObjects1Objects = Hashtable.newFrom({"Ghost": gdjs.fightingCourtSceneCode.GDGhostObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDhealthadd2Objects1Objects = Hashtable.newFrom({"healthadd2": gdjs.fightingCourtSceneCode.GDhealthadd2Objects1});
gdjs.fightingCourtSceneCode.asyncCallback25492796 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.fightingCourtSceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("HealthBarHorizontal"), gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("healthadd2"), gdjs.fightingCourtSceneCode.GDhealthadd2Objects2);

{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDhealthadd2Objects2.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDhealthadd2Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects2.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects2[i].SetValue(gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects2[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}gdjs.fightingCourtSceneCode.localVariables.length = 0;
}
gdjs.fightingCourtSceneCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.fightingCourtSceneCode.localVariables);
for (const obj of gdjs.fightingCourtSceneCode.GDhealthadd2Objects1) asyncObjectsList.addObject("healthadd2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.fightingCourtSceneCode.asyncCallback25492796(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrowObjects1Objects = Hashtable.newFrom({"Arrow": gdjs.fightingCourtSceneCode.GDArrowObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDBeeObjects1Objects = Hashtable.newFrom({"Bee": gdjs.fightingCourtSceneCode.GDBeeObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDHoneyObjects1Objects = Hashtable.newFrom({"Honey": gdjs.fightingCourtSceneCode.GDHoneyObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDBoneObjects1Objects = Hashtable.newFrom({"Bone": gdjs.fightingCourtSceneCode.GDBoneObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrowObjects2Objects = Hashtable.newFrom({"Arrow": gdjs.fightingCourtSceneCode.GDArrowObjects2});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDSkeletonObjects2Objects = Hashtable.newFrom({"Skeleton": gdjs.fightingCourtSceneCode.GDSkeletonObjects2});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrowObjects2Objects = Hashtable.newFrom({"Arrow": gdjs.fightingCourtSceneCode.GDArrowObjects2});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDGhostObjects2Objects = Hashtable.newFrom({"Ghost": gdjs.fightingCourtSceneCode.GDGhostObjects2});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrowObjects2Objects = Hashtable.newFrom({"Arrow": gdjs.fightingCourtSceneCode.GDArrowObjects2});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.fightingCourtSceneCode.GDBigDemonObjects2});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrowObjects2Objects = Hashtable.newFrom({"Arrow": gdjs.fightingCourtSceneCode.GDArrowObjects2});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDBeeObjects2Objects = Hashtable.newFrom({"Bee": gdjs.fightingCourtSceneCode.GDBeeObjects2});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDspawnpoint_95959595bees_95959595Objects2Objects = Hashtable.newFrom({"spawnpoint_bees_": gdjs.fightingCourtSceneCode.GDspawnpoint_9595bees_9595Objects2});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDBeeObjects2Objects = Hashtable.newFrom({"Bee": gdjs.fightingCourtSceneCode.GDBeeObjects2});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDBeeObjects1Objects = Hashtable.newFrom({"Bee": gdjs.fightingCourtSceneCode.GDBeeObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDMerchantObjects1Objects = Hashtable.newFrom({"Merchant": gdjs.fightingCourtSceneCode.GDMerchantObjects1});
gdjs.fightingCourtSceneCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spawnpoint_bees_"), gdjs.fightingCourtSceneCode.GDspawnpoint_9595bees_9595Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDspawnpoint_95959595bees_95959595Objects2Objects);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "beespawntimer") >= 2;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.fightingCourtSceneCode.GDspawnpoint_9595bees_9595Objects2 */
gdjs.fightingCourtSceneCode.GDBeeObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDBeeObjects2Objects, (( gdjs.fightingCourtSceneCode.GDspawnpoint_9595bees_9595Objects2.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDspawnpoint_9595bees_9595Objects2[0].getPointX("")), (( gdjs.fightingCourtSceneCode.GDspawnpoint_9595bees_9595Objects2.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDspawnpoint_9595bees_9595Objects2[0].getPointY("")), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "beespawntimer");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bee"), gdjs.fightingCourtSceneCode.GDBeeObjects2);
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.fightingCourtSceneCode.GDMerchantObjects2);
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDBeeObjects2.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDBeeObjects2[i].addForceTowardObject((gdjs.fightingCourtSceneCode.GDMerchantObjects2.length !== 0 ? gdjs.fightingCourtSceneCode.GDMerchantObjects2[0] : null), 75, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bee"), gdjs.fightingCourtSceneCode.GDBeeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.fightingCourtSceneCode.GDMerchantObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDBeeObjects1Objects, gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDMerchantObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25502436);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.fightingCourtSceneCode.GDBeeObjects1 */
gdjs.copyArray(runtimeScene.getObjects("HealthBarHorizontal"), gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1);
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1[i].SetValue(gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDBeeObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDBeeObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDskeletonspawnpointObjects2Objects = Hashtable.newFrom({"skeletonspawnpoint": gdjs.fightingCourtSceneCode.GDskeletonspawnpointObjects2});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDSkeletonObjects2Objects = Hashtable.newFrom({"Skeleton": gdjs.fightingCourtSceneCode.GDSkeletonObjects2});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDSkeletonObjects1Objects = Hashtable.newFrom({"Skeleton": gdjs.fightingCourtSceneCode.GDSkeletonObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDMerchantObjects1Objects = Hashtable.newFrom({"Merchant": gdjs.fightingCourtSceneCode.GDMerchantObjects1});
gdjs.fightingCourtSceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("skeletonspawnpoint"), gdjs.fightingCourtSceneCode.GDskeletonspawnpointObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDskeletonspawnpointObjects2Objects);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "skeletonspawntimer") >= 5;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.fightingCourtSceneCode.GDskeletonspawnpointObjects2 */
gdjs.fightingCourtSceneCode.GDSkeletonObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDSkeletonObjects2Objects, (( gdjs.fightingCourtSceneCode.GDskeletonspawnpointObjects2.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDskeletonspawnpointObjects2[0].getPointX("")), (( gdjs.fightingCourtSceneCode.GDskeletonspawnpointObjects2.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDskeletonspawnpointObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDSkeletonObjects2.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDSkeletonObjects2[i].getBehavior("Scale").setScale(3);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "skeletonspawntimer");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.fightingCourtSceneCode.GDMerchantObjects2);
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.fightingCourtSceneCode.GDSkeletonObjects2);
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDSkeletonObjects2.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDSkeletonObjects2[i].addForceTowardObject((gdjs.fightingCourtSceneCode.GDMerchantObjects2.length !== 0 ? gdjs.fightingCourtSceneCode.GDMerchantObjects2[0] : null), 10, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.fightingCourtSceneCode.GDMerchantObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.fightingCourtSceneCode.GDSkeletonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDSkeletonObjects1Objects, gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDMerchantObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25505844);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HealthBarHorizontal"), gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1);
/* Reuse gdjs.fightingCourtSceneCode.GDMerchantObjects1 */
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1[i].SetValue(gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDMerchantObjects1[i].setX(gdjs.fightingCourtSceneCode.GDMerchantObjects1[i].getX() + (10));
}
}}

}


};gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDghostspawnpointObjects2Objects = Hashtable.newFrom({"ghostspawnpoint": gdjs.fightingCourtSceneCode.GDghostspawnpointObjects2});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDGhostObjects2Objects = Hashtable.newFrom({"Ghost": gdjs.fightingCourtSceneCode.GDGhostObjects2});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDGhostObjects1Objects = Hashtable.newFrom({"Ghost": gdjs.fightingCourtSceneCode.GDGhostObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDMerchantObjects1Objects = Hashtable.newFrom({"Merchant": gdjs.fightingCourtSceneCode.GDMerchantObjects1});
gdjs.fightingCourtSceneCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ghostspawnpoint"), gdjs.fightingCourtSceneCode.GDghostspawnpointObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDghostspawnpointObjects2Objects);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ghostspawntimer") >= 5;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.fightingCourtSceneCode.GDghostspawnpointObjects2 */
gdjs.fightingCourtSceneCode.GDGhostObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDGhostObjects2Objects, (( gdjs.fightingCourtSceneCode.GDghostspawnpointObjects2.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDghostspawnpointObjects2[0].getPointX("")), (( gdjs.fightingCourtSceneCode.GDghostspawnpointObjects2.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDghostspawnpointObjects2[0].getPointY("")), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ghostspawntimer");
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDGhostObjects2.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDGhostObjects2[i].getBehavior("Scale").setScale(3);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ghost"), gdjs.fightingCourtSceneCode.GDGhostObjects2);
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.fightingCourtSceneCode.GDMerchantObjects2);
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDGhostObjects2.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDGhostObjects2[i].addForceTowardObject((gdjs.fightingCourtSceneCode.GDMerchantObjects2.length !== 0 ? gdjs.fightingCourtSceneCode.GDMerchantObjects2[0] : null), 50, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ghost"), gdjs.fightingCourtSceneCode.GDGhostObjects1);
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.fightingCourtSceneCode.GDMerchantObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDGhostObjects1Objects, gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDMerchantObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25509700);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HealthBarHorizontal"), gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1);
/* Reuse gdjs.fightingCourtSceneCode.GDMerchantObjects1 */
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1[i].SetValue(gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDMerchantObjects1[i].setX(gdjs.fightingCourtSceneCode.GDMerchantObjects1[i].getX() + (10));
}
}}

}


};gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrow2Objects1Objects = Hashtable.newFrom({"Arrow2": gdjs.fightingCourtSceneCode.GDArrow2Objects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrow2Objects1Objects = Hashtable.newFrom({"Arrow2": gdjs.fightingCourtSceneCode.GDArrow2Objects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDMerchantObjects1Objects = Hashtable.newFrom({"Merchant": gdjs.fightingCourtSceneCode.GDMerchantObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDhealthsubtract5Objects1Objects = Hashtable.newFrom({"healthsubtract5": gdjs.fightingCourtSceneCode.GDhealthsubtract5Objects1});
gdjs.fightingCourtSceneCode.asyncCallback25514556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.fightingCourtSceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("healthsubtract5"), gdjs.fightingCourtSceneCode.GDhealthsubtract5Objects3);

{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDhealthsubtract5Objects3.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDhealthsubtract5Objects3[i].deleteFromScene(runtimeScene);
}
}gdjs.fightingCourtSceneCode.localVariables.length = 0;
}
gdjs.fightingCourtSceneCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.fightingCourtSceneCode.localVariables);
/* Don't save healthsubtract5 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.fightingCourtSceneCode.asyncCallback25514556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.fightingCourtSceneCode.asyncCallback25513636 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.fightingCourtSceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Arrow2"), gdjs.fightingCourtSceneCode.GDArrow2Objects2);

{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDArrow2Objects2.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDArrow2Objects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.fightingCourtSceneCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.fightingCourtSceneCode.localVariables.length = 0;
}
gdjs.fightingCourtSceneCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.fightingCourtSceneCode.localVariables);
for (const obj of gdjs.fightingCourtSceneCode.GDArrow2Objects1) asyncObjectsList.addObject("Arrow2", obj);
for (const obj of gdjs.fightingCourtSceneCode.GDhealthsubtract5Objects1) asyncObjectsList.addObject("healthsubtract5", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.fightingCourtSceneCode.asyncCallback25513636(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrow2Objects1Objects = Hashtable.newFrom({"Arrow2": gdjs.fightingCourtSceneCode.GDArrow2Objects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDMerchantObjects1Objects = Hashtable.newFrom({"Merchant": gdjs.fightingCourtSceneCode.GDMerchantObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDMerchantObjects1Objects = Hashtable.newFrom({"Merchant": gdjs.fightingCourtSceneCode.GDMerchantObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDwallObjects1Objects = Hashtable.newFrom({"wall": gdjs.fightingCourtSceneCode.GDwallObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDwallObjects1Objects = Hashtable.newFrom({"wall": gdjs.fightingCourtSceneCode.GDwallObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDMerchantObjects1Objects = Hashtable.newFrom({"Merchant": gdjs.fightingCourtSceneCode.GDMerchantObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDHoneyObjects1Objects = Hashtable.newFrom({"Honey": gdjs.fightingCourtSceneCode.GDHoneyObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDMerchantObjects1Objects = Hashtable.newFrom({"Merchant": gdjs.fightingCourtSceneCode.GDMerchantObjects1});
gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDBoneObjects1Objects = Hashtable.newFrom({"Bone": gdjs.fightingCourtSceneCode.GDBoneObjects1});
gdjs.fightingCourtSceneCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.fightingCourtSceneCode.GDSkeletonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ghostspawnpoint"), gdjs.fightingCourtSceneCode.GDghostspawnpointObjects1);
gdjs.copyArray(runtimeScene.getObjects("skeletonspawnpoint"), gdjs.fightingCourtSceneCode.GDskeletonspawnpointObjects1);
gdjs.copyArray(runtimeScene.getObjects("spawnpoint_bees_"), gdjs.fightingCourtSceneCode.GDspawnpoint_9595bees_9595Objects1);
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDSkeletonObjects1[i].getBehavior("Animation").setAnimationName("Bone Pile Wakeup");
}
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDspawnpoint_9595bees_9595Objects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDspawnpoint_9595bees_9595Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDskeletonspawnpointObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDskeletonspawnpointObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDghostspawnpointObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDghostspawnpointObjects1[i].hide();
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "8f06bcf680799327e8e59eaf53bceee10f60ad5ea697e950624a669ab23d756e_Horizon Flare.aac", true, 100, 1);
}
{ //Subevents
gdjs.fightingCourtSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.fightingCourtSceneCode.GDMerchantObjects1);
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDMerchantObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDMerchantObjects1[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.fightingCourtSceneCode.GDMerchantObjects1);
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDMerchantObjects1[i].getBehavior("Animation").setAnimationIndex(4);
}
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDMerchantObjects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.fightingCourtSceneCode.GDMerchantObjects1);
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDMerchantObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDMerchantObjects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.fightingCourtSceneCode.GDMerchantObjects1);
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDMerchantObjects1[i].getBehavior("Animation").setAnimationIndex(3);
}
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDMerchantObjects1[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Crossbow"), gdjs.fightingCourtSceneCode.GDCrossbowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.fightingCourtSceneCode.GDMerchantObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDMerchantObjects1Objects, gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDCrossbowObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.fightingCourtSceneCode.GDCrossbowObjects1 */
/* Reuse gdjs.fightingCourtSceneCode.GDMerchantObjects1 */
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDCrossbowObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDCrossbowObjects1[i].setPosition((( gdjs.fightingCourtSceneCode.GDMerchantObjects1.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDMerchantObjects1[0].getPointX("hand")),(( gdjs.fightingCourtSceneCode.GDMerchantObjects1.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDMerchantObjects1[0].getPointY("hand")));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Crossbow"), gdjs.fightingCourtSceneCode.GDCrossbowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.fightingCourtSceneCode.GDMerchantObjects1);
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDCrossbowObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDCrossbowObjects1[i].setPosition((( gdjs.fightingCourtSceneCode.GDMerchantObjects1.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDMerchantObjects1[0].getPointX("hand")),(( gdjs.fightingCourtSceneCode.GDMerchantObjects1.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDMerchantObjects1[0].getPointY("hand")));
}
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDCrossbowObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDCrossbowObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDCrossbowObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDCrossbowObjects1[i].setAngle(gdjs.fightingCourtSceneCode.GDCrossbowObjects1[i].getAngle() + (45));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25488012);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Crossbow"), gdjs.fightingCourtSceneCode.GDCrossbowObjects1);
gdjs.fightingCourtSceneCode.GDArrowObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrowObjects1Objects, (( gdjs.fightingCourtSceneCode.GDCrossbowObjects1.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDCrossbowObjects1[0].getCenterXInScene()), (( gdjs.fightingCourtSceneCode.GDCrossbowObjects1.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDCrossbowObjects1[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDArrowObjects1[i].getBehavior("Scale").setScale(3);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "b6ebe98286f0e4e55134800f4fbceccc5ceca6afc22d0b556402aec850652807_Laser-weapon 4.aac", false, 100, 1);
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDArrowObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDArrowObjects1[i].setAngle(gdjs.fightingCourtSceneCode.GDArrowObjects1[i].getAngle() + (45));
}
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDArrowObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 500, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.fightingCourtSceneCode.GDArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.fightingCourtSceneCode.GDBigDemonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrowObjects1Objects, gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDBigDemonObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.fightingCourtSceneCode.GDBigDemonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("WoodRedBar"), gdjs.fightingCourtSceneCode.GDWoodRedBarObjects1);
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDBigDemonObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDBigDemonObjects1[i].returnVariable(gdjs.fightingCourtSceneCode.GDBigDemonObjects1[i].getVariables().getFromIndex(0)).sub(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDWoodRedBarObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDWoodRedBarObjects1[i].SetValue(gdjs.fightingCourtSceneCode.GDWoodRedBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.fightingCourtSceneCode.GDArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.fightingCourtSceneCode.GDSkeletonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrowObjects1Objects, gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDSkeletonObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.fightingCourtSceneCode.GDSkeletonObjects1 */
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDSkeletonObjects1[i].returnVariable(gdjs.fightingCourtSceneCode.GDSkeletonObjects1[i].getVariables().getFromIndex(0)).sub(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDSkeletonObjects1[i].getBehavior("Animation").setAnimationName("Hurt");
}
}
{ //Subevents
gdjs.fightingCourtSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.fightingCourtSceneCode.GDArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ghost"), gdjs.fightingCourtSceneCode.GDGhostObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrowObjects1Objects, gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDGhostObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.fightingCourtSceneCode.GDGhostObjects1 */
gdjs.fightingCourtSceneCode.GDhealthadd2Objects1.length = 0;

{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDGhostObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDGhostObjects1[i].returnVariable(gdjs.fightingCourtSceneCode.GDGhostObjects1[i].getVariables().getFromIndex(0)).sub(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDhealthadd2Objects1Objects, (( gdjs.fightingCourtSceneCode.GDGhostObjects1.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDGhostObjects1[0].getCenterXInScene()), (( gdjs.fightingCourtSceneCode.GDGhostObjects1.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDGhostObjects1[0].getCenterYInScene()) - 5, "");
}
{ //Subevents
gdjs.fightingCourtSceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.fightingCourtSceneCode.GDArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bee"), gdjs.fightingCourtSceneCode.GDBeeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrowObjects1Objects, gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDBeeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.fightingCourtSceneCode.GDBeeObjects1 */
gdjs.fightingCourtSceneCode.GDHoneyObjects1.length = 0;

{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDBeeObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDBeeObjects1[i].returnVariable(gdjs.fightingCourtSceneCode.GDBeeObjects1[i].getVariables().getFromIndex(0)).sub(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDHoneyObjects1Objects, (( gdjs.fightingCourtSceneCode.GDBeeObjects1.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDBeeObjects1[0].getCenterXInScene()), (( gdjs.fightingCourtSceneCode.GDBeeObjects1.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDBeeObjects1[0].getCenterYInScene()), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.fightingCourtSceneCode.GDBigDemonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fightingCourtSceneCode.GDBigDemonObjects1.length;i<l;++i) {
    if ( gdjs.fightingCourtSceneCode.GDBigDemonObjects1[i].getVariableNumber(gdjs.fightingCourtSceneCode.GDBigDemonObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.fightingCourtSceneCode.GDBigDemonObjects1[k] = gdjs.fightingCourtSceneCode.GDBigDemonObjects1[i];
        ++k;
    }
}
gdjs.fightingCourtSceneCode.GDBigDemonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.fightingCourtSceneCode.GDBigDemonObjects1 */
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDBigDemonObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDBigDemonObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "bossdie", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(100000);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.fightingCourtSceneCode.GDSkeletonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fightingCourtSceneCode.GDSkeletonObjects1.length;i<l;++i) {
    if ( gdjs.fightingCourtSceneCode.GDSkeletonObjects1[i].getVariableNumber(gdjs.fightingCourtSceneCode.GDSkeletonObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.fightingCourtSceneCode.GDSkeletonObjects1[k] = gdjs.fightingCourtSceneCode.GDSkeletonObjects1[i];
        ++k;
    }
}
gdjs.fightingCourtSceneCode.GDSkeletonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.fightingCourtSceneCode.GDSkeletonObjects1 */
gdjs.fightingCourtSceneCode.GDBoneObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDBoneObjects1Objects, (( gdjs.fightingCourtSceneCode.GDSkeletonObjects1.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDSkeletonObjects1[0].getCenterXInScene()), (( gdjs.fightingCourtSceneCode.GDSkeletonObjects1.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDSkeletonObjects1[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDSkeletonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ghost"), gdjs.fightingCourtSceneCode.GDGhostObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fightingCourtSceneCode.GDGhostObjects1.length;i<l;++i) {
    if ( gdjs.fightingCourtSceneCode.GDGhostObjects1[i].getVariableNumber(gdjs.fightingCourtSceneCode.GDGhostObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.fightingCourtSceneCode.GDGhostObjects1[k] = gdjs.fightingCourtSceneCode.GDGhostObjects1[i];
        ++k;
    }
}
gdjs.fightingCourtSceneCode.GDGhostObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.fightingCourtSceneCode.GDGhostObjects1 */
gdjs.copyArray(runtimeScene.getObjects("HealthBarHorizontal"), gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1);
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDGhostObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDGhostObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1[i].SetValue(gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (5), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bee"), gdjs.fightingCourtSceneCode.GDBeeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fightingCourtSceneCode.GDBeeObjects1.length;i<l;++i) {
    if ( gdjs.fightingCourtSceneCode.GDBeeObjects1[i].getVariableNumber(gdjs.fightingCourtSceneCode.GDBeeObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.fightingCourtSceneCode.GDBeeObjects1[k] = gdjs.fightingCourtSceneCode.GDBeeObjects1[i];
        ++k;
    }
}
gdjs.fightingCourtSceneCode.GDBeeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.fightingCourtSceneCode.GDBeeObjects1 */
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDBeeObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDBeeObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.fightingCourtSceneCode.GDArrowObjects1.length = 0;

gdjs.fightingCourtSceneCode.GDBeeObjects1.length = 0;

gdjs.fightingCourtSceneCode.GDBigDemonObjects1.length = 0;

gdjs.fightingCourtSceneCode.GDGhostObjects1.length = 0;

gdjs.fightingCourtSceneCode.GDSkeletonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.fightingCourtSceneCode.GDArrowObjects1_1final.length = 0;
gdjs.fightingCourtSceneCode.GDBeeObjects1_1final.length = 0;
gdjs.fightingCourtSceneCode.GDBigDemonObjects1_1final.length = 0;
gdjs.fightingCourtSceneCode.GDGhostObjects1_1final.length = 0;
gdjs.fightingCourtSceneCode.GDSkeletonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.fightingCourtSceneCode.GDArrowObjects2);
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.fightingCourtSceneCode.GDSkeletonObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrowObjects2Objects, gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDSkeletonObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.fightingCourtSceneCode.GDArrowObjects2.length; j < jLen ; ++j) {
        if ( gdjs.fightingCourtSceneCode.GDArrowObjects1_1final.indexOf(gdjs.fightingCourtSceneCode.GDArrowObjects2[j]) === -1 )
            gdjs.fightingCourtSceneCode.GDArrowObjects1_1final.push(gdjs.fightingCourtSceneCode.GDArrowObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.fightingCourtSceneCode.GDSkeletonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.fightingCourtSceneCode.GDSkeletonObjects1_1final.indexOf(gdjs.fightingCourtSceneCode.GDSkeletonObjects2[j]) === -1 )
            gdjs.fightingCourtSceneCode.GDSkeletonObjects1_1final.push(gdjs.fightingCourtSceneCode.GDSkeletonObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.fightingCourtSceneCode.GDArrowObjects2);
gdjs.copyArray(runtimeScene.getObjects("Ghost"), gdjs.fightingCourtSceneCode.GDGhostObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrowObjects2Objects, gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDGhostObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.fightingCourtSceneCode.GDArrowObjects2.length; j < jLen ; ++j) {
        if ( gdjs.fightingCourtSceneCode.GDArrowObjects1_1final.indexOf(gdjs.fightingCourtSceneCode.GDArrowObjects2[j]) === -1 )
            gdjs.fightingCourtSceneCode.GDArrowObjects1_1final.push(gdjs.fightingCourtSceneCode.GDArrowObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.fightingCourtSceneCode.GDGhostObjects2.length; j < jLen ; ++j) {
        if ( gdjs.fightingCourtSceneCode.GDGhostObjects1_1final.indexOf(gdjs.fightingCourtSceneCode.GDGhostObjects2[j]) === -1 )
            gdjs.fightingCourtSceneCode.GDGhostObjects1_1final.push(gdjs.fightingCourtSceneCode.GDGhostObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.fightingCourtSceneCode.GDArrowObjects2);
gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.fightingCourtSceneCode.GDBigDemonObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrowObjects2Objects, gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDBigDemonObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.fightingCourtSceneCode.GDArrowObjects2.length; j < jLen ; ++j) {
        if ( gdjs.fightingCourtSceneCode.GDArrowObjects1_1final.indexOf(gdjs.fightingCourtSceneCode.GDArrowObjects2[j]) === -1 )
            gdjs.fightingCourtSceneCode.GDArrowObjects1_1final.push(gdjs.fightingCourtSceneCode.GDArrowObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.fightingCourtSceneCode.GDBigDemonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.fightingCourtSceneCode.GDBigDemonObjects1_1final.indexOf(gdjs.fightingCourtSceneCode.GDBigDemonObjects2[j]) === -1 )
            gdjs.fightingCourtSceneCode.GDBigDemonObjects1_1final.push(gdjs.fightingCourtSceneCode.GDBigDemonObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.fightingCourtSceneCode.GDArrowObjects2);
gdjs.copyArray(runtimeScene.getObjects("Bee"), gdjs.fightingCourtSceneCode.GDBeeObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrowObjects2Objects, gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDBeeObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.fightingCourtSceneCode.GDArrowObjects2.length; j < jLen ; ++j) {
        if ( gdjs.fightingCourtSceneCode.GDArrowObjects1_1final.indexOf(gdjs.fightingCourtSceneCode.GDArrowObjects2[j]) === -1 )
            gdjs.fightingCourtSceneCode.GDArrowObjects1_1final.push(gdjs.fightingCourtSceneCode.GDArrowObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.fightingCourtSceneCode.GDBeeObjects2.length; j < jLen ; ++j) {
        if ( gdjs.fightingCourtSceneCode.GDBeeObjects1_1final.indexOf(gdjs.fightingCourtSceneCode.GDBeeObjects2[j]) === -1 )
            gdjs.fightingCourtSceneCode.GDBeeObjects1_1final.push(gdjs.fightingCourtSceneCode.GDBeeObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.fightingCourtSceneCode.GDArrowObjects1_1final, gdjs.fightingCourtSceneCode.GDArrowObjects1);
gdjs.copyArray(gdjs.fightingCourtSceneCode.GDBeeObjects1_1final, gdjs.fightingCourtSceneCode.GDBeeObjects1);
gdjs.copyArray(gdjs.fightingCourtSceneCode.GDBigDemonObjects1_1final, gdjs.fightingCourtSceneCode.GDBigDemonObjects1);
gdjs.copyArray(gdjs.fightingCourtSceneCode.GDGhostObjects1_1final, gdjs.fightingCourtSceneCode.GDGhostObjects1);
gdjs.copyArray(gdjs.fightingCourtSceneCode.GDSkeletonObjects1_1final, gdjs.fightingCourtSceneCode.GDSkeletonObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.fightingCourtSceneCode.GDArrowObjects1 */
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDArrowObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.fightingCourtSceneCode.eventsList3(runtimeScene);
}


{


gdjs.fightingCourtSceneCode.eventsList4(runtimeScene);
}


{


gdjs.fightingCourtSceneCode.eventsList5(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("HealthBarHorizontal"), gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1.length;i<l;++i) {
    if ( gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1[k] = gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1[i];
        ++k;
    }
}
gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "bigbossattacktimer") >= 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.fightingCourtSceneCode.GDBigDemonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.fightingCourtSceneCode.GDMerchantObjects1);
gdjs.fightingCourtSceneCode.GDArrow2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrow2Objects1Objects, (( gdjs.fightingCourtSceneCode.GDBigDemonObjects1.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDBigDemonObjects1[0].getPointX("")), (( gdjs.fightingCourtSceneCode.GDBigDemonObjects1.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDBigDemonObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDArrow2Objects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDArrow2Objects1[i].addForceTowardObject((gdjs.fightingCourtSceneCode.GDMerchantObjects1.length !== 0 ? gdjs.fightingCourtSceneCode.GDMerchantObjects1[0] : null), 500, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "bigbossattacktimer");
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDArrow2Objects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDArrow2Objects1[i].rotateTowardPosition((( gdjs.fightingCourtSceneCode.GDMerchantObjects1.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDMerchantObjects1[0].getPointX("")), (( gdjs.fightingCourtSceneCode.GDMerchantObjects1.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDMerchantObjects1[0].getPointY("")), 0, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Arrow2"), gdjs.fightingCourtSceneCode.GDArrow2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.fightingCourtSceneCode.GDMerchantObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrow2Objects1Objects, gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDMerchantObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25512860);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.fightingCourtSceneCode.GDArrow2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("HealthBarHorizontal"), gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1);
/* Reuse gdjs.fightingCourtSceneCode.GDMerchantObjects1 */
gdjs.fightingCourtSceneCode.GDhealthsubtract5Objects1.length = 0;

{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDArrow2Objects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDArrow2Objects1[i].setAngle(0);
}
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDArrow2Objects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDArrow2Objects1[i].getBehavior("Animation").setAnimationName("Shower Effect");
}
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDArrow2Objects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDArrow2Objects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1[i].SetValue(gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (5), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDhealthsubtract5Objects1Objects, (( gdjs.fightingCourtSceneCode.GDMerchantObjects1.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDMerchantObjects1[0].getCenterXInScene()), (( gdjs.fightingCourtSceneCode.GDMerchantObjects1.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDMerchantObjects1[0].getCenterYInScene()) - 5, "");
}
{ //Subevents
gdjs.fightingCourtSceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Arrow2"), gdjs.fightingCourtSceneCode.GDArrow2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.fightingCourtSceneCode.GDMerchantObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDArrow2Objects1Objects, gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDMerchantObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HealthBarHorizontal"), gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1);
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.fightingCourtSceneCode.GDMerchantObjects1);
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1[i].setPosition((( gdjs.fightingCourtSceneCode.GDMerchantObjects1.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDMerchantObjects1[0].getPointX("")),(( gdjs.fightingCourtSceneCode.GDMerchantObjects1.length === 0 ) ? 0 :gdjs.fightingCourtSceneCode.GDMerchantObjects1[0].getPointY("")) - 5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.fightingCourtSceneCode.GDMerchantObjects1);
gdjs.copyArray(runtimeScene.getObjects("wall"), gdjs.fightingCourtSceneCode.GDwallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDMerchantObjects1Objects, gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDwallObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.fightingCourtSceneCode.GDMerchantObjects1 */
/* Reuse gdjs.fightingCourtSceneCode.GDwallObjects1 */
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDMerchantObjects1[i].separateFromObjectsList(gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDwallObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Honey"), gdjs.fightingCourtSceneCode.GDHoneyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.fightingCourtSceneCode.GDMerchantObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDMerchantObjects1Objects, gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDHoneyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.fightingCourtSceneCode.GDHoneyObjects1 */
/* Reuse gdjs.fightingCourtSceneCode.GDMerchantObjects1 */
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDHoneyObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDHoneyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDMerchantObjects1[i].getBehavior("TopDownMovement").setAcceleration(gdjs.fightingCourtSceneCode.GDMerchantObjects1[i].getBehavior("TopDownMovement").getAcceleration() + (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bone"), gdjs.fightingCourtSceneCode.GDBoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.fightingCourtSceneCode.GDMerchantObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDMerchantObjects1Objects, gdjs.fightingCourtSceneCode.mapOfGDgdjs_9546fightingCourtSceneCode_9546GDBoneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.fightingCourtSceneCode.GDBoneObjects1 */
{for(var i = 0, len = gdjs.fightingCourtSceneCode.GDBoneObjects1.length ;i < len;++i) {
    gdjs.fightingCourtSceneCode.GDBoneObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.fightingCourtSceneCode.GDBigDemonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fightingCourtSceneCode.GDBigDemonObjects1.length;i<l;++i) {
    if ( gdjs.fightingCourtSceneCode.GDBigDemonObjects1[i].getVariableNumber(gdjs.fightingCourtSceneCode.GDBigDemonObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.fightingCourtSceneCode.GDBigDemonObjects1[k] = gdjs.fightingCourtSceneCode.GDBigDemonObjects1[i];
        ++k;
    }
}
gdjs.fightingCourtSceneCode.GDBigDemonObjects1.length = k;
if (isConditionTrue_0) {
}

}


};

gdjs.fightingCourtSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.fightingCourtSceneCode.GDBigDemonObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDBigDemonObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDBigDemonObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDbgObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDbgObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDbgObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDSkeletonObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDSkeletonObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDSkeletonObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDGhostObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDGhostObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDGhostObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDMerchantObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDMerchantObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDMerchantObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDWoodRedBarObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDWoodRedBarObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDWoodRedBarObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDCrossbowObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDCrossbowObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDCrossbowObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDArrowObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDArrowObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDArrowObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDhintObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDhintObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDhintObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDBeeObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDBeeObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDBeeObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDspawnpoint_9595bees_9595Objects1.length = 0;
gdjs.fightingCourtSceneCode.GDspawnpoint_9595bees_9595Objects2.length = 0;
gdjs.fightingCourtSceneCode.GDspawnpoint_9595bees_9595Objects3.length = 0;
gdjs.fightingCourtSceneCode.GDskeletonspawnpointObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDskeletonspawnpointObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDskeletonspawnpointObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDghostspawnpointObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDghostspawnpointObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDghostspawnpointObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDArrow2Objects1.length = 0;
gdjs.fightingCourtSceneCode.GDArrow2Objects2.length = 0;
gdjs.fightingCourtSceneCode.GDArrow2Objects3.length = 0;
gdjs.fightingCourtSceneCode.GDwallObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDwallObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDwallObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDBoneObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDBoneObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDBoneObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDHoneyObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDHoneyObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDHoneyObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDhealthadd2Objects1.length = 0;
gdjs.fightingCourtSceneCode.GDhealthadd2Objects2.length = 0;
gdjs.fightingCourtSceneCode.GDhealthadd2Objects3.length = 0;
gdjs.fightingCourtSceneCode.GDhealthsubtract5Objects1.length = 0;
gdjs.fightingCourtSceneCode.GDhealthsubtract5Objects2.length = 0;
gdjs.fightingCourtSceneCode.GDhealthsubtract5Objects3.length = 0;
gdjs.fightingCourtSceneCode.GDbigbossdieObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDbigbossdieObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDbigbossdieObjects3.length = 0;

gdjs.fightingCourtSceneCode.eventsList8(runtimeScene);
gdjs.fightingCourtSceneCode.GDBigDemonObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDBigDemonObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDBigDemonObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDbgObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDbgObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDbgObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDSkeletonObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDSkeletonObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDSkeletonObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDGhostObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDGhostObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDGhostObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDMerchantObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDMerchantObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDMerchantObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDWoodRedBarObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDWoodRedBarObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDWoodRedBarObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDCrossbowObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDCrossbowObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDCrossbowObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDArrowObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDArrowObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDArrowObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDhintObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDhintObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDhintObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDBeeObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDBeeObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDBeeObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDspawnpoint_9595bees_9595Objects1.length = 0;
gdjs.fightingCourtSceneCode.GDspawnpoint_9595bees_9595Objects2.length = 0;
gdjs.fightingCourtSceneCode.GDspawnpoint_9595bees_9595Objects3.length = 0;
gdjs.fightingCourtSceneCode.GDskeletonspawnpointObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDskeletonspawnpointObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDskeletonspawnpointObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDghostspawnpointObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDghostspawnpointObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDghostspawnpointObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDHealthBarHorizontalObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDArrow2Objects1.length = 0;
gdjs.fightingCourtSceneCode.GDArrow2Objects2.length = 0;
gdjs.fightingCourtSceneCode.GDArrow2Objects3.length = 0;
gdjs.fightingCourtSceneCode.GDwallObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDwallObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDwallObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDBoneObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDBoneObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDBoneObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDHoneyObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDHoneyObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDHoneyObjects3.length = 0;
gdjs.fightingCourtSceneCode.GDhealthadd2Objects1.length = 0;
gdjs.fightingCourtSceneCode.GDhealthadd2Objects2.length = 0;
gdjs.fightingCourtSceneCode.GDhealthadd2Objects3.length = 0;
gdjs.fightingCourtSceneCode.GDhealthsubtract5Objects1.length = 0;
gdjs.fightingCourtSceneCode.GDhealthsubtract5Objects2.length = 0;
gdjs.fightingCourtSceneCode.GDhealthsubtract5Objects3.length = 0;
gdjs.fightingCourtSceneCode.GDbigbossdieObjects1.length = 0;
gdjs.fightingCourtSceneCode.GDbigbossdieObjects2.length = 0;
gdjs.fightingCourtSceneCode.GDbigbossdieObjects3.length = 0;


return;

}

gdjs['fightingCourtSceneCode'] = gdjs.fightingCourtSceneCode;
