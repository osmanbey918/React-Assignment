// DeleteItem.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../store/slices/reducers'; // Import your action
import initialData from '../../constant/data';

const YourComponent = () => {
    const dispatch = useDispatch();
    
    // Use useSelector to fetch data from the Redux store
    const data = useSelector((state) => state.data.data);  // Ensure 'data' is correctly mapped

    // If data is not loaded or empty, show a fallback message
    if (!data || data.length === 0) {
        return <p>No data available</p>;
    }

    const onClickHandler = (id) => {
        dispatch(removeItem(id));  // Dispatch the remove action
    };

    return (
        <div>
            {data.map(item => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.id}</p>
                    <button onClick={() => onClickHandler(item.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default YourComponent;
