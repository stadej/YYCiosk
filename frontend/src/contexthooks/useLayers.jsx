import {createContext, useContext, useEffect, useReducer, useState} from "react";
import {act} from "react-dom/test-utils";
import icons from "../../components/data/DashboardIconInfo.json"


const LayersContext = createContext()


const layerReducer = (state,action)=>{
    switch (action.type){
        case("add"):
            return[...state,
                action.item]
        case("toggle"):
            let newState = Object.assign([],state)
            newState[action.index].active = action.active
            return newState
    }
}

export const LayersProvider=({children})=>{
    const [layers, layersDispatch] = useReducer(layerReducer,icons,undefined);

    const getLayers = ()=>{
        return layers
    }
    const handleClick=(e)=>{
        let layerIndex = layers.findIndex(({tagName})=> tagName === e.target.id);
        layersDispatch({type:"toggle",index:layerIndex,active:!layers[layerIndex].active})
    }
    const toggleLayer=(tag)=>{
        let layerIndex = layers.findIndex(({tagName})=> tagName === tag);
        if(layerIndex > 0){
            layersDispatch({type:"toggle",index:layerIndex,active:!layers[layerIndex].active})
        }
    }
    useEffect(()=>{
    },[layers])
    return(
        <LayersContext.Provider value={
            {
                getLayers,
                layersDispatch,
                handleClick,
                toggleLayer
            }
        }>
            {children}
        </LayersContext.Provider>
    )
}
export const useLayers=()=>{
    return useContext(LayersContext);
}