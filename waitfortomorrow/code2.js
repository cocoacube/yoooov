gdjs._22833_36133Code = {};
gdjs._22833_36133Code.localVariables = [];
gdjs._22833_36133Code.GDNewSpriteObjects1= [];
gdjs._22833_36133Code.GDNewSpriteObjects2= [];
gdjs._22833_36133Code.GDDiegoObjects1= [];
gdjs._22833_36133Code.GDDiegoObjects2= [];
gdjs._22833_36133Code.GDDinoVitaObjects1= [];
gdjs._22833_36133Code.GDDinoVitaObjects2= [];
gdjs._22833_36133Code.GDTransparentButtonWithWhiteYellowBorderObjects1= [];
gdjs._22833_36133Code.GDTransparentButtonWithWhiteYellowBorderObjects2= [];
gdjs._22833_36133Code.GDStartButtonObjects1= [];
gdjs._22833_36133Code.GDStartButtonObjects2= [];


gdjs._22833_36133Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Diego"), gdjs._22833_36133Code.GDDiegoObjects1);
{gdjs.evtTools.input.showCursor(runtimeScene);
}{for(var i = 0, len = gdjs._22833_36133Code.GDDiegoObjects1.length ;i < len;++i) {
    gdjs._22833_36133Code.GDDiegoObjects1[i].getBehavior("Animation").setAnimationName("Hurt");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteYellowBorder"), gdjs._22833_36133Code.GDTransparentButtonWithWhiteYellowBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._22833_36133Code.GDTransparentButtonWithWhiteYellowBorderObjects1.length;i<l;++i) {
    if ( gdjs._22833_36133Code.GDTransparentButtonWithWhiteYellowBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._22833_36133Code.GDTransparentButtonWithWhiteYellowBorderObjects1[k] = gdjs._22833_36133Code.GDTransparentButtonWithWhiteYellowBorderObjects1[i];
        ++k;
    }
}
gdjs._22833_36133Code.GDTransparentButtonWithWhiteYellowBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


};

gdjs._22833_36133Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._22833_36133Code.GDNewSpriteObjects1.length = 0;
gdjs._22833_36133Code.GDNewSpriteObjects2.length = 0;
gdjs._22833_36133Code.GDDiegoObjects1.length = 0;
gdjs._22833_36133Code.GDDiegoObjects2.length = 0;
gdjs._22833_36133Code.GDDinoVitaObjects1.length = 0;
gdjs._22833_36133Code.GDDinoVitaObjects2.length = 0;
gdjs._22833_36133Code.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs._22833_36133Code.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs._22833_36133Code.GDStartButtonObjects1.length = 0;
gdjs._22833_36133Code.GDStartButtonObjects2.length = 0;

gdjs._22833_36133Code.eventsList0(runtimeScene);
gdjs._22833_36133Code.GDNewSpriteObjects1.length = 0;
gdjs._22833_36133Code.GDNewSpriteObjects2.length = 0;
gdjs._22833_36133Code.GDDiegoObjects1.length = 0;
gdjs._22833_36133Code.GDDiegoObjects2.length = 0;
gdjs._22833_36133Code.GDDinoVitaObjects1.length = 0;
gdjs._22833_36133Code.GDDinoVitaObjects2.length = 0;
gdjs._22833_36133Code.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs._22833_36133Code.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs._22833_36133Code.GDStartButtonObjects1.length = 0;
gdjs._22833_36133Code.GDStartButtonObjects2.length = 0;


return;

}

gdjs['_22833_36133Code'] = gdjs._22833_36133Code;
