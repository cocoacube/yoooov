gdjs._32988_21033Code = {};
gdjs._32988_21033Code.localVariables = [];
gdjs._32988_21033Code.GDNewTextObjects1= [];
gdjs._32988_21033Code.GDNewTextObjects2= [];
gdjs._32988_21033Code.GDDPadRightObjects1= [];
gdjs._32988_21033Code.GDDPadRightObjects2= [];


gdjs._32988_21033Code.asyncCallback17858772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._32988_21033Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "升级", false);
}gdjs._32988_21033Code.localVariables.length = 0;
}
gdjs._32988_21033Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._32988_21033Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs._32988_21033Code.asyncCallback17858772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._32988_21033Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("DPadRight"), gdjs._32988_21033Code.GDDPadRightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._32988_21033Code.GDDPadRightObjects1.length;i<l;++i) {
    if ( gdjs._32988_21033Code.GDDPadRightObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._32988_21033Code.GDDPadRightObjects1[k] = gdjs._32988_21033Code.GDDPadRightObjects1[i];
        ++k;
    }
}
gdjs._32988_21033Code.GDDPadRightObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "开始界面", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs._32988_21033Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs._32988_21033Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._32988_21033Code.GDNewTextObjects1.length = 0;
gdjs._32988_21033Code.GDNewTextObjects2.length = 0;
gdjs._32988_21033Code.GDDPadRightObjects1.length = 0;
gdjs._32988_21033Code.GDDPadRightObjects2.length = 0;

gdjs._32988_21033Code.eventsList1(runtimeScene);
gdjs._32988_21033Code.GDNewTextObjects1.length = 0;
gdjs._32988_21033Code.GDNewTextObjects2.length = 0;
gdjs._32988_21033Code.GDDPadRightObjects1.length = 0;
gdjs._32988_21033Code.GDDPadRightObjects2.length = 0;


return;

}

gdjs['_32988_21033Code'] = gdjs._32988_21033Code;
