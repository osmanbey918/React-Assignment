import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../store/slice1/slice1";
export default function Counter() {
    const val = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    let handle = () => {
        dispatch(increment())
    }
    return (
        <div>
            <p>{val}</p>
            <button onClick={handle}>add</button>
        </div>
    )
}