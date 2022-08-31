import React from 'react'
import './Section.css';

function Section({Icon, title, color, selected}) {
  return (
    <div className={`section ${selected && "section--selected"}`}
    style={{
        borderBottom: `3px solid ${selected && color}`,
        color: `${selected && color}`,
    }}>
        <Icon/>
        <h5>{title}</h5>
    </div>
  )
}

export default Section