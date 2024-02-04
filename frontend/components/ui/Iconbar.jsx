import React from 'react';
import DashboardIcon from './DashboardIcon';
import '../styles/Dashboard.css'
import { useLanguage } from '@/src/contexthooks/useLanguages';
import {useLayers} from "@/src/contexthooks/useLayers.jsx";

function Iconbar() {
  const languageProvider = useLanguage()
  const language = languageProvider.getLanguage()

  const layerProvider= useLayers()

  // languageProvider.setLanguage("Hindi")

  
  return (
    <div className='dashboard--icons sticky justify-self-end'>
      {/* div that has background color red, and holds icon divs */}
      <div style={{display: 'flex'}}>
        {/*{Object.values(layerProvider.getLayers()).map(layer=>{*/}
        {/*  return(*/}
        {/*      <DashboardIcon key={layer.tagName} handleClick={layerProvider.handleClick} imageIcon={layer.imageUrl} iconLabel={language[layer.tagName]}/>*/}
        {/*  )*/}
        {/*})}*/}
        <DashboardIcon imageIcon={"../../src/assets/food_icon.png"} iconLabel={language["Food"]} handleClick={layerProvider.handleClick}/>
        <DashboardIcon imageIcon={"../../src/assets/bathroom_icon.png"} iconLabel={language["Bathroom"]} handleClick={layerProvider.handleClick}/>
        <DashboardIcon imageIcon={"../../src/assets/trash_icon.png"} iconLabel={language["Trash"]} handleClick={layerProvider.handleClick}/>
        <DashboardIcon imageIcon={"../../src/assets/tourism_icon.png"} iconLabel={language["Tourism"]} handleClick={layerProvider.handleClick}/>
        <DashboardIcon imageIcon={"../../src/assets/money_icon.png"} iconLabel={language["Bank"]} handleClick={layerProvider.handleClick}/>
        <DashboardIcon imageIcon={"../../src/assets/wifi_icon.png"} iconLabel={language["Wifi"]} handleClick={layerProvider.handleClick}/>
        <DashboardIcon imageIcon={"../../src/assets/library_icon.png"} iconLabel={language["Library"]} handleClick={layerProvider.handleClick}/>
        <DashboardIcon imageIcon={"../../src/assets/Emergency_icon.png"} iconLabel={language["Emergency"]} handleClick={layerProvider.handleClick}/>
      </div>
    </div>
  );
}

export default Iconbar;