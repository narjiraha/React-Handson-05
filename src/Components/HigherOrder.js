import React, { useState } from 'react'

const HigherOrder = (OriginalComp) => {
    const newComp = () => {

        const [count, setCount] = useState(0);

        const increament = () => {
            setCount(count + 1);
        }
        return <OriginalComp count={count} increament={increament} />
    }

    return newComp;
}

export default HigherOrder