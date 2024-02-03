import React from 'react';
import DashboardIcon from './DashboardIcon';
import '../styles/Dashboard.css'

function Iconbar() {
  return (
    <div className='dashboard--icons sticky top-[100vh],'>
      {/* div that has background color red, and holds icon divs */}
      <div className='dashboard--icons--list'>
        
        
        {/* <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: '4rem', width: '4rem', borderRadius: '1rem', backgroundColor: 'white', marginLeft: '1rem', marginRight: '1rem'}}>
            <img src="../../src/assets/food_icon.png" alt="Food Icon" style={{height: '8rem', width: '8rem'}} />
        </div>

        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: '4rem', width: '4rem', borderRadius: '1rem', backgroundColor: 'white', marginLeft: '1rem', marginRight: '1rem'}}>
            <img src="../../src/assets/bathroom_icon.png" alt="Bathroom Icon" style={{height: '8rem', width: '8rem'}} />
        </div>

        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: '4rem', width: '4rem', borderRadius: '1rem', backgroundColor: 'white', marginLeft: '1rem', marginRight: '1rem'}}>
            <img src="../../src/assets/trash_icon.png" alt="Trash Icon" style={{height: '8rem', width: '8rem'}} />
        </div>

        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: '4rem', width: '4rem', borderRadius: '1rem', backgroundColor: 'white', marginLeft: '1rem', marginRight: '1rem'}}>
            <img src="../../src/assets/tourism_icon.png" alt="Tourism Icon" style={{height: '8rem', width: '8rem'}} />
        </div>

        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: '4rem', width: '4rem', borderRadius: '1rem', backgroundColor: 'white', marginLeft: '1rem', marginRight: '1rem'}}>
            <img src="../../src/assets/money_icon.png" alt="Money Icon" style={{height: '8rem', width: '8rem'}} />
        </div>

        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: '4rem', width: '4rem', borderRadius: '1rem', backgroundColor: 'white', marginLeft: '1rem', marginRight: '1rem'}}>
            <img src="../../src/assets/wifi_icon.png" alt="Wifi Icon" style={{height: '8rem', width: '8rem'}} />
        </div>

        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: '4rem', width: '4rem', borderRadius: '1rem', backgroundColor: 'white', marginLeft: '1rem', marginRight: '1rem'}}>
            <img src="../../src/assets/library_icon.png" alt="Library Icon" style={{height: '8rem', width: '8rem'}} />
        </div>

        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: '4rem', width: '4rem', borderRadius: '1rem', backgroundColor: 'white', marginLeft: '1rem', marginRight: '1rem'}}>
            <img src="../../src/assets/Emergency_icon.png" alt="Emergency Icon" style={{height: '8rem', width: '8rem'}} />
        </div> */}

        <DashboardIcon imageIcon={"../../src/assets/food_icon.png"} iconLabel={"Food"}/>
        <DashboardIcon imageIcon={"../../src/assets/bathroom_icon.png"} iconLabel={"Bathroom"}/>
        <DashboardIcon imageIcon={"../../src/assets/trash_icon.png"} iconLabel={"Trash"}/>
        <DashboardIcon imageIcon={"../../src/assets/tourism_icon.png"} iconLabel={"Tourism"}/>
        <DashboardIcon imageIcon={"../../src/assets/money_icon.png"} iconLabel={"Money"}/>
        <DashboardIcon imageIcon={"../../src/assets/wifi_icon.png"} iconLabel={"Wifi"}/>
        <DashboardIcon imageIcon={"../../src/assets/library_icon.png"} iconLabel={"Library"}/>
        <DashboardIcon imageIcon={"../../src/assets/Emergency_icon.png"} iconLabel={"Emergency"}/>
      </div>
    </div>
  );
}

export default Iconbar;