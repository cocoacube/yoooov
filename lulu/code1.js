gdjs._20027_39029Code = {};
gdjs._20027_39029Code.localVariables = [];
gdjs._20027_39029Code.GDDesertBackground2Objects1= [];
gdjs._20027_39029Code.GDDesertBackground2Objects2= [];
gdjs._20027_39029Code.GDMaleCharacter4Objects1= [];
gdjs._20027_39029Code.GDMaleCharacter4Objects2= [];
gdjs._20027_39029Code.GDYellowFloorObjects1= [];
gdjs._20027_39029Code.GDYellowFloorObjects2= [];
gdjs._20027_39029Code.GDNewPanelSpriteObjects1= [];
gdjs._20027_39029Code.GDNewPanelSpriteObjects2= [];
gdjs._20027_39029Code.GDYellowButtonObjects1= [];
gdjs._20027_39029Code.GDYellowButtonObjects2= [];
gdjs._20027_39029Code.GDLargePlayButtonObjects1= [];
gdjs._20027_39029Code.GDLargePlayButtonObjects2= [];
gdjs._20027_39029Code.GDConfigObjects1= [];
gdjs._20027_39029Code.GDConfigObjects2= [];
gdjs._20027_39029Code.GDHelpObjects1= [];
gdjs._20027_39029Code.GDHelpObjects2= [];
gdjs._20027_39029Code.GDNewSpriteObjects1= [];
gdjs._20027_39029Code.GDNewSpriteObjects2= [];
gdjs._20027_39029Code.GDNewSprite2Objects1= [];
gdjs._20027_39029Code.GDNewSprite2Objects2= [];
gdjs._20027_39029Code.GDNewTextObjects1= [];
gdjs._20027_39029Code.GDNewTextObjects2= [];
gdjs._20027_39029Code.GDCloseButtonObjects1= [];
gdjs._20027_39029Code.GDCloseButtonObjects2= [];
gdjs._20027_39029Code.GD_9536873_9520851Objects1= [];
gdjs._20027_39029Code.GD_9536873_9520851Objects2= [];
gdjs._20027_39029Code.GDButton1Objects1= [];
gdjs._20027_39029Code.GDButton1Objects2= [];
gdjs._20027_39029Code.GDButton2Objects1= [];
gdjs._20027_39029Code.GDButton2Objects2= [];
gdjs._20027_39029Code.GDButton3Objects1= [];
gdjs._20027_39029Code.GDButton3Objects2= [];
gdjs._20027_39029Code.GDCloseButton2Objects1= [];
gdjs._20027_39029Code.GDCloseButton2Objects2= [];
gdjs._20027_39029Code.GDcheckObjects1= [];
gdjs._20027_39029Code.GDcheckObjects2= [];
gdjs._20027_39029Code.GD_9537329_9524065_9525968_95373272Objects1= [];
gdjs._20027_39029Code.GD_9537329_9524065_9525968_95373272Objects2= [];
gdjs._20027_39029Code.GDai_9595haibaraObjects1= [];
gdjs._20027_39029Code.GDai_9595haibaraObjects2= [];
gdjs._20027_39029Code.GDInventorySlotEmpty2Objects1= [];
gdjs._20027_39029Code.GDInventorySlotEmpty2Objects2= [];
gdjs._20027_39029Code.GDbagObjects1= [];
gdjs._20027_39029Code.GDbagObjects2= [];
gdjs._20027_39029Code.GDGoldCoin2_9595UIObjects1= [];
gdjs._20027_39029Code.GDGoldCoin2_9595UIObjects2= [];
gdjs._20027_39029Code.GDGoldCoin_9595djObjects1= [];
gdjs._20027_39029Code.GDGoldCoin_9595djObjects2= [];
gdjs._20027_39029Code.GDSnack1Objects1= [];
gdjs._20027_39029Code.GDSnack1Objects2= [];
gdjs._20027_39029Code.GDCookiesObjects1= [];
gdjs._20027_39029Code.GDCookiesObjects2= [];
gdjs._20027_39029Code.GDBurritoDishObjects1= [];
gdjs._20027_39029Code.GDBurritoDishObjects2= [];
gdjs._20027_39029Code.GDJamObjects1= [];
gdjs._20027_39029Code.GDJamObjects2= [];
gdjs._20027_39029Code.GDFrenchfriesDishObjects1= [];
gdjs._20027_39029Code.GDFrenchfriesDishObjects2= [];
gdjs._20027_39029Code.GDIcecreamBowlObjects1= [];
gdjs._20027_39029Code.GDIcecreamBowlObjects2= [];
gdjs._20027_39029Code.GDSnack2Objects1= [];
gdjs._20027_39029Code.GDSnack2Objects2= [];
gdjs._20027_39029Code.GDGunObjects1= [];
gdjs._20027_39029Code.GDGunObjects2= [];
gdjs._20027_39029Code.GDgun1_9595djObjects1= [];
gdjs._20027_39029Code.GDgun1_9595djObjects2= [];
gdjs._20027_39029Code.GDshopObjects1= [];
gdjs._20027_39029Code.GDshopObjects2= [];
gdjs._20027_39029Code.GD_9537325_9521551_9539029_9538754Objects1= [];
gdjs._20027_39029Code.GD_9537325_9521551_9539029_9538754Objects2= [];
gdjs._20027_39029Code.GDoverObjects1= [];
gdjs._20027_39029Code.GDoverObjects2= [];
gdjs._20027_39029Code.GDGreyButtonObjects1= [];
gdjs._20027_39029Code.GDGreyButtonObjects2= [];
gdjs._20027_39029Code.GD_9537325_9521551Objects1= [];
gdjs._20027_39029Code.GD_9537325_9521551Objects2= [];
gdjs._20027_39029Code.GDBlueDotBarObjects1= [];
gdjs._20027_39029Code.GDBlueDotBarObjects2= [];
gdjs._20027_39029Code.GD_9521696_9520154_9521517Objects1= [];
gdjs._20027_39029Code.GD_9521696_9520154_9521517Objects2= [];


