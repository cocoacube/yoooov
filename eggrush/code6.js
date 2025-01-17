gdjs._26410_21629_21517_22330_262232Code = {};
gdjs._26410_21629_21517_22330_262232Code.localVariables = [];
gdjs._26410_21629_21517_22330_262232Code.GDNewTextObjects1= [];
gdjs._26410_21629_21517_22330_262232Code.GDNewTextObjects2= [];
gdjs._26410_21629_21517_22330_262232Code.GDNewSpriteObjects1= [];
gdjs._26410_21629_21517_22330_262232Code.GDNewSpriteObjects2= [];
gdjs._26410_21629_21517_22330_262232Code.GDcloseObjects1= [];
gdjs._26410_21629_21517_22330_262232Code.GDcloseObjects2= [];


gdjs._26410_21629_21517_22330_262232Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("close"), gdjs._26410_21629_21517_22330_262232Code.GDcloseObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26410_21629_21517_22330_262232Code.GDcloseObjects1.length;i<l;++i) {
    if ( gdjs._26410_21629_21517_22330_262232Code.GDcloseObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._26410_21629_21517_22330_262232Code.GDcloseObjects1[k] = gdjs._26410_21629_21517_22330_262232Code.GDcloseObjects1[i];
        ++k;
    }
}
gdjs._26410_21629_21517_22330_262232Code.GDcloseObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs._26410_21629_21517_22330_262232Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._26410_21629_21517_22330_262232Code.GDNewTextObjects1.length = 0;
gdjs._26410_21629_21517_22330_262232Code.GDNewTextObjects2.length = 0;
gdjs._26410_21629_21517_22330_262232Code.GDNewSpriteObjects1.length = 0;
gdjs._26410_21629_21517_22330_262232Code.GDNewSpriteObjects2.length = 0;
gdjs._26410_21629_21517_22330_262232Code.GDcloseObjects1.length = 0;
gdjs._26410_21629_21517_22330_262232Code.GDcloseObjects2.length = 0;

gdjs._26410_21629_21517_22330_262232Code.eventsList0(runtimeScene);
gdjs._26410_21629_21517_22330_262232Code.GDNewTextObjects1.length = 0;
gdjs._26410_21629_21517_22330_262232Code.GDNewTextObjects2.length = 0;
gdjs._26410_21629_21517_22330_262232Code.GDNewSpriteObjects1.length = 0;
gdjs._26410_21629_21517_22330_262232Code.GDNewSpriteObjects2.length = 0;
gdjs._26410_21629_21517_22330_262232Code.GDcloseObjects1.length = 0;
gdjs._26410_21629_21517_22330_262232Code.GDcloseObjects2.length = 0;


return;

}

gdjs['_26410_21629_21517_22330_262232Code'] = gdjs._26410_21629_21517_22330_262232Code;
