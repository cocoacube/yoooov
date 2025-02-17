gdjs.game_32overCode = {};
gdjs.game_32overCode.localVariables = [];
gdjs.game_32overCode.GDgameoverObjects1= [];
gdjs.game_32overCode.GDgameoverObjects2= [];
gdjs.game_32overCode.GDexpObjects1= [];
gdjs.game_32overCode.GDexpObjects2= [];
gdjs.game_32overCode.GDseaObjects1= [];
gdjs.game_32overCode.GDseaObjects2= [];
gdjs.game_32overCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.game_32overCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];


gdjs.game_32overCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.game_32overCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.game_32overCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.game_32overCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.game_32overCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.game_32overCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.game_32overCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "dock", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "20c1edc1dad3064721fc9a0621345e2b79198fae67e5a31cc9c3145b6654ba90_Explosion 6.aac", false, 100, 1);
}}

}


};

gdjs.game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32overCode.GDgameoverObjects1.length = 0;
gdjs.game_32overCode.GDgameoverObjects2.length = 0;
gdjs.game_32overCode.GDexpObjects1.length = 0;
gdjs.game_32overCode.GDexpObjects2.length = 0;
gdjs.game_32overCode.GDseaObjects1.length = 0;
gdjs.game_32overCode.GDseaObjects2.length = 0;
gdjs.game_32overCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.game_32overCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;

gdjs.game_32overCode.eventsList0(runtimeScene);
gdjs.game_32overCode.GDgameoverObjects1.length = 0;
gdjs.game_32overCode.GDgameoverObjects2.length = 0;
gdjs.game_32overCode.GDexpObjects1.length = 0;
gdjs.game_32overCode.GDexpObjects2.length = 0;
gdjs.game_32overCode.GDseaObjects1.length = 0;
gdjs.game_32overCode.GDseaObjects2.length = 0;
gdjs.game_32overCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.game_32overCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;


return;

}

gdjs['game_32overCode'] = gdjs.game_32overCode;
