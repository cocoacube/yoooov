gdjs._36893Code = {};
gdjs._36893Code.localVariables = [];
gdjs._36893Code.GDNewTextObjects1= [];
gdjs._36893Code.GDNewTextObjects2= [];
gdjs._36893Code.GDNewText2Objects1= [];
gdjs._36893Code.GDNewText2Objects2= [];
gdjs._36893Code.GDBlackDecoratedButtonObjects1= [];
gdjs._36893Code.GDBlackDecoratedButtonObjects2= [];
gdjs._36893Code.GDWhiteDecoratedButtonObjects1= [];
gdjs._36893Code.GDWhiteDecoratedButtonObjects2= [];
gdjs._36893Code.GDNewText3Objects1= [];
gdjs._36893Code.GDNewText3Objects2= [];
gdjs._36893Code.GDNewText4Objects1= [];
gdjs._36893Code.GDNewText4Objects2= [];
gdjs._36893Code.GDYButtonObjects1= [];
gdjs._36893Code.GDYButtonObjects2= [];


gdjs._36893Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs._36893Code.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36893Code.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs._36893Code.GDBlackDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._36893Code.GDBlackDecoratedButtonObjects1[k] = gdjs._36893Code.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs._36893Code.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "选择页面", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs._36893Code.GDWhiteDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36893Code.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs._36893Code.GDWhiteDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._36893Code.GDWhiteDecoratedButtonObjects1[k] = gdjs._36893Code.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs._36893Code.GDWhiteDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "B区", false);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


};

gdjs._36893Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._36893Code.GDNewTextObjects1.length = 0;
gdjs._36893Code.GDNewTextObjects2.length = 0;
gdjs._36893Code.GDNewText2Objects1.length = 0;
gdjs._36893Code.GDNewText2Objects2.length = 0;
gdjs._36893Code.GDBlackDecoratedButtonObjects1.length = 0;
gdjs._36893Code.GDBlackDecoratedButtonObjects2.length = 0;
gdjs._36893Code.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs._36893Code.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs._36893Code.GDNewText3Objects1.length = 0;
gdjs._36893Code.GDNewText3Objects2.length = 0;
gdjs._36893Code.GDNewText4Objects1.length = 0;
gdjs._36893Code.GDNewText4Objects2.length = 0;
gdjs._36893Code.GDYButtonObjects1.length = 0;
gdjs._36893Code.GDYButtonObjects2.length = 0;

gdjs._36893Code.eventsList0(runtimeScene);
gdjs._36893Code.GDNewTextObjects1.length = 0;
gdjs._36893Code.GDNewTextObjects2.length = 0;
gdjs._36893Code.GDNewText2Objects1.length = 0;
gdjs._36893Code.GDNewText2Objects2.length = 0;
gdjs._36893Code.GDBlackDecoratedButtonObjects1.length = 0;
gdjs._36893Code.GDBlackDecoratedButtonObjects2.length = 0;
gdjs._36893Code.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs._36893Code.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs._36893Code.GDNewText3Objects1.length = 0;
gdjs._36893Code.GDNewText3Objects2.length = 0;
gdjs._36893Code.GDNewText4Objects1.length = 0;
gdjs._36893Code.GDNewText4Objects2.length = 0;
gdjs._36893Code.GDYButtonObjects1.length = 0;
gdjs._36893Code.GDYButtonObjects2.length = 0;


return;

}

gdjs['_36893Code'] = gdjs._36893Code;
