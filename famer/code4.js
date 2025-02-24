gdjs._27515_20129_26102Code = {};
gdjs._27515_20129_26102Code.localVariables = [];
gdjs._27515_20129_26102Code.GDgame_9595overObjects1= [];
gdjs._27515_20129_26102Code.GDgame_9595overObjects2= [];
gdjs._27515_20129_26102Code.GDNewSpriteObjects1= [];
gdjs._27515_20129_26102Code.GDNewSpriteObjects2= [];
gdjs._27515_20129_26102Code.GDPlayObjects1= [];
gdjs._27515_20129_26102Code.GDPlayObjects2= [];
gdjs._27515_20129_26102Code.GDNewSprite2Objects1= [];
gdjs._27515_20129_26102Code.GDNewSprite2Objects2= [];
gdjs._27515_20129_26102Code.GDNewSprite3Objects1= [];
gdjs._27515_20129_26102Code.GDNewSprite3Objects2= [];
gdjs._27515_20129_26102Code.GDYOU_9595ARE_9595DIEDObjects1= [];
gdjs._27515_20129_26102Code.GDYOU_9595ARE_9595DIEDObjects2= [];
gdjs._27515_20129_26102Code.GDFarmerObjects1= [];
gdjs._27515_20129_26102Code.GDFarmerObjects2= [];
gdjs._27515_20129_26102Code.GD_9538459_9525377Objects1= [];
gdjs._27515_20129_26102Code.GD_9538459_9525377Objects2= [];
gdjs._27515_20129_26102Code.GD_9520256_9536865Objects1= [];
gdjs._27515_20129_26102Code.GD_9520256_9536865Objects2= [];
gdjs._27515_20129_26102Code.GD_9521151_9533021Objects1= [];
gdjs._27515_20129_26102Code.GD_9521151_9533021Objects2= [];
gdjs._27515_20129_26102Code.GDheartObjects1= [];
gdjs._27515_20129_26102Code.GDheartObjects2= [];
gdjs._27515_20129_26102Code.GD_9529983_9521629_9520540Objects1= [];
gdjs._27515_20129_26102Code.GD_9529983_9521629_9520540Objects2= [];
gdjs._27515_20129_26102Code.GDenergyObjects1= [];
gdjs._27515_20129_26102Code.GDenergyObjects2= [];
gdjs._27515_20129_26102Code.GD_9520307_9521147_9520540Objects1= [];
gdjs._27515_20129_26102Code.GD_9520307_9521147_9520540Objects2= [];
gdjs._27515_20129_26102Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects1= [];
gdjs._27515_20129_26102Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects2= [];
gdjs._27515_20129_26102Code.GD_9521462_9528040_9538190Objects1= [];
gdjs._27515_20129_26102Code.GD_9521462_9528040_9538190Objects2= [];
gdjs._27515_20129_26102Code.GDFallTreesBackgroundObjects1= [];
gdjs._27515_20129_26102Code.GDFallTreesBackgroundObjects2= [];
gdjs._27515_20129_26102Code.GDNewSprite4Objects1= [];
gdjs._27515_20129_26102Code.GDNewSprite4Objects2= [];
gdjs._27515_20129_26102Code.GD_9536864_9520986Objects1= [];
gdjs._27515_20129_26102Code.GD_9536864_9520986Objects2= [];


gdjs._27515_20129_26102Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("退出"), gdjs._27515_20129_26102Code.GD_9536864_9520986Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._27515_20129_26102Code.GD_9536864_9520986Objects1.length;i<l;++i) {
    if ( gdjs._27515_20129_26102Code.GD_9536864_9520986Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._27515_20129_26102Code.GD_9536864_9520986Objects1[k] = gdjs._27515_20129_26102Code.GD_9536864_9520986Objects1[i];
        ++k;
    }
}
gdjs._27515_20129_26102Code.GD_9536864_9520986Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "失败界面", false);
}}

}


};

