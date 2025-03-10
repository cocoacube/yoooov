gdjs.levelupCode = {};
gdjs.levelupCode.localVariables = [];
gdjs.levelupCode.GDbackgroundObjects1= [];
gdjs.levelupCode.GDbackgroundObjects2= [];
gdjs.levelupCode.GDbackgroundObjects3= [];
gdjs.levelupCode.GDAlchemistObjects1= [];
gdjs.levelupCode.GDAlchemistObjects2= [];
gdjs.levelupCode.GDAlchemistObjects3= [];
gdjs.levelupCode.GDBluePotionObjects1= [];
gdjs.levelupCode.GDBluePotionObjects2= [];
gdjs.levelupCode.GDBluePotionObjects3= [];
gdjs.levelupCode.GDGreenPotionObjects1= [];
gdjs.levelupCode.GDGreenPotionObjects2= [];
gdjs.levelupCode.GDGreenPotionObjects3= [];
gdjs.levelupCode.GDRedPotionObjects1= [];
gdjs.levelupCode.GDRedPotionObjects2= [];
gdjs.levelupCode.GDRedPotionObjects3= [];
gdjs.levelupCode.GDfireballTObjects1= [];
gdjs.levelupCode.GDfireballTObjects2= [];
gdjs.levelupCode.GDfireballTObjects3= [];
gdjs.levelupCode.GDexplotionTObjects1= [];
gdjs.levelupCode.GDexplotionTObjects2= [];
gdjs.levelupCode.GDexplotionTObjects3= [];
gdjs.levelupCode.GDfirerotateTObjects1= [];
gdjs.levelupCode.GDfirerotateTObjects2= [];
gdjs.levelupCode.GDfirerotateTObjects3= [];
gdjs.levelupCode.GDlevelupTObjects1= [];
gdjs.levelupCode.GDlevelupTObjects2= [];
gdjs.levelupCode.GDlevelupTObjects3= [];
gdjs.levelupCode.GD_95955000Objects1= [];
gdjs.levelupCode.GD_95955000Objects2= [];
gdjs.levelupCode.GD_95955000Objects3= [];
gdjs.levelupCode.GD_95951000Objects1= [];
gdjs.levelupCode.GD_95951000Objects2= [];
gdjs.levelupCode.GD_95951000Objects3= [];
gdjs.levelupCode.GD_959510000Objects1= [];
gdjs.levelupCode.GD_959510000Objects2= [];
gdjs.levelupCode.GD_959510000Objects3= [];
gdjs.levelupCode.GDRedButtonWithMetalFrameObjects1= [];
gdjs.levelupCode.GDRedButtonWithMetalFrameObjects2= [];
gdjs.levelupCode.GDRedButtonWithMetalFrameObjects3= [];
gdjs.levelupCode.GDpurpleObjects1= [];
gdjs.levelupCode.GDpurpleObjects2= [];
gdjs.levelupCode.GDpurpleObjects3= [];
gdjs.levelupCode.GDgreenObjects1= [];
gdjs.levelupCode.GDgreenObjects2= [];
gdjs.levelupCode.GDgreenObjects3= [];
gdjs.levelupCode.GDBlueButtonObjects1= [];
gdjs.levelupCode.GDBlueButtonObjects2= [];
gdjs.levelupCode.GDBlueButtonObjects3= [];
gdjs.levelupCode.GDRedButtonObjects1= [];
gdjs.levelupCode.GDRedButtonObjects2= [];
gdjs.levelupCode.GDRedButtonObjects3= [];
gdjs.levelupCode.GDNewBBTextObjects1= [];
gdjs.levelupCode.GDNewBBTextObjects2= [];
gdjs.levelupCode.GDNewBBTextObjects3= [];
gdjs.levelupCode.GDNewBitmapTextObjects1= [];
gdjs.levelupCode.GDNewBitmapTextObjects2= [];
gdjs.levelupCode.GDNewBitmapTextObjects3= [];
gdjs.levelupCode.GDnotenoughmoneysignObjects1= [];
gdjs.levelupCode.GDnotenoughmoneysignObjects2= [];
gdjs.levelupCode.GDnotenoughmoneysignObjects3= [];
gdjs.levelupCode.GDStarSparksObjects1= [];
gdjs.levelupCode.GDStarSparksObjects2= [];
gdjs.levelupCode.GDStarSparksObjects3= [];


