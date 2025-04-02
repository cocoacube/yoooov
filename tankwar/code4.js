gdjs._36710_24211Code = {};
gdjs._36710_24211Code.localVariables = [];
gdjs._36710_24211Code.GD_9522823_9522320_9522270Objects1= [];
gdjs._36710_24211Code.GD_9522823_9522320_9522270Objects2= [];
gdjs._36710_24211Code.GDplayerObjects1= [];
gdjs._36710_24211Code.GDplayerObjects2= [];
gdjs._36710_24211Code.GDNewSpriteObjects1= [];
gdjs._36710_24211Code.GDNewSpriteObjects2= [];
gdjs._36710_24211Code.GDuse1Objects1= [];
gdjs._36710_24211Code.GDuse1Objects2= [];
gdjs._36710_24211Code.GDFerrariObjects1= [];
gdjs._36710_24211Code.GDFerrariObjects2= [];
gdjs._36710_24211Code.GDuse0Objects1= [];
gdjs._36710_24211Code.GDuse0Objects2= [];


gdjs._36710_24211Code.mapOfGDgdjs_9546_959536710_959524211Code_9546GDFerrariObjects1Objects = Hashtable.newFrom({"Ferrari": gdjs._36710_24211Code.GDFerrariObjects1});
gdjs._36710_24211Code.mapOfGDgdjs_9546_959536710_959524211Code_9546GDuse1Objects1Objects = Hashtable.newFrom({"use1": gdjs._36710_24211Code.GDuse1Objects1});
gdjs._36710_24211Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._36710_24211Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36710_24211Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs._36710_24211Code.GDNewSpriteObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._36710_24211Code.GDNewSpriteObjects1[k] = gdjs._36710_24211Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._36710_24211Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs._36710_24211Code.GDFerrariObjects1.length = 0;

gdjs._36710_24211Code.GDuse1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._36710_24211Code.mapOfGDgdjs_9546_959536710_959524211Code_9546GDFerrariObjects1Objects, 270, 70, "");
}{for(var i = 0, len = gdjs._36710_24211Code.GDFerrariObjects1.length ;i < len;++i) {
    gdjs._36710_24211Code.GDFerrariObjects1[i].getBehavior("Scale").setScale(0.25);
}
}{for(var i = 0, len = gdjs._36710_24211Code.GDFerrariObjects1.length ;i < len;++i) {
    gdjs._36710_24211Code.GDFerrariObjects1[i].setAngle(-(90));
}
}{for(var i = 0, len = gdjs._36710_24211Code.GDFerrariObjects1.length ;i < len;++i) {
    gdjs._36710_24211Code.GDFerrariObjects1[i].getBehavior("Resizable").setHeight(250);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._36710_24211Code.mapOfGDgdjs_9546_959536710_959524211Code_9546GDuse1Objects1Objects, 340, 322, "");
}{for(var i = 0, len = gdjs._36710_24211Code.GDuse1Objects1.length ;i < len;++i) {
    gdjs._36710_24211Code.GDuse1Objects1[i].getBehavior("Resizable").setHeight(72);
}
}{for(var i = 0, len = gdjs._36710_24211Code.GDuse1Objects1.length ;i < len;++i) {
    gdjs._36710_24211Code.GDuse1Objects1[i].getBehavior("Resizable").setWidth(146);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("use1"), gdjs._36710_24211Code.GDuse1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36710_24211Code.GDuse1Objects1.length;i<l;++i) {
    if ( gdjs._36710_24211Code.GDuse1Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._36710_24211Code.GDuse1Objects1[k] = gdjs._36710_24211Code.GDuse1Objects1[i];
        ++k;
    }
}
gdjs._36710_24211Code.GDuse1Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setString("Ferrari");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("use0"), gdjs._36710_24211Code.GDuse0Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36710_24211Code.GDuse0Objects1.length;i<l;++i) {
    if ( gdjs._36710_24211Code.GDuse0Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._36710_24211Code.GDuse0Objects1[k] = gdjs._36710_24211Code.GDuse0Objects1[i];
        ++k;
    }
}
gdjs._36710_24211Code.GDuse0Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setString("Tank");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._36710_24211Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._36710_24211Code.GD_9522823_9522320_9522270Objects1.length = 0;
gdjs._36710_24211Code.GD_9522823_9522320_9522270Objects2.length = 0;
gdjs._36710_24211Code.GDplayerObjects1.length = 0;
gdjs._36710_24211Code.GDplayerObjects2.length = 0;
gdjs._36710_24211Code.GDNewSpriteObjects1.length = 0;
gdjs._36710_24211Code.GDNewSpriteObjects2.length = 0;
gdjs._36710_24211Code.GDuse1Objects1.length = 0;
gdjs._36710_24211Code.GDuse1Objects2.length = 0;
gdjs._36710_24211Code.GDFerrariObjects1.length = 0;
gdjs._36710_24211Code.GDFerrariObjects2.length = 0;
gdjs._36710_24211Code.GDuse0Objects1.length = 0;
gdjs._36710_24211Code.GDuse0Objects2.length = 0;

gdjs._36710_24211Code.eventsList0(runtimeScene);
gdjs._36710_24211Code.GD_9522823_9522320_9522270Objects1.length = 0;
gdjs._36710_24211Code.GD_9522823_9522320_9522270Objects2.length = 0;
gdjs._36710_24211Code.GDplayerObjects1.length = 0;
gdjs._36710_24211Code.GDplayerObjects2.length = 0;
gdjs._36710_24211Code.GDNewSpriteObjects1.length = 0;
gdjs._36710_24211Code.GDNewSpriteObjects2.length = 0;
gdjs._36710_24211Code.GDuse1Objects1.length = 0;
gdjs._36710_24211Code.GDuse1Objects2.length = 0;
gdjs._36710_24211Code.GDFerrariObjects1.length = 0;
gdjs._36710_24211Code.GDFerrariObjects2.length = 0;
gdjs._36710_24211Code.GDuse0Objects1.length = 0;
gdjs._36710_24211Code.GDuse0Objects2.length = 0;


return;

}

gdjs['_36710_24211Code'] = gdjs._36710_24211Code;
