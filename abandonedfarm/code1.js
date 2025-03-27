gdjs._24320_22987_30028_38754Code = {};
gdjs._24320_22987_30028_38754Code.localVariables = [];
gdjs._24320_22987_30028_38754Code.GDCloseRoundButtonObjects1= [];
gdjs._24320_22987_30028_38754Code.GDCloseRoundButtonObjects2= [];
gdjs._24320_22987_30028_38754Code.GDNewSpriteObjects1= [];
gdjs._24320_22987_30028_38754Code.GDNewSpriteObjects2= [];
gdjs._24320_22987_30028_38754Code.GDNewTextObjects1= [];
gdjs._24320_22987_30028_38754Code.GDNewTextObjects2= [];
gdjs._24320_22987_30028_38754Code.GDNewText2Objects1= [];
gdjs._24320_22987_30028_38754Code.GDNewText2Objects2= [];
gdjs._24320_22987_30028_38754Code.GDOrangeButtonWithStoneFrameObjects1= [];
gdjs._24320_22987_30028_38754Code.GDOrangeButtonWithStoneFrameObjects2= [];


gdjs._24320_22987_30028_38754Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._24320_22987_30028_38754Code.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._24320_22987_30028_38754Code.GDNewTextObjects1.length;i<l;++i) {
    if ( gdjs._24320_22987_30028_38754Code.GDNewTextObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._24320_22987_30028_38754Code.GDNewTextObjects1[k] = gdjs._24320_22987_30028_38754Code.GDNewTextObjects1[i];
        ++k;
    }
}
gdjs._24320_22987_30028_38754Code.GDNewTextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "匹配 界面", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._24320_22987_30028_38754Code.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._24320_22987_30028_38754Code.GDNewText2Objects1.length;i<l;++i) {
    if ( gdjs._24320_22987_30028_38754Code.GDNewText2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._24320_22987_30028_38754Code.GDNewText2Objects1[k] = gdjs._24320_22987_30028_38754Code.GDNewText2Objects1[i];
        ++k;
    }
}
gdjs._24320_22987_30028_38754Code.GDNewText2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "充值");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OrangeButtonWithStoneFrame"), gdjs._24320_22987_30028_38754Code.GDOrangeButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._24320_22987_30028_38754Code.GDOrangeButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs._24320_22987_30028_38754Code.GDOrangeButtonWithStoneFrameObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._24320_22987_30028_38754Code.GDOrangeButtonWithStoneFrameObjects1[k] = gdjs._24320_22987_30028_38754Code.GDOrangeButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs._24320_22987_30028_38754Code.GDOrangeButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "开始开始开始", false);
}}

}


};

gdjs._24320_22987_30028_38754Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._24320_22987_30028_38754Code.GDCloseRoundButtonObjects1.length = 0;
gdjs._24320_22987_30028_38754Code.GDCloseRoundButtonObjects2.length = 0;
gdjs._24320_22987_30028_38754Code.GDNewSpriteObjects1.length = 0;
gdjs._24320_22987_30028_38754Code.GDNewSpriteObjects2.length = 0;
gdjs._24320_22987_30028_38754Code.GDNewTextObjects1.length = 0;
gdjs._24320_22987_30028_38754Code.GDNewTextObjects2.length = 0;
gdjs._24320_22987_30028_38754Code.GDNewText2Objects1.length = 0;
gdjs._24320_22987_30028_38754Code.GDNewText2Objects2.length = 0;
gdjs._24320_22987_30028_38754Code.GDOrangeButtonWithStoneFrameObjects1.length = 0;
gdjs._24320_22987_30028_38754Code.GDOrangeButtonWithStoneFrameObjects2.length = 0;

gdjs._24320_22987_30028_38754Code.eventsList0(runtimeScene);
gdjs._24320_22987_30028_38754Code.GDCloseRoundButtonObjects1.length = 0;
gdjs._24320_22987_30028_38754Code.GDCloseRoundButtonObjects2.length = 0;
gdjs._24320_22987_30028_38754Code.GDNewSpriteObjects1.length = 0;
gdjs._24320_22987_30028_38754Code.GDNewSpriteObjects2.length = 0;
gdjs._24320_22987_30028_38754Code.GDNewTextObjects1.length = 0;
gdjs._24320_22987_30028_38754Code.GDNewTextObjects2.length = 0;
gdjs._24320_22987_30028_38754Code.GDNewText2Objects1.length = 0;
gdjs._24320_22987_30028_38754Code.GDNewText2Objects2.length = 0;
gdjs._24320_22987_30028_38754Code.GDOrangeButtonWithStoneFrameObjects1.length = 0;
gdjs._24320_22987_30028_38754Code.GDOrangeButtonWithStoneFrameObjects2.length = 0;


return;

}

gdjs['_24320_22987_30028_38754Code'] = gdjs._24320_22987_30028_38754Code;
