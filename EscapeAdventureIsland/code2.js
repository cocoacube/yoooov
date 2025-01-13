gdjs._20320_36194_20102Code = {};
gdjs._20320_36194_20102Code.localVariables = [];
gdjs._20320_36194_20102Code.GDCastingObjects1= [];
gdjs._20320_36194_20102Code.GDCastingObjects2= [];
gdjs._20320_36194_20102Code.GDBlueFireObjects1= [];
gdjs._20320_36194_20102Code.GDBlueFireObjects2= [];
gdjs._20320_36194_20102Code.GDBrightFireObjects1= [];
gdjs._20320_36194_20102Code.GDBrightFireObjects2= [];
gdjs._20320_36194_20102Code.GDFlamelashObjects1= [];
gdjs._20320_36194_20102Code.GDFlamelashObjects2= [];
gdjs._20320_36194_20102Code.GDFelSpellObjects1= [];
gdjs._20320_36194_20102Code.GDFelSpellObjects2= [];
gdjs._20320_36194_20102Code.GDFireSpinObjects1= [];
gdjs._20320_36194_20102Code.GDFireSpinObjects2= [];
gdjs._20320_36194_20102Code.GDMagicBubblesObjects1= [];
gdjs._20320_36194_20102Code.GDMagicBubblesObjects2= [];
gdjs._20320_36194_20102Code.GDMagicLoopObjects1= [];
gdjs._20320_36194_20102Code.GDMagicLoopObjects2= [];
gdjs._20320_36194_20102Code.GDWeaponHitObjects1= [];
gdjs._20320_36194_20102Code.GDWeaponHitObjects2= [];
gdjs._20320_36194_20102Code.GDMagickahitObjects1= [];
gdjs._20320_36194_20102Code.GDMagickahitObjects2= [];
gdjs._20320_36194_20102Code.GDMagicSpellObjects1= [];
gdjs._20320_36194_20102Code.GDMagicSpellObjects2= [];
gdjs._20320_36194_20102Code.GDProtectionCircleObjects1= [];
gdjs._20320_36194_20102Code.GDProtectionCircleObjects2= [];
gdjs._20320_36194_20102Code.GDFreezingObjects1= [];
gdjs._20320_36194_20102Code.GDFreezingObjects2= [];
gdjs._20320_36194_20102Code.GDLoadingObjects1= [];
gdjs._20320_36194_20102Code.GDLoadingObjects2= [];
gdjs._20320_36194_20102Code.GDFireObjects1= [];
gdjs._20320_36194_20102Code.GDFireObjects2= [];
gdjs._20320_36194_20102Code.GDNebulaObjects1= [];
gdjs._20320_36194_20102Code.GDNebulaObjects2= [];
gdjs._20320_36194_20102Code.GDMidnightObjects1= [];
gdjs._20320_36194_20102Code.GDMidnightObjects2= [];
gdjs._20320_36194_20102Code.GDPhantomObjects1= [];
gdjs._20320_36194_20102Code.GDPhantomObjects2= [];
gdjs._20320_36194_20102Code.GDSunburnObjects1= [];
gdjs._20320_36194_20102Code.GDSunburnObjects2= [];
gdjs._20320_36194_20102Code.GDVortexObjects1= [];
gdjs._20320_36194_20102Code.GDVortexObjects2= [];
gdjs._20320_36194_20102Code.GDMedievalButtonBeigeObjects1= [];
gdjs._20320_36194_20102Code.GDMedievalButtonBeigeObjects2= [];
gdjs._20320_36194_20102Code.GDNewTextObjects1= [];
gdjs._20320_36194_20102Code.GDNewTextObjects2= [];
gdjs._20320_36194_20102Code.GDYButtonObjects1= [];
gdjs._20320_36194_20102Code.GDYButtonObjects2= [];


gdjs._20320_36194_20102Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBeige"), gdjs._20320_36194_20102Code.GDMedievalButtonBeigeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20320_36194_20102Code.GDMedievalButtonBeigeObjects1.length;i<l;++i) {
    if ( gdjs._20320_36194_20102Code.GDMedievalButtonBeigeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20320_36194_20102Code.GDMedievalButtonBeigeObjects1[k] = gdjs._20320_36194_20102Code.GDMedievalButtonBeigeObjects1[i];
        ++k;
    }
}
gdjs._20320_36194_20102Code.GDMedievalButtonBeigeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "第4关（A区）", false);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


};

