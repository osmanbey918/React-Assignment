import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts, deleteProduct } from "../../store/productSlice/ProductSlice"
import Cart from '../cart/Cart';
import { fetchCart, addtocart } from "../../store/cartSlice/cartSlice"

export default function Product() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchProducts()) }, [])

  const products = useSelector(store => store.productSlice.products)
  // const deleteProductbyid = (id) => { dispatch(deleteProduct(id)) }
  // const onClickGetcart = () => {
  //   dispatch(fetchCart())
  // }
  const addCart = (id, title, price, image) => {
    dispatch(addtocart({ id, title, price, image }))
  }
  // const obj = [{
  //   id: 1,
  //   title: 'cap',
  //   price: 990
  // }]
  return (
    <div>
      {/* <button onClick={onClickGetProducts}>Get Products</button> */}
      {/* <button onClick={onClickGetcart}>Get cart</button> */}
      <br />
      <div>

      </div>
      <div className='container'>
        {products?.map(product => {
          return (
            <div key={product.id} className='block'>
              <div className='img-container'>
                <img style={{ width: 100 }} src={product.image} className='prodimg' alt={product.title} />

              </div>
              <h1 className='ptitle'>{product.title}</h1>
              <p className='pdes'>{product.description}</p>
              <div className='priceoff'>
                <p className='dis'>33%off</p>
                <p className='pprice'>{product.price}$</p>
              </div>
              {/* <button onClick={() => deleteProductbyid(product.id)} className='delete'>deleteProduct</button> */}
              <button onClick={() => addCart(product.id, product.title, product.price, product.image)} className='cart'>Add to cart 🛒</button>
            </div>)
        })}


        <br /><br />
        <Cart />


      </div>
    </div>
  )
}