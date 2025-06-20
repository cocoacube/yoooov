gdjs._35828_21517Code = {};
gdjs._35828_21517Code.localVariables = [];
gdjs._35828_21517Code.GDBox2Objects1= [];
gdjs._35828_21517Code.GDBox2Objects2= [];
gdjs._35828_21517Code.GDNewTextObjects1= [];
gdjs._35828_21517Code.GDNewTextObjects2= [];
gdjs._35828_21517Code.GDNewText2Objects1= [];
gdjs._35828_21517Code.GDNewText2Objects2= [];
gdjs._35828_21517Code.GDCloseRoundButtonObjects1= [];
gdjs._35828_21517Code.GDCloseRoundButtonObjects2= [];
gdjs._35828_21517Code.GDNewText3Objects1= [];
gdjs._35828_21517Code.GDNewText3Objects2= [];
gdjs._35828_21517Code.GDStartButtonObjects1= [];
gdjs._35828_21517Code.GDStartButtonObjects2= [];


gdjs._35828_21517Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CloseRoundButton"), gdjs._35828_21517Code.GDCloseRoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35828_21517Code.GDCloseRoundButtonObjects1.length;i<l;++i) {
    if ( gdjs._35828_21517Code.GDCloseRoundButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._35828_21517Code.GDCloseRoundButtonObjects1[k] = gdjs._35828_21517Code.GDCloseRoundButtonObjects1[i];
        ++k;
    }
}
gdjs._35828_21517Code.GDCloseRoundButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


};

gdjs._35828_21517Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._35828_21517Code.GDBox2Objects1.length = 0;
gdjs._35828_21517Code.GDBox2Objects2.length = 0;
gdjs._35828_21517Code.GDNewTextObjects1.length = 0;
gdjs._35828_21517Code.GDNewTextObjects2.length = 0;
gdjs._35828_21517Code.GDNewText2Objects1.length = 0;
gdjs._35828_21517Code.GDNewText2Objects2.length = 0;
gdjs._35828_21517Code.GDCloseRoundButtonObjects1.length = 0;
gdjs._35828_21517Code.GDCloseRoundButtonObjects2.length = 0;
gdjs._35828_21517Code.GDNewText3Objects1.length = 0;
gdjs._35828_21517Code.GDNewText3Objects2.length = 0;
gdjs._35828_21517Code.GDStartButtonObjects1.length = 0;
gdjs._35828_21517Code.GDStartButtonObjects2.length = 0;

gdjs._35828_21517Code.eventsList0(runtimeScene);
gdjs._35828_21517Code.GDBox2Objects1.length = 0;
gdjs._35828_21517Code.GDBox2Objects2.length = 0;
gdjs._35828_21517Code.GDNewTextObjects1.length = 0;
gdjs._35828_21517Code.GDNewTextObjects2.length = 0;
gdjs._35828_21517Code.GDNewText2Objects1.length = 0;
gdjs._35828_21517Code.GDNewText2Objects2.length = 0;
gdjs._35828_21517Code.GDCloseRoundButtonObjects1.length = 0;
gdjs._35828_21517Code.GDCloseRoundButtonObjects2.length = 0;
gdjs._35828_21517Code.GDNewText3Objects1.length = 0;
gdjs._35828_21517Code.GDNewText3Objects2.length = 0;
gdjs._35828_21517Code.GDStartButtonObjects1.length = 0;
gdjs._35828_21517Code.GDStartButtonObjects2.length = 0;


return;

}

gdjs['_35828_21517Code'] = gdjs._35828_21517Code;
