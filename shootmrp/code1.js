gdjs.gameCode = {};
gdjs.gameCode.localVariables = [];
gdjs.gameCode.GDWallsObjects1= [];
gdjs.gameCode.GDWallsObjects2= [];
gdjs.gameCode.GDWallsObjects3= [];
gdjs.gameCode.GDBarriersObjects1= [];
gdjs.gameCode.GDBarriersObjects2= [];
gdjs.gameCode.GDBarriersObjects3= [];
gdjs.gameCode.GDFloorCeilingObjects1= [];
gdjs.gameCode.GDFloorCeilingObjects2= [];
gdjs.gameCode.GDFloorCeilingObjects3= [];
gdjs.gameCode.GDTarget1Objects1= [];
gdjs.gameCode.GDTarget1Objects2= [];
gdjs.gameCode.GDTarget1Objects3= [];
gdjs.gameCode.GDTarget3Objects1= [];
gdjs.gameCode.GDTarget3Objects2= [];
gdjs.gameCode.GDTarget3Objects3= [];
gdjs.gameCode.GDStartRoundObjects1= [];
gdjs.gameCode.GDStartRoundObjects2= [];
gdjs.gameCode.GDStartRoundObjects3= [];
gdjs.gameCode.GDCameraObjects1= [];
gdjs.gameCode.GDCameraObjects2= [];
gdjs.gameCode.GDCameraObjects3= [];
gdjs.gameCode.GDMarkerBelowObjects1= [];
gdjs.gameCode.GDMarkerBelowObjects2= [];
gdjs.gameCode.GDMarkerBelowObjects3= [];
gdjs.gameCode.GDMarkerAboveObjects1= [];
gdjs.gameCode.GDMarkerAboveObjects2= [];
gdjs.gameCode.GDMarkerAboveObjects3= [];
gdjs.gameCode.GDCrosshairObjects1= [];
gdjs.gameCode.GDCrosshairObjects2= [];
gdjs.gameCode.GDCrosshairObjects3= [];
gdjs.gameCode.GDTimeLimitObjects1= [];
gdjs.gameCode.GDTimeLimitObjects2= [];
gdjs.gameCode.GDTimeLimitObjects3= [];
gdjs.gameCode.GDScoreLabelObjects1= [];
gdjs.gameCode.GDScoreLabelObjects2= [];
gdjs.gameCode.GDScoreLabelObjects3= [];
gdjs.gameCode.GDAccuracyObjects1= [];
gdjs.gameCode.GDAccuracyObjects2= [];
gdjs.gameCode.GDAccuracyObjects3= [];
gdjs.gameCode.GDPopUpTextObjects1= [];
gdjs.gameCode.GDPopUpTextObjects2= [];
gdjs.gameCode.GDPopUpTextObjects3= [];
gdjs.gameCode.GDRestartObjects1= [];
gdjs.gameCode.GDRestartObjects2= [];
gdjs.gameCode.GDRestartObjects3= [];
gdjs.gameCode.GDWalkJoystickObjects1= [];
gdjs.gameCode.GDWalkJoystickObjects2= [];
gdjs.gameCode.GDWalkJoystickObjects3= [];
gdjs.gameCode.GDHiddenWallObjects1= [];
gdjs.gameCode.GDHiddenWallObjects2= [];
gdjs.gameCode.GDHiddenWallObjects3= [];
gdjs.gameCode.GDScreenOrientationCheckerObjects1= [];
gdjs.gameCode.GDScreenOrientationCheckerObjects2= [];
gdjs.gameCode.GDScreenOrientationCheckerObjects3= [];
gdjs.gameCode.GDUnnamed3Objects1= [];
gdjs.gameCode.GDUnnamed3Objects2= [];
gdjs.gameCode.GDUnnamed3Objects3= [];
gdjs.gameCode.GDSkeletonWarriorObjects1= [];
gdjs.gameCode.GDSkeletonWarriorObjects2= [];
gdjs.gameCode.GDSkeletonWarriorObjects3= [];
gdjs.gameCode.GDSkeletonRogueObjects1= [];
gdjs.gameCode.GDSkeletonRogueObjects2= [];
gdjs.gameCode.GDSkeletonRogueObjects3= [];
gdjs.gameCode.GDNew3DBoxObjects1= [];
gdjs.gameCode.GDNew3DBoxObjects2= [];
gdjs.gameCode.GDNew3DBoxObjects3= [];


