gdjs.shopCode = {};
gdjs.shopCode.localVariables = [];
gdjs.shopCode.GDAgentMikeObjects1= [];
gdjs.shopCode.GDAgentMikeObjects2= [];
gdjs.shopCode.GDNewSpriteObjects1= [];
gdjs.shopCode.GDNewSpriteObjects2= [];
gdjs.shopCode.GDYellowButtonObjects1= [];
gdjs.shopCode.GDYellowButtonObjects2= [];
gdjs.shopCode.GDYellowButton2Objects1= [];
gdjs.shopCode.GDYellowButton2Objects2= [];
gdjs.shopCode.GDIronHelmetObjects1= [];
gdjs.shopCode.GDIronHelmetObjects2= [];
gdjs.shopCode.GDIronChestplateObjects1= [];
gdjs.shopCode.GDIronChestplateObjects2= [];
gdjs.shopCode.GDRedPotionObjects1= [];
gdjs.shopCode.GDRedPotionObjects2= [];
gdjs.shopCode.GDNewTextObjects1= [];
gdjs.shopCode.GDNewTextObjects2= [];
gdjs.shopCode.GDGoldCoinObjects1= [];
gdjs.shopCode.GDGoldCoinObjects2= [];
gdjs.shopCode.GDWellatObjects1= [];
gdjs.shopCode.GDWellatObjects2= [];
gdjs.shopCode.GDCopperRedBarObjects1= [];
gdjs.shopCode.GDCopperRedBarObjects2= [];
gdjs.shopCode.GDcoppObjects1= [];
gdjs.shopCode.GDcoppObjects2= [];
gdjs.shopCode.GDGreyButtonObjects1= [];
gdjs.shopCode.GDGreyButtonObjects2= [];
gdjs.shopCode.GDYellowButton3Objects1= [];
gdjs.shopCode.GDYellowButton3Objects2= [];
gdjs.shopCode.GDYellowButton4Objects1= [];
gdjs.shopCode.GDYellowButton4Objects2= [];
gdjs.shopCode.GDMetalShieldObjects1= [];
gdjs.shopCode.GDMetalShieldObjects2= [];
gdjs.shopCode.GDNewText2Objects1= [];
gdjs.shopCode.GDNewText2Objects2= [];
gdjs.shopCode.GDAgentMikeObjects1= [];
gdjs.shopCode.GDAgentMikeObjects2= [];
gdjs.shopCode.GDFireballObjects1= [];
gdjs.shopCode.GDFireballObjects2= [];


gdjs.shopCode.asyncCallback30297068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.shopCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("YellowButton"), gdjs.shopCode.GDYellowButtonObjects2);

