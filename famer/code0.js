gdjs._22823_21381Code = {};
gdjs._22823_21381Code.localVariables = [];
gdjs._22823_21381Code.GDNewSpriteObjects1= [];
gdjs._22823_21381Code.GDNewSpriteObjects2= [];
gdjs._22823_21381Code.GDNewSprite2Objects1= [];
gdjs._22823_21381Code.GDNewSprite2Objects2= [];
gdjs._22823_21381Code.GDNewSprite3Objects1= [];
gdjs._22823_21381Code.GDNewSprite3Objects2= [];
gdjs._22823_21381Code.GDGoldSwordObjects1= [];
gdjs._22823_21381Code.GDGoldSwordObjects2= [];
gdjs._22823_21381Code.GDWispyFireObjects1= [];
gdjs._22823_21381Code.GDWispyFireObjects2= [];
gdjs._22823_21381Code.GD_9528216_9525103Objects1= [];
gdjs._22823_21381Code.GD_9528216_9525103Objects2= [];
gdjs._22823_21381Code.GD_9535282_9533394Objects1= [];
gdjs._22823_21381Code.GD_9535282_9533394Objects2= [];
gdjs._22823_21381Code.GDFarmer2Objects1= [];
gdjs._22823_21381Code.GDFarmer2Objects2= [];
gdjs._22823_21381Code.GDWispyFire2Objects1= [];
gdjs._22823_21381Code.GDWispyFire2Objects2= [];
gdjs._22823_21381Code.GD_9527604_9536187_9531215_9520998Objects1= [];
gdjs._22823_21381Code.GD_9527604_9536187_9531215_9520998Objects2= [];
gdjs._22823_21381Code.GD_9528216_9525103_9535268_9521017Objects1= [];
gdjs._22823_21381Code.GD_9528216_9525103_9535268_9521017Objects2= [];
gdjs._22823_21381Code.GD_9524320_9522987_9528216_9525103Objects1= [];
gdjs._22823_21381Code.GD_9524320_9522987_9528216_9525103Objects2= [];
gdjs._22823_21381Code.GDFarmerObjects1= [];
gdjs._22823_21381Code.GDFarmerObjects2= [];
gdjs._22823_21381Code.GD_9538459_9525377Objects1= [];
gdjs._22823_21381Code.GD_9538459_9525377Objects2= [];
gdjs._22823_21381Code.GD_9520256_9536865Objects1= [];
gdjs._22823_21381Code.GD_9520256_9536865Objects2= [];
gdjs._22823_21381Code.GD_9521151_9533021Objects1= [];
gdjs._22823_21381Code.GD_9521151_9533021Objects2= [];
gdjs._22823_21381Code.GDheartObjects1= [];
gdjs._22823_21381Code.GDheartObjects2= [];
gdjs._22823_21381Code.GD_9529983_9521629_9520540Objects1= [];
gdjs._22823_21381Code.GD_9529983_9521629_9520540Objects2= [];
gdjs._22823_21381Code.GDenergyObjects1= [];
gdjs._22823_21381Code.GDenergyObjects2= [];
gdjs._22823_21381Code.GD_9520307_9521147_9520540Objects1= [];
gdjs._22823_21381Code.GD_9520307_9521147_9520540Objects2= [];
gdjs._22823_21381Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects1= [];
gdjs._22823_21381Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects2= [];
gdjs._22823_21381Code.GD_9521462_9528040_9538190Objects1= [];
gdjs._22823_21381Code.GD_9521462_9528040_9538190Objects2= [];
gdjs._22823_21381Code.GDFallTreesBackgroundObjects1= [];
gdjs._22823_21381Code.GDFallTreesBackgroundObjects2= [];
gdjs._22823_21381Code.GDNewSprite4Objects1= [];
gdjs._22823_21381Code.GDNewSprite4Objects2= [];
gdjs._22823_21381Code.GD_9536864_9520986Objects1= [];
gdjs._22823_21381Code.GD_9536864_9520986Objects2= [];


