import React from 'react';
import '../styles/Dashboard.css'

function DashboardIcon(props) {
  return (
    <div style={{ backgroundColor: '#C8102E', height: '12rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: '4rem', width: '4rem', borderRadius: '1rem', backgroundColor: 'white', marginLeft: '4rem', marginRight: '4rem'}}>
                <img  src={props?.imageIcon} onClick={props.handleClick} id={props?.iconLabel} alt="Food Icon" style={{height: '8rem', width: '8rem'}} />
            </div>
    </div>
  );
}

export default DashboardIcon;