{runtimeScene.getGame().getVariables().getFromIndex(1).getChild(0).setString("有");
}{for(var i = 0, len = gdjs.shopCode.GDYellowButtonObjects2.length ;i < len;++i) {
    gdjs.shopCode.GDYellowButtonObjects2[i].SetLabelText("购买", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}gdjs.shopCode.localVariables.length = 0;
}
gdjs.shopCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.shopCode.localVariables);
for (const obj of gdjs.shopCode.GDYellowButtonObjects1) asyncObjectsList.addObject("YellowButton", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(60), (runtimeScene) => (gdjs.shopCode.asyncCallback30297068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.shopCode.asyncCallback30300404 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.shopCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild(1).setString("有");
}gdjs.shopCode.localVariables.length = 0;
}
gdjs.shopCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.shopCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(60), (runtimeScene) => (gdjs.shopCode.asyncCallback30300404(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.shopCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.input.showCursor(runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1000);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.shopCode.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 5;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.shopCode.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs.shopCode.GDYellowButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.shopCode.GDYellowButtonObjects1[k] = gdjs.shopCode.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs.shopCode.GDYellowButtonObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(0)) != "有,1";
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(1)) > 0;
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.shopCode.GDCopperRedBarObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(5);
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild(0).setString("有,1");
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(1).add((( gdjs.shopCode.GDCopperRedBarObjects1.length === 0 ) ? 0 :gdjs.shopCode.GDCopperRedBarObjects1[0].MaxValue((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - (( gdjs.shopCode.GDCopperRedBarObjects1.length === 0 ) ? 0 :gdjs.shopCode.GDCopperRedBarObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
{ //Subevents
gdjs.shopCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(0)) == "有,1";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.shopCode.GDYellowButtonObjects1);
{for(var i = 0, len = gdjs.shopCode.GDYellowButtonObjects1.length ;i < len;++i) {
    gdjs.shopCode.GDYellowButtonObjects1[i].SetLabelText("1分钟", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton2"), gdjs.shopCode.GDYellowButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.shopCode.GDYellowButton2Objects1.length;i<l;++i) {
    if ( gdjs.shopCode.GDYellowButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.shopCode.GDYellowButton2Objects1[k] = gdjs.shopCode.GDYellowButton2Objects1[i];
        ++k;
    }
}
gdjs.shopCode.GDYellowButton2Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 55;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(1)) != "有,1";
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(55);
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild(1).setString("有,1");
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(0).add(20);
}
{ //Subevents
gdjs.shopCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(1)) == "有,1";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("YellowButton2"), gdjs.shopCode.GDYellowButton2Objects1);
{for(var i = 0, len = gdjs.shopCode.GDYellowButton2Objects1.length ;i < len;++i) {
    gdjs.shopCode.GDYellowButton2Objects1[i].SetLabelText("1分钟", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Wellat"), gdjs.shopCode.GDWellatObjects1);
gdjs.copyArray(runtimeScene.getObjects("copp"), gdjs.shopCode.GDcoppObjects1);
{for(var i = 0, len = gdjs.shopCode.GDcoppObjects1.length ;i < len;++i) {
    gdjs.shopCode.GDcoppObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(0).getAsString() + "/" + runtimeScene.getGame().getVariables().getFromIndex(2).getChild(1).getAsString());
}
}{for(var i = 0, len = gdjs.shopCode.GDWellatObjects1.length ;i < len;++i) {
    gdjs.shopCode.GDWellatObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyButton"), gdjs.shopCode.GDGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.shopCode.GDGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs.shopCode.GDGreyButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.shopCode.GDGreyButtonObjects1[k] = gdjs.shopCode.GDGreyButtonObjects1[i];
        ++k;
    }
}
gdjs.shopCode.GDGreyButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "未命名场景", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.shopCode.GDCopperRedBarObjects1);
{for(var i = 0, len = gdjs.shopCode.GDCopperRedBarObjects1.length ;i < len;++i) {
    gdjs.shopCode.GDCopperRedBarObjects1[i].SetMaxValue(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(0).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.shopCode.GDCopperRedBarObjects1.length ;i < len;++i) {
    gdjs.shopCode.GDCopperRedBarObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(1).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton3"), gdjs.shopCode.GDYellowButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.shopCode.GDYellowButton3Objects1.length;i<l;++i) {
    if ( gdjs.shopCode.GDYellowButton3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.shopCode.GDYellowButton3Objects1[k] = gdjs.shopCode.GDYellowButton3Objects1[i];
        ++k;
    }
}
gdjs.shopCode.GDYellowButton3Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 50;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild(2).setString("有");
}{runtimeScene.getGame().getVariables().getFromIndex(0).sub(50);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(2)) == "有";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(2)) == "有,a";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("YellowButton3"), gdjs.shopCode.GDYellowButton3Objects1);
{for(var i = 0, len = gdjs.shopCode.GDYellowButton3Objects1.length ;i < len;++i) {
    gdjs.shopCode.GDYellowButton3Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.shopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.shopCode.GDAgentMikeObjects1.length = 0;
gdjs.shopCode.GDAgentMikeObjects2.length = 0;
gdjs.shopCode.GDNewSpriteObjects1.length = 0;
gdjs.shopCode.GDNewSpriteObjects2.length = 0;
gdjs.shopCode.GDYellowButtonObjects1.length = 0;
gdjs.shopCode.GDYellowButtonObjects2.length = 0;
gdjs.shopCode.GDYellowButton2Objects1.length = 0;
gdjs.shopCode.GDYellowButton2Objects2.length = 0;
gdjs.shopCode.GDIronHelmetObjects1.length = 0;
gdjs.shopCode.GDIronHelmetObjects2.length = 0;
gdjs.shopCode.GDIronChestplateObjects1.length = 0;
gdjs.shopCode.GDIronChestplateObjects2.length = 0;
gdjs.shopCode.GDRedPotionObjects1.length = 0;
gdjs.shopCode.GDRedPotionObjects2.length = 0;
gdjs.shopCode.GDNewTextObjects1.length = 0;
gdjs.shopCode.GDNewTextObjects2.length = 0;
gdjs.shopCode.GDGoldCoinObjects1.length = 0;
gdjs.shopCode.GDGoldCoinObjects2.length = 0;
gdjs.shopCode.GDWellatObjects1.length = 0;
gdjs.shopCode.GDWellatObjects2.length = 0;
gdjs.shopCode.GDCopperRedBarObjects1.length = 0;
gdjs.shopCode.GDCopperRedBarObjects2.length = 0;
gdjs.shopCode.GDcoppObjects1.length = 0;
gdjs.shopCode.GDcoppObjects2.length = 0;
gdjs.shopCode.GDGreyButtonObjects1.length = 0;
gdjs.shopCode.GDGreyButtonObjects2.length = 0;
gdjs.shopCode.GDYellowButton3Objects1.length = 0;
gdjs.shopCode.GDYellowButton3Objects2.length = 0;
gdjs.shopCode.GDYellowButton4Objects1.length = 0;
gdjs.shopCode.GDYellowButton4Objects2.length = 0;
gdjs.shopCode.GDMetalShieldObjects1.length = 0;
gdjs.shopCode.GDMetalShieldObjects2.length = 0;
gdjs.shopCode.GDNewText2Objects1.length = 0;
gdjs.shopCode.GDNewText2Objects2.length = 0;
gdjs.shopCode.GDAgentMikeObjects1.length = 0;
gdjs.shopCode.GDAgentMikeObjects2.length = 0;
gdjs.shopCode.GDFireballObjects1.length = 0;
gdjs.shopCode.GDFireballObjects2.length = 0;

gdjs.shopCode.eventsList2(runtimeScene);
gdjs.shopCode.GDAgentMikeObjects1.length = 0;
gdjs.shopCode.GDAgentMikeObjects2.length = 0;
gdjs.shopCode.GDNewSpriteObjects1.length = 0;
gdjs.shopCode.GDNewSpriteObjects2.length = 0;
gdjs.shopCode.GDYellowButtonObjects1.length = 0;
gdjs.shopCode.GDYellowButtonObjects2.length = 0;
gdjs.shopCode.GDYellowButton2Objects1.length = 0;
gdjs.shopCode.GDYellowButton2Objects2.length = 0;
gdjs.shopCode.GDIronHelmetObjects1.length = 0;
gdjs.shopCode.GDIronHelmetObjects2.length = 0;
gdjs.shopCode.GDIronChestplateObjects1.length = 0;
gdjs.shopCode.GDIronChestplateObjects2.length = 0;
gdjs.shopCode.GDRedPotionObjects1.length = 0;
gdjs.shopCode.GDRedPotionObjects2.length = 0;
gdjs.shopCode.GDNewTextObjects1.length = 0;
gdjs.shopCode.GDNewTextObjects2.length = 0;
gdjs.shopCode.GDGoldCoinObjects1.length = 0;
gdjs.shopCode.GDGoldCoinObjects2.length = 0;
gdjs.shopCode.GDWellatObjects1.length = 0;
gdjs.shopCode.GDWellatObjects2.length = 0;
gdjs.shopCode.GDCopperRedBarObjects1.length = 0;
gdjs.shopCode.GDCopperRedBarObjects2.length = 0;
gdjs.shopCode.GDcoppObjects1.length = 0;
gdjs.shopCode.GDcoppObjects2.length = 0;
gdjs.shopCode.GDGreyButtonObjects1.length = 0;
gdjs.shopCode.GDGreyButtonObjects2.length = 0;
gdjs.shopCode.GDYellowButton3Objects1.length = 0;
gdjs.shopCode.GDYellowButton3Objects2.length = 0;
gdjs.shopCode.GDYellowButton4Objects1.length = 0;
gdjs.shopCode.GDYellowButton4Objects2.length = 0;
gdjs.shopCode.GDMetalShieldObjects1.length = 0;
gdjs.shopCode.GDMetalShieldObjects2.length = 0;
gdjs.shopCode.GDNewText2Objects1.length = 0;
gdjs.shopCode.GDNewText2Objects2.length = 0;
gdjs.shopCode.GDAgentMikeObjects1.length = 0;
gdjs.shopCode.GDAgentMikeObjects2.length = 0;
gdjs.shopCode.GDFireballObjects1.length = 0;
gdjs.shopCode.GDFireballObjects2.length = 0;


return;

}

gdjs['shopCode'] = gdjs.shopCode;
