import React from 'react';
import DashboardIcon from './DashboardIcon';
import '../styles/Dashboard.css'
import { useLanguage } from '@/src/contexthooks/useLanguages';
import {useLayers} from "@/src/contexthooks/useLayers.jsx";

function Iconbar() {
  const languageProvider = useLanguage()
  const language = languageProvider.getLanguage()

  const layerProvider= useLayers()

  // languageProvider.setLanguage("French")
  return (
    <div className='dashboard--icons sticky justify-self-end'>
      {/* div that has background color red, and holds icon divs */}
      <div style={{display: 'flex'}}>
        {Object.values(layerProvider.getLayers()).map(layer=>{
          return(
              <DashboardIcon key={layer.tagName} handleClick={layerProvider.handleClick} imageIcon={layer.imageUrl} iconLabel={layer.tagName}/>
          )
        })}
        {/*<DashboardIcon imageIcon={"../../src/assets/food_icon.png"} iconLabel={"Food"}/>*/}
        {/*<DashboardIcon imageIcon={"../../src/assets/bathroom_icon.png"} iconLabel={"Bathroom"}/>*/}
        {/*<DashboardIcon imageIcon={"../../src/assets/trash_icon.png"} iconLabel={"Trash"}/>*/}
        {/*<DashboardIcon imageIcon={"../../src/assets/tourism_icon.png"} iconLabel={"Tourism"}/>*/}
        {/*<DashboardIcon imageIcon={"../../src/assets/money_icon.png"} iconLabel={"Money"}/>*/}
        {/*<DashboardIcon imageIcon={"../../src/assets/wifi_icon.png"} iconLabel={"Wifi"}/>*/}
        {/*<DashboardIcon imageIcon={"../../src/assets/library_icon.png"} iconLabel={"Library"}/>*/}
        {/*<DashboardIcon imageIcon={"../../src/assets/Emergency_icon.png"} iconLabel={"Emergency"}/>*/}
      </div>
    </div>
  );
}

export default Iconbar;