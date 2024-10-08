import React from "react"
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { deleteCart } from "../../store/cartSlice/cartSlice";



export default function Cart() {

    const [value, setValue] = useState(1);
    const dispatch = useDispatch();
    const deleteCartbyid = (id) => { dispatch(deleteCart(id)) }
    const carts = useSelector(store => store.cartSlice.carts)

    return (
        <div className="cart-container">
            <h1>My Cart</h1>
            <div className='container'>
                {carts.length > 0 ? (
                    carts.map((item, index) => (
                        <div key={index} className='block'>
                            <div className='img-container'>
                                <img style={{ width: 100 }} src={item.image} className='prodimg' />
                            </div>
                            <h2 className='ptitle'>{item.title}</h2>
                            <p className='pprice'>Price: ${item.price}</p>
                            <div className="priceoff">
                                <label className="dis">Quantity: </label>
                                <input type="number" min={1} max={5} value={value} onChange={(e) => setValue(e.target.value)} className="input" />
                            </div>
                            <div className="priceoff">
                                <button onClick={() => deleteCartbyid(item.id)} className='delete'>🗑️</button>
                                <button className='cart'>Buy Now</button>
                            </div>

                        </div>
                    ))
                ) : (
                    <p>Your cart is empty</p>
                )}
            </div>
        </div>
    )
}