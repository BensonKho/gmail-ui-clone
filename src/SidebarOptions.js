import React from 'react';
import './SidebarOptions.css';

function SidebarOptions({Icon, title, number, selected, label}) {
  return (
    <div className={`sidebarOption ${selected && 'sidebarOption--active'}`} label = {label}>
        <Icon />
        <h5>{title}</h5>
        <p>{number}</p>
    </div>
  )
}

export default SidebarOptions