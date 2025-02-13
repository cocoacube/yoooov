gdjs.human_32castleCode = {};
gdjs.human_32castleCode.localVariables = [];
gdjs.human_32castleCode.GDbackgroundObjects1= [];
gdjs.human_32castleCode.GDbackgroundObjects2= [];
gdjs.human_32castleCode.GDMerchantObjects1= [];
gdjs.human_32castleCode.GDMerchantObjects2= [];
gdjs.human_32castleCode.GDwallObjects1= [];
gdjs.human_32castleCode.GDwallObjects2= [];
gdjs.human_32castleCode.GDtreeObjects1= [];
gdjs.human_32castleCode.GDtreeObjects2= [];
gdjs.human_32castleCode.GDtowerObjects1= [];
gdjs.human_32castleCode.GDtowerObjects2= [];
gdjs.human_32castleCode.GDskywindowObjects1= [];
gdjs.human_32castleCode.GDskywindowObjects2= [];
gdjs.human_32castleCode.GDdoorObjects1= [];
gdjs.human_32castleCode.GDdoorObjects2= [];
gdjs.human_32castleCode.GDRedButtonWithGoldFrameObjects1= [];
gdjs.human_32castleCode.GDRedButtonWithGoldFrameObjects2= [];


gdjs.human_32castleCode.mapOfGDgdjs_9546human_959532castleCode_9546GDwallObjects1Objects = Hashtable.newFrom({"wall": gdjs.human_32castleCode.GDwallObjects1});
gdjs.human_32castleCode.mapOfGDgdjs_9546human_959532castleCode_9546GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.human_32castleCode.GDdoorObjects1});
gdjs.human_32castleCode.mapOfGDgdjs_9546human_959532castleCode_9546GDMerchantObjects1Objects = Hashtable.newFrom({"Merchant": gdjs.human_32castleCode.GDMerchantObjects1});
gdjs.human_32castleCode.mapOfGDgdjs_9546human_959532castleCode_9546GDskywindowObjects1Objects = Hashtable.newFrom({"skywindow": gdjs.human_32castleCode.GDskywindowObjects1});
gdjs.human_32castleCode.mapOfGDgdjs_9546human_959532castleCode_9546GDMerchantObjects1Objects = Hashtable.newFrom({"Merchant": gdjs.human_32castleCode.GDMerchantObjects1});
gdjs.human_32castleCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.human_32castleCode.GDMerchantObjects1);
{for(var i = 0, len = gdjs.human_32castleCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.human_32castleCode.GDMerchantObjects1[i].getBehavior("Animation").setAnimationIndex(6);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.human_32castleCode.GDMerchantObjects1);
{for(var i = 0, len = gdjs.human_32castleCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.human_32castleCode.GDMerchantObjects1[i].getBehavior("Animation").setAnimationIndex(5);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.human_32castleCode.GDMerchantObjects1);
{for(var i = 0, len = gdjs.human_32castleCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.human_32castleCode.GDMerchantObjects1[i].getBehavior("Animation").setAnimationIndex(7);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.human_32castleCode.GDMerchantObjects1);
{for(var i = 0, len = gdjs.human_32castleCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.human_32castleCode.GDMerchantObjects1[i].getBehavior("Animation").setAnimationIndex(4);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.human_32castleCode.GDMerchantObjects1);
gdjs.copyArray(runtimeScene.getObjects("wall"), gdjs.human_32castleCode.GDwallObjects1);
{for(var i = 0, len = gdjs.human_32castleCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.human_32castleCode.GDMerchantObjects1[i].separateFromObjectsList(gdjs.human_32castleCode.mapOfGDgdjs_9546human_959532castleCode_9546GDwallObjects1Objects, true);
}
}{for(var i = 0, len = gdjs.human_32castleCode.GDwallObjects1.length ;i < len;++i) {
    gdjs.human_32castleCode.GDwallObjects1[i].hide();
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.human_32castleCode.GDMerchantObjects1.length !== 0 ? gdjs.human_32castleCode.GDMerchantObjects1[0] : null), true, "background", 0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("door"), gdjs.human_32castleCode.GDdoorObjects1);
{for(var i = 0, len = gdjs.human_32castleCode.GDdoorObjects1.length ;i < len;++i) {
    gdjs.human_32castleCode.GDdoorObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.human_32castleCode.GDMerchantObjects1);
gdjs.copyArray(runtimeScene.getObjects("door"), gdjs.human_32castleCode.GDdoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.human_32castleCode.mapOfGDgdjs_9546human_959532castleCode_9546GDdoorObjects1Objects, gdjs.human_32castleCode.mapOfGDgdjs_9546human_959532castleCode_9546GDMerchantObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.human_32castleCode.GDMerchantObjects1 */
gdjs.copyArray(runtimeScene.getObjects("skywindow"), gdjs.human_32castleCode.GDskywindowObjects1);
{for(var i = 0, len = gdjs.human_32castleCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.human_32castleCode.GDMerchantObjects1[i].setPosition((( gdjs.human_32castleCode.GDskywindowObjects1.length === 0 ) ? 0 :gdjs.human_32castleCode.GDskywindowObjects1[0].getPointX("showPoint")),(( gdjs.human_32castleCode.GDskywindowObjects1.length === 0 ) ? 0 :gdjs.human_32castleCode.GDskywindowObjects1[0].getPointY("showPoint")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Merchant"), gdjs.human_32castleCode.GDMerchantObjects1);
gdjs.copyArray(runtimeScene.getObjects("skywindow"), gdjs.human_32castleCode.GDskywindowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.human_32castleCode.mapOfGDgdjs_9546human_959532castleCode_9546GDskywindowObjects1Objects, gdjs.human_32castleCode.mapOfGDgdjs_9546human_959532castleCode_9546GDMerchantObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}
if (isConditionTrue_0) {
/* Reuse gdjs.human_32castleCode.GDMerchantObjects1 */
gdjs.copyArray(runtimeScene.getObjects("door"), gdjs.human_32castleCode.GDdoorObjects1);
{for(var i = 0, len = gdjs.human_32castleCode.GDMerchantObjects1.length ;i < len;++i) {
    gdjs.human_32castleCode.GDMerchantObjects1[i].setPosition((( gdjs.human_32castleCode.GDdoorObjects1.length === 0 ) ? 0 :gdjs.human_32castleCode.GDdoorObjects1[0].getPointX("")) + 50,(( gdjs.human_32castleCode.GDdoorObjects1.length === 0 ) ? 0 :gdjs.human_32castleCode.GDdoorObjects1[0].getPointY("")) + 100);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithGoldFrame"), gdjs.human_32castleCode.GDRedButtonWithGoldFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.human_32castleCode.GDRedButtonWithGoldFrameObjects1.length;i<l;++i) {
    if ( gdjs.human_32castleCode.GDRedButtonWithGoldFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.human_32castleCode.GDRedButtonWithGoldFrameObjects1[k] = gdjs.human_32castleCode.GDRedButtonWithGoldFrameObjects1[i];
        ++k;
    }
}
gdjs.human_32castleCode.GDRedButtonWithGoldFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", false);
}}

}


};

gdjs.human_32castleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.human_32castleCode.GDbackgroundObjects1.length = 0;
gdjs.human_32castleCode.GDbackgroundObjects2.length = 0;
gdjs.human_32castleCode.GDMerchantObjects1.length = 0;
gdjs.human_32castleCode.GDMerchantObjects2.length = 0;
gdjs.human_32castleCode.GDwallObjects1.length = 0;
gdjs.human_32castleCode.GDwallObjects2.length = 0;
gdjs.human_32castleCode.GDtreeObjects1.length = 0;
gdjs.human_32castleCode.GDtreeObjects2.length = 0;
gdjs.human_32castleCode.GDtowerObjects1.length = 0;
gdjs.human_32castleCode.GDtowerObjects2.length = 0;
gdjs.human_32castleCode.GDskywindowObjects1.length = 0;
gdjs.human_32castleCode.GDskywindowObjects2.length = 0;
gdjs.human_32castleCode.GDdoorObjects1.length = 0;
gdjs.human_32castleCode.GDdoorObjects2.length = 0;
gdjs.human_32castleCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.human_32castleCode.GDRedButtonWithGoldFrameObjects2.length = 0;

gdjs.human_32castleCode.eventsList0(runtimeScene);
gdjs.human_32castleCode.GDbackgroundObjects1.length = 0;
gdjs.human_32castleCode.GDbackgroundObjects2.length = 0;
gdjs.human_32castleCode.GDMerchantObjects1.length = 0;
gdjs.human_32castleCode.GDMerchantObjects2.length = 0;
gdjs.human_32castleCode.GDwallObjects1.length = 0;
gdjs.human_32castleCode.GDwallObjects2.length = 0;
gdjs.human_32castleCode.GDtreeObjects1.length = 0;
gdjs.human_32castleCode.GDtreeObjects2.length = 0;
gdjs.human_32castleCode.GDtowerObjects1.length = 0;
gdjs.human_32castleCode.GDtowerObjects2.length = 0;
gdjs.human_32castleCode.GDskywindowObjects1.length = 0;
gdjs.human_32castleCode.GDskywindowObjects2.length = 0;
gdjs.human_32castleCode.GDdoorObjects1.length = 0;
gdjs.human_32castleCode.GDdoorObjects2.length = 0;
gdjs.human_32castleCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.human_32castleCode.GDRedButtonWithGoldFrameObjects2.length = 0;


return;

}

gdjs['human_32castleCode'] = gdjs.human_32castleCode;