gdjs.gameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("WalkJoystick"), gdjs.gameCode.GDWalkJoystickObjects1);
{for(var i = 0, len = gdjs.gameCode.GDWalkJoystickObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDWalkJoystickObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameCode.GDWalkJoystickObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDWalkJoystickObjects1[i].ActivateControl(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.gameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.gameCode.GDCameraObjects2);
gdjs.copyArray(runtimeScene.getObjects("HiddenWall"), gdjs.gameCode.GDHiddenWallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.gameCode.GDRestartObjects2);
{for(var i = 0, len = gdjs.gameCode.GDCameraObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDCameraObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.gameCode.GDRestartObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDRestartObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.gameCode.GDHiddenWallObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDHiddenWallObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Touch controls", 0, 0, 0);
}
{ //Subevents
gdjs.gameCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDWalkJoystickObjects1Objects = Hashtable.newFrom({"WalkJoystick": gdjs.gameCode.GDWalkJoystickObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDStartRoundObjects1ObjectsGDgdjs_9546gameCode_9546GDTarget3Objects1ObjectsGDgdjs_9546gameCode_9546GDSkeletonRogueObjects1ObjectsGDgdjs_9546gameCode_9546GDSkeletonWarriorObjects1ObjectsGDgdjs_9546gameCode_9546GDUnnamed3Objects1ObjectsGDgdjs_9546gameCode_9546GDNew3DBoxObjects1Objects = Hashtable.newFrom({"StartRound": gdjs.gameCode.GDStartRoundObjects1, "Target3": gdjs.gameCode.GDTarget3Objects1, "SkeletonRogue": gdjs.gameCode.GDSkeletonRogueObjects1, "SkeletonWarrior": gdjs.gameCode.GDSkeletonWarriorObjects1, "Unnamed3": gdjs.gameCode.GDUnnamed3Objects1, "New3DBox": gdjs.gameCode.GDNew3DBoxObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPopUpTextObjects1Objects = Hashtable.newFrom({"PopUpText": gdjs.gameCode.GDPopUpTextObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDSkeletonRogueObjects1Objects = Hashtable.newFrom({"SkeletonRogue": gdjs.gameCode.GDSkeletonRogueObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDSkeletonWarriorObjects1Objects = Hashtable.newFrom({"SkeletonWarrior": gdjs.gameCode.GDSkeletonWarriorObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDNew3DBoxObjects1Objects = Hashtable.newFrom({"New3DBox": gdjs.gameCode.GDNew3DBoxObjects1});
gdjs.gameCode.eventsList2 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDSkeletonRogueObjects1Objects) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDPopUpTextObjects1, gdjs.gameCode.GDPopUpTextObjects2);

{runtimeScene.getScene().getVariables().getFromIndex(2).sub(1);
}{for(var i = 0, len = gdjs.gameCode.GDPopUpTextObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDPopUpTextObjects2[i].getBehavior("Text").setText("-1");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "8801d2d6cde766d642136e3fb8749862146cc40b5ed144379f7ff14315c489f7_death.aac", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDSkeletonWarriorObjects1Objects) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDPopUpTextObjects1, gdjs.gameCode.GDPopUpTextObjects2);

{runtimeScene.getScene().getVariables().getFromIndex(2).sub(2);
}{for(var i = 0, len = gdjs.gameCode.GDPopUpTextObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDPopUpTextObjects2[i].getBehavior("Text").setText("-2");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "8801d2d6cde766d642136e3fb8749862146cc40b5ed144379f7ff14315c489f7_death.aac", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDNew3DBoxObjects1Objects) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDPopUpTextObjects1, gdjs.gameCode.GDPopUpTextObjects2);

{runtimeScene.getScene().getVariables().getFromIndex(2).add(5);
}{for(var i = 0, len = gdjs.gameCode.GDPopUpTextObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDPopUpTextObjects2[i].getBehavior("Text").setText("+5");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sat Mar 01 2025 (1).mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.gameCode.GDPopUpTextObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreLabel"), gdjs.gameCode.GDScoreLabelObjects1);
{for(var i = 0, len = gdjs.gameCode.GDScoreLabelObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDScoreLabelObjects1[i].getBehavior("Text").setText("Score: " + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
}{for(var i = 0, len = gdjs.gameCode.GDPopUpTextObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDPopUpTextObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Fade", 0, "linear", 0.5, true);
}
}{for(var i = 0, len = gdjs.gameCode.GDPopUpTextObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDPopUpTextObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(4, 150, -(300), -(150), 3, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.gameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.gameCode.GDNew3DBoxObjects1, gdjs.gameCode.GDNew3DBoxObjects2);

gdjs.copyArray(gdjs.gameCode.GDSkeletonRogueObjects1, gdjs.gameCode.GDSkeletonRogueObjects2);

gdjs.copyArray(gdjs.gameCode.GDSkeletonWarriorObjects1, gdjs.gameCode.GDSkeletonWarriorObjects2);

gdjs.copyArray(gdjs.gameCode.GDStartRoundObjects1, gdjs.gameCode.GDStartRoundObjects2);

gdjs.copyArray(gdjs.gameCode.GDTarget3Objects1, gdjs.gameCode.GDTarget3Objects2);

gdjs.copyArray(gdjs.gameCode.GDUnnamed3Objects1, gdjs.gameCode.GDUnnamed3Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDStartRoundObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDStartRoundObjects2[i].getCenterYInScene() < gdjs.evtsExt__Raycaster3D__IntersectionY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDStartRoundObjects2[k] = gdjs.gameCode.GDStartRoundObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDStartRoundObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.gameCode.GDTarget3Objects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDTarget3Objects2[i].getCenterYInScene() < gdjs.evtsExt__Raycaster3D__IntersectionY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDTarget3Objects2[k] = gdjs.gameCode.GDTarget3Objects2[i];
        ++k;
    }
}
gdjs.gameCode.GDTarget3Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.gameCode.GDSkeletonRogueObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDSkeletonRogueObjects2[i].getCenterYInScene() < gdjs.evtsExt__Raycaster3D__IntersectionY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDSkeletonRogueObjects2[k] = gdjs.gameCode.GDSkeletonRogueObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDSkeletonRogueObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.gameCode.GDSkeletonWarriorObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDSkeletonWarriorObjects2[i].getCenterYInScene() < gdjs.evtsExt__Raycaster3D__IntersectionY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDSkeletonWarriorObjects2[k] = gdjs.gameCode.GDSkeletonWarriorObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDSkeletonWarriorObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.gameCode.GDUnnamed3Objects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDUnnamed3Objects2[i].getCenterYInScene() < gdjs.evtsExt__Raycaster3D__IntersectionY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDUnnamed3Objects2[k] = gdjs.gameCode.GDUnnamed3Objects2[i];
        ++k;
    }
}
gdjs.gameCode.GDUnnamed3Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.gameCode.GDNew3DBoxObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDNew3DBoxObjects2[i].getCenterYInScene() < gdjs.evtsExt__Raycaster3D__IntersectionY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDNew3DBoxObjects2[k] = gdjs.gameCode.GDNew3DBoxObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDNew3DBoxObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDNew3DBoxObjects2 */
/* Reuse gdjs.gameCode.GDSkeletonRogueObjects2 */
/* Reuse gdjs.gameCode.GDSkeletonWarriorObjects2 */
/* Reuse gdjs.gameCode.GDStartRoundObjects2 */
/* Reuse gdjs.gameCode.GDTarget3Objects2 */
/* Reuse gdjs.gameCode.GDUnnamed3Objects2 */
{for(var i = 0, len = gdjs.gameCode.GDStartRoundObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDStartRoundObjects2[i].getBehavior("Tween").addObjectAngleTween2("spin", -(180), "linear", 0.4, false);
}
for(var i = 0, len = gdjs.gameCode.GDTarget3Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDTarget3Objects2[i].getBehavior("Tween").addObjectAngleTween2("spin", -(180), "linear", 0.4, false);
}
for(var i = 0, len = gdjs.gameCode.GDSkeletonRogueObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDSkeletonRogueObjects2[i].getBehavior("Tween").addObjectAngleTween2("spin", -(180), "linear", 0.4, false);
}
for(var i = 0, len = gdjs.gameCode.GDSkeletonWarriorObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDSkeletonWarriorObjects2[i].getBehavior("Tween").addObjectAngleTween2("spin", -(180), "linear", 0.4, false);
}
for(var i = 0, len = gdjs.gameCode.GDUnnamed3Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDUnnamed3Objects2[i].getBehavior("Tween").addObjectAngleTween2("spin", -(180), "linear", 0.4, false);
}
for(var i = 0, len = gdjs.gameCode.GDNew3DBoxObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDNew3DBoxObjects2[i].getBehavior("Tween").addObjectAngleTween2("spin", -(180), "linear", 0.4, false);
}
}}

}


{

gdjs.copyArray(gdjs.gameCode.GDNew3DBoxObjects1, gdjs.gameCode.GDNew3DBoxObjects2);

gdjs.copyArray(gdjs.gameCode.GDSkeletonRogueObjects1, gdjs.gameCode.GDSkeletonRogueObjects2);

gdjs.copyArray(gdjs.gameCode.GDSkeletonWarriorObjects1, gdjs.gameCode.GDSkeletonWarriorObjects2);

gdjs.copyArray(gdjs.gameCode.GDStartRoundObjects1, gdjs.gameCode.GDStartRoundObjects2);

gdjs.copyArray(gdjs.gameCode.GDTarget3Objects1, gdjs.gameCode.GDTarget3Objects2);

gdjs.copyArray(gdjs.gameCode.GDUnnamed3Objects1, gdjs.gameCode.GDUnnamed3Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDStartRoundObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDStartRoundObjects2[i].getCenterYInScene() >= gdjs.evtsExt__Raycaster3D__IntersectionY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDStartRoundObjects2[k] = gdjs.gameCode.GDStartRoundObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDStartRoundObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.gameCode.GDTarget3Objects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDTarget3Objects2[i].getCenterYInScene() >= gdjs.evtsExt__Raycaster3D__IntersectionY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDTarget3Objects2[k] = gdjs.gameCode.GDTarget3Objects2[i];
        ++k;
    }
}
gdjs.gameCode.GDTarget3Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.gameCode.GDSkeletonRogueObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDSkeletonRogueObjects2[i].getCenterYInScene() >= gdjs.evtsExt__Raycaster3D__IntersectionY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDSkeletonRogueObjects2[k] = gdjs.gameCode.GDSkeletonRogueObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDSkeletonRogueObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.gameCode.GDSkeletonWarriorObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDSkeletonWarriorObjects2[i].getCenterYInScene() >= gdjs.evtsExt__Raycaster3D__IntersectionY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDSkeletonWarriorObjects2[k] = gdjs.gameCode.GDSkeletonWarriorObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDSkeletonWarriorObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.gameCode.GDUnnamed3Objects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDUnnamed3Objects2[i].getCenterYInScene() >= gdjs.evtsExt__Raycaster3D__IntersectionY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDUnnamed3Objects2[k] = gdjs.gameCode.GDUnnamed3Objects2[i];
        ++k;
    }
}
gdjs.gameCode.GDUnnamed3Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.gameCode.GDNew3DBoxObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDNew3DBoxObjects2[i].getCenterYInScene() >= gdjs.evtsExt__Raycaster3D__IntersectionY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDNew3DBoxObjects2[k] = gdjs.gameCode.GDNew3DBoxObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDNew3DBoxObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDNew3DBoxObjects2 */
/* Reuse gdjs.gameCode.GDSkeletonRogueObjects2 */
/* Reuse gdjs.gameCode.GDSkeletonWarriorObjects2 */
/* Reuse gdjs.gameCode.GDStartRoundObjects2 */
/* Reuse gdjs.gameCode.GDTarget3Objects2 */
/* Reuse gdjs.gameCode.GDUnnamed3Objects2 */
{for(var i = 0, len = gdjs.gameCode.GDStartRoundObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDStartRoundObjects2[i].getBehavior("Tween").addObjectAngleTween2("spin", 180, "linear", 0.4, false);
}
for(var i = 0, len = gdjs.gameCode.GDTarget3Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDTarget3Objects2[i].getBehavior("Tween").addObjectAngleTween2("spin", 180, "linear", 0.4, false);
}
for(var i = 0, len = gdjs.gameCode.GDSkeletonRogueObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDSkeletonRogueObjects2[i].getBehavior("Tween").addObjectAngleTween2("spin", 180, "linear", 0.4, false);
}
for(var i = 0, len = gdjs.gameCode.GDSkeletonWarriorObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDSkeletonWarriorObjects2[i].getBehavior("Tween").addObjectAngleTween2("spin", 180, "linear", 0.4, false);
}
for(var i = 0, len = gdjs.gameCode.GDUnnamed3Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDUnnamed3Objects2[i].getBehavior("Tween").addObjectAngleTween2("spin", 180, "linear", 0.4, false);
}
for(var i = 0, len = gdjs.gameCode.GDNew3DBoxObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDNew3DBoxObjects2[i].getBehavior("Tween").addObjectAngleTween2("spin", 180, "linear", 0.4, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDCrosshairObjects1 */
gdjs.gameCode.GDPopUpTextObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPopUpTextObjects1Objects, (( gdjs.gameCode.GDCrosshairObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDCrosshairObjects1[0].getPointX("")) + gdjs.randomInRange(-(20), 20), (( gdjs.gameCode.GDCrosshairObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDCrosshairObjects1[0].getPointY("")) + gdjs.randomInRange(-(20), 20), "Crosshair");
}
{ //Subevents
gdjs.gameCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.gameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Accuracy"), gdjs.gameCode.GDAccuracyObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}{for(var i = 0, len = gdjs.gameCode.GDAccuracyObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDAccuracyObjects2[i].getBehavior("Text").setText("Accuracy: " + gdjs.evtTools.common.toString(Math.ceil(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() / runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() * 100)) + "%");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("New3DBox"), gdjs.gameCode.GDNew3DBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("SkeletonRogue"), gdjs.gameCode.GDSkeletonRogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("SkeletonWarrior"), gdjs.gameCode.GDSkeletonWarriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartRound"), gdjs.gameCode.GDStartRoundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Target3"), gdjs.gameCode.GDTarget3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Unnamed3"), gdjs.gameCode.GDUnnamed3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.func(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDStartRoundObjects1ObjectsGDgdjs_9546gameCode_9546GDTarget3Objects1ObjectsGDgdjs_9546gameCode_9546GDSkeletonRogueObjects1ObjectsGDgdjs_9546gameCode_9546GDSkeletonWarriorObjects1ObjectsGDgdjs_9546gameCode_9546GDUnnamed3Objects1ObjectsGDgdjs_9546gameCode_9546GDNew3DBoxObjects1Objects, 1400, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDStartRoundObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDStartRoundObjects1[i].getAngle() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDStartRoundObjects1[k] = gdjs.gameCode.GDStartRoundObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDStartRoundObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.gameCode.GDTarget3Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDTarget3Objects1[i].getAngle() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDTarget3Objects1[k] = gdjs.gameCode.GDTarget3Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDTarget3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.gameCode.GDSkeletonRogueObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDSkeletonRogueObjects1[i].getAngle() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDSkeletonRogueObjects1[k] = gdjs.gameCode.GDSkeletonRogueObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDSkeletonRogueObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.gameCode.GDSkeletonWarriorObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDSkeletonWarriorObjects1[i].getAngle() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDSkeletonWarriorObjects1[k] = gdjs.gameCode.GDSkeletonWarriorObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDSkeletonWarriorObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.gameCode.GDUnnamed3Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDUnnamed3Objects1[i].getAngle() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDUnnamed3Objects1[k] = gdjs.gameCode.GDUnnamed3Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDUnnamed3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.gameCode.GDNew3DBoxObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDNew3DBoxObjects1[i].getAngle() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDNew3DBoxObjects1[k] = gdjs.gameCode.GDNew3DBoxObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDNew3DBoxObjects1.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}
{ //Subevents
gdjs.gameCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.gameCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Crosshair"), gdjs.gameCode.GDCrosshairObjects2);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.gameCode.GDCrosshairObjects2.length !== 0 ? gdjs.gameCode.GDCrosshairObjects2[0] : null), false, "Crosshair", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FireRate");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Crosshair"), gdjs.gameCode.GDCrosshairObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__DoubleClick__HasSimpleClicked.func(runtimeScene, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "B", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "FireRate") > 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDCrosshairObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDCrosshairObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDCrosshairObjects1[k] = gdjs.gameCode.GDCrosshairObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDCrosshairObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDCrosshairObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "GunSound", false, gdjs.randomFloatInRange(50, 65), gdjs.randomFloatInRange(0.7, 1));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FireRate");
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.15, 0, 0.1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.gameCode.GDCrosshairObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDCrosshairObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.2, 2, -(7), 0, 40, 0.1, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.gameCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.gameCode.eventsList6 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("StartRound"), gdjs.gameCode.GDStartRoundObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDStartRoundObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDStartRoundObjects2[i].getAngle() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDStartRoundObjects2[k] = gdjs.gameCode.GDStartRoundObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDStartRoundObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20354348);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New3DBox"), gdjs.gameCode.GDNew3DBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("SkeletonRogue"), gdjs.gameCode.GDSkeletonRogueObjects2);
gdjs.copyArray(runtimeScene.getObjects("SkeletonWarrior"), gdjs.gameCode.GDSkeletonWarriorObjects2);
/* Reuse gdjs.gameCode.GDStartRoundObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}{for(var i = 0, len = gdjs.gameCode.GDStartRoundObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDStartRoundObjects2[i].getBehavior("Tween").addObjectPositionZTween2("Object3D", "Drop", (gdjs.gameCode.GDStartRoundObjects2[i].getZ()) - 300, "easeInCubic", 1.2, false);
}
}{for(var i = 0, len = gdjs.gameCode.GDSkeletonRogueObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDSkeletonRogueObjects2[i].addForce(0, 90, 1);
}
}{for(var i = 0, len = gdjs.gameCode.GDSkeletonWarriorObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDSkeletonWarriorObjects2[i].addForce(0, 140, 1);
}
}{for(var i = 0, len = gdjs.gameCode.GDNew3DBoxObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDNew3DBoxObjects2[i].addForce(0, 200, 1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "arcade_mode.ogg", false, 50, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("MarkerBelow"), gdjs.gameCode.GDMarkerBelowObjects1);
gdjs.copyArray(runtimeScene.getObjects("New3DBox"), gdjs.gameCode.GDNew3DBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("SkeletonRogue"), gdjs.gameCode.GDSkeletonRogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("SkeletonWarrior"), gdjs.gameCode.GDSkeletonWarriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartRound"), gdjs.gameCode.GDStartRoundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Target3"), gdjs.gameCode.GDTarget3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Unnamed3"), gdjs.gameCode.GDUnnamed3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDStartRoundObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDStartRoundObjects1[i].getY() > (( gdjs.gameCode.GDMarkerBelowObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDMarkerBelowObjects1[0].getY()) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDStartRoundObjects1[k] = gdjs.gameCode.GDStartRoundObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDStartRoundObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.gameCode.GDTarget3Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDTarget3Objects1[i].getY() > (( gdjs.gameCode.GDMarkerBelowObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDMarkerBelowObjects1[0].getY()) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDTarget3Objects1[k] = gdjs.gameCode.GDTarget3Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDTarget3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.gameCode.GDSkeletonRogueObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDSkeletonRogueObjects1[i].getY() > (( gdjs.gameCode.GDMarkerBelowObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDMarkerBelowObjects1[0].getY()) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDSkeletonRogueObjects1[k] = gdjs.gameCode.GDSkeletonRogueObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDSkeletonRogueObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.gameCode.GDSkeletonWarriorObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDSkeletonWarriorObjects1[i].getY() > (( gdjs.gameCode.GDMarkerBelowObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDMarkerBelowObjects1[0].getY()) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDSkeletonWarriorObjects1[k] = gdjs.gameCode.GDSkeletonWarriorObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDSkeletonWarriorObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.gameCode.GDUnnamed3Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDUnnamed3Objects1[i].getY() > (( gdjs.gameCode.GDMarkerBelowObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDMarkerBelowObjects1[0].getY()) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDUnnamed3Objects1[k] = gdjs.gameCode.GDUnnamed3Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDUnnamed3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.gameCode.GDNew3DBoxObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDNew3DBoxObjects1[i].getY() > (( gdjs.gameCode.GDMarkerBelowObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDMarkerBelowObjects1[0].getY()) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDNew3DBoxObjects1[k] = gdjs.gameCode.GDNew3DBoxObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDNew3DBoxObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MarkerAbove"), gdjs.gameCode.GDMarkerAboveObjects1);
/* Reuse gdjs.gameCode.GDNew3DBoxObjects1 */
/* Reuse gdjs.gameCode.GDSkeletonRogueObjects1 */
/* Reuse gdjs.gameCode.GDSkeletonWarriorObjects1 */
/* Reuse gdjs.gameCode.GDStartRoundObjects1 */
/* Reuse gdjs.gameCode.GDTarget3Objects1 */
/* Reuse gdjs.gameCode.GDUnnamed3Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDStartRoundObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDStartRoundObjects1[i].setY((( gdjs.gameCode.GDMarkerAboveObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDMarkerAboveObjects1[0].getY()));
}
for(var i = 0, len = gdjs.gameCode.GDTarget3Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDTarget3Objects1[i].setY((( gdjs.gameCode.GDMarkerAboveObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDMarkerAboveObjects1[0].getY()));
}
for(var i = 0, len = gdjs.gameCode.GDSkeletonRogueObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDSkeletonRogueObjects1[i].setY((( gdjs.gameCode.GDMarkerAboveObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDMarkerAboveObjects1[0].getY()));
}
for(var i = 0, len = gdjs.gameCode.GDSkeletonWarriorObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDSkeletonWarriorObjects1[i].setY((( gdjs.gameCode.GDMarkerAboveObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDMarkerAboveObjects1[0].getY()));
}
for(var i = 0, len = gdjs.gameCode.GDUnnamed3Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDUnnamed3Objects1[i].setY((( gdjs.gameCode.GDMarkerAboveObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDMarkerAboveObjects1[0].getY()));
}
for(var i = 0, len = gdjs.gameCode.GDNew3DBoxObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDNew3DBoxObjects1[i].setY((( gdjs.gameCode.GDMarkerAboveObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDMarkerAboveObjects1[0].getY()));
}
}{for(var i = 0, len = gdjs.gameCode.GDStartRoundObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDStartRoundObjects1[i].rotateTowardAngle(0, 0, runtimeScene);
}
for(var i = 0, len = gdjs.gameCode.GDTarget3Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDTarget3Objects1[i].rotateTowardAngle(0, 0, runtimeScene);
}
for(var i = 0, len = gdjs.gameCode.GDSkeletonRogueObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDSkeletonRogueObjects1[i].rotateTowardAngle(0, 0, runtimeScene);
}
for(var i = 0, len = gdjs.gameCode.GDSkeletonWarriorObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDSkeletonWarriorObjects1[i].rotateTowardAngle(0, 0, runtimeScene);
}
for(var i = 0, len = gdjs.gameCode.GDUnnamed3Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDUnnamed3Objects1[i].rotateTowardAngle(0, 0, runtimeScene);
}
for(var i = 0, len = gdjs.gameCode.GDNew3DBoxObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDNew3DBoxObjects1[i].rotateTowardAngle(0, 0, runtimeScene);
}
}}

}


};gdjs.gameCode.eventsList7 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20358268);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameTimer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "GameTimer") <= 60;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TimeLimit"), gdjs.gameCode.GDTimeLimitObjects2);
{for(var i = 0, len = gdjs.gameCode.GDTimeLimitObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDTimeLimitObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.floor(60 - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "GameTimer"))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "GameTimer") >= 60;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20360436);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Crosshair"), gdjs.gameCode.GDCrosshairObjects1);
gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.gameCode.GDRestartObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "game_over.ogg", false, 50, 1);
}{for(var i = 0, len = gdjs.gameCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDRestartObjects1[i].setCenterXInScene(gdjs.evtTools.window.getWindowInnerWidth() / 2);
}
}{for(var i = 0, len = gdjs.gameCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDRestartObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.gameCode.GDCrosshairObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDCrosshairObjects1[i].hide();
}
}}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDWalkJoystickObjects1Objects = Hashtable.newFrom({"WalkJoystick": gdjs.gameCode.GDWalkJoystickObjects1});
gdjs.gameCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WalkJoystick"), gdjs.gameCode.GDWalkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.func(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDWalkJoystickObjects1Objects, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.gameCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "Crosshair", 0);
}{gdjs.evtsExt__CameraShake__SetLayerShakable.func(runtimeScene, true, "Crosshair", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__CameraShake__SetDefaultTranslationAmplitude.func(runtimeScene, 7, 7, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Ceiling", 0, 0, 0);
}{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "UI", 0, 0, 0);
}
{ //Subevents
gdjs.gameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WalkJoystick"), gdjs.gameCode.GDWalkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.func(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDWalkJoystickObjects1Objects, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDWalkJoystickObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDWalkJoystickObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDWalkJoystickObjects1[i].TeleportAndPress((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.gameCode.eventsList5(runtimeScene);
}


{


gdjs.gameCode.eventsList6(runtimeScene);
}


{


gdjs.gameCode.eventsList7(runtimeScene);
}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList8(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TimeLimit"), gdjs.gameCode.GDTimeLimitObjects1);
{for(var i = 0, len = gdjs.gameCode.GDTimeLimitObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTimeLimitObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.floor(60 - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "GameTimer"))));
}
}}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDWallsObjects1.length = 0;
gdjs.gameCode.GDWallsObjects2.length = 0;
gdjs.gameCode.GDWallsObjects3.length = 0;
gdjs.gameCode.GDBarriersObjects1.length = 0;
gdjs.gameCode.GDBarriersObjects2.length = 0;
gdjs.gameCode.GDBarriersObjects3.length = 0;
gdjs.gameCode.GDFloorCeilingObjects1.length = 0;
gdjs.gameCode.GDFloorCeilingObjects2.length = 0;
gdjs.gameCode.GDFloorCeilingObjects3.length = 0;
gdjs.gameCode.GDTarget1Objects1.length = 0;
gdjs.gameCode.GDTarget1Objects2.length = 0;
gdjs.gameCode.GDTarget1Objects3.length = 0;
gdjs.gameCode.GDTarget3Objects1.length = 0;
gdjs.gameCode.GDTarget3Objects2.length = 0;
gdjs.gameCode.GDTarget3Objects3.length = 0;
gdjs.gameCode.GDStartRoundObjects1.length = 0;
gdjs.gameCode.GDStartRoundObjects2.length = 0;
gdjs.gameCode.GDStartRoundObjects3.length = 0;
gdjs.gameCode.GDCameraObjects1.length = 0;
gdjs.gameCode.GDCameraObjects2.length = 0;
gdjs.gameCode.GDCameraObjects3.length = 0;
gdjs.gameCode.GDMarkerBelowObjects1.length = 0;
gdjs.gameCode.GDMarkerBelowObjects2.length = 0;
gdjs.gameCode.GDMarkerBelowObjects3.length = 0;
gdjs.gameCode.GDMarkerAboveObjects1.length = 0;
gdjs.gameCode.GDMarkerAboveObjects2.length = 0;
gdjs.gameCode.GDMarkerAboveObjects3.length = 0;
gdjs.gameCode.GDCrosshairObjects1.length = 0;
gdjs.gameCode.GDCrosshairObjects2.length = 0;
gdjs.gameCode.GDCrosshairObjects3.length = 0;
gdjs.gameCode.GDTimeLimitObjects1.length = 0;
gdjs.gameCode.GDTimeLimitObjects2.length = 0;
gdjs.gameCode.GDTimeLimitObjects3.length = 0;
gdjs.gameCode.GDScoreLabelObjects1.length = 0;
gdjs.gameCode.GDScoreLabelObjects2.length = 0;
gdjs.gameCode.GDScoreLabelObjects3.length = 0;
gdjs.gameCode.GDAccuracyObjects1.length = 0;
gdjs.gameCode.GDAccuracyObjects2.length = 0;
gdjs.gameCode.GDAccuracyObjects3.length = 0;
gdjs.gameCode.GDPopUpTextObjects1.length = 0;
gdjs.gameCode.GDPopUpTextObjects2.length = 0;
gdjs.gameCode.GDPopUpTextObjects3.length = 0;
gdjs.gameCode.GDRestartObjects1.length = 0;
gdjs.gameCode.GDRestartObjects2.length = 0;
gdjs.gameCode.GDRestartObjects3.length = 0;
gdjs.gameCode.GDWalkJoystickObjects1.length = 0;
gdjs.gameCode.GDWalkJoystickObjects2.length = 0;
gdjs.gameCode.GDWalkJoystickObjects3.length = 0;
gdjs.gameCode.GDHiddenWallObjects1.length = 0;
gdjs.gameCode.GDHiddenWallObjects2.length = 0;
gdjs.gameCode.GDHiddenWallObjects3.length = 0;
gdjs.gameCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.gameCode.GDScreenOrientationCheckerObjects2.length = 0;
gdjs.gameCode.GDScreenOrientationCheckerObjects3.length = 0;
gdjs.gameCode.GDUnnamed3Objects1.length = 0;
gdjs.gameCode.GDUnnamed3Objects2.length = 0;
gdjs.gameCode.GDUnnamed3Objects3.length = 0;
gdjs.gameCode.GDSkeletonWarriorObjects1.length = 0;
gdjs.gameCode.GDSkeletonWarriorObjects2.length = 0;
gdjs.gameCode.GDSkeletonWarriorObjects3.length = 0;
gdjs.gameCode.GDSkeletonRogueObjects1.length = 0;
gdjs.gameCode.GDSkeletonRogueObjects2.length = 0;
gdjs.gameCode.GDSkeletonRogueObjects3.length = 0;
gdjs.gameCode.GDNew3DBoxObjects1.length = 0;
gdjs.gameCode.GDNew3DBoxObjects2.length = 0;
gdjs.gameCode.GDNew3DBoxObjects3.length = 0;

gdjs.gameCode.eventsList9(runtimeScene);
gdjs.gameCode.GDWallsObjects1.length = 0;
gdjs.gameCode.GDWallsObjects2.length = 0;
gdjs.gameCode.GDWallsObjects3.length = 0;
gdjs.gameCode.GDBarriersObjects1.length = 0;
gdjs.gameCode.GDBarriersObjects2.length = 0;
gdjs.gameCode.GDBarriersObjects3.length = 0;
gdjs.gameCode.GDFloorCeilingObjects1.length = 0;
gdjs.gameCode.GDFloorCeilingObjects2.length = 0;
gdjs.gameCode.GDFloorCeilingObjects3.length = 0;
gdjs.gameCode.GDTarget1Objects1.length = 0;
gdjs.gameCode.GDTarget1Objects2.length = 0;
gdjs.gameCode.GDTarget1Objects3.length = 0;
gdjs.gameCode.GDTarget3Objects1.length = 0;
gdjs.gameCode.GDTarget3Objects2.length = 0;
gdjs.gameCode.GDTarget3Objects3.length = 0;
gdjs.gameCode.GDStartRoundObjects1.length = 0;
gdjs.gameCode.GDStartRoundObjects2.length = 0;
gdjs.gameCode.GDStartRoundObjects3.length = 0;
gdjs.gameCode.GDCameraObjects1.length = 0;
gdjs.gameCode.GDCameraObjects2.length = 0;
gdjs.gameCode.GDCameraObjects3.length = 0;
gdjs.gameCode.GDMarkerBelowObjects1.length = 0;
gdjs.gameCode.GDMarkerBelowObjects2.length = 0;
gdjs.gameCode.GDMarkerBelowObjects3.length = 0;
gdjs.gameCode.GDMarkerAboveObjects1.length = 0;
gdjs.gameCode.GDMarkerAboveObjects2.length = 0;
gdjs.gameCode.GDMarkerAboveObjects3.length = 0;
gdjs.gameCode.GDCrosshairObjects1.length = 0;
gdjs.gameCode.GDCrosshairObjects2.length = 0;
gdjs.gameCode.GDCrosshairObjects3.length = 0;
gdjs.gameCode.GDTimeLimitObjects1.length = 0;
gdjs.gameCode.GDTimeLimitObjects2.length = 0;
gdjs.gameCode.GDTimeLimitObjects3.length = 0;
gdjs.gameCode.GDScoreLabelObjects1.length = 0;
gdjs.gameCode.GDScoreLabelObjects2.length = 0;
gdjs.gameCode.GDScoreLabelObjects3.length = 0;
gdjs.gameCode.GDAccuracyObjects1.length = 0;
gdjs.gameCode.GDAccuracyObjects2.length = 0;
gdjs.gameCode.GDAccuracyObjects3.length = 0;
gdjs.gameCode.GDPopUpTextObjects1.length = 0;
gdjs.gameCode.GDPopUpTextObjects2.length = 0;
gdjs.gameCode.GDPopUpTextObjects3.length = 0;
gdjs.gameCode.GDRestartObjects1.length = 0;
gdjs.gameCode.GDRestartObjects2.length = 0;
gdjs.gameCode.GDRestartObjects3.length = 0;
gdjs.gameCode.GDWalkJoystickObjects1.length = 0;
gdjs.gameCode.GDWalkJoystickObjects2.length = 0;
gdjs.gameCode.GDWalkJoystickObjects3.length = 0;
gdjs.gameCode.GDHiddenWallObjects1.length = 0;
gdjs.gameCode.GDHiddenWallObjects2.length = 0;
gdjs.gameCode.GDHiddenWallObjects3.length = 0;
gdjs.gameCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.gameCode.GDScreenOrientationCheckerObjects2.length = 0;
gdjs.gameCode.GDScreenOrientationCheckerObjects3.length = 0;
gdjs.gameCode.GDUnnamed3Objects1.length = 0;
gdjs.gameCode.GDUnnamed3Objects2.length = 0;
gdjs.gameCode.GDUnnamed3Objects3.length = 0;
gdjs.gameCode.GDSkeletonWarriorObjects1.length = 0;
gdjs.gameCode.GDSkeletonWarriorObjects2.length = 0;
gdjs.gameCode.GDSkeletonWarriorObjects3.length = 0;
gdjs.gameCode.GDSkeletonRogueObjects1.length = 0;
gdjs.gameCode.GDSkeletonRogueObjects2.length = 0;
gdjs.gameCode.GDSkeletonRogueObjects3.length = 0;
gdjs.gameCode.GDNew3DBoxObjects1.length = 0;
gdjs.gameCode.GDNew3DBoxObjects2.length = 0;
gdjs.gameCode.GDNew3DBoxObjects3.length = 0;


return;

}

gdjs['gameCode'] = gdjs.gameCode;
