// import React, { Component } from 'react'

// class PureComp extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             count: 0
//         }
//     }

//     increament() {
//         // this.state.count = this.state.count + 1;
//         this.setState({
//             count: this.state.count + 1
//         })
//     }


//     render() {
//         return (
//             <div className='pureComp'>
//                 <h2>Counter In pure Component</h2>
//                 <h3>Count: {this.state.count}</h3>
//                 <button onClick={() => this.increament()}>Increament</button>
//             </div>
//         )
//     }
// }

// export default PureComp;

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

