
if (typeof gdjs.evtsExt__PinchGesture__TransformToSceneY !== "undefined") {
  gdjs.evtsExt__PinchGesture__TransformToSceneY.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PinchGesture__TransformToSceneY = {};


gdjs.evtsExt__PinchGesture__TransformToSceneY.userFunc0x1020cd0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const x = eventsFunctionContext.getArgument("PositionX");
const y = eventsFunctionContext.getArgument("PositionY");
const layer = runtimeScene.getLayer(eventsFunctionContext.getArgument("Layer"));

eventsFunctionContext.returnValue = layer.convertCoords(x, y)[1];
};
gdjs.evtsExt__PinchGesture__TransformToSceneY.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__PinchGesture__TransformToSceneY.userFunc0x1020cd0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PinchGesture__TransformToSceneY.func = function(runtimeScene, PositionX, PositionY, Layer, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PinchGesture"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PinchGesture"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "PositionX") return PositionX;
if (argName === "PositionY") return PositionY;
if (argName === "Layer") return Layer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PinchGesture__TransformToSceneY.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__PinchGesture__TransformToSceneY.registeredGdjsCallbacks = [];