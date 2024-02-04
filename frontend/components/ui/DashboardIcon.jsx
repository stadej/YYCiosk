import React from 'react';
import '../styles/Dashboard.css'

function DashboardIcon(props) {
  return (
    <div style={{ backgroundColor: '#C8102E', height: '12rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: '4rem', width: '4rem', borderRadius: '1rem', backgroundColor: 'white', marginLeft: '4rem', marginRight: '4rem'}}>
            <div>
              <img  src={props?.imageIcon} onClick={props.handleClick} id={props?.iconLabel} alt={props?.iconLabel + ' Icon'} style={{height: '8rem', width: '8rem'}} />
              <span style={{fontWeight: '600', color: 'white', fontFamily: 'sans-serif', fontSize: '1.25rem'}}>{props?.iconLabel}</span>
            </div>
        </div>
    </div>
  );
}

export default DashboardIcon;