gdjs.warCode = {};
gdjs.warCode.localVariables = [];
gdjs.warCode.GDNewSpriteObjects1= [];
gdjs.warCode.GDNewSpriteObjects2= [];
gdjs.warCode.GDNewSpriteObjects3= [];
gdjs.warCode.GDNewSprite2Objects1= [];
gdjs.warCode.GDNewSprite2Objects2= [];
gdjs.warCode.GDNewSprite2Objects3= [];
gdjs.warCode.GDB2Objects1= [];
gdjs.warCode.GDB2Objects2= [];
gdjs.warCode.GDB2Objects3= [];
gdjs.warCode.GDS3Objects1= [];
gdjs.warCode.GDS3Objects2= [];
gdjs.warCode.GDS3Objects3= [];
gdjs.warCode.GDbattle_9595shipObjects1= [];
gdjs.warCode.GDbattle_9595shipObjects2= [];
gdjs.warCode.GDbattle_9595shipObjects3= [];
gdjs.warCode.GDbpObjects1= [];
gdjs.warCode.GDbpObjects2= [];
gdjs.warCode.GDbpObjects3= [];
gdjs.warCode.GDspObjects1= [];
gdjs.warCode.GDspObjects2= [];
gdjs.warCode.GDspObjects3= [];
gdjs.warCode.GDsubmarineObjects1= [];
gdjs.warCode.GDsubmarineObjects2= [];
gdjs.warCode.GDsubmarineObjects3= [];
gdjs.warCode.GDBulletObjects1= [];
gdjs.warCode.GDBulletObjects2= [];
gdjs.warCode.GDBulletObjects3= [];
gdjs.warCode.GDBullet2Objects1= [];
gdjs.warCode.GDBullet2Objects2= [];
gdjs.warCode.GDBullet2Objects3= [];
gdjs.warCode.GDKlaedTorpedoObjects1= [];
gdjs.warCode.GDKlaedTorpedoObjects2= [];
gdjs.warCode.GDKlaedTorpedoObjects3= [];
gdjs.warCode.GDNairanTorpedoObjects1= [];
gdjs.warCode.GDNairanTorpedoObjects2= [];
gdjs.warCode.GDNairanTorpedoObjects3= [];
gdjs.warCode.GDDroppedBombObjects1= [];
gdjs.warCode.GDDroppedBombObjects2= [];
gdjs.warCode.GDDroppedBombObjects3= [];
gdjs.warCode.GDInventorySlotEmpty2Objects1= [];
gdjs.warCode.GDInventorySlotEmpty2Objects2= [];
gdjs.warCode.GDInventorySlotEmpty2Objects3= [];
gdjs.warCode.GDbombkeyObjects1= [];
gdjs.warCode.GDbombkeyObjects2= [];
gdjs.warCode.GDbombkeyObjects3= [];
gdjs.warCode.GDbulletkeyObjects1= [];
gdjs.warCode.GDbulletkeyObjects2= [];
gdjs.warCode.GDbulletkeyObjects3= [];
gdjs.warCode.GDtorpedokeyObjects1= [];
gdjs.warCode.GDtorpedokeyObjects2= [];
gdjs.warCode.GDtorpedokeyObjects3= [];
gdjs.warCode.GDseasurfaceObjects1= [];
gdjs.warCode.GDseasurfaceObjects2= [];
gdjs.warCode.GDseasurfaceObjects3= [];
gdjs.warCode.GDwallObjects1= [];
gdjs.warCode.GDwallObjects2= [];
gdjs.warCode.GDwallObjects3= [];
gdjs.warCode.GDExplosionObjects1= [];
gdjs.warCode.GDExplosionObjects2= [];
gdjs.warCode.GDExplosionObjects3= [];
gdjs.warCode.GDPixelHeartBarObjects1= [];
gdjs.warCode.GDPixelHeartBarObjects2= [];
gdjs.warCode.GDPixelHeartBarObjects3= [];
gdjs.warCode.GDMetalRedBarObjects1= [];
gdjs.warCode.GDMetalRedBarObjects2= [];
gdjs.warCode.GDMetalRedBarObjects3= [];
gdjs.warCode.GDExplosion1Objects1= [];
gdjs.warCode.GDExplosion1Objects2= [];
gdjs.warCode.GDExplosion1Objects3= [];
gdjs.warCode.GDRedFlatBarObjects1= [];
gdjs.warCode.GDRedFlatBarObjects2= [];
gdjs.warCode.GDRedFlatBarObjects3= [];
gdjs.warCode.GDewspObjects1= [];
gdjs.warCode.GDewspObjects2= [];
gdjs.warCode.GDewspObjects3= [];
gdjs.warCode.GDssspppObjects1= [];
gdjs.warCode.GDssspppObjects2= [];
gdjs.warCode.GDssspppObjects3= [];
gdjs.warCode.GDtObjects1= [];
gdjs.warCode.GDtObjects2= [];
gdjs.warCode.GDtObjects3= [];


gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDB2Objects1Objects = Hashtable.newFrom({"B2": gdjs.warCode.GDB2Objects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDMetalRedBarObjects1Objects = Hashtable.newFrom({"MetalRedBar": gdjs.warCode.GDMetalRedBarObjects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDB2Objects1Objects = Hashtable.newFrom({"B2": gdjs.warCode.GDB2Objects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDssspppObjects1Objects = Hashtable.newFrom({"sssppp": gdjs.warCode.GDssspppObjects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDbattle_95959595shipObjects2Objects = Hashtable.newFrom({"battle_ship": gdjs.warCode.GDbattle_9595shipObjects2});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDExplosionObjects2Objects = Hashtable.newFrom({"Explosion": gdjs.warCode.GDExplosionObjects2});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDsubmarineObjects1Objects = Hashtable.newFrom({"submarine": gdjs.warCode.GDsubmarineObjects1});
gdjs.warCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "battle ship");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11361172);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.warCode.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("bp"), gdjs.warCode.GDbpObjects2);
gdjs.warCode.GDExplosionObjects2.length = 0;

gdjs.warCode.GDbattle_9595shipObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDbattle_95959595shipObjects2Objects, (( gdjs.warCode.GDbpObjects2.length === 0 ) ? 0 :gdjs.warCode.GDbpObjects2[0].getCenterXInScene()), (( gdjs.warCode.GDbpObjects2.length === 0 ) ? 0 :gdjs.warCode.GDbpObjects2[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.warCode.GDbattle_9595shipObjects2.length ;i < len;++i) {
    gdjs.warCode.GDbattle_9595shipObjects2[i].getBehavior("Scale").setScale(0.2);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDExplosionObjects2Objects, (( gdjs.warCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.warCode.GDBulletObjects2[0].getCenterXInScene()), (( gdjs.warCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.warCode.GDBulletObjects2[0].getCenterYInScene()), "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "submarin");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11128564);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bullet2"), gdjs.warCode.GDBullet2Objects1);
gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.warCode.GDRedFlatBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("sp"), gdjs.warCode.GDspObjects1);
gdjs.copyArray(runtimeScene.getObjects("sssppp"), gdjs.warCode.GDssspppObjects1);
gdjs.warCode.GDsubmarineObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDsubmarineObjects1Objects, (( gdjs.warCode.GDspObjects1.length === 0 ) ? 0 :gdjs.warCode.GDspObjects1[0].getCenterXInScene()), (( gdjs.warCode.GDspObjects1.length === 0 ) ? 0 :gdjs.warCode.GDspObjects1[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.warCode.GDsubmarineObjects1.length ;i < len;++i) {
    gdjs.warCode.GDsubmarineObjects1[i].getBehavior("Resizable").setSize(200, 150);
}
}{for(var i = 0, len = gdjs.warCode.GDssspppObjects1.length ;i < len;++i) {
    gdjs.warCode.GDssspppObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.warCode.GDBullet2Objects1.length ;i < len;++i) {
    gdjs.warCode.GDBullet2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.warCode.GDRedFlatBarObjects1.length ;i < len;++i) {
    gdjs.warCode.GDRedFlatBarObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.warCode.GDBulletObjects1});
gdjs.warCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "battle ship");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("B2"), gdjs.warCode.GDB2Objects1);
gdjs.copyArray(runtimeScene.getObjects("battle_ship"), gdjs.warCode.GDbattle_9595shipObjects1);
gdjs.warCode.GDBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDBulletObjects1Objects, (( gdjs.warCode.GDbattle_9595shipObjects1.length === 0 ) ? 0 :gdjs.warCode.GDbattle_9595shipObjects1[0].getPointX("bulletpoint")), (( gdjs.warCode.GDbattle_9595shipObjects1.length === 0 ) ? 0 :gdjs.warCode.GDbattle_9595shipObjects1[0].getPointY("bulletpoint")), "");
}{for(var i = 0, len = gdjs.warCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.warCode.GDBulletObjects1[i].addForceTowardObject((gdjs.warCode.GDB2Objects1.length !== 0 ? gdjs.warCode.GDB2Objects1[0] : null), 500, 1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "820b816d81b1156a6dab3dba23d2755925bdf41ae9faea98d669da14bcb2c24e_MetalV1_Run_09.wav", false, 100, 1);
}}

}


};gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.warCode.GDBulletObjects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDwallObjects1Objects = Hashtable.newFrom({"wall": gdjs.warCode.GDwallObjects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.warCode.GDBulletObjects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDB2Objects1Objects = Hashtable.newFrom({"B2": gdjs.warCode.GDB2Objects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.warCode.GDExplosionObjects1});
gdjs.warCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(asyncObjectsList.getObjects("MetalRedBar"), gdjs.warCode.GDMetalRedBarObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.warCode.GDMetalRedBarObjects2.length;i<l;++i) {
    if ( gdjs.warCode.GDMetalRedBarObjects2[i].IsEmpty((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.warCode.GDMetalRedBarObjects2[k] = gdjs.warCode.GDMetalRedBarObjects2[i];
        ++k;
    }
}
gdjs.warCode.GDMetalRedBarObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("B2"), gdjs.warCode.GDB2Objects2);

/* Reuse gdjs.warCode.GDMetalRedBarObjects2 */
{for(var i = 0, len = gdjs.warCode.GDB2Objects2.length ;i < len;++i) {
    gdjs.warCode.GDB2Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.warCode.GDMetalRedBarObjects2.length ;i < len;++i) {
    gdjs.warCode.GDMetalRedBarObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "b21");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "b2");
}}

}


};gdjs.warCode.asyncCallback11844132 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.warCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Explosion"), gdjs.warCode.GDExplosionObjects2);

