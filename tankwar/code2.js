gdjs._21830_24215_30028_38754Code = {};
gdjs._21830_24215_30028_38754Code.localVariables = [];
gdjs._21830_24215_30028_38754Code.GDNewTextObjects1= [];
gdjs._21830_24215_30028_38754Code.GDNewTextObjects2= [];
gdjs._21830_24215_30028_38754Code.GDgoinObjects1= [];
gdjs._21830_24215_30028_38754Code.GDgoinObjects2= [];
gdjs._21830_24215_30028_38754Code.GDNewSpriteObjects1= [];
gdjs._21830_24215_30028_38754Code.GDNewSpriteObjects2= [];
gdjs._21830_24215_30028_38754Code.GDgobackObjects1= [];
gdjs._21830_24215_30028_38754Code.GDgobackObjects2= [];
gdjs._21830_24215_30028_38754Code.GD_9520572_9536710_9522330Objects1= [];
gdjs._21830_24215_30028_38754Code.GD_9520572_9536710_9522330Objects2= [];
gdjs._21830_24215_30028_38754Code.GDNewSprite3Objects1= [];
gdjs._21830_24215_30028_38754Code.GDNewSprite3Objects2= [];


gdjs._21830_24215_30028_38754Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("goin"), gdjs._21830_24215_30028_38754Code.GDgoinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs._21830_24215_30028_38754Code.GDgoinObjects1.length;i<l;++i) {
    if ( gdjs._21830_24215_30028_38754Code.GDgoinObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs._21830_24215_30028_38754Code.GDgoinObjects1[k] = gdjs._21830_24215_30028_38754Code.GDgoinObjects1[i];
        ++k;
    }
}
gdjs._21830_24215_30028_38754Code.GDgoinObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 0);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "商店1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("goin"), gdjs._21830_24215_30028_38754Code.GDgoinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs._21830_24215_30028_38754Code.GDgoinObjects1.length;i<l;++i) {
    if ( gdjs._21830_24215_30028_38754Code.GDgoinObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs._21830_24215_30028_38754Code.GDgoinObjects1[k] = gdjs._21830_24215_30028_38754Code.GDgoinObjects1[i];
        ++k;
    }
}
gdjs._21830_24215_30028_38754Code.GDgoinObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "商店2");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("goback"), gdjs._21830_24215_30028_38754Code.GDgobackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._21830_24215_30028_38754Code.GDgobackObjects1.length;i<l;++i) {
    if ( gdjs._21830_24215_30028_38754Code.GDgobackObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._21830_24215_30028_38754Code.GDgobackObjects1[k] = gdjs._21830_24215_30028_38754Code.GDgobackObjects1[i];
        ++k;
    }
}
gdjs._21830_24215_30028_38754Code.GDgobackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("停车场"), gdjs._21830_24215_30028_38754Code.GD_9520572_9536710_9522330Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._21830_24215_30028_38754Code.GD_9520572_9536710_9522330Objects1.length;i<l;++i) {
    if ( gdjs._21830_24215_30028_38754Code.GD_9520572_9536710_9522330Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._21830_24215_30028_38754Code.GD_9520572_9536710_9522330Objects1[k] = gdjs._21830_24215_30028_38754Code.GD_9520572_9536710_9522330Objects1[i];
        ++k;
    }
}
gdjs._21830_24215_30028_38754Code.GD_9520572_9536710_9522330Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "车库");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._21830_24215_30028_38754Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._21830_24215_30028_38754Code.GDNewTextObjects1.length = 0;
gdjs._21830_24215_30028_38754Code.GDNewTextObjects2.length = 0;
gdjs._21830_24215_30028_38754Code.GDgoinObjects1.length = 0;
gdjs._21830_24215_30028_38754Code.GDgoinObjects2.length = 0;
gdjs._21830_24215_30028_38754Code.GDNewSpriteObjects1.length = 0;
gdjs._21830_24215_30028_38754Code.GDNewSpriteObjects2.length = 0;
gdjs._21830_24215_30028_38754Code.GDgobackObjects1.length = 0;
gdjs._21830_24215_30028_38754Code.GDgobackObjects2.length = 0;
gdjs._21830_24215_30028_38754Code.GD_9520572_9536710_9522330Objects1.length = 0;
gdjs._21830_24215_30028_38754Code.GD_9520572_9536710_9522330Objects2.length = 0;
gdjs._21830_24215_30028_38754Code.GDNewSprite3Objects1.length = 0;
gdjs._21830_24215_30028_38754Code.GDNewSprite3Objects2.length = 0;

gdjs._21830_24215_30028_38754Code.eventsList0(runtimeScene);
gdjs._21830_24215_30028_38754Code.GDNewTextObjects1.length = 0;
gdjs._21830_24215_30028_38754Code.GDNewTextObjects2.length = 0;
gdjs._21830_24215_30028_38754Code.GDgoinObjects1.length = 0;
gdjs._21830_24215_30028_38754Code.GDgoinObjects2.length = 0;
gdjs._21830_24215_30028_38754Code.GDNewSpriteObjects1.length = 0;
gdjs._21830_24215_30028_38754Code.GDNewSpriteObjects2.length = 0;
gdjs._21830_24215_30028_38754Code.GDgobackObjects1.length = 0;
gdjs._21830_24215_30028_38754Code.GDgobackObjects2.length = 0;
gdjs._21830_24215_30028_38754Code.GD_9520572_9536710_9522330Objects1.length = 0;
gdjs._21830_24215_30028_38754Code.GD_9520572_9536710_9522330Objects2.length = 0;
gdjs._21830_24215_30028_38754Code.GDNewSprite3Objects1.length = 0;
gdjs._21830_24215_30028_38754Code.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['_21830_24215_30028_38754Code'] = gdjs._21830_24215_30028_38754Code;
