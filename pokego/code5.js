gdjs._31934_28789Code = {};
gdjs._31934_28789Code.localVariables = [];
gdjs._31934_28789Code.GDNewTextObjects1= [];
gdjs._31934_28789Code.GDNewTextObjects2= [];
gdjs._31934_28789Code.GDNewText2Objects1= [];
gdjs._31934_28789Code.GDNewText2Objects2= [];
gdjs._31934_28789Code.GDNewText3Objects1= [];
gdjs._31934_28789Code.GDNewText3Objects2= [];
gdjs._31934_28789Code.GDNewText4Objects1= [];
gdjs._31934_28789Code.GDNewText4Objects2= [];
gdjs._31934_28789Code.GDNewText5Objects1= [];
gdjs._31934_28789Code.GDNewText5Objects2= [];
gdjs._31934_28789Code.GDNewText6Objects1= [];
gdjs._31934_28789Code.GDNewText6Objects2= [];
gdjs._31934_28789Code.GDNewText7Objects1= [];
gdjs._31934_28789Code.GDNewText7Objects2= [];
gdjs._31934_28789Code.GDBlueBoxObjects1= [];
gdjs._31934_28789Code.GDBlueBoxObjects2= [];
gdjs._31934_28789Code.GDNewText8Objects1= [];
gdjs._31934_28789Code.GDNewText8Objects2= [];
gdjs._31934_28789Code.GDTransitionObjects1= [];
gdjs._31934_28789Code.GDTransitionObjects2= [];
gdjs._31934_28789Code.GDTextBorderObjects1= [];
gdjs._31934_28789Code.GDTextBorderObjects2= [];
gdjs._31934_28789Code.GD_9530002_9536154_9524525_9534521Objects1= [];
gdjs._31934_28789Code.GD_9530002_9536154_9524525_9534521Objects2= [];
gdjs._31934_28789Code.GD_9526222_9536890_9529699Objects1= [];
gdjs._31934_28789Code.GD_9526222_9536890_9529699Objects2= [];
gdjs._31934_28789Code.GD_9523567_9528779_9540857Objects1= [];
gdjs._31934_28789Code.GD_9523567_9528779_9540857Objects2= [];
gdjs._31934_28789Code.GDn_9595p_9595cObjects1= [];
gdjs._31934_28789Code.GDn_9595p_9595cObjects2= [];
gdjs._31934_28789Code.GD_9522823_9524072_9529699Objects1= [];
gdjs._31934_28789Code.GD_9522823_9524072_9529699Objects2= [];
gdjs._31934_28789Code.GD_9522937_9534521_9531181_9523376Objects1= [];
gdjs._31934_28789Code.GD_9522937_9534521_9531181_9523376Objects2= [];
gdjs._31934_28789Code.GD_9535010_9531354_9524231Objects1= [];
gdjs._31934_28789Code.GD_9535010_9531354_9524231Objects2= [];
gdjs._31934_28789Code.GD_9523567_9525331_9530707Objects1= [];
gdjs._31934_28789Code.GD_9523567_9525331_9530707Objects2= [];
gdjs._31934_28789Code.GD_9530422_9527431_9521345Objects1= [];
gdjs._31934_28789Code.GD_9530422_9527431_9521345Objects2= [];
gdjs._31934_28789Code.GD_9540493_9522068_9520861Objects1= [];
gdjs._31934_28789Code.GD_9540493_9522068_9520861Objects2= [];
gdjs._31934_28789Code.GD_9526480_9523612_9540863Objects1= [];
gdjs._31934_28789Code.GD_9526480_9523612_9540863Objects2= [];
gdjs._31934_28789Code.GDmissObjects1= [];
gdjs._31934_28789Code.GDmissObjects2= [];
gdjs._31934_28789Code.GDNewSprite3Objects1= [];
gdjs._31934_28789Code.GDNewSprite3Objects2= [];
gdjs._31934_28789Code.GD_9529609Objects1= [];
gdjs._31934_28789Code.GD_9529609Objects2= [];
gdjs._31934_28789Code.GDWhiteSleekButtonObjects1= [];
gdjs._31934_28789Code.GDWhiteSleekButtonObjects2= [];
gdjs._31934_28789Code.GD_9595111111111Objects1= [];
gdjs._31934_28789Code.GD_9595111111111Objects2= [];


