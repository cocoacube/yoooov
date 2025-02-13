gdjs.trainCode = {};
gdjs.trainCode.localVariables = [];
gdjs.trainCode.GDMerchantObjects1= [];
gdjs.trainCode.GDMerchantObjects2= [];
gdjs.trainCode.GDbackgroundObjects1= [];
gdjs.trainCode.GDbackgroundObjects2= [];
gdjs.trainCode.GDdoorObjects1= [];
gdjs.trainCode.GDdoorObjects2= [];
gdjs.trainCode.GDNewTextObjects1= [];
gdjs.trainCode.GDNewTextObjects2= [];
gdjs.trainCode.GDBattleAxeObjects1= [];
gdjs.trainCode.GDBattleAxeObjects2= [];
gdjs.trainCode.GDwallObjects1= [];
gdjs.trainCode.GDwallObjects2= [];


gdjs.trainCode.mapOfGDgdjs_9546trainCode_9546GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.trainCode.GDdoorObjects1});
gdjs.trainCode.mapOfGDgdjs_9546trainCode_9546GDMerchantObjects1Objects = Hashtable.newFrom({"Merchant": gdjs.trainCode.GDMerchantObjects1});
gdjs.trainCode.mapOfGDgdjs_9546trainCode_9546GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.trainCode.GDdoorObjects1});
gdjs.trainCode.mapOfGDgdjs_9546trainCode_9546GDwallObjects1Objects = Hashtable.newFrom({"wall": gdjs.trainCode.GDwallObjects1});
gdjs.trainCode.mapOfGDgdjs_9546trainCode_9546GDMerchantObjects1Objects = Hashtable.newFrom({"Merchant": gdjs.trainCode.GDMerchantObjects1});
gdjs.trainCode.mapOfGDgdjs_9546trainCode_9546GDwallObjects1Objects = Hashtable.newFrom({"wall": gdjs.trainCode.GDwallObjects1});
gdjs.trainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.trainCode.GDMerchantObjects1);
{for(var i = 0, len = gdjs.trainCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.trainCode.GDMerchantObjects1[i].getBehavior("TopDownMovement").simulateUpKey();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.trainCode.GDMerchantObjects1);
{for(var i = 0, len = gdjs.trainCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.trainCode.GDMerchantObjects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.trainCode.GDMerchantObjects1);
{for(var i = 0, len = gdjs.trainCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.trainCode.GDMerchantObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.trainCode.GDMerchantObjects1);
{for(var i = 0, len = gdjs.trainCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.trainCode.GDMerchantObjects1[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.trainCode.GDMerchantObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.trainCode.GDMerchantObjects1.length !== 0 ? gdjs.trainCode.GDMerchantObjects1[0] : null), true, "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = runtimeScene.getScene().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.trainCode.GDdoorObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.trainCode.mapOfGDgdjs_9546trainCode_9546GDdoorObjects1Objects, 100, 100, "Background");
}{for(var i = 0, len = gdjs.trainCode.GDdoorObjects1.length ;i < len;++i) {
    gdjs.trainCode.GDdoorObjects1[i].getBehavior("Scale").setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.trainCode.GDMerchantObjects1);
gdjs.copyArray(runtimeScene.getObjects("door"), gdjs.trainCode.GDdoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.trainCode.mapOfGDgdjs_9546trainCode_9546GDMerchantObjects1Objects, gdjs.trainCode.mapOfGDgdjs_9546trainCode_9546GDdoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BattleAxe"), gdjs.trainCode.GDBattleAxeObjects1);
{for(var i = 0, len = gdjs.trainCode.GDBattleAxeObjects1.length ;i < len;++i) {
    gdjs.trainCode.GDBattleAxeObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BattleAxe"), gdjs.trainCode.GDBattleAxeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.trainCode.GDMerchantObjects1);
{for(var i = 0, len = gdjs.trainCode.GDBattleAxeObjects1.length ;i < len;++i) {
    gdjs.trainCode.GDBattleAxeObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.trainCode.GDBattleAxeObjects1.length ;i < len;++i) {
    gdjs.trainCode.GDBattleAxeObjects1[i].rotate(360, runtimeScene);
}
}{for(var i = 0, len = gdjs.trainCode.GDBattleAxeObjects1.length ;i < len;++i) {
    gdjs.trainCode.GDBattleAxeObjects1[i].setPosition((( gdjs.trainCode.GDMerchantObjects1.length === 0 ) ? 0 :gdjs.trainCode.GDMerchantObjects1[0].getCenterXInScene()),(( gdjs.trainCode.GDMerchantObjects1.length === 0 ) ? 0 :gdjs.trainCode.GDMerchantObjects1[0].getCenterYInScene()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BattleAxe"), gdjs.trainCode.GDBattleAxeObjects1);
{for(var i = 0, len = gdjs.trainCode.GDBattleAxeObjects1.length ;i < len;++i) {
    gdjs.trainCode.GDBattleAxeObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("wall"), gdjs.trainCode.GDwallObjects1);
{gdjs.evtTools.camera.clampCamera(runtimeScene, -(610), -(540), 1894, 767, "", 0);
}{for(var i = 0, len = gdjs.trainCode.GDwallObjects1.length ;i < len;++i) {
    gdjs.trainCode.GDwallObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.trainCode.GDMerchantObjects1);
gdjs.copyArray(runtimeScene.getObjects("wall"), gdjs.trainCode.GDwallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.trainCode.mapOfGDgdjs_9546trainCode_9546GDwallObjects1Objects, gdjs.trainCode.mapOfGDgdjs_9546trainCode_9546GDMerchantObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.trainCode.GDMerchantObjects1 */
/* Reuse gdjs.trainCode.GDwallObjects1 */
{for(var i = 0, len = gdjs.trainCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.trainCode.GDMerchantObjects1[i].separateFromObjectsList(gdjs.trainCode.mapOfGDgdjs_9546trainCode_9546GDwallObjects1Objects, false);
}
}}

}


};

gdjs.trainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.trainCode.GDMerchantObjects1.length = 0;
gdjs.trainCode.GDMerchantObjects2.length = 0;
gdjs.trainCode.GDbackgroundObjects1.length = 0;
gdjs.trainCode.GDbackgroundObjects2.length = 0;
gdjs.trainCode.GDdoorObjects1.length = 0;
gdjs.trainCode.GDdoorObjects2.length = 0;
gdjs.trainCode.GDNewTextObjects1.length = 0;
gdjs.trainCode.GDNewTextObjects2.length = 0;
gdjs.trainCode.GDBattleAxeObjects1.length = 0;
gdjs.trainCode.GDBattleAxeObjects2.length = 0;
gdjs.trainCode.GDwallObjects1.length = 0;
gdjs.trainCode.GDwallObjects2.length = 0;

gdjs.trainCode.eventsList0(runtimeScene);
gdjs.trainCode.GDMerchantObjects1.length = 0;
gdjs.trainCode.GDMerchantObjects2.length = 0;
gdjs.trainCode.GDbackgroundObjects1.length = 0;
gdjs.trainCode.GDbackgroundObjects2.length = 0;
gdjs.trainCode.GDdoorObjects1.length = 0;
gdjs.trainCode.GDdoorObjects2.length = 0;
gdjs.trainCode.GDNewTextObjects1.length = 0;
gdjs.trainCode.GDNewTextObjects2.length = 0;
gdjs.trainCode.GDBattleAxeObjects1.length = 0;
gdjs.trainCode.GDBattleAxeObjects2.length = 0;
gdjs.trainCode.GDwallObjects1.length = 0;
gdjs.trainCode.GDwallObjects2.length = 0;


return;

}

gdjs['trainCode'] = gdjs.trainCode;
