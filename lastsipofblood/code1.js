gdjs.Enter_32pageCode = {};
gdjs.Enter_32pageCode.localVariables = [];
gdjs.Enter_32pageCode.GDNewTextInputObjects1= [];
gdjs.Enter_32pageCode.GDNewTextInputObjects2= [];
gdjs.Enter_32pageCode.GDStartButtonObjects1= [];
gdjs.Enter_32pageCode.GDStartButtonObjects2= [];
gdjs.Enter_32pageCode.GDNewTextObjects1= [];
gdjs.Enter_32pageCode.GDNewTextObjects2= [];


gdjs.Enter_32pageCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "c0c4dac9c49b4e3961fdb1a7a8c6205505b3eb2d0d072f9474550a0e53abcb79_Asking Questions.aac", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Enter_32pageCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Enter_32pageCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.Enter_32pageCode.GDStartButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Enter_32pageCode.GDStartButtonObjects1[k] = gdjs.Enter_32pageCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.Enter_32pageCode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MAP 1", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "44753b4d3c538ac8b8af26578feab2d0ad562856703bbe64f0b7fc64d8003778_Click_04.aac", false, 100, 1);
}}

}


};

gdjs.Enter_32pageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Enter_32pageCode.GDNewTextInputObjects1.length = 0;
gdjs.Enter_32pageCode.GDNewTextInputObjects2.length = 0;
gdjs.Enter_32pageCode.GDStartButtonObjects1.length = 0;
gdjs.Enter_32pageCode.GDStartButtonObjects2.length = 0;
gdjs.Enter_32pageCode.GDNewTextObjects1.length = 0;
gdjs.Enter_32pageCode.GDNewTextObjects2.length = 0;

gdjs.Enter_32pageCode.eventsList0(runtimeScene);
gdjs.Enter_32pageCode.GDNewTextInputObjects1.length = 0;
gdjs.Enter_32pageCode.GDNewTextInputObjects2.length = 0;
gdjs.Enter_32pageCode.GDStartButtonObjects1.length = 0;
gdjs.Enter_32pageCode.GDStartButtonObjects2.length = 0;
gdjs.Enter_32pageCode.GDNewTextObjects1.length = 0;
gdjs.Enter_32pageCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['Enter_32pageCode'] = gdjs.Enter_32pageCode;
