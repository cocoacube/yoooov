gdjs._32467_31639_30011_38754Code = {};
gdjs._32467_31639_30011_38754Code.localVariables = [];
gdjs._32467_31639_30011_38754Code.GDNewSpriteObjects1= [];
gdjs._32467_31639_30011_38754Code.GDNewSpriteObjects2= [];
gdjs._32467_31639_30011_38754Code.GDNewTextObjects1= [];
gdjs._32467_31639_30011_38754Code.GDNewTextObjects2= [];
gdjs._32467_31639_30011_38754Code.GDBlackSquareDecoratedButtonObjects1= [];
gdjs._32467_31639_30011_38754Code.GDBlackSquareDecoratedButtonObjects2= [];


gdjs._32467_31639_30011_38754Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackSquareDecoratedButton"), gdjs._32467_31639_30011_38754Code.GDBlackSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._32467_31639_30011_38754Code.GDBlackSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs._32467_31639_30011_38754Code.GDBlackSquareDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._32467_31639_30011_38754Code.GDBlackSquareDecoratedButtonObjects1[k] = gdjs._32467_31639_30011_38754Code.GDBlackSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs._32467_31639_30011_38754Code.GDBlackSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs._32467_31639_30011_38754Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._32467_31639_30011_38754Code.GDNewSpriteObjects1.length = 0;
gdjs._32467_31639_30011_38754Code.GDNewSpriteObjects2.length = 0;
gdjs._32467_31639_30011_38754Code.GDNewTextObjects1.length = 0;
gdjs._32467_31639_30011_38754Code.GDNewTextObjects2.length = 0;
gdjs._32467_31639_30011_38754Code.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs._32467_31639_30011_38754Code.GDBlackSquareDecoratedButtonObjects2.length = 0;

gdjs._32467_31639_30011_38754Code.eventsList0(runtimeScene);
gdjs._32467_31639_30011_38754Code.GDNewSpriteObjects1.length = 0;
gdjs._32467_31639_30011_38754Code.GDNewSpriteObjects2.length = 0;
gdjs._32467_31639_30011_38754Code.GDNewTextObjects1.length = 0;
gdjs._32467_31639_30011_38754Code.GDNewTextObjects2.length = 0;
gdjs._32467_31639_30011_38754Code.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs._32467_31639_30011_38754Code.GDBlackSquareDecoratedButtonObjects2.length = 0;


return;

}

gdjs['_32467_31639_30011_38754Code'] = gdjs._32467_31639_30011_38754Code;
