gdjs._32467_31639_30028_38754Code = {};
gdjs._32467_31639_30028_38754Code.localVariables = [];
gdjs._32467_31639_30028_38754Code.GD_9524635_9520987_9526432_9520540Objects1= [];
gdjs._32467_31639_30028_38754Code.GD_9524635_9520987_9526432_9520540Objects2= [];
gdjs._32467_31639_30028_38754Code.GDPauseObjects1= [];
gdjs._32467_31639_30028_38754Code.GDPauseObjects2= [];
gdjs._32467_31639_30028_38754Code.GDFarmerObjects1= [];
gdjs._32467_31639_30028_38754Code.GDFarmerObjects2= [];
gdjs._32467_31639_30028_38754Code.GD_9538459_9525377Objects1= [];
gdjs._32467_31639_30028_38754Code.GD_9538459_9525377Objects2= [];
gdjs._32467_31639_30028_38754Code.GD_9520256_9536865Objects1= [];
gdjs._32467_31639_30028_38754Code.GD_9520256_9536865Objects2= [];
gdjs._32467_31639_30028_38754Code.GD_9521151_9533021Objects1= [];
gdjs._32467_31639_30028_38754Code.GD_9521151_9533021Objects2= [];
gdjs._32467_31639_30028_38754Code.GDheartObjects1= [];
gdjs._32467_31639_30028_38754Code.GDheartObjects2= [];
gdjs._32467_31639_30028_38754Code.GD_9529983_9521629_9520540Objects1= [];
gdjs._32467_31639_30028_38754Code.GD_9529983_9521629_9520540Objects2= [];
gdjs._32467_31639_30028_38754Code.GDenergyObjects1= [];
gdjs._32467_31639_30028_38754Code.GDenergyObjects2= [];
gdjs._32467_31639_30028_38754Code.GD_9520307_9521147_9520540Objects1= [];
gdjs._32467_31639_30028_38754Code.GD_9520307_9521147_9520540Objects2= [];
gdjs._32467_31639_30028_38754Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects1= [];
gdjs._32467_31639_30028_38754Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects2= [];
gdjs._32467_31639_30028_38754Code.GD_9521462_9528040_9538190Objects1= [];
gdjs._32467_31639_30028_38754Code.GD_9521462_9528040_9538190Objects2= [];
gdjs._32467_31639_30028_38754Code.GDFallTreesBackgroundObjects1= [];
gdjs._32467_31639_30028_38754Code.GDFallTreesBackgroundObjects2= [];
gdjs._32467_31639_30028_38754Code.GDNewSprite4Objects1= [];
gdjs._32467_31639_30028_38754Code.GDNewSprite4Objects2= [];
gdjs._32467_31639_30028_38754Code.GD_9536864_9520986Objects1= [];
gdjs._32467_31639_30028_38754Code.GD_9536864_9520986Objects2= [];


gdjs._32467_31639_30028_38754Code.asyncCallback19267596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._32467_31639_30028_38754Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "大厅", false);
}gdjs._32467_31639_30028_38754Code.localVariables.length = 0;
}
gdjs._32467_31639_30028_38754Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._32467_31639_30028_38754Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs._32467_31639_30028_38754Code.asyncCallback19267596(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._32467_31639_30028_38754Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._32467_31639_30028_38754Code.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs._32467_31639_30028_38754Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._32467_31639_30028_38754Code.GDNewSprite4Objects1[i].getBehavior("Opacity").setOpacity(210);
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(gdjs.randomInRange(50, 200));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pause"), gdjs._32467_31639_30028_38754Code.GDPauseObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._32467_31639_30028_38754Code.GDPauseObjects1.length;i<l;++i) {
    if ( gdjs._32467_31639_30028_38754Code.GDPauseObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._32467_31639_30028_38754Code.GDPauseObjects1[k] = gdjs._32467_31639_30028_38754Code.GDPauseObjects1[i];
        ++k;
    }
}
gdjs._32467_31639_30028_38754Code.GDPauseObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19268860);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._32467_31639_30028_38754Code.GDPauseObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(6).setBoolean(true);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(gdjs.randomInRange(50, 200));
}{for(var i = 0, len = gdjs._32467_31639_30028_38754Code.GDPauseObjects1.length ;i < len;++i) {
    gdjs._32467_31639_30028_38754Code.GDPauseObjects1[i].hide();
}
}
{ //Subevents
gdjs._32467_31639_30028_38754Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("总击杀值"), gdjs._32467_31639_30028_38754Code.GD_9524635_9520987_9526432_9520540Objects1);
{for(var i = 0, len = gdjs._32467_31639_30028_38754Code.GD_9524635_9520987_9526432_9520540Objects1.length ;i < len;++i) {
    gdjs._32467_31639_30028_38754Code.GD_9524635_9520987_9526432_9520540Objects1[i].getBehavior("Text").setText("你在本场游戏中一共击杀了" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber()) + "个敌对生物，比赛积分增加" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber()) + "+" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber()));
}
}{for(var i = 0, len = gdjs._32467_31639_30028_38754Code.GD_9524635_9520987_9526432_9520540Objects1.length ;i < len;++i) {
    gdjs._32467_31639_30028_38754Code.GD_9524635_9520987_9526432_9520540Objects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}}

}


};

