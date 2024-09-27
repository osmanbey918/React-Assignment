import React from "react";
import { increment } from "../../store/slices"
import { useSelector, useDispatch } from "react-redux"

export default function Add() {
    const count = useSelector((state) => state.add.value);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(increment())}>add</button>
            <p>{count}</p>
        </div>
    )
}