gdjs._20027_39029Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Help"), gdjs._20027_39029Code.GDHelpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_39029Code.GDHelpObjects1.length;i<l;++i) {
    if ( gdjs._20027_39029Code.GDHelpObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_39029Code.GDHelpObjects1[k] = gdjs._20027_39029Code.GDHelpObjects1[i];
        ++k;
    }
}
gdjs._20027_39029Code.GDHelpObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "help");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "play");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CloseButton"), gdjs._20027_39029Code.GDCloseButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_39029Code.GDCloseButtonObjects1.length;i<l;++i) {
    if ( gdjs._20027_39029Code.GDCloseButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_39029Code.GDCloseButtonObjects1[k] = gdjs._20027_39029Code.GDCloseButtonObjects1[i];
        ++k;
    }
}
gdjs._20027_39029Code.GDCloseButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "help");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LargePlayButton"), gdjs._20027_39029Code.GDLargePlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_39029Code.GDLargePlayButtonObjects1.length;i<l;++i) {
    if ( gdjs._20027_39029Code.GDLargePlayButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_39029Code.GDLargePlayButtonObjects1[k] = gdjs._20027_39029Code.GDLargePlayButtonObjects1[i];
        ++k;
    }
}
gdjs._20027_39029Code.GDLargePlayButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "play");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "help");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button1"), gdjs._20027_39029Code.GDButton1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_39029Code.GDButton1Objects1.length;i<l;++i) {
    if ( gdjs._20027_39029Code.GDButton1Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_39029Code.GDButton1Objects1[k] = gdjs._20027_39029Code.GDButton1Objects1[i];
        ++k;
    }
}
gdjs._20027_39029Code.GDButton1Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("选关"), gdjs._20027_39029Code.GD_9536873_9520851Objects1);
{for(var i = 0, len = gdjs._20027_39029Code.GD_9536873_9520851Objects1.length ;i < len;++i) {
    gdjs._20027_39029Code.GD_9536873_9520851Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CloseButton2"), gdjs._20027_39029Code.GDCloseButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_39029Code.GDCloseButton2Objects1.length;i<l;++i) {
    if ( gdjs._20027_39029Code.GDCloseButton2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_39029Code.GDCloseButton2Objects1[k] = gdjs._20027_39029Code.GDCloseButton2Objects1[i];
        ++k;
    }
}
gdjs._20027_39029Code.GDCloseButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "play");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button1"), gdjs._20027_39029Code.GDButton1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_39029Code.GDButton1Objects1.length;i<l;++i) {
    if ( gdjs._20027_39029Code.GDButton1Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_39029Code.GDButton1Objects1[k] = gdjs._20027_39029Code.GDButton1Objects1[i];
        ++k;
    }
}
gdjs._20027_39029Code.GDButton1Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("check"), gdjs._20027_39029Code.GDcheckObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_39029Code.GDcheckObjects1.length;i<l;++i) {
    if ( gdjs._20027_39029Code.GDcheckObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_39029Code.GDcheckObjects1[k] = gdjs._20027_39029Code.GDcheckObjects1[i];
        ++k;
    }
}
gdjs._20027_39029Code.GDcheckObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber()), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs._20027_39029Code.GDButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_39029Code.GDButton2Objects1.length;i<l;++i) {
    if ( gdjs._20027_39029Code.GDButton2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_39029Code.GDButton2Objects1[k] = gdjs._20027_39029Code.GDButton2Objects1[i];
        ++k;
    }
}
gdjs._20027_39029Code.GDButton2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("选关"), gdjs._20027_39029Code.GD_9536873_9520851Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}{for(var i = 0, len = gdjs._20027_39029Code.GD_9536873_9520851Objects1.length ;i < len;++i) {
    gdjs._20027_39029Code.GD_9536873_9520851Objects1[i].getBehavior("Animation").setAnimationName("截屏2025-01-23 11.30.42");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button3"), gdjs._20027_39029Code.GDButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_39029Code.GDButton3Objects1.length;i<l;++i) {
    if ( gdjs._20027_39029Code.GDButton3Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_39029Code.GDButton3Objects1[k] = gdjs._20027_39029Code.GDButton3Objects1[i];
        ++k;
    }
}
gdjs._20027_39029Code.GDButton3Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "8f102e5acfced7cf0ce37feea2b8b3c4c977b9dce9c5f571f0ef0274a92570aa_Village Tarantella.aac", true, 100, 1);
}}

}


};