gdjs._32467_31639_30028_38754Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._32467_31639_30028_38754Code.GD_9524635_9520987_9526432_9520540Objects1.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9524635_9520987_9526432_9520540Objects2.length = 0;
gdjs._32467_31639_30028_38754Code.GDPauseObjects1.length = 0;
gdjs._32467_31639_30028_38754Code.GDPauseObjects2.length = 0;
gdjs._32467_31639_30028_38754Code.GDFarmerObjects1.length = 0;
gdjs._32467_31639_30028_38754Code.GDFarmerObjects2.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9538459_9525377Objects1.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9538459_9525377Objects2.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9520256_9536865Objects1.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9520256_9536865Objects2.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9521151_9533021Objects1.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9521151_9533021Objects2.length = 0;
gdjs._32467_31639_30028_38754Code.GDheartObjects1.length = 0;
gdjs._32467_31639_30028_38754Code.GDheartObjects2.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9529983_9521629_9520540Objects1.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9529983_9521629_9520540Objects2.length = 0;
gdjs._32467_31639_30028_38754Code.GDenergyObjects1.length = 0;
gdjs._32467_31639_30028_38754Code.GDenergyObjects2.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9520307_9521147_9520540Objects1.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9520307_9521147_9520540Objects2.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects1.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects2.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9521462_9528040_9538190Objects1.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9521462_9528040_9538190Objects2.length = 0;
gdjs._32467_31639_30028_38754Code.GDFallTreesBackgroundObjects1.length = 0;
gdjs._32467_31639_30028_38754Code.GDFallTreesBackgroundObjects2.length = 0;
gdjs._32467_31639_30028_38754Code.GDNewSprite4Objects1.length = 0;
gdjs._32467_31639_30028_38754Code.GDNewSprite4Objects2.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9536864_9520986Objects1.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9536864_9520986Objects2.length = 0;

gdjs._32467_31639_30028_38754Code.eventsList1(runtimeScene);
gdjs._32467_31639_30028_38754Code.GD_9524635_9520987_9526432_9520540Objects1.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9524635_9520987_9526432_9520540Objects2.length = 0;
gdjs._32467_31639_30028_38754Code.GDPauseObjects1.length = 0;
gdjs._32467_31639_30028_38754Code.GDPauseObjects2.length = 0;
gdjs._32467_31639_30028_38754Code.GDFarmerObjects1.length = 0;
gdjs._32467_31639_30028_38754Code.GDFarmerObjects2.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9538459_9525377Objects1.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9538459_9525377Objects2.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9520256_9536865Objects1.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9520256_9536865Objects2.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9521151_9533021Objects1.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9521151_9533021Objects2.length = 0;
gdjs._32467_31639_30028_38754Code.GDheartObjects1.length = 0;
gdjs._32467_31639_30028_38754Code.GDheartObjects2.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9529983_9521629_9520540Objects1.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9529983_9521629_9520540Objects2.length = 0;
gdjs._32467_31639_30028_38754Code.GDenergyObjects1.length = 0;
gdjs._32467_31639_30028_38754Code.GDenergyObjects2.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9520307_9521147_9520540Objects1.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9520307_9521147_9520540Objects2.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects1.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects2.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9521462_9528040_9538190Objects1.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9521462_9528040_9538190Objects2.length = 0;
gdjs._32467_31639_30028_38754Code.GDFallTreesBackgroundObjects1.length = 0;
gdjs._32467_31639_30028_38754Code.GDFallTreesBackgroundObjects2.length = 0;
gdjs._32467_31639_30028_38754Code.GDNewSprite4Objects1.length = 0;
gdjs._32467_31639_30028_38754Code.GDNewSprite4Objects2.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9536864_9520986Objects1.length = 0;
gdjs._32467_31639_30028_38754Code.GD_9536864_9520986Objects2.length = 0;


return;

}

gdjs['_32467_31639_30028_38754Code'] = gdjs._32467_31639_30028_38754Code;