gdjs._22823_21381Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("开始游戏"), gdjs._22823_21381Code.GD_9524320_9522987_9528216_9525103Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._22823_21381Code.GD_9524320_9522987_9528216_9525103Objects1.length;i<l;++i) {
    if ( gdjs._22823_21381Code.GD_9524320_9522987_9528216_9525103Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._22823_21381Code.GD_9524320_9522987_9528216_9525103Objects1[k] = gdjs._22823_21381Code.GD_9524320_9522987_9528216_9525103Objects1[i];
        ++k;
    }
}
gdjs._22823_21381Code.GD_9524320_9522987_9528216_9525103Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "游戏主线", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("比赛积分"), gdjs._22823_21381Code.GD_9527604_9536187_9531215_9520998Objects1);
{for(var i = 0, len = gdjs._22823_21381Code.GD_9527604_9536187_9531215_9520998Objects1.length ;i < len;++i) {
    gdjs._22823_21381Code.GD_9527604_9536187_9531215_9520998Objects1[i].getBehavior("Text").setText("比赛积分：" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("游戏规则"), gdjs._22823_21381Code.GD_9528216_9525103_9535268_9521017Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._22823_21381Code.GD_9528216_9525103_9535268_9521017Objects1.length;i<l;++i) {
    if ( gdjs._22823_21381Code.GD_9528216_9525103_9535268_9521017Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._22823_21381Code.GD_9528216_9525103_9535268_9521017Objects1[k] = gdjs._22823_21381Code.GD_9528216_9525103_9535268_9521017Objects1[i];
        ++k;
    }
}
gdjs._22823_21381Code.GD_9528216_9525103_9535268_9521017Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "游戏规则", false);
}}

}


};

gdjs._22823_21381Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._22823_21381Code.GDNewSpriteObjects1.length = 0;
gdjs._22823_21381Code.GDNewSpriteObjects2.length = 0;
gdjs._22823_21381Code.GDNewSprite2Objects1.length = 0;
gdjs._22823_21381Code.GDNewSprite2Objects2.length = 0;
gdjs._22823_21381Code.GDNewSprite3Objects1.length = 0;
gdjs._22823_21381Code.GDNewSprite3Objects2.length = 0;
gdjs._22823_21381Code.GDGoldSwordObjects1.length = 0;
gdjs._22823_21381Code.GDGoldSwordObjects2.length = 0;
gdjs._22823_21381Code.GDWispyFireObjects1.length = 0;
gdjs._22823_21381Code.GDWispyFireObjects2.length = 0;
gdjs._22823_21381Code.GD_9528216_9525103Objects1.length = 0;
gdjs._22823_21381Code.GD_9528216_9525103Objects2.length = 0;
gdjs._22823_21381Code.GD_9535282_9533394Objects1.length = 0;
gdjs._22823_21381Code.GD_9535282_9533394Objects2.length = 0;
gdjs._22823_21381Code.GDFarmer2Objects1.length = 0;
gdjs._22823_21381Code.GDFarmer2Objects2.length = 0;
gdjs._22823_21381Code.GDWispyFire2Objects1.length = 0;
gdjs._22823_21381Code.GDWispyFire2Objects2.length = 0;
gdjs._22823_21381Code.GD_9527604_9536187_9531215_9520998Objects1.length = 0;
gdjs._22823_21381Code.GD_9527604_9536187_9531215_9520998Objects2.length = 0;
gdjs._22823_21381Code.GD_9528216_9525103_9535268_9521017Objects1.length = 0;
gdjs._22823_21381Code.GD_9528216_9525103_9535268_9521017Objects2.length = 0;
gdjs._22823_21381Code.GD_9524320_9522987_9528216_9525103Objects1.length = 0;
gdjs._22823_21381Code.GD_9524320_9522987_9528216_9525103Objects2.length = 0;
gdjs._22823_21381Code.GDFarmerObjects1.length = 0;
gdjs._22823_21381Code.GDFarmerObjects2.length = 0;
gdjs._22823_21381Code.GD_9538459_9525377Objects1.length = 0;
gdjs._22823_21381Code.GD_9538459_9525377Objects2.length = 0;
gdjs._22823_21381Code.GD_9520256_9536865Objects1.length = 0;
gdjs._22823_21381Code.GD_9520256_9536865Objects2.length = 0;
gdjs._22823_21381Code.GD_9521151_9533021Objects1.length = 0;
gdjs._22823_21381Code.GD_9521151_9533021Objects2.length = 0;
gdjs._22823_21381Code.GDheartObjects1.length = 0;
gdjs._22823_21381Code.GDheartObjects2.length = 0;
gdjs._22823_21381Code.GD_9529983_9521629_9520540Objects1.length = 0;
gdjs._22823_21381Code.GD_9529983_9521629_9520540Objects2.length = 0;
gdjs._22823_21381Code.GDenergyObjects1.length = 0;
gdjs._22823_21381Code.GDenergyObjects2.length = 0;
gdjs._22823_21381Code.GD_9520307_9521147_9520540Objects1.length = 0;
gdjs._22823_21381Code.GD_9520307_9521147_9520540Objects2.length = 0;
gdjs._22823_21381Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects1.length = 0;
gdjs._22823_21381Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects2.length = 0;
gdjs._22823_21381Code.GD_9521462_9528040_9538190Objects1.length = 0;
gdjs._22823_21381Code.GD_9521462_9528040_9538190Objects2.length = 0;
gdjs._22823_21381Code.GDFallTreesBackgroundObjects1.length = 0;
gdjs._22823_21381Code.GDFallTreesBackgroundObjects2.length = 0;
gdjs._22823_21381Code.GDNewSprite4Objects1.length = 0;
gdjs._22823_21381Code.GDNewSprite4Objects2.length = 0;
gdjs._22823_21381Code.GD_9536864_9520986Objects1.length = 0;
gdjs._22823_21381Code.GD_9536864_9520986Objects2.length = 0;

