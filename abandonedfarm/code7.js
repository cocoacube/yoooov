gdjs._21319_32423Code = {};
gdjs._21319_32423Code.localVariables = [];
gdjs._21319_32423Code.GDTornadoObjects1= [];
gdjs._21319_32423Code.GDTornadoObjects2= [];
gdjs._21319_32423Code.GDFarmerObjects1= [];
gdjs._21319_32423Code.GDFarmerObjects2= [];
gdjs._21319_32423Code.GDGreenButtonWithStoneFrameObjects1= [];
gdjs._21319_32423Code.GDGreenButtonWithStoneFrameObjects2= [];
gdjs._21319_32423Code.GDNewTextObjects1= [];
gdjs._21319_32423Code.GDNewTextObjects2= [];


gdjs._21319_32423Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithStoneFrame"), gdjs._21319_32423Code.GDGreenButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._21319_32423Code.GDGreenButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs._21319_32423Code.GDGreenButtonWithStoneFrameObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._21319_32423Code.GDGreenButtonWithStoneFrameObjects1[k] = gdjs._21319_32423Code.GDGreenButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs._21319_32423Code.GDGreenButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "开始界面", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "331d58d90c7f187a914fd43887454421736d8691d536f87a62e71b68a1c98660_35 - The Creeper.aac", false, 100, 1);
}}

}


};

gdjs._21319_32423Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._21319_32423Code.GDTornadoObjects1.length = 0;
gdjs._21319_32423Code.GDTornadoObjects2.length = 0;
gdjs._21319_32423Code.GDFarmerObjects1.length = 0;
gdjs._21319_32423Code.GDFarmerObjects2.length = 0;
gdjs._21319_32423Code.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs._21319_32423Code.GDGreenButtonWithStoneFrameObjects2.length = 0;
gdjs._21319_32423Code.GDNewTextObjects1.length = 0;
gdjs._21319_32423Code.GDNewTextObjects2.length = 0;

gdjs._21319_32423Code.eventsList0(runtimeScene);
gdjs._21319_32423Code.GDTornadoObjects1.length = 0;
gdjs._21319_32423Code.GDTornadoObjects2.length = 0;
gdjs._21319_32423Code.GDFarmerObjects1.length = 0;
gdjs._21319_32423Code.GDFarmerObjects2.length = 0;
gdjs._21319_32423Code.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs._21319_32423Code.GDGreenButtonWithStoneFrameObjects2.length = 0;
gdjs._21319_32423Code.GDNewTextObjects1.length = 0;
gdjs._21319_32423Code.GDNewTextObjects2.length = 0;


return;

}

gdjs['_21319_32423Code'] = gdjs._21319_32423Code;
