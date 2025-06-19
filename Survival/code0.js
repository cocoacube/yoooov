gdjs.UICode = {};
gdjs.UICode.localVariables = [];
gdjs.UICode.GDbackgroundObjects1= [];
gdjs.UICode.GDbackgroundObjects2= [];
gdjs.UICode.GDBlueButtonObjects1= [];
gdjs.UICode.GDBlueButtonObjects2= [];
gdjs.UICode.GDNewTextObjects1= [];
gdjs.UICode.GDNewTextObjects2= [];
gdjs.UICode.GDBlankEmoteMidObjects1= [];
gdjs.UICode.GDBlankEmoteMidObjects2= [];
gdjs.UICode.GDNewText2Objects1= [];
gdjs.UICode.GDNewText2Objects2= [];
gdjs.UICode.GDRedButtonWithShadowObjects1= [];
gdjs.UICode.GDRedButtonWithShadowObjects2= [];
gdjs.UICode.GDBox1Objects1= [];
gdjs.UICode.GDBox1Objects2= [];
gdjs.UICode.GDSawObjects1= [];
gdjs.UICode.GDSawObjects2= [];
gdjs.UICode.GDNewSpriteObjects1= [];
gdjs.UICode.GDNewSpriteObjects2= [];
gdjs.UICode.GDFloatTextObjects1= [];
gdjs.UICode.GDFloatTextObjects2= [];


