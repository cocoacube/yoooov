gdjs._21305_37197_32_30028_38754Code = {};
gdjs._21305_37197_32_30028_38754Code.localVariables = [];
gdjs._21305_37197_32_30028_38754Code.GDGreyButtonObjects1= [];
gdjs._21305_37197_32_30028_38754Code.GDGreyButtonObjects2= [];
gdjs._21305_37197_32_30028_38754Code.GDGreyButton2Objects1= [];
gdjs._21305_37197_32_30028_38754Code.GDGreyButton2Objects2= [];
gdjs._21305_37197_32_30028_38754Code.GDCloseRoundButtonObjects1= [];
gdjs._21305_37197_32_30028_38754Code.GDCloseRoundButtonObjects2= [];


gdjs._21305_37197_32_30028_38754Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreyButton"), gdjs._21305_37197_32_30028_38754Code.GDGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._21305_37197_32_30028_38754Code.GDGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs._21305_37197_32_30028_38754Code.GDGreyButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._21305_37197_32_30028_38754Code.GDGreyButtonObjects1[k] = gdjs._21305_37197_32_30028_38754Code.GDGreyButtonObjects1[i];
        ++k;
    }
}
gdjs._21305_37197_32_30028_38754Code.GDGreyButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "游戏界面", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CloseRoundButton"), gdjs._21305_37197_32_30028_38754Code.GDCloseRoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._21305_37197_32_30028_38754Code.GDCloseRoundButtonObjects1.length;i<l;++i) {
    if ( gdjs._21305_37197_32_30028_38754Code.GDCloseRoundButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._21305_37197_32_30028_38754Code.GDCloseRoundButtonObjects1[k] = gdjs._21305_37197_32_30028_38754Code.GDCloseRoundButtonObjects1[i];
        ++k;
    }
}
gdjs._21305_37197_32_30028_38754Code.GDCloseRoundButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "开始界面", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._21305_37197_32_30028_38754Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._21305_37197_32_30028_38754Code.GDGreyButtonObjects1.length = 0;
gdjs._21305_37197_32_30028_38754Code.GDGreyButtonObjects2.length = 0;
gdjs._21305_37197_32_30028_38754Code.GDGreyButton2Objects1.length = 0;
gdjs._21305_37197_32_30028_38754Code.GDGreyButton2Objects2.length = 0;
gdjs._21305_37197_32_30028_38754Code.GDCloseRoundButtonObjects1.length = 0;
gdjs._21305_37197_32_30028_38754Code.GDCloseRoundButtonObjects2.length = 0;

gdjs._21305_37197_32_30028_38754Code.eventsList0(runtimeScene);
gdjs._21305_37197_32_30028_38754Code.GDGreyButtonObjects1.length = 0;
gdjs._21305_37197_32_30028_38754Code.GDGreyButtonObjects2.length = 0;
gdjs._21305_37197_32_30028_38754Code.GDGreyButton2Objects1.length = 0;
gdjs._21305_37197_32_30028_38754Code.GDGreyButton2Objects2.length = 0;
gdjs._21305_37197_32_30028_38754Code.GDCloseRoundButtonObjects1.length = 0;
gdjs._21305_37197_32_30028_38754Code.GDCloseRoundButtonObjects2.length = 0;


return;

}

gdjs['_21305_37197_32_30028_38754Code'] = gdjs._21305_37197_32_30028_38754Code;
