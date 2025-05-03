gdjs.settingCode = {};
gdjs.settingCode.localVariables = [];
gdjs.settingCode.GDSquareBlueSliderObjects1= [];
gdjs.settingCode.GDSquareBlueSliderObjects2= [];
gdjs.settingCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.settingCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.settingCode.GDNewSpriteObjects1= [];
gdjs.settingCode.GDNewSpriteObjects2= [];
gdjs.settingCode.GDNewTextObjects1= [];
gdjs.settingCode.GDNewTextObjects2= [];


gdjs.settingCode.eventsList0 = function(runtimeScene) {

};gdjs.settingCode.eventsList1 = function(runtimeScene) {

{


gdjs.settingCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SquareBlueSlider"), gdjs.settingCode.GDSquareBlueSliderObjects1);
{for(var i = 0, len = gdjs.settingCode.GDSquareBlueSliderObjects1.length ;i < len;++i) {
    gdjs.settingCode.GDSquareBlueSliderObjects1[i].SetMaxValue(100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.settingCode.GDSquareBlueSliderObjects1.length ;i < len;++i) {
    gdjs.settingCode.GDSquareBlueSliderObjects1[i].SetMinValue(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.settingCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.settingCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.settingCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.settingCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.settingCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.settingCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SquareBlueSlider"), gdjs.settingCode.GDSquareBlueSliderObjects1);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, (( gdjs.settingCode.GDSquareBlueSliderObjects1.length === 0 ) ? 0 :gdjs.settingCode.GDSquareBlueSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.settingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.settingCode.GDSquareBlueSliderObjects1.length = 0;
gdjs.settingCode.GDSquareBlueSliderObjects2.length = 0;
gdjs.settingCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.settingCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.settingCode.GDNewSpriteObjects1.length = 0;
gdjs.settingCode.GDNewSpriteObjects2.length = 0;
gdjs.settingCode.GDNewTextObjects1.length = 0;
gdjs.settingCode.GDNewTextObjects2.length = 0;

gdjs.settingCode.eventsList1(runtimeScene);
gdjs.settingCode.GDSquareBlueSliderObjects1.length = 0;
gdjs.settingCode.GDSquareBlueSliderObjects2.length = 0;
gdjs.settingCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.settingCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.settingCode.GDNewSpriteObjects1.length = 0;
gdjs.settingCode.GDNewSpriteObjects2.length = 0;
gdjs.settingCode.GDNewTextObjects1.length = 0;
gdjs.settingCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['settingCode'] = gdjs.settingCode;