gdjs.levelupCode.mapOfGDgdjs_9546levelupCode_9546GDBluePotionObjects1Objects = Hashtable.newFrom({"BluePotion": gdjs.levelupCode.GDBluePotionObjects1});
gdjs.levelupCode.mapOfGDgdjs_9546levelupCode_9546GD_959595955000Objects1Objects = Hashtable.newFrom({"_5000": gdjs.levelupCode.GD_95955000Objects1});
gdjs.levelupCode.mapOfGDgdjs_9546levelupCode_9546GDGreenPotionObjects1Objects = Hashtable.newFrom({"GreenPotion": gdjs.levelupCode.GDGreenPotionObjects1});
gdjs.levelupCode.mapOfGDgdjs_9546levelupCode_9546GD_9595959510000Objects1Objects = Hashtable.newFrom({"_10000": gdjs.levelupCode.GD_959510000Objects1});
gdjs.levelupCode.mapOfGDgdjs_9546levelupCode_9546GDRedPotionObjects1Objects = Hashtable.newFrom({"RedPotion": gdjs.levelupCode.GDRedPotionObjects1});
gdjs.levelupCode.mapOfGDgdjs_9546levelupCode_9546GD_959595951000Objects1Objects = Hashtable.newFrom({"_1000": gdjs.levelupCode.GD_95951000Objects1});
gdjs.levelupCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 500);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).add(50);
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(500);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 1000);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(5);
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1000);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 500);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).add(2);
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(500);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI");
}}

}


};gdjs.levelupCode.mapOfGDgdjs_9546levelupCode_9546GDStarSparksObjects1Objects = Hashtable.newFrom({"StarSparks": gdjs.levelupCode.GDStarSparksObjects1});
gdjs.levelupCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithMetalFrame"), gdjs.levelupCode.GDRedButtonWithMetalFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelupCode.GDRedButtonWithMetalFrameObjects1.length;i<l;++i) {
    if ( gdjs.levelupCode.GDRedButtonWithMetalFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.levelupCode.GDRedButtonWithMetalFrameObjects1[k] = gdjs.levelupCode.GDRedButtonWithMetalFrameObjects1[i];
        ++k;
    }
}
gdjs.levelupCode.GDRedButtonWithMetalFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePotion"), gdjs.levelupCode.GDBluePotionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelupCode.GDBluePotionObjects1.length;i<l;++i) {
    if ( gdjs.levelupCode.GDBluePotionObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.levelupCode.GDBluePotionObjects1[k] = gdjs.levelupCode.GDBluePotionObjects1[i];
        ++k;
    }
}
gdjs.levelupCode.GDBluePotionObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("purple"), gdjs.levelupCode.GDpurpleObjects1);
/* Reuse gdjs.levelupCode.GDBluePotionObjects1 */
gdjs.levelupCode.GD_95955000Objects1.length = 0;

{gdjs.evtTools.camera.showLayer(runtimeScene, "UI");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelupCode.mapOfGDgdjs_9546levelupCode_9546GDBluePotionObjects1Objects, (( gdjs.levelupCode.GDpurpleObjects1.length === 0 ) ? 0 :gdjs.levelupCode.GDpurpleObjects1[0].getCenterXInScene()), (( gdjs.levelupCode.GDpurpleObjects1.length === 0 ) ? 0 :gdjs.levelupCode.GDpurpleObjects1[0].getCenterYInScene()), "UI");
}{for(var i = 0, len = gdjs.levelupCode.GDBluePotionObjects1.length ;i < len;++i) {
    gdjs.levelupCode.GDBluePotionObjects1[i].getBehavior("Scale").setScale(4);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelupCode.mapOfGDgdjs_9546levelupCode_9546GD_959595955000Objects1Objects, (( gdjs.levelupCode.GDpurpleObjects1.length === 0 ) ? 0 :gdjs.levelupCode.GDpurpleObjects1[0].getPointX("money")), (( gdjs.levelupCode.GDpurpleObjects1.length === 0 ) ? 0 :gdjs.levelupCode.GDpurpleObjects1[0].getPointY("money")), "UI");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenPotion"), gdjs.levelupCode.GDGreenPotionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelupCode.GDGreenPotionObjects1.length;i<l;++i) {
    if ( gdjs.levelupCode.GDGreenPotionObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.levelupCode.GDGreenPotionObjects1[k] = gdjs.levelupCode.GDGreenPotionObjects1[i];
        ++k;
    }
}
gdjs.levelupCode.GDGreenPotionObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("purple"), gdjs.levelupCode.GDpurpleObjects1);
/* Reuse gdjs.levelupCode.GDGreenPotionObjects1 */
gdjs.levelupCode.GD_959510000Objects1.length = 0;

