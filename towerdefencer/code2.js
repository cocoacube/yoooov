gdjs.SuccessCode = {};
gdjs.SuccessCode.localVariables = [];
gdjs.SuccessCode.GDmissionObjects1= [];
gdjs.SuccessCode.GDmissionObjects2= [];
gdjs.SuccessCode.GDstartObjects1= [];
gdjs.SuccessCode.GDstartObjects2= [];
gdjs.SuccessCode.GDbackgroundObjects1= [];
gdjs.SuccessCode.GDbackgroundObjects2= [];
gdjs.SuccessCode.GDplatObjects1= [];
gdjs.SuccessCode.GDplatObjects2= [];


gdjs.SuccessCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("plat"), gdjs.SuccessCode.GDplatObjects1);
{for(var i = 0, len = gdjs.SuccessCode.GDplatObjects1.length ;i < len;++i) {
    gdjs.SuccessCode.GDplatObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "751052bbd3de6938713ebbe8782cc3f6feba91f9e3caf27272335ac4e549c0cd_Complete_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.SuccessCode.GDstartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SuccessCode.GDstartObjects1.length;i<l;++i) {
    if ( gdjs.SuccessCode.GDstartObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SuccessCode.GDstartObjects1[k] = gdjs.SuccessCode.GDstartObjects1[i];
        ++k;
    }
}
gdjs.SuccessCode.GDstartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


};

gdjs.SuccessCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SuccessCode.GDmissionObjects1.length = 0;
gdjs.SuccessCode.GDmissionObjects2.length = 0;
gdjs.SuccessCode.GDstartObjects1.length = 0;
gdjs.SuccessCode.GDstartObjects2.length = 0;
gdjs.SuccessCode.GDbackgroundObjects1.length = 0;
gdjs.SuccessCode.GDbackgroundObjects2.length = 0;
gdjs.SuccessCode.GDplatObjects1.length = 0;
gdjs.SuccessCode.GDplatObjects2.length = 0;

gdjs.SuccessCode.eventsList0(runtimeScene);
gdjs.SuccessCode.GDmissionObjects1.length = 0;
gdjs.SuccessCode.GDmissionObjects2.length = 0;
gdjs.SuccessCode.GDstartObjects1.length = 0;
gdjs.SuccessCode.GDstartObjects2.length = 0;
gdjs.SuccessCode.GDbackgroundObjects1.length = 0;
gdjs.SuccessCode.GDbackgroundObjects2.length = 0;
gdjs.SuccessCode.GDplatObjects1.length = 0;
gdjs.SuccessCode.GDplatObjects2.length = 0;


return;

}

gdjs['SuccessCode'] = gdjs.SuccessCode;