gdjs._31934_28789Code.asyncCallback23765452 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._31934_28789Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Overworld", false);
}gdjs._31934_28789Code.localVariables.length = 0;
}
gdjs._31934_28789Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._31934_28789Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs._31934_28789Code.asyncCallback23765452(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._31934_28789Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("小拳石"), gdjs._31934_28789Code.GD_9523567_9525331_9530707Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_28789Code.GD_9523567_9525331_9530707Objects1.length;i<l;++i) {
    if ( gdjs._31934_28789Code.GD_9523567_9525331_9530707Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._31934_28789Code.GD_9523567_9525331_9530707Objects1[k] = gdjs._31934_28789Code.GD_9523567_9525331_9530707Objects1[i];
        ++k;
    }
}
gdjs._31934_28789Code.GD_9523567_9525331_9530707Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("盖欧卡"), gdjs._31934_28789Code.GD_9530422_9527431_9521345Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_28789Code.GD_9530422_9527431_9521345Objects1.length;i<l;++i) {
    if ( gdjs._31934_28789Code.GD_9530422_9527431_9521345Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._31934_28789Code.GD_9530422_9527431_9521345Objects1[k] = gdjs._31934_28789Code.GD_9530422_9527431_9521345Objects1[i];
        ++k;
    }
}
gdjs._31934_28789Code.GD_9530422_9527431_9521345Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("小火龙"), gdjs._31934_28789Code.GD_9523567_9528779_9540857Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_28789Code.GD_9523567_9528779_9540857Objects1.length;i<l;++i) {
    if ( gdjs._31934_28789Code.GD_9523567_9528779_9540857Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._31934_28789Code.GD_9523567_9528779_9540857Objects1[k] = gdjs._31934_28789Code.GD_9523567_9528779_9540857Objects1[i];
        ++k;
    }
}
gdjs._31934_28789Code.GD_9523567_9528779_9540857Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("妙蛙种子"), gdjs._31934_28789Code.GD_9522937_9534521_9531181_9523376Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_28789Code.GD_9522937_9534521_9531181_9523376Objects1.length;i<l;++i) {
    if ( gdjs._31934_28789Code.GD_9522937_9534521_9531181_9523376Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._31934_28789Code.GD_9522937_9534521_9531181_9523376Objects1[k] = gdjs._31934_28789Code.GD_9522937_9534521_9531181_9523376Objects1[i];
        ++k;
    }
}
gdjs._31934_28789Code.GD_9522937_9534521_9531181_9523376Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(4);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("裂空座"), gdjs._31934_28789Code.GD_9535010_9531354_9524231Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_28789Code.GD_9535010_9531354_9524231Objects1.length;i<l;++i) {
    if ( gdjs._31934_28789Code.GD_9535010_9531354_9524231Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._31934_28789Code.GD_9535010_9531354_9524231Objects1[k] = gdjs._31934_28789Code.GD_9535010_9531354_9524231Objects1[i];
        ++k;
    }
}
gdjs._31934_28789Code.GD_9535010_9531354_9524231Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("鸭嘴兽"), gdjs._31934_28789Code.GD_9540493_9522068_9520861Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_28789Code.GD_9540493_9522068_9520861Objects1.length;i<l;++i) {
    if ( gdjs._31934_28789Code.GD_9540493_9522068_9520861Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._31934_28789Code.GD_9540493_9522068_9520861Objects1[k] = gdjs._31934_28789Code.GD_9540493_9522068_9520861Objects1[i];
        ++k;
    }
}
gdjs._31934_28789Code.GD_9540493_9522068_9520861Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(6);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("杰尼龟"), gdjs._31934_28789Code.GD_9526480_9523612_9540863Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_28789Code.GD_9526480_9523612_9540863Objects1.length;i<l;++i) {
    if ( gdjs._31934_28789Code.GD_9526480_9523612_9540863Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._31934_28789Code.GD_9526480_9523612_9540863Objects1[k] = gdjs._31934_28789Code.GD_9526480_9523612_9540863Objects1[i];
        ++k;
    }
}
gdjs._31934_28789Code.GD_9526480_9523612_9540863Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(7);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs._31934_28789Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("_111111111"), gdjs._31934_28789Code.GD_9595111111111Objects1);
{for(var i = 0, len = gdjs._31934_28789Code.GD_9595111111111Objects1.length ;i < len;++i) {
    gdjs._31934_28789Code.GD_9595111111111Objects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


};

gdjs._31934_28789Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._31934_28789Code.GDNewTextObjects1.length = 0;
gdjs._31934_28789Code.GDNewTextObjects2.length = 0;
gdjs._31934_28789Code.GDNewText2Objects1.length = 0;
gdjs._31934_28789Code.GDNewText2Objects2.length = 0;
gdjs._31934_28789Code.GDNewText3Objects1.length = 0;
gdjs._31934_28789Code.GDNewText3Objects2.length = 0;
gdjs._31934_28789Code.GDNewText4Objects1.length = 0;
gdjs._31934_28789Code.GDNewText4Objects2.length = 0;
gdjs._31934_28789Code.GDNewText5Objects1.length = 0;
gdjs._31934_28789Code.GDNewText5Objects2.length = 0;
gdjs._31934_28789Code.GDNewText6Objects1.length = 0;
gdjs._31934_28789Code.GDNewText6Objects2.length = 0;
gdjs._31934_28789Code.GDNewText7Objects1.length = 0;
gdjs._31934_28789Code.GDNewText7Objects2.length = 0;
gdjs._31934_28789Code.GDBlueBoxObjects1.length = 0;
gdjs._31934_28789Code.GDBlueBoxObjects2.length = 0;
gdjs._31934_28789Code.GDNewText8Objects1.length = 0;
gdjs._31934_28789Code.GDNewText8Objects2.length = 0;
gdjs._31934_28789Code.GDTransitionObjects1.length = 0;
gdjs._31934_28789Code.GDTransitionObjects2.length = 0;
gdjs._31934_28789Code.GDTextBorderObjects1.length = 0;
gdjs._31934_28789Code.GDTextBorderObjects2.length = 0;
gdjs._31934_28789Code.GD_9530002_9536154_9524525_9534521Objects1.length = 0;
gdjs._31934_28789Code.GD_9530002_9536154_9524525_9534521Objects2.length = 0;
gdjs._31934_28789Code.GD_9526222_9536890_9529699Objects1.length = 0;
gdjs._31934_28789Code.GD_9526222_9536890_9529699Objects2.length = 0;
gdjs._31934_28789Code.GD_9523567_9528779_9540857Objects1.length = 0;
gdjs._31934_28789Code.GD_9523567_9528779_9540857Objects2.length = 0;
gdjs._31934_28789Code.GDn_9595p_9595cObjects1.length = 0;
gdjs._31934_28789Code.GDn_9595p_9595cObjects2.length = 0;
gdjs._31934_28789Code.GD_9522823_9524072_9529699Objects1.length = 0;
gdjs._31934_28789Code.GD_9522823_9524072_9529699Objects2.length = 0;
gdjs._31934_28789Code.GD_9522937_9534521_9531181_9523376Objects1.length = 0;
gdjs._31934_28789Code.GD_9522937_9534521_9531181_9523376Objects2.length = 0;
gdjs._31934_28789Code.GD_9535010_9531354_9524231Objects1.length = 0;
gdjs._31934_28789Code.GD_9535010_9531354_9524231Objects2.length = 0;
gdjs._31934_28789Code.GD_9523567_9525331_9530707Objects1.length = 0;
gdjs._31934_28789Code.GD_9523567_9525331_9530707Objects2.length = 0;
gdjs._31934_28789Code.GD_9530422_9527431_9521345Objects1.length = 0;
gdjs._31934_28789Code.GD_9530422_9527431_9521345Objects2.length = 0;
gdjs._31934_28789Code.GD_9540493_9522068_9520861Objects1.length = 0;
gdjs._31934_28789Code.GD_9540493_9522068_9520861Objects2.length = 0;
gdjs._31934_28789Code.GD_9526480_9523612_9540863Objects1.length = 0;
gdjs._31934_28789Code.GD_9526480_9523612_9540863Objects2.length = 0;
gdjs._31934_28789Code.GDmissObjects1.length = 0;
gdjs._31934_28789Code.GDmissObjects2.length = 0;
gdjs._31934_28789Code.GDNewSprite3Objects1.length = 0;
gdjs._31934_28789Code.GDNewSprite3Objects2.length = 0;
gdjs._31934_28789Code.GD_9529609Objects1.length = 0;
gdjs._31934_28789Code.GD_9529609Objects2.length = 0;
gdjs._31934_28789Code.GDWhiteSleekButtonObjects1.length = 0;
gdjs._31934_28789Code.GDWhiteSleekButtonObjects2.length = 0;
gdjs._31934_28789Code.GD_9595111111111Objects1.length = 0;
gdjs._31934_28789Code.GD_9595111111111Objects2.length = 0;

gdjs._31934_28789Code.eventsList1(runtimeScene);
gdjs._31934_28789Code.GDNewTextObjects1.length = 0;
gdjs._31934_28789Code.GDNewTextObjects2.length = 0;
gdjs._31934_28789Code.GDNewText2Objects1.length = 0;
gdjs._31934_28789Code.GDNewText2Objects2.length = 0;
gdjs._31934_28789Code.GDNewText3Objects1.length = 0;
gdjs._31934_28789Code.GDNewText3Objects2.length = 0;
gdjs._31934_28789Code.GDNewText4Objects1.length = 0;
gdjs._31934_28789Code.GDNewText4Objects2.length = 0;
gdjs._31934_28789Code.GDNewText5Objects1.length = 0;
gdjs._31934_28789Code.GDNewText5Objects2.length = 0;
gdjs._31934_28789Code.GDNewText6Objects1.length = 0;
gdjs._31934_28789Code.GDNewText6Objects2.length = 0;
gdjs._31934_28789Code.GDNewText7Objects1.length = 0;
gdjs._31934_28789Code.GDNewText7Objects2.length = 0;
gdjs._31934_28789Code.GDBlueBoxObjects1.length = 0;
gdjs._31934_28789Code.GDBlueBoxObjects2.length = 0;
gdjs._31934_28789Code.GDNewText8Objects1.length = 0;
gdjs._31934_28789Code.GDNewText8Objects2.length = 0;
gdjs._31934_28789Code.GDTransitionObjects1.length = 0;
gdjs._31934_28789Code.GDTransitionObjects2.length = 0;
gdjs._31934_28789Code.GDTextBorderObjects1.length = 0;
gdjs._31934_28789Code.GDTextBorderObjects2.length = 0;
gdjs._31934_28789Code.GD_9530002_9536154_9524525_9534521Objects1.length = 0;
gdjs._31934_28789Code.GD_9530002_9536154_9524525_9534521Objects2.length = 0;
gdjs._31934_28789Code.GD_9526222_9536890_9529699Objects1.length = 0;
gdjs._31934_28789Code.GD_9526222_9536890_9529699Objects2.length = 0;
gdjs._31934_28789Code.GD_9523567_9528779_9540857Objects1.length = 0;
gdjs._31934_28789Code.GD_9523567_9528779_9540857Objects2.length = 0;
gdjs._31934_28789Code.GDn_9595p_9595cObjects1.length = 0;
gdjs._31934_28789Code.GDn_9595p_9595cObjects2.length = 0;
gdjs._31934_28789Code.GD_9522823_9524072_9529699Objects1.length = 0;
gdjs._31934_28789Code.GD_9522823_9524072_9529699Objects2.length = 0;
gdjs._31934_28789Code.GD_9522937_9534521_9531181_9523376Objects1.length = 0;
gdjs._31934_28789Code.GD_9522937_9534521_9531181_9523376Objects2.length = 0;
gdjs._31934_28789Code.GD_9535010_9531354_9524231Objects1.length = 0;
gdjs._31934_28789Code.GD_9535010_9531354_9524231Objects2.length = 0;
gdjs._31934_28789Code.GD_9523567_9525331_9530707Objects1.length = 0;
gdjs._31934_28789Code.GD_9523567_9525331_9530707Objects2.length = 0;
gdjs._31934_28789Code.GD_9530422_9527431_9521345Objects1.length = 0;
gdjs._31934_28789Code.GD_9530422_9527431_9521345Objects2.length = 0;
gdjs._31934_28789Code.GD_9540493_9522068_9520861Objects1.length = 0;
gdjs._31934_28789Code.GD_9540493_9522068_9520861Objects2.length = 0;
gdjs._31934_28789Code.GD_9526480_9523612_9540863Objects1.length = 0;
gdjs._31934_28789Code.GD_9526480_9523612_9540863Objects2.length = 0;
gdjs._31934_28789Code.GDmissObjects1.length = 0;
gdjs._31934_28789Code.GDmissObjects2.length = 0;
gdjs._31934_28789Code.GDNewSprite3Objects1.length = 0;
gdjs._31934_28789Code.GDNewSprite3Objects2.length = 0;
gdjs._31934_28789Code.GD_9529609Objects1.length = 0;
gdjs._31934_28789Code.GD_9529609Objects2.length = 0;
gdjs._31934_28789Code.GDWhiteSleekButtonObjects1.length = 0;
gdjs._31934_28789Code.GDWhiteSleekButtonObjects2.length = 0;
gdjs._31934_28789Code.GD_9595111111111Objects1.length = 0;
gdjs._31934_28789Code.GD_9595111111111Objects2.length = 0;


return;

}

gdjs['_31934_28789Code'] = gdjs._31934_28789Code;