gdjs._20320_36194_20102Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._20320_36194_20102Code.GDCastingObjects1.length = 0;
gdjs._20320_36194_20102Code.GDCastingObjects2.length = 0;
gdjs._20320_36194_20102Code.GDBlueFireObjects1.length = 0;
gdjs._20320_36194_20102Code.GDBlueFireObjects2.length = 0;
gdjs._20320_36194_20102Code.GDBrightFireObjects1.length = 0;
gdjs._20320_36194_20102Code.GDBrightFireObjects2.length = 0;
gdjs._20320_36194_20102Code.GDFlamelashObjects1.length = 0;
gdjs._20320_36194_20102Code.GDFlamelashObjects2.length = 0;
gdjs._20320_36194_20102Code.GDFelSpellObjects1.length = 0;
gdjs._20320_36194_20102Code.GDFelSpellObjects2.length = 0;
gdjs._20320_36194_20102Code.GDFireSpinObjects1.length = 0;
gdjs._20320_36194_20102Code.GDFireSpinObjects2.length = 0;
gdjs._20320_36194_20102Code.GDMagicBubblesObjects1.length = 0;
gdjs._20320_36194_20102Code.GDMagicBubblesObjects2.length = 0;
gdjs._20320_36194_20102Code.GDMagicLoopObjects1.length = 0;
gdjs._20320_36194_20102Code.GDMagicLoopObjects2.length = 0;
gdjs._20320_36194_20102Code.GDWeaponHitObjects1.length = 0;
gdjs._20320_36194_20102Code.GDWeaponHitObjects2.length = 0;
gdjs._20320_36194_20102Code.GDMagickahitObjects1.length = 0;
gdjs._20320_36194_20102Code.GDMagickahitObjects2.length = 0;
gdjs._20320_36194_20102Code.GDMagicSpellObjects1.length = 0;
gdjs._20320_36194_20102Code.GDMagicSpellObjects2.length = 0;
gdjs._20320_36194_20102Code.GDProtectionCircleObjects1.length = 0;
gdjs._20320_36194_20102Code.GDProtectionCircleObjects2.length = 0;
gdjs._20320_36194_20102Code.GDFreezingObjects1.length = 0;
gdjs._20320_36194_20102Code.GDFreezingObjects2.length = 0;
gdjs._20320_36194_20102Code.GDLoadingObjects1.length = 0;
gdjs._20320_36194_20102Code.GDLoadingObjects2.length = 0;
gdjs._20320_36194_20102Code.GDFireObjects1.length = 0;
gdjs._20320_36194_20102Code.GDFireObjects2.length = 0;
gdjs._20320_36194_20102Code.GDNebulaObjects1.length = 0;
gdjs._20320_36194_20102Code.GDNebulaObjects2.length = 0;
gdjs._20320_36194_20102Code.GDMidnightObjects1.length = 0;
gdjs._20320_36194_20102Code.GDMidnightObjects2.length = 0;
gdjs._20320_36194_20102Code.GDPhantomObjects1.length = 0;
gdjs._20320_36194_20102Code.GDPhantomObjects2.length = 0;
gdjs._20320_36194_20102Code.GDSunburnObjects1.length = 0;
gdjs._20320_36194_20102Code.GDSunburnObjects2.length = 0;
gdjs._20320_36194_20102Code.GDVortexObjects1.length = 0;
gdjs._20320_36194_20102Code.GDVortexObjects2.length = 0;
gdjs._20320_36194_20102Code.GDMedievalButtonBeigeObjects1.length = 0;
gdjs._20320_36194_20102Code.GDMedievalButtonBeigeObjects2.length = 0;
gdjs._20320_36194_20102Code.GDNewTextObjects1.length = 0;
gdjs._20320_36194_20102Code.GDNewTextObjects2.length = 0;
gdjs._20320_36194_20102Code.GDYButtonObjects1.length = 0;
gdjs._20320_36194_20102Code.GDYButtonObjects2.length = 0;