gdjs._20027_39029Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._20027_39029Code.GDDesertBackground2Objects1.length = 0;
gdjs._20027_39029Code.GDDesertBackground2Objects2.length = 0;
gdjs._20027_39029Code.GDMaleCharacter4Objects1.length = 0;
gdjs._20027_39029Code.GDMaleCharacter4Objects2.length = 0;
gdjs._20027_39029Code.GDYellowFloorObjects1.length = 0;
gdjs._20027_39029Code.GDYellowFloorObjects2.length = 0;
gdjs._20027_39029Code.GDNewPanelSpriteObjects1.length = 0;
gdjs._20027_39029Code.GDNewPanelSpriteObjects2.length = 0;
gdjs._20027_39029Code.GDYellowButtonObjects1.length = 0;
gdjs._20027_39029Code.GDYellowButtonObjects2.length = 0;
gdjs._20027_39029Code.GDLargePlayButtonObjects1.length = 0;
gdjs._20027_39029Code.GDLargePlayButtonObjects2.length = 0;
gdjs._20027_39029Code.GDConfigObjects1.length = 0;
gdjs._20027_39029Code.GDConfigObjects2.length = 0;
gdjs._20027_39029Code.GDHelpObjects1.length = 0;
gdjs._20027_39029Code.GDHelpObjects2.length = 0;
gdjs._20027_39029Code.GDNewSpriteObjects1.length = 0;
gdjs._20027_39029Code.GDNewSpriteObjects2.length = 0;
gdjs._20027_39029Code.GDNewSprite2Objects1.length = 0;
gdjs._20027_39029Code.GDNewSprite2Objects2.length = 0;
gdjs._20027_39029Code.GDNewTextObjects1.length = 0;
gdjs._20027_39029Code.GDNewTextObjects2.length = 0;
gdjs._20027_39029Code.GDCloseButtonObjects1.length = 0;
gdjs._20027_39029Code.GDCloseButtonObjects2.length = 0;
gdjs._20027_39029Code.GD_9536873_9520851Objects1.length = 0;
gdjs._20027_39029Code.GD_9536873_9520851Objects2.length = 0;
gdjs._20027_39029Code.GDButton1Objects1.length = 0;
gdjs._20027_39029Code.GDButton1Objects2.length = 0;
gdjs._20027_39029Code.GDButton2Objects1.length = 0;
gdjs._20027_39029Code.GDButton2Objects2.length = 0;
gdjs._20027_39029Code.GDButton3Objects1.length = 0;
gdjs._20027_39029Code.GDButton3Objects2.length = 0;
gdjs._20027_39029Code.GDCloseButton2Objects1.length = 0;
gdjs._20027_39029Code.GDCloseButton2Objects2.length = 0;
gdjs._20027_39029Code.GDcheckObjects1.length = 0;
gdjs._20027_39029Code.GDcheckObjects2.length = 0;
gdjs._20027_39029Code.GD_9537329_9524065_9525968_95373272Objects1.length = 0;
gdjs._20027_39029Code.GD_9537329_9524065_9525968_95373272Objects2.length = 0;
gdjs._20027_39029Code.GDai_9595haibaraObjects1.length = 0;
gdjs._20027_39029Code.GDai_9595haibaraObjects2.length = 0;
gdjs._20027_39029Code.GDInventorySlotEmpty2Objects1.length = 0;
gdjs._20027_39029Code.GDInventorySlotEmpty2Objects2.length = 0;
gdjs._20027_39029Code.GDbagObjects1.length = 0;
gdjs._20027_39029Code.GDbagObjects2.length = 0;
gdjs._20027_39029Code.GDGoldCoin2_9595UIObjects1.length = 0;
gdjs._20027_39029Code.GDGoldCoin2_9595UIObjects2.length = 0;
gdjs._20027_39029Code.GDGoldCoin_9595djObjects1.length = 0;
gdjs._20027_39029Code.GDGoldCoin_9595djObjects2.length = 0;
gdjs._20027_39029Code.GDSnack1Objects1.length = 0;
gdjs._20027_39029Code.GDSnack1Objects2.length = 0;
gdjs._20027_39029Code.GDCookiesObjects1.length = 0;
gdjs._20027_39029Code.GDCookiesObjects2.length = 0;
gdjs._20027_39029Code.GDBurritoDishObjects1.length = 0;
gdjs._20027_39029Code.GDBurritoDishObjects2.length = 0;
gdjs._20027_39029Code.GDJamObjects1.length = 0;
gdjs._20027_39029Code.GDJamObjects2.length = 0;
gdjs._20027_39029Code.GDFrenchfriesDishObjects1.length = 0;
gdjs._20027_39029Code.GDFrenchfriesDishObjects2.length = 0;
gdjs._20027_39029Code.GDIcecreamBowlObjects1.length = 0;
gdjs._20027_39029Code.GDIcecreamBowlObjects2.length = 0;
gdjs._20027_39029Code.GDSnack2Objects1.length = 0;
gdjs._20027_39029Code.GDSnack2Objects2.length = 0;
gdjs._20027_39029Code.GDGunObjects1.length = 0;
gdjs._20027_39029Code.GDGunObjects2.length = 0;
gdjs._20027_39029Code.GDgun1_9595djObjects1.length = 0;
gdjs._20027_39029Code.GDgun1_9595djObjects2.length = 0;
gdjs._20027_39029Code.GDshopObjects1.length = 0;
gdjs._20027_39029Code.GDshopObjects2.length = 0;
gdjs._20027_39029Code.GD_9537325_9521551_9539029_9538754Objects1.length = 0;
gdjs._20027_39029Code.GD_9537325_9521551_9539029_9538754Objects2.length = 0;
gdjs._20027_39029Code.GDoverObjects1.length = 0;
gdjs._20027_39029Code.GDoverObjects2.length = 0;
gdjs._20027_39029Code.GDGreyButtonObjects1.length = 0;
gdjs._20027_39029Code.GDGreyButtonObjects2.length = 0;
gdjs._20027_39029Code.GD_9537325_9521551Objects1.length = 0;
gdjs._20027_39029Code.GD_9537325_9521551Objects2.length = 0;
gdjs._20027_39029Code.GDBlueDotBarObjects1.length = 0;
gdjs._20027_39029Code.GDBlueDotBarObjects2.length = 0;
gdjs._20027_39029Code.GD_9521696_9520154_9521517Objects1.length = 0;
gdjs._20027_39029Code.GD_9521696_9520154_9521517Objects2.length = 0;

