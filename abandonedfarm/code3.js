gdjs._20805_20540Code = {};
gdjs._20805_20540Code.localVariables = [];
gdjs._20805_20540Code.GDNewSpriteObjects1= [];
gdjs._20805_20540Code.GDNewSpriteObjects2= [];
gdjs._20805_20540Code.GDNewSpriteObjects3= [];
gdjs._20805_20540Code.GDNewTextObjects1= [];
gdjs._20805_20540Code.GDNewTextObjects2= [];
gdjs._20805_20540Code.GDNewTextObjects3= [];
gdjs._20805_20540Code.GDNewText2Objects1= [];
gdjs._20805_20540Code.GDNewText2Objects2= [];
gdjs._20805_20540Code.GDNewText2Objects3= [];
gdjs._20805_20540Code.GDNewText3Objects1= [];
gdjs._20805_20540Code.GDNewText3Objects2= [];
gdjs._20805_20540Code.GDNewText3Objects3= [];
gdjs._20805_20540Code.GDNewText4Objects1= [];
gdjs._20805_20540Code.GDNewText4Objects2= [];
gdjs._20805_20540Code.GDNewText4Objects3= [];
gdjs._20805_20540Code.GDNewSprite2Objects1= [];
gdjs._20805_20540Code.GDNewSprite2Objects2= [];
gdjs._20805_20540Code.GDNewSprite2Objects3= [];
gdjs._20805_20540Code.GDNObjects1= [];
gdjs._20805_20540Code.GDNObjects2= [];
gdjs._20805_20540Code.GDNObjects3= [];
gdjs._20805_20540Code.GDRedButtonWithShadowObjects1= [];
gdjs._20805_20540Code.GDRedButtonWithShadowObjects2= [];
gdjs._20805_20540Code.GDRedButtonWithShadowObjects3= [];
gdjs._20805_20540Code.GDNewTextInputObjects1= [];
gdjs._20805_20540Code.GDNewTextInputObjects2= [];
gdjs._20805_20540Code.GDNewTextInputObjects3= [];
gdjs._20805_20540Code.GDGreenButtonWithShadowObjects1= [];
gdjs._20805_20540Code.GDGreenButtonWithShadowObjects2= [];
gdjs._20805_20540Code.GDGreenButtonWithShadowObjects3= [];
gdjs._20805_20540Code.GDBrownButtonWithShadowObjects1= [];
gdjs._20805_20540Code.GDBrownButtonWithShadowObjects2= [];
gdjs._20805_20540Code.GDBrownButtonWithShadowObjects3= [];


