
if (typeof gdjs.evtsExt__Flash__ToggleVisibility !== "undefined") {
  gdjs.evtsExt__Flash__ToggleVisibility.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Flash__ToggleVisibility = {};
gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1= [];
gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects2= [];


gdjs.evtsExt__Flash__ToggleVisibility.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1[i].getVariables().get("__Flash_VisibilityToggled")).setBoolean(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1[k] = gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1[i].getVariables().get("__Flash_VisibilityToggled")).setBoolean(true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1[i].getVariableBoolean(gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1[i].getVariables().get("__Flash_VisibilityToggled"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1[k] = gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1[k] = gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1[i].hide(false);
}
}}

}


};

gdjs.evtsExt__Flash__ToggleVisibility.func = function(runtimeScene, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__ToggleVisibility.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__ToggleVisibility.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__Flash__ToggleVisibility.registeredGdjsCallbacks = [];