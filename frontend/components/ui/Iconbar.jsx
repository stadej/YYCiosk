import React from 'react';

function Iconbar() {
  return (
    <div style={{ width: '100%' }}>
      {/* div that has background color red, and holds icon divs */}
      <div style={{ backgroundColor: '#C8102E', height: '6rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: '4rem', width: '4rem', borderRadius: '1rem', backgroundColor: 'white', marginLeft: '1rem', marginRight: '1rem'}}>
            <img src="../../src/assets/food_icon.png" alt="Food Icon" style={{height: '4rem', width: '4rem'}} />
        </div>

        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: '4rem', width: '4rem', borderRadius: '1rem', backgroundColor: 'white', marginLeft: '1rem', marginRight: '1rem'}}>
            <img src="../../src/assets/bathroom_icon.png" alt="Bathroom Icon" style={{height: '4rem', width: '4rem'}} />
        </div>

        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: '4rem', width: '4rem', borderRadius: '1rem', backgroundColor: 'white', marginLeft: '1rem', marginRight: '1rem'}}>
            <img src="../../src/assets/trash_icon.png" alt="Trash Icon" style={{height: '4rem', width: '4rem'}} />
        </div>

        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: '4rem', width: '4rem', borderRadius: '1rem', backgroundColor: 'white', marginLeft: '1rem', marginRight: '1rem'}}>
            <img src="../../src/assets/tourism_icon.png" alt="Tourism Icon" style={{height: '4rem', width: '4rem'}} />
        </div>

        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: '4rem', width: '4rem', borderRadius: '1rem', backgroundColor: 'white', marginLeft: '1rem', marginRight: '1rem'}}>
            <img src="../../src/assets/money_icon.png" alt="Money Icon" style={{height: '4rem', width: '4rem'}} />
        </div>

        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: '4rem', width: '4rem', borderRadius: '1rem', backgroundColor: 'white', marginLeft: '1rem', marginRight: '1rem'}}>
            <img src="../../src/assets/wifi_icon.png" alt="Wifi Icon" style={{height: '4rem', width: '4rem'}} />
        </div>

        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: '4rem', width: '4rem', borderRadius: '1rem', backgroundColor: 'white', marginLeft: '1rem', marginRight: '1rem'}}>
            <img src="../../src/assets/library_icon.png" alt="Library Icon" style={{height: '4rem', width: '4rem'}} />
        </div>

        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: '4rem', width: '4rem', borderRadius: '1rem', backgroundColor: 'white', marginLeft: '1rem', marginRight: '1rem'}}>
            <img src="../../src/assets/Emergency_icon.png" alt="Emergency Icon" style={{height: '4rem', width: '4rem'}} />
        </div>

      </div>
    </div>
  );
}

export default Iconbar;