gdjs._20027_39029Code.eventsList0(runtimeScene);
gdjs._20027_39029Code.GDDesertBackground2Objects1.length = 0;
gdjs._20027_39029Code.GDDesertBackground2Objects2.length = 0;
gdjs._20027_39029Code.GDMaleCharacter4Objects1.length = 0;
gdjs._20027_39029Code.GDMaleCharacter4Objects2.length = 0;
gdjs._20027_39029Code.GDYellowFloorObjects1.length = 0;
gdjs._20027_39029Code.GDYellowFloorObjects2.length = 0;
gdjs._20027_39029Code.GDNewPanelSpriteObjects1.length = 0;
gdjs._20027_39029Code.GDNewPanelSpriteObjects2.length = 0;
gdjs._20027_39029Code.GDYellowButtonObjects1.length = 0;
gdjs._20027_39029Code.GDYellowButtonObjects2.length = 0;
gdjs._20027_39029Code.GDLargePlayButtonObjects1.length = 0;
gdjs._20027_39029Code.GDLargePlayButtonObjects2.length = 0;
gdjs._20027_39029Code.GDConfigObjects1.length = 0;
gdjs._20027_39029Code.GDConfigObjects2.length = 0;
gdjs._20027_39029Code.GDHelpObjects1.length = 0;
gdjs._20027_39029Code.GDHelpObjects2.length = 0;
gdjs._20027_39029Code.GDNewSpriteObjects1.length = 0;
gdjs._20027_39029Code.GDNewSpriteObjects2.length = 0;
gdjs._20027_39029Code.GDNewSprite2Objects1.length = 0;
gdjs._20027_39029Code.GDNewSprite2Objects2.length = 0;
gdjs._20027_39029Code.GDNewTextObjects1.length = 0;
gdjs._20027_39029Code.GDNewTextObjects2.length = 0;
gdjs._20027_39029Code.GDCloseButtonObjects1.length = 0;
gdjs._20027_39029Code.GDCloseButtonObjects2.length = 0;
gdjs._20027_39029Code.GD_9536873_9520851Objects1.length = 0;
gdjs._20027_39029Code.GD_9536873_9520851Objects2.length = 0;
gdjs._20027_39029Code.GDButton1Objects1.length = 0;
gdjs._20027_39029Code.GDButton1Objects2.length = 0;
gdjs._20027_39029Code.GDButton2Objects1.length = 0;
gdjs._20027_39029Code.GDButton2Objects2.length = 0;
gdjs._20027_39029Code.GDButton3Objects1.length = 0;
gdjs._20027_39029Code.GDButton3Objects2.length = 0;
gdjs._20027_39029Code.GDCloseButton2Objects1.length = 0;
gdjs._20027_39029Code.GDCloseButton2Objects2.length = 0;
gdjs._20027_39029Code.GDcheckObjects1.length = 0;
gdjs._20027_39029Code.GDcheckObjects2.length = 0;
gdjs._20027_39029Code.GD_9537329_9524065_9525968_95373272Objects1.length = 0;
gdjs._20027_39029Code.GD_9537329_9524065_9525968_95373272Objects2.length = 0;
gdjs._20027_39029Code.GDai_9595haibaraObjects1.length = 0;
gdjs._20027_39029Code.GDai_9595haibaraObjects2.length = 0;
gdjs._20027_39029Code.GDInventorySlotEmpty2Objects1.length = 0;
gdjs._20027_39029Code.GDInventorySlotEmpty2Objects2.length = 0;
gdjs._20027_39029Code.GDbagObjects1.length = 0;
gdjs._20027_39029Code.GDbagObjects2.length = 0;
gdjs._20027_39029Code.GDGoldCoin2_9595UIObjects1.length = 0;
gdjs._20027_39029Code.GDGoldCoin2_9595UIObjects2.length = 0;
gdjs._20027_39029Code.GDGoldCoin_9595djObjects1.length = 0;
gdjs._20027_39029Code.GDGoldCoin_9595djObjects2.length = 0;
gdjs._20027_39029Code.GDSnack1Objects1.length = 0;
gdjs._20027_39029Code.GDSnack1Objects2.length = 0;
gdjs._20027_39029Code.GDCookiesObjects1.length = 0;
gdjs._20027_39029Code.GDCookiesObjects2.length = 0;
gdjs._20027_39029Code.GDBurritoDishObjects1.length = 0;
gdjs._20027_39029Code.GDBurritoDishObjects2.length = 0;
gdjs._20027_39029Code.GDJamObjects1.length = 0;
gdjs._20027_39029Code.GDJamObjects2.length = 0;
gdjs._20027_39029Code.GDFrenchfriesDishObjects1.length = 0;
gdjs._20027_39029Code.GDFrenchfriesDishObjects2.length = 0;
gdjs._20027_39029Code.GDIcecreamBowlObjects1.length = 0;
gdjs._20027_39029Code.GDIcecreamBowlObjects2.length = 0;
gdjs._20027_39029Code.GDSnack2Objects1.length = 0;
gdjs._20027_39029Code.GDSnack2Objects2.length = 0;
gdjs._20027_39029Code.GDGunObjects1.length = 0;
gdjs._20027_39029Code.GDGunObjects2.length = 0;
gdjs._20027_39029Code.GDgun1_9595djObjects1.length = 0;
gdjs._20027_39029Code.GDgun1_9595djObjects2.length = 0;
gdjs._20027_39029Code.GDshopObjects1.length = 0;
gdjs._20027_39029Code.GDshopObjects2.length = 0;
gdjs._20027_39029Code.GD_9537325_9521551_9539029_9538754Objects1.length = 0;
gdjs._20027_39029Code.GD_9537325_9521551_9539029_9538754Objects2.length = 0;
gdjs._20027_39029Code.GDoverObjects1.length = 0;
gdjs._20027_39029Code.GDoverObjects2.length = 0;
gdjs._20027_39029Code.GDGreyButtonObjects1.length = 0;
gdjs._20027_39029Code.GDGreyButtonObjects2.length = 0;
gdjs._20027_39029Code.GD_9537325_9521551Objects1.length = 0;
gdjs._20027_39029Code.GD_9537325_9521551Objects2.length = 0;
gdjs._20027_39029Code.GDBlueDotBarObjects1.length = 0;
gdjs._20027_39029Code.GDBlueDotBarObjects2.length = 0;
gdjs._20027_39029Code.GD_9521696_9520154_9521517Objects1.length = 0;
gdjs._20027_39029Code.GD_9521696_9520154_9521517Objects2.length = 0;


return;

}

gdjs['_20027_39029Code'] = gdjs._20027_39029Code;
