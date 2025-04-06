gdjs.yhgffCode = {};
gdjs.yhgffCode.localVariables = [];
gdjs.yhgffCode.GDFirefoxObjects1= [];
gdjs.yhgffCode.GDFirefoxObjects2= [];
gdjs.yhgffCode.GDGround3Objects1= [];
gdjs.yhgffCode.GDGround3Objects2= [];
gdjs.yhgffCode.GDNewTextObjects1= [];
gdjs.yhgffCode.GDNewTextObjects2= [];
gdjs.yhgffCode.GDKnightObjects1= [];
gdjs.yhgffCode.GDKnightObjects2= [];
gdjs.yhgffCode.GDHessoniteGemstoneObjects1= [];
gdjs.yhgffCode.GDHessoniteGemstoneObjects2= [];
gdjs.yhgffCode.GDEmeraldGemObjects1= [];
gdjs.yhgffCode.GDEmeraldGemObjects2= [];
gdjs.yhgffCode.GDSapphireRingObjects1= [];
gdjs.yhgffCode.GDSapphireRingObjects2= [];
gdjs.yhgffCode.GDGoldCoinObjects1= [];
gdjs.yhgffCode.GDGoldCoinObjects2= [];
gdjs.yhgffCode.GDRubyRingObjects1= [];
gdjs.yhgffCode.GDRubyRingObjects2= [];
gdjs.yhgffCode.GDSapphireGemObjects1= [];
gdjs.yhgffCode.GDSapphireGemObjects2= [];
gdjs.yhgffCode.GDGoldIngotObjects1= [];
gdjs.yhgffCode.GDGoldIngotObjects2= [];
gdjs.yhgffCode.GDOrangeButtonWithStoneFrame1Objects1= [];
gdjs.yhgffCode.GDOrangeButtonWithStoneFrame1Objects2= [];
gdjs.yhgffCode.GDOrangeButtonWithStoneFrame2Objects1= [];
gdjs.yhgffCode.GDOrangeButtonWithStoneFrame2Objects2= [];
gdjs.yhgffCode.GDLeafRangerObjects1= [];
gdjs.yhgffCode.GDLeafRangerObjects2= [];
gdjs.yhgffCode.GDOrangeButtonWithStoneFrame3Objects1= [];
gdjs.yhgffCode.GDOrangeButtonWithStoneFrame3Objects2= [];


gdjs.yhgffCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OrangeButtonWithStoneFrame1"), gdjs.yhgffCode.GDOrangeButtonWithStoneFrame1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.yhgffCode.GDOrangeButtonWithStoneFrame1Objects1.length;i<l;++i) {
    if ( gdjs.yhgffCode.GDOrangeButtonWithStoneFrame1Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.yhgffCode.GDOrangeButtonWithStoneFrame1Objects1[k] = gdjs.yhgffCode.GDOrangeButtonWithStoneFrame1Objects1[i];
        ++k;
    }
}
gdjs.yhgffCode.GDOrangeButtonWithStoneFrame1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OrangeButtonWithStoneFrame2"), gdjs.yhgffCode.GDOrangeButtonWithStoneFrame2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.yhgffCode.GDOrangeButtonWithStoneFrame2Objects1.length;i<l;++i) {
    if ( gdjs.yhgffCode.GDOrangeButtonWithStoneFrame2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.yhgffCode.GDOrangeButtonWithStoneFrame2Objects1[k] = gdjs.yhgffCode.GDOrangeButtonWithStoneFrame2Objects1[i];
        ++k;
    }
}
gdjs.yhgffCode.GDOrangeButtonWithStoneFrame2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OrangeButtonWithStoneFrame3"), gdjs.yhgffCode.GDOrangeButtonWithStoneFrame3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.yhgffCode.GDOrangeButtonWithStoneFrame3Objects1.length;i<l;++i) {
    if ( gdjs.yhgffCode.GDOrangeButtonWithStoneFrame3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.yhgffCode.GDOrangeButtonWithStoneFrame3Objects1[k] = gdjs.yhgffCode.GDOrangeButtonWithStoneFrame3Objects1[i];
        ++k;
    }
}
gdjs.yhgffCode.GDOrangeButtonWithStoneFrame3Objects1.length = k;
if (isConditionTrue_0) {
}

}


};