gdjs._20320_36194_20102Code.eventsList0(runtimeScene);
gdjs._20320_36194_20102Code.GDCastingObjects1.length = 0;
gdjs._20320_36194_20102Code.GDCastingObjects2.length = 0;
gdjs._20320_36194_20102Code.GDBlueFireObjects1.length = 0;
gdjs._20320_36194_20102Code.GDBlueFireObjects2.length = 0;
gdjs._20320_36194_20102Code.GDBrightFireObjects1.length = 0;
gdjs._20320_36194_20102Code.GDBrightFireObjects2.length = 0;
gdjs._20320_36194_20102Code.GDFlamelashObjects1.length = 0;
gdjs._20320_36194_20102Code.GDFlamelashObjects2.length = 0;
gdjs._20320_36194_20102Code.GDFelSpellObjects1.length = 0;
gdjs._20320_36194_20102Code.GDFelSpellObjects2.length = 0;
gdjs._20320_36194_20102Code.GDFireSpinObjects1.length = 0;
gdjs._20320_36194_20102Code.GDFireSpinObjects2.length = 0;
gdjs._20320_36194_20102Code.GDMagicBubblesObjects1.length = 0;
gdjs._20320_36194_20102Code.GDMagicBubblesObjects2.length = 0;
gdjs._20320_36194_20102Code.GDMagicLoopObjects1.length = 0;
gdjs._20320_36194_20102Code.GDMagicLoopObjects2.length = 0;
gdjs._20320_36194_20102Code.GDWeaponHitObjects1.length = 0;
gdjs._20320_36194_20102Code.GDWeaponHitObjects2.length = 0;
gdjs._20320_36194_20102Code.GDMagickahitObjects1.length = 0;
gdjs._20320_36194_20102Code.GDMagickahitObjects2.length = 0;
gdjs._20320_36194_20102Code.GDMagicSpellObjects1.length = 0;
gdjs._20320_36194_20102Code.GDMagicSpellObjects2.length = 0;
gdjs._20320_36194_20102Code.GDProtectionCircleObjects1.length = 0;
gdjs._20320_36194_20102Code.GDProtectionCircleObjects2.length = 0;
gdjs._20320_36194_20102Code.GDFreezingObjects1.length = 0;
gdjs._20320_36194_20102Code.GDFreezingObjects2.length = 0;
gdjs._20320_36194_20102Code.GDLoadingObjects1.length = 0;
gdjs._20320_36194_20102Code.GDLoadingObjects2.length = 0;
gdjs._20320_36194_20102Code.GDFireObjects1.length = 0;
gdjs._20320_36194_20102Code.GDFireObjects2.length = 0;
gdjs._20320_36194_20102Code.GDNebulaObjects1.length = 0;
gdjs._20320_36194_20102Code.GDNebulaObjects2.length = 0;
gdjs._20320_36194_20102Code.GDMidnightObjects1.length = 0;
gdjs._20320_36194_20102Code.GDMidnightObjects2.length = 0;
gdjs._20320_36194_20102Code.GDPhantomObjects1.length = 0;
gdjs._20320_36194_20102Code.GDPhantomObjects2.length = 0;
gdjs._20320_36194_20102Code.GDSunburnObjects1.length = 0;
gdjs._20320_36194_20102Code.GDSunburnObjects2.length = 0;
gdjs._20320_36194_20102Code.GDVortexObjects1.length = 0;
gdjs._20320_36194_20102Code.GDVortexObjects2.length = 0;
gdjs._20320_36194_20102Code.GDMedievalButtonBeigeObjects1.length = 0;
gdjs._20320_36194_20102Code.GDMedievalButtonBeigeObjects2.length = 0;
gdjs._20320_36194_20102Code.GDNewTextObjects1.length = 0;
gdjs._20320_36194_20102Code.GDNewTextObjects2.length = 0;
gdjs._20320_36194_20102Code.GDYButtonObjects1.length = 0;
gdjs._20320_36194_20102Code.GDYButtonObjects2.length = 0;


return;

}

gdjs['_20320_36194_20102Code'] = gdjs._20320_36194_20102Code;
