import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
   
    render() { 
        const { counters,onReset,onDelete,onIncrement,onDecrement } = this.props
        return (
        <React.Fragment>
            <button className="btn btn-primary btn-sm m-2" onClick={onReset}>Reset</button>
            { counters.map(counter => 
                <Counter key={counter.id} onDelete={onDelete} handleDecrement={onDecrement} handleIncrement={onIncrement} counter={counter} />
            ) }
        </React.Fragment>
        );
    }
}
 
export default Counters;