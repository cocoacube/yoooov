gdjs.getrockCode = {};
gdjs.getrockCode.localVariables = [];
gdjs.getrockCode.GDplatformObjects1= [];
gdjs.getrockCode.GDplatformObjects2= [];
gdjs.getrockCode.GDbackgroundObjects1= [];
gdjs.getrockCode.GDbackgroundObjects2= [];
gdjs.getrockCode.GDMerchantObjects1= [];
gdjs.getrockCode.GDMerchantObjects2= [];
gdjs.getrockCode.GDwallObjects1= [];
gdjs.getrockCode.GDwallObjects2= [];
gdjs.getrockCode.GDrockObjects1= [];
gdjs.getrockCode.GDrockObjects2= [];
gdjs.getrockCode.GDGloppySlimeObjects1= [];
gdjs.getrockCode.GDGloppySlimeObjects2= [];


gdjs.getrockCode.mapOfGDgdjs_9546getrockCode_9546GDGloppySlimeObjects1Objects = Hashtable.newFrom({"GloppySlime": gdjs.getrockCode.GDGloppySlimeObjects1});
gdjs.getrockCode.mapOfGDgdjs_9546getrockCode_9546GDMerchantObjects1Objects = Hashtable.newFrom({"Merchant": gdjs.getrockCode.GDMerchantObjects1});
gdjs.getrockCode.mapOfGDgdjs_9546getrockCode_9546GDrockObjects1Objects = Hashtable.newFrom({"rock": gdjs.getrockCode.GDrockObjects1});
gdjs.getrockCode.mapOfGDgdjs_9546getrockCode_9546GDMerchantObjects1Objects = Hashtable.newFrom({"Merchant": gdjs.getrockCode.GDMerchantObjects1});
gdjs.getrockCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("wall"), gdjs.getrockCode.GDwallObjects1);
{for(var i = 0, len = gdjs.getrockCode.GDwallObjects1.length ;i < len;++i) {
    gdjs.getrockCode.GDwallObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "7e19658c96bedc924262cdc5ba7e26b71424f19593b4906dbbd3f403b11444c6_The Range.aac", true, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GloppySlime"), gdjs.getrockCode.GDGloppySlimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.getrockCode.GDMerchantObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.getrockCode.mapOfGDgdjs_9546getrockCode_9546GDGloppySlimeObjects1Objects, gdjs.getrockCode.mapOfGDgdjs_9546getrockCode_9546GDMerchantObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.getrockCode.GDMerchantObjects1 */
{for(var i = 0, len = gdjs.getrockCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.getrockCode.GDMerchantObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.getrockCode.GDMerchantObjects1);
gdjs.copyArray(runtimeScene.getObjects("rock"), gdjs.getrockCode.GDrockObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.getrockCode.mapOfGDgdjs_9546getrockCode_9546GDrockObjects1Objects, gdjs.getrockCode.mapOfGDgdjs_9546getrockCode_9546GDMerchantObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).getChild(1).setBoolean(true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.getrockCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.getrockCode.GDplatformObjects1.length = 0;
gdjs.getrockCode.GDplatformObjects2.length = 0;
gdjs.getrockCode.GDbackgroundObjects1.length = 0;
gdjs.getrockCode.GDbackgroundObjects2.length = 0;
gdjs.getrockCode.GDMerchantObjects1.length = 0;
gdjs.getrockCode.GDMerchantObjects2.length = 0;
gdjs.getrockCode.GDwallObjects1.length = 0;
gdjs.getrockCode.GDwallObjects2.length = 0;
gdjs.getrockCode.GDrockObjects1.length = 0;
gdjs.getrockCode.GDrockObjects2.length = 0;
gdjs.getrockCode.GDGloppySlimeObjects1.length = 0;
gdjs.getrockCode.GDGloppySlimeObjects2.length = 0;

gdjs.getrockCode.eventsList0(runtimeScene);
gdjs.getrockCode.GDplatformObjects1.length = 0;
gdjs.getrockCode.GDplatformObjects2.length = 0;
gdjs.getrockCode.GDbackgroundObjects1.length = 0;
gdjs.getrockCode.GDbackgroundObjects2.length = 0;
gdjs.getrockCode.GDMerchantObjects1.length = 0;
gdjs.getrockCode.GDMerchantObjects2.length = 0;
gdjs.getrockCode.GDwallObjects1.length = 0;
gdjs.getrockCode.GDwallObjects2.length = 0;
gdjs.getrockCode.GDrockObjects1.length = 0;
gdjs.getrockCode.GDrockObjects2.length = 0;
gdjs.getrockCode.GDGloppySlimeObjects1.length = 0;
gdjs.getrockCode.GDGloppySlimeObjects2.length = 0;


return;

}

gdjs['getrockCode'] = gdjs.getrockCode;
