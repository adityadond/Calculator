import React from 'react'
import './screenRow.css'

function outputScreenRow(props) {
    return (
        
        <div className="screen-row">
        <input type="text" readOnly value = {props.value}/>
      </div>
    )
}

export default outputScreenRow