gdjs.UICode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.UICode.GDNewText2Objects1);
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "First Level");
}{for(var i = 0, len = gdjs.UICode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.UICode.GDNewText2Objects1[i].activateBehavior("Sway", false);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "d98dcd316cae27b2e5896d7fe856218da9e81006db0c099059a8d7f670b791d4_Satin Danger.aac", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.UICode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.UICode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.UICode.GDBlueButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.UICode.GDBlueButtonObjects1[k] = gdjs.UICode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.UICode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.unloadAllAudio(runtimeScene);
}{gdjs.evtTools.sound.playSound(runtimeScene, "f5d3ffae911b06f5a36cc912f77f25acdd0a6e0e2fad464b2a524ec3064881f2_Click_03.aac", false, 100, 0.8);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelChoose", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.UICode.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.UICode.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.UICode.GDRedButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.UICode.GDRedButtonWithShadowObjects1[k] = gdjs.UICode.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.UICode.GDRedButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.unloadAllAudio(runtimeScene);
}{gdjs.evtTools.sound.playSound(runtimeScene, "f5d3ffae911b06f5a36cc912f77f25acdd0a6e0e2fad464b2a524ec3064881f2_Click_03.aac", false, 100, 0.8);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "About", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(19).getChild(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(19).getChild(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(19).getChild(2).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(19).getChild(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15792092);
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.UICode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Saw"), gdjs.UICode.GDSawObjects1);
{for(var i = 0, len = gdjs.UICode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.UICode.GDNewText2Objects1[i].activateBehavior("Sway", true);
}
}{for(var i = 0, len = gdjs.UICode.GDSawObjects1.length ;i < len;++i) {
    gdjs.UICode.GDSawObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{for(var i = 0, len = gdjs.UICode.GDSawObjects1.length ;i < len;++i) {
    gdjs.UICode.GDSawObjects1[i].setPosition(419,-(172));
}
}{for(var i = 0, len = gdjs.UICode.GDSawObjects1.length ;i < len;++i) {
    gdjs.UICode.GDSawObjects1[i].getBehavior("Resizable").setWidth(1164);
}
}{for(var i = 0, len = gdjs.UICode.GDSawObjects1.length ;i < len;++i) {
    gdjs.UICode.GDSawObjects1[i].getBehavior("Resizable").setHeight(1068);
}
}{for(var i = 0, len = gdjs.UICode.GDSawObjects1.length ;i < len;++i) {
    gdjs.UICode.GDSawObjects1[i].rotateTowardAngle(0, 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.UICode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.UICode.GDNewText2Objects1[i].setOutlineEnabled(true);
}
}{for(var i = 0, len = gdjs.UICode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.UICode.GDNewText2Objects1[i].setOutlineColor("248;231;28");
}
}{for(var i = 0, len = gdjs.UICode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.UICode.GDNewText2Objects1[i].setOutlineThickness(2);
}
}{for(var i = 0, len = gdjs.UICode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.UICode.GDNewText2Objects1[i].setFontName("a7525df1cce09eecd517873e6ebe7294b7789f189d624770913570e40b1c6c92_Kenney Rocket.ttf");
}
}{for(var i = 0, len = gdjs.UICode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.UICode.GDNewText2Objects1[i].getBehavior("Text").setText("You Pass All The Level");
}
}{for(var i = 0, len = gdjs.UICode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.UICode.GDNewText2Objects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.UICode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.UICode.GDNewText2Objects1[i].setCharacterSize(gdjs.UICode.GDNewText2Objects1[i].getCharacterSize() - (120));
}
}{for(var i = 0, len = gdjs.UICode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.UICode.GDNewText2Objects1[i].setX(gdjs.UICode.GDNewText2Objects1[i].getX() - (100));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.UICode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.UICode.GDbackgroundObjects1.length = 0;
gdjs.UICode.GDbackgroundObjects2.length = 0;
gdjs.UICode.GDBlueButtonObjects1.length = 0;
gdjs.UICode.GDBlueButtonObjects2.length = 0;
gdjs.UICode.GDNewTextObjects1.length = 0;
gdjs.UICode.GDNewTextObjects2.length = 0;
gdjs.UICode.GDBlankEmoteMidObjects1.length = 0;
gdjs.UICode.GDBlankEmoteMidObjects2.length = 0;
gdjs.UICode.GDNewText2Objects1.length = 0;
gdjs.UICode.GDNewText2Objects2.length = 0;
gdjs.UICode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.UICode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.UICode.GDBox1Objects1.length = 0;
gdjs.UICode.GDBox1Objects2.length = 0;
gdjs.UICode.GDSawObjects1.length = 0;
gdjs.UICode.GDSawObjects2.length = 0;
gdjs.UICode.GDNewSpriteObjects1.length = 0;
gdjs.UICode.GDNewSpriteObjects2.length = 0;
gdjs.UICode.GDFloatTextObjects1.length = 0;
gdjs.UICode.GDFloatTextObjects2.length = 0;

gdjs.UICode.eventsList0(runtimeScene);
gdjs.UICode.GDbackgroundObjects1.length = 0;
gdjs.UICode.GDbackgroundObjects2.length = 0;
gdjs.UICode.GDBlueButtonObjects1.length = 0;
gdjs.UICode.GDBlueButtonObjects2.length = 0;
gdjs.UICode.GDNewTextObjects1.length = 0;
gdjs.UICode.GDNewTextObjects2.length = 0;
gdjs.UICode.GDBlankEmoteMidObjects1.length = 0;
gdjs.UICode.GDBlankEmoteMidObjects2.length = 0;
gdjs.UICode.GDNewText2Objects1.length = 0;
gdjs.UICode.GDNewText2Objects2.length = 0;
gdjs.UICode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.UICode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.UICode.GDBox1Objects1.length = 0;
gdjs.UICode.GDBox1Objects2.length = 0;
gdjs.UICode.GDSawObjects1.length = 0;
gdjs.UICode.GDSawObjects2.length = 0;
gdjs.UICode.GDNewSpriteObjects1.length = 0;
gdjs.UICode.GDNewSpriteObjects2.length = 0;
gdjs.UICode.GDFloatTextObjects1.length = 0;
gdjs.UICode.GDFloatTextObjects2.length = 0;


return;

}

gdjs['UICode'] = gdjs.UICode;
