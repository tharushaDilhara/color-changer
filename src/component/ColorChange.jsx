import React, { useState } from 'react'
import './ColorChange.css'
const ColorChange = () => {
    const[color,setColor] = useState('white');

  return (
    <div className='c-container'>
        <div className="container">
            <div><h1>Color Generater</h1></div>
            <div className="color-box" style={{backgroundColor:`${color}`}} ></div>
            <div className="input">
                <input type="text" onChange={(e)=>{setColor(e.target.value);}} placeholder='type any color here...' />
            </div>
        </div>
    </div>
  )
}

export default ColorChange