{gdjs.evtTools.camera.showLayer(runtimeScene, "UI");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelupCode.mapOfGDgdjs_9546levelupCode_9546GDGreenPotionObjects1Objects, (( gdjs.levelupCode.GDpurpleObjects1.length === 0 ) ? 0 :gdjs.levelupCode.GDpurpleObjects1[0].getCenterXInScene()), (( gdjs.levelupCode.GDpurpleObjects1.length === 0 ) ? 0 :gdjs.levelupCode.GDpurpleObjects1[0].getCenterYInScene()), "UI");
}{for(var i = 0, len = gdjs.levelupCode.GDGreenPotionObjects1.length ;i < len;++i) {
    gdjs.levelupCode.GDGreenPotionObjects1[i].getBehavior("Scale").setScale(4);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelupCode.mapOfGDgdjs_9546levelupCode_9546GD_9595959510000Objects1Objects, (( gdjs.levelupCode.GDpurpleObjects1.length === 0 ) ? 0 :gdjs.levelupCode.GDpurpleObjects1[0].getPointX("money")), (( gdjs.levelupCode.GDpurpleObjects1.length === 0 ) ? 0 :gdjs.levelupCode.GDpurpleObjects1[0].getPointY("money")), "UI");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedPotion"), gdjs.levelupCode.GDRedPotionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelupCode.GDRedPotionObjects1.length;i<l;++i) {
    if ( gdjs.levelupCode.GDRedPotionObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.levelupCode.GDRedPotionObjects1[k] = gdjs.levelupCode.GDRedPotionObjects1[i];
        ++k;
    }
}
gdjs.levelupCode.GDRedPotionObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("purple"), gdjs.levelupCode.GDpurpleObjects1);
/* Reuse gdjs.levelupCode.GDRedPotionObjects1 */
gdjs.levelupCode.GD_95951000Objects1.length = 0;

