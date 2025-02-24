gdjs._22833_36133_30028_38754Code = {};
gdjs._22833_36133_30028_38754Code.localVariables = [];
gdjs._22833_36133_30028_38754Code.GD_9522833_9536133Objects1= [];
gdjs._22833_36133_30028_38754Code.GD_9522833_9536133Objects2= [];
gdjs._22833_36133_30028_38754Code.GDFarmerObjects1= [];
gdjs._22833_36133_30028_38754Code.GDFarmerObjects2= [];
gdjs._22833_36133_30028_38754Code.GD_9538459_9525377Objects1= [];
gdjs._22833_36133_30028_38754Code.GD_9538459_9525377Objects2= [];
gdjs._22833_36133_30028_38754Code.GD_9520256_9536865Objects1= [];
gdjs._22833_36133_30028_38754Code.GD_9520256_9536865Objects2= [];
gdjs._22833_36133_30028_38754Code.GD_9521151_9533021Objects1= [];
gdjs._22833_36133_30028_38754Code.GD_9521151_9533021Objects2= [];
gdjs._22833_36133_30028_38754Code.GDheartObjects1= [];
gdjs._22833_36133_30028_38754Code.GDheartObjects2= [];
gdjs._22833_36133_30028_38754Code.GD_9529983_9521629_9520540Objects1= [];
gdjs._22833_36133_30028_38754Code.GD_9529983_9521629_9520540Objects2= [];
gdjs._22833_36133_30028_38754Code.GDenergyObjects1= [];
gdjs._22833_36133_30028_38754Code.GDenergyObjects2= [];
gdjs._22833_36133_30028_38754Code.GD_9520307_9521147_9520540Objects1= [];
gdjs._22833_36133_30028_38754Code.GD_9520307_9521147_9520540Objects2= [];
gdjs._22833_36133_30028_38754Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects1= [];
gdjs._22833_36133_30028_38754Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects2= [];
gdjs._22833_36133_30028_38754Code.GD_9521462_9528040_9538190Objects1= [];
gdjs._22833_36133_30028_38754Code.GD_9521462_9528040_9538190Objects2= [];
gdjs._22833_36133_30028_38754Code.GDFallTreesBackgroundObjects1= [];
gdjs._22833_36133_30028_38754Code.GDFallTreesBackgroundObjects2= [];
gdjs._22833_36133_30028_38754Code.GDNewSprite4Objects1= [];
gdjs._22833_36133_30028_38754Code.GDNewSprite4Objects2= [];
gdjs._22833_36133_30028_38754Code.GD_9536864_9520986Objects1= [];
gdjs._22833_36133_30028_38754Code.GD_9536864_9520986Objects2= [];


gdjs._22833_36133_30028_38754Code.asyncCallback7817620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._22833_36133_30028_38754Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "大厅", false);
}gdjs._22833_36133_30028_38754Code.localVariables.length = 0;
}
gdjs._22833_36133_30028_38754Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._22833_36133_30028_38754Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs._22833_36133_30028_38754Code.asyncCallback7817620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._22833_36133_30028_38754Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._22833_36133_30028_38754Code.GDNewSprite4Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(7).add(50);
}{for(var i = 0, len = gdjs._22833_36133_30028_38754Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._22833_36133_30028_38754Code.GDNewSprite4Objects1[i].getBehavior("Opacity").setOpacity(210);
}
}
{ //Subevents
gdjs._22833_36133_30028_38754Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs._22833_36133_30028_38754Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._22833_36133_30028_38754Code.GD_9522833_9536133Objects1.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9522833_9536133Objects2.length = 0;
gdjs._22833_36133_30028_38754Code.GDFarmerObjects1.length = 0;
gdjs._22833_36133_30028_38754Code.GDFarmerObjects2.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9538459_9525377Objects1.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9538459_9525377Objects2.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9520256_9536865Objects1.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9520256_9536865Objects2.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9521151_9533021Objects1.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9521151_9533021Objects2.length = 0;
gdjs._22833_36133_30028_38754Code.GDheartObjects1.length = 0;
gdjs._22833_36133_30028_38754Code.GDheartObjects2.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9529983_9521629_9520540Objects1.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9529983_9521629_9520540Objects2.length = 0;
gdjs._22833_36133_30028_38754Code.GDenergyObjects1.length = 0;
gdjs._22833_36133_30028_38754Code.GDenergyObjects2.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9520307_9521147_9520540Objects1.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9520307_9521147_9520540Objects2.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects1.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects2.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9521462_9528040_9538190Objects1.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9521462_9528040_9538190Objects2.length = 0;
gdjs._22833_36133_30028_38754Code.GDFallTreesBackgroundObjects1.length = 0;
gdjs._22833_36133_30028_38754Code.GDFallTreesBackgroundObjects2.length = 0;
gdjs._22833_36133_30028_38754Code.GDNewSprite4Objects1.length = 0;
gdjs._22833_36133_30028_38754Code.GDNewSprite4Objects2.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9536864_9520986Objects1.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9536864_9520986Objects2.length = 0;

gdjs._22833_36133_30028_38754Code.eventsList1(runtimeScene);
gdjs._22833_36133_30028_38754Code.GD_9522833_9536133Objects1.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9522833_9536133Objects2.length = 0;
gdjs._22833_36133_30028_38754Code.GDFarmerObjects1.length = 0;
gdjs._22833_36133_30028_38754Code.GDFarmerObjects2.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9538459_9525377Objects1.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9538459_9525377Objects2.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9520256_9536865Objects1.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9520256_9536865Objects2.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9521151_9533021Objects1.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9521151_9533021Objects2.length = 0;
gdjs._22833_36133_30028_38754Code.GDheartObjects1.length = 0;
gdjs._22833_36133_30028_38754Code.GDheartObjects2.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9529983_9521629_9520540Objects1.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9529983_9521629_9520540Objects2.length = 0;
gdjs._22833_36133_30028_38754Code.GDenergyObjects1.length = 0;
gdjs._22833_36133_30028_38754Code.GDenergyObjects2.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9520307_9521147_9520540Objects1.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9520307_9521147_9520540Objects2.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects1.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects2.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9521462_9528040_9538190Objects1.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9521462_9528040_9538190Objects2.length = 0;
gdjs._22833_36133_30028_38754Code.GDFallTreesBackgroundObjects1.length = 0;
gdjs._22833_36133_30028_38754Code.GDFallTreesBackgroundObjects2.length = 0;
gdjs._22833_36133_30028_38754Code.GDNewSprite4Objects1.length = 0;
gdjs._22833_36133_30028_38754Code.GDNewSprite4Objects2.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9536864_9520986Objects1.length = 0;
gdjs._22833_36133_30028_38754Code.GD_9536864_9520986Objects2.length = 0;


return;

}

gdjs['_22833_36133_30028_38754Code'] = gdjs._22833_36133_30028_38754Code;
