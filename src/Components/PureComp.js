

import React, { useState } from 'react';

const PureComp = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div className='pureComp'>
            <h2>Counter In pure Component</h2>
            <h3>Count: {count}</h3>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default PureComp;