{gdjs.evtTools.camera.showLayer(runtimeScene, "UI");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelupCode.mapOfGDgdjs_9546levelupCode_9546GDRedPotionObjects1Objects, (( gdjs.levelupCode.GDpurpleObjects1.length === 0 ) ? 0 :gdjs.levelupCode.GDpurpleObjects1[0].getCenterXInScene()), (( gdjs.levelupCode.GDpurpleObjects1.length === 0 ) ? 0 :gdjs.levelupCode.GDpurpleObjects1[0].getCenterYInScene()), "UI");
}{for(var i = 0, len = gdjs.levelupCode.GDRedPotionObjects1.length ;i < len;++i) {
    gdjs.levelupCode.GDRedPotionObjects1[i].getBehavior("Scale").setScale(4);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelupCode.mapOfGDgdjs_9546levelupCode_9546GD_959595951000Objects1Objects, (( gdjs.levelupCode.GDpurpleObjects1.length === 0 ) ? 0 :gdjs.levelupCode.GDpurpleObjects1[0].getPointX("money")), (( gdjs.levelupCode.GDpurpleObjects1.length === 0 ) ? 0 :gdjs.levelupCode.GDpurpleObjects1[0].getPointY("money")), "UI");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("notenoughmoneysign"), gdjs.levelupCode.GDnotenoughmoneysignObjects1);
{for(var i = 0, len = gdjs.levelupCode.GDnotenoughmoneysignObjects1.length ;i < len;++i) {
    gdjs.levelupCode.GDnotenoughmoneysignObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.levelupCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelupCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.levelupCode.GDBlueButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.levelupCode.GDBlueButtonObjects1[k] = gdjs.levelupCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.levelupCode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26905956);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.levelupCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButton"), gdjs.levelupCode.GDRedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelupCode.GDRedButtonObjects1.length;i<l;++i) {
    if ( gdjs.levelupCode.GDRedButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.levelupCode.GDRedButtonObjects1[k] = gdjs.levelupCode.GDRedButtonObjects1[i];
        ++k;
    }
}
gdjs.levelupCode.GDRedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.levelupCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.levelupCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.levelupCode.GDBlueButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.levelupCode.GDBlueButtonObjects1[k] = gdjs.levelupCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.levelupCode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() < 500);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("notenoughmoneysign"), gdjs.levelupCode.GDnotenoughmoneysignObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NEMStimer");
}{for(var i = 0, len = gdjs.levelupCode.GDnotenoughmoneysignObjects1.length ;i < len;++i) {
    gdjs.levelupCode.GDnotenoughmoneysignObjects1[i].getBehavior("Scale").setScale(0.3);
}
}{for(var i = 0, len = gdjs.levelupCode.GDnotenoughmoneysignObjects1.length ;i < len;++i) {
    gdjs.levelupCode.GDnotenoughmoneysignObjects1[i].hide(false);
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.levelupCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.levelupCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.levelupCode.GDBlueButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.levelupCode.GDBlueButtonObjects1[k] = gdjs.levelupCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.levelupCode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() < 500);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("notenoughmoneysign"), gdjs.levelupCode.GDnotenoughmoneysignObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NEMStimer");
}{for(var i = 0, len = gdjs.levelupCode.GDnotenoughmoneysignObjects1.length ;i < len;++i) {
    gdjs.levelupCode.GDnotenoughmoneysignObjects1[i].getBehavior("Scale").setScale(0.3);
}
}{for(var i = 0, len = gdjs.levelupCode.GDnotenoughmoneysignObjects1.length ;i < len;++i) {
    gdjs.levelupCode.GDnotenoughmoneysignObjects1[i].hide(false);
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.levelupCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() < 500);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.levelupCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.levelupCode.GDBlueButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.levelupCode.GDBlueButtonObjects1[k] = gdjs.levelupCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.levelupCode.GDBlueButtonObjects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("notenoughmoneysign"), gdjs.levelupCode.GDnotenoughmoneysignObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NEMStimer");
}{for(var i = 0, len = gdjs.levelupCode.GDnotenoughmoneysignObjects1.length ;i < len;++i) {
    gdjs.levelupCode.GDnotenoughmoneysignObjects1[i].getBehavior("Scale").setScale(0.3);
}
}{for(var i = 0, len = gdjs.levelupCode.GDnotenoughmoneysignObjects1.length ;i < len;++i) {
    gdjs.levelupCode.GDnotenoughmoneysignObjects1[i].hide(false);
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "NEMStimer") >= 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.levelupCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("notenoughmoneysign"), gdjs.levelupCode.GDnotenoughmoneysignObjects1);
gdjs.levelupCode.GDStarSparksObjects1.length = 0;

