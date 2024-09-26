import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../../store/slices/reducers';

const Counter = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => state.data.value);

    const onAdd = () => {
        dispatch(increment());
    };
    const onMinus = () => {
        dispatch(decrement());
    };
    const onReset = () => {
        dispatch(reset())
    }

    return (
        <div>

            <div className="counter-app">
                <div className="counter-display">
                    <p className='counter-text'>Redux - Counter</p>
                    <hr/>
                    <p className="counter-value">{data}</p>
                </div>
                <div className="counter-buttons">
                    <button className="counter-btn increment-btn" onClick={() => onAdd()}>Increment</button>
                    <button className="counter-btn decrement-btn" onClick={() => onMinus()}>Decrement</button>
                    <button className="counter-btn reset-btn" onClick={() => onReset()}>Reset</button>
                </div>
            </div>


        </div>
    );
};

export default Counter;
