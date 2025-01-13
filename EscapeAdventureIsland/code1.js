gdjs._20320_27515_20102Code = {};
gdjs._20320_27515_20102Code.localVariables = [];
gdjs._20320_27515_20102Code.GDNewSpriteObjects1= [];
gdjs._20320_27515_20102Code.GDNewSpriteObjects2= [];
gdjs._20320_27515_20102Code.GDNewSprite2Objects1= [];
gdjs._20320_27515_20102Code.GDNewSprite2Objects2= [];
gdjs._20320_27515_20102Code.GDNewTextObjects1= [];
gdjs._20320_27515_20102Code.GDNewTextObjects2= [];
gdjs._20320_27515_20102Code.GDBlackDecoratedButtonObjects1= [];
gdjs._20320_27515_20102Code.GDBlackDecoratedButtonObjects2= [];
gdjs._20320_27515_20102Code.GDYButtonObjects1= [];
gdjs._20320_27515_20102Code.GDYButtonObjects2= [];


gdjs._20320_27515_20102Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs._20320_27515_20102Code.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20320_27515_20102Code.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs._20320_27515_20102Code.GDBlackDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20320_27515_20102Code.GDBlackDecoratedButtonObjects1[k] = gdjs._20320_27515_20102Code.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs._20320_27515_20102Code.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "第1关（A区）", false);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


};

gdjs._20320_27515_20102Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._20320_27515_20102Code.GDNewSpriteObjects1.length = 0;
gdjs._20320_27515_20102Code.GDNewSpriteObjects2.length = 0;
gdjs._20320_27515_20102Code.GDNewSprite2Objects1.length = 0;
gdjs._20320_27515_20102Code.GDNewSprite2Objects2.length = 0;
gdjs._20320_27515_20102Code.GDNewTextObjects1.length = 0;
gdjs._20320_27515_20102Code.GDNewTextObjects2.length = 0;
gdjs._20320_27515_20102Code.GDBlackDecoratedButtonObjects1.length = 0;
gdjs._20320_27515_20102Code.GDBlackDecoratedButtonObjects2.length = 0;
gdjs._20320_27515_20102Code.GDYButtonObjects1.length = 0;
gdjs._20320_27515_20102Code.GDYButtonObjects2.length = 0;

gdjs._20320_27515_20102Code.eventsList0(runtimeScene);
gdjs._20320_27515_20102Code.GDNewSpriteObjects1.length = 0;
gdjs._20320_27515_20102Code.GDNewSpriteObjects2.length = 0;
gdjs._20320_27515_20102Code.GDNewSprite2Objects1.length = 0;
gdjs._20320_27515_20102Code.GDNewSprite2Objects2.length = 0;
gdjs._20320_27515_20102Code.GDNewTextObjects1.length = 0;
gdjs._20320_27515_20102Code.GDNewTextObjects2.length = 0;
gdjs._20320_27515_20102Code.GDBlackDecoratedButtonObjects1.length = 0;
gdjs._20320_27515_20102Code.GDBlackDecoratedButtonObjects2.length = 0;
gdjs._20320_27515_20102Code.GDYButtonObjects1.length = 0;
gdjs._20320_27515_20102Code.GDYButtonObjects2.length = 0;


return;

}

gdjs['_20320_27515_20102Code'] = gdjs._20320_27515_20102Code;