{for(var i = 0, len = gdjs.levelupCode.GDnotenoughmoneysignObjects1.length ;i < len;++i) {
    gdjs.levelupCode.GDnotenoughmoneysignObjects1[i].hide();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelupCode.mapOfGDgdjs_9546levelupCode_9546GDStarSparksObjects1Objects, (( gdjs.levelupCode.GDbackgroundObjects1.length === 0 ) ? 0 :gdjs.levelupCode.GDbackgroundObjects1[0].getCenterXInScene()), (( gdjs.levelupCode.GDbackgroundObjects1.length === 0 ) ? 0 :gdjs.levelupCode.GDbackgroundObjects1[0].getCenterYInScene()), "Background");
}{for(var i = 0, len = gdjs.levelupCode.GDStarSparksObjects1.length ;i < len;++i) {
    gdjs.levelupCode.GDStarSparksObjects1[i].setParticleSize2(1000);
}
}{for(var i = 0, len = gdjs.levelupCode.GDStarSparksObjects1.length ;i < len;++i) {
    gdjs.levelupCode.GDStarSparksObjects1[i].setParticleLifeTimeMax(5);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "NEMStimer") >= 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StarSparks"), gdjs.levelupCode.GDStarSparksObjects1);
{for(var i = 0, len = gdjs.levelupCode.GDStarSparksObjects1.length ;i < len;++i) {
    gdjs.levelupCode.GDStarSparksObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.levelupCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.levelupCode.GDbackgroundObjects1.length = 0;
gdjs.levelupCode.GDbackgroundObjects2.length = 0;
gdjs.levelupCode.GDbackgroundObjects3.length = 0;
gdjs.levelupCode.GDAlchemistObjects1.length = 0;
gdjs.levelupCode.GDAlchemistObjects2.length = 0;
gdjs.levelupCode.GDAlchemistObjects3.length = 0;
gdjs.levelupCode.GDBluePotionObjects1.length = 0;
gdjs.levelupCode.GDBluePotionObjects2.length = 0;
gdjs.levelupCode.GDBluePotionObjects3.length = 0;
gdjs.levelupCode.GDGreenPotionObjects1.length = 0;
gdjs.levelupCode.GDGreenPotionObjects2.length = 0;
gdjs.levelupCode.GDGreenPotionObjects3.length = 0;
gdjs.levelupCode.GDRedPotionObjects1.length = 0;
gdjs.levelupCode.GDRedPotionObjects2.length = 0;
gdjs.levelupCode.GDRedPotionObjects3.length = 0;
gdjs.levelupCode.GDfireballTObjects1.length = 0;
gdjs.levelupCode.GDfireballTObjects2.length = 0;
gdjs.levelupCode.GDfireballTObjects3.length = 0;
gdjs.levelupCode.GDexplotionTObjects1.length = 0;
gdjs.levelupCode.GDexplotionTObjects2.length = 0;
gdjs.levelupCode.GDexplotionTObjects3.length = 0;
gdjs.levelupCode.GDfirerotateTObjects1.length = 0;
gdjs.levelupCode.GDfirerotateTObjects2.length = 0;
gdjs.levelupCode.GDfirerotateTObjects3.length = 0;
gdjs.levelupCode.GDlevelupTObjects1.length = 0;
gdjs.levelupCode.GDlevelupTObjects2.length = 0;
gdjs.levelupCode.GDlevelupTObjects3.length = 0;
gdjs.levelupCode.GD_95955000Objects1.length = 0;
gdjs.levelupCode.GD_95955000Objects2.length = 0;
gdjs.levelupCode.GD_95955000Objects3.length = 0;
gdjs.levelupCode.GD_95951000Objects1.length = 0;
gdjs.levelupCode.GD_95951000Objects2.length = 0;
gdjs.levelupCode.GD_95951000Objects3.length = 0;
gdjs.levelupCode.GD_959510000Objects1.length = 0;
gdjs.levelupCode.GD_959510000Objects2.length = 0;
gdjs.levelupCode.GD_959510000Objects3.length = 0;
gdjs.levelupCode.GDRedButtonWithMetalFrameObjects1.length = 0;
gdjs.levelupCode.GDRedButtonWithMetalFrameObjects2.length = 0;
gdjs.levelupCode.GDRedButtonWithMetalFrameObjects3.length = 0;
gdjs.levelupCode.GDpurpleObjects1.length = 0;
gdjs.levelupCode.GDpurpleObjects2.length = 0;
gdjs.levelupCode.GDpurpleObjects3.length = 0;
gdjs.levelupCode.GDgreenObjects1.length = 0;
gdjs.levelupCode.GDgreenObjects2.length = 0;
gdjs.levelupCode.GDgreenObjects3.length = 0;
gdjs.levelupCode.GDBlueButtonObjects1.length = 0;
gdjs.levelupCode.GDBlueButtonObjects2.length = 0;
gdjs.levelupCode.GDBlueButtonObjects3.length = 0;
gdjs.levelupCode.GDRedButtonObjects1.length = 0;
gdjs.levelupCode.GDRedButtonObjects2.length = 0;
gdjs.levelupCode.GDRedButtonObjects3.length = 0;
gdjs.levelupCode.GDNewBBTextObjects1.length = 0;
gdjs.levelupCode.GDNewBBTextObjects2.length = 0;
gdjs.levelupCode.GDNewBBTextObjects3.length = 0;
gdjs.levelupCode.GDNewBitmapTextObjects1.length = 0;
gdjs.levelupCode.GDNewBitmapTextObjects2.length = 0;
gdjs.levelupCode.GDNewBitmapTextObjects3.length = 0;
gdjs.levelupCode.GDnotenoughmoneysignObjects1.length = 0;
gdjs.levelupCode.GDnotenoughmoneysignObjects2.length = 0;
gdjs.levelupCode.GDnotenoughmoneysignObjects3.length = 0;
gdjs.levelupCode.GDStarSparksObjects1.length = 0;
gdjs.levelupCode.GDStarSparksObjects2.length = 0;
gdjs.levelupCode.GDStarSparksObjects3.length = 0;

gdjs.levelupCode.eventsList1(runtimeScene);
gdjs.levelupCode.GDbackgroundObjects1.length = 0;
gdjs.levelupCode.GDbackgroundObjects2.length = 0;
gdjs.levelupCode.GDbackgroundObjects3.length = 0;
gdjs.levelupCode.GDAlchemistObjects1.length = 0;
gdjs.levelupCode.GDAlchemistObjects2.length = 0;
gdjs.levelupCode.GDAlchemistObjects3.length = 0;
gdjs.levelupCode.GDBluePotionObjects1.length = 0;
gdjs.levelupCode.GDBluePotionObjects2.length = 0;
gdjs.levelupCode.GDBluePotionObjects3.length = 0;
gdjs.levelupCode.GDGreenPotionObjects1.length = 0;
gdjs.levelupCode.GDGreenPotionObjects2.length = 0;
gdjs.levelupCode.GDGreenPotionObjects3.length = 0;
gdjs.levelupCode.GDRedPotionObjects1.length = 0;
gdjs.levelupCode.GDRedPotionObjects2.length = 0;
gdjs.levelupCode.GDRedPotionObjects3.length = 0;
gdjs.levelupCode.GDfireballTObjects1.length = 0;
gdjs.levelupCode.GDfireballTObjects2.length = 0;
gdjs.levelupCode.GDfireballTObjects3.length = 0;
gdjs.levelupCode.GDexplotionTObjects1.length = 0;
gdjs.levelupCode.GDexplotionTObjects2.length = 0;
gdjs.levelupCode.GDexplotionTObjects3.length = 0;
gdjs.levelupCode.GDfirerotateTObjects1.length = 0;
gdjs.levelupCode.GDfirerotateTObjects2.length = 0;
gdjs.levelupCode.GDfirerotateTObjects3.length = 0;
gdjs.levelupCode.GDlevelupTObjects1.length = 0;
gdjs.levelupCode.GDlevelupTObjects2.length = 0;
gdjs.levelupCode.GDlevelupTObjects3.length = 0;
gdjs.levelupCode.GD_95955000Objects1.length = 0;
gdjs.levelupCode.GD_95955000Objects2.length = 0;
gdjs.levelupCode.GD_95955000Objects3.length = 0;
gdjs.levelupCode.GD_95951000Objects1.length = 0;
gdjs.levelupCode.GD_95951000Objects2.length = 0;
gdjs.levelupCode.GD_95951000Objects3.length = 0;
gdjs.levelupCode.GD_959510000Objects1.length = 0;
gdjs.levelupCode.GD_959510000Objects2.length = 0;
gdjs.levelupCode.GD_959510000Objects3.length = 0;
gdjs.levelupCode.GDRedButtonWithMetalFrameObjects1.length = 0;
gdjs.levelupCode.GDRedButtonWithMetalFrameObjects2.length = 0;
gdjs.levelupCode.GDRedButtonWithMetalFrameObjects3.length = 0;
gdjs.levelupCode.GDpurpleObjects1.length = 0;
gdjs.levelupCode.GDpurpleObjects2.length = 0;
gdjs.levelupCode.GDpurpleObjects3.length = 0;
gdjs.levelupCode.GDgreenObjects1.length = 0;
gdjs.levelupCode.GDgreenObjects2.length = 0;
gdjs.levelupCode.GDgreenObjects3.length = 0;
gdjs.levelupCode.GDBlueButtonObjects1.length = 0;
gdjs.levelupCode.GDBlueButtonObjects2.length = 0;
gdjs.levelupCode.GDBlueButtonObjects3.length = 0;
gdjs.levelupCode.GDRedButtonObjects1.length = 0;
gdjs.levelupCode.GDRedButtonObjects2.length = 0;
gdjs.levelupCode.GDRedButtonObjects3.length = 0;
gdjs.levelupCode.GDNewBBTextObjects1.length = 0;
gdjs.levelupCode.GDNewBBTextObjects2.length = 0;
gdjs.levelupCode.GDNewBBTextObjects3.length = 0;
gdjs.levelupCode.GDNewBitmapTextObjects1.length = 0;
gdjs.levelupCode.GDNewBitmapTextObjects2.length = 0;
gdjs.levelupCode.GDNewBitmapTextObjects3.length = 0;
gdjs.levelupCode.GDnotenoughmoneysignObjects1.length = 0;
gdjs.levelupCode.GDnotenoughmoneysignObjects2.length = 0;
gdjs.levelupCode.GDnotenoughmoneysignObjects3.length = 0;
gdjs.levelupCode.GDStarSparksObjects1.length = 0;
gdjs.levelupCode.GDStarSparksObjects2.length = 0;
gdjs.levelupCode.GDStarSparksObjects3.length = 0;


return;

}

gdjs['levelupCode'] = gdjs.levelupCode;
