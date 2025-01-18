gdjs.overCode = {};
gdjs.overCode.localVariables = [];
gdjs.overCode.GDNewTiledSpriteObjects1= [];
gdjs.overCode.GDNewTiledSpriteObjects2= [];
gdjs.overCode.GDoverObjects1= [];
gdjs.overCode.GDoverObjects2= [];
gdjs.overCode.GDNewTextObjects1= [];
gdjs.overCode.GDNewTextObjects2= [];
gdjs.overCode.GDStartButtonObjects1= [];
gdjs.overCode.GDStartButtonObjects2= [];


gdjs.overCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.overCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.overCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.overCode.GDStartButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.overCode.GDStartButtonObjects1[k] = gdjs.overCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.overCode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "to", false);
}}

}


};

gdjs.overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.overCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.overCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.overCode.GDoverObjects1.length = 0;
gdjs.overCode.GDoverObjects2.length = 0;
gdjs.overCode.GDNewTextObjects1.length = 0;
gdjs.overCode.GDNewTextObjects2.length = 0;
gdjs.overCode.GDStartButtonObjects1.length = 0;
gdjs.overCode.GDStartButtonObjects2.length = 0;

gdjs.overCode.eventsList0(runtimeScene);
gdjs.overCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.overCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.overCode.GDoverObjects1.length = 0;
gdjs.overCode.GDoverObjects2.length = 0;
gdjs.overCode.GDNewTextObjects1.length = 0;
gdjs.overCode.GDNewTextObjects2.length = 0;
gdjs.overCode.GDStartButtonObjects1.length = 0;
gdjs.overCode.GDStartButtonObjects2.length = 0;


return;

}

gdjs['overCode'] = gdjs.overCode;
