import React from 'react'
import HigherOrder from './HigherOrder'

const CounterClick = ({ count, increament }) => {
    return (
        <div className='counter'>
            <h2>Counter Button created using Higher oredr component</h2>
            <h3>Count: {count} Times</h3>
            <button onClick={increament}>Increament</button>
        </div>
    )
}
export default HigherOrder(CounterClick)