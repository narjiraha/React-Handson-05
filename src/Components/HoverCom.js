import React from 'react'
import HigherOrder from './HigherOrder'

const HoverCom = ({ count, increament }) => {
    return (
        <div className='hoverComp'>
            <h2>Hover Button Created by Higher Order Component</h2>
            <h3>Hover: {count} times</h3>
            <button onMouseOver={increament}> Hover</button>
        </div>
    )
}
export default HigherOrder(HoverCom)