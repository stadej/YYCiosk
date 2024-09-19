import React from 'react';
import '../styles/Dashboard.css'

function DashboardIcon(props) {
  return (
    <div style={{ backgroundColor: '#C8102E', height: '12rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: '8rem', width: '8rem', borderRadius: '1rem', backgroundColor: 'white', marginLeft: '2rem', marginRight: '2rem'}}>
          <img  src={props?.imageIcon} onClick={props.handleClick} id={props?.iconLabel} alt={props?.iconLabel + ' Icon'} style={{height: '8rem', width: '8rem'}} />
        </div>
        <span style={{fontWeight: '600', color: 'white', fontFamily: 'sans-serif', fontSize: '1.25rem'}}>{props?.iconLabel}</span>
    </div>
  );
}

export default DashboardIcon;