import React from 'react'
import OutputScreenRow from './outputScreenRow'

function outputScreen(props) {
    return (
        
            <div className="screen">
      <OutputScreenRow value={props.question}/>
      <OutputScreenRow value={props.answer}/>
    </div>
        
    )
}

export default outputScreen
