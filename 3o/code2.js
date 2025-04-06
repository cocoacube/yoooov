gdjs.rrhdsCode = {};
gdjs.rrhdsCode.localVariables = [];
gdjs.rrhdsCode.GDBlueSpaceObjects1= [];
gdjs.rrhdsCode.GDBlueSpaceObjects2= [];
gdjs.rrhdsCode.GDNewTextObjects1= [];
gdjs.rrhdsCode.GDNewTextObjects2= [];
gdjs.rrhdsCode.GDKnightObjects1= [];
gdjs.rrhdsCode.GDKnightObjects2= [];
gdjs.rrhdsCode.GDCannonBallObjects1= [];
gdjs.rrhdsCode.GDCannonBallObjects2= [];
gdjs.rrhdsCode.GD_9520877_9526469_9519968_9527425Objects1= [];
gdjs.rrhdsCode.GD_9520877_9526469_9519968_9527425Objects2= [];
gdjs.rrhdsCode.GDLeafRangerObjects1= [];
gdjs.rrhdsCode.GDLeafRangerObjects2= [];


gdjs.rrhdsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("再来一次"), gdjs.rrhdsCode.GD_9520877_9526469_9519968_9527425Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.rrhdsCode.GD_9520877_9526469_9519968_9527425Objects1.length;i<l;++i) {
    if ( gdjs.rrhdsCode.GD_9520877_9526469_9519968_9527425Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.rrhdsCode.GD_9520877_9526469_9519968_9527425Objects1[k] = gdjs.rrhdsCode.GD_9520877_9526469_9519968_9527425Objects1[i];
        ++k;
    }
}
gdjs.rrhdsCode.GD_9520877_9526469_9519968_9527425Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


};

gdjs.rrhdsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.rrhdsCode.GDBlueSpaceObjects1.length = 0;
gdjs.rrhdsCode.GDBlueSpaceObjects2.length = 0;
gdjs.rrhdsCode.GDNewTextObjects1.length = 0;
gdjs.rrhdsCode.GDNewTextObjects2.length = 0;
gdjs.rrhdsCode.GDKnightObjects1.length = 0;
gdjs.rrhdsCode.GDKnightObjects2.length = 0;
gdjs.rrhdsCode.GDCannonBallObjects1.length = 0;
gdjs.rrhdsCode.GDCannonBallObjects2.length = 0;
gdjs.rrhdsCode.GD_9520877_9526469_9519968_9527425Objects1.length = 0;
gdjs.rrhdsCode.GD_9520877_9526469_9519968_9527425Objects2.length = 0;
gdjs.rrhdsCode.GDLeafRangerObjects1.length = 0;
gdjs.rrhdsCode.GDLeafRangerObjects2.length = 0;

gdjs.rrhdsCode.eventsList0(runtimeScene);
gdjs.rrhdsCode.GDBlueSpaceObjects1.length = 0;
gdjs.rrhdsCode.GDBlueSpaceObjects2.length = 0;
gdjs.rrhdsCode.GDNewTextObjects1.length = 0;
gdjs.rrhdsCode.GDNewTextObjects2.length = 0;
gdjs.rrhdsCode.GDKnightObjects1.length = 0;
gdjs.rrhdsCode.GDKnightObjects2.length = 0;
gdjs.rrhdsCode.GDCannonBallObjects1.length = 0;
gdjs.rrhdsCode.GDCannonBallObjects2.length = 0;
gdjs.rrhdsCode.GD_9520877_9526469_9519968_9527425Objects1.length = 0;
gdjs.rrhdsCode.GD_9520877_9526469_9519968_9527425Objects2.length = 0;
gdjs.rrhdsCode.GDLeafRangerObjects1.length = 0;
gdjs.rrhdsCode.GDLeafRangerObjects2.length = 0;


return;

}

gdjs['rrhdsCode'] = gdjs.rrhdsCode;
