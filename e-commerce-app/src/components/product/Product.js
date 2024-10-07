import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts, deleteProduct } from "../../store/productSlice/ProductSlice"
import { fetchCart } from "../../store/cartSlice/cartSlice"

export default function Product() {
  const products = useSelector(store => store.productSlice.products)
  const carts = useSelector(store => store.cartSlice.carts)
  const dispatch = useDispatch();
  // console.log("prdocuts in comp", products)
  const deleteProductbyid = (id) => { dispatch(deleteProduct(id)) }
  const onClickGetProducts = () => {
    dispatch(fetchProducts())
  }
  const onClickGetcart = () => {
    dispatch(fetchCart())
  }
  return (
    <div>
      <button onClick={onClickGetProducts}>Get Products</button>
      <button onClick={onClickGetcart}>Get cart</button>
      <br />
      <div className='container'>
        {products?.map(product => {
          return (
            <div key={product.id} className='block'>
              <div className='img-container'>
                <img style={{ width: 100 }} src={product.image} className='prodimg' alt={product.title} />

              </div>
              <h1 className='ptitle'>{product.title}</h1>
              <p className='pdes'>{product.description}</p>
              <p className='pprice'>{product.price}</p>
              <button onClick={() => deleteProductbyid(product.id)} className='delete'>deleteProduct</button>
            </div>)
        })}
        {carts?.length > 0 ? (
          carts.map(cart => (
            <div key={cart.id}>
              <p>Date: {cart.date}</p>
              <p>User ID: {cart.userId}</p>
              <div>
                <h3>Items:</h3>
                {cart.products.map((product, index) => (
                  <div key={index}>
                    <p>Product ID: {product.productId}</p>
                    <p>Quantity: {product.quantity}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No carts available</p>
        )}


      </div>
    </div>
  )
}