gdjs._20805_20540Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() >= 400);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(200);
}}

}


};gdjs._20805_20540Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs._20805_20540Code.GDNewTextInputObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("coupon"), (( gdjs._20805_20540Code.GDNewTextInputObjects2.length === 0 ) ? "" :gdjs._20805_20540Code.GDNewTextInputObjects2[0].getBehavior("Text").getText()));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("N"), gdjs._20805_20540Code.GDNObjects2);
/* Reuse gdjs._20805_20540Code.GDNewTextInputObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(3).add(555);
}{for(var i = 0, len = gdjs._20805_20540Code.GDNObjects2.length ;i < len;++i) {
    gdjs._20805_20540Code.GDNObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("coupon", "save", runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber());
}{gdjs.evtTools.variable.variableRemoveChild(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("coupon"), (( gdjs._20805_20540Code.GDNewTextInputObjects2.length === 0 ) ? "" :gdjs._20805_20540Code.GDNewTextInputObjects2[0].getBehavior("Text").getText()));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.hideLayer(runtimeScene, "inputUI");
}}

}


};gdjs._20805_20540Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("N"), gdjs._20805_20540Code.GDNObjects1);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "inputUI");
}{gdjs.evtTools.storage.readNumberFromJSONFile("coupon", "save", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}{for(var i = 0, len = gdjs._20805_20540Code.GDNObjects1.length ;i < len;++i) {
    gdjs._20805_20540Code.GDNObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._20805_20540Code.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20805_20540Code.GDNewTextObjects1.length;i<l;++i) {
    if ( gdjs._20805_20540Code.GDNewTextObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20805_20540Code.GDNewTextObjects1[k] = gdjs._20805_20540Code.GDNewTextObjects1[i];
        ++k;
    }
}
gdjs._20805_20540Code.GDNewTextObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._20805_20540Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("N"), gdjs._20805_20540Code.GDNObjects1);
{for(var i = 0, len = gdjs._20805_20540Code.GDNObjects1.length ;i < len;++i) {
    gdjs._20805_20540Code.GDNObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs._20805_20540Code.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20805_20540Code.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs._20805_20540Code.GDRedButtonWithShadowObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20805_20540Code.GDRedButtonWithShadowObjects1[k] = gdjs._20805_20540Code.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs._20805_20540Code.GDRedButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "inputUI");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithShadow"), gdjs._20805_20540Code.GDGreenButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20805_20540Code.GDGreenButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs._20805_20540Code.GDGreenButtonWithShadowObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20805_20540Code.GDGreenButtonWithShadowObjects1[k] = gdjs._20805_20540Code.GDGreenButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs._20805_20540Code.GDGreenButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._20805_20540Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow"), gdjs._20805_20540Code.GDBrownButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20805_20540Code.GDBrownButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs._20805_20540Code.GDBrownButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20805_20540Code.GDBrownButtonWithShadowObjects1[k] = gdjs._20805_20540Code.GDBrownButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs._20805_20540Code.GDBrownButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "开始界面", false);
}}

}


};

gdjs._20805_20540Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._20805_20540Code.GDNewSpriteObjects1.length = 0;
gdjs._20805_20540Code.GDNewSpriteObjects2.length = 0;
gdjs._20805_20540Code.GDNewSpriteObjects3.length = 0;
gdjs._20805_20540Code.GDNewTextObjects1.length = 0;
gdjs._20805_20540Code.GDNewTextObjects2.length = 0;
gdjs._20805_20540Code.GDNewTextObjects3.length = 0;
gdjs._20805_20540Code.GDNewText2Objects1.length = 0;
gdjs._20805_20540Code.GDNewText2Objects2.length = 0;
gdjs._20805_20540Code.GDNewText2Objects3.length = 0;
gdjs._20805_20540Code.GDNewText3Objects1.length = 0;
gdjs._20805_20540Code.GDNewText3Objects2.length = 0;
gdjs._20805_20540Code.GDNewText3Objects3.length = 0;
gdjs._20805_20540Code.GDNewText4Objects1.length = 0;
gdjs._20805_20540Code.GDNewText4Objects2.length = 0;
gdjs._20805_20540Code.GDNewText4Objects3.length = 0;
gdjs._20805_20540Code.GDNewSprite2Objects1.length = 0;
gdjs._20805_20540Code.GDNewSprite2Objects2.length = 0;
gdjs._20805_20540Code.GDNewSprite2Objects3.length = 0;
gdjs._20805_20540Code.GDNObjects1.length = 0;
gdjs._20805_20540Code.GDNObjects2.length = 0;
gdjs._20805_20540Code.GDNObjects3.length = 0;
gdjs._20805_20540Code.GDRedButtonWithShadowObjects1.length = 0;
gdjs._20805_20540Code.GDRedButtonWithShadowObjects2.length = 0;
gdjs._20805_20540Code.GDRedButtonWithShadowObjects3.length = 0;
gdjs._20805_20540Code.GDNewTextInputObjects1.length = 0;
gdjs._20805_20540Code.GDNewTextInputObjects2.length = 0;
gdjs._20805_20540Code.GDNewTextInputObjects3.length = 0;
gdjs._20805_20540Code.GDGreenButtonWithShadowObjects1.length = 0;
gdjs._20805_20540Code.GDGreenButtonWithShadowObjects2.length = 0;
gdjs._20805_20540Code.GDGreenButtonWithShadowObjects3.length = 0;
gdjs._20805_20540Code.GDBrownButtonWithShadowObjects1.length = 0;
gdjs._20805_20540Code.GDBrownButtonWithShadowObjects2.length = 0;
gdjs._20805_20540Code.GDBrownButtonWithShadowObjects3.length = 0;

gdjs._20805_20540Code.eventsList2(runtimeScene);
gdjs._20805_20540Code.GDNewSpriteObjects1.length = 0;
gdjs._20805_20540Code.GDNewSpriteObjects2.length = 0;
gdjs._20805_20540Code.GDNewSpriteObjects3.length = 0;
gdjs._20805_20540Code.GDNewTextObjects1.length = 0;
gdjs._20805_20540Code.GDNewTextObjects2.length = 0;
gdjs._20805_20540Code.GDNewTextObjects3.length = 0;
gdjs._20805_20540Code.GDNewText2Objects1.length = 0;
gdjs._20805_20540Code.GDNewText2Objects2.length = 0;
gdjs._20805_20540Code.GDNewText2Objects3.length = 0;
gdjs._20805_20540Code.GDNewText3Objects1.length = 0;
gdjs._20805_20540Code.GDNewText3Objects2.length = 0;
gdjs._20805_20540Code.GDNewText3Objects3.length = 0;
gdjs._20805_20540Code.GDNewText4Objects1.length = 0;
gdjs._20805_20540Code.GDNewText4Objects2.length = 0;
gdjs._20805_20540Code.GDNewText4Objects3.length = 0;
gdjs._20805_20540Code.GDNewSprite2Objects1.length = 0;
gdjs._20805_20540Code.GDNewSprite2Objects2.length = 0;
gdjs._20805_20540Code.GDNewSprite2Objects3.length = 0;
gdjs._20805_20540Code.GDNObjects1.length = 0;
gdjs._20805_20540Code.GDNObjects2.length = 0;
gdjs._20805_20540Code.GDNObjects3.length = 0;
gdjs._20805_20540Code.GDRedButtonWithShadowObjects1.length = 0;
gdjs._20805_20540Code.GDRedButtonWithShadowObjects2.length = 0;
gdjs._20805_20540Code.GDRedButtonWithShadowObjects3.length = 0;
gdjs._20805_20540Code.GDNewTextInputObjects1.length = 0;
gdjs._20805_20540Code.GDNewTextInputObjects2.length = 0;
gdjs._20805_20540Code.GDNewTextInputObjects3.length = 0;
gdjs._20805_20540Code.GDGreenButtonWithShadowObjects1.length = 0;
gdjs._20805_20540Code.GDGreenButtonWithShadowObjects2.length = 0;
gdjs._20805_20540Code.GDGreenButtonWithShadowObjects3.length = 0;
gdjs._20805_20540Code.GDBrownButtonWithShadowObjects1.length = 0;
gdjs._20805_20540Code.GDBrownButtonWithShadowObjects2.length = 0;
gdjs._20805_20540Code.GDBrownButtonWithShadowObjects3.length = 0;


return;

}

gdjs['_20805_20540Code'] = gdjs._20805_20540Code;