{for(var i = 0, len = gdjs.warCode.GDExplosionObjects2.length ;i < len;++i) {
    gdjs.warCode.GDExplosionObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.warCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.warCode.localVariables.length = 0;
}
gdjs.warCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.warCode.localVariables);
for (const obj of gdjs.warCode.GDB2Objects1) asyncObjectsList.addObject("B2", obj);
for (const obj of gdjs.warCode.GDExplosionObjects1) asyncObjectsList.addObject("Explosion", obj);
for (const obj of gdjs.warCode.GDMetalRedBarObjects1) asyncObjectsList.addObject("MetalRedBar", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.warCode.asyncCallback11844132(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDDroppedBombObjects1Objects = Hashtable.newFrom({"DroppedBomb": gdjs.warCode.GDDroppedBombObjects1});
gdjs.warCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "battle ship");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("battle_ship"), gdjs.warCode.GDbattle_9595shipObjects1);
gdjs.warCode.GDDroppedBombObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDDroppedBombObjects1Objects, (( gdjs.warCode.GDbattle_9595shipObjects1.length === 0 ) ? 0 :gdjs.warCode.GDbattle_9595shipObjects1[0].getPointX("droppedbombpoint")), (( gdjs.warCode.GDbattle_9595shipObjects1.length === 0 ) ? 0 :gdjs.warCode.GDbattle_9595shipObjects1[0].getPointY("droppedbombpoint")), "");
}{for(var i = 0, len = gdjs.warCode.GDDroppedBombObjects1.length ;i < len;++i) {
    gdjs.warCode.GDDroppedBombObjects1[i].returnVariable(gdjs.warCode.GDDroppedBombObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.warCode.GDDroppedBombObjects1.length ;i < len;++i) {
    gdjs.warCode.GDDroppedBombObjects1[i].getBehavior("Scale").setScale(5);
}
}}

}


};gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDDroppedBombObjects1Objects = Hashtable.newFrom({"DroppedBomb": gdjs.warCode.GDDroppedBombObjects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDS3Objects1Objects = Hashtable.newFrom({"S3": gdjs.warCode.GDS3Objects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDExplosion1Objects1Objects = Hashtable.newFrom({"Explosion1": gdjs.warCode.GDExplosion1Objects1});
gdjs.warCode.asyncCallback9530124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.warCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Explosion1"), gdjs.warCode.GDExplosion1Objects2);

gdjs.copyArray(runtimeScene.getObjects("PixelHeartBar"), gdjs.warCode.GDPixelHeartBarObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("S3"), gdjs.warCode.GDS3Objects2);

{for(var i = 0, len = gdjs.warCode.GDExplosion1Objects2.length ;i < len;++i) {
    gdjs.warCode.GDExplosion1Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.warCode.GDS3Objects2.length ;i < len;++i) {
    gdjs.warCode.GDS3Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.warCode.GDPixelHeartBarObjects2.length ;i < len;++i) {
    gdjs.warCode.GDPixelHeartBarObjects2[i].deleteFromScene(runtimeScene);
}
}gdjs.warCode.localVariables.length = 0;
}
gdjs.warCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.warCode.localVariables);
for (const obj of gdjs.warCode.GDExplosion1Objects1) asyncObjectsList.addObject("Explosion1", obj);
for (const obj of gdjs.warCode.GDS3Objects1) asyncObjectsList.addObject("S3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.warCode.asyncCallback9530124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDBullet2Objects1Objects = Hashtable.newFrom({"Bullet2": gdjs.warCode.GDBullet2Objects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDBullet2Objects1Objects = Hashtable.newFrom({"Bullet2": gdjs.warCode.GDBullet2Objects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDbattle_95959595shipObjects1Objects = Hashtable.newFrom({"battle_ship": gdjs.warCode.GDbattle_9595shipObjects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.warCode.GDExplosionObjects1});
gdjs.warCode.asyncCallback11858012 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.warCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game over", false);
}gdjs.warCode.localVariables.length = 0;
}
gdjs.warCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.warCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.warCode.asyncCallback11858012(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.warCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(asyncObjectsList.getObjects("RedFlatBar"), gdjs.warCode.GDRedFlatBarObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.warCode.GDRedFlatBarObjects2.length;i<l;++i) {
    if ( gdjs.warCode.GDRedFlatBarObjects2[i].IsEmpty((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.warCode.GDRedFlatBarObjects2[k] = gdjs.warCode.GDRedFlatBarObjects2[i];
        ++k;
    }
}
gdjs.warCode.GDRedFlatBarObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.warCode.GDRedFlatBarObjects2 */
gdjs.copyArray(asyncObjectsList.getObjects("battle_ship"), gdjs.warCode.GDbattle_9595shipObjects2);

{for(var i = 0, len = gdjs.warCode.GDbattle_9595shipObjects2.length ;i < len;++i) {
    gdjs.warCode.GDbattle_9595shipObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.warCode.GDRedFlatBarObjects2.length ;i < len;++i) {
    gdjs.warCode.GDRedFlatBarObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.warCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.warCode.asyncCallback11853484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.warCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Explosion"), gdjs.warCode.GDExplosionObjects2);

{for(var i = 0, len = gdjs.warCode.GDExplosionObjects2.length ;i < len;++i) {
    gdjs.warCode.GDExplosionObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.warCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.warCode.localVariables.length = 0;
}
gdjs.warCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.warCode.localVariables);
for (const obj of gdjs.warCode.GDExplosionObjects1) asyncObjectsList.addObject("Explosion", obj);
for (const obj of gdjs.warCode.GDRedFlatBarObjects1) asyncObjectsList.addObject("RedFlatBar", obj);
for (const obj of gdjs.warCode.GDbattle_9595shipObjects1) asyncObjectsList.addObject("battle_ship", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.warCode.asyncCallback11853484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDsubmarineObjects1Objects = Hashtable.newFrom({"submarine": gdjs.warCode.GDsubmarineObjects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDseasurfaceObjects1Objects = Hashtable.newFrom({"seasurface": gdjs.warCode.GDseasurfaceObjects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDseasurfaceObjects1Objects = Hashtable.newFrom({"seasurface": gdjs.warCode.GDseasurfaceObjects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDKlaedTorpedoObjects1Objects = Hashtable.newFrom({"KlaedTorpedo": gdjs.warCode.GDKlaedTorpedoObjects1});
gdjs.warCode.asyncCallback11856180 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.warCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("KlaedTorpedo"), gdjs.warCode.GDKlaedTorpedoObjects2);

{for(var i = 0, len = gdjs.warCode.GDKlaedTorpedoObjects2.length ;i < len;++i) {
    gdjs.warCode.GDKlaedTorpedoObjects2[i].deleteFromScene(runtimeScene);
}
}gdjs.warCode.localVariables.length = 0;
}
gdjs.warCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.warCode.localVariables);
for (const obj of gdjs.warCode.GDKlaedTorpedoObjects1) asyncObjectsList.addObject("KlaedTorpedo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.warCode.asyncCallback11856180(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.warCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num3");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11856084);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("submarine"), gdjs.warCode.GDsubmarineObjects1);
gdjs.warCode.GDKlaedTorpedoObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDKlaedTorpedoObjects1Objects, (( gdjs.warCode.GDsubmarineObjects1.length === 0 ) ? 0 :gdjs.warCode.GDsubmarineObjects1[0].getPointX("")), (( gdjs.warCode.GDsubmarineObjects1.length === 0 ) ? 0 :gdjs.warCode.GDsubmarineObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.warCode.GDKlaedTorpedoObjects1.length ;i < len;++i) {
    gdjs.warCode.GDKlaedTorpedoObjects1[i].setAngle(270);
}
}{for(var i = 0, len = gdjs.warCode.GDKlaedTorpedoObjects1.length ;i < len;++i) {
    gdjs.warCode.GDKlaedTorpedoObjects1[i].addForce(-(1000), -(50), 1);
}
}
{ //Subevents
gdjs.warCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDKlaedTorpedoObjects1Objects = Hashtable.newFrom({"KlaedTorpedo": gdjs.warCode.GDKlaedTorpedoObjects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDS3Objects1Objects = Hashtable.newFrom({"S3": gdjs.warCode.GDS3Objects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDExplosion1Objects1Objects = Hashtable.newFrom({"Explosion1": gdjs.warCode.GDExplosion1Objects1});
gdjs.warCode.asyncCallback11861900 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.warCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Explosion1"), gdjs.warCode.GDExplosion1Objects2);

gdjs.copyArray(runtimeScene.getObjects("PixelHeartBar"), gdjs.warCode.GDPixelHeartBarObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("S3"), gdjs.warCode.GDS3Objects2);

{for(var i = 0, len = gdjs.warCode.GDExplosion1Objects2.length ;i < len;++i) {
    gdjs.warCode.GDExplosion1Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.warCode.GDS3Objects2.length ;i < len;++i) {
    gdjs.warCode.GDS3Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.warCode.GDPixelHeartBarObjects2.length ;i < len;++i) {
    gdjs.warCode.GDPixelHeartBarObjects2[i].deleteFromScene(runtimeScene);
}
}gdjs.warCode.localVariables.length = 0;
}
gdjs.warCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.warCode.localVariables);
for (const obj of gdjs.warCode.GDExplosion1Objects1) asyncObjectsList.addObject("Explosion1", obj);
for (const obj of gdjs.warCode.GDS3Objects1) asyncObjectsList.addObject("S3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.warCode.asyncCallback11861900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDKlaedTorpedoObjects1Objects = Hashtable.newFrom({"KlaedTorpedo": gdjs.warCode.GDKlaedTorpedoObjects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDB2Objects1Objects = Hashtable.newFrom({"B2": gdjs.warCode.GDB2Objects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.warCode.GDExplosionObjects1});
gdjs.warCode.eventsList12 = function(runtimeScene, asyncObjectsList) {

{

/* Reuse gdjs.warCode.GDMetalRedBarObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.warCode.GDMetalRedBarObjects2.length;i<l;++i) {
    if ( gdjs.warCode.GDMetalRedBarObjects2[i].IsEmpty((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.warCode.GDMetalRedBarObjects2[k] = gdjs.warCode.GDMetalRedBarObjects2[i];
        ++k;
    }
}
gdjs.warCode.GDMetalRedBarObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("B2"), gdjs.warCode.GDB2Objects2);

gdjs.copyArray(runtimeScene.getObjects("Bullet2"), gdjs.warCode.GDBullet2Objects2);
/* Reuse gdjs.warCode.GDMetalRedBarObjects2 */
{for(var i = 0, len = gdjs.warCode.GDB2Objects2.length ;i < len;++i) {
    gdjs.warCode.GDB2Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.warCode.GDBullet2Objects2.length ;i < len;++i) {
    gdjs.warCode.GDBullet2Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.warCode.GDMetalRedBarObjects2.length ;i < len;++i) {
    gdjs.warCode.GDMetalRedBarObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "b21");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "b2");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "DroppedBomb");
}}

}


};gdjs.warCode.asyncCallback11841380 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.warCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Explosion"), gdjs.warCode.GDExplosionObjects2);

gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.warCode.GDMetalRedBarObjects2);
{for(var i = 0, len = gdjs.warCode.GDExplosionObjects2.length ;i < len;++i) {
    gdjs.warCode.GDExplosionObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.warCode.GDMetalRedBarObjects2.length ;i < len;++i) {
    gdjs.warCode.GDMetalRedBarObjects2[i].SetValue(gdjs.warCode.GDMetalRedBarObjects2[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.warCode.eventsList12(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.warCode.localVariables.length = 0;
}
gdjs.warCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.warCode.localVariables);
for (const obj of gdjs.warCode.GDB2Objects1) asyncObjectsList.addObject("B2", obj);
for (const obj of gdjs.warCode.GDExplosionObjects1) asyncObjectsList.addObject("Explosion", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.warCode.asyncCallback11841380(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.warCode.mapOfEmptyGDB2Objects = Hashtable.newFrom({"B2": []});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDDroppedBombObjects1Objects = Hashtable.newFrom({"DroppedBomb": gdjs.warCode.GDDroppedBombObjects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDDroppedBombObjects1Objects = Hashtable.newFrom({"DroppedBomb": gdjs.warCode.GDDroppedBombObjects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDsubmarineObjects1Objects = Hashtable.newFrom({"submarine": gdjs.warCode.GDsubmarineObjects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDExplosion1Objects1Objects = Hashtable.newFrom({"Explosion1": gdjs.warCode.GDExplosion1Objects1});
gdjs.warCode.asyncCallback11836140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.warCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game over", false);
}gdjs.warCode.localVariables.length = 0;
}
gdjs.warCode.eventsList14 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.warCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.warCode.asyncCallback11836140(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.warCode.asyncCallback11858868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.warCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Explosion1"), gdjs.warCode.GDExplosion1Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("submarine"), gdjs.warCode.GDsubmarineObjects2);

{for(var i = 0, len = gdjs.warCode.GDExplosion1Objects2.length ;i < len;++i) {
    gdjs.warCode.GDExplosion1Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.warCode.GDsubmarineObjects2.length ;i < len;++i) {
    gdjs.warCode.GDsubmarineObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.warCode.eventsList14(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.warCode.localVariables.length = 0;
}
gdjs.warCode.eventsList15 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.warCode.localVariables);
for (const obj of gdjs.warCode.GDExplosion1Objects1) asyncObjectsList.addObject("Explosion1", obj);
for (const obj of gdjs.warCode.GDsubmarineObjects1) asyncObjectsList.addObject("submarine", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.warCode.asyncCallback11858868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.warCode.eventsList16 = function(runtimeScene) {

};gdjs.warCode.mapOfEmptyGDS3Objects = Hashtable.newFrom({"S3": []});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDNairanTorpedoObjects1Objects = Hashtable.newFrom({"NairanTorpedo": gdjs.warCode.GDNairanTorpedoObjects1});
gdjs.warCode.mapOfEmptyGDS3Objects = Hashtable.newFrom({"S3": []});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDNairanTorpedoObjects1Objects = Hashtable.newFrom({"NairanTorpedo": gdjs.warCode.GDNairanTorpedoObjects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDNairanTorpedoObjects1Objects = Hashtable.newFrom({"NairanTorpedo": gdjs.warCode.GDNairanTorpedoObjects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDsubmarineObjects1Objects = Hashtable.newFrom({"submarine": gdjs.warCode.GDsubmarineObjects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDExplosion1Objects1Objects = Hashtable.newFrom({"Explosion1": gdjs.warCode.GDExplosion1Objects1});
gdjs.warCode.asyncCallback11860084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.warCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game over", false);
}gdjs.warCode.localVariables.length = 0;
}
gdjs.warCode.eventsList17 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.warCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.warCode.asyncCallback11860084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.warCode.asyncCallback11859588 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.warCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Explosion1"), gdjs.warCode.GDExplosion1Objects2);

{for(var i = 0, len = gdjs.warCode.GDExplosion1Objects2.length ;i < len;++i) {
    gdjs.warCode.GDExplosion1Objects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.warCode.eventsList17(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.warCode.localVariables.length = 0;
}
gdjs.warCode.eventsList18 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.warCode.localVariables);
for (const obj of gdjs.warCode.GDExplosion1Objects1) asyncObjectsList.addObject("Explosion1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.warCode.asyncCallback11859588(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDNairanTorpedoObjects1Objects = Hashtable.newFrom({"NairanTorpedo": gdjs.warCode.GDNairanTorpedoObjects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDbattle_95959595shipObjects1Objects = Hashtable.newFrom({"battle_ship": gdjs.warCode.GDbattle_9595shipObjects1});
gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDExplosion1Objects1Objects = Hashtable.newFrom({"Explosion1": gdjs.warCode.GDExplosion1Objects1});
gdjs.warCode.asyncCallback11164236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.warCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game over", false);
}gdjs.warCode.localVariables.length = 0;
}
gdjs.warCode.eventsList19 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.warCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.warCode.asyncCallback11164236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.warCode.asyncCallback9882724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.warCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Explosion1"), gdjs.warCode.GDExplosion1Objects2);

{for(var i = 0, len = gdjs.warCode.GDExplosion1Objects2.length ;i < len;++i) {
    gdjs.warCode.GDExplosion1Objects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.warCode.eventsList19(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.warCode.localVariables.length = 0;
}
gdjs.warCode.eventsList20 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.warCode.localVariables);
for (const obj of gdjs.warCode.GDExplosion1Objects1) asyncObjectsList.addObject("Explosion1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.warCode.asyncCallback9882724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDS3Objects1Objects = Hashtable.newFrom({"S3": gdjs.warCode.GDS3Objects1});
gdjs.warCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("S3"), gdjs.warCode.GDS3Objects1);
gdjs.copyArray(runtimeScene.getObjects("bp"), gdjs.warCode.GDbpObjects1);
gdjs.copyArray(runtimeScene.getObjects("seasurface"), gdjs.warCode.GDseasurfaceObjects1);
gdjs.copyArray(runtimeScene.getObjects("sp"), gdjs.warCode.GDspObjects1);
gdjs.copyArray(runtimeScene.getObjects("sssppp"), gdjs.warCode.GDssspppObjects1);
{for(var i = 0, len = gdjs.warCode.GDbpObjects1.length ;i < len;++i) {
    gdjs.warCode.GDbpObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.warCode.GDspObjects1.length ;i < len;++i) {
    gdjs.warCode.GDspObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.warCode.GDseasurfaceObjects1.length ;i < len;++i) {
    gdjs.warCode.GDseasurfaceObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "b2");
}{for(var i = 0, len = gdjs.warCode.GDssspppObjects1.length ;i < len;++i) {
    gdjs.warCode.GDssspppObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "b21");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "DroppedBomb");
}{for(var i = 0, len = gdjs.warCode.GDS3Objects1.length ;i < len;++i) {
    gdjs.warCode.GDS3Objects1[i].getBehavior("Animation").setAnimationName("right");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "S90");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "S90A");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "S90B");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "b21") >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9771556);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ewsp"), gdjs.warCode.GDewspObjects1);
gdjs.copyArray(runtimeScene.getObjects("sssppp"), gdjs.warCode.GDssspppObjects1);
gdjs.warCode.GDB2Objects1.length = 0;

gdjs.warCode.GDMetalRedBarObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDB2Objects1Objects, (( gdjs.warCode.GDewspObjects1.length === 0 ) ? 0 :gdjs.warCode.GDewspObjects1[0].getPointX("")), (( gdjs.warCode.GDewspObjects1.length === 0 ) ? 0 :gdjs.warCode.GDewspObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.warCode.GDB2Objects1.length ;i < len;++i) {
    gdjs.warCode.GDB2Objects1[i].getBehavior("Resizable").setSize(200, 180);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDMetalRedBarObjects1Objects, (( gdjs.warCode.GDB2Objects1.length === 0 ) ? 0 :gdjs.warCode.GDB2Objects1[0].getPointX("")), (( gdjs.warCode.GDB2Objects1.length === 0 ) ? 0 :gdjs.warCode.GDB2Objects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.warCode.GDB2Objects1.length ;i < len;++i) {
    gdjs.warCode.GDB2Objects1[i].addForceTowardObject((gdjs.warCode.GDssspppObjects1.length !== 0 ? gdjs.warCode.GDssspppObjects1[0] : null), 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("B2"), gdjs.warCode.GDB2Objects1);
gdjs.copyArray(runtimeScene.getObjects("sssppp"), gdjs.warCode.GDssspppObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDB2Objects1Objects, gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDssspppObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("B2"), gdjs.warCode.GDB2Objects1);
gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.warCode.GDMetalRedBarObjects1);
{for(var i = 0, len = gdjs.warCode.GDMetalRedBarObjects1.length ;i < len;++i) {
    gdjs.warCode.GDMetalRedBarObjects1[i].setPosition((( gdjs.warCode.GDB2Objects1.length === 0 ) ? 0 :gdjs.warCode.GDB2Objects1[0].getPointX("")),(( gdjs.warCode.GDB2Objects1.length === 0 ) ? 0 :gdjs.warCode.GDB2Objects1[0].getPointY("")) - 20);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DroppedBomb"), gdjs.warCode.GDDroppedBombObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.warCode.GDDroppedBombObjects1.length;i<l;++i) {
    if ( gdjs.warCode.GDDroppedBombObjects1[i].getVariableNumber(gdjs.warCode.GDDroppedBombObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.warCode.GDDroppedBombObjects1[k] = gdjs.warCode.GDDroppedBombObjects1[i];
        ++k;
    }
}
gdjs.warCode.GDDroppedBombObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.warCode.GDDroppedBombObjects1 */
{for(var i = 0, len = gdjs.warCode.GDDroppedBombObjects1.length ;i < len;++i) {
    gdjs.warCode.GDDroppedBombObjects1[i].activateBehavior("PlatformerObject", false);
}
}}

}


{


gdjs.warCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num2");
if (isConditionTrue_0) {

{ //Subevents
gdjs.warCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.warCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("wall"), gdjs.warCode.GDwallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDBulletObjects1Objects, gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDwallObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.warCode.GDBulletObjects1 */
{for(var i = 0, len = gdjs.warCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.warCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("B2"), gdjs.warCode.GDB2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.warCode.GDBulletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDBulletObjects1Objects, gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDB2Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.warCode.GDBulletObjects1 */
gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.warCode.GDMetalRedBarObjects1);
gdjs.warCode.GDExplosionObjects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "68d16e38f82501c538c69cacf2f2491b4ff15cb34fa3ad08ce8e9445b4f1812a_Explosion 1.aac", false, 100, 1);
}{for(var i = 0, len = gdjs.warCode.GDMetalRedBarObjects1.length ;i < len;++i) {
    gdjs.warCode.GDMetalRedBarObjects1[i].SetValue(gdjs.warCode.GDMetalRedBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDExplosionObjects1Objects, (( gdjs.warCode.GDBulletObjects1.length === 0 ) ? 0 :gdjs.warCode.GDBulletObjects1[0].getCenterXInScene()), (( gdjs.warCode.GDBulletObjects1.length === 0 ) ? 0 :gdjs.warCode.GDBulletObjects1[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.warCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.warCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.warCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num1");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "1c20174c3f4eb46b6db4102ff4b519074aa1409414da966e2a3f8b33ef4b3146_MetalV2_Walk_10.wav", false, 100, 1);
}
{ //Subevents
gdjs.warCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DroppedBomb"), gdjs.warCode.GDDroppedBombObjects1);
gdjs.copyArray(runtimeScene.getObjects("S3"), gdjs.warCode.GDS3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDDroppedBombObjects1Objects, gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDS3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.warCode.GDDroppedBombObjects1 */
/* Reuse gdjs.warCode.GDS3Objects1 */
gdjs.warCode.GDExplosion1Objects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "e393c16c53a05345c011b67bcccd5ad6db8d61b5735a417f24a79d25e561bc73_Explosion 8.aac", false, 100, 1);
}{for(var i = 0, len = gdjs.warCode.GDDroppedBombObjects1.length ;i < len;++i) {
    gdjs.warCode.GDDroppedBombObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDExplosion1Objects1Objects, (( gdjs.warCode.GDS3Objects1.length === 0 ) ? 0 :gdjs.warCode.GDS3Objects1[0].getCenterXInScene()), (( gdjs.warCode.GDS3Objects1.length === 0 ) ? 0 :gdjs.warCode.GDS3Objects1[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.warCode.GDExplosion1Objects1.length ;i < len;++i) {
    gdjs.warCode.GDExplosion1Objects1[i].hide(false);
}
}
{ //Subevents
gdjs.warCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "b2") >= 4;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "battle ship");
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("B2"), gdjs.warCode.GDB2Objects1);
gdjs.copyArray(runtimeScene.getObjects("battle_ship"), gdjs.warCode.GDbattle_9595shipObjects1);
gdjs.warCode.GDBullet2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDBullet2Objects1Objects, (( gdjs.warCode.GDB2Objects1.length === 0 ) ? 0 :gdjs.warCode.GDB2Objects1[0].getPointX("B")), (( gdjs.warCode.GDB2Objects1.length === 0 ) ? 0 :gdjs.warCode.GDB2Objects1[0].getPointY("B")), "");
}{for(var i = 0, len = gdjs.warCode.GDBullet2Objects1.length ;i < len;++i) {
    gdjs.warCode.GDBullet2Objects1[i].getBehavior("Scale").setScale(2);
}
}{for(var i = 0, len = gdjs.warCode.GDBullet2Objects1.length ;i < len;++i) {
    gdjs.warCode.GDBullet2Objects1[i].addForceTowardObject((gdjs.warCode.GDbattle_9595shipObjects1.length !== 0 ? gdjs.warCode.GDbattle_9595shipObjects1[0] : null), 500, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "b2");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet2"), gdjs.warCode.GDBullet2Objects1);
gdjs.copyArray(runtimeScene.getObjects("battle_ship"), gdjs.warCode.GDbattle_9595shipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDBullet2Objects1Objects, gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDbattle_95959595shipObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.warCode.GDBullet2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.warCode.GDRedFlatBarObjects1);
gdjs.warCode.GDExplosionObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDExplosionObjects1Objects, (( gdjs.warCode.GDBullet2Objects1.length === 0 ) ? 0 :gdjs.warCode.GDBullet2Objects1[0].getCenterXInScene()), (( gdjs.warCode.GDBullet2Objects1.length === 0 ) ? 0 :gdjs.warCode.GDBullet2Objects1[0].getCenterYInScene()), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "68d16e38f82501c538c69cacf2f2491b4ff15cb34fa3ad08ce8e9445b4f1812a_Explosion 1.aac", false, 100, 1);
}{for(var i = 0, len = gdjs.warCode.GDRedFlatBarObjects1.length ;i < len;++i) {
    gdjs.warCode.GDRedFlatBarObjects1[i].SetValue(gdjs.warCode.GDRedFlatBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.warCode.GDBullet2Objects1.length ;i < len;++i) {
    gdjs.warCode.GDBullet2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.warCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.warCode.GDExplosionObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.warCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("seasurface"), gdjs.warCode.GDseasurfaceObjects1);
gdjs.copyArray(runtimeScene.getObjects("submarine"), gdjs.warCode.GDsubmarineObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDsubmarineObjects1Objects, gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDseasurfaceObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.warCode.GDseasurfaceObjects1 */
/* Reuse gdjs.warCode.GDsubmarineObjects1 */
{for(var i = 0, len = gdjs.warCode.GDsubmarineObjects1.length ;i < len;++i) {
    gdjs.warCode.GDsubmarineObjects1[i].separateFromObjectsList(gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDseasurfaceObjects1Objects, false);
}
}}

}


{


gdjs.warCode.eventsList10(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("KlaedTorpedo"), gdjs.warCode.GDKlaedTorpedoObjects1);
gdjs.copyArray(runtimeScene.getObjects("S3"), gdjs.warCode.GDS3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDKlaedTorpedoObjects1Objects, gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDS3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.warCode.GDKlaedTorpedoObjects1 */
/* Reuse gdjs.warCode.GDS3Objects1 */
gdjs.warCode.GDExplosion1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDExplosion1Objects1Objects, (( gdjs.warCode.GDS3Objects1.length === 0 ) ? 0 :gdjs.warCode.GDS3Objects1[0].getCenterXInScene()), (( gdjs.warCode.GDS3Objects1.length === 0 ) ? 0 :gdjs.warCode.GDS3Objects1[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.warCode.GDExplosion1Objects1.length ;i < len;++i) {
    gdjs.warCode.GDExplosion1Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "e393c16c53a05345c011b67bcccd5ad6db8d61b5735a417f24a79d25e561bc73_Explosion 8.aac", false, 100, 1);
}{for(var i = 0, len = gdjs.warCode.GDKlaedTorpedoObjects1.length ;i < len;++i) {
    gdjs.warCode.GDKlaedTorpedoObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.warCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("B2"), gdjs.warCode.GDB2Objects1);
gdjs.copyArray(runtimeScene.getObjects("KlaedTorpedo"), gdjs.warCode.GDKlaedTorpedoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDKlaedTorpedoObjects1Objects, gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDB2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11864196);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.warCode.GDB2Objects1 */
/* Reuse gdjs.warCode.GDKlaedTorpedoObjects1 */
gdjs.warCode.GDExplosionObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDExplosionObjects1Objects, (( gdjs.warCode.GDB2Objects1.length === 0 ) ? 0 :gdjs.warCode.GDB2Objects1[0].getCenterXInScene()), (( gdjs.warCode.GDB2Objects1.length === 0 ) ? 0 :gdjs.warCode.GDB2Objects1[0].getCenterYInScene()), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "e393c16c53a05345c011b67bcccd5ad6db8d61b5735a417f24a79d25e561bc73_Explosion 8.aac", false, 100, 1);
}{for(var i = 0, len = gdjs.warCode.GDKlaedTorpedoObjects1.length ;i < len;++i) {
    gdjs.warCode.GDKlaedTorpedoObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.warCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "submarin");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "DroppedBomb") >= 1;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfEmptyGDB2Objects) > 0;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("B2"), gdjs.warCode.GDB2Objects1);
gdjs.warCode.GDDroppedBombObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDDroppedBombObjects1Objects, (( gdjs.warCode.GDB2Objects1.length === 0 ) ? 0 :gdjs.warCode.GDB2Objects1[0].getCenterXInScene()), (( gdjs.warCode.GDB2Objects1.length === 0 ) ? 0 :gdjs.warCode.GDB2Objects1[0].getCenterYInScene()) + 100, "");
}{for(var i = 0, len = gdjs.warCode.GDDroppedBombObjects1.length ;i < len;++i) {
    gdjs.warCode.GDDroppedBombObjects1[i].getBehavior("Scale").setScale(5);
}
}{for(var i = 0, len = gdjs.warCode.GDDroppedBombObjects1.length ;i < len;++i) {
    gdjs.warCode.GDDroppedBombObjects1[i].returnVariable(gdjs.warCode.GDDroppedBombObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "DroppedBomb");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DroppedBomb"), gdjs.warCode.GDDroppedBombObjects1);
gdjs.copyArray(runtimeScene.getObjects("submarine"), gdjs.warCode.GDsubmarineObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDDroppedBombObjects1Objects, gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDsubmarineObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.warCode.GDDroppedBombObjects1 */
/* Reuse gdjs.warCode.GDsubmarineObjects1 */
gdjs.warCode.GDExplosion1Objects1.length = 0;

{for(var i = 0, len = gdjs.warCode.GDDroppedBombObjects1.length ;i < len;++i) {
    gdjs.warCode.GDDroppedBombObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDExplosion1Objects1Objects, (( gdjs.warCode.GDsubmarineObjects1.length === 0 ) ? 0 :gdjs.warCode.GDsubmarineObjects1[0].getCenterXInScene()), (( gdjs.warCode.GDsubmarineObjects1.length === 0 ) ? 0 :gdjs.warCode.GDsubmarineObjects1[0].getCenterYInScene()), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "68d16e38f82501c538c69cacf2f2491b4ff15cb34fa3ad08ce8e9445b4f1812a_Explosion 1.aac", false, 100, 1);
}
{ //Subevents
gdjs.warCode.eventsList15(runtimeScene);} //End of subevents
}

}


{


gdjs.warCode.eventsList16(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PixelHeartBar"), gdjs.warCode.GDPixelHeartBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("S3"), gdjs.warCode.GDS3Objects1);
{for(var i = 0, len = gdjs.warCode.GDPixelHeartBarObjects1.length ;i < len;++i) {
    gdjs.warCode.GDPixelHeartBarObjects1[i].setX((( gdjs.warCode.GDS3Objects1.length === 0 ) ? 0 :gdjs.warCode.GDS3Objects1[0].getCenterXInScene()) + 5);
}
}{for(var i = 0, len = gdjs.warCode.GDPixelHeartBarObjects1.length ;i < len;++i) {
    gdjs.warCode.GDPixelHeartBarObjects1[i].setY((( gdjs.warCode.GDS3Objects1.length === 0 ) ? 0 :gdjs.warCode.GDS3Objects1[0].getCenterYInScene()) - 14);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfEmptyGDS3Objects) > 0;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "S90") >= 3;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("S3"), gdjs.warCode.GDS3Objects1);
gdjs.warCode.GDNairanTorpedoObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDNairanTorpedoObjects1Objects, (( gdjs.warCode.GDS3Objects1.length === 0 ) ? 0 :gdjs.warCode.GDS3Objects1[0].getPointX("P")), (( gdjs.warCode.GDS3Objects1.length === 0 ) ? 0 :gdjs.warCode.GDS3Objects1[0].getPointY("P")), "");
}{for(var i = 0, len = gdjs.warCode.GDNairanTorpedoObjects1.length ;i < len;++i) {
    gdjs.warCode.GDNairanTorpedoObjects1[i].rotateTowardAngle(90, 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.warCode.GDNairanTorpedoObjects1.length ;i < len;++i) {
    gdjs.warCode.GDNairanTorpedoObjects1[i].addForce(1000, 0, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "S90");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfEmptyGDS3Objects) > 0;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "S90A") >= 2;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("S3"), gdjs.warCode.GDS3Objects1);
gdjs.warCode.GDNairanTorpedoObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDNairanTorpedoObjects1Objects, (( gdjs.warCode.GDS3Objects1.length === 0 ) ? 0 :gdjs.warCode.GDS3Objects1[0].getPointX("P")), (( gdjs.warCode.GDS3Objects1.length === 0 ) ? 0 :gdjs.warCode.GDS3Objects1[0].getPointY("P")), "");
}{for(var i = 0, len = gdjs.warCode.GDNairanTorpedoObjects1.length ;i < len;++i) {
    gdjs.warCode.GDNairanTorpedoObjects1[i].addForce(0, -(1000), 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "S90A");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NairanTorpedo"), gdjs.warCode.GDNairanTorpedoObjects1);
gdjs.copyArray(runtimeScene.getObjects("submarine"), gdjs.warCode.GDsubmarineObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDNairanTorpedoObjects1Objects, gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDsubmarineObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11833004);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.warCode.GDNairanTorpedoObjects1 */
/* Reuse gdjs.warCode.GDsubmarineObjects1 */
gdjs.warCode.GDExplosion1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDExplosion1Objects1Objects, (( gdjs.warCode.GDsubmarineObjects1.length === 0 ) ? 0 :gdjs.warCode.GDsubmarineObjects1[0].getCenterXInScene()), (( gdjs.warCode.GDsubmarineObjects1.length === 0 ) ? 0 :gdjs.warCode.GDsubmarineObjects1[0].getCenterYInScene()), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "e393c16c53a05345c011b67bcccd5ad6db8d61b5735a417f24a79d25e561bc73_Explosion 8.aac", false, 100, 1);
}{for(var i = 0, len = gdjs.warCode.GDNairanTorpedoObjects1.length ;i < len;++i) {
    gdjs.warCode.GDNairanTorpedoObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.warCode.GDsubmarineObjects1.length ;i < len;++i) {
    gdjs.warCode.GDsubmarineObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.warCode.eventsList18(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NairanTorpedo"), gdjs.warCode.GDNairanTorpedoObjects1);
gdjs.copyArray(runtimeScene.getObjects("battle_ship"), gdjs.warCode.GDbattle_9595shipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDNairanTorpedoObjects1Objects, gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDbattle_95959595shipObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10828060);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.warCode.GDNairanTorpedoObjects1 */
/* Reuse gdjs.warCode.GDbattle_9595shipObjects1 */
gdjs.warCode.GDExplosion1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDExplosion1Objects1Objects, (( gdjs.warCode.GDbattle_9595shipObjects1.length === 0 ) ? 0 :gdjs.warCode.GDbattle_9595shipObjects1[0].getCenterXInScene()), (( gdjs.warCode.GDbattle_9595shipObjects1.length === 0 ) ? 0 :gdjs.warCode.GDbattle_9595shipObjects1[0].getCenterYInScene()), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "e393c16c53a05345c011b67bcccd5ad6db8d61b5735a417f24a79d25e561bc73_Explosion 8.aac", false, 100, 1);
}{for(var i = 0, len = gdjs.warCode.GDNairanTorpedoObjects1.length ;i < len;++i) {
    gdjs.warCode.GDNairanTorpedoObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.warCode.GDbattle_9595shipObjects1.length ;i < len;++i) {
    gdjs.warCode.GDbattle_9595shipObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.warCode.eventsList20(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "S90B") >= 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("t"), gdjs.warCode.GDtObjects1);
gdjs.warCode.GDS3Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.warCode.mapOfGDgdjs_9546warCode_9546GDS3Objects1Objects, (( gdjs.warCode.GDtObjects1.length === 0 ) ? 0 :gdjs.warCode.GDtObjects1[0].getCenterXInScene()), (( gdjs.warCode.GDtObjects1.length === 0 ) ? 0 :gdjs.warCode.GDtObjects1[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.warCode.GDS3Objects1.length ;i < len;++i) {
    gdjs.warCode.GDS3Objects1[i].getBehavior("Scale").setScale(0.3);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "S90B");
}}

}


};

gdjs.warCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.warCode.GDNewSpriteObjects1.length = 0;
gdjs.warCode.GDNewSpriteObjects2.length = 0;
gdjs.warCode.GDNewSpriteObjects3.length = 0;
gdjs.warCode.GDNewSprite2Objects1.length = 0;
gdjs.warCode.GDNewSprite2Objects2.length = 0;
gdjs.warCode.GDNewSprite2Objects3.length = 0;
gdjs.warCode.GDB2Objects1.length = 0;
gdjs.warCode.GDB2Objects2.length = 0;
gdjs.warCode.GDB2Objects3.length = 0;
gdjs.warCode.GDS3Objects1.length = 0;
gdjs.warCode.GDS3Objects2.length = 0;
gdjs.warCode.GDS3Objects3.length = 0;
gdjs.warCode.GDbattle_9595shipObjects1.length = 0;
gdjs.warCode.GDbattle_9595shipObjects2.length = 0;
gdjs.warCode.GDbattle_9595shipObjects3.length = 0;
gdjs.warCode.GDbpObjects1.length = 0;
gdjs.warCode.GDbpObjects2.length = 0;
gdjs.warCode.GDbpObjects3.length = 0;
gdjs.warCode.GDspObjects1.length = 0;
gdjs.warCode.GDspObjects2.length = 0;
gdjs.warCode.GDspObjects3.length = 0;
gdjs.warCode.GDsubmarineObjects1.length = 0;
gdjs.warCode.GDsubmarineObjects2.length = 0;
gdjs.warCode.GDsubmarineObjects3.length = 0;
gdjs.warCode.GDBulletObjects1.length = 0;
gdjs.warCode.GDBulletObjects2.length = 0;
gdjs.warCode.GDBulletObjects3.length = 0;
gdjs.warCode.GDBullet2Objects1.length = 0;
gdjs.warCode.GDBullet2Objects2.length = 0;
gdjs.warCode.GDBullet2Objects3.length = 0;
gdjs.warCode.GDKlaedTorpedoObjects1.length = 0;
gdjs.warCode.GDKlaedTorpedoObjects2.length = 0;
gdjs.warCode.GDKlaedTorpedoObjects3.length = 0;
gdjs.warCode.GDNairanTorpedoObjects1.length = 0;
gdjs.warCode.GDNairanTorpedoObjects2.length = 0;
gdjs.warCode.GDNairanTorpedoObjects3.length = 0;
gdjs.warCode.GDDroppedBombObjects1.length = 0;
gdjs.warCode.GDDroppedBombObjects2.length = 0;
gdjs.warCode.GDDroppedBombObjects3.length = 0;
gdjs.warCode.GDInventorySlotEmpty2Objects1.length = 0;
gdjs.warCode.GDInventorySlotEmpty2Objects2.length = 0;
gdjs.warCode.GDInventorySlotEmpty2Objects3.length = 0;
gdjs.warCode.GDbombkeyObjects1.length = 0;
gdjs.warCode.GDbombkeyObjects2.length = 0;
gdjs.warCode.GDbombkeyObjects3.length = 0;
gdjs.warCode.GDbulletkeyObjects1.length = 0;
gdjs.warCode.GDbulletkeyObjects2.length = 0;
gdjs.warCode.GDbulletkeyObjects3.length = 0;
gdjs.warCode.GDtorpedokeyObjects1.length = 0;
gdjs.warCode.GDtorpedokeyObjects2.length = 0;
gdjs.warCode.GDtorpedokeyObjects3.length = 0;
gdjs.warCode.GDseasurfaceObjects1.length = 0;
gdjs.warCode.GDseasurfaceObjects2.length = 0;
gdjs.warCode.GDseasurfaceObjects3.length = 0;
gdjs.warCode.GDwallObjects1.length = 0;
gdjs.warCode.GDwallObjects2.length = 0;
gdjs.warCode.GDwallObjects3.length = 0;
gdjs.warCode.GDExplosionObjects1.length = 0;
gdjs.warCode.GDExplosionObjects2.length = 0;
gdjs.warCode.GDExplosionObjects3.length = 0;
gdjs.warCode.GDPixelHeartBarObjects1.length = 0;
gdjs.warCode.GDPixelHeartBarObjects2.length = 0;
gdjs.warCode.GDPixelHeartBarObjects3.length = 0;
gdjs.warCode.GDMetalRedBarObjects1.length = 0;
gdjs.warCode.GDMetalRedBarObjects2.length = 0;
gdjs.warCode.GDMetalRedBarObjects3.length = 0;
gdjs.warCode.GDExplosion1Objects1.length = 0;
gdjs.warCode.GDExplosion1Objects2.length = 0;
gdjs.warCode.GDExplosion1Objects3.length = 0;
gdjs.warCode.GDRedFlatBarObjects1.length = 0;
gdjs.warCode.GDRedFlatBarObjects2.length = 0;
gdjs.warCode.GDRedFlatBarObjects3.length = 0;
gdjs.warCode.GDewspObjects1.length = 0;
gdjs.warCode.GDewspObjects2.length = 0;
gdjs.warCode.GDewspObjects3.length = 0;
gdjs.warCode.GDssspppObjects1.length = 0;
gdjs.warCode.GDssspppObjects2.length = 0;
gdjs.warCode.GDssspppObjects3.length = 0;
gdjs.warCode.GDtObjects1.length = 0;
gdjs.warCode.GDtObjects2.length = 0;
gdjs.warCode.GDtObjects3.length = 0;

gdjs.warCode.eventsList21(runtimeScene);
gdjs.warCode.GDNewSpriteObjects1.length = 0;
gdjs.warCode.GDNewSpriteObjects2.length = 0;
gdjs.warCode.GDNewSpriteObjects3.length = 0;
gdjs.warCode.GDNewSprite2Objects1.length = 0;
gdjs.warCode.GDNewSprite2Objects2.length = 0;
gdjs.warCode.GDNewSprite2Objects3.length = 0;
gdjs.warCode.GDB2Objects1.length = 0;
gdjs.warCode.GDB2Objects2.length = 0;
gdjs.warCode.GDB2Objects3.length = 0;
gdjs.warCode.GDS3Objects1.length = 0;
gdjs.warCode.GDS3Objects2.length = 0;
gdjs.warCode.GDS3Objects3.length = 0;
gdjs.warCode.GDbattle_9595shipObjects1.length = 0;
gdjs.warCode.GDbattle_9595shipObjects2.length = 0;
gdjs.warCode.GDbattle_9595shipObjects3.length = 0;
gdjs.warCode.GDbpObjects1.length = 0;
gdjs.warCode.GDbpObjects2.length = 0;
gdjs.warCode.GDbpObjects3.length = 0;
gdjs.warCode.GDspObjects1.length = 0;
gdjs.warCode.GDspObjects2.length = 0;
gdjs.warCode.GDspObjects3.length = 0;
gdjs.warCode.GDsubmarineObjects1.length = 0;
gdjs.warCode.GDsubmarineObjects2.length = 0;
gdjs.warCode.GDsubmarineObjects3.length = 0;
gdjs.warCode.GDBulletObjects1.length = 0;
gdjs.warCode.GDBulletObjects2.length = 0;
gdjs.warCode.GDBulletObjects3.length = 0;
gdjs.warCode.GDBullet2Objects1.length = 0;
gdjs.warCode.GDBullet2Objects2.length = 0;
gdjs.warCode.GDBullet2Objects3.length = 0;
gdjs.warCode.GDKlaedTorpedoObjects1.length = 0;
gdjs.warCode.GDKlaedTorpedoObjects2.length = 0;
gdjs.warCode.GDKlaedTorpedoObjects3.length = 0;
gdjs.warCode.GDNairanTorpedoObjects1.length = 0;
gdjs.warCode.GDNairanTorpedoObjects2.length = 0;
gdjs.warCode.GDNairanTorpedoObjects3.length = 0;
gdjs.warCode.GDDroppedBombObjects1.length = 0;
gdjs.warCode.GDDroppedBombObjects2.length = 0;
gdjs.warCode.GDDroppedBombObjects3.length = 0;
gdjs.warCode.GDInventorySlotEmpty2Objects1.length = 0;
gdjs.warCode.GDInventorySlotEmpty2Objects2.length = 0;
gdjs.warCode.GDInventorySlotEmpty2Objects3.length = 0;
gdjs.warCode.GDbombkeyObjects1.length = 0;
gdjs.warCode.GDbombkeyObjects2.length = 0;
gdjs.warCode.GDbombkeyObjects3.length = 0;
gdjs.warCode.GDbulletkeyObjects1.length = 0;
gdjs.warCode.GDbulletkeyObjects2.length = 0;
gdjs.warCode.GDbulletkeyObjects3.length = 0;
gdjs.warCode.GDtorpedokeyObjects1.length = 0;
gdjs.warCode.GDtorpedokeyObjects2.length = 0;
gdjs.warCode.GDtorpedokeyObjects3.length = 0;
gdjs.warCode.GDseasurfaceObjects1.length = 0;
gdjs.warCode.GDseasurfaceObjects2.length = 0;
gdjs.warCode.GDseasurfaceObjects3.length = 0;
gdjs.warCode.GDwallObjects1.length = 0;
gdjs.warCode.GDwallObjects2.length = 0;
gdjs.warCode.GDwallObjects3.length = 0;
gdjs.warCode.GDExplosionObjects1.length = 0;
gdjs.warCode.GDExplosionObjects2.length = 0;
gdjs.warCode.GDExplosionObjects3.length = 0;
gdjs.warCode.GDPixelHeartBarObjects1.length = 0;
gdjs.warCode.GDPixelHeartBarObjects2.length = 0;
gdjs.warCode.GDPixelHeartBarObjects3.length = 0;
gdjs.warCode.GDMetalRedBarObjects1.length = 0;
gdjs.warCode.GDMetalRedBarObjects2.length = 0;
gdjs.warCode.GDMetalRedBarObjects3.length = 0;
gdjs.warCode.GDExplosion1Objects1.length = 0;
gdjs.warCode.GDExplosion1Objects2.length = 0;
gdjs.warCode.GDExplosion1Objects3.length = 0;
gdjs.warCode.GDRedFlatBarObjects1.length = 0;
gdjs.warCode.GDRedFlatBarObjects2.length = 0;
gdjs.warCode.GDRedFlatBarObjects3.length = 0;
gdjs.warCode.GDewspObjects1.length = 0;
gdjs.warCode.GDewspObjects2.length = 0;
gdjs.warCode.GDewspObjects3.length = 0;
gdjs.warCode.GDssspppObjects1.length = 0;
gdjs.warCode.GDssspppObjects2.length = 0;
gdjs.warCode.GDssspppObjects3.length = 0;
gdjs.warCode.GDtObjects1.length = 0;
gdjs.warCode.GDtObjects2.length = 0;
gdjs.warCode.GDtObjects3.length = 0;


return;

}

gdjs['warCode'] = gdjs.warCode;
