import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from "../../store/productSlice/ProductSlice"
import { deleteProduct } from "../../store/productSlice/ProductSlice"
export default function Product() {
  const products = useSelector(store => store.productSlice.products)
  const dispatch = useDispatch();
  console.log("prdocuts in comp", products)
  const deleteProductbyid = (id) => { dispatch(deleteProduct(id)) }
  const onClickGetProducts = () => {
    dispatch(fetchProducts())
  }
  return (
    <div>
      <button onClick={onClickGetProducts}>Get Products</button>
      <br />
      <div className='container'>
        {products?.map(product => {
          return (
            <div key={product.id} className='block'>
              <h1 className='ptitle'>{product.title}</h1>
              <img style={{ width: 100 }} src={product.image} alt={product.title} />
              <p className='pdes'>{product.description}</p>
              <p className='pprice'>{product.price}</p>
              <p>{product.category}</p>
              <button onClick={() => deleteProductbyid(product.id)} className='delete'>deleteProduct</button>
            </div>)
        })}
      </div>
    </div>
  )
}