gdjs.yhgffCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.yhgffCode.GDFirefoxObjects1.length = 0;
gdjs.yhgffCode.GDFirefoxObjects2.length = 0;
gdjs.yhgffCode.GDGround3Objects1.length = 0;
gdjs.yhgffCode.GDGround3Objects2.length = 0;
gdjs.yhgffCode.GDNewTextObjects1.length = 0;
gdjs.yhgffCode.GDNewTextObjects2.length = 0;
gdjs.yhgffCode.GDKnightObjects1.length = 0;
gdjs.yhgffCode.GDKnightObjects2.length = 0;
gdjs.yhgffCode.GDHessoniteGemstoneObjects1.length = 0;
gdjs.yhgffCode.GDHessoniteGemstoneObjects2.length = 0;
gdjs.yhgffCode.GDEmeraldGemObjects1.length = 0;
gdjs.yhgffCode.GDEmeraldGemObjects2.length = 0;
gdjs.yhgffCode.GDSapphireRingObjects1.length = 0;
gdjs.yhgffCode.GDSapphireRingObjects2.length = 0;
gdjs.yhgffCode.GDGoldCoinObjects1.length = 0;
gdjs.yhgffCode.GDGoldCoinObjects2.length = 0;
gdjs.yhgffCode.GDRubyRingObjects1.length = 0;
gdjs.yhgffCode.GDRubyRingObjects2.length = 0;
gdjs.yhgffCode.GDSapphireGemObjects1.length = 0;
gdjs.yhgffCode.GDSapphireGemObjects2.length = 0;
gdjs.yhgffCode.GDGoldIngotObjects1.length = 0;
gdjs.yhgffCode.GDGoldIngotObjects2.length = 0;
gdjs.yhgffCode.GDOrangeButtonWithStoneFrame1Objects1.length = 0;
gdjs.yhgffCode.GDOrangeButtonWithStoneFrame1Objects2.length = 0;
gdjs.yhgffCode.GDOrangeButtonWithStoneFrame2Objects1.length = 0;
gdjs.yhgffCode.GDOrangeButtonWithStoneFrame2Objects2.length = 0;
gdjs.yhgffCode.GDLeafRangerObjects1.length = 0;
gdjs.yhgffCode.GDLeafRangerObjects2.length = 0;
gdjs.yhgffCode.GDOrangeButtonWithStoneFrame3Objects1.length = 0;
gdjs.yhgffCode.GDOrangeButtonWithStoneFrame3Objects2.length = 0;

gdjs.yhgffCode.eventsList0(runtimeScene);
gdjs.yhgffCode.GDFirefoxObjects1.length = 0;
gdjs.yhgffCode.GDFirefoxObjects2.length = 0;
gdjs.yhgffCode.GDGround3Objects1.length = 0;
gdjs.yhgffCode.GDGround3Objects2.length = 0;
gdjs.yhgffCode.GDNewTextObjects1.length = 0;
gdjs.yhgffCode.GDNewTextObjects2.length = 0;
gdjs.yhgffCode.GDKnightObjects1.length = 0;
gdjs.yhgffCode.GDKnightObjects2.length = 0;
gdjs.yhgffCode.GDHessoniteGemstoneObjects1.length = 0;
gdjs.yhgffCode.GDHessoniteGemstoneObjects2.length = 0;
gdjs.yhgffCode.GDEmeraldGemObjects1.length = 0;
gdjs.yhgffCode.GDEmeraldGemObjects2.length = 0;
gdjs.yhgffCode.GDSapphireRingObjects1.length = 0;
gdjs.yhgffCode.GDSapphireRingObjects2.length = 0;
gdjs.yhgffCode.GDGoldCoinObjects1.length = 0;
gdjs.yhgffCode.GDGoldCoinObjects2.length = 0;
gdjs.yhgffCode.GDRubyRingObjects1.length = 0;
gdjs.yhgffCode.GDRubyRingObjects2.length = 0;
gdjs.yhgffCode.GDSapphireGemObjects1.length = 0;
gdjs.yhgffCode.GDSapphireGemObjects2.length = 0;
gdjs.yhgffCode.GDGoldIngotObjects1.length = 0;
gdjs.yhgffCode.GDGoldIngotObjects2.length = 0;
gdjs.yhgffCode.GDOrangeButtonWithStoneFrame1Objects1.length = 0;
gdjs.yhgffCode.GDOrangeButtonWithStoneFrame1Objects2.length = 0;
gdjs.yhgffCode.GDOrangeButtonWithStoneFrame2Objects1.length = 0;
gdjs.yhgffCode.GDOrangeButtonWithStoneFrame2Objects2.length = 0;
gdjs.yhgffCode.GDLeafRangerObjects1.length = 0;
gdjs.yhgffCode.GDLeafRangerObjects2.length = 0;
gdjs.yhgffCode.GDOrangeButtonWithStoneFrame3Objects1.length = 0;
gdjs.yhgffCode.GDOrangeButtonWithStoneFrame3Objects2.length = 0;


return;

}

gdjs['yhgffCode'] = gdjs.yhgffCode;