gdjs._27515_20129_26102Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._27515_20129_26102Code.GDgame_9595overObjects1.length = 0;
gdjs._27515_20129_26102Code.GDgame_9595overObjects2.length = 0;
gdjs._27515_20129_26102Code.GDNewSpriteObjects1.length = 0;
gdjs._27515_20129_26102Code.GDNewSpriteObjects2.length = 0;
gdjs._27515_20129_26102Code.GDPlayObjects1.length = 0;
gdjs._27515_20129_26102Code.GDPlayObjects2.length = 0;
gdjs._27515_20129_26102Code.GDNewSprite2Objects1.length = 0;
gdjs._27515_20129_26102Code.GDNewSprite2Objects2.length = 0;
gdjs._27515_20129_26102Code.GDNewSprite3Objects1.length = 0;
gdjs._27515_20129_26102Code.GDNewSprite3Objects2.length = 0;
gdjs._27515_20129_26102Code.GDYOU_9595ARE_9595DIEDObjects1.length = 0;
gdjs._27515_20129_26102Code.GDYOU_9595ARE_9595DIEDObjects2.length = 0;
gdjs._27515_20129_26102Code.GDFarmerObjects1.length = 0;
gdjs._27515_20129_26102Code.GDFarmerObjects2.length = 0;
gdjs._27515_20129_26102Code.GD_9538459_9525377Objects1.length = 0;
gdjs._27515_20129_26102Code.GD_9538459_9525377Objects2.length = 0;
gdjs._27515_20129_26102Code.GD_9520256_9536865Objects1.length = 0;
gdjs._27515_20129_26102Code.GD_9520256_9536865Objects2.length = 0;
gdjs._27515_20129_26102Code.GD_9521151_9533021Objects1.length = 0;
gdjs._27515_20129_26102Code.GD_9521151_9533021Objects2.length = 0;
gdjs._27515_20129_26102Code.GDheartObjects1.length = 0;
gdjs._27515_20129_26102Code.GDheartObjects2.length = 0;
gdjs._27515_20129_26102Code.GD_9529983_9521629_9520540Objects1.length = 0;
gdjs._27515_20129_26102Code.GD_9529983_9521629_9520540Objects2.length = 0;
gdjs._27515_20129_26102Code.GDenergyObjects1.length = 0;
gdjs._27515_20129_26102Code.GDenergyObjects2.length = 0;
gdjs._27515_20129_26102Code.GD_9520307_9521147_9520540Objects1.length = 0;
gdjs._27515_20129_26102Code.GD_9520307_9521147_9520540Objects2.length = 0;
gdjs._27515_20129_26102Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects1.length = 0;
gdjs._27515_20129_26102Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects2.length = 0;
gdjs._27515_20129_26102Code.GD_9521462_9528040_9538190Objects1.length = 0;
gdjs._27515_20129_26102Code.GD_9521462_9528040_9538190Objects2.length = 0;
gdjs._27515_20129_26102Code.GDFallTreesBackgroundObjects1.length = 0;
gdjs._27515_20129_26102Code.GDFallTreesBackgroundObjects2.length = 0;
gdjs._27515_20129_26102Code.GDNewSprite4Objects1.length = 0;
gdjs._27515_20129_26102Code.GDNewSprite4Objects2.length = 0;
gdjs._27515_20129_26102Code.GD_9536864_9520986Objects1.length = 0;
gdjs._27515_20129_26102Code.GD_9536864_9520986Objects2.length = 0;

gdjs._27515_20129_26102Code.eventsList0(runtimeScene);
gdjs._27515_20129_26102Code.GDgame_9595overObjects1.length = 0;
gdjs._27515_20129_26102Code.GDgame_9595overObjects2.length = 0;
gdjs._27515_20129_26102Code.GDNewSpriteObjects1.length = 0;
gdjs._27515_20129_26102Code.GDNewSpriteObjects2.length = 0;
gdjs._27515_20129_26102Code.GDPlayObjects1.length = 0;
gdjs._27515_20129_26102Code.GDPlayObjects2.length = 0;
gdjs._27515_20129_26102Code.GDNewSprite2Objects1.length = 0;
gdjs._27515_20129_26102Code.GDNewSprite2Objects2.length = 0;
gdjs._27515_20129_26102Code.GDNewSprite3Objects1.length = 0;
gdjs._27515_20129_26102Code.GDNewSprite3Objects2.length = 0;
gdjs._27515_20129_26102Code.GDYOU_9595ARE_9595DIEDObjects1.length = 0;
gdjs._27515_20129_26102Code.GDYOU_9595ARE_9595DIEDObjects2.length = 0;
gdjs._27515_20129_26102Code.GDFarmerObjects1.length = 0;
gdjs._27515_20129_26102Code.GDFarmerObjects2.length = 0;
gdjs._27515_20129_26102Code.GD_9538459_9525377Objects1.length = 0;
gdjs._27515_20129_26102Code.GD_9538459_9525377Objects2.length = 0;
gdjs._27515_20129_26102Code.GD_9520256_9536865Objects1.length = 0;
gdjs._27515_20129_26102Code.GD_9520256_9536865Objects2.length = 0;
gdjs._27515_20129_26102Code.GD_9521151_9533021Objects1.length = 0;
gdjs._27515_20129_26102Code.GD_9521151_9533021Objects2.length = 0;
gdjs._27515_20129_26102Code.GDheartObjects1.length = 0;
gdjs._27515_20129_26102Code.GDheartObjects2.length = 0;
gdjs._27515_20129_26102Code.GD_9529983_9521629_9520540Objects1.length = 0;
gdjs._27515_20129_26102Code.GD_9529983_9521629_9520540Objects2.length = 0;
gdjs._27515_20129_26102Code.GDenergyObjects1.length = 0;
gdjs._27515_20129_26102Code.GDenergyObjects2.length = 0;
gdjs._27515_20129_26102Code.GD_9520307_9521147_9520540Objects1.length = 0;
gdjs._27515_20129_26102Code.GD_9520307_9521147_9520540Objects2.length = 0;
gdjs._27515_20129_26102Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects1.length = 0;
gdjs._27515_20129_26102Code.GD_9532972_9521253_9565288_9521021_9522987_9532972_9526223_9565289Objects2.length = 0;
gdjs._27515_20129_26102Code.GD_9521462_9528040_9538190Objects1.length = 0;
gdjs._27515_20129_26102Code.GD_9521462_9528040_9538190Objects2.length = 0;
gdjs._27515_20129_26102Code.GDFallTreesBackgroundObjects1.length = 0;
gdjs._27515_20129_26102Code.GDFallTreesBackgroundObjects2.length = 0;
gdjs._27515_20129_26102Code.GDNewSprite4Objects1.length = 0;
gdjs._27515_20129_26102Code.GDNewSprite4Objects2.length = 0;
gdjs._27515_20129_26102Code.GD_9536864_9520986Objects1.length = 0;
gdjs._27515_20129_26102Code.GD_9536864_9520986Objects2.length = 0;


return;

}

gdjs['_27515_20129_26102Code'] = gdjs._27515_20129_26102Code;