gdjs._22823_21381Code.eventsList0(runtimeScene);
gdjs._22823_21381Code.GDNewSpriteObjects1.length = 0;
gdjs._22823_21381Code.GDNewSpriteObjects2.length = 0;
gdjs._22823_21381Code.GDNewSprite2Objects1.length = 0;
gdjs._22823_21381Code.GDNewSprite2Objects2.length = 0;
gdjs._22823_21381Code.GDNewSprite3Objects1.length = 0;
gdjs._22823_21381Code.GDNewSprite3Objects2.length = 0;
gdjs._22823_21381Code.GDGoldSwordObjects1.length = 0;
gdjs._22823_21381Code.GDGoldSwordObjects2.length = 0;
gdjs._22823_21381Code.GDWispyFireObjects1.length = 0;
gdjs._22823_21381Code.GDWispyFireObjects2.length = 0;
gdjs._22823_21381Code.GD_9528216_9525103Objects1.length = 0;
gdjs._22823_21381Code.GD_9528216_9525103Objects2.length = 0;
gdjs._22823_21381Code.GD_9535282_9533394Objects1.length = 0;
gdjs._22823_21381Code.GD_9535282_9533394Objects2.length = 0;
gdjs._22823_21381Code.GDFarmer2Objects1.length = 0;
gdjs._22823_21381Code.GDFarmer2Objects2.length = 0;
gdjs._22823_21381Code.GDWispyFire2Objects1.length = 0;
gdjs._22823_21381Code.GDWispyFire2Objects2.length = 0;
gdjs._22823_21381Code.GD_9527604_9536187_9531215_9520998Objects1.length = 0;
gdjs._22823_21381Code.GD_9527604_9536187_9531215_9520998Objects2.length = 0;
gdjs._22823_21381Code.GD_9528216_9525103_9535268_9521017Objects1.length = 0;
gdjs._22823_21381Code.GD_9528216_9525103_9535268_9521017Objects2.length = 0;
gdjs._22823_21381Code.GD_9524320_9522987_9528216_9525103Objects1.length = 0;
gdjs._22823_21381Code.GD_9524320_9522987_9528216_9525103Objects2.length = 0;
gdjs._22823_21381Code.GDFarmerObjects1.length = 0;
gdjs._22823_21381Code.GDFarmerObjects2.length = 0;
gdjs._22823_21381Code.GD_9538459_9525377Objects1.length = 0;
gdjs._22823_21381Code.GD_9538459_9525377Objects2.length = 0;
gdjs._22823_21381Code.GD_9520256_9536865Objects1.length = 0;
gdjs._22823_21381Code.GD_9520256_9536865Objects2.length = 0;
gdjs._22823_21381Code.GD_9521151_9533021Objects1.length = 0;
gdjs._22823_21381Code.GD_9521151_9533021Objects2.length = 0;
gdjs._22823_21381Code.GDheartObjects1.length = 0;
gdjs._22823_21381Code.GDheartObjects2.length = 0;
gdjs._22823_21381Code.GD_9529983_9521629_9520540Objects1.length = 0;
gdjs._22823_21381Code.GD_9529983_9521629_9520540Objects2.length = 0;
gdjs._22823_21381Code.GDenergyObjects1.length = 0;
gdjs._22823_21381Code.GDenergyObjects2.length = 0;
gdjs._22823_21381Code.GD_9520307_9521147_9520540Objects1.length = 0;
gdjs._22823_21381Code.GD_9520307_9521147_9520540Objects2.length = 0;
gdjs._22823_21381Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects1.length = 0;
gdjs._22823_21381Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects2.length = 0;
gdjs._22823_21381Code.GD_9521462_9528040_9538190Objects1.length = 0;
gdjs._22823_21381Code.GD_9521462_9528040_9538190Objects2.length = 0;
gdjs._22823_21381Code.GDFallTreesBackgroundObjects1.length = 0;
gdjs._22823_21381Code.GDFallTreesBackgroundObjects2.length = 0;
gdjs._22823_21381Code.GDNewSprite4Objects1.length = 0;
gdjs._22823_21381Code.GDNewSprite4Objects2.length = 0;
gdjs._22823_21381Code.GD_9536864_9520986Objects1.length = 0;
gdjs._22823_21381Code.GD_9536864_9520986Objects2.length = 0;


return;

}

gdjs['_22823_21381Code'] = gdjs._22823_21381Code;
