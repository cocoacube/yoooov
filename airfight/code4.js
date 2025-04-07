gdjs.winCode = {};
gdjs.winCode.localVariables = [];
gdjs.winCode.GDwinObjects1= [];
gdjs.winCode.GDwinObjects2= [];
gdjs.winCode.GDwinObjects3= [];
gdjs.winCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.winCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.winCode.GDTransparentButtonWithWhiteBlueBorderObjects3= [];


gdjs.winCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PlayScene2", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PlayScene3", false);
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


};gdjs.winCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.winCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.winCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.winCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.winCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.winCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.winCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15013196);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.winCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.winCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winCode.GDwinObjects1.length = 0;
gdjs.winCode.GDwinObjects2.length = 0;
gdjs.winCode.GDwinObjects3.length = 0;
gdjs.winCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.winCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.winCode.GDTransparentButtonWithWhiteBlueBorderObjects3.length = 0;

gdjs.winCode.eventsList1(runtimeScene);
gdjs.winCode.GDwinObjects1.length = 0;
gdjs.winCode.GDwinObjects2.length = 0;
gdjs.winCode.GDwinObjects3.length = 0;
gdjs.winCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.winCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.winCode.GDTransparentButtonWithWhiteBlueBorderObjects3.length = 0;


return;

}

gdjs['winCode'] = gdjs.winCode;
